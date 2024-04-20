const userName = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
const onInputName = (event) => {
  const inputEl = userName.value.trim();
  if (inputEl === "") {
    nameOutputEl.textContent = `Anonymous`;
  } else {
    nameOutputEl.textContent = inputEl;
  }
};

userName.addEventListener("input", onInputName);
