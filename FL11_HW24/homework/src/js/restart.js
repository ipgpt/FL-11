export default function restart(image1, image2, ...elements) {
  image1.style.display = "none";
  image2.style.display = "none";
  elements.forEach(element => (element.textContent = ""));
}
