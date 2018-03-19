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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_RandomFlipAnimation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_SelectSection__ = __webpack_require__(2);



__WEBPACK_IMPORTED_MODULE_0__modules_RandomFlipAnimation__["a" /* default */].init();
__WEBPACK_IMPORTED_MODULE_1__modules_SelectSection__["a" /* default */].init();

particlesJS.load('particles-js', '/src/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


// use for debug
//document.querySelector('.four .circularContainer').click();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DELTA_TIME = 3*1000;
const ANIMATION_CLASS = 'rotateYmirrorON';

var RandomFlipAnimation = {


    init(){

        let circularContainers = document.querySelectorAll('.rotationWrapper .circularContainer');
        circularContainers.forEach(el => {
            setInterval(()=>{

                const seconds = Math.floor((Math.random() * 5) + 1);
                el.classList.toggle(ANIMATION_CLASS);
                this.animEl(el);

            },5000);

            this.animEl(el);
        })
    },

    animEl(el){
        const seconds = Math.floor((Math.random() * 5) + 1);
        if(!el.style.animationDelay.includes(seconds+"2s"))
          el.style.animationDelay =  seconds+"s";

          el.classList.toggle(ANIMATION_CLASS);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (RandomFlipAnimation);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const COLLAPSED_SECTION_CLASS = 'collapsed';
const ACTIVE_SECTION_CLASS = 'active';

const SelectSection = {

    init(){

        this.watchClicks();
    },

    toogleNavigator(collapsed){
        // collapse navigator
        const navigator = document.getElementById('navigator');
        const main = document.getElementById('main');

        if(collapsed){
          navigator.classList += COLLAPSED_SECTION_CLASS;
          main.classList += COLLAPSED_SECTION_CLASS;
        } else {
          navigator.classList.toggle(COLLAPSED_SECTION_CLASS);
          main.classList.toggle(COLLAPSED_SECTION_CLASS);
        }
    },

    watchClicks(){

        const circularContainers = document.querySelectorAll('.circularBullet .circularContainer');
        circularContainers.forEach(element => {
            element.addEventListener("click", (e,el) => {
                const selectedSectionId = e.currentTarget.dataset.sectionid;
                const activeSection = document.querySelector('SECTION.'+ACTIVE_SECTION_CLASS);
                const selectedSection = document.querySelector('SECTION#'+selectedSectionId);

                if(!activeSection){
                  this.toogleNavigator();

                  selectedSection.classList += ACTIVE_SECTION_CLASS;

                } else {
                  this.toogleNavigator();
                  activeSection.classList -= ACTIVE_SECTION_CLASS;
                }


            });
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (SelectSection);


/***/ })
/******/ ]);
//# sourceMappingURL=site.bundle.js.map