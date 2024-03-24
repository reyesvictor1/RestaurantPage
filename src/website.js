import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement("header");
    
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Vicmar Restaurant";
    
    header.appendChild(restaurantName);
    header.appendChild(createNav());
    
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("navbar");
    
    const homeBtn = document.createElement("button");
    homeBtn.classList.add("nav-btn");
    homeBtn.classList.add("active");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(homeBtn);
        loadHome();
    });
    
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("nav-btn");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(menuBtn);
        loadMenu();
    });
    
    const contactBtn = document.createElement("button");
    contactBtn.classList.add("nav-btn");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(contactBtn);
        loadContact();
    });
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    return nav;
}

function setActiveBtn(btn) {
    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach((btn) => {
        btn.classList.remove("active");
    });
    btn.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    
    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} reyesvictor1`;
    
    footer.appendChild(copyright);
    
    return footer;
}

function loadWebsite() {
    const content = document.querySelector("#content");
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();
    
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    
    loadHome();
}

export default loadWebsite;