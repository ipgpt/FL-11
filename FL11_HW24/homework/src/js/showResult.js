export default function showResult(isWin, resultText) {
  if (isWin) {
    resultText.textContent = "You are the WINNER!";
  } else {
    resultText.textContent = "You are the LOSER!";
  }
}
