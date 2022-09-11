const form = document.querySelector("form");
const input_email = document.querySelector("input[email]");
const email = document.getElementById("email");
const input_error = document.querySelector(".input-error");
const icon_error = document.getElementById("icon-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //   const email_value = email.trim();

  if (email.value === "") {
    setError();
  } else if (!isEmail(email.value)) {
    setError();
  } else {
    success();
  }
}

function setError() {
  input_error.classList.remove("hide");
  icon_error.classList.remove("hide");
}

function success() {
  setTimeout(() => {
    input_error.textContent = "Successfully Sent";
    input_error.className = "success";
  }, 500);

  setTimeout(() => {
    input_error.className = "input-error hide";
    input_error.textContent = "Please provide a valid email";
  }, 3_000);

  icon_error.classList.add("hide");
  email.value = "";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
