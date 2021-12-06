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
        
    let quoteData = []; 



    const getQuoteData = async () => {
            try {
                    const response = await axios.get(`https://animechan.vercel.app/api/random`)
                    // console.log(`Quote Data: ${response.data.quote}`); 
                    console.log(response); 
                    return response.data

            } catch (err) {
                    console.log(err)
            }
    }

    const getChoice2 = async () => {
            try {
                    const response = await axios.get(`https://animechan.vercel.app/api/random`)
                    // console.log(`Quote Data: ${response.data.quote}`); 
                    console.log(response); 
                    return response.data.character

            } catch (err) {
                    console.log(err)
            }
    }

    const getChoice3 = async () => {
            try {
                    const response = await axios.get(`https://animechan.vercel.app/api/random`)
                    // console.log(`Quote Data: ${response.data.quote}`); 
                    console.log(response); 
                    return response.data.character

            } catch (err) {
                    console.log(err)
            }
    }

    const getChoice4 = async () => {
            try {
                    const response = await axios.get(`https://animechan.vercel.app/api/random`)
                    // console.log(`Quote Data: ${response.data.quote}`); 
                    console.log(response); 
                    return response.data.character

            } catch (err) {
                    console.log(err)
            }
    }

    let option1 = document.getElementById('choice1'); 
    let option2 = document.getElementById('choice2'); 
    let option3 = document.getElementById('choice3'); 
    let option4 = document.getElementById('choice4'); 

    const createQuote = async () => {

    const quoteElement = await getQuoteData();
    const choice2 = await getChoice2(); 
    const choice3 = await getChoice3(); 
    const choice4 = await getChoice4(); 

    const parentP = document.getElementById('quoteAPI'); 
    const paraEle = document.createElement('p'); 
    const hintEle = document.createElement('p'); 

    
    //appending each quote to the who said that quote page. 
    paraEle.append(`${quoteElement.quote}.` ); 
    hintEle.append(`*Hint: this quote is from the anime ${quoteElement.anime}`)
    
    //pushing the quote character data to quotedata array
    quoteData.push(quoteElement.character, choice2, choice3, choice4); 

    //logging the data 
    console.log('quote: ' + quoteElement.quote)
    console.log('quote character data: ' + quoteData)

    // Must randomize the choices -- Work on this later
  
    option1.innerHTML = `${quoteData[0]}`
    option2.innerHTML = `${quoteData[1]}`
    option3.innerHTML = `${quoteData[2]}`
    option4.innerHTML = `${quoteData[3]}`
    
    parentP.appendChild(paraEle)
    paraEle.appendChild(hintEle);


    }
createQuote();


        
}

export const guessMangaPage = () => {
        window.location.href=`${mangaPage}`
        //console.log("button was clicked");

}

window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
        guessAnimeBtn.addEventListener("click", guessAnimePage);
        guessQuoteBtn.addEventListener("click", guessQuotePage); 
        guessMangaBtn.addEventListener("click", guessMangaPage); 
    });




    //use to save the character names from the quote API

 

