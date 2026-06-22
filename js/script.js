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