
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.querySelector("#productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.textContent = product.name;
    option.value = product.id;

    selectElement.appendChild(option);
});


const form = document.querySelector("#form1");
const counter = document.querySelector("#counter");

// let submissionCounter = Number(window.localStorage.getItem(`submissionCounter`))

let submissionCounter = localStorage.getItem(`submissionCounter`) || 0;
// if (submissionCounter == 0) {
//     counter.textContent = `This is your first review. Thank you!`;
// } else {
//     counter.textContent = submissionCounter;
// }


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form1'); 

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const productName = document.querySelector("#productName").value;
            const rateOne = document.querySelector("#oneStar").value;
            const rateTwo = document.querySelector("#twoStar").value;
            const rateThree = document.querySelector("#threeStar").value;
            const rateFour = document.querySelector("#fourStar").value;
            const rateFive = document.querySelector("#fiveStar").value;
            const date = document.querySelector("#dateInstallation").value;
            const design = document.querySelector("#pDesign").value;
            const durability = document.querySelector("#pDurability").value;
            const easeOfUse = document.querySelector("#pEase").value;
            const performance = document.querySelector("#pPerformance").value;
            const reviewText = document.querySelector("#pReview").value;
            const customerName = document.querySelector("#name").value;

            const formData = {
                productName: productName,
                rating: [rateOne, rateTwo, rateThree, rateFour, rateFive],
                dateInstalled: date,
                features: [design, durability, easeOfUse, performance],
                reviewtxt: reviewText,
                fullName: customerName
            };

            localStorage.setItem(`formData`, JSON.stringify(formData));
            submissionCounter++;
            localStorage.setItem(`submissionCounter`, submissionCounter);
            counter.textContent = submissionCounter;

            form.reset();
        });
    } else {
        console.error("Form element with ID 'form1' not found.");
    }
});