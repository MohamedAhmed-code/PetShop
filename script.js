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

// Close menu when clicking on any link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    var nav = document.getElementById("myTopnav");
    var icon = document.getElementById("menuIcon");
    if(nav.classList.contains("responsive")) {
      nav.classList.remove("responsive");
      icon.innerHTML = "☰";
      icon.classList.remove("open");
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  var nav = document.getElementById("myTopnav");
  var icon = document.getElementById("menuIcon");

  // لو المنيو مفتوحة
  if (nav.classList.contains("responsive")) {
    // لو الضغط مش على المنيو ولا على زرار الايكونة
    if (!nav.contains(event.target) && event.target !== icon && !event.target.closest('.language-switcher')) {
      nav.classList.remove("responsive");
      icon.innerHTML = "☰";
      icon.classList.remove("open");
    }
  }
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
    if (link.getAttribute("href") && link.getAttribute("href").startsWith("#") && link.getAttribute("href").substring(1) === current) {
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

// Language Translation
const translations = {
  en: {
    // General
    "Home": "Home",
    "Category": "Category",
    "About US": "About US",
    "Shop": "Shop",
    "Shopping Cart": "Shopping Cart",
    "Our Category": "Our Category",
    "Our Shop": "Our Shop",
    "MOHAMED AHMED": "MOHAMED AHMED",
    "WEBSITE DESIGNER": "WEBSITE DESIGNER",
    "Our Sections": "Our Sections",
    "Remove": "Remove",
    "Items": "Items",
    "Shipping:": "Shipping:",
    "Total:": "Total:",
    "Proceed to Checkout": "Proceed to Checkout",
    "Continue Shopping": "Continue Shopping",
    "Checkout": "Checkout",
    "Customer Information": "Customer Information",
    "Full Name *": "Full Name *",
    "Phone Number *": "Phone Number *",
    "Governorate": "Governorate",
    "-- Select Governorate --": "-- Select Governorate --",
    "Address *": "Address *",
    "Notes (Optional)": "Notes (Optional)",
    "Complete Order": "Complete Order",
    "Order Summary": "Order Summary",
    "Subtotal:": "Subtotal:",
    "Product not found.": "Product not found.",
    "Quantity:": "Quantity:",
    "Add to Cart": "Add to Cart",
    "Other Products": "Other Products",
    "View Details": "View Details",
    "Your Cart is Empty": "Your Cart is Empty",
    "Add some products to your cart to get started!": "Add some products to your cart to get started!",
    "Product added to cart!": "Product added to cart!",
    "Product removed from cart!": "Product removed from cart!",
    "Your cart is already empty!": "Your cart is already empty!",
    "Are you sure you want to clear your cart?": "Are you sure you want to clear your cart?",
    "Cart cleared successfully!": "Cart cleared successfully!",
    "Your cart is empty!": "Your cart is empty!",
    "Please select a governorate before completing the order": "Please select a governorate before completing the order",
    "Order sent via WhatsApp! Thank you for your purchase.": "Order sent via WhatsApp! Thank you for your purchase.",
    "Details": "Details",
    "Buy Now": "Buy Now",
    "ALL": "ALL",
    "CATS": "CATS",
    "DOGS": "DOGS",
    "BIRDS": "BIRDS",
    "FISH": "FISH",
    "ACCESSORIES": "ACCESSORIES",
    "BEST": "BEST",
    "FOOD": "FOOD",
    "FOR YOUR ": "FOR YOUR ",
    "PET": "PET",
    "Everything that your pet were wants with best quality and best price": "Everything that your pet were wants with best quality and best price",
    "Shop now": "Shop now",
    "Pet Store": "Pet Store",
    "Give your furry friend they're looking for by choosing the right food for your pet. This way, they'll immediately see your brand offering and they can one-click-listen.": "Give your furry friend they're looking for by choosing the right food for your pet. This way, they'll immediately see your brand offering and they can one-click-listen.",
    "OUR PRODUCT": "OUR PRODUCT",
    "THE SHOP": "THE SHOP",
    "ON CAT FOODS": "ON CAT FOODS",
    "ON DOG FOODS": "ON DOG FOODS",
    "SHOP NOW": "SHOP NOW",
    "Cairo": "Cairo",
    "Giza": "Giza",
    "Alexandria": "Alexandria",
    "Sharqia": "Sharqia",
    "Gharbia": "Gharbia",
    "Dakahlia": "Dakahlia",
    "Qalyubia": "Qalyubia",
    "Monufia": "Monufia",
    "Kafr El Sheikh": "Kafr El Sheikh",
    "Fayoum": "Fayoum",
    "Beni Suef": "Beni Suef",
    "Minya": "Minya",
    "Assiut": "Assiut",
    "Sohag": "Sohag",
    "Qena": "Qena",
    "Luxor": "Luxor",
    "Aswan": "Aswan",
    "Ismailia": "Ismailia",
    "Suez": "Suez",
    "Port Said": "Port Said",
    "Damietta": "Damietta",
    "Matruh": "Matruh",
    "Red Sea": "Red Sea",
    "New Valley": "New Valley",
    "North Sinai": "North Sinai",
    "South Sinai": "South Sinai",
    "Product Details - Pet Store": "Product Details - Pet Store",
    "Shopping Cart - Pet Store": "Shopping Cart - Pet Store",
    "Checkout - Pet Store": "Checkout - Pet Store",
    "Pet Store - Best Food For Your Pet": "Pet Store - Best Food For Your Pet"
  },
  ar: {
    // General
    "Home": "الرئيسية",
    "Category": "الفئات",
    "About US": "من نحن",
    "Shop": "المتجر",
    "Shopping Cart": "عربة التسوق",
    "Our Category": "فئاتنا",
    "Our Shop": "متجرنا",
    "MOHAMED AHMED": "محمد أحمد",
    "WEBSITE DESIGNER": "مصمم مواقع",
    "Our Sections": "أقسامنا",
    "Remove": "حذف",
    "Items": "المنتجات",
    "Shipping:": "الشحن:",
    "Total:": "الإجمالي:",
    "Proceed to Checkout": "المتابعة للدفع",
    "Continue Shopping": "متابعة التسوق",
    "Checkout": "الدفع",
    "Customer Information": "معلومات العميل",
    "Full Name *": "الاسم الكامل *",
    "Phone Number *": "رقم الهاتف *",
    "Governorate": "المحافظة",
    "-- Select Governorate --": "-- اختر المحافظة --",
    "Address *": "العنوان *",
    "Notes (Optional)": "ملاحظات (اختياري)",
    "Complete Order": "إتمام الطلب",
    "Order Summary": "ملخص الطلب",
    "Subtotal:": ":المجموع الفرعي",
    "Product not found.": "المنتج غير موجود.",
    "Quantity:": "الكمية:",
    "Add to Cart": "أضف إلى العربة",
    "Other Products": "منتجات أخرى",
    "View Details": "عرض التفاصيل",
    "Your Cart is Empty": "عربة التسوق فارغة",
    "Add some products to your cart to get started!": "أضف بعض المنتجات إلى عربة التسوق للبدء!",
    "Product added to cart!": "تمت إضافة المنتج إلى العربة!",
    "Product removed from cart!": "تمت إزالة المنتج من العربة!",
    "Your cart is already empty!": "عربة التسوق فارغة بالفعل!",
    "Are you sure you want to clear your cart?": "هل أنت متأكد أنك تريد إفراغ عربة التسوق؟",
    "Cart cleared successfully!": "تم إفراغ العربة بنجاح!",
    "Your cart is empty!": "عربة التسوق فارغة!",
    "Please select a governorate before completing the order": "يرجى اختيار المحافظة قبل إكمال الطلب",
    "Order sent via WhatsApp! Thank you for your purchase.": "تم إرسال الطلب عبر الواتساب! شكراً لشرائك.",
    "Details": "التفاصيل",
    "Buy Now": "اشترِ الآن",
    "ALL": "الكل",
    "CATS": "القطط",
    "DOGS": "الكلاب",
    "BIRDS": "الطيور",
    "FISH": "الأسماك",
    "ACCESSORIES": "الإكسسوارات",
    "BEST": "أفضل",
    "FOOD": "طعام",
    "FOR YOUR ": "لحيوانك ",
    "PET": "الأليف",
    "Everything that your pet were wants with best quality and best price": "كل ما يريده حيوانك الأليف بأفضل جودة وأفضل سعر",
    "Shop now": "تسوق الآن",
    "Pet Store": "متجر الحيوانات الأليفة",
    "Give your furry friend they're looking for by choosing the right food for your pet. This way, they'll immediately see your brand offering and they can one-click-listen.": "امنح صديقك الفروي ما يبحث عنه باختيار الطعام المناسب لحيوانك الأليف. بهذه الطريقة، سيرون عرض علامتك التجارية على الفور ويمكنهم الاستماع بنقرة واحدة.",
    "OUR PRODUCT": "منتجاتنا",
    "THE SHOP": "المتجر",
    "ON CAT FOODS": "على أطعمة القطط",
    "ON DOG FOODS": "على أطعمة الكلاب",
    "SHOP NOW": "تسوق الآن",
    "Cairo": "القاهرة",
    "Giza": "الجيزة",
    "Alexandria": "الإسكندرية",
    "Sharqia": "الشرقية",
    "Gharbia": "الغربية",
    "Dakahlia": "الدقهلية",
    "Qalyubia": "القليوبية",
    "Monufia": "المنوفية",
    "Kafr El Sheikh": "كفر الشيخ",
    "Fayoum": "الفيوم",
    "Beni Suef": "بني سويف",
    "Minya": "المنيا",
    "Assiut": "أسيوط",
    "Sohag": "سوهاج",
    "Qena": "قنا",
    "Luxor": "الأقصر",
    "Aswan": "أسوان",
    "Ismailia": "الإسماعيلية",
    "Suez": "السويس",
    "Port Said": "بورسعيد",
    "Damietta": "دمياط",
    "Matruh": "مطروح",
    "Red Sea": "البحر الأحمر",
    "New Valley": "الوادي الجديد",
    "North Sinai": "شمال سيناء",
    "South Sinai": "جنوب سيناء",
    "Product Details - Pet Store": "تفاصيل المنتج - متجر الحيوانات الأليفة",
    "Shopping Cart - Pet Store": "عربة التسوق - متجر الحيوانات الأليفة",
    "Checkout - Pet Store": "الدفع - متجر الحيوانات الأليفة",
    "Pet Store - Best Food For Your Pet": "متجر الحيوانات الأليفة - أفضل طعام لحيوانك الأليف"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update text content
  document.querySelectorAll('[data-en]').forEach(element => {
    const enText = element.getAttribute('data-en');
    const arText = element.getAttribute('data-ar');
    element.innerHTML = lang === 'ar' ? arText : enText;
  });

  // Update title
  const titleElement = document.querySelector('title');
  if (titleElement) {
    const enTitle = titleElement.getAttribute('data-en');
    const arTitle = titleElement.getAttribute('data-ar');
    titleElement.textContent = lang === 'ar' ? arTitle : enTitle;
  }

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(button => {
    if (button.dataset.lang === lang) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  // Re-render dynamic content if necessary
  if (document.getElementById('cartItemsContainer')) {
    loadCartItems();
  }
  if (document.getElementById('orderItems')) {
    loadCheckoutItems();
  }
  if (document.getElementById('newProductsGrid')) {
    loadNewProducts(document.querySelector('.new-filter-btn.active')?.dataset.filter || 'all');
  }
  if (document.getElementById('productDetailContent')) {
    loadProductDetails();
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  // Add event listeners for language buttons
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
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
      name_ar: product.name_ar, // Add Arabic name
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  
  // Show notification
  showNotification(translations[currentLang]["Product added to cart!"]);
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
    ${currentLang === 'ar' ? 'left: 20px;' : 'right: 20px;'}
    background: ${type === 'success' ? '#28a745' : '#17a2b8'};
    color: white;
    padding: 12px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: ${currentLang === 'ar' ? 'slideInLeft' : 'slideInRight'} 0.3s ease-out;
  `;
  
  const notificationContent = notification.querySelector(".notification-content");
  notificationContent.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = `${currentLang === 'ar' ? 'slideOutLeft' : 'slideOutRight'} 0.3s ease-in`;
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
  showNotification(translations[currentLang]["Product removed from cart!"], "info");
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
    showNotification(translations[currentLang]["Your cart is already empty!"], "info");
    return;
  }
  
  if (confirm(translations[currentLang]["Are you sure you want to clear your cart?"])) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
    showNotification(translations[currentLang]["Cart cleared successfully!"], "info");
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
    document.getElementById("productDetailContent").innerHTML = `<p>${translations[currentLang]["Product not found."]}</p>`
    return
  }

  const productName = currentLang === 'ar' ? product.name_ar : product.name;
  const productDescription = currentLang === 'ar' ? product.description_ar : product.description;

  document.getElementById("productDetailContent").innerHTML = `
        <div class="product-detail-images">
            <img src="${product.image}" alt="${productName}">
        </div>
        <div class="product-detail-info">
            <h1>${productName}</h1>
            <div class="price">$${product.price}</div>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
            </div>
            <div class="description">${productDescription}</div>
            <div class="quantity-selector">
                <label for="quantity">${translations[currentLang]["Quantity:"]}</label>
                <input type="number" id="quantity" value="1" min="1" max="10">
            </div>
            <button class="btn-primary" onclick="addToCartFromDetails(${product.id})">${translations[currentLang]["Add to Cart"]}</button>
        </div>
    `

  const otherProducts = products.filter((p) => p.id !== productId).slice(0, 4)
  const otherProductsGrid = document.getElementById("otherProductsGrid")
  if (otherProductsGrid) {
    otherProductsGrid.innerHTML = otherProducts
      .map(
        (product) => `
            <div class="product-card">
                <img src="${product.image}" alt="${currentLang === 'ar' ? product.name_ar : product.name}" class="product-image">
                <h3 class="product-name">${currentLang === 'ar' ? product.name_ar : product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                </div>
                <button class="btn-secondary" onclick="viewProduct(${product.id})">${translations[currentLang]["View Details"]}</button>
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
        <h2>${translations[currentLang]["Your Cart is Empty"]}</h2>
        <p>${translations[currentLang]["Add some products to your cart to get started!"]}</p>
        <a href="index.html" class="btn-primary">${translations[currentLang]["Continue Shopping"]}</a>
      </div>
    `;
    updateCartSummary();
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const categoryNames = {
        'dogs': translations[currentLang]['DOGS'],
        'cats': translations[currentLang]['CATS'],
        'birds': translations[currentLang]['BIRDS'],
        'fish': translations[currentLang]['FISH'],
        'accessories': translations[currentLang]['ACCESSORIES'] // Updated category name
      };
      
      const categoryName = categoryNames[item.category] || item.category.toUpperCase();
      const itemName = currentLang === 'ar' ? item.name_ar : item.name; // Use translated name

      return `
        <div class="cart-item-card" >
          <img src="${item.image}" alt="${itemName}" class="cart-item-image">
          <div class="cart-item-details">
            <h3 class="cart-item-name">${itemName}</h3>
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
                <i class="fas fa-trash"></i> ${translations[currentLang]["Remove"]}
              </button>
            </div>
            
            <div class="cart-item-subtotal subtotal-container">
              <span>${translations[currentLang]["Subtotal:"]}</span>
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
    showNotification(translations[currentLang]["Your cart is empty!"], "info");
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
                <strong>${currentLang === 'ar' ? item.name_ar : item.name}</strong><br>
                <small>${translations[currentLang]["Quantity:"]} ${item.quantity}</small>
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

  // التحقق من اختيار المحافظة
  const citySelect = document.getElementById("city");
  if (!citySelect.value) {
    alert(translations[currentLang]["Please select a governorate before completing the order"]);
    citySelect.focus();
    return;
  }

  const formData = new FormData(event.target);
  const customerInfo = {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    notes: formData.get("notes") || "No additional notes",
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  // خريطة أسماء المحافظات العربية
  const governorates = {
    "cairo": translations[currentLang]["Cairo"],
    "giza": translations[currentLang]["Giza"],
    "alexandria": translations[currentLang]["Alexandria"],
    "sharqia": translations[currentLang]["Sharqia"],
    "gharbia": translations[currentLang]["Gharbia"],
    "dakahlia": translations[currentLang]["Dakahlia"],
    "qalyubia": translations[currentLang]["Qalyubia"],
    "monufia": translations[currentLang]["Monufia"],
    "kafr_elsheikh": translations[currentLang]["Kafr El Sheikh"],
    "fayoum": translations[currentLang]["Fayoum"],
    "beni_suef": translations[currentLang]["Beni Suef"],
    "minya": translations[currentLang]["Minya"],
    "assiut": translations[currentLang]["Assiut"],
    "sohag": translations[currentLang]["Sohag"],
    "qena": translations[currentLang]["Qena"],
    "luxor": translations[currentLang]["Luxor"],
    "aswan": translations[currentLang]["Aswan"],
    "ismailia": translations[currentLang]["Ismailia"],
    "suez": translations[currentLang]["Suez"],
    "port_said": translations[currentLang]["Port Said"],
    "damietta": translations[currentLang]["Damietta"],
    "matruh": translations[currentLang]["Matruh"],
    "red_sea": translations[currentLang]["Red Sea"],
    "new_valley": translations[currentLang]["New Valley"],
    "north_sinai": translations[currentLang]["North Sinai"],
    "south_sinai": translations[currentLang]["South Sinai"]
  };

  let message = `🛒 *${translations[currentLang]["New order from Pet Store"]}*\n\n`;
  message += `👤 *${translations[currentLang]["Customer Information"]}:*\n`;
  message += `${translations[currentLang]["Full Name *"].replace('*', '')}: ${customerInfo.fullName}\n`;
  message += `${translations[currentLang]["Phone Number *"].replace('*', '')}: ${customerInfo.phone}\n`;
  message += `${translations[currentLang]["Governorate"]}: ${governorates[customerInfo.city] || customerInfo.city}\n`;
  message += `${translations[currentLang]["Address *"].replace('*', '')}: ${customerInfo.address}\n`;
  message += `${translations[currentLang]["Notes (Optional)"].replace('(Optional)', '')}: ${customerInfo.notes}\n\n`;

  message += `📦 *${translations[currentLang]["Order Details"]}:*\n`;
  cart.forEach((item) => {
    message += `• ${currentLang === 'ar' ? item.name_ar : item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
  });

  message += `\n💰 *${translations[currentLang]["Order Summary"]}:*\n`;
  message += `${translations[currentLang]["Subtotal:"]} $${subtotal.toFixed(2)}\n`;
  message += `${translations[currentLang]["Shipping:"]} $${shipping.toFixed(2)}\n`;
  message += `*${translations[currentLang]["Total:"]} $${total.toFixed(2)}*\n\n`;
  message += `${translations[currentLang]["Thank you for your order!"]} 🐾`;

  const phoneNumber = "201271120594";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  alert(translations[currentLang]["Order sent via WhatsApp! Thank you for your purchase."]);
  window.location.href = "index.html";
}

// Buy now function - add to cart and go to checkout
function buyNow(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Add product to cart
  addToCart(productId, 1);
  
  // Navigate to checkout after a short delay to allow cart update
  setTimeout(() => {
    window.location.href = "checkout.html";
  }, 500);
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
        'dogs': translations[currentLang]['DOGS'],
        'cats': translations[currentLang]['CATS'],
        'birds': translations[currentLang]['BIRDS'],
        'fish': translations[currentLang]['FISH'],
        'accessories': translations[currentLang]['ACCESSORIES'] // Updated category name
      };
      const categoryName = categoryNames[product.category] || product.category;
      const productName = currentLang === 'ar' ? product.name_ar : product.name;

      return `
        <div class="new-product-card" data-category="${product.category}" data-aos="zoom-in-up">
          <div class="new-product-image">
            <img src="${product.image}" alt="${productName}">
            <span class="new-category-badge">${categoryName}</span>
          </div>
          <div class="new-product-content">
            <h3 class="new-product-title">${productName}</h3>
            <div class="new-product-rating">
              ${starsHtml}
            </div>
            <div class="new-price-container">
              <span class="new-current-price">$${product.price.toFixed(2)}</span>
              <span class="new-old-price">$${product.oldPrice.toFixed(2)}</span>
            </div>
            <div class="new-product-buttons">
              <a href="product.html?id=${product.id}" class="new-btn-details">${translations[currentLang]["Details"]}</a>
              <button class="new-btn-buy" onclick="buyNow(${product.id})">${translations[currentLang]["Buy Now"]}</button>
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

  // Better way to detect current page
  const path = window.location.pathname;
  const page = path.split("/").pop();

  if (page === "index.html" || page === "" || page === "home.html") {
    loadNewProducts();
    
    document.querySelectorAll('.new-filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        filterProducts(this.dataset.filter);
      });
    });
  } else if (page === "product.html") {
    loadProductDetails();
  } else if (page === "cart.html") {
    loadCartItems();
  } else if (page === "checkout.html") {
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
    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutLeft {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


// Products data without duplicates
const products = [
{
    id: 1,
    name: "Premium Dog Food",
    name_ar: "طعام كلاب فاخر",
    category: "dogs",
    price: 29.99,
    oldPrice: 39.99,
    image: "imgs/pet12.png",
    rating: 5,
    description: "High-quality dog food with premium ingredients for optimal nutrition and health.",
    description_ar: "طعام كلاب عالي الجودة بمكونات ممتازة لتغذية وصحة مثالية."
  },
  {
    id: 2,
    name: "Cat Nutrition Plus",
    name_ar: "غذاء القطط بلس",
    category: "cats",
    price: 24.99,
    oldPrice: 34.99,
    image: "imgs/Pet9.png",
    rating: 4,
    description: "Nutritious cat food formula designed for adult cats with sensitive stomachs.",
    description_ar: "تركيبة طعام قطط مغذية مصممة للقطط البالغة ذات المعدة الحساسة."
  },
  {
    id: 3,
    name: "Bird Seed Mix",
    name_ar: "خليط بذور الطيور",
    category: "birds",
    price: 19.99,
    oldPrice: 29.99,
    image: "imgs/Pet10.png",
    rating: 5,
    description: "Nutritious bird seed mix with sunflower seeds, millet, and essential vitamins.",
    description_ar: "خليط بذور طيور مغذي مع بذور عباد الشمس والدخن والفيتامينات الأساسية."
  },
  {
    id: 4,
    name: "Fish Flakes",
    name_ar: "رقائق السمك",
    category: "fish",
    price: 14.99,
    oldPrice: 19.99,
    image: "imgs/pet11.png",
    rating: 4,
    description: "High-quality fish flakes with color enhancers and immune system support.",
    description_ar: "رقائق سمك عالية الجودة مع معززات الألوان ودعم الجهاز المناعي."
  },
  {
    id: 5,
    name: "Pet Carrier Bag",
    name_ar: "حقيبة حمل الحيوانات الأليفة",
    category: "accessories",
    price: 35.99,
    oldPrice: 45.99,
    image: "imgs/accessories-1.webp", // Temporary image
    rating: 5,
    description: "Comfortable and secure carrier bag for small pets, ideal for travel.",
    description_ar: "حقيبة حمل مريحة وآمنة للحيوانات الأليفة الصغيرة، مثالية للسفر."
  },
  {
    id: 6,
    name: "Dog Leash & Collar Set",
    name_ar: "طوق ومقود للكلاب",
    category: "dogs",
    price: 16.99,
    oldPrice: 21.99,
    image: "imgs/Pet9.png",
    rating: 4,
    description: "Durable and stylish leash and collar set for daily walks.",
    description_ar: "طوق ومقود متين وأنيق للمشي اليومي."
  },
  {
    id: 7,
    name: "Cat Scratching Post",
    name_ar: "عمود خدش للقطط",
    category: "cats",
    price: 28.99,
    oldPrice: 35.99,
    image: "imgs/Pet10.png",
    rating: 5,
    description: "Sturdy scratching post to keep your cat entertained and protect furniture.",
    description_ar: "عمود خدش قوي لإبقاء قطتك مستمتعة وحماية الأثاث."
  },
  {
    id: 8,
    name: "Bird Cage Toy",
    name_ar: "لعبة قفص الطيور",
    category: "birds",
    price: 11.99,
    oldPrice: 15.99,
    image: "imgs/pet11.png",
    rating: 4,
    description: "Colorful and engaging toy for birds to peck and play with.",
    description_ar: "لعبة ملونة وجذابة للطيور للنقر واللعب بها."
  },
  {
    id: 9,
    name: "Premium Cat Food (Large Bag)",
    name_ar: "طعام قطط فاخر (كيس كبير)",
    category: "cats",
    price: 49.99,
    oldPrice: 59.99,
    image: "imgs/pet12.png",
    rating: 5,
    description: "Large bag of nutritious cat food for long-lasting supply.",
    description_ar: "كيس كبير من طعام القطط المغذي لإمداد طويل الأمد."
  },
  {
    id: 10,
    name: "Aquarium Decor Set",
    name_ar: "مجموعة ديكور حوض السمك",
    category: "fish",
    price: 21.99,
    oldPrice: 27.99,
    image: "imgs/pet11.png",
    rating: 4,
    description: "Assorted decorative items to enhance your fish tank's aesthetic.",
    description_ar: "عناصر زخرفية متنوعة لتعزيز جمال حوض السمك الخاص بك."
  },
  {
    id: 11,
    name: "Pet Grooming Brush",
    name_ar: "فرشاة تصفيف الحيوانات الأليفة",
    category: "accessories",
    price: 15.99,
    oldPrice: 20.99,
    image: "imgs/accessories-2.webp", // Temporary image
    rating: 5,
    description: "Gentle grooming brush for all types of pet fur, removes loose hair.",
    description_ar: "فرشاة تصفيف لطيفة لجميع أنواع فراء الحيوانات الأليفة، تزيل الشعر المتساقط."
  },
  {
    id: 12,
    name: "Interactive Pet Toy",
    name_ar: "لعبة تفاعلية للحيوانات الأليفة",
    category: "accessories",
    price: 18.50,
    oldPrice: 25.00,
    image: "imgs/accessories-4.webp", // Temporary image
    rating: 4,
    description: "Engaging toy that stimulates your pet's mind and encourages play.",
    description_ar: "لعبة جذابة تحفز عقل حيوانك الأليف وتشجعه على اللعب."
  },
  {
    id: 13,
    name: "Pet Food Bowl",
    name_ar: "وعاء طعام الحيوانات الأليفة",
    category: "accessories",
    price: 9.99,
    oldPrice: 12.99,
    image: "imgs/accessories-3.jpg", // Temporary image
    rating: 5,
    description: "Durable and easy-to-clean food bowl for cats and dogs.",
    description_ar: "وعاء طعام متين وسهل التنظيف للقطط والكلاب."
  }
];
