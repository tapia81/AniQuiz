
import {guessAnimePage, guessQuotePage, guessMangaPage} from '/redirect.js'


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
let i = 3;
imageBox[0].addEventListener('click', function() {
	i += 1;
	if (i < 10) {
		currentImage[0].src = `wireframes/desktop/Desktop-0${i}.jpg`;
	} else if (i == 10) {
		currentImage[0].src = `wireframes/desktop/Desktop-${i}.jpg`;
	} else {
		return (i = 2);
	}
});

guessAnimePage(); 
