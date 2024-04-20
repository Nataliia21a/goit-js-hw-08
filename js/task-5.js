function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const typeColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const changeColorEl = (event) => {
  const randomColor = getRandomHexColor();
  typeColorEl.textContent = randomColor;
  bodyEl.style.background = randomColor;
};

btnEl.addEventListener("click", changeColorEl);
