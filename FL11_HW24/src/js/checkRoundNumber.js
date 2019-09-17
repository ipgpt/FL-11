export default function checkRoundNumber(round1, round2) {
  if (!round1.textContent) {
    return 1;
  } else if (!round2.textContent) {
    return 2;
  } else {
    return 3;
  }
}
