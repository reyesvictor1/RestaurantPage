function loadMenu() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    menu.appendChild(createMenuItem(
        "Pork Schnitzel",
        "Viennese-style pork schnitzel / fried potatoes or french fries / salad",
        "€17.90"
    ));
    menu.appendChild(createMenuItem(
        "Turkey Schnitzel",
        "Viennese-style turkey schnitzel / fried potatoes or french fries / salad",
        "€17.90"
    ));
    menu.appendChild(createMenuItem(
        "Currywurst",
        "Curried sausage / french fries",
        "€10.90"
    ));
    menu.appendChild(createMenuItem(
        "Chili con Carne",
        "Chili con carne (spicy) / sour cream / baguette",
        "€9.90"
    ));
    menu.appendChild(createMenuItem(
        "Turkey Steak",
        "Turkey steak / baked potato / curd cheese with herbs / vegetables",
        "€16.90"
    ));
    menu.appendChild(createMenuItem(
        "Feta Cheese Salad",
        "Salad / Balsamic dressing / grilled feta cheese / olives / peppers",
        "€11.90"
    ));
    menu.appendChild(createMenuItem(
        "Fried Eggs",
        "3 fried eggs / bacon / feta cheese / salad",
        "€10.90"
    ));

    return menu;
}

function createMenuItem(name, description, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h2");
    itemName.classList.add("name");
    itemName.textContent = name;

    const itemImage = document.createElement("img");
    itemImage.src = `images/${name.replace(/\s/g, '_').toLowerCase()}.jpg`;
    itemImage.alt = `${name}`;

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("description");
    itemDescription.textContent = description;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("price");
    itemPrice.textContent = price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    return menuItem;
}







export default loadMenu;