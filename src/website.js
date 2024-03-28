import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement("header");
    
    const headerTop = document.createElement("div");
    headerTop.classList.add("header-top");
    
    const flags = [];
    for (let i = 0; i < 2; i++) {
        const flagGermany = document.createElement("img");
        flagGermany.classList.add("flag-germany");
        flagGermany.src = "images/germany.jpg";
        flagGermany.alt = "Flag of Germany";
        flags.push(flagGermany);
    }
    
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Vicmar Restaurant";
    
    headerTop.appendChild(flags[0]);
    headerTop.appendChild(restaurantName);
    headerTop.appendChild(flags[1]);
    
    header.appendChild(headerTop);
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
    
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/reyesvictor1";
    githubLink.target = "blank";
    
    const githubIcon = document.createElement("img");
    githubIcon.classList.add("github-icon");
    githubIcon.src = "images/github.png";
    
    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    
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