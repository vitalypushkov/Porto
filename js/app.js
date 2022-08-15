$(function () {

	var mixer = mixitup('.works', {
		load: {
			filter: 'all'
		},
		animation: {
			animateResizeContainer: false,
			animateResizeTargets: false,
			clampHeight: false,
			clampWidth: false,
			duration: 300
		},
		controls: {
			enable: true,
			scope: 'local'
		}
	});
})

/* Burger */
const burgerIcon = document.querySelector(".menu__burger-btn");
const burgerMenu = document.querySelector(".header__nav");
const body = document.body;
const headerLink = document.querySelector(".header__link");

burgerIcon.addEventListener("click", () => {
	burgerIcon.classList.toggle("menuOpen");
	burgerMenu.classList.toggle("menuOpen");
	body.classList.toggle("lock");

})

document.querySelectorAll(".header__link").forEach(e =>
	e.addEventListener("click", () => {
		e.classList.add("taped")
		e.classList.remove("taped")
		burgerIcon.classList.remove("menuOpen");
		burgerMenu.classList.remove("menuOpen");
		body.classList.remove("lock");

	}));
/* =============== */

document.querySelectorAll('a[href*="#"]').forEach(e =>
	e.addEventListener("click", () => {
		e.classList.add("taped")
		e.classList.remove("taped")
		burgerIcon.classList.remove("menuOpen");
		burgerMenu.classList.remove("menuOpen");
		body.classList.remove("lock");

	}));

/* ======= sticky header============ */
const header = document.querySelector(".header__nav")
// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
window.onscroll = function () {
	if (window.scrollY >= 1) {
		header.classList.add('fixed')
	}
	else {
		header.classList.remove('fixed')
	}
}
/* ========================= */
/* ======== Smooth scroll================= */
// Select all links with hashes
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});
