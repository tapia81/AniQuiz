// import { guessAnimePage } from '/components/animePage.js';
// import { guessMangaPage } from '/components/mangaPage.js';
// import { guessQuotePage } from '/components/quotePage.js';


$(document).ready(function() {
	// Check for click events on the navbar burger icon
	$('.navbar-burger').click(function() {
		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$('.navbar-burger').toggleClass('is-active');
		$('.navbar-menu').toggleClass('is-active');
	});
});


// export {guessAnimePage, guessMangaPage, guessQuotePage}