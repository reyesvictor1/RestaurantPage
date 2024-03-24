function loadMenu() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

class MenuItem {
    constructor(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    const menuItems = [];
    menuItems.push(new MenuItem("Currywurst", "Curried sausage / french fries", "€10.90"));
    menuItems.push(new MenuItem("Currywurst", "Curried sausage / french fries", "€10.90"));
    menuItems.push(new MenuItem("Currywurst", "Curried sausage / french fries", "€10.90"));
    menuItems.push(new MenuItem("Currywurst", "Curried sausage / french fries", "€10.90"));
    menuItems.push(new MenuItem("Currywurst", "Curried sausage / french fries", "€10.90"));
    menuItems.push(new MenuItem("Currywurst", "Curried sausage / french fries", "€10.90"));
    
    menuItems.forEach((item) => {
        menu.appendChild(createMenuDiv(item));
    });

    return menu;
}

function createMenuDiv(menuItem) {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-item");

    const name = document.createElement("h2");
    name.classList.add("name");
    name.textContent = menuItem.name;

    const image = document.createElement("img");
    image.src = `images/${menuItem.name.toLowerCase()}.jpg`;
    image.alt = `${menuItem.name}`;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = menuItem.description;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = menuItem.price;

    menuDiv.appendChild(name);
    menuDiv.appendChild(image);
    menuDiv.appendChild(description);
    menuDiv.appendChild(price);

    return menuDiv;
}







export default loadMenu;