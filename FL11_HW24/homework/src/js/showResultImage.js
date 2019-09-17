export default function showResultImage(resultText, image1, image2) {
  if (resultText.textContent.includes("WINNER")) {
    image1.style.display = "block";
  } else {
    image2.style.display = "block";
  }
}
