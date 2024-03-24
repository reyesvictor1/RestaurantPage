function loadHome() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
}

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const welcome = document.createElement("p");
    welcome.classList.add("welcome");
    welcome.textContent = "Willkommen!";

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "The best Schnitzel restaurant in Munich";

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "images/bild15.jpg";
    image.alt = "Image of the restaurant";

    const since = document.createElement("p");
    since.classList.add("since");
    since.textContent = "Since 1954";

    home.appendChild(welcome);
    home.appendChild(description);
    home.appendChild(image);
    home.appendChild(since);

    return home;
}

export default loadHome;