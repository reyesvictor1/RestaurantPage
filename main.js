/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n    const main = document.querySelector(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createContact());\n}\n\nfunction createContact() {\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"contact\");\n\n    const phoneNumber = document.createElement(\"p\");\n    phoneNumber.classList.add(\"phone-number\");\n    phoneNumber.textContent = \"+49 012 345 6789\";\n\n    const address = document.createElement(\"p\");\n    address.classList.add(\"address\");\n    address.textContent = \"Nymphenburger Str. 126, 80636 Munich, Germany\";\n\n    const location = document.createElement(\"img\");\n    location.classList.add(\"location\");\n    location.src = \"images/location.jpg\";\n    location.alt = \"Restaurant location in Munich\";\n\n    contact.appendChild(phoneNumber);\n    contact.appendChild(address);\n    contact.appendChild(location);\n\n    return contact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n    const main = document.querySelector(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createHome());\n}\n\nfunction createHome() {\n    const home = document.createElement(\"div\");\n    home.classList.add(\"home\");\n\n    const welcome = document.createElement(\"p\");\n    welcome.classList.add(\"welcome\");\n    welcome.textContent = \"Willkommen!\";\n\n    const description = document.createElement(\"p\");\n    description.classList.add(\"description\");\n    description.textContent = \"The best Schnitzel restaurant in Munich\";\n\n    const image = document.createElement(\"img\");\n    image.classList.add(\"image\");\n    image.src = \"images/steinheil_schnitzel.jpg\";\n    image.alt = \"Image of the restaurant\";\n\n    const since = document.createElement(\"p\");\n    since.classList.add(\"since\");\n    since.textContent = \"Since 1954\";\n\n    home.appendChild(welcome);\n    home.appendChild(description);\n    home.appendChild(image);\n    home.appendChild(since);\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n// webpack entry point\n\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    const main = document.querySelector(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n}\n\nfunction createMenu() {\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu\");\n    \n    menu.appendChild(createMenuItem(\n        \"Steinheil Schnitzel\",\n        \"Viennese-style pork schnitzel / fried potatoes or french fries / salad\",\n        \"€17.90\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Turkey Schnitzel\",\n        \"Viennese-style turkey schnitzel / fried potatoes or french fries / salad\",\n        \"€17.90\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Currywurst\",\n        \"Curried sausage / french fries\",\n        \"€10.90\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Chili con Carne\",\n        \"Chili con carne (spicy) / sour cream / baguette\",\n        \"€9.90\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Turkey Steak\",\n        \"Turkey steak / baked potato / curd cheese with herbs / vegetables\",\n        \"€16.90\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Feta Cheese Salad\",\n        \"Salad / Balsamic dressing / grilled feta cheese / olives / peppers\",\n        \"€11.90\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Fried Eggs\",\n        \"3 fried eggs / bacon / feta cheese / salad\",\n        \"€10.90\"\n    ));\n\n    return menu;\n}\n\nfunction createMenuItem(name, description, price) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n\n    const itemName = document.createElement(\"h2\");\n    itemName.classList.add(\"name\");\n    itemName.textContent = name;\n\n    const itemImage = document.createElement(\"img\");\n    itemImage.src = `images/${name.replace(/\\s/g, '_').toLowerCase()}.jpg`;\n    itemImage.alt = `${name}`;\n\n    const itemDescription = document.createElement(\"p\");\n    itemDescription.classList.add(\"description\");\n    itemDescription.textContent = description;\n\n    const itemPrice = document.createElement(\"p\");\n    itemPrice.classList.add(\"price\");\n    itemPrice.textContent = price;\n\n    menuItem.appendChild(itemName);\n    menuItem.appendChild(itemImage);\n    menuItem.appendChild(itemDescription);\n    menuItem.appendChild(itemPrice);\n\n    return menuItem;\n}\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    \n    const headerTop = document.createElement(\"div\");\n    headerTop.classList.add(\"header-top\");\n    \n    const flags = [];\n    for (let i = 0; i < 2; i++) {\n        const flagGermany = document.createElement(\"img\");\n        flagGermany.classList.add(\"flag-germany\");\n        flagGermany.src = \"images/germany.jpg\";\n        flagGermany.alt = \"Flag of Germany\";\n        flags.push(flagGermany);\n    }\n    \n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"Vicmar Restaurant\";\n    \n    headerTop.appendChild(flags[0]);\n    headerTop.appendChild(restaurantName);\n    headerTop.appendChild(flags[1]);\n    \n    header.appendChild(headerTop);\n    header.appendChild(createNav());\n    \n    return header;\n}\n\nfunction createNav() {\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"navbar\");\n    \n    const homeBtn = document.createElement(\"button\");\n    homeBtn.classList.add(\"nav-btn\");\n    homeBtn.classList.add(\"active\");\n    homeBtn.textContent = \"Home\";\n    homeBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveBtn(homeBtn);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n    \n    const menuBtn = document.createElement(\"button\");\n    menuBtn.classList.add(\"nav-btn\");\n    menuBtn.textContent = \"Menu\";\n    menuBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveBtn(menuBtn);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    \n    const contactBtn = document.createElement(\"button\");\n    contactBtn.classList.add(\"nav-btn\");\n    contactBtn.textContent = \"Contact\";\n    contactBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveBtn(contactBtn);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    \n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    \n    return nav;\n}\n\nfunction setActiveBtn(btn) {\n    const navBtns = document.querySelectorAll(\".nav-btn\");\n    navBtns.forEach((btn) => {\n        btn.classList.remove(\"active\");\n    });\n    btn.classList.add(\"active\");\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n    \n    const copyright = document.createElement(\"p\");\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} reyesvictor1`;\n    \n    const githubLink = document.createElement(\"a\");\n    githubLink.href = \"https://github.com/reyesvictor1\";\n    githubLink.target = \"blank\";\n    \n    const githubIcon = document.createElement(\"img\");\n    githubIcon.classList.add(\"github-icon\");\n    githubIcon.src = \"images/github.png\";\n    \n    githubLink.appendChild(githubIcon);\n    footer.appendChild(copyright);\n    footer.appendChild(githubLink);\n    \n    return footer;\n}\n\nfunction loadWebsite() {\n    const content = document.querySelector(\"#content\");\n    const header = createHeader();\n    const main = createMain();\n    const footer = createFooter();\n    \n    content.appendChild(header);\n    content.appendChild(main);\n    content.appendChild(footer);\n    \n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);\n\n//# sourceURL=webpack://restaurantpage/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;