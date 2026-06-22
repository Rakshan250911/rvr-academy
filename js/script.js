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

const joinForm = document.getElementById("joinForm");

joinForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("joinName").value;
    const standard = document.getElementById("joinStandard").value;
    const course = document.getElementById("joinCourse").value;

    const message =
`Hello RVR'S ACADEMY,

I would like to join.

Name: ${name}
Standard: ${standard}
Course: ${course}`;

    const whatsappURL =
`https://wa.me/919345107543?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    joinForm.reset();
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
`Hello RVR'S ACADEMY,

Name: ${name}
Phone: ${phone}

Message:
${message}`;

  const whatsappURL =
`https://wa.me/919345107543?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");

  contactForm.reset();

});