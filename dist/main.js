/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Document</title>\r\n    <script\r\n      src=\"https://kit.fontawesome.com/4481fae25d.js\"\r\n      crossorigin=\"anonymous\"\r\n    ></script>\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div class=\"header-section\">\r\n      <div class=\"container\">\r\n        <header class=\"header\">\r\n          <nav class=\"header--navs\">\r\n            <a href=\"#\">Главная</a>\r\n            <a class=\"active\" href=\"##\">О компании</a>\r\n            <a href=\"##\">Ссылка 1</a>\r\n            <a href=\"##\">Ссылка 2</a>\r\n            <a href=\"##\">Ссылка 3</a>\r\n          </nav>\r\n          <div class=\"header--burger\">\r\n            <span></span>\r\n          </div>\r\n          <div class=\"header--signin\">\r\n            <a href=\"#enter\" class=\"popup--link\">\r\n              <img src=\"images/user.png\" alt=\"user-icon\" />\r\n              Вход\r\n            </a>\r\n          </div>\r\n        </header>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"main-section\">\r\n      <div class=\"container\">\r\n        <div class=\"row-1\">\r\n          <img class=\"logo\" src=\"images/logo.png\" alt=\"logo\" />\r\n\r\n          <div class=\"contact-us\">\r\n            <span>+380 98 170 00 740</span>\r\n            <span>+380 98 170 00 740</span>\r\n            <div class=\"call-me\">\r\n              <a href=\"#recall\" class=\"popup--link\">\r\n                <img src=\"images/phone.png\" alt=\"user-icon\" />\r\n                Перезвонить мне\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n          <nav class=\"user-nav\">\r\n            <a href=\"#\">\r\n              <img src=\"images/icon-1.png\" alt=\"user-icon-1\" />\r\n              <p>сравнение</p>\r\n            </a>\r\n            <a href=\"#\">\r\n              <img src=\"images/icon-2.png\" alt=\"user-icon-1\" />\r\n              <p>избранное</p>\r\n            </a>\r\n            <a href=\"#\">\r\n              <img src=\"images/icon-3.png\" alt=\"user-icon-1\" />\r\n              <p>корзина</p>\r\n              <div class=\"basket\"><span> 5 </span></div>\r\n            </a>\r\n          </nav>\r\n        </div>\r\n\r\n        <div class=\"row-2\">\r\n          <div class=\"menu\">\r\n            <div class=\"menu--icon\">\r\n              <a href=\"#\">\r\n                <img src=\"images/burger.png\" alt=\"menu-icon\" />\r\n              </a>\r\n            </div>\r\n            <span>Меню</span>\r\n          </div>\r\n\r\n          <div class=\"search\">\r\n            <form action=\"#\">\r\n              <input\r\n                type=\"search\"\r\n                placeholder=\"Поиск по сайту\"\r\n                class=\"search-area\"\r\n              />\r\n              <div class=\"select\">\r\n                <select name=\"select-category\">\r\n                  <option selected value=\"Все категории\">Все категории</option>\r\n                  <option value=\"Категория 1\">Категория 1</option>\r\n                  <option value=\"Категория 2\">Категория 2</option>\r\n                  <option value=\"Категория 3\">Категория 3</option>\r\n                  <option value=\"Категория 4\">Категория 4</option>\r\n                </select>\r\n              </div>\r\n\r\n              <input type=\"submit\" class=\"submit-btn\" value=\"поиск\" />\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row-3\">\r\n          <ul class=\"menu-list\">\r\n            <li><a href=\"#\">Ссылка 1</a></li>\r\n            <li><a href=\"#\">Ссылка 2</a></li>\r\n            <li><a href=\"#\">Ссылка 3</a></li>\r\n            <li><a href=\"#\">Ссылка 4</a></li>\r\n            <li><a href=\"#\">Ссылка 5</a></li>\r\n            <li><a href=\"#\">Ссылка 6</a></li>\r\n            <li><a href=\"#\">Ссылка 7</a></li>\r\n          </ul>\r\n\r\n          <div class=\"filters\">\r\n            <nav class=\"filters--nav\">\r\n              <a class=\"active\" href=\"##\">\r\n                <img src=\"images/link-1.png\" alt=\"\" />\r\n                <span>Ссылка 1</span>\r\n              </a>\r\n              <a href=\"##\">\r\n                <img src=\"images/link-2.png\" alt=\"\" />\r\n                <span>Ссылка 2</span>\r\n              </a>\r\n              <a href=\"##\">\r\n                <img src=\"images/link-3.png\" alt=\"\" />\r\n                <span>Ссылка 3</span>\r\n              </a>\r\n              <a href=\"##\">\r\n                <img src=\"images/link-4.png\" alt=\"\" />\r\n                <span>Ссылка 4</span>\r\n              </a>\r\n              <a href=\"##\">\r\n                <img src=\"images/link-5.png\" alt=\"\" />\r\n                <span>Ссылка 5</span>\r\n              </a>\r\n            </nav>\r\n\r\n            <form action=\"#\">\r\n              <div class=\"filters--tabs\">\r\n                <a href=\"##\" id=\"tab-1\" class=\"filters--tabs-btn\">Tab 1</a>\r\n                <a href=\"##\" id=\"tab-2\" class=\"filters--tabs-btn active\"\r\n                  >Tab 2</a\r\n                >\r\n              </div>\r\n              <div class=\"filters--selects\">\r\n                <div\r\n                  id=\"select-tab-1\"\r\n                  class=\"filters--selects-tab\"\r\n                  style=\"display: none\"\r\n                >\r\n                  <div class=\"filters--selects-row\">\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 1</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 1</div>\r\n                        <div class=\"select--item\">Select 2</div>\r\n                        <div class=\"select--item\">Select 3</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 2</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 2</div>\r\n                        <div class=\"select--item\">Select 3</div>\r\n                        <div class=\"select--item\">Select 4</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 3</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 3</div>\r\n                        <div class=\"select--item\">Select 4</div>\r\n                        <div class=\"select--item\">Select 5</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 4</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 4</div>\r\n                        <div class=\"select--item\">Select 5</div>\r\n                        <div class=\"select--item\">Select 6</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"filters--selects-row\">\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 5</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 5</div>\r\n                        <div class=\"select--item\">Select 6</div>\r\n                        <div class=\"select--item\">Select 7</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 6</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 6</div>\r\n                        <div class=\"select--item\">Select 7</div>\r\n                        <div class=\"select--item\">Select 8</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 7</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 7</div>\r\n                        <div class=\"select--item\">Select 8</div>\r\n                        <div class=\"select--item\">Select 9</div>\r\n                      </div>\r\n                    </div>\r\n                    <span>Цена</span>\r\n                    <div class=\"input-wrap\">\r\n                      <input type=\"number\" placeholder=\"50\" />\r\n                    </div>\r\n                    <div class=\"input-wrap\">\r\n                      <input type=\"number\" placeholder=\"250000\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div id=\"select-tab-2\" class=\"filters--selects-tab\">\r\n                  <div class=\"filters--selects-row\">\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 1</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 1</div>\r\n                        <div class=\"select--item\">Select 2</div>\r\n                        <div class=\"select--item\">Select 3</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 2</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 2</div>\r\n                        <div class=\"select--item\">Select 3</div>\r\n                        <div class=\"select--item\">Select 4</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 3</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 3</div>\r\n                        <div class=\"select--item\">Select 4</div>\r\n                        <div class=\"select--item\">Select 5</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 4</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 4</div>\r\n                        <div class=\"select--item\">Select 5</div>\r\n                        <div class=\"select--item\">Select 6</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"filters--selects-row\">\r\n                    <div class=\"select\">\r\n                      <div class=\"select--header\">\r\n                        <span class=\"select--current\">Select 6</span>\r\n                        <div class=\"select--icon\">&#9660;</div>\r\n                      </div>\r\n\r\n                      <div class=\"select--body\">\r\n                        <div class=\"select--item\">Select 6</div>\r\n                        <div class=\"select--item\">Select 7</div>\r\n                        <div class=\"select--item\">Select 8</div>\r\n                      </div>\r\n                    </div>\r\n                    <span>Цена</span>\r\n                    <div class=\"input-wrap\">\r\n                      <input type=\"number\" placeholder=\"50\" />\r\n                    </div>\r\n                    <div class=\"input-wrap\">\r\n                      <input type=\"number\" placeholder=\"250000\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"filters--btns\">\r\n                <input type=\"reset\" value=\"&times; Очистить фильтр\" />\r\n                <input type=\"submit\" value=\"Применить фильтр\" />\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"products\">\r\n      <div class=\"container\">\r\n        <header class=\"products--header\">\r\n          <h2 class=\"products--title\">Карточки товаров</h2>\r\n          <a href=\"#\" class=\"products--link\">\r\n            <span>Ссылка в каталог</span>\r\n            <span>&rarr;</span>\r\n          </a>\r\n        </header>\r\n\r\n        <div class=\"products--row\">\r\n          <article class=\"products--row-item\">\r\n            <button class=\"products--row-mark\">Mark</button>\r\n            <a class=\"products--row-title\">\r\n              Антифриз Fosser Antifreeze FA 12 Readymix 1 л Concentrat, Germany\r\n            </a>\r\n            <div class=\"products--row-overview\">\r\n              <div class=\"products--row-rating\">\r\n                <div class=\"products--row-rating-wrap\" data-total-value=\"5\">\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"5\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"4\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"3\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"2\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"1\">\r\n                    ★\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\" class=\"products--row-reviews\">Отзывы (10)</a>\r\n              </div>\r\n              <span>В наличии: 24 шт.</span>\r\n            </div>\r\n            <div class=\"products--row-pictures\">\r\n              <img src=\"images/tire-1.png\" alt=\"\" />\r\n              <div class=\"products--row-info\">\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/sun.png\" alt=\"\" />\r\n                  <span>Летняя</span>\r\n                </div>\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/car.png\" alt=\"\" />\r\n                  <span>легковая</span>\r\n                </div>\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/new.png\" alt=\"\" />\r\n                  <span>новая</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"products--row-tags\">\r\n              <div class=\"tag-new\">Новинка</div>\r\n              <div class=\"tag-popular\">Хит</div>\r\n              <div class=\"tag-discount\">скидка</div>\r\n            </div>\r\n            <div class=\"products--row-prices\">\r\n              <span class=\"current-price\">599 <span>грн.</span></span>\r\n              <span class=\"old-price\">1 250 грн.</span>\r\n            </div>\r\n            <a href=\"#\" class=\"products--row-btn\">\r\n              <img src=\"images/basket.png\" alt=\"\" />\r\n              <span>купить товар</span>\r\n            </a>\r\n            <div class=\"products--row-footer\">\r\n              <a class=\"products--row-link\" href=\"##\">\r\n                <img src=\"images/products-img-1.png\" alt=\"\" />\r\n                <span>Сравнить товар</span>\r\n              </a>\r\n              <a class=\"products--row-link\" href=\"##\">\r\n                <img src=\"images/products-img-2.png\" alt=\"\" />\r\n                <span>В избранное</span>\r\n              </a>\r\n            </div>\r\n          </article>\r\n          <article class=\"products--row-item\">\r\n            <button class=\"products--row-mark\">Mark</button>\r\n            <a class=\"products--row-title\">\r\n              Антифриз Fosser Antifreeze FA 12 Readymix 1 л Concentrat, Germany\r\n            </a>\r\n            <div class=\"products--row-overview\">\r\n              <div class=\"products--row-rating\">\r\n                <div class=\"products--row-rating-wrap\" data-total-value=\"3\">\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"5\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"4\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"3\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"2\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"1\">\r\n                    ★\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\" class=\"products--row-reviews\">Отзывы (10)</a>\r\n              </div>\r\n              <span>В наличии: 24 шт.</span>\r\n            </div>\r\n            <div class=\"products--row-pictures\">\r\n              <img src=\"images/tire-2.png\" alt=\"\" />\r\n              <div class=\"products--row-info\">\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/sun.png\" alt=\"\" />\r\n                  <span>Летняя</span>\r\n                </div>\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/new.png\" alt=\"\" />\r\n                  <span>новая</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"products--row-tags\">\r\n              <div class=\"tag-new\">Новинка</div>\r\n              <div class=\"tag-popular\">Хит</div>\r\n            </div>\r\n            <div class=\"products--row-prices\">\r\n              <span class=\"current-price\">599 <span>грн.</span></span>\r\n              <span class=\"old-price\">1 250 грн.</span>\r\n            </div>\r\n            <a href=\"#\" class=\"products--row-btn\">\r\n              <img src=\"images/basket.png\" alt=\"\" />\r\n              <span>купить товар</span>\r\n            </a>\r\n            <div class=\"products--row-footer\">\r\n              <a class=\"products--row-link\" href=\"##\">\r\n                <img src=\"images/products-img-1.png\" alt=\"\" />\r\n                <span>Сравнить товар</span>\r\n              </a>\r\n              <a class=\"products--row-link\" href=\"##\">\r\n                <img src=\"images/products-img-2.png\" alt=\"\" />\r\n                <span>В избранное</span>\r\n              </a>\r\n            </div>\r\n          </article>\r\n          <article class=\"products--row-item\">\r\n            <button class=\"products--row-mark\">Mark</button>\r\n            <a class=\"products--row-title\">\r\n              Антифриз Fosser Antifreeze FA 12 Readymix 1 л Concentrat, Germany\r\n            </a>\r\n            <div class=\"products--row-overview\">\r\n              <div class=\"products--row-rating\">\r\n                <div class=\"products--row-rating-wrap\" data-total-value=\"0\">\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"5\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"4\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"3\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"2\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"1\">\r\n                    ★\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\" class=\"products--row-reviews\">Без отзывов</a>\r\n              </div>\r\n              <span>В наличии: 24 шт.</span>\r\n            </div>\r\n            <div class=\"products--row-pictures\">\r\n              <img src=\"images/tire-3.png\" alt=\"\" />\r\n              <div class=\"products--row-info\">\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/sun.png\" alt=\"\" />\r\n                  <span>Летняя</span>\r\n                </div>\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/car.png\" alt=\"\" />\r\n                  <span>легковая</span>\r\n                </div>\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/new.png\" alt=\"\" />\r\n                  <span>новая</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"products--row-tags\">\r\n              <div class=\"tag-new\">Новинка</div>\r\n            </div>\r\n            <div class=\"products--row-prices\">\r\n              <span class=\"current-price\">9 570 <span>грн.</span></span>\r\n              <span class=\"old-price\">11 250 грн.</span>\r\n            </div>\r\n            <a href=\"#\" class=\"products--row-btn\">\r\n              <img src=\"images/basket.png\" alt=\"\" />\r\n              <span>купить товар</span>\r\n            </a>\r\n            <div class=\"products--row-footer\">\r\n              <a class=\"products--row-link\" href=\"##\">\r\n                <img src=\"images/products-img-1.png\" alt=\"\" />\r\n                <span>Сравнить товар</span>\r\n              </a>\r\n              <a class=\"products--row-link\" href=\"##\">\r\n                <img src=\"images/products-img-2.png\" alt=\"\" />\r\n                <span>В избранное</span>\r\n              </a>\r\n            </div>\r\n          </article>\r\n          <article class=\"products--row-item\">\r\n            <button class=\"products--row-mark\">Mark</button>\r\n            <a class=\"products--row-title\">\r\n              Антифриз Fosser Antifreeze FA 12 Readymix 1 л Concentrat, Germany\r\n            </a>\r\n            <div class=\"products--row-overview\">\r\n              <div class=\"products--row-rating\">\r\n                <div class=\"products--row-rating-wrap\" data-total-value=\"5\">\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"5\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"4\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"3\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"2\">\r\n                    ★\r\n                  </div>\r\n                  <div class=\"products--row-rating-item\" data-item-value=\"1\">\r\n                    ★\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\" class=\"products--row-reviews\">Отзывы (10)</a>\r\n              </div>\r\n              <span>В наличии: 24 шт.</span>\r\n            </div>\r\n            <div class=\"products--row-pictures\">\r\n              <img src=\"images/tire-4.png\" alt=\"\" />\r\n              <div class=\"products--row-info\">\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/sun.png\" alt=\"\" />\r\n                  <span>Летняя</span>\r\n                </div>\r\n                <div class=\"products--row-img\">\r\n                  <img src=\"images/car.png\" alt=\"\" />\r\n                  <span>легковая</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"products--row-tags\"></div>\r\n            <div class=\"products--row-prices\">\r\n              <span class=\"current-price\">599 <span>грн.</span></span>\r\n            </div>\r\n            <a href=\"#\" class=\"products--row-btn\">\r\n              <img src=\"images/basket.png\" alt=\"\" />\r\n              <span>купить товар</span>\r\n            </a>\r\n            <div class=\"products--row-footer\">\r\n              <a class=\"products--row-link\" href=\"##\">\r\n                <img src=\"images/products-img-1.png\" alt=\"\" />\r\n                <span>Сравнить товар</span>\r\n              </a>\r\n              <a class=\"products--row-link\" href=\"##\">\r\n                <img src=\"images/products-img-2.png\" alt=\"\" />\r\n                <span>В избранное</span>\r\n              </a>\r\n            </div>\r\n          </article>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"footer\">\r\n      <div class=\"container\">\r\n        <div class=\"row-1\">\r\n          <div class=\"block-1\">\r\n            <h3 class=\"block-title\">Блок 1</h3>\r\n            <div class=\"block-1-inner\">\r\n              <h4>Будьте в курсе новостей и новинок!</h4>\r\n              <h4 class=\"subscribe\">Подписывайтесь на рассылку</h4>\r\n              <form action=\"#\">\r\n                <input\r\n                  type=\"email\"\r\n                  name=\"email-subsc\"\r\n                  placeholder=\"Укажите свой email для подписки\"\r\n                  class=\"subscribe-input\"\r\n                />\r\n                <input\r\n                  type=\"submit\"\r\n                  value=\"подписаться\"\r\n                  class=\"subscribe-btn\"\r\n                />\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"links-block\">\r\n            <div class=\"links-block--item\">\r\n              <h3 class=\"block-title\">Блок ссылок 1</h3>\r\n              <nav class=\"links-block--nav\">\r\n                <ul>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 1</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 2</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 3</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 4</a>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n            <div class=\"links-block--item\">\r\n              <h3 class=\"block-title\">Блок 2</h3>\r\n              <nav class=\"links-block--nav\">\r\n                <ul>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 1</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 2</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 3</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 4</a>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n            <div class=\"links-block--item\">\r\n              <h3 class=\"block-title\">Блок ссылок 3</h3>\r\n              <nav class=\"links-block--nav\">\r\n                <ul>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 1</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 2</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 3</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">Ссылка 4</a>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row-2\">\r\n          <div class=\"row-2-item\">\r\n            <div class=\"footer--logo\">\r\n              <img src=\"images/footer-logo.png\" alt=\"\" class=\"footer--logo\" />\r\n            </div>\r\n            <span>© Copyrith 2017. Тестовое задание Wezom</span>\r\n          </div>\r\n          <div class=\"row-2-item\">\r\n            <a class=\"footer--icon\" href=\"#\">\r\n              <i class=\"fab fa-vk\"></i>\r\n            </a>\r\n            <a class=\"footer--icon\" href=\"#\">\r\n              <i class=\"fab fa-facebook-f\"></i>\r\n            </a>\r\n            <a class=\"footer--icon\" href=\"#\">\r\n              <i class=\"fab fa-twitter\"></i>\r\n            </a>\r\n            <a class=\"footer--icon\" href=\"#\">\r\n              <i class=\"fab fa-youtube\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"row-2-item\">\r\n            <div class=\"wezom-logo\">\r\n              <img src=\"images/wezom-logo.png\" alt=\"\" />\r\n            </div>\r\n            <div class=\"footer--info\">\r\n              <span>Разработка тестового</span><br />\r\n              <span class=\"company-name\">Wezom Agency</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n    <div id=\"enter\" class=\"popup\">\r\n      <div class=\"popup--body\">\r\n        <div class=\"popup--content\">\r\n          <a href=\"#point\" class=\"popup--close close-popup\"></a>\r\n          <div class=\"popup--block\">\r\n            <h2 class=\"popup--title\">Вход в личный кабинет</h2>\r\n            <form action=\"#\">\r\n              <span>Ваш email</span>\r\n              <input\r\n                type=\"email\"\r\n                placeholder=\"mikel_ivanov98@gmail.com\"\r\n                required\r\n              />\r\n              <span>Пароль</span>\r\n              <input type=\"password\" placeholder=\"*************\" required />\r\n              <div class=\"popup--checkbox-wrap\">\r\n                <input type=\"checkbox\" class=\"popup--checkbox\" />\r\n                Запомнить меня\r\n              </div>\r\n              <div class=\"popup--links\">\r\n                <a href=\"##\">Забыли пароль?</a>\r\n                <a href=\"##\">Регистрация</a>\r\n              </div>\r\n              <input type=\"submit\" value=\"Войти в личный кабинет\" />\r\n            </form>\r\n          </div>\r\n          <div class=\"popup--block\">\r\n            <div class=\"popup--title\">Войти с помощью</div>\r\n            <div class=\"popup--social\">\r\n              <a href=\"#\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n                <span>Facebook</span>\r\n              </a>\r\n              <a href=\"#\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n                <span>Twitter</span>\r\n              </a>\r\n              <a href=\"#\">\r\n                <i class=\"fab fa-google\"></i>\r\n                <span>Google</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"recall\" class=\"popup\">\r\n      <div class=\"popup--body\">\r\n        <div class=\"popup--content\">\r\n          <a href=\"#point\" class=\"popup--close close-popup\"></a>\r\n          <div class=\"popup--block\">\r\n            <h2>Перезвоните мне</h2>\r\n            <form action=\"#\">\r\n              <span>Номер телефона</span>\r\n              <input\r\n                type=\"tel\"\r\n                pattern=\"+380[0-9]{9}\"\r\n                id=\"phone\"\r\n                placeholder=\"+38(0__) ___ - __ - __\"\r\n                required\r\n              />\r\n              <input type=\"submit\" value=\"Перезвоните мне\" />\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"point\" class=\"hidden-point\"></div>\r\n  </body>\r\n</html>\r\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



if (true) {
  __webpack_require__(/*! ./index.html */ "./src/index.html");
} // <------ Burger START ------>


jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header--burger').on('click', function (event) {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.header--burger, .header--navs').toggleClass('active-nav');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').toggleClass('lock');
}); // <------ Burger END ------>
// <------ Custom select START ------>

var select = function select() {
  var selectHeader = document.querySelectorAll(".select--header");
  var selectItem = document.querySelectorAll(".select--item");
  selectHeader.forEach(function (item) {
    item.addEventListener("click", selectToggle);
  });
  selectItem.forEach(function (item) {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    var text = this.innerText,
        select = this.closest(".select"),
        currentText = select.querySelector(".select--current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
}; // <------ Custom select END ------>


select(); // <------ Rating change START ------>

var ratingItemsList = document.querySelectorAll(".products--row-rating-item");
var ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
ratingItemsArray.forEach(function (item) {
  item.addEventListener("click", function () {
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  });
}); // <------ Rating change END ------>
// <------ Header's nav START ------>

jquery__WEBPACK_IMPORTED_MODULE_1___default()(".header--navs a").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".header--navs a").each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass("active");
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("active");
}); // <------ Header's nav END ------>
// <------ Selects change START ------>

jquery__WEBPACK_IMPORTED_MODULE_1___default()(".select").on("click", function (e) {
  var elem = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass("is-active");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".select").each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass("is-active");
  });

  if (elem) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("is-active");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass("is-active");
  }
}); // <------ Selects change END ------>
// <------ Filter's tab change START ------>

jquery__WEBPACK_IMPORTED_MODULE_1___default()(".filters--tabs-btn").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".filters--tabs-btn").each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass("active");
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("active");

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#tab-1").hasClass("active")) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#select-tab-1").css("display", "block");
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#select-tab-2").css("display", "none");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#select-tab-2").css("display", "block");
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#select-tab-1").css("display", "none");
  }
}); // <------ Filter's tab change END ------>
// <------ Filter's nav START ------>

jquery__WEBPACK_IMPORTED_MODULE_1___default()(".filters--nav a").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".filters--nav a").each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass("active");
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("active");
}); // <------ Filter's nav END ------>
// <------ Input wrap change START ------>

jquery__WEBPACK_IMPORTED_MODULE_1___default()(".input-wrap input").on("focus", function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().addClass("active");
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(".input-wrap input").on("blur", function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().removeClass("active");
}); // <------ Input wrap change END ------>
// <------ Popup START ------>

var popupLinks = document.querySelectorAll(".popup--link");
var body = document.querySelector("body");
var lockPadding = document.querySelectorAll(".lock-padding");
var header = document.querySelector(".header-section");
var unlock = true;
var timeout = 800;

if (popupLinks.length > 0) {
  var _loop = function _loop(i) {
    var popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      var popupName = popupLink.getAttribute("href").replace("#", "");
      var currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  };

  for (var i = 0; i < popupLinks.length; i++) {
    _loop(i);
  }
}

var popupCloseIcon = document.querySelectorAll(".close-popup");

if (popupCloseIcon.length > 0) {
  var _loop2 = function _loop2(_i) {
    var el = popupCloseIcon[_i];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  };

  for (var _i = 0; _i < popupCloseIcon.length; _i++) {
    _loop2(_i);
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    var popupActive = document.querySelector(".popup.open");

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    currentPopup.classList.add("open");
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup--content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive) {
  var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (unlock) {
    popupActive.classList.remove("open");

    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  var lockPaddingValue = window.innerWidth - document.querySelector("body").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (var _i2 = 0; _i2 < lockPadding.length; _i2++) {
      var el = lockPadding[_i2];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  header.style.paddingRight = lockPaddingValue;
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    for (var _i3 = 0; _i3 < lockPadding.length; _i3++) {
      var el = lockPadding[_i3];
      el.style.paddingRight = "0px";
    }

    body.style.paddingRight = "0px";
    header.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
} // <------ Popup END ------>

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map