// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573108189476'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 0; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
// ---------- Datos de ejemplo ----------
const products = [
  // === SHAWARMAS ===
  {
  id: 'sh1',
  category: 'shawarmas',
  title: 'Tradicional Grande',
  price: 20000,
  desc: '80gr pollo, 50gr res, 50gr cerdo, ripio, queso cheddar, vegetales.',
  image: 'images/tradicional-grande.png',
  ingredients: ['80gr pollo','50gr res','50gr cerdo','Ripio','Queso cheddar','Vegetales'],
  extras: []
},
{
  id: 'sh2',
  category: 'shawarmas',
  title: 'Tradicional Mediano',
  price: 12000,
  desc: '40gr pollo, 25gr res, 25gr cerdo, ripio, queso cheddar, vegetales.',
  image: 'images/tradicional-mediano.png',
  ingredients: ['40gr pollo','25gr res','25gr cerdo','Ripio','Queso cheddar','Vegetales'],
  extras: []
},
{
  id: 'sh3',
  category: 'shawarmas',
  title: 'Ranchero Grande',
  price: 26000,
  desc: '50gr pollo, 40gr res, 40gr cerdo, 50gr chorizo, 40gr maíz, queso cheddar, vegetales.',
  image: 'images/ranchero-grande.png',
  ingredients: ['50gr pollo','40gr res','40gr cerdo','50gr chorizo','40gr maíz','Queso cheddar','Vegetales'],
  extras: []
},
{
  id: 'sh4',
  category: 'shawarmas',
  title: 'Ranchero Mediano',
  price: 16000,
  desc: '25gr pollo, 20gr res, 20gr cerdo, 25gr chorizo, 20gr maíz, queso cheddar.',
  image: 'images/ranchero-mediano.png',
  ingredients: ['25gr pollo','20gr res','20gr cerdo','25gr chorizo','20gr maíz','Queso cheddar'],
  extras: []
},
{
  id: 'sh5',
  category: 'shawarmas',
  title: 'Mexicano Grande',
  price: 30000,
  desc: '80gr pollo, 80gr cerdo, 25gr tocineta, aguacate, nachos, jalapeño, queso cheddar, vegetales.',
  image: 'images/mexicano-grande.png',
  ingredients: ['80gr pollo','80gr cerdo','25gr tocineta','Aguacate','Nachos','Jalapeño','Queso cheddar','Vegetales'],
  extras: []
},
{
  id: 'sh6',
  category: 'shawarmas',
  title: 'Mexicano Mediano',
  price: 18000,
  desc: '40gr pollo, 40gr cerdo, 15gr tocineta, aguacate, nachos, jalapeño, queso cheddar, vegetales.',
  image: 'images/mexicano-mediano.png',
  ingredients: ['40gr pollo','40gr cerdo','15gr tocineta','Aguacate','Nachos','Jalapeño','Queso cheddar','Vegetales'],
  extras: []
}
,
  // === HAMBURGUESAS ===
{
  id: 'hb1',
  category: 'hamburguesas',
  title: 'Hamburguesa Sencilla',
  price: 18000,
  desc: '150gr res, jamón ahumado, queso mozzarella, queso cheddar, pan artesanal, vegetales.',
  image: 'images/hamburguesa-sencilla.png',
  ingredients: [
    '150gr res',
    'Jamón ahumado',
    'Queso mozzarella',
    'Queso cheddar',
    'Pan artesanal',
    'Vegetales'
  ],
  extras: []
},
{
  id: 'hb2',
  category: 'hamburguesas',
  title: 'Hamburguesa Mixhouse',
  price: 28000,
  desc: '150gr res, 100gr pollo, tocineta, jamón ahumado, queso mozzarella, queso cheddar, pan artesanal, papas a la francesa, vegetales.',
  image: 'images/hamburguesa-mixhouse.png',
  ingredients: [
    '150gr res',
    '100gr pollo',
    'Tocineta',
    'Jamón ahumado',
    'Queso mozzarella',
    'Queso cheddar',
    'Pan artesanal',
    'Papas a la francesa',
    'Vegetales'
  ],
  extras: []
},
{
  id: 'hb3',
  category: 'hamburguesas',
  title: 'Hamburguesa Shawarhouse',
  price: 38000,
  desc: 'Doble carne, chorizo, tocineta, jamón ahumado, queso mozzarella, queso cheddar, pan artesanal, papas a la francesa, vegetales.',
  image: 'images/hamburguesa-shawarhouse.png',
  ingredients: [
    'Doble carne',
    'Chorizo',
    'Tocineta',
    'Jamón ahumado',
    'Queso mozzarella',
    'Queso cheddar',
    'Pan artesanal',
    'Papas a la francesa',
    'Vegetales'
  ],
  extras: []
},
{
  id: 'hb4',
  category: 'hamburguesas',
  title: 'Desgranado',
  price: 26000,
  desc: '80gr res, 80gr pollo, 50gr cerdo, 50gr tocineta, 100gr maíz, queso mozzarella, vegetales.',
  image: 'images/desgranado.png',
  ingredients: [
    '80gr res',
    '80gr pollo',
    '50gr cerdo',
    '50gr tocineta',
    '100gr maíz',
    'Queso mozzarella',
    'Vegetales'
  ],
  extras: []
},
// === BEBIDAS ===
{
    id: "coca-cola-15",
    category: "Bebidas",
    title: "Coca-Cola 1.5L",
    price: 9000,
    image: "images/coca-cola-15.png"
  },
  {
    id: "quatro-15",
    category: "Bebidas",
    title: "Quatro 1.5L",
    price: 9000,
    image: "images/quatro-15.png"
  },
  {
    id: "coca-cola-1l",
    category: "Bebidas",
    title: "Coca-Cola 1L",
    price: 6500,
    image: "images/coca-cola-1l.png"
  },
  {
    id: "coca-cola-p400",
    category: "Bebidas",
    title: "Coca-Cola P400",
    price: 4500,
    image: "images/coca-cola-p400.png"
  },
  {
    id: "quatro-p400",
    category: "Bebidas",
    title: "Quatro P400",
    price: 4500,
    image: "images/quatro-p400.png"
  },
  {
    id: "ginger-p400",
    category: "Bebidas",
    title: "Ginger P400",
    price: 4500,
    image: "images/ginger-p400.png"
  },
  {
    id: "romans-p400",
    category: "Bebidas",
    title: "Cola Roman P400",
    price: 4500,
    image: "images/romans-p400.png"
  },
  {
    id: "soda-p400",
    category: "Bebidas",
    title: "Soda P400",
    price: 4500,
    image: "images/soda-p400.png"
  },
  {
    id: "agua-saborizada-600",
    category: "Bebidas",
    title: "Agua Saborizadas 600ml",
    price: 4500,
    image: "images/agua-saborizada-600.png"
  },
  {
    id: "agua-gas-600",
    category: "Bebidas",
    title: "Agua con Gas 600ml",
    price: 4500,
    image: "images/agua-gas-600.png"
  },
  {
    id: "agua-600",
    category: "Bebidas",
    title: "Agua 600ml",
    price: 4500,
    image: "images/agua-600.png"
  },
  //JUGOS
{
  id: 'j1',
  category: 'Jugos',
  title: 'Jugo de Mango',
  price: 6000,
  desc: 'Refrescante jugo natural de mango preparado al momento.',
  ingredients: ['Mango fresco', 'Azúcar', 'Hielo'],
  image: 'images/jugo1.png',
  sizes: [
    {
      id: 'j1-agua',
      label: 'En agua',
      price: 6000,
      image: 'images/jugo1.png'
    },
    {
      id: 'j1-leche',
      label: 'En leche',
      price: 7000,
      image: 'images/jugo1.png'
    }
  ]
},
{
  id: 'j2',
  category: 'Jugos',
  title: 'Jugo de Fresa',
  price: 6000,
  desc: 'Jugo natural de fresa con un sabor dulce y fresco.',
  ingredients: ['Fresas', 'Azúcar', 'Hielo'],
  image: 'images/jugo2.png',
  sizes: [
    {
      id: 'j2-agua',
      label: 'En agua',
      price: 6000,
      image: 'images/jugo2.png'
    },
    {
      id: 'j2-leche',
      label: 'En leche',
      price: 7000,
      image: 'images/jugo2.png'
    }
  ]
},
{
  id: 'j3',
  category: 'Jugos',
  title: 'Jugo de Mora',
  price: 6000,
  desc: 'Jugo artesanal de mora, lleno de sabor y color natural.',
  ingredients: ['Mora fresca', 'Azúcar', 'Hielo'],
  image: 'images/jugo3.png',
  sizes: [
    {
      id: 'j3-agua',
      label: 'En agua',
      price: 6000,
      image: 'images/jugo3.png'
    },
    {
      id: 'j3-leche',
      label: 'En leche',
      price: 7000,
      image: 'images/jugo3.png'
    }
  ]
},
{
  id: 'j4',
  category: 'Jugos',
  title: 'Jugo de Maracuyá',
  price: 6000,
  desc: 'Delicioso jugo de maracuyá con su característico toque ácido.',
  ingredients: ['Maracuyá', 'Azúcar', 'Hielo'],
  image: 'images/jugo4.png',
  sizes: [
    {
      id: 'j4-agua',
      label: 'En agua',
      price: 6000,
      image: 'images/jugo4.png'
    },
    {
      id: 'j4-leche',
      label: 'En leche',
      price: 7000,
      image: 'images/jugo4.png'
    }
  ]
},
{
  id: 'j5',
  category: 'Jugos',
  title: 'Jugo de Lulo',
  price: 6000,
  desc: 'Tradicional jugo de lulo colombiano, ácido y refrescante.',
  ingredients: ['Lulo', 'Azúcar', 'Hielo'],
  image: 'images/jugo5.png',
  sizes: [
    {
      id: 'j5-agua',
      label: 'En agua',
      price: 6000,
      image: 'images/jugo5.png'
    },
    {
      id: 'j5-leche',
      label: 'En leche',
      price: 7000,
      image: 'images/jugo5.png'
    }
  ]
},
{
  id: 'j6',
  category: 'Jugos',
  title: 'Jugo de Papaya',
  price: 6000,
  desc: 'Suave jugo natural de papaya, ideal para acompañar tus comidas.',
  ingredients: ['Papaya', 'Azúcar', 'Hielo'],
  image: 'images/jugo6.png',
  sizes: [
    {
      id: 'j6-agua',
      label: 'En agua',
      price: 6000,
      image: 'images/jugo6.png'
    },
    {
      id: 'j6-leche',
      label: 'En leche',
      price: 7000,
      image: 'images/jugo6.png'
    }
  ]
},
{
  id: 'j7',
  category: 'Jugos',
  title: 'Jugo de Sandía',
  price: 6000,
  desc: 'Refrescante jugo de sandía, perfecto para los días calurosos.',
  ingredients: ['Sandía', 'Azúcar', 'Hielo'],
  image: 'images/jugo7.png',
  sizes: [
    {
      id: 'j7-agua',
      label: 'En agua',
      price: 6000,
      image: 'images/jugo7.png'
    },
    {
      id: 'j7-leche',
      label: 'En leche',
      price: 7000,
      image: 'images/jugo7.png'
    }
  ]
},
{
  id: 'j8',
  category: 'Jugos',
  title: 'Jugo de Piña',
  price: 6000,
  desc: 'Jugo tropical de piña, dulce, ácido y muy refrescante.',
  ingredients: ['Piña', 'Azúcar', 'Hielo'],
  image: 'images/jugo8.png',
  sizes: [
    {
      id: 'j8-agua',
      label: 'En agua',
      price: 6000,
      image: 'images/jugo8.png'
    },
    {
      id: 'j8-leche',
      label: 'En leche',
      price: 7000,
      image: 'images/jugo8.png'
    }
  ]
}
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'shawarmas';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}
// ---------- Render productos ----------
function renderProducts(cat) { 
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => 
    p.category === cat && 
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  catalogEl.innerHTML = '';

  if (items.length === 0) {
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', () => openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}


// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {

  const p = products.find(x => x.id === id);
  if (!p) return;

  // ======== NUEVO: tamaño seleccionado (primer tamaño por defecto) ========
  let selectedSize = p.sizes ? p.sizes[0] : { id: p.id, price: p.price, image: p.image, label: '' };

  // === CREAR OVERLAY ===
  const overlay = document.createElement("div");
  overlay.className = "product-overlay";
  
  overlay.innerHTML = `
    <div class="product-sheet">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>

      <div class="modal-body">
        <div class="image-wrap">
          <img id="product-img" src="${selectedSize.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

          ${p.sizes ? `
            <h3>Variedad</h3>
            <div class="size-selector">
              ${p.sizes.map(s => `
                <label class="size-option">
                  <input type="radio" name="size" value="${s.id}" ${s.id === selectedSize.id ? "checked" : ""}>
                  ${s.label} — $${numberWithCommas(s.price)}
                </label>
              `).join("")}
            </div>
          ` : ""}

          ${ p.extras?.length ? `
            <h3>Adiciones</h3>
            <div class="extras-list">
              ${p.extras.map((e, i) => `
                <label>
                  <input type="checkbox" data-id="${e.id}" data-name="${e.name}" data-price="${e.price}">
                  <span>${e.name}</span>
                  <span class="extra-controls" data-index="${i}">
                    <button class="minus-extra">−</button>
                    <span class="extra-qty">0</span>
                    <button class="plus-extra">+</button>
                  </span>
                  <small>+$${numberWithCommas(e.price)}</small>
                </label>
              `).join("")}
            </div>
          ` : "" }

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? 'Actualizar' : 'Agregar'} 
            <span class="price">$${numberWithCommas(selectedSize.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // ---- Cierre ----
  overlay.querySelector(".close").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => { if (e.target === overlay) overlay.remove(); });

  // ===== VARIABLES =====
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasQty = Array(p.extras?.length || 0).fill(0);
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // ===== SI ES EDICIÓN =====
  if (cartIndex !== null) {
    const item = cart[cartIndex];

    // Encontrar el tamaño usado
    if (p.sizes) {
      selectedSize = p.sizes.find(s => s.id === item.sizeId) || p.sizes[0];
      overlay.querySelector("#product-img").src = selectedSize.image;
      overlay.querySelector(`input[value="${selectedSize.id}"]`).checked = true;
    }

    qty = item.qty;
    qtyEl.textContent = qty;

    if (item.extras?.length) {
      item.extras.forEach(e => {
        const idx = p.extras.findIndex(pe => pe.name === e.name);
        if (idx >= 0) extrasQty[idx] = e.qty;
      });
    }

    extrasInputs.forEach((input, i) => {
      input.checked = extrasQty[i] > 0;
      input.closest("label").querySelector(".extra-qty").textContent = extrasQty[i];
    });
  }

  // ===== UPDATE PRICE =====
  function updatePrice() {
    const extrasTotal = (p.extras || [])
      .reduce((sum, e, i) => sum + e.price * extrasQty[i], 0);

    const total = (selectedSize.price + extrasTotal) * qty;
    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  updatePrice();

  // ===== CAMBIAR TAMAÑO DINÁMICAMENTE =====
  overlay.querySelectorAll("input[name='size']").forEach(radio => {
    radio.addEventListener("change", e => {
      const sizeId = e.target.value;
      selectedSize = p.sizes.find(s => s.id === sizeId);

      overlay.querySelector("#product-img").src = selectedSize.image;

      updatePrice();
    });
  });

  // ===== CANTIDAD =====
  overlay.querySelector(".plus").addEventListener("click", () => { qty++; qtyEl.textContent = qty; updatePrice(); });
  overlay.querySelector(".minus").addEventListener("click", () => { if (qty > 1) qty--; qtyEl.textContent = qty; updatePrice(); });

  // ===== ADICIONES =====

  // *** NUEVO: si el usuario marca el checkbox sin tocar +, qty = 1 automáticamente ***
  extrasInputs.forEach((input, i) => {
    input.addEventListener("change", () => {
      if (input.checked && extrasQty[i] === 0) {
        extrasQty[i] = 1;
        input.closest("label").querySelector(".extra-qty").textContent = 1;
      } else if (!input.checked) {
        extrasQty[i] = 0;
        input.closest("label").querySelector(".extra-qty").textContent = 0;
      }
      updatePrice();
    });
  });

  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    const i = parseInt(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");

    btn.addEventListener("click", () => {
      extrasQty[i]++;
      qtyDisplay.textContent = extrasQty[i];
      extrasInputs[i].checked = true;
      updatePrice();
    });
  });

  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    const i = parseInt(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");

    btn.addEventListener("click", () => {
      if (extrasQty[i] > 0) {
        extrasQty[i]--;
        qtyDisplay.textContent = extrasQty[i];
        extrasInputs[i].checked = extrasQty[i] > 0;
        updatePrice();
      }
    });
  });

  // ===== AGREGAR AL CARRITO =====
  overlay.querySelector(".add-btn").addEventListener("click", () => {
    const extras = (p.extras || [])
      .map((e, i) => ({ name: e.name, price: e.price, qty: extrasQty[i] }))
      .filter(e => e.qty > 0);

    const item = {
      productId: p.id,
      sizeId: selectedSize.id,
      title: selectedSize.label ? `${p.title} (${selectedSize.label})` : p.title,
      price: selectedSize.price,
      qty,
      image: selectedSize.image,
      extras
    };

    if (cartIndex !== null) {
      cart[cartIndex] = item;
    } else {
      addToCart(item);
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove("hidden");
  });
}





// ---------- Carrito ----------

// Agregar producto al carrito
function addToCart(item) {
  // Si ya existe el mismo producto con las mismas adiciones, solo aumentar cantidad
  const existing = cart.find(c => 
    c.productId === item.productId && 
    JSON.stringify(c.extras) === JSON.stringify(item.extras)
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  persistCart();
  refreshCartUI();
  updateCartBadge();
}

// Guardar en localStorage
function persistCart() {
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

// Actualizar contador del ícono del carrito
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = count;
}

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🌯</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {
    // --- CALCULAR PRECIO REAL DEL ITEM CON EXTRAS ---
    const extrasTotal = item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;

    // 🔥 FIX: precio del item sumando adiciones
    const itemTotal = (item.price + extrasTotal) * item.qty;

    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras.map(e => `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`).join('<br>')
      : '';

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        ${extrasText ? `<small>${extrasText}</small>` : ''}
        <div class="qty-controls">
          <button class="minus">−</button>
          <span>${item.qty}</span>
          <button class="plus">+</button>
        </div>
      </div>
      <div class="price">
        <span>$${numberWithCommas(itemTotal)}</span>
        <button class="remove-btn" title="Eliminar producto">🗑️</button>
      </div>
    `;

    // --- CONTROL DE CANTIDAD ---
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty++;
      persistCart();
      refreshCartUI();
    });

    div.querySelector('.minus').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(idx, 1);
      }
      persistCart();
      refreshCartUI();
    });

    // --- ELIMINAR PRODUCTO ---
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // --- EDITAR PRODUCTO DESDE EL CARRITO ---
    div.addEventListener('click', (e) => {
      if (!e.target.classList.contains('minus') && !e.target.classList.contains('plus') && !e.target.classList.contains('remove-btn')) {
        cartDrawer.classList.add('hidden'); // esconder carrito
        openProductModal(item.productId, idx); // enviar índice para edición
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal + DELIVERY_FEE)}`;
  updateCartBadge();
}














// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------

// ---------- Checkout ----------
function openCheckout() {
  if (cart.length === 0) { 
    alert('El carrito está vacío.'); 
    return; 
  }

  // 🔹 Recalcular subtotal actual (incluyendo extras)
const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


  const delivery = 0; // por defecto
  const total = subtotal + delivery;

  // 🔹 Actualizar DOM inicial
  document.getElementById('cart-subtotal').textContent = `$${numberWithCommas(subtotal)}`;
  document.getElementById('cart-delivery').textContent = `$${numberWithCommas(delivery)}`;
  document.getElementById('cart-total').textContent = `$${numberWithCommas(total)}`;
  document.getElementById('cart-total-checkout').textContent = `$${numberWithCommas(total)}`;

  // 🔹 Reset formulario
  checkoutForm.reset();
  document.getElementById('address-label').classList.add('hidden');
  document.getElementById('envio-row').classList.add('hidden');

  // 🔹 Mostrar modal
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');

  // 🔹 Recalcular al cambiar método (recoger/domicilio)
  const radios = checkoutForm.querySelectorAll('input[name="method"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
      const addressLabel = document.getElementById('address-label');
      const envioRow = document.getElementById('envio-row');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalCheckoutEl = document.getElementById('cart-total-checkout');

      const DELIVERY_FEE = 0;
      const delivery = (method === 'domicilio' && subtotal > 0) ? DELIVERY_FEE : 0;
      const totalUpdated = subtotal + delivery;

      // Mostrar/ocultar campos
      addressLabel.classList.toggle('hidden', method !== 'domicilio');
      envioRow.classList.toggle('hidden', method !== 'domicilio');

      // Actualizar montos
      deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
      totalCheckoutEl.textContent = `$${numberWithCommas(totalUpdated)}`;
    });
  });
}


checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
});

backToCartBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  cartDrawer.classList.remove('hidden');
});

// === Calcular totales del checkout ===
function updateCheckoutTotals() {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const envioRow = document.getElementById('envio-row');
  const subtotalEl = document.getElementById('cart-subtotal-checkout');
  const deliveryEl = document.getElementById('cart-delivery-checkout');
  const totalEl = document.getElementById('cart-total-checkout');

  const DELIVERY_FEE = 0; // mismo valor usado en refreshCartUI

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🧾 Heredamos los valores que ya calcula refreshCartUI()
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🚚 Si el método es domicilio, se suma el envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // ✅ Actualizar DOM (heredado del refreshCartUI, con ajuste solo si hay envío)
  subtotalEl.textContent = document.getElementById('cart-subtotal').textContent;
  deliveryEl.textContent = document.getElementById('cart-delivery').textContent;
  totalEl.textContent = method === 'domicilio'
    ? `$${numberWithCommas(total)}`
    : document.getElementById('cart-total-checkout').textContent;
}


checkoutForm.addEventListener('change', updateCheckoutTotals);






// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';

  let textParts = [];

  // Cabecera
  textParts.push('🧾 *Nuevo Pedido - Shawar House 🌯✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🌯*Detalle del pedido:*');

  let subtotal = 0;

  cart.forEach(item => {
    // Calcular precio de extras individualmente
    const extras = item.extras || [];
    const extrasLines = extras.map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`).join('\n');
    const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

    const itemTotal = (item.price + extrasSum) * item.qty;
    subtotal += itemTotal;

    // Mostrar solo precio del artículo base + extras detallados
    textParts.push(`${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`);
    if (extrasLines) textParts.push(extrasLines);

    // Si hay toppings removidos
    if (item.removed && item.removed.length) {
      textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
    }
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Resumen de totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // Construir URL para WhatsApp
  const bp = String(BUSINESS_PHONE || '').replace(/\D/g, '');
  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const msg = encodeURIComponent(textParts.join('\n'));
  const waUrl = `https://wa.me/${bp}?text=${msg}`;

  window.open(waUrl, '_blank');
});





// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 0; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});


// --- FORM MULTIPASO (compatible con checkout actual) ---
const form = document.getElementById("checkout-form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextStep1 = document.getElementById("next-step1");
const backStep2 = document.getElementById("back-step2");
const clientSummary = document.getElementById("client-summary");

if (nextStep1) {
  nextStep1.addEventListener("click", () => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mostrar resumen
    clientSummary.innerHTML = `<strong>${name} </strong><span>${phone}</span>`;

    // Animación de transición
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backStep2) {
  backStep2.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}



const checkoutOverlay = document.getElementById("checkout-modal");
const btnConfirmOrder = document.getElementById("confirm-order"); // botón en el carrito
const btnBackToCart = document.getElementById("back-to-cart");

btnConfirmOrder?.addEventListener("click", () => {
  checkoutOverlay.classList.remove("hidden");
});

btnBackToCart?.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});


// También cerrar si se toca fuera del panel
checkoutOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutOverlay) {
    checkoutOverlay.classList.remove("show");
  }
});


// ============Descargar QR=================
document.addEventListener("click", (e) => {
  // Usa closest para soportar clicks sobre el SVG interno de FontAwesome
  const btn = e.target.closest && e.target.closest(".qr-download");
  if (!btn) return;

  const imgPath = btn.dataset.img;
  if (!imgPath) {
    console.warn("qr-download sin data-img");
    return;
  }

  // helper para descargar
  const downloadImage = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Si SweetAlert2 no está disponible, fallback a confirm nativo
  if (typeof Swal === "undefined") {
    console.warn("SweetAlert2 (Swal) no disponible. Usando confirm nativo.");
    const ok = confirm(
      "Puedes pagar escaneando nuestros códigos QR de Nequi o Bancolombia.\n\nTambién puedes descargar los QR. ¿Descargar ahora?"
    );
    if (ok) downloadImage(imgPath);
    return;
  }

  // SweetAlert2 disponible -> mostrar alerta antes de descargar
  Swal.fire({
    icon: "info",
    title: "Pago con QR",
    html: `
      Puedes pagar escaneando nuestros códigos QR de <strong>Nequi</strong> o <strong>Bancolombia</strong>.<br><br>
      También puedes <strong>descargar los QR</strong> dando clic en el icono de descarga.
    `,
    showCancelButton: true,
    confirmButtonText: "Descargar",
    cancelButtonText: "Cancelar",
    background: "#0a0a0a",             // fondo negro
    color: "#ffffff",                   // texto blanco
    confirmButtonColor: "rgb(230, 213, 12)", // botón amarillo neón
    cancelButtonColor: "#555555",       // cancel gris oscuro
    iconColor: "rgb(230, 213, 12)"      // icono amarillo neón
  }).then(result => {
    if (result.isConfirmed) downloadImage(imgPath);
  });
});



// ============Fin de codigo de Descarga QR=================





