// import mangaPage from '/html/guess_that_manga.html';
import startGamePage from '/html/start_the_game.html';
import axios from 'axios';

const guessMangaBtn = document.getElementById('guessManga');

// export const guessMangaPage = () => {
// 	window.location.href = `${mangaPage}`;
// };

guessMangaBtn && guessMangaBtn.addEventListener('click', guessMangaPage);

let rand1 = Math.floor(Math.random() * 50);
let rand2 = Math.floor(Math.random() * 50);
let rand3 = Math.floor(Math.random() * 50);
let rand4 = Math.floor(Math.random() * 50);

//this cycles through 25 pages of top manga.
let randomizeManga = Math.floor(Math.random() * 25);

const mangaParentDiv = document.getElementById('mangaColumn');
const mangaImg = document.createElement('img');

let storedData = [];
let storedButtonOrder = [];

let nextPageBtn = document.getElementsByClassName('nextQuestion');
let modelBox = document.getElementsByClassName('model-box');
let modelText = document.getElementsByClassName('model-text');
let modalBtn = document.getElementById('closeBt');
let answer = document.getElementsByClassName('answer');
let menu = document.getElementById('mangaMainMenu');

if (mangaParentDiv) {
	let buttonDiv = document.getElementsByClassName('column');
	let options = buttonDiv[2].getElementsByClassName('modeBtn');
	mangaParentDiv.appendChild(mangaImg);
	const getMangaImg = async () => {
		// return data;
		try {
			const response = await axios.get(`https://api.jikan.moe/v3/top/manga/${randomizeManga}/manga`);
			console.log(response);
			return response.data;
		} catch (err) {
			console.log(err);
		}
	};

	modalBtn.addEventListener('click', function() {
		modelBox[0].style.display = 'none';
		document.body.style.position = '';
		document.body.style.top = '';
	});

	const returnMenu = () => {
		menu.addEventListener('click', function() {
			window.location.href = `${startGamePage}`;
		});
	};

	const createMangaGame = async () => {
		let load = document.getElementById('loading');
		if (mangaParentDiv) {
			returnMenu();

			if (storedData.length === 0) {
				load.style.display = 'block';
			}

			const imgData = await getMangaImg();

			let selected = imgData.top[rand1];
			storedData.push(selected);
			mangaImg.src = selected.image_url;

			if (storedData.length > 0) {
				load.style.display = 'none';
			}

			//manga button choice randomizer section

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
					modelBox[0].style.display = 'flex';

					//stops the page from scrolling when the modal box appears
					document.body.style.position = 'fixed';
					document.body.style.top = `-${window.scrollY}px`;

					if (options[i].textContent == imgData.top[rand1].title) {
						modelText[0].textContent = `Congrats! You choose the correct answer. Your answer was:`;
						answer[0].textContent = `${imgData.top[rand1].title}`;
						answer[0].style.backgroundColor = 'green';
						options[i].style.backgroundColor = 'green';
						options[i].style.color = 'white';
						for (let j = 0; j < options.length; j++) {
							options[j].disabled = true;
						}
					} else {
						modelText[0].textContent = `Sorry, You chose the wrong answer! The correct answer should have been:`;
						answer[0].textContent = `${imgData.top[rand1].title}`;
						answer[0].style.backgroundColor = 'green';
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

	let i = 1;
	console.log(`Question ${i}`);
	modelBox[0].style.display = 'none';
	nextPageBtn[0].addEventListener('click', function() {
		i += 1;
		if (i <= 10) {
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
			if (i == 10) {
				nextPageBtn[0].disabled = true;
			}
		}
	});
}
