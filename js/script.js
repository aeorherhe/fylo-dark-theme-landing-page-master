// Selecting HTML elements
const mailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
const form = document.querySelector(".form-group");
const input = document.querySelector(".input");
const errorMsg = document.querySelector(".error-msg");
const main = document.querySelector(".main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
  if (!input.value.match(mailRegex)) {
    errorMsg.textContent = "Please enter a valid email address";
  } else {
    main.classList.add("subscribed");
  }

  input.addEventListener("input", () => {
    if (input.value.match(mailRegex)) {
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Please enter a valid email address";
    }
  });
});
