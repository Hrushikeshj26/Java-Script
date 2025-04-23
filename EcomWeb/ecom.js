const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    img: "/Ecom/EcomWeb/prodimg/wireless headphones.jpg",
    desc: "High-quality wireless headphones with noise cancellation.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis quod neque culpa omnis nobis? Voluptate!",
    price: 59.99
  },
  {
    id: 2,
    name: "Smartwatch",
    img: "/Ecom/EcomWeb/prodimg/smartwatch.jpg",
    desc: "Stylish smartwatch with fitness tracking features.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis quod neque culpa omnis nobis? Voluptate!",
    price: 89.99
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    img: "/Ecom/EcomWeb/prodimg/speaker.jpg",
    desc: "Portable speaker with excellent sound quality.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis quod neque culpa omnis nobis? Voluptate!",
    price: 39.99
  },
  {
    id: 4,
    name: "Laptop Stand",
    img: "/Ecom/EcomWeb/prodimg/laptop stand.png",
    desc: "Ergonomic laptop stand for better posture.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis quod neque culpa omnis nobis? Voluptate!",
    price: 29.99
  },
  {
    id: 5,
    name: "Gaming Mouse",
    img: "/Ecom/EcomWeb/prodimg/gaming mouse.jpg",
    desc: "Ergonomic laptop stand for better posture.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis quod neque culpa omnis nobis? Voluptate!",
    price: 19.99
  },
  {
    id: 6,
    name: "Portable Charger",
    img: "/Ecom/EcomWeb/prodimg/Portable-charger.jpg",
    desc: "High-capacity portable charger with fast charging capabilities.Lorem ipsum dolor sit amet consectetur adipisicing",
    price: 49.99
  },
  {
    id: 7,
    name: "Wireless Mouse",
    img: "/Ecom/EcomWeb/prodimg/gaming mouse.jpg",
    desc: "Ergonomic wireless mouse with customizable buttons and RGB lighting.",
    price: 29.99
  },
  {
    id: 8,
    name: "Smartphone",
    img: "/Ecom/EcomWeb/prodimg/smartphone.jpg",
    desc: "Latest smartphone with cutting-edge features and sleek design.",
    price: 62.99
  }
];

const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const addToCartBtn = document.getElementById('add-to-cart');
const closeModal = document.getElementById('close-modal');

const cartDishplay = document.getElementById('cart-dishplay');
const cartItems = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');
const closeCart = document.getElementById('close-cart');
const totalPrice = document.getElementById('totalPrice');

let cart = [];
let totalItems = null;

products.forEach(product => {
const productItem = document.createElement('div');
productItem.className = "bg-gray-800 shadow rounded p-4 w-74 h-94 cursor-pointer hover:shadow-lg";
productItem.innerHTML = `
    <img src="${product.img}"class="w-full h-60 object-fit mb-2 rounded">
    <h3 class="font-semibold text-white text-lg">${product.name}</h3>
    <p class="text-sm text-white">$${product.price}</p>
  `;
productList.appendChild(productItem);

productItem.addEventListener('click', () => {
  showProductDetails(product);
})
});

function showProductDetails(product) {
totalItems = product;
modalTitle.innerText = product.name;
modalImg.src = product.img;
modalDesc.innerText = product.desc;
modalPrice.innerText = `$${product.price}`;
modal.style.display = 'block'; 
modal.style.display = 'flex';
}

addToCartBtn.addEventListener('click', () =>{
cart.push(totalItems);
cartCount.innerText = cart.length;
});

closeModal.addEventListener('click', () => {
modal.style.display = 'none';
});

cartCount.addEventListener('click', () => {
cartDishplay.style.display = 'block';
cartDishplay.style.display = 'flex';

cartItems.innerHTML = cart.map(item => `<div class="cart-item">${item.name} - $${item.price}`);
totalPrice.innerText = `Total: $${ cart.reduce((total, item) => total + item.price, 0)}`;
});

closeCart.addEventListener('click', () => {
cartDishplay.style.display = 'none';
});

checkoutBtn.addEventListener('click', () => {
alert('Thank you for your purchase!, your order will be processed shortly');
cart = [];
cartCount.innerText = 0;
cartItems.innerHTML = '';
cartDishplay.style.display = 'none';
});
