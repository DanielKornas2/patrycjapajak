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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../style/main.css */ \"./src/style/main.css\");\r\nconst initApp = (currentPageData) => {\r\n    const prevImage = document.getElementById(\"prev\");\r\n    const nextImage = document.getElementById(\"next\");\r\n    const mainImage = document.getElementById(\"mainImage\");\r\n    const hamburgerMenu = document.getElementById(\"hamburgerMenu\");\r\n    const logoLink = document.getElementById(\"logoLink\");\r\n    const infoBox = document.getElementById(\"infoBox\");\r\n\r\n    if (!document.body.classList.contains('homepage')) {\r\n\r\n        let imageIndex = 0;\r\n\r\n        //function has argument - because we will have few gallersies, arg is array, each page = different image array\r\n        const nextImageChange = (imagesSource) => {\r\n            console.log('clicknext')\r\n            imageIndex++;\r\n\r\n            // when user sees the last image from array, index should be again 0 to loop images and prevent 404\r\n            if (imageIndex == imagesSource.length) {\r\n                imageIndex = 0;\r\n            }\r\n\r\n            mainImage.src = imagesSource[imageIndex];\r\n        }\r\n\r\n        const prevImageChange = (imagesSource) => {\r\n            console.log('clickprev')\r\n            imageIndex--;\r\n\r\n            // index cannot be -1 , we should loop images what means show the last image in arrray \r\n            if (imageIndex == -1) {\r\n                imageIndex = imagesSource.length - 1;\r\n            }\r\n\r\n            mainImage.src = imagesSource[imageIndex];\r\n        }\r\n\r\n        //swiped-right and swiped-left - e listeners from very light pure-swipe library\r\n        nextImage.addEventListener(\"click\", () => nextImageChange(currentPageData));\r\n        mainImage.addEventListener(\"swiped-right\", () => nextImageChange(currentPageData));\r\n\r\n        prevImage.addEventListener(\"click\", () => prevImageChange(currentPageData));\r\n        mainImage.addEventListener(\"swiped-left\", () => prevImageChange(currentPageData));\r\n    }\r\n\r\n    hamburgerMenu.addEventListener(\"click\", () => {\r\n        infoBox.classList.toggle(\"show\");\r\n        logoLink.classList.toggle(\"whiteColor\");\r\n        hamburgerMenu.classList.toggle(\"whiteColor\");\r\n    })\r\n}\r\n\r\nconst imagesListHomepage = [\"https://picsum.photos/788/461\", \"https://picsum.photos/789/463\", \"https://picsum.photos/790/463\", \"https://picsum.photos/786/461\"];\r\nconst imagesListXinaliq = [\"https://powroty.do/wp-content/uploads/2018/07/azerbejdzan-22-1024x683.jpg\", \"https://powroty.do/wp-content/uploads/2018/07/azerbejdzan-26-1024x683.jpg\", \"https://powroty.do/wp-content/uploads/2018/07/azerbejdzan-24-1024x683.jpg\", \"https://powroty.do/wp-content/uploads/2018/07/azerbejdzan-88-1024x683.jpg\", \"https://powroty.do/wp-content/uploads/2018/07/azerbejdzan-80-1024x683.jpg\", \"https://powroty.do/wp-content/uploads/2018/07/azerbejdzan-15-1024x683.jpg\"];\r\n\r\nswitch (true) {\r\n    case document.body.classList.contains('xinaliq'):\r\n        initApp(imagesListXinaliq);\r\n        break;\r\n    case document.body.classList.contains('project'):\r\n        alert('project');\r\n        break;\r\n    case document.body.classList.contains('homepage'):\r\n        initApp(imagesListHomepage);\r\n        break;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vc3R5bGUvbWFpbi5jc3MnKTtcclxuY29uc3QgaW5pdEFwcCA9IChjdXJyZW50UGFnZURhdGEpID0+IHtcclxuICAgIGNvbnN0IHByZXZJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldlwiKTtcclxuICAgIGNvbnN0IG5leHRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKTtcclxuICAgIGNvbnN0IG1haW5JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkltYWdlXCIpO1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyTWVudVwiKTtcclxuICAgIGNvbnN0IGxvZ29MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvTGlua1wiKTtcclxuICAgIGNvbnN0IGluZm9Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9Cb3hcIik7XHJcblxyXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnaG9tZXBhZ2UnKSkge1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIC8vZnVuY3Rpb24gaGFzIGFyZ3VtZW50IC0gYmVjYXVzZSB3ZSB3aWxsIGhhdmUgZmV3IGdhbGxlcnNpZXMsIGFyZyBpcyBhcnJheSwgZWFjaCBwYWdlID0gZGlmZmVyZW50IGltYWdlIGFycmF5XHJcbiAgICAgICAgY29uc3QgbmV4dEltYWdlQ2hhbmdlID0gKGltYWdlc1NvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tuZXh0JylcclxuICAgICAgICAgICAgaW1hZ2VJbmRleCsrO1xyXG5cclxuICAgICAgICAgICAgLy8gd2hlbiB1c2VyIHNlZXMgdGhlIGxhc3QgaW1hZ2UgZnJvbSBhcnJheSwgaW5kZXggc2hvdWxkIGJlIGFnYWluIDAgdG8gbG9vcCBpbWFnZXMgYW5kIHByZXZlbnQgNDA0XHJcbiAgICAgICAgICAgIGlmIChpbWFnZUluZGV4ID09IGltYWdlc1NvdXJjZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYWluSW1hZ2Uuc3JjID0gaW1hZ2VzU291cmNlW2ltYWdlSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldkltYWdlQ2hhbmdlID0gKGltYWdlc1NvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2twcmV2JylcclxuICAgICAgICAgICAgaW1hZ2VJbmRleC0tO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5kZXggY2Fubm90IGJlIC0xICwgd2Ugc2hvdWxkIGxvb3AgaW1hZ2VzIHdoYXQgbWVhbnMgc2hvdyB0aGUgbGFzdCBpbWFnZSBpbiBhcnJyYXkgXHJcbiAgICAgICAgICAgIGlmIChpbWFnZUluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUluZGV4ID0gaW1hZ2VzU291cmNlLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1haW5JbWFnZS5zcmMgPSBpbWFnZXNTb3VyY2VbaW1hZ2VJbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3N3aXBlZC1yaWdodCBhbmQgc3dpcGVkLWxlZnQgLSBlIGxpc3RlbmVycyBmcm9tIHZlcnkgbGlnaHQgcHVyZS1zd2lwZSBsaWJyYXJ5XHJcbiAgICAgICAgbmV4dEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuZXh0SW1hZ2VDaGFuZ2UoY3VycmVudFBhZ2VEYXRhKSk7XHJcbiAgICAgICAgbWFpbkltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZWQtcmlnaHRcIiwgKCkgPT4gbmV4dEltYWdlQ2hhbmdlKGN1cnJlbnRQYWdlRGF0YSkpO1xyXG5cclxuICAgICAgICBwcmV2SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHByZXZJbWFnZUNoYW5nZShjdXJyZW50UGFnZURhdGEpKTtcclxuICAgICAgICBtYWluSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcInN3aXBlZC1sZWZ0XCIsICgpID0+IHByZXZJbWFnZUNoYW5nZShjdXJyZW50UGFnZURhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaW5mb0JveC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICBsb2dvTGluay5jbGFzc0xpc3QudG9nZ2xlKFwid2hpdGVDb2xvclwiKTtcclxuICAgICAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJ3aGl0ZUNvbG9yXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgaW1hZ2VzTGlzdEhvbWVwYWdlID0gW1wiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzc4OC80NjFcIiwgXCJodHRwczovL3BpY3N1bS5waG90b3MvNzg5LzQ2M1wiLCBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy83OTAvNDYzXCIsIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzc4Ni80NjFcIl07XHJcbmNvbnN0IGltYWdlc0xpc3RYaW5hbGlxID0gW1wiaHR0cHM6Ly9wb3dyb3R5LmRvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA3L2F6ZXJiZWpkemFuLTIyLTEwMjR4NjgzLmpwZ1wiLCBcImh0dHBzOi8vcG93cm90eS5kby93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy9hemVyYmVqZHphbi0yNi0xMDI0eDY4My5qcGdcIiwgXCJodHRwczovL3Bvd3JvdHkuZG8vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDcvYXplcmJlamR6YW4tMjQtMTAyNHg2ODMuanBnXCIsIFwiaHR0cHM6Ly9wb3dyb3R5LmRvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA3L2F6ZXJiZWpkemFuLTg4LTEwMjR4NjgzLmpwZ1wiLCBcImh0dHBzOi8vcG93cm90eS5kby93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy9hemVyYmVqZHphbi04MC0xMDI0eDY4My5qcGdcIiwgXCJodHRwczovL3Bvd3JvdHkuZG8vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDcvYXplcmJlamR6YW4tMTUtMTAyNHg2ODMuanBnXCJdO1xyXG5cclxuc3dpdGNoICh0cnVlKSB7XHJcbiAgICBjYXNlIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd4aW5hbGlxJyk6XHJcbiAgICAgICAgaW5pdEFwcChpbWFnZXNMaXN0WGluYWxpcSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jyk6XHJcbiAgICAgICAgYWxlcnQoJ3Byb2plY3QnKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWVwYWdlJyk6XHJcbiAgICAgICAgaW5pdEFwcChpbWFnZXNMaXN0SG9tZXBhZ2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/pure-swipe.js":
/*!******************************!*\
  !*** ./src/js/pure-swipe.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * pure-swipe.js - v@version@\n * Pure JavaScript swipe events\n * https://github.com/john-doherty/pure-swipe\n * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element\n * @author John Doherty <www.johndoherty.info>\n * @license MIT\n */\n(function (window, document) {\n\n    'use strict';\n\n    // patch CustomEvent to allow constructor creation (IE/Chrome) - resolved once initCustomEvent no longer exists\n    if ('initCustomEvent' in document.createEvent('CustomEvent')) {\n\n        window.CustomEvent = function (event, params) {\n\n            params = params || { bubbles: false, cancelable: false, detail: undefined };\n\n            var evt = document.createEvent('CustomEvent');\n            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n            return evt;\n        };\n\n        window.CustomEvent.prototype = window.Event.prototype;\n    }\n\n    document.addEventListener('touchstart', handleTouchStart, false);\n    document.addEventListener('touchmove', handleTouchMove, false);\n    document.addEventListener('touchend', handleTouchEnd, false);\n\n    var xDown = null;\n    var yDown = null;\n    var xDiff = null;\n    var yDiff = null;\n    var timeDown = null;\n    var startEl = null;\n\n    function handleTouchEnd(e) {\n\n        // if the user released on a different target, cancel!\n        if (startEl !== e.target) return;\n\n        var swipeThreshold = parseInt(startEl.getAttribute('data-swipe-threshold') || '20', 10);    // default 10px\n        var swipeTimeout = parseInt(startEl.getAttribute('data-swipe-timeout') || '500', 10);      // default 1000ms\n        var timeDiff = Date.now() - timeDown;\n        var eventType = '';\n\n        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant\n            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {\n                if (xDiff > 0) {\n                    eventType = 'swiped-left';\n                }\n                else {\n                    eventType = 'swiped-right';\n                }\n            }\n        }\n        else {\n            if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {\n                if (yDiff > 0) {\n                    eventType = 'swiped-up';\n                }\n                else {\n                    eventType = 'swiped-down';\n                }\n            }\n        }\n\n        if (eventType !== '') {\n\n            // fire event on the element that started the swipe\n            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true }));\n\n            // if (console && console.log) console.log(eventType + ' fired on ' + startEl.tagName);\n        }\n\n        // reset values\n        xDown = null;\n        yDown = null;\n        timeDown = null;\n    }\n\n    function handleTouchStart(e) {\n\n        // if the element has data-swipe-ignore=\"true\" we stop listening for swipe events\n        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;\n\n        startEl = e.target;\n\n        timeDown = Date.now();\n        xDown = e.touches[0].clientX;\n        yDown = e.touches[0].clientY;\n        xDiff = 0;\n        yDiff = 0;\n    }\n\n    function handleTouchMove(e) {\n\n        if (!xDown || !yDown) return;\n\n        var xUp = e.touches[0].clientX;\n        var yUp = e.touches[0].clientY;\n\n        xDiff = xDown - xUp;\n        yDiff = yDown - yUp;\n    }\n\n}(window, document));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcHVyZS1zd2lwZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9wdXJlLXN3aXBlLmpzPzRhYmMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBwdXJlLXN3aXBlLmpzIC0gdkB2ZXJzaW9uQFxuICogUHVyZSBKYXZhU2NyaXB0IHN3aXBlIGV2ZW50c1xuICogaHR0cHM6Ly9naXRodWIuY29tL2pvaG4tZG9oZXJ0eS9wdXJlLXN3aXBlXG4gKiBAaW5zcGlyYXRpb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTYzNDgwMzEvZGlzYWJsZS1zY3JvbGxpbmctd2hlbi10b3VjaC1tb3ZpbmctY2VydGFpbi1lbGVtZW50XG4gKiBAYXV0aG9yIEpvaG4gRG9oZXJ0eSA8d3d3LmpvaG5kb2hlcnR5LmluZm8+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50KSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLyBwYXRjaCBDdXN0b21FdmVudCB0byBhbGxvdyBjb25zdHJ1Y3RvciBjcmVhdGlvbiAoSUUvQ2hyb21lKSAtIHJlc29sdmVkIG9uY2UgaW5pdEN1c3RvbUV2ZW50IG5vIGxvbmdlciBleGlzdHNcbiAgICBpZiAoJ2luaXRDdXN0b21FdmVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JykpIHtcblxuICAgICAgICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIHBhcmFtcykge1xuXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XG5cbiAgICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5DdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCwgZmFsc2UpO1xuXG4gICAgdmFyIHhEb3duID0gbnVsbDtcbiAgICB2YXIgeURvd24gPSBudWxsO1xuICAgIHZhciB4RGlmZiA9IG51bGw7XG4gICAgdmFyIHlEaWZmID0gbnVsbDtcbiAgICB2YXIgdGltZURvd24gPSBudWxsO1xuICAgIHZhciBzdGFydEVsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGUpIHtcblxuICAgICAgICAvLyBpZiB0aGUgdXNlciByZWxlYXNlZCBvbiBhIGRpZmZlcmVudCB0YXJnZXQsIGNhbmNlbCFcbiAgICAgICAgaWYgKHN0YXJ0RWwgIT09IGUudGFyZ2V0KSByZXR1cm47XG5cbiAgICAgICAgdmFyIHN3aXBlVGhyZXNob2xkID0gcGFyc2VJbnQoc3RhcnRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGUtdGhyZXNob2xkJykgfHwgJzIwJywgMTApOyAgICAvLyBkZWZhdWx0IDEwcHhcbiAgICAgICAgdmFyIHN3aXBlVGltZW91dCA9IHBhcnNlSW50KHN0YXJ0RWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlLXRpbWVvdXQnKSB8fCAnNTAwJywgMTApOyAgICAgIC8vIGRlZmF1bHQgMTAwMG1zXG4gICAgICAgIHZhciB0aW1lRGlmZiA9IERhdGUubm93KCkgLSB0aW1lRG93bjtcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9ICcnO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyh4RGlmZikgPiBNYXRoLmFicyh5RGlmZikpIHsgLy8gbW9zdCBzaWduaWZpY2FudFxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHhEaWZmKSA+IHN3aXBlVGhyZXNob2xkICYmIHRpbWVEaWZmIDwgc3dpcGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGUgPSAnc3dpcGVkLWxlZnQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlID0gJ3N3aXBlZC1yaWdodCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHlEaWZmKSA+IHN3aXBlVGhyZXNob2xkICYmIHRpbWVEaWZmIDwgc3dpcGVUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHlEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGUgPSAnc3dpcGVkLXVwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZSA9ICdzd2lwZWQtZG93bic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50VHlwZSAhPT0gJycpIHtcblxuICAgICAgICAgICAgLy8gZmlyZSBldmVudCBvbiB0aGUgZWxlbWVudCB0aGF0IHN0YXJ0ZWQgdGhlIHN3aXBlXG4gICAgICAgICAgICBzdGFydEVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50VHlwZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pKTtcblxuICAgICAgICAgICAgLy8gaWYgKGNvbnNvbGUgJiYgY29uc29sZS5sb2cpIGNvbnNvbGUubG9nKGV2ZW50VHlwZSArICcgZmlyZWQgb24gJyArIHN0YXJ0RWwudGFnTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCB2YWx1ZXNcbiAgICAgICAgeERvd24gPSBudWxsO1xuICAgICAgICB5RG93biA9IG51bGw7XG4gICAgICAgIHRpbWVEb3duID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcblxuICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXMgZGF0YS1zd2lwZS1pZ25vcmU9XCJ0cnVlXCIgd2Ugc3RvcCBsaXN0ZW5pbmcgZm9yIHN3aXBlIGV2ZW50c1xuICAgICAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlLWlnbm9yZScpID09PSAndHJ1ZScpIHJldHVybjtcblxuICAgICAgICBzdGFydEVsID0gZS50YXJnZXQ7XG5cbiAgICAgICAgdGltZURvd24gPSBEYXRlLm5vdygpO1xuICAgICAgICB4RG93biA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB5RG93biA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICB4RGlmZiA9IDA7XG4gICAgICAgIHlEaWZmID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xuXG4gICAgICAgIGlmICgheERvd24gfHwgIXlEb3duKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHhVcCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB2YXIgeVVwID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG5cbiAgICAgICAgeERpZmYgPSB4RG93biAtIHhVcDtcbiAgICAgICAgeURpZmYgPSB5RG93biAtIHlVcDtcbiAgICB9XG5cbn0od2luZG93LCBkb2N1bWVudCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/pure-swipe.js\n");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvbWFpbi5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvbWFpbi5jc3M/YTE1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/style/main.css\n");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/pure-swipe.js ./src/js/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/pure-swipe.js */"./src/js/pure-swipe.js");
module.exports = __webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");


/***/ })

/******/ });