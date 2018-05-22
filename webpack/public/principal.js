/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/estilo.css?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilo.css */ \"./src/assets/css/estilo.css\");\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/assets/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve './botao' in '/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/src/assets/scss'\\n    at factory.create (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/webpack/lib/Compilation.js:522:10)\\n    at factory (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/webpack/lib/NormalModuleFactory.js:358:22)\\n    at resolver (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/webpack/lib/NormalModuleFactory.js:118:21)\\n    at asyncLib.parallel (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/webpack/lib/NormalModuleFactory.js:198:22)\\n    at /home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/neo-async/async.js:2817:7\\n    at /home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/neo-async/async.js:6783:13\\n    at normalResolver.resolve (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/webpack/lib/NormalModuleFactory.js:188:25)\\n    at doResolve (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/Resolver.js:181:12)\\n    at hook.callAsync (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/Resolver.js:232:5)\\n    at _fn0 (eval at create (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:15:1)\\n    at resolver.doResolve (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:37:5)\\n    at hook.callAsync (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/Resolver.js:232:5)\\n    at _fn0 (eval at create (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:15:1)\\n    at hook.callAsync (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/Resolver.js:232:5)\\n    at _fn0 (eval at create (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:12:1)\\n    at resolver.doResolve (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)\\n    at hook.callAsync (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/Resolver.js:232:5)\\n    at _fn42 (eval at create (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:393:1)\\n    at hook.callAsync (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/Resolver.js:232:5)\\n    at _fn0 (eval at create (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:12:1)\\n    at resolver.doResolve (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)\\n    at hook.callAsync (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/Resolver.js:232:5)\\n    at _fn1 (eval at create (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:24:1)\\n    at hook.callAsync (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/Resolver.js:232:5)\\n    at _fn0 (eval at create (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:15:1)\\n    at fs.stat (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:22:13)\\n    at process.nextTick (/home/giselletavares/Documents/giselletavares/_CursosOnline/Udemy-JSModerno/WebModernoStudies/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:73:15)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?");

/***/ }),

/***/ "./src/modulos/moduloA.js":
/*!********************************!*\
  !*** ./src/modulos/moduloA.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduloB = __webpack_require__(/*! ./moduloB */ \"./src/modulos/moduloB.js\")\nconsole.log(moduloB.saudacao())\n\n//# sourceURL=webpack:///./src/modulos/moduloA.js?");

/***/ }),

/***/ "./src/modulos/moduloB.js":
/*!********************************!*\
  !*** ./src/modulos/moduloB.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    saudacao() { return 'Olá eu sou o modulo B!' }\n}\n\n//# sourceURL=webpack:///./src/modulos/moduloB.js?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\nclass Pessoa {\n    cumprimentar() {\n        return 'Bom dia!'\n    }\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/moduloA */ \"./src/modulos/moduloA.js\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ \"./src/assets/index.js\");\n\n\n\n\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });