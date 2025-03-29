const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innHTML = `<span>${today.getFullYear()} </span>`;
let lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

