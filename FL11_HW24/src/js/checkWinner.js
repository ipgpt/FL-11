export default function checkWinner(round1, round2, round3) {
  let result = 0;
  if (round1.textContent.includes("WON")) {
    result++;
  }
  if (round2.textContent.includes("WON")) {
    result++;
  }
  if (round3.textContent.includes("WON")) {
    result++;
  }
  return result >= 2;
}
