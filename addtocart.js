
// Sample cart array to hold items
let cart = [];

// Function to update cart icon with number of items
function updateCartIcon() {
    const cartNum = document.querySelector('.cart_num');
    cartNum.innerText = cart.length;
}

// Function to update cart dropdown with cart items
function updateCartDropdown() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    // Clear the current items
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    // Add each item in the cart to the dropdown
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
    <span>${item.name}</span>
    <span>${item.price}</span>
    <button class="delete-btn" data-index="${index}">Delete</button>
    `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += parseFloat(item.price.replace('$', ''));
    });

    // Update the total price
    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;

    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function () {
            const itemIndex = this.getAttribute('data-index');
            removeFromCart(itemIndex);
        });
    });
}

// Function to add item to cart
function addToCart(productName, productPrice) {
    // Create an object for the product
    const product = {
        name: productName,
        price: productPrice
    };

    // Add product to the cart
    cart.push(product);

    // Update the cart icon and dropdown
    updateCartIcon();
    updateCartDropdown();

    // Show a success alert
    alert(`${productName} has been added to your cart.`);
}

// Function to remove item from cart
function removeFromCart(index) {
    // Remove item from the cart array
    cart.splice(index, 1);

    // Update the cart icon and dropdown
    updateCartIcon();
    updateCartDropdown();

    // Show a success alert
    alert('Item has been removed from your cart.');
}

// Event listeners for the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        // Find the product details
        const product = this.closest('.product');
        const productName = product.querySelector('.product_name').innerText;
        const productPrice = product.querySelector('.product_price').innerText;

        // Add the product to the cart
        addToCart(productName, productPrice);
    });
});

// Toggle cart dropdown on cart icon click
document.querySelector('.cart-toggle').addEventListener('click', function (event) {
    event.preventDefault();
    const cartDropdown = document.querySelector('.cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

