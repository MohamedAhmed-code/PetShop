// Header topnav "Responsive" 
function myFunction() {
  var nav = document.getElementById("myTopnav");
  var icon = document.getElementById("menuIcon");

  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    icon.innerHTML = "☰";
    icon.classList.remove("open");
  } else {
    nav.classList.add("responsive");
    icon.innerHTML = "✖";
    icon.classList.add("open");
  }
}

// يقفل القائمة بعد ما تضغط على أي لينك
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    var nav = document.getElementById("myTopnav");
    if(nav.classList.contains("responsive")) {
      nav.classList.remove("responsive");
    }
  });
});

// Sticky Header
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// Scroll Spy
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".topnav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Smooth Scroll
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count globally
function updateCartCount() {
  const cartCountElements = document.querySelectorAll(".cart-count");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  cartCountElements.forEach(element => {
    element.textContent = totalItems;
  });
  
  // Also update localStorage to keep data consistent
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart with notification
function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  
  // Show notification
  showNotification("Product added to cart!");
}

// Show notification
function showNotification(message, type = "success") {
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => {
    notification.remove();
  });
  
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : '#17a2b8'};
    color: white;
    padding: 12px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `;
  
  const notificationContent = notification.querySelector(".notification-content");
  notificationContent.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-in";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  loadCartItems();
  showNotification("Product removed from cart!", "info");
}

// Update quantity
function updateQuantity(productId, quantity) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
  }
}

// Clear cart
function clearCart() {
  if (cart.length === 0) {
    showNotification("Your cart is already empty!", "info");
    return;
  }
  
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
    showNotification("Cart cleared successfully!", "info");
  }
}

// Generate star rating HTML
function generateStars(rating) {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="fas fa-star${i <= rating ? "" : "-o"}" style="color: #FFA500;"></i>`
  }
  return stars
}

// Load products
function loadProducts(category = "all") {
  const productsGrid = document.getElementById("productsGrid")
  if (!productsGrid) return

  const filteredProducts = category === "all" ? products : products.filter((p) => p.category === category)

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
      <div class="product-card" data-category="${product.category}">
                  <img src="${product.image}" alt="${product.name}" class="product-image">

            <div class="content-prd">

                  <div class="content-cart">
                      <h3 class="product-name">${product.name}</h3>

                        <div class="price-rate">
                            <div class="product-price">$${product.price}</div>
                            <div class="product-rating">
                                <div class="stars">${generateStars(product.rating)}</div>
                            </div>
                        </div>
                  </div>

                  <div class="det-btn">
                      <button class="btn-secondary" onclick="viewProduct(${product.id})">Details</button>
                      <button class="btn-primary-product" onclick="addToCart(${product.id})" style="margin-top: 0.5rem;">Add to Cart</button>
                  </div>
            </div>
      </div>
    `,
    )
    .join("")
}

// View product details
function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`
}

// Load product details page
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))
  const product = products.find((p) => p.id === productId)

  if (!product) {
    document.getElementById("productDetailContent").innerHTML = "<p>Product not found.</p>"
    return
  }

  document.getElementById("productDetailContent").innerHTML = `
        <div class="product-detail-images">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="price">$${product.price}</div>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
            </div>
            <div class="description">${product.description}</div>
            <div class="quantity-selector">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" min="1" max="10">
            </div>
            <button class="btn-primary" onclick="addToCartFromDetails(${product.id})">Add to Cart</button>
        </div>
    `

  const otherProducts = products.filter((p) => p.id !== productId).slice(0, 4)
  const otherProductsGrid = document.getElementById("otherProductsGrid")
  if (otherProductsGrid) {
    otherProductsGrid.innerHTML = otherProducts
      .map(
        (product) => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                </div>
                <button class="btn-secondary" onclick="viewProduct(${product.id})">View Details</button>
            </div>
        `,
      )
      .join("")
  }
}

// Add to cart from product details
function addToCartFromDetails(productId) {
  const quantity = Number.parseInt(document.getElementById("quantity").value) || 1;
  addToCart(productId, quantity);
}

// Load cart items with new design
function loadCartItems() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-message">
        <h2>Your Cart is Empty</h2>
        <p>Add some products to your cart to get started!</p>
        <a href="index.html" class="btn-primary">Continue Shopping</a>
      </div>
    `;
    updateCartSummary();
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const categoryNames = {
        'dogs': 'DOGS',
        'cats': 'CATS',
        'birds': 'BIRDS',
        'fish': 'FISH',
        'rabbits': 'RABBITS'
      };
      
      const categoryName = categoryNames[item.category] || item.category.toUpperCase();
      
      return `
        <div class="cart-item-card">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <h3 class="cart-item-name">${item.name}</h3>
            <span class="cart-item-category">${categoryName}</span>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            
            <div class="cart-item-controls">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                <i class="fas fa-minus"></i>
              </button>
              <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, parseInt(this.value) || 1)">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                <i class="fas fa-plus"></i>
              </button>
              <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i> Remove
              </button>
            </div>
            
            <div class="cart-item-subtotal">
              <span>Subtotal:</span>
              <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  updateCartSummary();
}

// Update cart summary with tax calculation
function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10; 
  const total = subtotal + shipping;
  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotalEl = document.getElementById("subtotal");
  const shippingEl = document.getElementById("shipping");
  const totalEl = document.getElementById("total");
  const itemsCountEl = document.getElementById("itemsCount");

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  if (itemsCountEl) itemsCountEl.textContent = itemsCount;

  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutShipping = document.getElementById("checkoutShipping");
  const checkoutTotal = document.getElementById("checkoutTotal");

  if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (checkoutShipping) checkoutShipping.textContent = `$${shipping.toFixed(2)}`;
  if (checkoutTotal) checkoutTotal.textContent = `$${total.toFixed(2)}`;
}

// Go to checkout
function goToCheckout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!", "info");
    return;
  }
  window.location.href = "checkout.html";
}

// Load checkout items
function loadCheckoutItems() {
  const orderItems = document.getElementById("orderItems");
  if (!orderItems) return;

  orderItems.innerHTML = cart
    .map(
      (item) => `
        <div class="order-item">
            <div>
                <strong>${item.name}</strong><br>
                <small>Quantity: ${item.quantity}</small>
            </div>
            <div>$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `
    )
    .join("");

  updateCartSummary();
}

// Handle checkout form submission
function handleCheckout(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const customerInfo = {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    notes: formData.get("notes") || "No additional notes",
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  let message = `🛒 *New Order from Pet Store*\n\n`;
  message += `👤 *Customer Information:*\n`;
  message += `Name: ${customerInfo.fullName}\n`;
  message += `Phone: ${customerInfo.phone}\n`;
  message += `Address: ${customerInfo.address}\n`;
  message += `Notes: ${customerInfo.notes}\n\n`;

  message += `📦 *Order Details:*\n`;
  cart.forEach((item) => {
    message += `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
  });

  message += `\n💰 *Order Summary:*\n`;
  message += `Subtotal: $${subtotal.toFixed(2)}\n`;
  message += `Shipping: $${shipping.toFixed(2)}\n`;
  message += `*Total: $${total.toFixed(2)}*\n\n`;
  message += `Thank you for your order! 🐾`;

  const phoneNumber = "201271120594";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  alert("Order sent via WhatsApp! Thank you for your purchase.");
  window.location.href = "index.html";
}

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Buy now function - direct to checkout
function buyNow(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  cart = [{
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    category: product.category,
    quantity: 1
  }];
  
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  
  window.location.href = "checkout.html";
}

// تحميل المنتجات بالتصميم الجديد
function loadNewProducts(category = "all") {
  const productsGrid = document.getElementById("newProductsGrid");
  if (!productsGrid) return;

  const filteredProducts = category === "all" ? products : products.filter((p) => p.category === category);

  productsGrid.innerHTML = filteredProducts
    .map((product) => {
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= product.rating) {
          starsHtml += `<svg class="new-rating-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        } else {
          starsHtml += `<svg class="new-rating-star empty" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        }
      }

      const categoryNames = {
        'dogs': 'dogs',
        'cats': 'cats',
        'birds': 'birds',
        'fish': 'fish',
        'rabbits': 'rabbits'
      };
      const categoryName = categoryNames[product.category] || product.category;

      return `
        <div class="new-product-card" data-category="${product.category}">
          <div class="new-product-image">
            <img src="${product.image}" alt="${product.name}">
            <span class="new-category-badge">${categoryName}</span>
          </div>
          <div class="new-product-content">
            <h3 class="new-product-title">${product.name}</h3>
            <div class="new-product-rating">
              ${starsHtml}
            </div>
            <div class="new-price-container">
              <span class="new-current-price">$${product.price.toFixed(2)}</span>
              <span class="new-old-price">$${product.oldPrice.toFixed(2)}</span>
            </div>
            <div class="new-product-buttons">
              <a href="product.html?id=${product.id}" class="new-btn-details">Details</a>
              <button class="new-btn-buy" onclick="buyNow(${product.id})">Buy Now</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// تصفية المنتجات
function filterProducts(category) {
  document.querySelectorAll('.new-filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === category) {
      btn.classList.add('active');
    }
  });
  
  loadNewProducts(category);
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  const path = window.location.pathname;

  if (path.includes("index.html") || path === "/") {
    loadNewProducts();
    
    document.querySelectorAll('.new-filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        filterProducts(this.dataset.filter);
      });
    });
  } else if (path.includes("product.html")) {
    loadProductDetails();
  } else if (path.includes("cart.html")) {
    loadCartItems();
  } else if (path.includes("checkout.html")) {
    loadCheckoutItems();

    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", handleCheckout);
    }
  }
});

// Add CSS animations for notifications
if (!document.querySelector('#notification-styles')) {
  const style = document.createElement('style');
  style.id = 'notification-styles';
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    category: "dogs",
    price: 29.99,
    oldPrice: 39.99,
    image: "imgs/pet12.png",
    rating: 5,
    description: "High-quality dog food with premium ingredients for optimal nutrition and health."
  },
  {
    id: 2,
    name: "Cat Nutrition Plus",
    category: "cats",
    price: 24.99,
    oldPrice: 34.99,
    image: "imgs/pet9.png",
    rating: 4,
    description: "Nutritious cat food formula designed for adult cats with sensitive stomachs."
  },
  {
    id: 3,
    name: "Bird Seed Mix",
    category: "birds",
    price: 19.99,
    oldPrice: 29.99,
    image: "imgs/pet10.png",
    rating: 5,
    description: "Nutritious bird seed mix with sunflower seeds, millet, and essential vitamins."
  },
  {
    id: 4,
    name: "Fish Flakes",
    category: "fish",
    price: 14.99,
    oldPrice: 19.99,
    image: "imgs/pet11.png",
    rating: 4,
    description: "High-quality fish flakes with color enhancers and immune system support."
  },
  {
    id: 5,
    name: "Rabbit Pellets",
    category: "rabbits",
    price: 22.99,
    oldPrice: 32.99,
    image: "imgs/pet12.png",
    rating: 5,
    description: "Premium rabbit pellets with timothy hay and essential nutrients for digestive health."
  },
  {
    id: 6,
    name: "Dog Treats",
    category: "dogs",
    price: 16.99,
    oldPrice: 21.99,
    image: "imgs/pet9.png",
    rating: 4,
    description: "Delicious and healthy treats for your furry friend, made with natural ingredients."
  },
  {
    id: 7,
    name: "Cat Treats",
    category: "cats",
    price: 12.99,
    oldPrice: 17.99,
    image: "imgs/pet10.png",
    rating: 5,
    description: "Irresistible treats for your feline companion, with added vitamins and minerals."
  },
  {
    id: 8,
    name: "Bird Vitamins",
    category: "birds",
    price: 18.99,
    oldPrice: 23.99,
    image: "imgs/pet11.png",
    rating: 4,
    description: "Essential vitamin supplement for birds to support overall health and feather quality."
  },
  {
    id: 9,
    name: "Premium Cat Food",
    category: "cats",
    price: 29.99,
    oldPrice: 39.99,
    image: "imgs/pet12.png",
    rating: 5,
    description: "Nutritious cat food formula designed for adult cats with sensitive stomachs."
  },
  {
    id: 10,
    name: "Fish Flakes",
    category: "fish",
    price: 14.99,
    oldPrice: 19.99,
    image: "imgs/pet11.png",
    rating: 4,
    description: "High-quality fish flakes with color enhancers and immune system support."
  },
  {
    id: 11,
    name: "Rabbit Pellets",
    category: "rabbits",
    price: 22.99,
    oldPrice: 32.99,
    image: "imgs/pet9.png",
    rating: 5,
    description: "Premium rabbit pellets with timothy hay and essential nutrients for digestive health."
  }
];
