import animePage from '/game/guess_that_anime.html';
import startGamePage from '/start_the_game.html'
import axios from 'axios';

const guessAnimeBtn = document.getElementById('guessAnime');

export const guessAnimePage = () => {
	window.location.href = `${animePage}`;
};

guessAnimeBtn && guessAnimeBtn.addEventListener('click', guessAnimePage);

let buttonDiv = document.getElementsByClassName('column');
let options = buttonDiv[2].getElementsByClassName('modeBtn');

//Used to get random images from the top list of characters in the Jikan API
let rand = Math.floor(Math.random() * 51);
let rand2 = Math.floor(Math.random() * 51);
let rand3 = Math.floor(Math.random() * 51);
let rand4 = Math.floor(Math.random() * 51);

let newArr = [];

newArr.push(rand);
newArr.push(rand2);
newArr.push(rand3);
newArr.push(rand4);
console.log(newArr);

//getting the response for the anime image

const getAnimeImg = async () => {
	try {
		const response = await axios.get(`https://api.jikan.moe/v3/top/anime/1/tv`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};


//creating the anime game

const createAnimeGame = async () => {
	const imgData = await getAnimeImg();
		closeModal(); 



	//appending the image on the page

	const parentDiv = document.getElementById('animeColumn');
	const animeImg = document.createElement('img');

	//Anime response photo & answer from photo

	console.log('ANIME response answer photo: ' + imgData.top[rand].image_url);
	console.log('ANIME response answer title: ' + imgData.top[rand].title);

	//Appending anime image into it's parentDiv

	animeImg.src = `${imgData.top[rand].image_url}`;
	parentDiv.appendChild(animeImg);

	//anime button choice randomizer section

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

	for (let i = 0; i < options.length; i++) {
		options[i].textContent = `${imgData.top[newArr[randomNumArr[i]]].title}`;
	}

    //Choices for correct & incorrect button clicks. 


	for (let i = 0; i < options.length; i++) {
		options[i].addEventListener('click', function() {

			//correct option screen 

			if (options[i].textContent == imgData.top[rand].title) {
				options[i].style.backgroundColor = 'green';
				options[i].style.color = 'white';


				let modalDiv = document.getElementById('modalContent'); 
				let correctAnswerP = document.createElement('p'); 
				let correctDiv= document.createElement('div');
				let correctAnswer2 = document.createElement('p');  
				correctDiv.classList.add('correct');
				correctAnswerP.textContent = `Congrats! You choose the correct answer. Your answer was:`
				correctAnswer2 = `${imgData.top[rand].title}`
				modalDiv.append(correctAnswerP)
				modalDiv.append(correctDiv); 
				correctDiv.append(correctAnswer2); 

				for (let j = 0; j < options.length; j++) {
					options[j].disabled = true;
					openModal(); 

				}
			} else {

				//Incorrect option screen 

				options[i].style.backgroundColor = 'red';
				options[i].style.color = 'white';

				let modalDiv = document.getElementById('modalContent'); 
				let incorrectAnswer = document.createElement('p'); 
				let incorrectDiv= document.createElement('div');
				let correctAnswer = document.createElement('p');  
				incorrectDiv.classList.add('incorrect');
				incorrectAnswer.textContent = `Sorry, You chose the wrong answer! The correct answer should have been: `
				correctAnswer = `${imgData.top[rand].title}`
				modalDiv.append(incorrectAnswer)
				modalDiv.append(incorrectDiv); 
				incorrectDiv.append(correctAnswer); 
				
				for (let j = 0; j < options.length; j++) {
					options[j].disabled = true;
					openModal(); 

				}
			}
		});
	}
	returnMenu(); 
};

createAnimeGame();

//Modal section
let modal = document.querySelector(".modal")
const openModal = () => {

modal.classList.add('is-active'); 
}

const closeModal = () => {
	let modalBtn = document.getElementById('closeBt');
	modalBtn.addEventListener('click', function() {
	modal.classList.remove('is-active')
	})
}

//Main menu functionality 
const returnMenu = () => {
    let menu = document.getElementById('animeMainMenu'); 
    menu.addEventListener('click', function () {
        window.location.href = `${startGamePage}`
    })    
}