const hambutton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hambutton.classList.toggle("open");
});

let pageLoadCount = localStorage.getItem(`pageLoadCount`) || 0;

document.addEventListener(`DOMContentLoaded`, function () {
    const form = document.querySelector("#form1");

    if (form) {
        window.addEventListener(`load`, () => {
            if (pageLoadCount) {
                pageLoadCount = parseInt(pageLoadCount) + 1;
            } else {
                pageLoadCount = 1;
            }

            localStorage.setItem(`pageLoadCount`, pageLoadCount);
            console.log(`Page loaded ${pageLoadCount} times.`);
        });
    } else {
        console.error("Form element with ID `form1` not found.");
    }
});

// const form = document.querySelector("#form1");
// const counter = document.querySelector("#counter");

// let submissionCounter = localStorage.getItem(`submissionCounter`) || 0;

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('#form1'); 

//     if (form) {
//         window.addEventListener(`load`, () => {
//             if (pageLoadCount) {
//                 pageLoadCount = parseInt(pageLoadCount) + 1;
//             } else {
//                 pageLoadCount = 1;
//             }

//             localStorage.setItem(`pageLoadCount`, pageLoadCount);
//             console.log(`Page loaded ${pageLoadCount} times.`);
//         });
//     } else {
//         console.error("Form element with ID `form1` not found.");
//     }

//         if (form) {
//             form.addEventListener('submit', function (event) {
//                 event.preventDefault();

//                 const name = document.querySelector("#customerName").value;
//                 const email = document.querySelector("#email").value;
//                 const propertyAddress = document.querySelector("#propertyAddress").value;
//                 const date = document.querySelector("#formDate").value;
//                 const phone = document.querySelector("#tel").value;
//                 const emailUpdatesYes = document.querySelector("#emailYes").value;
//                 const emailUpdatesNo = document.querySelector("#emailNo").value;
//                 const newsletterYes = document.querySelector("#newsYes").value;
//                 const newsletterNo = document.querySelector("#newsNo").value;
               

//                 const formData = {
//                     customerName: name,
//                     email: email,
//                     property: propertyAddress,
//                     formDate: date,
//                     phoneNumber: phone,
//                     recieveEmailsYes: emailUpdatesYes,
//                     recieveEmailsNo: emailUpdatesNo,
//                     getNewsletterYes: newsletterYes,
//                     getNewsletterNo: newsletterNo,
//                 };

//                 localStorage.setItem(`formData`, JSON.stringify(formData));
//                 submissionCounter++;
//                 localStorage.setItem(`submissionCounter`, submissionCounter);
//                 counter.textContent = `Submissions: ${submissionCounter}`;

//                 form.submit();
//                 // form.reset();
//             });
//         } else {
//             console.error("Form element with ID 'form1' not found.");
//         }
    
        
//     });

const staffList = [
    {
        job: "Manager",
        photo: "images/manager.webp",
        name: "V. Meyers"
    },
    {
        job: "Maintenance Manager",
        photo: "images/maintenance.webp",
        name: "M. Montgomery"
    },
    {
        job: "Office Secretary",
        photo: "images/secretary.webp",
        name: "D. White"
    }
];

createStaffCards(staffList);

function createStaffCards() {
    // document.querySelector(".staff").innerHTML = "";
    staffList.forEach((member) => {
        let card = document.createElement("div");
        card.classList.add = "card";

        let profilePicture = document.createElement("img");
        profilePicture.src = member.photo;
        profilePicture.alt = "Profile Picture";
        profilePicture.loading = "lazy";
        card.appendChild(profilePicture);

        let jobTitle = document.createElement("h2");
        jobTitle.textContent = member.job;
        card.appendChild(jobTitle);

        let memberName = document.createElement("p");
        memberName.textContent = member.name;
        card.appendChild(memberName);

        document.querySelector(".staff").appendChild(card);
    });
}

