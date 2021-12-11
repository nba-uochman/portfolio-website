let menu = document.querySelector("#menu");
let header = document.querySelector(".header");
let homeBtn = document.querySelector("#home-btn");
let aboutBtn = document.querySelector("#about-btn");
let portfolioBtn = document.querySelector("#portfolio-btn");
let contactBtn = document.querySelector("#contact-btn");

let navbarLinks = document.querySelector("ul");


// change navbar links to array
let linkArray = Array.from(navbarLinks.children);

function toggleNavbar() {
  header.classList.toggle("toggle");
}

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  toggleNavbar();
});


linkArray.forEach(link => {
  link.addEventListener("click", function () {
    toggleNavbar();
  });
});
