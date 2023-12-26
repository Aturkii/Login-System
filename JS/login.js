"use strict";
let signInEmail = document.getElementById("signInEmail");
let signInpassword = document.getElementById("signInpassword");
let signInBtn = document.getElementById("signInBtn");
let signInData = [];
let signUpData = [];
let url = "";

if (localStorage.getItem('userdata') == null) {
  signUpData = []
} else {
  signUpData = JSON.parse(localStorage.getItem('userdata'))
}


function isLoginEmpty() {

  if (signInpassword.value == "" || signInEmail.value == "") {
    return false;
  } else {
    return true;
  }
}

function login() {
  if (isLoginEmpty() == false) {
    document.getElementById('check').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    return false
  }

  let email = signInEmail.value;
  let password = signInpassword.value;

  for (let i = 0; i < signUpData.length; i++) {
    if (signUpData[i].email.toLowerCase() == email.toLowerCase() && signUpData[i].password.toLowerCase() == password.toLowerCase()) {
      localStorage.setItem('sessionUsername', signUpData[i].name);
      if (url == '/') {
        location.replace('https://' + location.hostname + '/home.html')
      } else {
        location.replace(url + '/home.html')
      }
    } else {
      document.getElementById('check').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
      console.log("hi im workingggg");
    }
  }
}

signInBtn.addEventListener("click", function () {
  login()
})

