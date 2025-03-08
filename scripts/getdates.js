const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;
worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat(
    "en-UK",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;
short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)}</span>`;
medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "medium"
    }
).format(today)}</span>`;

currentyear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

