const navToggle = document.querySelector(".nav-toggle");
const navbarLinks = document.querySelector(".navbar-links");

navToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle('navbar-links--visible');
})