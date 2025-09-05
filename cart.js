document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('.add-to-cart-btn');
    const cartCount = document.querySelector('.cart-count');
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartItemsContainer = document.querySelector('.cart-items');
    const deleteAllBtn = document.querySelector('.delete-all-btn');

    let cartItems = [];
    let itemCount = 0;

    // Function to update the cart display
    function updateCart() {
        cartItemsContainer.innerHTML = ''; // Clear the cart items display
        cartItems.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <span>${item}</span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const itemIndex = event.target.dataset.index;
                cartItems.splice(itemIndex, 1); // Remove item from the array
                itemCount--;
                cartCount.textContent = itemCount; // Update the item count
                updateCart(); // Re-render the cart
            });
        });

        // Update the total price (assuming each item has a set price, modify as needed)
        const totalPrice = itemCount * 30000; // Example price
        document.querySelector('.cart-total').textContent = `Total: $${totalPrice.toLocaleString()}`;
    }

    // Add item to cart
    cartBtn.addEventListener('click', () => {
        const itemName = "1965 Ford Mustang"; // Example item name, customize as needed
        cartItems.push(itemName);
        itemCount++;
        cartCount.textContent = itemCount; // Update the item count
        updateCart();
    });

    // Delete all items from the cart
    deleteAllBtn.addEventListener('click', () => {
        cartItems = [];
        itemCount = 0;
        cartCount.textContent = itemCount; // Reset the item count
        updateCart(); // Re-render the cart
    });

    // Toggle cart dropdown visibility
    document.querySelector('.cart').addEventListener('click', () => {
        cartDropdown.classList.toggle('show');
    });
});
