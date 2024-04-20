const formEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const inputEmailEl = event.currentTarget.elements.email;
  const inputPasswordEl = event.currentTarget.elements.password;
  if (inputEmailEl.value.trim() === "") {
    alert(`All form fields must be filled in`);
    return;
  }
  if (inputPasswordEl.value.trim() === "") {
    alert(`All form fields must be filled in`);
    return;
  } else {
    const dataForm = {
      Email: `${inputEmailEl.value.trim()}`,
      Password: `${inputPasswordEl.value.trim()}`,
    };
    console.log(dataForm);
  }
  event.currentTarget.reset();
};

formEl.addEventListener("submit", onFormSubmit);
