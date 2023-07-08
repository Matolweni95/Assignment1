const navElement = document.querySelector(".navbar");
const hamburgerElement = document.querySelector(".hamburger");

hamburgerElement.addEventListener("click", () => {
navElement.classList.toggle("nav-open");
hamburgerElement.classList.toggle("open")
});