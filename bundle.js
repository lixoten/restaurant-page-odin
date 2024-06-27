/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/images/bolinho.jpg":
/*!***********************************!*\
  !*** ./assets/images/bolinho.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/1e41820ff97a569799875002f1d4736b.jpg");

/***/ }),

/***/ "./assets/images/farofa.jpg":
/*!**********************************!*\
  !*** ./assets/images/farofa.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/6003f7bfee4cf531a6f17b8ee269e3e8.jpg");

/***/ }),

/***/ "./assets/images/feijoada.jpeg":
/*!*************************************!*\
  !*** ./assets/images/feijoada.jpeg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/8c91bf1e8f37693e494ca25ea07e4a6d.jpeg");

/***/ }),

/***/ "./assets/images/github-mark.png":
/*!***************************************!*\
  !*** ./assets/images/github-mark.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/3524c849ab38de4be923b875e3b7d29c.png");

/***/ }),

/***/ "./assets/images/paodequeijo.jpeg":
/*!****************************************!*\
  !*** ./assets/images/paodequeijo.jpeg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/2d8bbfa10b4d9b9cc4f6f416a110b731.jpeg");

/***/ }),

/***/ "./assets/images/pastel.jpg":
/*!**********************************!*\
  !*** ./assets/images/pastel.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/b6aae5f12577ac1a663933bca7b829a6.jpg");

/***/ }),

/***/ "./assets/images/picanha.jpg":
/*!***********************************!*\
  !*** ./assets/images/picanha.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/5e9d562832f3d2cbfbaf7d50692e5879.jpg");

/***/ }),

/***/ "./assets/images/store_front.jpg":
/*!***************************************!*\
  !*** ./assets/images/store_front.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/70531228231905df296263d1f2bc3ca2.jpg");

/***/ }),

/***/ "./assets/images/vatapa.jpg":
/*!**********************************!*\
  !*** ./assets/images/vatapa.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/703b47c1448c091ec32114b82124eb7c.jpg");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/about-page.js":
/*!******************************!*\
  !*** ./src/js/about-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const createRestaurantAboutPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const localContent = document.createElement('div');
    localContent.classList.add('about-page')

    const aboutHead = document.createElement('h1');
    aboutHead.setAttribute("class", "about-head")
    aboutHead.textContent = "About Us";
    localContent.appendChild(aboutHead);

    const story = document.createElement('p');
    story.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt " +
        "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea" +
        "te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh " +
        "euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Come see us soon!!!";
    localContent.appendChild(story);

    pageContent.appendChild(localContent);
    content.appendChild(pageContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantAboutPage);

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_bolinho_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/bolinho.jpg */ "./assets/images/bolinho.jpg");
/* harmony import */ var _assets_images_farofa_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/farofa.jpg */ "./assets/images/farofa.jpg");
/* harmony import */ var _assets_images_feijoada_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/feijoada.jpeg */ "./assets/images/feijoada.jpeg");
/* harmony import */ var _assets_images_paodequeijo_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/paodequeijo.jpeg */ "./assets/images/paodequeijo.jpeg");
/* harmony import */ var _assets_images_pastel_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/pastel.jpg */ "./assets/images/pastel.jpg");
/* harmony import */ var _assets_images_picanha_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/picanha.jpg */ "./assets/images/picanha.jpg");
/* harmony import */ var _assets_images_vatapa_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/vatapa.jpg */ "./assets/images/vatapa.jpg");








const createRestaurantMenuPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container')

    const item1 = menuItem(_assets_images_bolinho_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], "Bolinho de Bacalahu", "$3.00 Each");
    const item2 = menuItem(_assets_images_farofa_jpg__WEBPACK_IMPORTED_MODULE_1__["default"], "Farofa Dish", "$12.00");
    const item3 = menuItem(_assets_images_feijoada_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"], "Feijoada Dish", "$3.00 Each");
    const item4 = menuItem(_assets_images_paodequeijo_jpeg__WEBPACK_IMPORTED_MODULE_3__["default"], "Pao de Queijo", "$2.00 Each");
    const item5 = menuItem(_assets_images_pastel_jpg__WEBPACK_IMPORTED_MODULE_4__["default"], "Pastel", "$2.00 Each");
    const item6 = menuItem(_assets_images_picanha_jpg__WEBPACK_IMPORTED_MODULE_5__["default"], "Picanha a la Bob", "$7.00 Each");
    const item7 = menuItem(_assets_images_vatapa_jpg__WEBPACK_IMPORTED_MODULE_6__["default"], "Vatapa mystery Dish", "$0.99");

    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);
    menuContainer.appendChild(item5);
    menuContainer.appendChild(item6);
    menuContainer.appendChild(item7);

    pageContent.appendChild(menuContainer);
    content.appendChild(pageContent);
}

function menuItem(imgSrc, name, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item')

    const imgElement = document.createElement('img');
    imgElement.setAttribute("src", imgSrc)
    menuItem.appendChild(imgElement)

    const nameElement = document.createElement('p');
    nameElement.setAttribute("class", "name");
    nameElement.textContent = name;
    menuItem.appendChild(nameElement)

    const priceElement = document.createElement('p');
    priceElement.setAttribute("class", "name");
    priceElement.textContent = price;
    menuItem.appendChild(priceElement)

    return menuItem;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantMenuPage);

/***/ }),

/***/ "./src/js/pageLoad.js":
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restaurant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.js */ "./src/js/restaurant.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _about_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page.js */ "./src/js/about-page.js");




function initialLoad() {
    const elements  = {
        menu1: document.getElementById('home-btn'),
        menu2: document.getElementById('menu-btn'),
        menu3: document.getElementById('about-btn')
    }

    const clearContent = () => {
        const content = document.getElementById('content');
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
            content.removeChild(pageContent);
        }
    }
    const makeActive = (menuItem) => {
        allMenus.forEach(menu => menu.classList.remove('active'));
        menuItem.classList.add('active');
    }
    const allMenus = [elements.menu1, elements.menu2, elements.menu3];


    elements.menu1.addEventListener("click", () => {
        clearContent();
        (0,_restaurant_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        makeActive(elements.menu1);
    })
    elements.menu2.addEventListener("click", () => {
        clearContent();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        makeActive(elements.menu2);
    })
    elements.menu3.addEventListener("click", () => {
        clearContent();
        (0,_about_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        makeActive(elements.menu3);
    })

    makeActive(elements.menu1);
    (0,_restaurant_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

// initialLoad();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);

/***/ }),

/***/ "./src/js/restaurant.js":
/*!******************************!*\
  !*** ./src/js/restaurant.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_store_front_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/store_front.jpg */ "./assets/images/store_front.jpg");


const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')


    const localContent = document.createElement('div');
    localContent.classList.add('home-page')

    const image = document.createElement('img');
    image.src = _assets_images_store_front_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    image.classList.add("front-image");
    localContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "XXXWelcome to a sssXXTaste of Brasil";
    localContent.appendChild(headline);

    const oneLiner = document.createElement('p');
    oneLiner.textContent = "Please enjoy. Food For All";
    localContent.appendChild(oneLiner);

    pageContent.appendChild(localContent);
    content.appendChild(pageContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _assets_images_github_mark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/github-mark.png */ "./assets/images/github-mark.png");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoad */ "./src/js/pageLoad.js");



document.getElementById('github-logo').src = _assets_images_github_mark_png__WEBPACK_IMPORTED_MODULE_1__["default"];

(0,_pageLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();


/******/ })()
;
//# sourceMappingURL=bundle.js.map