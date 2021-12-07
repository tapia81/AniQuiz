import mangaPage from '/game/guess_that_manga.html'

const guessMangaBtn = document.getElementById('guessManga'); 

export const guessMangaPage = () => {
    window.location.href=`${mangaPage}`
    //console.log("button was clicked");

}
guessMangaBtn && guessMangaBtn.addEventListener("click", guessMangaPage); 