import quotePage from '/game/guess_that_quote.html';
import axios from 'axios';

const guessQuoteBtn = document.getElementById('guessQuote');

export const guessQuotePage = () => {
	window.location.href = `${quotePage}`;
};

guessQuoteBtn && guessQuoteBtn.addEventListener('click', guessQuotePage);

// Quote Page Functionality (guess_that_quote.html)

//An array to hold character data for the multiple choice buttons

//setting variable names to each multiple choice answer button

let buttonDiv = document.getElementsByClassName('column');
let options = buttonDiv[2].getElementsByClassName('modeBtn');

const getQuoteData = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`);
		console.log(response);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};

const getChoice2 = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`);

		console.log(response);
		return response.data.character;
	} catch (err) {
		console.log(err);
	}
};

const getChoice3 = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`);

		console.log(response);
		return response.data.character;
	} catch (err) {
		console.log(err);
	}
};

const getChoice4 = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`);

		console.log(response);
		return response.data.character;
	} catch (err) {
		console.log(err);
	}
};

const createQuote = async () => {
	const parentP = document.getElementById('quoteAPI');
	if (parentP) {
		let quoteData = [];
		const quoteElement = await getQuoteData();
		const choice2 = await getChoice2();
		const choice3 = await getChoice3();
		const choice4 = await getChoice4();

		const paraEle = document.createElement('p');
		const hintEle = document.createElement('p');

		//appending each quote to the who said that quote page.
		paraEle.append(`${quoteElement.quote}.`);
		hintEle.append(`*Hint: this quote is from the anime ${quoteElement.anime}`);

		//pushing the quote character data to quotedata array
		quoteData.push(quoteElement.character, choice2, choice3, choice4);

		//logging the data
		console.log('quote: ' + quoteElement.quote);
		console.log('quote character data: ' + quoteData);
		parentP.appendChild(paraEle);
		paraEle.appendChild(hintEle);
		let arr = [];

		randomGen = () => {
			for (let choices = [ 0, 1, 2, 3 ], i = options.length; i--; ) {
				let randomNum = choices.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
				arr.push(randomNum);
			}
			return arr;
		};
		console.log(arr);

		randomGen();

		let randomNumArr = arr;

		for (let i = 0; i <= options.length; i++) {
			options[i].textContent = `${quoteData[randomNumArr[i]]}`;
		}
	}
};

createQuote();

let nextPageBtn = document.getElementsByClassName('nextQuestion');
console.log(nextPageBtn);
nextPageBtn[0].addEventListener('click', function() {
	console.log('next click');
	rand = Math.floor(Math.random() * 50);
	rand2 = Math.floor(Math.random() * 50);
	rand3 = Math.floor(Math.random() * 50);
	rand4 = Math.floor(Math.random() * 50);
	createAnimeGame();
	for (let j = 0; j < options.length; j++) {
		options[j].disabled = false;
		options[j].style.backgroundColor = 'white';
		options[j].style.color = 'black';
	}
});
