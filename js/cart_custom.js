/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Quantity


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menuActive = false;
	var menu = $('.menu');
	var burger = $('.burger_container');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initQuantity();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.burger_container').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Quantity

	*/

	function initQuantity()
	{
		// Handle product quantity input
		if($('.product_quantity').length)
		{
			var input = $('#quantity_input');
			var incButton = $('#quantity_inc_button');
			var decButton = $('#quantity_dec_button');

			var originalVal;
			var endVal;

			incButton.on('click', function()
			{
				originalVal = input.val();
				endVal = parseFloat(originalVal) + 1;
				input.val(endVal);
			});

			decButton.on('click', function()
			{
				originalVal = input.val();
				if(originalVal > 0)
				{
					endVal = parseFloat(originalVal) - 1;
					input.val(endVal);
				}
			});
		}
	}
});

/*New CART*/

 document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartNum = document.querySelector('.cart_num');
    const cartItemsList = document.getElementById('cart-items-list');

    function updateCart() {
        cartItemsList.innerHTML = '';
        if (cartItems.length === 0) {
            cartItemsList.innerHTML = '<li class="empty-cart">Cart is empty</li>';
            cartNum.textContent = '0';
        } else {
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.price}`;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-item');
                deleteButton.addEventListener('click', () => removeFromCart(item.name));
                li.appendChild(deleteButton);
                cartItemsList.appendChild(li);
            });
            cartNum.textContent = cartItems.length;
        }
    }

    function addToCart(itemName, itemPrice) {
        const item = { name: itemName, price: itemPrice };
        cartItems.push(item);
        updateCart();
    }

    function removeFromCart(itemName) {
        const index = cartItems.findIndex(item => item.name === itemName);
        if (index !== -1) {
            cartItems.splice(index, 1);
            updateCart();
        }
    }

    document.querySelectorAll('.cart_product_add').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const itemPrice = this.getAttribute('data-price');
            addToCart(itemName, itemPrice);
        });
    });

    document.querySelectorAll('.cart_product_remove').forEach(button => {
        button.addEventListener('click', function() {
            removeFromCart(cartItems[cartItems.length - 1]?.name);
        });
    });
});

document.querySelectorAll('.quantity_inc').forEach(button => {
    button.addEventListener('click', function () {
        const quantityInput = this.closest('.product_quantity').querySelector('#quantity_input');
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
});

document.querySelectorAll('.quantity_dec').forEach(button => {
    button.addEventListener('click', function () {
        const quantityInput = this.closest('.product_quantity').querySelector('#quantity_input');
        if (parseInt(quantityInput.value) > 0) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
});

// Assuming you have these variables and functions already defined
let cartItems = []; // Array or object to store cart items

// Function to update the cart logo
function updateCartLogo() {
    const cartBadge = document.getElementById('cart_num'); // Cart badge element
    const itemCount = cartItems.length; // Number of items in the cart
    if (itemCount > 0) {
        cartBadge.textContent = itemCount; // Update badge with number of items
    } else {
        cartBadge.textContent = '0'; // Show '0' if cart is empty
    }
}

// Clear cart button event listener
document.getElementById('clearCartButton').addEventListener('click', function() {
    // Clear cart items
    cartItems = []; // Reset cart items array
    updateCartUI(); // Update the cart UI (your function to refresh cart content)
    updateCartLogo(); // Update cart logo to reflect the cleared cart
    alert('Cart has been cleared.');
});

// Update cart button event listener
document.getElementById('updateCartButton').addEventListener('click', function() {
    // Update cart items if needed
    // This could involve recalculating totals or refreshing the list
    updateCartUI(); // Update the cart UI (refresh cart content)
    updateCartLogo(); // Update cart logo to reflect updated items
    alert('Cart has been updated.');
});

// Function to update the cart UI
function updateCartUI() {
    // Your implementation to refresh the cart content
    // For example, you might re-render the list of items in the cart
}


document.querySelectorAll('.cart_product_remove').forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = this.closest('li.cart_product');
        cartItem.remove();

        // Update the cart count or display a message if the cart is empty
        updateCartCount();
    });
});

function updateCartCount() {
    const cartItems = document.querySelectorAll('#cartDropdownItems li');
    const cartLogoCounter = document.querySelector('.cart-toggle .cart-counter'); // Assuming you have a cart counter element

    if (cartItems.length === 0) {
        cartLogoCounter.textContent = '0'; // Display '0' if the cart is empty
    } else {
        cartLogoCounter.textContent = cartItems.length; // Update with the number of items in the cart
    }
}
