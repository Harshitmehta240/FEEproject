
const cards = document.querySelectorAll('.card');
const right_arrow = document.querySelector('.arrow.right');
const left_arrow = document.querySelector('.arrow.left');

const shopping_cart = document.querySelector('.shopping-cart');
const cart_btns = document.querySelectorAll('.add-to-cart');

let left = 0;
let card_size = 25.4;
let total_card_size = cards.length * card_size - card_size * 4;

if (window.matchMedia('(max-width: 768px)').matches) {
    card_size = 52;
    total_card_size = cards.length * card_size - card_size * 2;
}

left_arrow.onclick = () => {
    left -= card_size;

    if (left <= 0) left = 0;
    moveCards(left);
    checkArrowVisibility(left);
}

left_arrow.style.opacity = '0';

right_arrow.onclick = () => {
    left += card_size;

    if (left >= total_card_size) left = total_card_size;
    moveCards(left);
    checkArrowVisibility(left);
}

function moveCards(left) {
    for (card of cards) {
        card.style.left = -left + "%";
    }
}

function checkArrowVisibility(pos) {
    if (pos == 0) {
        left_arrow.style.opacity = '0';
    } else {
        left_arrow.style.opacity = '1';
    }
    if (pos >= total_card_size) {
        right_arrow.style.opacity = '0';
    } else {
        right_arrow.style.opacity = '1';
    }
}

// Fly To Shopping Cart Effect

for (cart_btn of cart_btns) {
    cart_btn.onclick = (e) => {

        shopping_cart.classList.add('active');

        let product_count = Number(shopping_cart.getAttribute('data-product-count')) || 0;
        shopping_cart.setAttribute('data-product-count', product_count + 1);

        // finding first grand parent of target button 
        let target_parent = e.target.parentNode.parentNode.parentNode;
        target_parent.style.zIndex = "100";
        // Creating separate Image
        let img = target_parent.querySelector('img');
        let flying_img = img.cloneNode();
        flying_img.classList.add('flying-img');

        target_parent.appendChild(flying_img);

        // Finding position of flying image

        const flying_img_pos = flying_img.getBoundingClientRect();
        const shopping_cart_pos = shopping_cart.getBoundingClientRect();

        let data = {
            left: shopping_cart_pos.left - (shopping_cart_pos.width / 2 + flying_img_pos.left + flying_img_pos.width / 2),
            top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30
        }

        console.log(data.top);

        flying_img.style.cssText = `
                                --left : ${data.left.toFixed(2)}px;
                                --top : ${data.top.toFixed(2)}px;
                                `;


        setTimeout(() => {
            target_parent.style.zIndex = "";
            target_parent.removeChild(flying_img);
            shopping_cart.classList.remove('active');
        }, 1000);
    }
}
// script.js

let cart = [];

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.style.display = (cartSidebar.style.display === 'block') ? 'none' : 'block';
    updateCart();
}

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Proceeding to checkout. Total: $${total}`);
}
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const logo = document.querySelector(".logo");
  
    sidebar.addEventListener("click", () => {
      sidebar.classList.toggle("active");
});
  });
  // Get references to the menu button and sidebar
const menuButton = document.querySelector('#menu-btn');
const sidebar = document.querySelector('.sidebar');

// Add event listener to the menu button
menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Toggle the 'active' class on the sidebar
});
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('active'); // Close the sidebar if clicked outside
    }
});


  





