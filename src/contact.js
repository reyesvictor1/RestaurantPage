function loadContact() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createContact());
}

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.classList.add("phone-number");
    phoneNumber.textContent = "+49 012 345 6789";

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = "Nymphenburger Str. 126, 80636 Munich, Germany";

    const location = document.createElement("img");
    location.classList.add("location");
    location.src = "images/location.jpg";
    location.alt = "Restaurant location in Munich";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact;
}

export default loadContact;