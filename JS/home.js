"use strict";
let username = localStorage.getItem('sessionUsername');
document.getElementById("username").innerHTML = username;

function logout() {
  localStorage.removeItem('sessionUsername');
  location.replace(url + 'home.html')
};


