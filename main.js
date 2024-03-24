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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n    const main = document.querySelector(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createHome());\n}\n\nfunction createHome() {\n    const home = document.createElement(\"div\");\n    home.classList.add(\"home\");\n\n    const welcome = document.createElement(\"p\");\n    welcome.classList.add(\"welcome\");\n    welcome.textContent = \"Willkommen!\";\n\n    const description = document.createElement(\"p\");\n    description.classList.add(\"description\");\n    description.textContent = \"The best Schnitzel restaurant in Munich\";\n\n    const image = document.createElement(\"img\");\n    image.classList.add(\"image\");\n    image.src = \"images/bild15.jpg\";\n    image.alt = \"Image of the restaurant\";\n\n    const since = document.createElement(\"p\");\n    since.classList.add(\"since\");\n    since.textContent = \"Since 1954\";\n\n    home.appendChild(welcome);\n    home.appendChild(description);\n    home.appendChild(image);\n    home.appendChild(since);\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    const main = document.querySelector(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n}\n\nclass MenuItem {\n    constructor(name, description, price, image) {\n        this.name = name;\n        this.description = description;\n        this.price = price;\n    }\n}\n\nfunction createMenu() {\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu\");\n    \n    const menuItems = [];\n    menuItems.push(new MenuItem(\"Currywurst\", \"Curried sausage / french fries\", \"€10.90\"));\n    menuItems.push(new MenuItem(\"Currywurst\", \"Curried sausage / french fries\", \"€10.90\"));\n    menuItems.push(new MenuItem(\"Currywurst\", \"Curried sausage / french fries\", \"€10.90\"));\n    menuItems.push(new MenuItem(\"Currywurst\", \"Curried sausage / french fries\", \"€10.90\"));\n    menuItems.push(new MenuItem(\"Currywurst\", \"Curried sausage / french fries\", \"€10.90\"));\n    menuItems.push(new MenuItem(\"Currywurst\", \"Curried sausage / french fries\", \"€10.90\"));\n    \n    menuItems.forEach((item) => {\n        menu.appendChild(createMenuDiv(item));\n    });\n\n    return menu;\n}\n\nfunction createMenuDiv(menuItem) {\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.classList.add(\"menu-item\");\n\n    const name = document.createElement(\"h2\");\n    name.classList.add(\"name\");\n    name.textContent = menuItem.name;\n\n    const image = document.createElement(\"img\");\n    image.src = `images/${menuItem.name.toLowerCase()}.jpg`;\n    image.alt = `${menuItem.name}`;\n\n    const description = document.createElement(\"p\");\n    description.classList.add(\"description\");\n    description.textContent = menuItem.description;\n\n    const price = document.createElement(\"p\");\n    price.classList.add(\"price\");\n    price.textContent = menuItem.price;\n\n    menuDiv.appendChild(name);\n    menuDiv.appendChild(image);\n    menuDiv.appendChild(description);\n    menuDiv.appendChild(price);\n\n    return menuDiv;\n}\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    \n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"Vicmar Restaurant\";\n    \n    header.appendChild(restaurantName);\n    header.appendChild(createNav());\n    \n    return header;\n}\n\nfunction createNav() {\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"navbar\");\n    \n    const homeBtn = document.createElement(\"button\");\n    homeBtn.classList.add(\"nav-btn\");\n    homeBtn.classList.add(\"active\");\n    homeBtn.textContent = \"Home\";\n    homeBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveBtn(homeBtn);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n    \n    const menuBtn = document.createElement(\"button\");\n    menuBtn.classList.add(\"nav-btn\");\n    menuBtn.textContent = \"Menu\";\n    menuBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveBtn(menuBtn);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    \n    const contactBtn = document.createElement(\"button\");\n    contactBtn.classList.add(\"nav-btn\");\n    contactBtn.textContent = \"Contact\";\n    contactBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveBtn(contactBtn);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    \n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    \n    return nav;\n}\n\nfunction setActiveBtn(btn) {\n    const navBtns = document.querySelectorAll(\".nav-btn\");\n    navBtns.forEach((btn) => {\n        btn.classList.remove(\"active\");\n    });\n    btn.classList.add(\"active\");\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n    \n    const copyright = document.createElement(\"p\");\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} reyesvictor1`;\n    \n    footer.appendChild(copyright);\n    \n    return footer;\n}\n\nfunction loadWebsite() {\n    const content = document.querySelector(\"#content\");\n    const header = createHeader();\n    const main = createMain();\n    const footer = createFooter();\n    \n    content.appendChild(header);\n    content.appendChild(main);\n    content.appendChild(footer);\n    \n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);\n\n//# sourceURL=webpack://restaurantpage/./src/website.js?");

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