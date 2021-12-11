import animePage from '/game/guess_that_anime.html';
import startGame from '/start_the_game.html'
import axios from 'axios';

const guessAnimeBtn = document.getElementById('guessAnime');

export const guessAnimePage = () => {
	window.location.href = `${animePage}`;
};

guessAnimeBtn && guessAnimeBtn.addEventListener('click', guessAnimePage);

let buttonDiv = document.getElementsByClassName('column');
let options = buttonDiv[2].getElementsByClassName('modeBtn');

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

const getAnimeImg = async () => {
	try {
		const response = await axios.get(`https://api.jikan.moe/v3/top/anime/1/tv`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};

const createAnimeGame = async () => {
	const imgData = await getAnimeImg();

	//appending the image on the page

	const parentDiv = document.getElementById('picture');
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

	for (let i = 0; i < options.length; i++) {
		options[i].addEventListener('click', function() {
			if (options[i].textContent == imgData.top[rand].title) {
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

createAnimeGame();

const clearImg = () => {
    

	const parentDiv = document.getElementById('picture');

    while (parentDiv.firstChild) {
        parentDiv.firstChild.remove();
    }
}

function reload() {
    reload = location.reload();
}

	//next page functionality* 
let nextPageBtn = document.getElementsByClassName('nextQuestion'); 
console.log(nextPageBtn)
nextPageBtn[0].addEventListener('click', function() {
	reload(); 
	clearImg();
	createAnimeGame(); 
	
	// console.log('this is the next page button being clicked. ')

	
})
	//main menu functionality* 
let mainMenuBtn = document.getElementsByClassName('mainMenu'); 
mainMenuBtn[0].addEventListener('click', function() {
	window.location.href = `${startGame}`
})
