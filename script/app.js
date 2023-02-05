// Query selectors

// Input Values
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#signup-email');
const password = document.querySelector('#signup-password');
const phoneNumber = document.querySelector('#signup-phone')
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const banner = document.querySelector('#banner-message')

// Button
const signupButton = document.querySelector('#signup-button');
const loginButton = document.querySelector('#login-button');

// Strength Bar
const strengthBar = document.querySelectorAll('.indicator');
const strengthBar1 = document.querySelector('#bar1');
const strengthBar2 = document.querySelector('#bar2');
const strengthBar3 = document.querySelector('#bar3');
const strengthBar4 = document.querySelector('#bar4');

// Message
const messageName = document.createElement('span');
const messageEmail = document.createElement('span');
const messageValidSubmit = document.createElement('div');
const messageInvalidSubmit = document.createElement('div');
messageValidSubmit.classList.add('form-message-banner', 'banner-valid');
messageInvalidSubmit.classList.add('form-message-banner', 'banner-invalid');
messageName.classList.add('sub-text', 'invalid');
messageName.innerText = 'Cannot add numbers in text';
messageEmail.classList.add('sub-text', 'invalid');
messageEmail.innerText = 'Enter your complete email id with .com'
messageValidSubmit.innerHTML = `<p class='form-message-text'>Submit Success</p>`
messageInvalidSubmit.innerHTML = `<p class='form-message-text'>Submit Failed</p>`

// Event listeners
signupButton.addEventListener('click', event => {
    if(!(userName.value, userEmail.value, password.value, phoneNumber.value)) {
        userName.classList.add('invalid-outline');
        userEmail.classList.add('invalid-outline');
        password.classList.add('invalid-outline');
        phoneNumber.classList.add('invalid-outline')
        banner.appendChild(messageInvalidSubmit)
    }

    else {
      banner.appendChild(messageValidSubmit)
    }
    event.preventDefault();
})
loginButton.addEventListener('click', event => {
    if(!(loginEmail.value, loginPassword.value)) {
        loginEmail.classList.add('invalid-outline');
        loginPassword.classList.add('invalid-outline');
        banner.appendChild(messageInvalidSubmit);
    }

    else {
      banner.appendChild(messageValidSubmit);
    }
    event.preventDefault();
})
userName.addEventListener('keyup', isValidName);
userEmail.addEventListener('keyup', isValidEmail);
phoneNumber.addEventListener('keyup', isValidNumber);
password.addEventListener('keyup', checkpassword);
loginEmail.addEventListener('keyup', isValidLoginEmail);


// Functions
function isValidName() {
    const re = /^[a-z ,.'-]+$/i;
    var input = this.value;
    if(re.test(input.toLowerCase())){
        userName.classList.add('valid-outline');
        userName.classList.remove('invalid-outline');
        document.getElementById('name-wrapper').removeChild(messageName);
    }
    else {
        document.getElementById('name-wrapper').appendChild(messageName);
        userName.classList.add('invalid-outline');
        userName.classList.remove('valid-outline');
    }
    console.log(this.value)
}

function isValidEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var input = this.value;
    if(re.test(input.toLowerCase())){
        userEmail.classList.add('valid-outline');
        userEmail.classList.remove('invalid-outline');
        document.getElementById('email-wrapper').removeChild(messageEmail);
    }
    else {
        userEmail.classList.add('invalid-outline');
        userEmail.classList.remove('valid-outline');
        document.getElementById('email-wrapper').appendChild(messageEmail);
    }
}

function isValidNumber() {
  const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  var input = this.value;
  if(re.test(input.toLowerCase())) {
    phoneNumber.classList.add('valid-outline');
    phoneNumber.classList.remove('invalid-outline');
  }

  else {
    phoneNumber.classList.add('invalid-outline');
    phoneNumber.classList.remove('valid-outline');
  }
}

function isValidLoginEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var input = this.value;
    if(re.test(input.toLowerCase())){
        loginEmail.classList.add('valid-outline');
        loginEmail.classList.remove('invalid-outline');
        document.getElementById('login-wrapper').removeChild(messageEmail);
    }
    else {
        loginEmail.classList.add('invalid-outline');
        loginEmail.classList.remove('valid-outline');
        document.getElementById('login-wrapper').appendChild(messageEmail);
    }
}

function checkpassword() {
    var strength = 0;
    if (this.value.match(/[a-z]+/)) {
      strength += 1;
    }
    if (this.value.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (this.value.match(/[0-9]+/)) {
      strength += 1;
    }
    if (this.value.match(/[$@#&!]+/)) {
      strength += 1;
    }
  
    switch (strength) {
      case 0:
        strengthBar.forEach((bar) => {
            bar.classList.remove('meter');
        })
        break;
  
      case 1:
        strengthBar1.classList.add('meter');
        break;
  
      case 2:
        strengthBar2.classList.add('meter');
        break;
  
      case 3:
        strengthBar3.classList.add('meter');
        break;
  
      case 4:
        strengthBar4.classList.add('meter');
        break;
    }
  }
