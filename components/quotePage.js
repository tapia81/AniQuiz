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
paraEle.classList.add('quoteStyling');
let menu = document.getElementById('quoteMainMenu');

let modelBox = document.getElementsByClassName('model-box');
let modelText = document.getElementsByClassName('model-text');
let modalBtn = document.getElementById('closeBt');

let answer = document.getElementsByClassName('answer');

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

	modalBtn.addEventListener('click', function() {
		modelBox[0].style.display = 'none';

		//allows the page to continue scrolling when you exit the modal
		document.body.style.position = '';
		document.body.style.top = '';
	});

	returnMenu();
	let load = document.getElementById('loading');

	const createQuote = async () => {
		if (parentP) {
			let quoteData = [];

			console.log(quoteData.length == 0);
			const quoteElement = await getQuoteData();
			const choice2 = await getChoice2();
			const choice3 = await getChoice3();
			const choice4 = await getChoice4();

			if (quoteData !== 0) {
				load.style.display = 'none';
			}

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
					modelBox[0].style.display = 'flex';

					//stops the page from scrolling when the modal box appears
					document.body.style.position = 'fixed';
					document.body.style.top = `-${window.scrollY}px`;
					if (options[i].textContent == quoteElement.character) {
						modelText[0].textContent = `Congrats! You choose the correct answer. Your answer was:`;
						answer[0].textContent = `${quoteElement.character}`;
						answer[0].style.backgroundColor = 'green';
						options[i].style.backgroundColor = 'green';
						options[i].style.color = 'white';
						for (let j = 0; j < options.length; j++) {
							options[j].disabled = true;
						}
					} else {
						modelText[0].textContent = `Sorry, You chose the wrong answer! The correct answer should have been:`;
						answer[0].textContent = `${quoteElement.character}`;
						answer[0].style.backgroundColor = 'red';
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
	let i = 1;
	let nextPageBtn = document.getElementsByClassName('nextQuestion');
	console.log(`Question: ${i}`);
	modelBox[0].style.display = 'none';

	nextPageBtn[0].addEventListener('click', function() {
		i += 1;
		console.log(`Question: ${i}`);

		if (i <= 10) {
			load.style.display = 'block';
			clearQuote();
			createQuote();

			for (let j = 0; j < options.length; j++) {
				options[j].disabled = false;
				options[j].style.backgroundColor = 'white';
				options[j].style.color = 'black';
			}
			if (i == 10) {
				nextPageBtn[0].disabled = true;
			}
		}
	});
}
