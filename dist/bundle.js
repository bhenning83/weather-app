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

/***/ "./src/apis.js":
/*!*********************!*\
  !*** ./src/apis.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => /* binding */ getData,\n/* harmony export */   \"getGif\": () => /* binding */ getGif\n/* harmony export */ });\nconst getGif = async (desc) => {\n  try {\n    //calls api\n    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0rvzBeZcPTKU9FJMPRwEtqpzKYNPr4ZA&s=${desc}`)\n    \n    //converts to json data\n    let json = await response.json();\n\n    //returns promise of a gif url\n    return json.data.images.original.url;\n  } catch (error) {\n    console.log(error)\n  }\n}\n\nconst getData = async (city) => {\n  const openWeatherKey = '480b9920e735a04affc24c731838e8fe';\n  let openWeatherAPI = 'api.openweathermap.org/data/2.5/weather?q=';\n  let api = `http://${openWeatherAPI}${city}&units=imperial&appid=${openWeatherKey}`;\n  try {\n    //call api\n    let response = await fetch(api);\n\n    //convert resposne to json\n    let obj = await response.json();\n\n    //return a promise of an object with usable data\n    let desc = obj.weather[0].description;\n    let temp = obj.main.temp;\n    let feelsLike = obj.main.feels_like;\n    let hi = obj.main.temp_max;\n    let low = obj.main.temp_min;\n    return {\n      desc: desc, \n      temp: Math.round(temp),\n      feelsLike: Math.round(feelsLike),\n      hi: Math.round(hi),\n      low: Math.round(low)\n    }\n  } catch(error) {\n    alert(error);\n\n    //stops form submission if any errors\n    preventDefault();\n  }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/apis.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis */ \"./src/apis.js\");\n\nconst displayData = (obj, city, deg) => {\n  const loc = document.getElementById('city');\n  const temp = document.querySelector('#temp > div');\n  const feels = document.querySelector('#feels > div');\n  const desc = document.querySelector('#desc > div');\n  const hi = document.querySelector('#hi > div');\n  const low = document.querySelector('#low > div');\n  const gif = document.querySelector('#gif');\n  loc.textContent = city;\n  temp.textContent = obj.temp + deg;\n  feels.textContent = obj.feelsLike + deg;\n  desc.textContent = obj.desc;\n  hi.textContent = obj.hi + deg;\n  low.textContent = obj.low + deg;\n\n  //resolves the promise\n  (0,_apis__WEBPACK_IMPORTED_MODULE_0__.getGif)(obj.desc).then(url => {gif.src = url})\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apis */ \"./src/apis.js\");\n// import './styles.css';\n\n\nconst form = document.querySelector('form');\nconst checkbox = document.querySelector('input[type=checkbox]');\n\nconst toC = (c) => {\n  //changes Farenheit to Celcius\n  let deg = (c - 32) * (5 / 9);\n  return Math.round(deg);\n}\n\nconst getCity = () => {\n  return form.querySelector('input').value;\n}\n\nconst populate = () => {\n  let city = getCity();\n  let deg = '°F';\n\n  //retrieve data for given city\n  (0,_apis__WEBPACK_IMPORTED_MODULE_1__.getData)(city)\n\n  //resolve the promise\n  .then(data => {\n    //if Celcius units are selected, convert data values\n    if (checkbox.checked) { \n      deg = '°C';\n      data.temp = toC(data.temp);\n      data.feels = toC(data.feels);\n      data.hi = toC(data.hi);\n      data.low = toC(data.low);\n    }\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(data, city, deg)\n  })\n}\n\ncheckbox.addEventListener('click', (e) => {\n  populate();\n})\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  populate();\n})\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;