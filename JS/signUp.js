"use strict";

let Box = document.querySelector(".Box")
let signupName = document.getElementById('signupName');
let signupEmail = document.getElementById('signupEmail');
let signupPassword = document.getElementById('signupPassword');
let signUpBtn = document.getElementById("signUpBtn");
let signUpData = [];

if (localStorage.getItem('userdata') == null) {
  signUpData = []
} else {
  signUpData = JSON.parse(localStorage.getItem('userdata'))
}

function isInputEmpty() {

  if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
    return false;
  } else {
    return true;
  }
}

function isEmailExist() {
  for (var i = 0; i < signUpData.length; i++) {
    if (signUpData[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
      return false;
    }
  }
}

function signUp() {

  if (isInputEmpty() == false) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    return false
  }

  let data = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value
  }

  if (signUpData.length == 0) {
    signUpData.push(data);
    localStorage.setItem("userdata", JSON.stringify(signUpData));
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    return true;
  }

  if (isEmailExist() == false) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
  } else {
    signUpData.push(data);
    localStorage.setItem("userdata", JSON.stringify(signUpData));
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
  }

}

if (signUpBtn) {
  signUpBtn.addEventListener("click", function () {
    signUp()
  })
}


