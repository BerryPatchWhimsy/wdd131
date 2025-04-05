const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const templesInfo = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: "85084",
        imageURL: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
    },
    {
        templeName: "Reno Nevada",
        location: "Reno, Nevada, United States",
        dedicated: "2000, April, 23",
        area: "10700",
        imageURL: "https://churchofjesuschristtemples.org/assets/img/temples/reno-nevada-temple/reno-nevada-temple-53497.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: "72000",
        imageURL: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-50105.jpg"
    },
    
];

// function createTempleCards() {
//     const container = document.querySelector("#templeCard");

//     templesInfo.forEach(temple => {
//         const cardElement = document.createElement('table');
//         cardElement.classList = 'card';

//         cardElement.innerHTML = `
//             <thead>
//                  <tr>
//                      <th colspan="2">${temple.templeName}</th>
//                  </tr>
//              </thead>
//              <tbody>
//                  <tr>
//                      <th>Location: </th>
//                      <td>${temple.location}</td>
//                  </tr>
//                  <tr>
//                      <th>Dedicated: </th>
//                      <td>${temple.dedicated}</td>
//                  </tr>
//                  <tr>
//                      <th>Size: </th>
//                      <td>${temple.area} sq ft</td>
//                  </tr>
//              </tbody>
//              <tfoot>
//                  <picture>
//                      <img src="${temple.imageURL}" alt="${temple.templeName} Temple" loading="lazy" width="400px" height="300px">
//                  </picture>
//              </tfoot>
//         `;

//         container.appendChild(cardElement);

//     });
// }

// createTempleCards();

// function setTempleName(temple) {
//     document.querySelector("#templeName").innerHTML = temple.templeName;
// }

// function setLocation(temple) {
//     document.querySelector("#location").innerHTML = temple.location;
// }

// function setDedication(temple) {
//     document.querySelector("#dedicated").innerHTML = temple.dedicated;
// }

// function setSize(temple) {
//     document.querySelector("#size").innerHTML = `${temple.area} sq ft`;
// }

// function setTempleImage(temple) {
//     document.querySelector("#templeImage").innerHTML = `<img src="${temple.imageURL}" alt="${temple.templeName} Temple" loading="lazy" width="400px" height="300px">`;
// }

//make template as table-- maybe parameter templeName?
function templeInfoTemplate(temple) {
    return `
    <thead>
        <tr>
            <th colspan="2">${temple.templeName}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Location: </th>
            <td>${temple.location}</td>
        </tr>
        <tr>
            <th>Dedicated: </th>
            <td>${temple.dedicated}</td>
        </tr>
        <tr>
            <th>Size: </th>
            <td>${temple.area} sq ft</td>
        </tr>
    </tbody>
    <tfoot>
        <picture>
            <img src="${temple.imageURL}" alt="${temple.templeName} Temple" loading="lazy" width="400px" height="300px">
        </picture>
    </tfoot>
        `
}

// function templeInfoTemplate(temple) {
//     setTempleName(temple);
//     setLocation(temple);

// }

//render temples... as map so goes through each of array
function renderTempleInfo(temple) {
    const html = temple.map(templeInfoTemplate);
    document.querySelector("#temple tbody").innerHTML = html.join("");
}



// function createTempleCards() {

//     const container = document.querySelector("#temples");

//     const card = document.createElement("div");
//     card.classsList.add("card");

//     templesInfo.forEach(temple => {
//         let card = document.createElement("div");
//         card.classsList.add("card");

//         const tName = document.createElement("h2");
//         tName.textContent = temple.templeName;
//         card.appendChild(tName);

//         const templeLocation = document.createElement("p");
//         templeLocation.textContent = `Location: ${temple.location}`;
//         card.appendChild(templeLocation);

//         const templeDedicated = document.createElement("p");
//         templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
//         card.appendChild(templeDedicated);

//         const templeSize = document.createElement("p");
//         templeSize.textContent = `Size: ${temple.area}`;
//         card.appendChild(templeSize);

//         const templeImage = document.createElement("img");
//         templeImage.textContent = `<img src="${temple.imageURL}" alt="${temple.templeName} Temple" loading="lazy" width="400px" height="300px">`;
//         card.appendChild(templeImage);

//         container.appendChild(card);  
//     });

// }

// function renderTempleInfo(temple) {
//     const html = temple.map(createTempleCards);
//     document.querySelector("#temple tbody").innerHTML = html.join("");
// }

renderTempleInfo(templesInfo);
// renderTempleInfo(templesInfo);

// templeData.forEach((temple) => {
//     let card = document.createElement("div");
//     card.classList.add("card");

//     let templeName = document.createElement("h2");
//     templeName.textContent = temple.name;
//     card.appendChild(templeName);
//     // Create and append any other elements (address, phone, etc.)
//     document.querySelector("#templeContainer").appendChild(card);
// });

// setTempleImageURL(temples);


// Loop through the array and create "temple cards" for each temple by displaying:
// The name of the temple.
// The location of the temple.
// The date the temple was dedicated.
// The total area of the temple in square feet.
// The provided image of the temple(an absolute address), making sure to include an appropriate alt value such as the name of the temple.
// Use native lazy loading for each temple image.

// const container = document.querySelector("#temples");

// templesInfo.forEach((temple) => {
//     const card = document.createElement("div");
//     card.classList = "card";

//     const content = `
//         <thead>
//             <tr>
//                 <th colspan="2">${temple.templeName}</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <th>Location: </th>
//                 <td>${temple.location}</td>
//             </tr>
//             <tr>
//                 <th>Dedicated: </th>
//                 <td>${temple.dedicated}</td>
//             </tr>
//             <tr>
//                 <th>Size: </th>
//                 <td>${temple.area} sq ft</td>
//             </tr>
//         </tbody>
//         <tfoot>
//             <picture>
//                 <img src="${temple.imageURL}" alt="${temple.templeName} Temple" loading="lazy" width="400px" height="300px">
//             </picture>
//         </tfoot>
//             `;
//     container.innerHTML += content;
// });