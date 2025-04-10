const hambutton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hambutton.classList.toggle("open");
});
