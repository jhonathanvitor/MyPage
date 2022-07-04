const checkbox = document.getElementById('checkbox');
var aboutMe = document.querySelector('#aboutMe')
var about = document.querySelector("#about");
var color1 = document.querySelector(".bg-color-1");
var experience = document.querySelector("#experience");
var portfolio = document.querySelector("#portfolio");
let service = document.querySelector("#service");
let blog = document.querySelector("#blog");
let contact = document.querySelector("#contact");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector("#btn2");
let contact_submit = document.querySelector("#contact_submit");
let menu = document.querySelector("#menu");
let title = document.querySelector("h2");

checkbox.onclick = function () {
  aboutMe.classList.toggle('bg-color-2');
  about.classList.toggle('dark-bg');
  color1.classList.add('bg-color-2');
  experience.classList.toggle('bg-color-2');
  portfolio.classList.toggle('dark-bg');
  service.classList.toggle('bg-color-2');
  blog.classList.toggle('bg-color-3');
  contact.classList.toggle('bg-color-2');
  menu.classList.toggle('bg-color-2')
  btn.classList.toggle('btnYellow');
  btn2.classList.toggle('btnYellow');
  contact_submit.classList.toggle('btnYellow');
  title.classList.toggle('dark-version');
  console.log(title);
}
