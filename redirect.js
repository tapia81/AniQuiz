import quotePage from '/game/guess_that_quote.html'
import mangaPage from '/game/guess_that_manga.html'
import animePage from '/game/guess_that_anime.html'

const guessAnimeBtn = document.getElementById('guessAnime');
const guessQuoteBtn = document.getElementById('guessQuote'); 
const guessMangaBtn = document.getElementById('guessManga'); 


export const guessAnimePage = () => {
                // console.log("button was clicked");
        
        window.location.href=`${animePage}`;
}

export const guessQuotePage = () => {
        window.location.href=`${quotePage}`
        //console.log("button was clicked");
        
}

export const guessMangaPage = () => {
        window.location.href=`${mangaPage}`
        //console.log("button was clicked");

}

guessAnimeBtn.addEventListener("click", guessAnimePage);
guessQuoteBtn.addEventListener("click", guessQuotePage); 
guessMangaBtn.addEventListener("click", guessMangaPage); 