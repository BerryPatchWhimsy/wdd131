const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const templesList = [
    {
        name: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        name: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        name: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        name: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        name: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        name: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        name: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        name: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageURL: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
    },
    {
        name: "Reno Nevada",
        location: "Reno, Nevada, United States",
        dedicated: "2000, April, 23",
        area: 10700,
        imageURL: "https://churchofjesuschristtemples.org/assets/img/temples/reno-nevada-temple/reno-nevada-temple-53497.jpg"
    },
    {
        name: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageURL: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-50105.jpg"
    },
];

createTempleCard(templesList);

const oldTemplesLink = document.querySelector("#old");

oldTemplesLink.addEventListener("click", () => {
    let oldTemples = templesList.filter(temple => {
        const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
        return dedicatedYear < 1900;
    });
    createTempleCard(oldTemples);
});

const newTemplesLink = document.querySelector("#new");

newTemplesLink.addEventListener("click", () => {
    let newTemples = templesList.filter(temple => {
        const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
        return dedicatedYear > 2000;
    });
    createTempleCard(newTemples);
});

const largeTemplesLink = document.querySelector("#large");

largeTemplesLink.addEventListener("click", () => {
    let largeTemples = templesList.filter(temple => {
        const area = parseInt(temple.area);
        return area > 90000;
    });
    createTempleCard(largeTemples);
});

const smallTemplesLink = document.querySelector("#small");

smallTemplesLink.addEventListener("click", () => {
    let smallTemples = templesList.filter(temple => {
        const area = parseInt(temple.area);
        return area < 10000;
    });
    createTempleCard(smallTemples);
});

const templesLink = document.querySelector("#home");

templesLink.addEventListener("click", () => {
    return createTempleCard(templesList);
});



function createTempleCard(filteredTemples) {
    document.querySelector(".temples").innerHTML = "";
    filteredTemples.forEach((temple) => {
        // const containter = document.querySelector("#temples");  attach to .temples instead of tbody??


        let card = document.createElement('div');
        card.classList.add = 'card';

        let templeName = document.createElement('h2');
        templeName.textContent = temple.name;
        card.appendChild(templeName);

        let templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;
        card.appendChild(templeLocation);

        let templeDedication = document.createElement('p');
        templeDedication.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(templeDedication);

        let templeArea = document.createElement('p');
        templeArea.textContent = `Size: ${parseInt(temple.area)}`;
        card.appendChild(templeArea);

        let templeImage = document.createElement('img');
        templeImage.src = temple.imageURL;
        templeImage.alt = `${temple.name} Temple`;
        templeImage.loading = `lazy`;

        card.appendChild(templeImage);

        document.querySelector(".temples").appendChild(card);

    });
}