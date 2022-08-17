(function () {
  let signupForm = document.querySelector("#signup-form");
  signupForm.addEventListener("submit", validateInput);

  let passwordInput = document.querySelector("#password-inp");
  let confirmPasswordInput = document.querySelector("#confirm-password-inp");

  function validateInput(event) {
    event.preventDefault();
    if (passwordInput.value !== confirmPasswordInput.value) {
      passwordInput.classList.add("error");
      confirmPasswordInput.classList.add("error");
    }
  }
})();