let totalScore = 0;
let loadingProgress = document.querySelector(".progress");
let i = 0;
const arr = [];
const fetchedAnimeData = [];
const score = document.querySelector(".score");
const animeChoice = document.querySelectorAll(".answer-choice");
const animeQuestion = document.querySelector(".question");
const animeImage = document.querySelector(".anime-image");
const finalScore = document.querySelector(".final-score");
const modalText = document.querySelector(".modal-text");
const userAnswer = document.querySelector(".user-answer");
const nextButton = document.querySelector(".pagination-next");

// Functions to open and close a modal
function openModal($el) {
  $el.classList.add("is-active");
}

function closeModal($el) {
  $el.classList.remove("is-active");
}

function closeAllModals() {
  (document.querySelectorAll(".modal") || []).forEach(($modal) => {
    closeModal($modal);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});

const createAnimeGame = async () => {
  animeQuestion.textContent = `Question ${i + 1} out of 10`;
  score.textContent = `Score: ${totalScore}`;

  if (fetchedAnimeData.length == 0) {
    loadingProgress.style.display = "block";
  }

  const getAnimeImg = async () => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/random/anime`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const randomGen = () => {
    for (let choices = [0, 1, 2, 3], i = animeChoice.length; i--; ) {
      let randomNum = choices.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
      arr.push(randomNum);
    }

    return arr;
  };

  const randomAnswer = () => {
    for (let i = 0; i < arr.length; i++) {
      animeChoice[i].textContent = `${
        fetchedAnimeData[arr[i]].data.title_english
          ? fetchedAnimeData[arr[i]].data.title_english
          : fetchedAnimeData[arr[i]].data.title
      }`;
    }
  };

  for (let i = 0; i < 4; i++) {
    let animeSeries = await getAnimeImg();
    fetchedAnimeData.push(animeSeries);
  }

  randomGen();

  randomAnswer();

  if (fetchedAnimeData.length > 0) {
    loadingProgress.style.display = "none";
  }

  const correctAnimeTitle = fetchedAnimeData[0].data.title_english
    ? fetchedAnimeData[0].data.title_english
    : fetchedAnimeData[0].data.title;
  animeImage.src = fetchedAnimeData[0].data.images.jpg.image_url;

  animeChoice.forEach((answerButton) => {
    answerButton.onclick = function () {
      answerButton.textContent != correctAnimeTitle
        ? (userAnswer.style.color = "red")
        : ((userAnswer.style.color = "green"),
          (totalScore += 1),
          (score.textContent = `Score: ${totalScore}`));

      i == 9
        ? (finalScore.textContent = `Final Score: ${totalScore}`)
        : (finalScore.textContent = ``);

      modalText.textContent = `The Correct is answer ${correctAnimeTitle}`;
      userAnswer.textContent = `You answered ${answerButton.textContent}`;
      animeChoice.forEach((button) => {
        button.setAttribute("disabled", "true");
      });
    };
  });
};

createAnimeGame();

nextButton.addEventListener("click", function () {
  if (i < 9) {
    i++;
    arr.splice(0);
    fetchedAnimeData.splice(0);
    animeImage.src = "";
    animeChoice.forEach((button) => {
      button.removeAttribute("disabled");
    });

    createAnimeGame();
  }
});
