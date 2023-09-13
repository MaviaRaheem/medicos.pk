// Get references to DOM elements
const addToCartButtons = document.querySelectorAll('.addToCartButton');
const cartItemCount = document.getElementById('cartItemCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');

// Initialize cart items and total
let cartItems = [];
let total = 0;

// Event listener for add-to-cart buttons
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const title = card.querySelector('.card-title').textContent;
    const price = parseFloat(card.querySelector('span h6').textContent.substr(3));

    // Add item to cart
    cartItems.push({ title, price });
    
    // Update cart count
    cartItemCount.textContent = cartItems.length;
    
    // Update cart sidebar
    updateCartSidebar();

    // Calculate total
    total += price;
    cartTotal.textContent = `Total: Rs ${total.toFixed(2)}`;
  });
});

// Update the cart sidebar
function updateCartSidebar() {
  cartList.innerHTML = '';
  cartItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.title} - Rs ${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
  });
}

// Event listener for cart icon click
document.getElementById('cartIcon').addEventListener('click', () => {
  cartSidebar.classList.toggle('show');
});

// Event listener for close button in cart sidebar
document.getElementById('cartCloseButton').addEventListener('click', () => {
  cartSidebar.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.getElementById('cartIcon');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartCloseButton = document.getElementById('cartCloseButton');
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');
  const products = document.querySelectorAll('.card');

  let cartItems = [];
  let total = 0;

  products.forEach(product => {
    const addToCartButton = product.querySelector('.addToCartButton');
    const itemName = product.querySelector('.card-title').textContent;
    const itemPrice = parseFloat(product.querySelector('.item-price').textContent);

    addToCartButton.addEventListener('click', () => {
      cartItems.push({ name: itemName, price: itemPrice });
      total += itemPrice;

      updateCartDisplay();
    });
  });

  cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
  });

  cartCloseButton.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
  });

  function updateCartDisplay() {
    cartList.innerHTML = '';
    cartItems.forEach(item => {
      const cartItemElement = document.createElement('li');
      cartItemElement.textContent = `${item.name} - Rs ${item.price.toFixed(2)}`;
      cartList.appendChild(cartItemElement);
    });

    cartTotal.textContent = `Total: Rs ${total.toFixed(2)}`;
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.addToCartButton');
  const cartItemCount = document.getElementById('cartItemCount');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartCloseButton = document.getElementById('cartCloseButton');
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');

  let cartItems = [];
  let total = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const itemName = item.querySelector('.card-title').textContent;
      const itemPrice = parseFloat(item.querySelector('.item-price').textContent);
      
      cartItems.push({ name: itemName, price: itemPrice });
      total += itemPrice;

      cartItemCount.textContent = cartItems.length;
      cartTotal.textContent = `Total: Rs ${total.toFixed(2)}`;

      const cartItemElement = document.createElement('li');
      cartItemElement.textContent = `${itemName} - Rs ${itemPrice.toFixed(2)}`;
      cartList.appendChild(cartItemElement);
    });
  });

  document.getElementById('cartIcon').addEventListener('click', () => {
    cartSidebar.classList.add('active');
  });

  cartCloseButton.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
  });
});
// 
// Sample code for adding items to the cart using JavaScript
const cart = []; // Keep track of items in the cart

document.querySelectorAll('.addToCartButton').forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const card = event.target.closest('.card');
  const imgSrc = card.querySelector('.card-img-top').src;
  const title = card.querySelector('.card-title').textContent;
  const price = card.querySelector('span h6').textContent;

  const cartItem = {
    imgSrc,
    title,
    price
  };

  cart.push(cartItem); // Add item to cart

  updateCartList(); // Update the cart list
}

function updateCartList() {
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = ''; // Clear existing cart items

  cart.forEach(item => {
    const cartItem = `
      <li class="cart-item">
        <div class="cart-item-image">
          <img src="${item.imgSrc}" alt="${item.title}" class="cart-item-img">
        </div>
        <div class="cart-item-details">
          <h6>${item.title}</h6>
          <p>${item.price}</p>
        </div>
      </li>
    `;

    cartList.insertAdjacentHTML('beforeend', cartItem);
  });
}


