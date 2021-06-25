let nav = document.querySelector("nav");

let hamburgerIcon = document.querySelector(".hamburger-icon");

let navContainer = document.querySelector(".nav-container");

hamburgerIcon.addEventListener("click", () => {
  navContainer.classList.toggle("visible");
  hamburgerIcon.style.fill = "hsl(red)";
});
