import quotePage from '/game/guess_that_quote.html';
import axios from 'axios';

const guessQuoteBtn = document.getElementById('guessQuote');

export const guessQuotePage = () => {
	window.location.href = `${quotePage}`;
};

guessQuoteBtn && guessQuoteBtn.addEventListener('click', guessQuotePage);

// Quote Page Functionality (guess_that_quote.html)

//An array to hold character data for the multiple choice buttons
let quoteData = [];

//setting variable names to each multiple choice answer button

let buttonDiv = document.getElementsByClassName('column');
let options = buttonDiv[2].getElementsByClassName('modeBtn');
let btns = buttonDiv[2].getElementsByTagName('button');

const getQuoteData = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`);
		// console.log(`Quote Data: ${response.data.quote}`);
		console.log(response);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};

const getChoice2 = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`);
		// console.log(`Quote Data: ${response.data.quote}`);
		console.log(response);
		return response.data.character;
	} catch (err) {
		console.log(err);
	}
};

const getChoice3 = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`);
		// console.log(`Quote Data: ${response.data.quote}`);
		console.log(response);
		return response.data.character;
	} catch (err) {
		console.log(err);
	}
};

const getChoice4 = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`);
		// console.log(`Quote Data: ${response.data.quote}`);
		console.log(response);
		return response.data.character;
	} catch (err) {
		console.log(err);
	}
};

const createQuote = async () => {
	const quoteElement = await getQuoteData();
	const choice2 = await getChoice2();
	const choice3 = await getChoice3();
	const choice4 = await getChoice4();

	const parentP = document.getElementById('quoteAPI');
	const paraEle = document.createElement('p');
	const hintEle = document.createElement('p');

	// options.addEventListener('click', function() {
	// 	if (option1.textContent == quoteElement.character) {
	// 		console.log('hi');
	// 	}
	// });

	//appending each quote to the who said that quote page.
	paraEle.append(`${quoteElement.quote}.`);
	hintEle.append(`*Hint: this quote is from the anime ${quoteElement.anime}`);

	//pushing the quote character data to quotedata array
	quoteData.push(quoteElement.character, choice2, choice3, choice4);

	//logging the data
	console.log('quote: ' + quoteElement.quote);
	console.log('quote character data: ' + quoteData);

	// Must randomize the choices -- Work on this later
	//currently the first data being pushed into quoteData is the answer. quoteElement.character = quoteElement.quote

	//Math.floor.. gets a random number from 0-3 which is what we want since there are four choices

	// let randomInteger = Math.floor(Math.random() * 4);
	//issue with this is that it doesn't account for if a number repeats
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

	checkAnswer = (i) => {
		console.log(i);
		if (options[i].textContent == quoteElement.character) {
			options[i].style.backgroundColor = 'green';
			options[i].style.color = 'white';
		} else {
			options[i].style.backgroundColor = 'red';
			options[i].style.color = 'white';
		}
	};

	let randomNumArr = arr;
	for (let i = 0; i <= options.length; i++) {
		options[i].textContent = `${quoteData[randomNumArr[i]]}`;
		options[i].addEventListener('click', checkAnswer(i));
	}
};

createQuote();
