import mangaPage from '/game/guess_that_manga.html';
import axios from 'axios';

const guessMangaBtn = document.getElementById('guessManga');

export const guessMangaPage = () => {
	window.location.href = `${mangaPage}`;
};
guessMangaBtn && guessMangaBtn.addEventListener('click', guessMangaPage);

let buttonDiv = document.getElementsByClassName('column');
let options = buttonDiv[2].getElementsByClassName('modeBtn');
let rand1 = Math.floor(Math.random() * 50);
let rand2 = Math.floor(Math.random() * 50);
let rand3 = Math.floor(Math.random() * 50);
let rand4 = Math.floor(Math.random() * 50);
const mangaParentDiv = document.getElementById('mangaColumn');
const mangaImg = document.createElement('img');
let storedData = [];
let storedButtonOrder = [];
mangaParentDiv.appendChild(mangaImg);

const getMangaImg = async () => {
	try {
		const response = await axios.get(`https://api.jikan.moe/v3/top/manga/1/manga`);
		console.log(response);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};

const createMangaGame = async () => {
	if (mangaParentDiv) {
		const imgData = await getMangaImg();

		let selected = imgData.top[rand1];
		storedData.push(selected);
		mangaImg.src = selected.image_url;

		// manga button choices

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
		storedButtonOrder.push(randomNumArr);
		console.log(storedButtonOrder);
		options[[ randomNumArr[0] ]].textContent = `${imgData.top[rand1].title}`;
		options[[ randomNumArr[1] ]].textContent = `${imgData.top[rand2].title}`;
		options[[ randomNumArr[2] ]].textContent = `${imgData.top[rand3].title}`;
		options[[ randomNumArr[3] ]].textContent = `${imgData.top[rand4].title}`;

		for (let i = 0; i < options.length; i++) {
			options[i].addEventListener('click', function() {
				exitModelBox[0].style.display = 'flex';
				if (options[i].textContent == imgData.top[rand1].title) {
					modelText[0].textContent = `Correct!!! The correct answer is ${imgData.top[rand1].title}`;
					options[i].style.backgroundColor = 'green';
					options[i].style.color = 'white';
					for (let j = 0; j < options.length; j++) {
						options[j].disabled = true;
					}
				} else {
					modelText[0].textContent = `Incorrect!!! The correct answer is ${imgData.top[rand1].title}`;
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

createMangaGame();

//next page functionality*
let nextPageBtn = document.getElementsByClassName('nextQuestion');
let prevPageBtn = document.getElementsByClassName('previousQuestion');
let exitModelBox = document.getElementsByClassName('model-box');
let modelText = document.getElementsByClassName('model-text');

let i = 1;
console.log(`Question ${i}`);
exitModelBox[0].style.display = 'none';
nextPageBtn[0].addEventListener('click', function() {
	i += 1;
	prevPageBtn[0].style.display = 'inline';
	if (i < 11) {
		console.log(`Question ${i}`);
		rand1 = Math.floor(Math.random() * 50);
		rand2 = Math.floor(Math.random() * 50);
		rand3 = Math.floor(Math.random() * 50);
		rand4 = Math.floor(Math.random() * 50);
		createMangaGame();
		for (let j = 0; j < options.length; j++) {
			options[j].disabled = false;
			options[j].style.backgroundColor = 'white';
			options[j].style.color = 'black';
		}
	} else {
		console.log('stop game');
	}
});

exitModelBox[0].addEventListener('click', function() {
	exitModelBox[0].style.display = 'none';
});
