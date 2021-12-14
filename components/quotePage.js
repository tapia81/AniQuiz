import quotePage from '/game/guess_that_quote.html';
import startGamePage from '/start_the_game.html';
import axios from 'axios';

const guessQuoteBtn = document.getElementById('guessQuote');

export const guessQuotePage = () => {
	window.location.href = `${quotePage}`;
};

guessQuoteBtn && guessQuoteBtn.addEventListener('click', guessQuotePage);

const parentP = document.getElementById('quoteAPI');
const paraEle = document.createElement('p');
const hintEle = document.createElement('p');
let menu = document.getElementById('quoteMainMenu');

const clearQuote = () => {
	while (parentP.firstChild) {
		parentP.firstChild.remove();
		// parentP.innerHTML = ""
	}
};

if (parentP) {
	let buttonDiv = document.getElementsByClassName('column');
	let options = buttonDiv[2].getElementsByClassName('modeBtn');

	const getQuoteData = async () => {
		try {
			const response = await axios.get(`https://animechan.vercel.app/api/random`);
			// console.log(response);
			return response.data;
		} catch (err) {
			console.log(err);
		}
	};

	const getChoice2 = async () => {
		try {
			const response = await axios.get(`https://animechan.vercel.app/api/random`);
			// console.log(response);
			return response.data.character;
		} catch (err) {
			console.log(err);
		}
	};

	const getChoice3 = async () => {
		try {
			const response = await axios.get(`https://animechan.vercel.app/api/random`);

			// console.log(response);
			return response.data.character;
		} catch (err) {
			console.log(err);
		}
	};

	const getChoice4 = async () => {
		try {
			const response = await axios.get(`https://animechan.vercel.app/api/random`);

			// console.log(response);
			return response.data.character;
		} catch (err) {
			console.log(err);
		}
	};

	const returnMenu = () => {
		menu.addEventListener('click', function() {
			window.location.href = `${startGamePage}`;
		});
	};

	returnMenu();

	const createQuote = async () => {
		if (parentP) {
			let load = document.getElementById('loading');

			let quoteData = [];

			const quoteElement = await getQuoteData();
			const choice2 = await getChoice2();
			const choice3 = await getChoice3();
			const choice4 = await getChoice4();

			if (quoteData.length === 0) {
				load.style.display = 'block';
			}

			load.style.display = 'none';

			//appending each quote to the who said that quote page.
			paraEle.textContent = `${quoteElement.quote}.`;
			hintEle.textContent = `*Hint: this quote is from the anime ${quoteElement.anime}`;

			//pushing the quote character data to quotedata array
			quoteData.push(quoteElement.character, choice2, choice3, choice4);

			//logging the data
			console.log('quote: ' + quoteElement.quote);
			console.log('character: ' + quoteElement.character);
			// console.log('quote character data: ' + quoteData);

			paraEle.appendChild(hintEle);
			parentP.appendChild(paraEle);

			let arr = [];

			randomGen = () => {
				for (let choices = [ 0, 1, 2, 3 ], i = options.length; i--; ) {
					let randomNum = choices.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
					arr.push(randomNum);
				}
				return arr;
			};

			randomGen();

			let randomNumArr = arr;
			console.log(quoteData);
			// for (let i = 0; i <= options.length; i++) {
			options[[ randomNumArr[0] ]].textContent = quoteData[0];
			options[[ randomNumArr[1] ]].textContent = quoteData[1];
			options[[ randomNumArr[2] ]].textContent = quoteData[2];
			options[[ randomNumArr[3] ]].textContent = quoteData[3];

			for (let i = 0; i < options.length; i++) {
				options[i].addEventListener('click', function() {
					if (options[i].textContent == quoteElement.character) {
						console.log('right');
						options[i].style.backgroundColor = 'green';
						options[i].style.color = 'white';
						for (let j = 0; j < options.length; j++) {
							options[j].disabled = true;
						}
					} else {
						options[i].style.backgroundColor = 'red';
						options[i].style.color = 'white';
						for (let j = 0; j < options.length; j++) {
							options[j].disabled = true;
						}
					}
				});
			}
		}
	};

	createQuote();

	let nextPageBtn = document.getElementsByClassName('nextQuestion');

	nextPageBtn[0].addEventListener('click', function() {
		// console.log('next click');
		// console.log('clear');
		clearQuote();
		createQuote();

		for (let j = 0; j < options.length; j++) {
			options[j].disabled = false;
			options[j].style.backgroundColor = 'white';
			options[j].style.color = 'black';
		}
	});
}
