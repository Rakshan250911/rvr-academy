const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});
const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((section) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    const revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add("active");

    }

  });

});
const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
    section.offsetTop;

    const sectionHeight =
    section.clientHeight;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute("id");
    }

  });

  navItems.forEach((link) => {

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      === `#${current}`
    ){

      link.classList.add("active");
    }

  });

});

const popup =
document.getElementById("popup");

const openPopup =
document.getElementById("openPopup");

const closePopup =
document.getElementById("closePopup");

openPopup.addEventListener("click", () => {

  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {

  popup.style.display = "none";
});