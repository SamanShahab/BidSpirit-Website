/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu


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
});

/*new*/
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('review_form');

    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get form inputs
        const name = form.querySelector('input[type="text"][placeholder="Name"]').value.trim();
        const email = form.querySelector('input[type="email"][placeholder="E-mail"]').value.trim();
        const subject = form.querySelector('input[type="text"][placeholder="Subject"]').value.trim();
        const message = form.querySelector('textarea[name="review_form_text"]').value.trim();

        // Check if all fields are filled
        if (name && email && subject && message) {
            // Display success alert
            alert('Message sent successfully!');
            // Optionally, submit the form data here or redirect
            // form.submit();
        } else {
            // Display error alert
            alert('Please fill out all fields before sending your message.');
        }
    });
});
