const input = document.querySelector(".form__input");
const form = document.querySelector(".form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorIcon = document.querySelector(".form__error-icon");
const errorText = document.querySelector(".form__error-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value.trim();

  input.style.border = "1px solid hsla(0, 36%, 70%, 0.4);";
  errorIcon.style.display = "none";
  errorText.style.display = "none";
  input.classList.remove("active");

  if (email === "") {
    showError("Email cannot be empty");
  } else if (!emailPattern.test(email)) {
    showError("Please provide a valid email");
  }
});

function showError(message) {
  errorText.textContent = message;
  errorIcon.style.display = "block";
  errorText.style.display = "block";
  input.classList.add("active");
}
