// webpack entry point

import createHeader from "./header";
import createMain from "./main";
import createFooter from "./footer";

const content = document.querySelector("#content");
const header = createHeader();
const main = createMain();
const footer = createFooter();

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);