import mangaPage from '/game/guess_that_manga.html';
import axios from 'axios';

const guessMangaBtn = document.getElementById('guessManga');

export const guessMangaPage = () => {
	window.location.href = `${mangaPage}`;
	//console.log("button was clicked");
};
guessMangaBtn && guessMangaBtn.addEventListener('click', guessMangaPage);

// const getMangaImg = async () => {
// try {
//     const response = await axios.get(`https://api.jikan.moe/v3/manga/1/pictures`)
//     console.log(response.data.pictures[0].large);
//     console.log('help me');
//     return response.data.pictures[0].large;
//     // console.log('th')

// } catch (err) {
//     console.log(err)
// }
// }
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
		// console.log(response.data.top[rand].image_url)
		return response.data;
		// console.log('th')
	} catch (err) {
		console.log(err);
	}
};

const getMangaResponse2 = async () => {
	try {
		const response = await axios.get(`
        https://api.jikan.moe/v3/top/manga/1/manga`);
		// console.log(response.data.top[rand].image_url)
		return response.data.top[rand2].title;
		// console.log('th')
	} catch (err) {
		console.log(err);
	}
};

const getMangaResponse3 = async () => {
	try {
		const response = await axios.get(`
            https://api.jikan.moe/v3/top/manga/1/manga`);
		// console.log(response.data.top[rand].image_url)
		return response.data.top[rand3].title;
		// console.log('th')
	} catch (err) {
		console.log(err);
	}
};

const getMangaResponse4 = async () => {
	try {
		const response = await axios.get(`
        https://api.jikan.moe/v3/top/manga/1/manga`);
		// console.log(response.data.top[rand].image_url)
		return response.data.top[rand4].title;
		// console.log('th')
	} catch (err) {
		console.log(err);
	}
};

// getMangaImg();

const createMangaGame = async () => {
	const imgData = await getMangaImg();

	const imgTitle2 = await getMangaResponse2();
	const imgTitle3 = await getMangaResponse3();
	const imgTitle4 = await getMangaResponse4();

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
};

createMangaGame();
