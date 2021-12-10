$(document).ready(function() {
	// Check for click events on the navbar burger icon
	$('.navbar-burger').click(function() {
		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$('.navbar-burger').toggleClass('is-active');
		$('.navbar-menu').toggleClass('is-active');
	});
});

let currentImage = document.getElementsByClassName('slideshow-image');
let imageBox = document.getElementsByClassName('slideshow-box');
let k = 0;
currentImage[k].style.display = 'flex';
imageBox[k].addEventListener('click', function() {
	if (k >= currentImage.length) {
		k = 0;
	}
	k += 1;
	currentImage[k].style.display = 'flex';
	currentImage[k - 1].style.display = 'none';
});
