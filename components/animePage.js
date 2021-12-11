import animePage from '/game/guess_that_anime.html';
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

	for (let i = 0; i < options.length; i++) {
		options[i].addEventListener('click', function() {
			if (options[i].textContent == imgData.top[rand].title) {
				options[i].style.backgroundColor = 'green';
				options[i].style.color = 'white';

				let modalDiv = document.getElementById('modalContent'); 
				let correctAnswerP = document.createElement('p'); 
				correctAnswerP.textContent = `You were correct! The correct answer was ${imgData.top[rand].title}`
				modalDiv.append(correctAnswerP)

				for (let j = 0; j < options.length; j++) {
					options[j].disabled = true;
					dialog.show()

				}
			} else {
				options[i].style.backgroundColor = 'red';
				options[i].style.color = 'white';

				let modalDiv = document.getElementById('modalContent'); 
				let correctAnswerP = document.createElement('p'); 
				correctAnswerP.textContent = `You were incorrect! The correct answer was ${imgData.top[rand].title}`
				modalDiv.append(correctAnswerP)

				for (let j = 0; j < options.length; j++) {
					options[j].disabled = true;
					dialog.show()
				}
			}
		});
	}
};

createAnimeGame();

//Modal section

  let dialog = document.querySelector('dialog');
  let showDialogButton = document.querySelector('#show-dialog');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showDialogButton.addEventListener('click', function() {
    dialog.showModal();
  });

  //close button not working..fix S
  let x = document.getElementById('close');

  x.addEventListener('click', function() {
	  console.log('am i working');

	});
