let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");




function home() {
   mainPage.style.display = "flex";
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function shop() {
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color="black";


}


function blog() {

   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block"
   aboutPage.style.display = "none";
   contactus.style.display="none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function about() {
   aboutPage.style.display = "block";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display="none";

   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color="black";


}


function contact() {
   contactus.style.display="block";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"

} 

function showCard(img){
   let newImg = document.getElementById("cartImg");
   newImg.src=img.src;
   document.querySelector(".fullPage").style.display="flex";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"



}

// Add to Cart

function addItem(){
   document.querySelector(".addCart").style.display="block";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

 



}
 
function addToCart(){
   alert("Added To Cart");
   location.reload();
}
// Initialize an empty cart array
let cart = [];

// Function to add item to the cart
function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    cart.push(item);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clear current cart

    // Display all cart items
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(li);
    });

    // Update cart icon with the number of items in cart
    document.querySelector('.fa-cart-shopping').textContent = `Cart (${cart.length})`;
}

// Function to toggle the visibility of the cart container
function toggleCart() {
    const cartContainer = document.getElementById('cartContainer');
    if (cartContainer.style.display === 'none') {
        cartContainer.style.display = 'block';
    } else {
        cartContainer.style.display = 'none';
    }
}

// Function for proceeding to checkout (for demonstration purposes)
function checkout() {
    alert('Proceeding to checkout...');
    // You can add more logic here for actual checkout process
}