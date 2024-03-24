function createFooter() {
    const footer = document.createElement("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} reyesvictor1`;
    
    footer.appendChild(copyright);

    return footer;
}

export default createFooter;