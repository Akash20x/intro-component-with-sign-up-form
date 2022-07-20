const form = document.querySelector('.form-container');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
});
  
function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
  
    if (firstNameValue === "") {
      showError(firstName, "First Name cannot be empty");
    } else {
      removeError(firstName);
    };
  
    if (lastNameValue === "") {
      showError(lastName, "Last Name cannot be empty");
    } else {
      removeError(lastName);
    };
  
    if (emailValue === "") {
        showError(email, "Email cannot be empty");
    } else if (!checkEmail(emailValue)) {
        showError(email, "Looks like this is not an email");
    } else {
        removeError(email);
    };
  
    if (passwordValue === "") {
        showError(password, "Password cannot be empty");
    } else {
      removeError(password);
    };
  };

  function showError(input, message){
    const formComponent = input.parentElement;
    const errorMessage = formComponent.querySelector(".error-msg");

    errorMessage.innerText = message;
    formComponent.classList.add('not-valid');
  }
  

  function removeError(input) {
    const formComponent = input.parentElement;
    formComponent.classList.remove('not-valid');
  };
  

  function checkEmail (email) {
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };

  form.setAttribute("novalidate", "");

  const required = [firstName, lastName, email, password];

  required.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value) {
            removeError(input);
    }})
})