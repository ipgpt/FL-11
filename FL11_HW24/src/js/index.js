import randomWeapon from "./random.js";
import checkRoundNumber from "./checkRoundNumber.js";
import checkRoundWinner from "./checkRoundWinner.js";
import checkWinner from "./checkWinner.js";
import showResult from "./showResult.js";
import showResultImage from "./showResultImage.js";
import restart from "./restart.js";
import "../scss/styles.scss";

const resultsContent = document.querySelector(".results"),
  round1Area = document.querySelector(".results__round1"),
  round2Area = document.querySelector(".results__round2"),
  round3Area = document.querySelector(".results__round3"),
  resultArea = document.querySelector(".results__total__text"),
  resultWinImage = document.querySelector(".results__total__win"),
  resultLoseImage = document.querySelector(".results__total__lose"),
  startButton = document.querySelector(".buttons__start"),
  rockButton = document.querySelector(".buttons__rock"),
  paperButton = document.querySelector(".buttons__paper"),
  scissorsButton = document.querySelector(".buttons__scissors"),
  restartButton = document.querySelector(".buttons__restart");

function fight() {
  let roundNumber = checkRoundNumber(round1Area, round2Area),
    roundResult = checkRoundWinner(
      this.textContent,
      randomWeapon(),
      roundNumber
    );
  switch (roundNumber) {
    case 1:
      round1Area.textContent = roundResult;
      break;
    case 2:
      round2Area.textContent = roundResult;
      break;
    case 3:
      round3Area.textContent = roundResult;
      showResult(checkWinner(round1Area, round2Area, round3Area), resultArea);
      showResultImage(resultArea, resultWinImage, resultLoseImage);
      rockButton.setAttribute("disabled", "");
      scissorsButton.setAttribute("disabled", "");
      paperButton.setAttribute("disabled", "");
  }
}

startButton.addEventListener("click", function() {
  startButton.setAttribute("disabled", "");
  rockButton.removeAttribute("disabled", "");
  paperButton.removeAttribute("disabled", "");
  scissorsButton.removeAttribute("disabled", "");
  restartButton.removeAttribute("disabled", "");
  resultsContent.style.display = "block";
});

restartButton.addEventListener("click", function() {
  restart(
    resultWinImage,
    resultLoseImage,
    round1Area,
    round2Area,
    round3Area,
    resultArea
  );
  startButton.removeAttribute("disabled", "");
  rockButton.setAttribute("disabled", "");
  paperButton.setAttribute("disabled", "");
  scissorsButton.setAttribute("disabled", "");
  restartButton.setAttribute("disabled", "");
  resultsContent.style.display = "none";
});

rockButton.addEventListener("click", fight);
paperButton.addEventListener("click", fight);
scissorsButton.addEventListener("click", fight);
