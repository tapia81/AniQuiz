const guessAnimeBtn = document.getElementById('guessAnime');
const guessQuoteBtn = document.getElementById('guessQuote'); 
const guessMangaBtn = document.getElementById('guessManga'); 


export const guessAnimePage = () => {
        // console.log("button was clicked");
        location.href="game/guess_that_anime.html";
}

export const guessQuotePage = () => {
        location.href="game/guess_that_manga.html"
        
}

export const guessMangaPage = () => {
        location.href="game/guess_that_manga.html"

}

guessAnimeBtn.addEventListener("click", guessAnimePage);
guessQuoteBtn.addEventListener("click", guessQuotePage); 
guessMangaBtn.addEventListener("click", guessMangaPage); 