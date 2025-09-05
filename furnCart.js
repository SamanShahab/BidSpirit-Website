document.addEventListener('DOMContentLoaded', function() {
    let cart = []; // Array to store cart items
    const cartIcon = document.querySelector('.cart_num'); // Cart item count element
    const productImages = document.querySelectorAll('.product_image_thumbnail'); // Product images
    const addToCartButton = document.querySelector('.cart_button a'); // Add to Cart button
    const quantityInput = document.getElementById('quantity_input'); // Quantity input
    const productName = document.querySelector('.product_name').textContent; // Product name
    const productPrice = parseFloat(document.querySelector('.product_price').textContent.replace('$', '')); // Product price

    // Update Cart Icon
    function updateCartIcon() {
        cartIcon.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Add item to cart
    function addItemToCart() {
        const quantity = parseInt(quantityInput.value);
        const item = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };
        
        // Check if the item is already in the cart
        const existingItem = cart.find(product => product.name === item.name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push(item);
        }

        updateCartIcon();
        alert(`${quantity} ${productName} added to cart!`);
    }

    // Handle product image selection
    productImages.forEach(image => {
        image.addEventListener('click', function() {
            const selectedProduct = image.getAttribute('data-image');
            // Update the main product image or details based on the selected image
            document.querySelector('.product_image_large img').src = selectedProduct;
        });
    });

    // Add to Cart button click event
    addToCartButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        addItemToCart();
    });

    // Handle cart item deletion (implement this in the cart page or modal)
    function deleteCartItem(itemName) {
        cart = cart.filter(product => product.name !== itemName);
        updateCartIcon();
    }
});
