function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function createBoxes(amount) {
  destroyBoxes();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");
    boxesEl.style.display = "flex";
    boxesEl.style.gap = "40px";
    boxesEl.appendChild(box);
  }
}
const onClickCreate = (event) => {
  const amount = parseInt(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
};
const onClickDestroy = (event) => {
  destroyBoxes();
};
btnCreateEl.addEventListener("click", onClickCreate);
btnDestroyEl.addEventListener("click", onClickDestroy);
