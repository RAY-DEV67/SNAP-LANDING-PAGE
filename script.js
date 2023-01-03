"use strict";
const dropDown1 = document.querySelector(".dropdown1");
const content1 = document.querySelector(".dropdowncontent1");
const dropDown2 = document.querySelector(".dropdown2");
const content2 = document.querySelector(".dropdowncontent2");
const container = document.querySelector(".container");

// *************** Desktop *****************

dropDown1.addEventListener("click", function () {
  if (content1.classList.contains("hidden")) {
    content1.classList.remove("hidden");
  }
  else{
    content1.classList.add("hidden");
  }
});
dropDown2.addEventListener("click", function () {
  if (content2.classList.contains("hidden2")) {
    content2.classList.remove("hidden2");
  }
  else{
    content2.classList.add("hidden2");
  }
});
container.addEventListener("click", function () {
  if (!content1.classList.contains("hidden")) {
    content1.classList.add("hidden");
  }
  if (!content2.classList.contains("hidden2")) {
    content2.classList.add("hidden2");
  }
});

// **************** Mobile ****************
const mobile1 = document.querySelector(".mobilemenu1");
const drop2 = document.querySelector(".dropmobile2");
const mobile2 = document.querySelector(".mobilemenu2");
const about = document.querySelector(".about");
const login = document.querySelector(".login");
const drop1 = document.querySelector(".dropmobile1");
const drop = document.querySelector(".drop")
const menu = document.querySelector(".menu")
const close = document.querySelector(".close")
const body = document.querySelector("body")

function mobiledrop(){
    mobile2.style.marginTop = "1rem";
    about.style.marginTop = "2rem";
    login.style.marginTop = "5rem";
}

function dropdown(){
    about.style.marginTop = "13rem";
    login.style.marginTop = "16rem";
}

mobile1.addEventListener("click", function () {
  if (!drop2.classList.contains("hidden2")) {
    drop2.classList.add("hidden2");
  mobiledrop()
  }

  if (drop1.classList.contains("hidden")) {
    drop1.classList.remove("hidden");
    mobile2.style.marginTop = "12rem";
   dropdown()
  } else {
    drop1.classList.add("hidden");
   mobiledrop()
  }
});

mobile2.addEventListener("click", function () {
  if (!drop1.classList.contains("hidden")) {
    drop1.classList.add("hidden");
  mobiledrop()
  }

  if (drop2.classList.contains("hidden2")) {
    drop2.classList.remove("hidden2");
    drop2.style.marginTop = "-11rem";
    dropdown()
  } else {
    drop2.classList.add("hidden2");
   about.style.marginTop = "2rem";
   login.style.marginTop = "5rem";
  }
});
if (
  !drop2.classList.contains("hidden2") &&
  !drop1.classList.contains("hidden")
) {
mobile2.style.marginTop = "12rem";
 about.style.marginTop = "19rem";
 login.style.marginTop = "22rem";
drop2.style.marginTop = "20rem";
}
menu.addEventListener("click", function () {
  drop.classList.remove("hidden");
  about.classList.remove("hidden");
  login.classList.remove("hidden");
  body.style.backgroundColor = "hsla(0, 0%, 8%,50%)"
  container.style.opacity = "50%"
});
close.addEventListener("click", function () {
  drop.classList.add("hidden");
  about.classList.add("hidden");
  login.classList.add("hidden");
  body.style.backgroundColor = "hsl(0, 0%, 98%)"
  container.style.opacity = "100%"
});
