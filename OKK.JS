let cart = [];
        
                // Function to update the cart sidebar
                function updateCart() {
                    const cartItemsContainer = document.getElementById('cart-items');
                    const cartTotalContainer = document.getElementById('cart-total');
                    cartItemsContainer.innerHTML = '';
                    let total = 0;
        
                    cart.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = `${item.name} - $${item.price}`;
                        cartItemsContainer.appendChild(li);
                        total += parseFloat(item.price);
                    });
        
                    cartTotalContainer.textContent = `Total: $${total.toFixed(2)}`;
                }
        
                // Event listener for Add to Cart button
                document.querySelectorAll('.add-to-cart').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const productName = event.target.getAttribute('data-name');
                        const productPrice = event.target.getAttribute('data-price');
                        cart.push({ name: productName, price: productPrice });
                        updateCart();
                    });
                });
        
                // Open Cart Sidebar
                document.getElementById('cart-btn').addEventListener('click', () => {
                    document.getElementById('cartSidebar').style.display = 'block';
                });
        
                // Close Cart Sidebar
                document.getElementById('closeCart').addEventListener('click', () => {
                    document.getElementById('cartSidebar').style.display = 'none';
                });
        
                // Checkout Button - Show Alert
                document.getElementById('checkout-btn').addEventListener('click', () => {
                    alert('Thank you for visiting...');
                });