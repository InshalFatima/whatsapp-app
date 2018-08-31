let contacts = [
    {
        name: "Apple",
        imgURL: "apple.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `03111234567`,
        email: `apple@gmail.com`,
    },

    {
        name: "Banana",
        imgURL: "banana.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `03121234567`,
        email: `banana@gmail.com`,
    },

    {
        name: "Cherry",
        imgURL: "cherry.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `03131234567`,
        email: `cherry@gmail.com`,
    },

    {
        name: "Mango",
        imgURL: "mango.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `03141234567`,
        email: `mango@gmail.com`,
    },

    {
        name: "Grapes",
        imgURL: "grapes.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `03151234567`,
        email: `grapes@gmail.com`,
    },

    {
        name: "Orange",
        imgURL: "orange.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `03161234567`,
        email: `orange@gmail.com`,
    },

    {
        name: "Dates",
        imgURL: "dates.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `03171234567`,
        email: `apricot@gmail.com`,
        
    },

    {
        name: "Chikoo",
        imgURL: "chikoo.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `03181234567`,
        email: `chikoo3@gmail.com`,
    },

    {
        name: "Apricot",
        imgURL: "photo.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `03191234567`,
        email: `dates@gmail.com`,
    }
]

function initialize() {
    let contactList = document.querySelector(".chats-list");

    for (let i = 0; i < contacts.length; i++) {
        contactList.innerHTML += `<div class="chats-list-item" onclick="showChat(${i})">
        <div class="contact-profile-pic" style="background-image: url(images/${contacts[i].imgURL});">

        </div>

        <div class="contact-chat-info">
            <div class="name-section">
                <h5>${contacts[i].name}</h5>
                <h6>Yesterday</h6>
            </div>
            
            <div>
             <p><span>${contacts[i].icon}</span> ${contacts[i].message}</p>
            </div>
        </div>

    </div>`;

    }
}


function showChat(indexNum) {
    document.querySelector("h4").style = `display: none`;
    document.querySelector(".chat-detail").style = `display: flex !important`;
    document.querySelector(".contact-photo").style["background-image"] = `url(images/${contacts[indexNum].imgURL})`;
    document.querySelector(".contact-name").innerHTML = contacts[indexNum].name;
    document.querySelector(".contact-number").innerHTML = `<span class="dial-icon"><i class="fas fa-phone"></i></span> ${contacts[indexNum].number}`;
    document.querySelector(".contact-email").innerHTML = `<span class="email-icon"><i class="far fa-envelope"></i></span> ${contacts[indexNum].email}`;
}