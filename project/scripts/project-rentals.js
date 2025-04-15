const hambutton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hambutton.classList.toggle("open");
});


const rentalsList = [
    {
        monthlyRate: 900,
        address: "674 S 5th St",
        bedrooms: 1,
        bathrooms: 1,
        area: 650,
        imageUrl: "images/900.webp"
    },
    {
        monthlyRate: 848,
        address: "1811 Winchester Court",
        bedrooms: 2,
        bathrooms: 1,
        area: 700,
        imageUrl: "images/848.webp"
    },
    {
        monthlyRate: 950,
        address: "723 Orion ct",
        bedrooms: 1,
        bathrooms: 1,
        area: 650,
        imageUrl: "images/950.webp"
    },
    {
        monthlyRate: 1300,
        address: "385 Oak St",
        bedrooms: 2,
        bathrooms: 1,
        area: 1150,
        imageUrl: "images/1300.webp"
    },
    {
        monthlyRate: 1249,
        address: "91 Park Road",
        bedrooms: 3,
        bathrooms: 2,
        area: 980,
        imageUrl: "images/1249.webp"
    },
    {
        monthlyRate: 2350,
        address: "2107 Rue de Villa Dr",
        bedrooms: 3,
        bathrooms: 2,
        area: 1568,
        imageUrl: "images/2350.webp"
    },
    {
        monthlyRate: 2700,
        address: "3374 Autumn Dr",
        bedrooms: 2,
        bathrooms: 3,
        area: 1153,
        imageUrl: "images/2700.webp"
    },
    {
        monthlyRate: 2200,
        address: "1189 Colt Ct",
        bedrooms: 4,
        bathrooms: 2,
        area: 1232,
        imageUrl: "images/2200.webp"
    },
    {
        monthlyRate: 1750,
        address: "535 N 7th St",
        bedrooms: 2,
        bathrooms: 1,
        area: 650,
        imageUrl: "images/1750.webp"
    },
    {
        monthlyRate: 1000,
        address: "832 Carlin Dr",
        bedrooms: 1,
        bathrooms: 1,
        area: 480,
        imageUrl: "images/1000.webp"
    },
];

createRentalCards(rentalsList);

const bed1Link = document.querySelector("#bed1");
const bed2Link = document.querySelector("#bed2");
const bed3Link = document.querySelector("#bed3");
const rentalsLink = document.querySelector("#all");

bed1Link.addEventListener("click", () => {
    bed1Link.classList.add("active2");
    bed2Link.classList.remove("active2");
    bed3Link.classList.remove("active2");
    rentalsLink.classList.remove("active2");

    let bed1 = rentalsList.filter(rental => {
        const beds = parseInt(rental.bedrooms);
        return beds == 1;
    });
    createRentalCards(bed1);
});


bed2Link.addEventListener("click", () => {
    bed1Link.classList.remove("active2");
    bed2Link.classList.add("active2");
    bed3Link.classList.remove("active2");
    rentalsLink.classList.remove("active2");

    let bed2 = rentalsList.filter(rental => {
        const beds = parseInt(rental.bedrooms);
        return beds == 2;
    });
    createRentalCards(bed2);
});


bed3Link.addEventListener("click", () => {
    bed1Link.classList.remove("active2");
    bed2Link.classList.remove("active2");
    bed3Link.classList.add("active2");
    rentalsLink.classList.remove("active2");

    let bed3 = rentalsList.filter(rental => {
        const beds = parseInt(rental.bedrooms);
        if (beds > 3) {
            return beds > 3;
        } else {
            return beds == 3;
        }

    });
    createRentalCards(bed3);
});


rentalsLink.addEventListener("click", () => {
    bed1Link.classList.remove("active2");
    bed2Link.classList.remove("active2");
    bed3Link.classList.remove("active2");
    rentalsLink.classList.add("active2");

    return createRentalCards(rentalsList);
});


function createRentalCards(filteredRentals) {
    document.querySelector(".homesList").innerHTML = "";

    filteredRentals.forEach((rental) => {
        let card = document.createElement("div");
        card.classList.add = "card";

        let cardImage = document.createElement("img");
        cardImage.src = rental.imageUrl;
        cardImage.alt = `${rental.address} house`;
        cardImage.width = 400;

        // cardImage.loading = lazy;
        card.appendChild(cardImage);

        let rate = document.createElement("h2");
        rate.textContent = `$ ${rental.monthlyRate}/mo`;
        card.appendChild(rate);

        let address = document.createElement("p");
        address.textContent = `${rental.address}`;
        card.appendChild(address);

        let info = document.createElement("p");
        info.textContent = `${rental.bedrooms} bds | ${rental.bathrooms} ba | ${rental.area} sqft`;
        card.appendChild(info);

        document.querySelector(".homesList").appendChild(card);
    });
}

