import animePage from '/game/guess_that_anime.html'

const guessAnimeBtn = document.getElementById('guessAnime');

export const guessAnimePage = () => {
    // console.log("button was clicked");

window.location.href=`${animePage}`;
}


guessAnimeBtn && guessAnimeBtn.addEventListener("click", guessAnimePage);