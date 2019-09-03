export default function checkRoundWinner(userWeapon, botWeapon, roundNumber) {
  let result = `Round ${roundNumber}, ${userWeapon} vs. ${botWeapon}, `;
  if (
    (userWeapon === "Rock" && botWeapon === "Scissors") ||
    (userWeapon === "Paper" && botWeapon === "Rock") ||
    (userWeapon === "Scissors" && botWeapon === "Paper")
  ) {
    return result + `You've WON!`;
  } else {
    return result + `You've LOST!`;
  }
}
