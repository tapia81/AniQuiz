import quotePage from '/game/guess_that_quote.html'
import mangaPage from '/game/guess_that_manga.html'
import animePage from '/game/guess_that_anime.html'
import axios from 'axios' 

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

window.addEventListener('load',()=>{
        guessAnimeBtn.addEventListener("click", guessAnimePage);
        guessQuoteBtn.addEventListener("click", guessQuotePage); 
        guessMangaBtn.addEventListener("click", guessMangaPage); 
    })

    const getQuote = async () => {
	try {
		const response = await axios.get(`https://animechan.vercel.app/api/random`)
        // console.log(`Quote Data: ${response.data.quote}`); 
        return response.data.quote

	} catch (err) {
		console.log(err)
	}
}


        const createQuote = async () => {
        const quoteElement = await getQuote();
        const parentP = document.getElementById('quoteAPI'); 
        const paraEle = document.createElement('p'); 
        paraEle.append(quoteElement); 
        parentP.appendChild(paraEle); 
    }

    createQuote(); 