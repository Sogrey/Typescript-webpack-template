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

/***/ "./dist.tsc/src/index.js":
/*!*******************************!*\
  !*** ./dist.tsc/src/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Greeter_1 = __webpack_require__(/*! ./model/Greeter */ \"./dist.tsc/src/model/Greeter.js\");\r\nvar TW = {\r\n    VERSION: \"0.0.1\",\r\n    test: function () {\r\n        console.log(\"Hi,It's running.\");\r\n    },\r\n    Greeter: Greeter_1.Greeter,\r\n};\r\nexports.default = TW;\r\n\n\n//# sourceURL=webpack://typescript-webpack-template/./dist.tsc/src/index.js?");

/***/ }),

/***/ "./dist.tsc/src/model/Greeter.js":
/*!***************************************!*\
  !*** ./dist.tsc/src/model/Greeter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Greeter = void 0;\r\nvar Greeter = /** @class */ (function () {\r\n    function Greeter(message) {\r\n        this.greeting = message;\r\n    }\r\n    Greeter.prototype.greet = function () {\r\n        return \"Hello, \" + this.greeting;\r\n    };\r\n    return Greeter;\r\n}());\r\nexports.Greeter = Greeter;\r\n\n\n//# sourceURL=webpack://typescript-webpack-template/./dist.tsc/src/model/Greeter.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dist.tsc/src/index.js");
/******/ 	
/******/ })()
;