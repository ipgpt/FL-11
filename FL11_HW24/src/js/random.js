export default function randomWeapon() {
  const weapons = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return weapons[randomNumber];
}
