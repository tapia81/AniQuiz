import mangaPage from '/game/guess_that_manga.html';
import axios from 'axios';

const guessMangaBtn = document.getElementById('guessManga');

export const guessMangaPage = () => {
	window.location.href = `${mangaPage}`;
};
guessMangaBtn && guessMangaBtn.addEventListener('click', guessMangaPage);

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

const getMangaImg = async () => {
	try {
		const response = await axios.get(`
    https://api.jikan.moe/v3/top/manga/1/manga`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};

const getMangaResponse2 = async () => {
	try {
		const response = await axios.get(`
        https://api.jikan.moe/v3/top/manga/1/manga`);
		return response.data.top[rand2].title;
	} catch (err) {
		console.log(err);
	}
};

const getMangaResponse3 = async () => {
	try {
		const response = await axios.get(`
            https://api.jikan.moe/v3/top/manga/1/manga`);
		return response.data.top[rand3].title;
	} catch (err) {
		console.log(err);
	}
};

const getMangaResponse4 = async () => {
	try {
		const response = await axios.get(`
        https://api.jikan.moe/v3/top/manga/1/manga`);
		return response.data.top[rand4].title;
	} catch (err) {
		console.log(err);
	}
};

const createMangaGame = async () => {
	const imgData = await getMangaImg();

	const parentDiv = document.getElementById('mangaColumn');
	const mangaImg = document.createElement('img');
	console.log('response answer photo: ' + imgData.top[rand].image_url);
	console.log('response answer title: ' + imgData.top[rand].title);
	mangaImg.src = `${imgData.top[rand].image_url}`;
	parentDiv.appendChild(mangaImg);

	//manga button choices

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
};

createMangaGame();

const clearImg = () => {
	const parentDiv = document.getElementById('picture');

	while (parentDiv.firstChild) {
		parentDiv.firstChild.remove();
	}
};

function reload() {
	reload = location.reload();
}

//next page functionality*
let nextPageBtn = document.getElementsByClassName('nextQuestion');
console.log(nextPageBtn);
nextPageBtn[0].addEventListener('click', function() {
	reload();
	clearImg();
	createMangaGame();
});
