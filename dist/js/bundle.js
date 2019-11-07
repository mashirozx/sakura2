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

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root_.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root_.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/*! exports provided: applyPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) { globalObj = window; }
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () { return undefined; }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                },
            });
        }
        catch (e) {
        } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/*! exports provided: closest, matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/component.js ***!
  \************************************************************/
/*! exports provided: MDCFloatingLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function() { return MDCFloatingLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/floating-label/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabel, _super);
    function MDCFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel.attachTo = function (root) {
        return new MDCFloatingLabel(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */
    MDCFloatingLabel.prototype.shake = function (shouldShake) {
        this.foundation_.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MDCFloatingLabel.prototype.float = function (shouldFloat) {
        this.foundation_.float(shouldFloat);
    };
    MDCFloatingLabel.prototype.getWidth = function () {
        return this.foundation_.getWidth();
    };
    MDCFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            getWidth: function () { return _this.root_.scrollWidth; },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"](adapter);
    };
    return MDCFloatingLabel;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/constants.js ***!
  \************************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/floating-label/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/floating-label/foundation.js ***!
  \*************************************************************/
/*! exports provided: MDCFloatingLabelFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function() { return MDCFloatingLabelFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/floating-label/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter_.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter_.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter_.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter_.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFloatingLabelFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/component.js ***!
  \*********************************************************/
/*! exports provided: MDCLineRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRipple", function() { return MDCLineRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/line-ripple/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRipple = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRipple, _super);
    function MDCLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple.attachTo = function (root) {
        return new MDCLineRipple(root);
    };
    /**
     * Activates the line ripple
     */
    MDCLineRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MDCLineRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        this.foundation_.setRippleCenter(xCoordinate);
    };
    MDCLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setStyle: function (propertyName, value) { return _this.root_.style.setProperty(propertyName, value); },
            registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLineRippleFoundation"](adapter);
    };
    return MDCLineRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/constants.js ***!
  \*********************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/line-ripple/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/line-ripple/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCLineRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function() { return MDCLineRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/line-ripple/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRippleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
        _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
                this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCLineRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/component.js ***!
  \*************************************************************/
/*! exports provided: MDCNotchedOutline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function() { return MDCNotchedOutline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/floating-label/foundation */ "./node_modules/@material/floating-label/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/notched-outline/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCNotchedOutline = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutline, _super);
    function MDCNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline.attachTo = function (root) {
        return new MDCNotchedOutline(root);
    };
    MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
        this.notchElement_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NOTCH_ELEMENT_SELECTOR);
        var label = this.root_.querySelector('.' + _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"].cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label.style.transitionDuration = '';
            });
        }
        else {
            this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].NO_LABEL);
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MDCNotchedOutline.prototype.notch = function (notchWidth) {
        this.foundation_.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MDCNotchedOutline.prototype.closeNotch = function () {
        this.foundation_.closeNotch();
    };
    MDCNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setNotchWidthProperty: function (width) { return _this.notchElement_.style.setProperty('width', width + 'px'); },
            removeNotchWidthProperty: function () { return _this.notchElement_.style.removeProperty('width'); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCNotchedOutlineFoundation"](adapter);
    };
    return MDCNotchedOutline;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/constants.js ***!
  \*************************************************************/
/*! exports provided: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/notched-outline/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/notched-outline/foundation.js ***!
  \**************************************************************/
/*! exports provided: MDCNotchedOutlineFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function() { return MDCNotchedOutlineFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter_.setNotchWidthProperty(notchWidth);
        this.adapter_.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter_.removeClass(OUTLINE_NOTCHED);
        this.adapter_.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCNotchedOutlineFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCRipple = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = { isUnbounded: undefined }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root_.classList.add(className); },
            browserSupportsCssVars: function () { return _util__WEBPACK_IMPORTED_MODULE_5__["supportsCssVariables"](window); },
            computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root_.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            isSurfaceActive: function () { return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(instance.root_, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            removeClass: function (className) { return instance.root_.classList.remove(className); },
            updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        }
        else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/ripple/index.js ***!
  \************************************************/
/*! exports provided: util, MDCRipple, cssClasses, strings, numbers, MDCRippleFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/ripple/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCRipple"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCRippleFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/*! exports provided: supportsCssVariables, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    // Append to head instead of body because this script might be invoked in the
    // head, in which case the body doesn't exist yet. The probe works either way.
    document.head.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    }
    else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/component.js ***!
  \*************************************************************************/
/*! exports provided: MDCTextFieldCharacterCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return MDCTextFieldCharacterCounter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounter, _super);
    function MDCTextFieldCharacterCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldCharacterCounter.attachTo = function (root) {
        return new MDCTextFieldCharacterCounter(root);
    };
    Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldCharacterCounterFoundation"](adapter);
    };
    return MDCTextFieldCharacterCounter;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/constants.js ***!
  \*************************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ROOT: 'mdc-text-field-character-counter',
};
var strings = {
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/foundation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/foundation.js ***!
  \**************************************************************************/
/*! exports provided: MDCTextFieldCharacterCounterFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return MDCTextFieldCharacterCounterFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounterFoundation, _super);
    function MDCTextFieldCharacterCounterFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */
        get: function () {
            return {
                setContent: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter_.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldCharacterCounterFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/index.js ***!
  \*********************************************************************/
/*! exports provided: characterCountCssClasses, characterCountStrings, MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldCharacterCounter"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/component.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/component.js ***!
  \*******************************************************/
/*! exports provided: MDCTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return MDCTextField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_floating_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/floating-label/component */ "./node_modules/@material/floating-label/component.js");
/* harmony import */ var _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/line-ripple/component */ "./node_modules/@material/line-ripple/component.js");
/* harmony import */ var _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/notched-outline/component */ "./node_modules/@material/notched-outline/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _character_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./character-counter/component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony import */ var _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-counter/foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony import */ var _helper_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper-text/component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony import */ var _helper_text_foundation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper-text/foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon/component */ "./node_modules/@material/textfield/icon/component.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
















var MDCTextField = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextField, _super);
    function MDCTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextField.attachTo = function (root) {
        return new MDCTextField(root);
    };
    MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__["MDCRipple"](el, foundation); }; }
        if (lineRippleFactory === void 0) { lineRippleFactory = function (el) { return new _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCLineRipple"](el); }; }
        if (helperTextFactory === void 0) { helperTextFactory = function (el) { return new _helper_text_component__WEBPACK_IMPORTED_MODULE_13__["MDCTextFieldHelperText"](el); }; }
        if (characterCounterFactory === void 0) { characterCounterFactory = function (el) { return new _character_counter_component__WEBPACK_IMPORTED_MODULE_9__["MDCTextFieldCharacterCounter"](el); }; }
        if (iconFactory === void 0) { iconFactory = function (el) { return new _icon_component__WEBPACK_IMPORTED_MODULE_15__["MDCTextFieldIcon"](el); }; }
        if (labelFactory === void 0) { labelFactory = function (el) { return new _material_floating_label_component__WEBPACK_IMPORTED_MODULE_4__["MDCFloatingLabel"](el); }; }
        if (outlineFactory === void 0) { outlineFactory = function (el) { return new _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_6__["MDCNotchedOutline"](el); }; }
        this.input_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].INPUT_SELECTOR);
        var labelElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LABEL_SELECTOR);
        this.label_ = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LINE_RIPPLE_SELECTOR);
        this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].OUTLINE_SELECTOR);
        this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
        // Helper text
        var helperTextStrings = _helper_text_foundation__WEBPACK_IMPORTED_MODULE_14__["MDCTextFieldHelperTextFoundation"].strings;
        var nextElementSibling = this.root_.nextElementSibling;
        var hasHelperLine = (nextElementSibling && nextElementSibling.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].HELPER_LINE));
        var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
        this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null;
        // Character counter
        var characterCounterStrings = _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__["MDCTextFieldCharacterCounterFoundation"].strings;
        var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR);
        // If character counter is not found in root element search in sibling element.
        if (!characterCounterEl && hasHelperLine && nextElementSibling) {
            characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
        }
        this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
        this.leadingIcon_ = null;
        this.trailingIcon_ = null;
        var iconElements = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].ICON_SELECTOR);
        if (iconElements.length > 0) {
            if (iconElements.length > 1) { // Has both icons.
                this.leadingIcon_ = iconFactory(iconElements[0]);
                this.trailingIcon_ = iconFactory(iconElements[1]);
            }
            else {
                if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].WITH_LEADING_ICON)) {
                    this.leadingIcon_ = iconFactory(iconElements[0]);
                }
                else {
                    this.trailingIcon_ = iconFactory(iconElements[0]);
                }
            }
        }
        this.ripple = this.createRipple_(rippleFactory);
    };
    MDCTextField.prototype.destroy = function () {
        if (this.ripple) {
            this.ripple.destroy();
        }
        if (this.lineRipple_) {
            this.lineRipple_.destroy();
        }
        if (this.helperText_) {
            this.helperText_.destroy();
        }
        if (this.characterCounter_) {
            this.characterCounter_.destroy();
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.destroy();
        }
        if (this.trailingIcon_) {
            this.trailingIcon_.destroy();
        }
        if (this.label_) {
            this.label_.destroy();
        }
        if (this.outline_) {
            this.outline_.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Initializes the Text Field's internal state based on the environment's
     * state.
     */
    MDCTextField.prototype.initialSyncWithDOM = function () {
        this.disabled = this.input_.disabled;
    };
    Object.defineProperty(MDCTextField.prototype, "value", {
        get: function () {
            return this.foundation_.getValue();
        },
        /**
         * @param value The value to set on the input.
         */
        set: function (value) {
            this.foundation_.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "disabled", {
        get: function () {
            return this.foundation_.isDisabled();
        },
        /**
         * @param disabled Sets the Text Field disabled or enabled.
         */
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "valid", {
        get: function () {
            return this.foundation_.isValid();
        },
        /**
         * @param valid Sets the Text Field valid or invalid.
         */
        set: function (valid) {
            this.foundation_.setValid(valid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "required", {
        get: function () {
            return this.input_.required;
        },
        /**
         * @param required Sets the Text Field to required.
         */
        set: function (required) {
            this.input_.required = required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "pattern", {
        get: function () {
            return this.input_.pattern;
        },
        /**
         * @param pattern Sets the input element's validation pattern.
         */
        set: function (pattern) {
            this.input_.pattern = pattern;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "minLength", {
        get: function () {
            return this.input_.minLength;
        },
        /**
         * @param minLength Sets the input element's minLength.
         */
        set: function (minLength) {
            this.input_.minLength = minLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "maxLength", {
        get: function () {
            return this.input_.maxLength;
        },
        /**
         * @param maxLength Sets the input element's maxLength.
         */
        set: function (maxLength) {
            // Chrome throws exception if maxLength is set to a value less than zero
            if (maxLength < 0) {
                this.input_.removeAttribute('maxLength');
            }
            else {
                this.input_.maxLength = maxLength;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "min", {
        get: function () {
            return this.input_.min;
        },
        /**
         * @param min Sets the input element's min.
         */
        set: function (min) {
            this.input_.min = min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "max", {
        get: function () {
            return this.input_.max;
        },
        /**
         * @param max Sets the input element's max.
         */
        set: function (max) {
            this.input_.max = max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "step", {
        get: function () {
            return this.input_.step;
        },
        /**
         * @param step Sets the input element's step.
         */
        set: function (step) {
            this.input_.step = step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
        /**
         * Sets the helper text element content.
         */
        set: function (content) {
            this.foundation_.setHelperTextContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
        /**
         * Sets the aria label of the leading icon.
         */
        set: function (label) {
            this.foundation_.setLeadingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function (content) {
            this.foundation_.setLeadingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
        /**
         * Sets the aria label of the trailing icon.
         */
        set: function (label) {
            this.foundation_.setTrailingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
        /**
         * Sets the text content of the trailing icon.
         */
        set: function (content) {
            this.foundation_.setTrailingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
        /**
         * Enables or disables the use of native validation. Use this for custom validation.
         * @param useNativeValidation Set this to false to ignore native input validation.
         */
        set: function (useNativeValidation) {
            this.foundation_.setUseNativeValidation(useNativeValidation);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Focuses the input element.
     */
    MDCTextField.prototype.focus = function () {
        this.input_.focus();
    };
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    MDCTextField.prototype.layout = function () {
        var openNotch = this.foundation_.shouldFloat;
        this.foundation_.notchOutline(openNotch);
    };
    MDCTextField.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_());
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_12__["MDCTextFieldFoundation"](adapter, this.getFoundationMap_());
    };
    MDCTextField.prototype.getRootAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            registerTextFieldInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterTextFieldInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            registerValidationAttributeChangeHandler: function (handler) {
                var getAttributesList = function (mutationsList) {
                    return mutationsList
                        .map(function (mutation) { return mutation.attributeName; })
                        .filter(function (attributeName) { return attributeName; });
                };
                var observer = new MutationObserver(function (mutationsList) { return handler(getAttributesList(mutationsList)); });
                var config = { attributes: true };
                observer.observe(_this.input_, config);
                return observer;
            },
            deregisterValidationAttributeChangeHandler: function (observer) { return observer.disconnect(); },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getInputAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getNativeInput: function () { return _this.input_; },
            isFocused: function () { return document.activeElement === _this.input_; },
            registerInputInteractionHandler: function (evtType, handler) {
                return _this.input_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
            deregisterInputInteractionHandler: function (evtType, handler) {
                return _this.input_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getLabelAdapterMethods_ = function () {
        var _this = this;
        return {
            floatLabel: function (shouldFloat) { return _this.label_ && _this.label_.float(shouldFloat); },
            getLabelWidth: function () { return _this.label_ ? _this.label_.getWidth() : 0; },
            hasLabel: function () { return Boolean(_this.label_); },
            shakeLabel: function (shouldShake) { return _this.label_ && _this.label_.shake(shouldShake); },
        };
    };
    MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
        var _this = this;
        return {
            activateLineRipple: function () {
                if (_this.lineRipple_) {
                    _this.lineRipple_.activate();
                }
            },
            deactivateLineRipple: function () {
                if (_this.lineRipple_) {
                    _this.lineRipple_.deactivate();
                }
            },
            setLineRippleTransformOrigin: function (normalizedX) {
                if (_this.lineRipple_) {
                    _this.lineRipple_.setRippleCenter(normalizedX);
                }
            },
        };
    };
    MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
        var _this = this;
        return {
            closeOutline: function () { return _this.outline_ && _this.outline_.closeNotch(); },
            hasOutline: function () { return Boolean(_this.outline_); },
            notchOutline: function (labelWidth) { return _this.outline_ && _this.outline_.notch(labelWidth); },
        };
    };
    /**
     * @return A map of all subcomponents to subfoundations.
     */
    MDCTextField.prototype.getFoundationMap_ = function () {
        return {
            characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
            helperText: this.helperText_ ? this.helperText_.foundation : undefined,
            leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
            trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined,
        };
    };
    MDCTextField.prototype.createRipple_ = function (rippleFactory) {
        var _this = this;
        var isTextArea = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].TEXTAREA);
        var isOutlined = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].OUTLINED);
        if (isTextArea || isOutlined) {
            return null;
        }
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__["MDCRipple"].createAdapter(this), { isSurfaceActive: function () { return _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"](_this.input_, ':active'); }, registerInteractionHandler: function (evtType, handler) { return _this.input_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])()); }, deregisterInteractionHandler: function (evtType, handler) {
                return _this.input_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
            } });
        // tslint:enable:object-literal-sort-keys
        return rippleFactory(this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_8__["MDCRippleFoundation"](adapter));
    };
    return MDCTextField;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/constants.js ***!
  \*******************************************************/
/*! exports provided: cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function() { return VALIDATION_ATTR_WHITELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function() { return ALWAYS_FLOAT_TYPES; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ICON_SELECTOR: '.mdc-text-field__icon',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
};
var cssClasses = {
    DENSE: 'mdc-text-field--dense',
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    FULLWIDTH: 'mdc-text-field--fullwidth',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    NO_LABEL: 'mdc-text-field--no-label',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
    WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon',
};
var numbers = {
    DENSE_LABEL_SCALE: 0.923,
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color', 'date', 'datetime-local', 'month', 'range', 'time', 'week',
];

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/foundation.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/foundation.js ***!
  \********************************************************/
/*! exports provided: MDCTextFieldFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return MDCTextFieldFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;
        _this.isFocused_ = false;
        _this.receivedUserInput_ = false;
        _this.isValid_ = true;
        _this.useNativeValidation_ = true;
        _this.helperText_ = foundationMap.helperText;
        _this.characterCounter_ = foundationMap.characterCounter;
        _this.leadingIcon_ = foundationMap.leadingIcon;
        _this.trailingIcon_ = foundationMap.trailingIcon;
        _this.inputFocusHandler_ = function () { return _this.activateFocus(); };
        _this.inputBlurHandler_ = function () { return _this.deactivateFocus(); };
        _this.inputInputHandler_ = function () { return _this.handleInput(); };
        _this.setPointerXOffset_ = function (evt) { return _this.setTransformOrigin(evt); };
        _this.textFieldInteractionHandler_ = function () { return _this.handleTextFieldInteraction(); };
        _this.validationAttributeChangeHandler_ = function (attributesList) { return _this.handleValidationAttributeChange(attributesList); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
        get: function () {
            var type = this.getNativeInput_().type;
            return _constants__WEBPACK_IMPORTED_MODULE_2__["ALWAYS_FLOAT_TYPES"].indexOf(type) >= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat_ || this.isFocused_ || Boolean(this.getValue()) || this.isBadInput_();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused_ && !this.isValid() && Boolean(this.getValue());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () { return new MutationObserver(function () { return undefined; }); },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var _this = this;
        if (this.adapter_.isFocused()) {
            this.inputFocusHandler_();
        }
        else if (this.adapter_.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter_.floatLabel(true);
        }
        this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.validationObserver_ =
            this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
        this.setCharacterCounter_(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var _this = this;
        this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter_.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput_ = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (_constants__WEBPACK_IMPORTED_MODULE_2__["VALIDATION_ATTR_WHITELIST"].indexOf(attributeName) > -1) {
                _this.styleValidity_(true);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setCharacterCounter_(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter_.hasOutline()) {
            return;
        }
        if (openNotch) {
            var isDense = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DENSE);
            var labelScale = isDense ? _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DENSE_LABEL_SCALE : _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
        }
        else {
            this.adapter_.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused_ = true;
        this.styleFocused_(this.isFocused_);
        this.adapter_.activateLineRipple();
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
        if (this.helperText_) {
            this.helperText_.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter_.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setCharacterCounter_(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput_) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused_ = false;
        this.adapter_.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        this.styleFocused_(this.isFocused_);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput_ = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput_().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput_().value = value;
        }
        this.setCharacterCounter_(value.length);
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation_
            ? this.isNativeInputValid_() : this.isValid_;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.isValid_ = isValid;
        this.styleValidity_(isValid);
        var shouldShake = !isValid && !this.isFocused_;
        if (this.adapter_.hasLabel()) {
            this.adapter_.shakeLabel(shouldShake);
        }
    };
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation_ = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput_().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput_().disabled = disabled;
        this.styleDisabled_(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText_) {
            this.helperText_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total character limit.
     */
    MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
        if (!this.characterCounter_) {
            return;
        }
        var maxLength = this.getNativeInput_().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter_.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied value.
     */
    MDCTextFieldFoundation.prototype.isBadInput_ = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput_().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
        return this.getNativeInput_().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter_.removeClass(INVALID);
        }
        else {
            this.adapter_.addClass(INVALID);
        }
        if (this.helperText_) {
            this.helperText_.setValidity(isValid);
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter_.addClass(FOCUSED);
        }
        else {
            this.adapter_.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter_.addClass(DISABLED);
            this.adapter_.removeClass(INVALID);
        }
        else {
            this.adapter_.removeClass(DISABLED);
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.setDisabled(isDisabled);
        }
        if (this.trailingIcon_) {
            this.trailingIcon_.setDisabled(isDisabled);
        }
    };
    /**
     * @return The native text input element from the host environment, or an object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
        // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
        // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
        // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/component.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/component.js ***!
  \*******************************************************************/
/*! exports provided: MDCTextFieldHelperText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return MDCTextFieldHelperText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperText = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperText, _super);
    function MDCTextFieldHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText.attachTo = function (root) {
        return new MDCTextFieldHelperText(root);
    };
    Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldHelperTextFoundation"](adapter);
    };
    return MDCTextFieldHelperText;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/constants.js ***!
  \*******************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
    ROOT: 'mdc-text-field-helper-text',
};
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/foundation.js ***!
  \********************************************************************/
/*! exports provided: MDCTextFieldHelperTextFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return MDCTextFieldHelperTextFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperTextFoundation, _super);
    function MDCTextFieldHelperTextFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the content of the helper text field.
     */
    MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */
    MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to the screen reader.
     */
    MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE, 'alert');
        }
        else {
            this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide_();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
        this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN, 'true');
    };
    return MDCTextFieldHelperTextFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldHelperTextFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/index.js ***!
  \***************************************************************/
/*! exports provided: helperTextCssClasses, helperTextStrings, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldHelperText"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldHelperTextFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/component.js ***!
  \************************************************************/
/*! exports provided: MDCTextFieldIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return MDCTextFieldIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldIcon = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIcon, _super);
    function MDCTextFieldIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon.attachTo = function (root) {
        return new MDCTextFieldIcon(root);
    };
    Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root_.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"](adapter);
    };
    return MDCTextFieldIcon;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/constants.js ***!
  \************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button',
};
var cssClasses = {
    ROOT: 'mdc-text-field__icon',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/foundation.js ***!
  \*************************************************************/
/*! exports provided: MDCTextFieldIconFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return MDCTextFieldIconFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldIconFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIconFoundation, _super);
    function MDCTextFieldIconFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.destroy = function () {
        var _this = this;
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter_.setAttr('tabindex', '-1');
            this.adapter_.removeAttr('role');
        }
        else {
            this.adapter_.setAttr('tabindex', this.savedTabIndex_);
            this.adapter_.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter_.setAttr('aria-label', label);
    };
    MDCTextFieldIconFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter_.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldIconFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/icon/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/icon/index.js ***!
  \********************************************************/
/*! exports provided: iconCssClasses, iconStrings, MDCTextFieldIcon, MDCTextFieldIconFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/icon/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldIcon"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldIconFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/textfield/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/textfield/index.js ***!
  \***************************************************/
/*! exports provided: MDCTextField, cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES, MDCTextFieldFoundation, characterCountCssClasses, characterCountStrings, helperTextCssClasses, helperTextStrings, iconCssClasses, iconStrings, MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, MDCTextFieldIcon, MDCTextFieldIconFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextField"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["VALIDATION_ATTR_WHITELIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["ALWAYS_FLOAT_TYPES"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldFoundation"]; });

/* harmony import */ var _character_counter_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-counter/index */ "./node_modules/@material/textfield/character-counter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/@material/textfield/helper-text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperTextFoundation"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/index */ "./node_modules/@material/textfield/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIconFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/component.js ***!
  \*********************************************************/
/*! exports provided: MDCTopAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBar", function() { return MDCTopAppBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _fixed_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixed/foundation */ "./node_modules/@material/top-app-bar/fixed/foundation.js");
/* harmony import */ var _short_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./short/foundation */ "./node_modules/@material/top-app-bar/short/foundation.js");
/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCTopAppBar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBar, _super);
    function MDCTopAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar.attachTo = function (root) {
        return new MDCTopAppBar(root);
    };
    MDCTopAppBar.prototype.initialize = function (rippleFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el) { return _material_ripple_component__WEBPACK_IMPORTED_MODULE_2__["MDCRipple"].attachTo(el); }; }
        this.navIcon_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_ITEM_SELECTOR));
        if (this.navIcon_) {
            icons.push(this.navIcon_);
        }
        this.iconRipples_ = icons.map(function (icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget_ = window;
    };
    MDCTopAppBar.prototype.initialSyncWithDOM = function () {
        this.handleNavigationClick_ = this.foundation_.handleNavigationClick.bind(this.foundation_);
        this.handleWindowResize_ = this.foundation_.handleWindowResize.bind(this.foundation_);
        this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
        this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
        if (this.navIcon_) {
            this.navIcon_.addEventListener('click', this.handleNavigationClick_);
        }
        var isFixed = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS);
        var isShort = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.addEventListener('resize', this.handleWindowResize_);
        }
    };
    MDCTopAppBar.prototype.destroy = function () {
        this.iconRipples_.forEach(function (iconRipple) { return iconRipple.destroy(); });
        this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
        if (this.navIcon_) {
            this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
        }
        var isFixed = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS);
        var isShort = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.removeEventListener('resize', this.handleWindowResize_);
        }
        _super.prototype.destroy.call(this);
    };
    MDCTopAppBar.prototype.setScrollTarget = function (target) {
        // Remove scroll handler from the previous scroll target
        this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
        this.scrollTarget_ = target;
        // Initialize scroll handler on the new scroll target
        this.handleTargetScroll_ =
            this.foundation_.handleTargetScroll.bind(this.foundation_);
        this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
    };
    MDCTopAppBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setStyle: function (property, value) { return _this.root_.style.setProperty(property, value); },
            getTopAppBarHeight: function () { return _this.root_.clientHeight; },
            notifyNavigationIconClicked: function () { return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NAVIGATION_EVENT, {}); },
            getViewportScrollY: function () {
                var win = _this.scrollTarget_;
                var el = _this.scrollTarget_;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function () { return _this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_ITEM_SELECTOR).length; },
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SHORT_CLASS)) {
            foundation = new _short_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCShortTopAppBarFoundation"](adapter);
        }
        else if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FIXED_CLASS)) {
            foundation = new _fixed_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCFixedTopAppBarFoundation"](adapter);
        }
        else {
            foundation = new _standard_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCTopAppBarFoundation"](adapter);
        }
        return foundation;
    };
    return MDCTopAppBar;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/constants.js ***!
  \*********************************************************/
/*! exports provided: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
};
var numbers = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128,
};
var strings = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/fixed/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/fixed/foundation.js ***!
  \****************************************************************/
/*! exports provided: MDCFixedTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFixedTopAppBarFoundation", function() { return MDCFixedTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFixedTopAppBarFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFixedTopAppBarFoundation, _super);
    function MDCFixedTopAppBarFoundation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */
        _this.wasScrolled_ = false;
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     * @override
     */
    MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled_) {
                this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = false;
            }
        }
        else {
            if (!this.wasScrolled_) {
                this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = true;
            }
        }
    };
    return MDCFixedTopAppBarFoundation;
}(_standard_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFixedTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCTopAppBarBaseFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarBaseFoundation", function() { return MDCTopAppBarBaseFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBarBaseFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarBaseFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                getTopAppBarHeight: function () { return 0; },
                notifyNavigationIconClicked: function () { return undefined; },
                getViewportScrollY: function () { return 0; },
                getTotalActionItems: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () { }; // tslint:disable-line:no-empty
    /** Other variants of TopAppBar foundation overrides this method */
    MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () { }; // tslint:disable-line:no-empty
    MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
        this.adapter_.notifyNavigationIconClicked();
    };
    return MDCTopAppBarBaseFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTopAppBarBaseFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/top-app-bar/index.js ***!
  \*****************************************************/
/*! exports provided: MDCTopAppBar, cssClasses, numbers, strings, MDCTopAppBarBaseFoundation, MDCFixedTopAppBarFoundation, MDCShortTopAppBarFoundation, MDCTopAppBarFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/top-app-bar/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBar", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTopAppBar"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarBaseFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]; });

/* harmony import */ var _fixed_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixed/foundation */ "./node_modules/@material/top-app-bar/fixed/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCFixedTopAppBarFoundation", function() { return _fixed_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCFixedTopAppBarFoundation"]; });

/* harmony import */ var _short_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short/foundation */ "./node_modules/@material/top-app-bar/short/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCShortTopAppBarFoundation", function() { return _short_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCShortTopAppBarFoundation"]; });

/* harmony import */ var _standard_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarFoundation", function() { return _standard_foundation__WEBPACK_IMPORTED_MODULE_5__["MDCTopAppBarFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/short/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/short/foundation.js ***!
  \****************************************************************/
/*! exports provided: MDCShortTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCShortTopAppBarFoundation", function() { return MDCShortTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.isCollapsed_ = false;
        _this.isAlwaysCollapsed_ = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function () {
            return this.isCollapsed_;
        },
        enumerable: true,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.adapter_.getTotalActionItems() > 0) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_HAS_ACTION_ITEM_CLASS);
        }
        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
        this.setAlwaysCollapsed(this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS));
    };
    /**
     * Set if the short top app bar should always be collapsed.
     *
     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
     */
    MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
        this.isAlwaysCollapsed_ = !!value;
        if (this.isAlwaysCollapsed_) {
            this.collapse_();
        }
        else {
            // let maybeCollapseBar_ determine if the bar should be collapsed
            this.maybeCollapseBar_();
        }
    };
    MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
        return this.isAlwaysCollapsed_;
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     * @override
     */
    MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
        this.maybeCollapseBar_();
    };
    MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
        if (this.isAlwaysCollapsed_) {
            return;
        }
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.isCollapsed_) {
                this.uncollapse_();
            }
        }
        else {
            if (!this.isCollapsed_) {
                this.collapse_();
            }
        }
    };
    MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS);
        this.isCollapsed_ = false;
    };
    MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"].SHORT_COLLAPSED_CLASS);
        this.isCollapsed_ = true;
    };
    return MDCShortTopAppBarFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCShortTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/top-app-bar/standard/foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/standard/foundation.js ***!
  \*******************************************************************/
/*! exports provided: MDCTopAppBarFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarFoundation", function() { return MDCTopAppBarFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function MDCTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * Indicates if the top app bar was docked in the previous scroll handler iteration.
         */
        _this.wasDocked_ = true;
        /**
         * Indicates if the top app bar is docked in the fully shown position.
         */
        _this.isDockedShowing_ = true;
        /**
         * Variable for current scroll position of the top app bar
         */
        _this.currentAppBarOffsetTop_ = 0;
        /**
         * Used to prevent the top app bar from being scrolled out of view during resize events
         */
        _this.isCurrentlyBeingResized_ = false;
        /**
         * The timeout that's used to throttle the resize events
         */
        _this.resizeThrottleId_ = INITIAL_VALUE;
        /**
         * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
         */
        _this.resizeDebounceId_ = INITIAL_VALUE;
        _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
        _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
        return _this;
    }
    MDCTopAppBarFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.adapter_.setStyle('top', '');
    };
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @override
     */
    MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
        var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition_;
        this.lastScrollPosition_ = currentScrollPosition;
        // If the window is being resized the lastScrollPosition_ needs to be updated but the
        // current scroll of the top app bar should stay in the same position.
        if (!this.isCurrentlyBeingResized_) {
            this.currentAppBarOffsetTop_ -= diff;
            if (this.currentAppBarOffsetTop_ > 0) {
                this.currentAppBarOffsetTop_ = 0;
            }
            else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
            }
            this.moveTopAppBar_();
        }
    };
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @override
     */
    MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
        var _this = this;
        // Throttle resize events 10 p/s
        if (!this.resizeThrottleId_) {
            this.resizeThrottleId_ = setTimeout(function () {
                _this.resizeThrottleId_ = INITIAL_VALUE;
                _this.throttledResizeHandler_();
            }, _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        }
        this.isCurrentlyBeingResized_ = true;
        if (this.resizeDebounceId_) {
            clearTimeout(this.resizeDebounceId_);
        }
        this.resizeDebounceId_ = setTimeout(function () {
            _this.handleTargetScroll();
            _this.isCurrentlyBeingResized_ = false;
            _this.resizeDebounceId_ = INITIAL_VALUE;
        }, _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    /**
     * Function to determine if the DOM needs to update.
     */
    MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
        var offscreenBoundaryTop = -this.topAppBarHeight_;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        // If it's partially showing, it can't be docked.
        if (partiallyShowing) {
            this.wasDocked_ = false;
        }
        else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked_) {
                this.wasDocked_ = true;
                return true;
            }
            else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                this.isDockedShowing_ = hasAnyPixelsOnscreen;
                return true;
            }
        }
        return partiallyShowing;
    };
    /**
     * Function to move the top app bar if needed.
     */
    MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
        if (this.checkForUpdate_()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop_;
            if (Math.abs(offset) >= this.topAppBarHeight_) {
                offset = -_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].MAX_TOP_APP_BAR_HEIGHT;
            }
            this.adapter_.setStyle('top', offset + 'px');
        }
    };
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */
    MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
        var currentHeight = this.adapter_.getTopAppBarHeight();
        if (this.topAppBarHeight_ !== currentHeight) {
            this.wasDocked_ = false;
            // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.
            this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
            this.topAppBarHeight_ = currentHeight;
        }
        this.handleTargetScroll();
    };
    return MDCTopAppBarFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBarBaseFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCTopAppBarFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/parallax-js/dist/parallax.js":
/*!***************************************************!*\
  !*** ./node_modules/parallax-js/dist/parallax.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],2:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);



}).call(this,require('_process'))

},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
(function (global){
var now = require('performance-now')
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"performance-now":2}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Parallax.js
* @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
* @description Creates a parallax effect between an array of layers,
*              driving the motion from the gyroscope output of a smartdevice.
*              If no gyroscope is available, the cursor position is used.
*/

var rqAnFr = require('raf');
var objectAssign = require('object-assign');

var helpers = {
  propertyCache: {},
  vendors: [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],

  clamp: function clamp(value, min, max) {
    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
  },
  data: function data(element, name) {
    return helpers.deserialize(element.getAttribute('data-' + name));
  },
  deserialize: function deserialize(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (value === 'null') {
      return null;
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      return value;
    }
  },
  camelCase: function camelCase(value) {
    return value.replace(/-+(.)?/g, function (match, character) {
      return character ? character.toUpperCase() : '';
    });
  },
  accelerate: function accelerate(element) {
    helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');
    helpers.css(element, 'transform-style', 'preserve-3d');
    helpers.css(element, 'backface-visibility', 'hidden');
  },
  transformSupport: function transformSupport(value) {
    var element = document.createElement('div'),
        propertySupport = false,
        propertyValue = null,
        featureSupport = false,
        cssProperty = null,
        jsProperty = null;
    for (var i = 0, l = helpers.vendors.length; i < l; i++) {
      if (helpers.vendors[i] !== null) {
        cssProperty = helpers.vendors[i][0] + 'transform';
        jsProperty = helpers.vendors[i][1] + 'Transform';
      } else {
        cssProperty = 'transform';
        jsProperty = 'transform';
      }
      if (element.style[jsProperty] !== undefined) {
        propertySupport = true;
        break;
      }
    }
    switch (value) {
      case '2D':
        featureSupport = propertySupport;
        break;
      case '3D':
        if (propertySupport) {
          var body = document.body || document.createElement('body'),
              documentElement = document.documentElement,
              documentOverflow = documentElement.style.overflow,
              isCreatedBody = false;

          if (!document.body) {
            isCreatedBody = true;
            documentElement.style.overflow = 'hidden';
            documentElement.appendChild(body);
            body.style.overflow = 'hidden';
            body.style.background = '';
          }

          body.appendChild(element);
          element.style[jsProperty] = 'translate3d(1px,1px,1px)';
          propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
          documentElement.style.overflow = documentOverflow;
          body.removeChild(element);

          if (isCreatedBody) {
            body.removeAttribute('style');
            body.parentNode.removeChild(body);
          }
        }
        break;
    }
    return featureSupport;
  },
  css: function css(element, property, value) {
    var jsProperty = helpers.propertyCache[property];
    if (!jsProperty) {
      for (var i = 0, l = helpers.vendors.length; i < l; i++) {
        if (helpers.vendors[i] !== null) {
          jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property);
        } else {
          jsProperty = property;
        }
        if (element.style[jsProperty] !== undefined) {
          helpers.propertyCache[property] = jsProperty;
          break;
        }
      }
    }
    element.style[jsProperty] = value;
  }
};

var MAGIC_NUMBER = 30,
    DEFAULTS = {
  relativeInput: false,
  clipRelativeInput: false,
  inputElement: null,
  hoverOnly: false,
  calibrationThreshold: 100,
  calibrationDelay: 500,
  supportDelay: 500,
  calibrateX: false,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false,
  limitY: false,
  scalarX: 10.0,
  scalarY: 10.0,
  frictionX: 0.1,
  frictionY: 0.1,
  originX: 0.5,
  originY: 0.5,
  pointerEvents: false,
  precision: 1,
  onReady: null,
  selector: null
};

var Parallax = function () {
  function Parallax(element, options) {
    _classCallCheck(this, Parallax);

    this.element = element;

    var data = {
      calibrateX: helpers.data(this.element, 'calibrate-x'),
      calibrateY: helpers.data(this.element, 'calibrate-y'),
      invertX: helpers.data(this.element, 'invert-x'),
      invertY: helpers.data(this.element, 'invert-y'),
      limitX: helpers.data(this.element, 'limit-x'),
      limitY: helpers.data(this.element, 'limit-y'),
      scalarX: helpers.data(this.element, 'scalar-x'),
      scalarY: helpers.data(this.element, 'scalar-y'),
      frictionX: helpers.data(this.element, 'friction-x'),
      frictionY: helpers.data(this.element, 'friction-y'),
      originX: helpers.data(this.element, 'origin-x'),
      originY: helpers.data(this.element, 'origin-y'),
      pointerEvents: helpers.data(this.element, 'pointer-events'),
      precision: helpers.data(this.element, 'precision'),
      relativeInput: helpers.data(this.element, 'relative-input'),
      clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),
      hoverOnly: helpers.data(this.element, 'hover-only'),
      inputElement: document.querySelector(helpers.data(this.element, 'input-element')),
      selector: helpers.data(this.element, 'selector')
    };

    for (var key in data) {
      if (data[key] === null) {
        delete data[key];
      }
    }

    objectAssign(this, DEFAULTS, data, options);

    if (!this.inputElement) {
      this.inputElement = this.element;
    }

    this.calibrationTimer = null;
    this.calibrationFlag = true;
    this.enabled = false;
    this.depthsX = [];
    this.depthsY = [];
    this.raf = null;

    this.bounds = null;
    this.elementPositionX = 0;
    this.elementPositionY = 0;
    this.elementWidth = 0;
    this.elementHeight = 0;

    this.elementCenterX = 0;
    this.elementCenterY = 0;

    this.elementRangeX = 0;
    this.elementRangeY = 0;

    this.calibrationX = 0;
    this.calibrationY = 0;

    this.inputX = 0;
    this.inputY = 0;

    this.motionX = 0;
    this.motionY = 0;

    this.velocityX = 0;
    this.velocityY = 0;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
    this.onDeviceMotion = this.onDeviceMotion.bind(this);
    this.onOrientationTimer = this.onOrientationTimer.bind(this);
    this.onMotionTimer = this.onMotionTimer.bind(this);
    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
    this.onAnimationFrame = this.onAnimationFrame.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

    this.windowWidth = null;
    this.windowHeight = null;
    this.windowCenterX = null;
    this.windowCenterY = null;
    this.windowRadiusX = null;
    this.windowRadiusY = null;
    this.portrait = false;
    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
    this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
    this.orientationStatus = 0;
    this.motionStatus = 0;

    this.initialise();
  }

  _createClass(Parallax, [{
    key: 'initialise',
    value: function initialise() {
      if (this.transform2DSupport === undefined) {
        this.transform2DSupport = helpers.transformSupport('2D');
        this.transform3DSupport = helpers.transformSupport('3D');
      }

      // Configure Context Styles
      if (this.transform3DSupport) {
        helpers.accelerate(this.element);
      }

      var style = window.getComputedStyle(this.element);
      if (style.getPropertyValue('position') === 'static') {
        this.element.style.position = 'relative';
      }

      // Pointer events
      if (!this.pointerEvents) {
        this.element.style.pointerEvents = 'none';
      }

      // Setup
      this.updateLayers();
      this.updateDimensions();
      this.enable();
      this.queueCalibration(this.calibrationDelay);
    }
  }, {
    key: 'doReadyCallback',
    value: function doReadyCallback() {
      if (this.onReady) {
        this.onReady();
      }
    }
  }, {
    key: 'updateLayers',
    value: function updateLayers() {
      if (this.selector) {
        this.layers = this.element.querySelectorAll(this.selector);
      } else {
        this.layers = this.element.children;
      }

      if (!this.layers.length) {
        console.warn('ParallaxJS: Your scene does not have any layers.');
      }

      this.depthsX = [];
      this.depthsY = [];

      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index];

        if (this.transform3DSupport) {
          helpers.accelerate(layer);
        }

        layer.style.position = index ? 'absolute' : 'relative';
        layer.style.display = 'block';
        layer.style.left = 0;
        layer.style.top = 0;

        var depth = helpers.data(layer, 'depth') || 0;
        this.depthsX.push(helpers.data(layer, 'depth-x') || depth);
        this.depthsY.push(helpers.data(layer, 'depth-y') || depth);
      }
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.windowCenterX = this.windowWidth * this.originX;
      this.windowCenterY = this.windowHeight * this.originY;
      this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
      this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
    }
  }, {
    key: 'updateBounds',
    value: function updateBounds() {
      this.bounds = this.inputElement.getBoundingClientRect();
      this.elementPositionX = this.bounds.left;
      this.elementPositionY = this.bounds.top;
      this.elementWidth = this.bounds.width;
      this.elementHeight = this.bounds.height;
      this.elementCenterX = this.elementWidth * this.originX;
      this.elementCenterY = this.elementHeight * this.originY;
      this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
      this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
    }
  }, {
    key: 'queueCalibration',
    value: function queueCalibration(delay) {
      clearTimeout(this.calibrationTimer);
      this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this.enabled) {
        return;
      }
      this.enabled = true;

      if (this.orientationSupport) {
        this.portrait = false;
        window.addEventListener('deviceorientation', this.onDeviceOrientation);
        this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay);
      } else if (this.motionSupport) {
        this.portrait = false;
        window.addEventListener('devicemotion', this.onDeviceMotion);
        this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay);
      } else {
        this.calibrationX = 0;
        this.calibrationY = 0;
        this.portrait = false;
        window.addEventListener('mousemove', this.onMouseMove);
        this.doReadyCallback();
      }

      window.addEventListener('resize', this.onWindowResize);
      this.raf = rqAnFr(this.onAnimationFrame);
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (!this.enabled) {
        return;
      }
      this.enabled = false;

      if (this.orientationSupport) {
        window.removeEventListener('deviceorientation', this.onDeviceOrientation);
      } else if (this.motionSupport) {
        window.removeEventListener('devicemotion', this.onDeviceMotion);
      } else {
        window.removeEventListener('mousemove', this.onMouseMove);
      }

      window.removeEventListener('resize', this.onWindowResize);
      rqAnFr.cancel(this.raf);
    }
  }, {
    key: 'calibrate',
    value: function calibrate(x, y) {
      this.calibrateX = x === undefined ? this.calibrateX : x;
      this.calibrateY = y === undefined ? this.calibrateY : y;
    }
  }, {
    key: 'invert',
    value: function invert(x, y) {
      this.invertX = x === undefined ? this.invertX : x;
      this.invertY = y === undefined ? this.invertY : y;
    }
  }, {
    key: 'friction',
    value: function friction(x, y) {
      this.frictionX = x === undefined ? this.frictionX : x;
      this.frictionY = y === undefined ? this.frictionY : y;
    }
  }, {
    key: 'scalar',
    value: function scalar(x, y) {
      this.scalarX = x === undefined ? this.scalarX : x;
      this.scalarY = y === undefined ? this.scalarY : y;
    }
  }, {
    key: 'limit',
    value: function limit(x, y) {
      this.limitX = x === undefined ? this.limitX : x;
      this.limitY = y === undefined ? this.limitY : y;
    }
  }, {
    key: 'origin',
    value: function origin(x, y) {
      this.originX = x === undefined ? this.originX : x;
      this.originY = y === undefined ? this.originY : y;
    }
  }, {
    key: 'setInputElement',
    value: function setInputElement(element) {
      this.inputElement = element;
      this.updateDimensions();
    }
  }, {
    key: 'setPosition',
    value: function setPosition(element, x, y) {
      x = x.toFixed(this.precision) + 'px';
      y = y.toFixed(this.precision) + 'px';
      if (this.transform3DSupport) {
        helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
      } else if (this.transform2DSupport) {
        helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')');
      } else {
        element.style.left = x;
        element.style.top = y;
      }
    }
  }, {
    key: 'onOrientationTimer',
    value: function onOrientationTimer() {
      if (this.orientationSupport && this.orientationStatus === 0) {
        this.disable();
        this.orientationSupport = false;
        this.enable();
      } else {
        this.doReadyCallback();
      }
    }
  }, {
    key: 'onMotionTimer',
    value: function onMotionTimer() {
      if (this.motionSupport && this.motionStatus === 0) {
        this.disable();
        this.motionSupport = false;
        this.enable();
      } else {
        this.doReadyCallback();
      }
    }
  }, {
    key: 'onCalibrationTimer',
    value: function onCalibrationTimer() {
      this.calibrationFlag = true;
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.updateDimensions();
    }
  }, {
    key: 'onAnimationFrame',
    value: function onAnimationFrame() {
      this.updateBounds();
      var calibratedInputX = this.inputX - this.calibrationX,
          calibratedInputY = this.inputY - this.calibrationY;
      if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {
        this.queueCalibration(0);
      }
      if (this.portrait) {
        this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
        this.motionY = this.calibrateY ? calibratedInputX : this.inputX;
      } else {
        this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
        this.motionY = this.calibrateY ? calibratedInputY : this.inputY;
      }
      this.motionX *= this.elementWidth * (this.scalarX / 100);
      this.motionY *= this.elementHeight * (this.scalarY / 100);
      if (!isNaN(parseFloat(this.limitX))) {
        this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);
      }
      if (!isNaN(parseFloat(this.limitY))) {
        this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);
      }
      this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
      this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index],
            depthX = this.depthsX[index],
            depthY = this.depthsY[index],
            xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
            yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
        this.setPosition(layer, xOffset, yOffset);
      }
      this.raf = rqAnFr(this.onAnimationFrame);
    }
  }, {
    key: 'rotate',
    value: function rotate(beta, gamma) {
      // Extract Rotation
      var x = (beta || 0) / MAGIC_NUMBER,
          //  -90 :: 90
      y = (gamma || 0) / MAGIC_NUMBER; // -180 :: 180

      // Detect Orientation Change
      var portrait = this.windowHeight > this.windowWidth;
      if (this.portrait !== portrait) {
        this.portrait = portrait;
        this.calibrationFlag = true;
      }

      if (this.calibrationFlag) {
        this.calibrationFlag = false;
        this.calibrationX = x;
        this.calibrationY = y;
      }

      this.inputX = x;
      this.inputY = y;
    }
  }, {
    key: 'onDeviceOrientation',
    value: function onDeviceOrientation(event) {
      var beta = event.beta;
      var gamma = event.gamma;
      if (beta !== null && gamma !== null) {
        this.orientationStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onDeviceMotion',
    value: function onDeviceMotion(event) {
      var beta = event.rotationRate.beta;
      var gamma = event.rotationRate.gamma;
      if (beta !== null && gamma !== null) {
        this.motionStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var clientX = event.clientX,
          clientY = event.clientY;

      // reset input to center if hoverOnly is set and we're not hovering the element
      if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {
        this.inputX = 0;
        this.inputY = 0;
        return;
      }

      if (this.relativeInput) {
        // Clip mouse coordinates inside element bounds.
        if (this.clipRelativeInput) {
          clientX = Math.max(clientX, this.elementPositionX);
          clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
          clientY = Math.max(clientY, this.elementPositionY);
          clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);
        }
        // Calculate input relative to the element.
        if (this.elementRangeX && this.elementRangeY) {
          this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
          this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;
        }
      } else {
        // Calculate input relative to the window.
        if (this.windowRadiusX && this.windowRadiusY) {
          this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
          this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.disable();

      clearTimeout(this.calibrationTimer);
      clearTimeout(this.detectionTimer);

      this.element.removeAttribute('style');
      for (var index = 0; index < this.layers.length; index++) {
        this.layers[index].removeAttribute('style');
      }

      delete this.element;
      delete this.layers;
    }
  }, {
    key: 'version',
    value: function version() {
      return '3.1.0';
    }
  }]);

  return Parallax;
}();

module.exports = Parallax;

},{"object-assign":1,"raf":4}]},{},[5])(5)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmFmL2luZGV4LmpzIiwic3JjL3BhcmFsbGF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNEO0FBQ0Q7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNBLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNEO0FBQ0YsT0FiRCxNQWFPO0FBQ0w7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGFBQWhCLElBQWlDLEtBQUssYUFBcEQ7QUFDQSxlQUFLLE1BQUwsR0FBYyxDQUFDLFVBQVUsS0FBSyxhQUFoQixJQUFpQyxLQUFLLGFBQXBEO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRVM7QUFDUixXQUFLLE9BQUw7O0FBRUEsbUJBQWEsS0FBSyxnQkFBbEI7QUFDQSxtQkFBYSxLQUFLLGNBQWxCOztBQUVBLFdBQUssT0FBTCxDQUFhLGVBQWIsQ0FBNkIsT0FBN0I7QUFDQSxXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEtBQUssTUFBTCxDQUFZLE1BQXhDLEVBQWdELE9BQWhELEVBQXlEO0FBQ3ZELGFBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsZUFBbkIsQ0FBbUMsT0FBbkM7QUFDRDs7QUFFRCxhQUFPLEtBQUssT0FBWjtBQUNBLGFBQU8sS0FBSyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sT0FBUDtBQUNEOzs7Ozs7QUFJSCxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbW9kdWxlTG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICAgIHVwVGltZSA9IHByb2Nlc3MudXB0aW1lKCkgKiAxZTk7XG4gICAgbm9kZUxvYWRUaW1lID0gbW9kdWxlTG9hZFRpbWUgLSB1cFRpbWU7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcmZvcm1hbmNlLW5vdy5qcy5tYXBcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cbiIsIi8qKlxuKiBQYXJhbGxheC5qc1xuKiBAYXV0aG9yIE1hdHRoZXcgV2FnZXJmaWVsZCAtIEB3YWdlcmZpZWxkLCBSZW7DqSBSb3RoIC0gbWFpbEByZW5lcm90aC5vcmdcbiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwYXJhbGxheCBlZmZlY3QgYmV0d2VlbiBhbiBhcnJheSBvZiBsYXllcnMsXG4qICAgICAgICAgICAgICBkcml2aW5nIHRoZSBtb3Rpb24gZnJvbSB0aGUgZ3lyb3Njb3BlIG91dHB1dCBvZiBhIHNtYXJ0ZGV2aWNlLlxuKiAgICAgICAgICAgICAgSWYgbm8gZ3lyb3Njb3BlIGlzIGF2YWlsYWJsZSwgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyB1c2VkLlxuKi9cblxuY29uc3QgcnFBbkZyID0gcmVxdWlyZSgncmFmJylcbmNvbnN0IG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG5jb25zdCBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCd3ZWJraXQnXSwgWyctbW96LScsJ01veiddLCBbJy1vLScsJ08nXSwgWyctbXMtJywnbXMnXV0sXG5cbiAgY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heFxuICAgICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgICAgOiAodmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlKVxuICB9LFxuXG4gIGRhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIHJldHVybiBoZWxwZXJzLmRlc2VyaWFsaXplKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScrbmFtZSkpXG4gIH0sXG5cbiAgZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIChtYXRjaCwgY2hhcmFjdGVyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJ1xuICAgIH0pXG4gIH0sXG5cbiAgYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICdiYWNrZmFjZS12aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gIH0sXG5cbiAgdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVswXSArICd0cmFuc2Zvcm0nXG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuICAgICAgICBqc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2godmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzNEJzpcbiAgICAgICAgaWYgKHByb3BlcnR5U3VwcG9ydCkge1xuICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5JyksXG4gICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgZG9jdW1lbnRPdmVyZmxvdyA9IGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJ1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KVxuICAgICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUubGVuZ3RoID4gMCAmJiBwcm9wZXJ0eVZhbHVlICE9PSAnbm9uZSdcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuXG4gICAgICAgICAgaWYgKCBpc0NyZWF0ZWRCb2R5ICkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnRcbiAgfSxcblxuICBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbGV0IGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldXG4gICAgaWYgKCFqc1Byb3BlcnR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLmNhbWVsQ2FzZShoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnLScgKyBwcm9wZXJ0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZVxuICB9XG5cbn1cblxuY29uc3QgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgICBERUZBVUxUUyA9IHtcbiAgICAgICAgcmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgICAgICAgaW5wdXRFbGVtZW50OiBudWxsLFxuICAgICAgICBob3Zlck9ubHk6IGZhbHNlLFxuICAgICAgICBjYWxpYnJhdGlvblRocmVzaG9sZDogMTAwLFxuICAgICAgICBjYWxpYnJhdGlvbkRlbGF5OiA1MDAsXG4gICAgICAgIHN1cHBvcnREZWxheTogNTAwLFxuICAgICAgICBjYWxpYnJhdGVYOiBmYWxzZSxcbiAgICAgICAgY2FsaWJyYXRlWTogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WDogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WTogdHJ1ZSxcbiAgICAgICAgbGltaXRYOiBmYWxzZSxcbiAgICAgICAgbGltaXRZOiBmYWxzZSxcbiAgICAgICAgc2NhbGFyWDogMTAuMCxcbiAgICAgICAgc2NhbGFyWTogMTAuMCxcbiAgICAgICAgZnJpY3Rpb25YOiAwLjEsXG4gICAgICAgIGZyaWN0aW9uWTogMC4xLFxuICAgICAgICBvcmlnaW5YOiAwLjUsXG4gICAgICAgIG9yaWdpblk6IDAuNSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogZmFsc2UsXG4gICAgICAgIHByZWNpc2lvbjogMSxcbiAgICAgICAgb25SZWFkeTogbnVsbCxcbiAgICAgICAgc2VsZWN0b3I6IG51bGxcbiAgICAgIH1cblxuY2xhc3MgUGFyYWxsYXgge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XVxuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdEFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucylcblxuICAgIGlmKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsXG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcbiAgICB0aGlzLmRlcHRoc1ggPSBbXVxuICAgIHRoaXMuZGVwdGhzWSA9IFtdXG4gICAgdGhpcy5yYWYgPSBudWxsXG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gMFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMFxuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDBcblxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSAwXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDBcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDBcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSAwXG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDBcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDBcblxuICAgIHRoaXMuaW5wdXRYID0gMFxuICAgIHRoaXMuaW5wdXRZID0gMFxuXG4gICAgdGhpcy5tb3Rpb25YID0gMFxuICAgIHRoaXMubW90aW9uWSA9IDBcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMFxuICAgIHRoaXMudmVsb2NpdHlZID0gMFxuXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKVxuICAgIHRoaXMub25PcmllbnRhdGlvblRpbWVyID0gdGhpcy5vbk9yaWVudGF0aW9uVGltZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25Nb3Rpb25UaW1lciA9IHRoaXMub25Nb3Rpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkFuaW1hdGlvbkZyYW1lID0gdGhpcy5vbkFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbFxuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gbnVsbFxuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IG51bGxcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsXG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gbnVsbFxuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IG51bGxcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICB0aGlzLmRlc2t0b3AgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8bW9iaXx0YWJsZXR8b3BlcmEgbWluaXxuZXh1cyA3KS9pKVxuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3BcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcFxuICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAwXG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwXG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzJEJylcbiAgICAgIHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCczRCcpXG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmFjY2VsZXJhdGUodGhpcy5lbGVtZW50KVxuICAgIH1cblxuICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcbiAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICB9XG5cbiAgICAvLyBQb2ludGVyIGV2ZW50c1xuICAgIGlmKCF0aGlzLnBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgfVxuXG4gICAgLy8gU2V0dXBcbiAgICB0aGlzLnVwZGF0ZUxheWVycygpXG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICB0aGlzLmVuYWJsZSgpXG4gICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKHRoaXMuY2FsaWJyYXRpb25EZWxheSlcbiAgfVxuXG4gIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICBpZih0aGlzLm9uUmVhZHkpIHtcbiAgICAgIHRoaXMub25SZWFkeSgpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGF5ZXJzKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5cbiAgICB9XG5cbiAgICBpZighdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpXG4gICAgfVxuXG4gICAgdGhpcy5kZXB0aHNYID0gW11cbiAgICB0aGlzLmRlcHRoc1kgPSBbXVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdXG5cbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpXG4gICAgICB9XG5cbiAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJ1xuICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwXG4gICAgICBsYXllci5zdHlsZS50b3AgPSAwXG5cbiAgICAgIGxldCBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMFxuICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKVxuICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YXG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpbllcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpXG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSlcbiAgfVxuXG4gIHVwZGF0ZUJvdW5kcygpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuaW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gdGhpcy5ib3VuZHMubGVmdFxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IHRoaXMuYm91bmRzLnRvcFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdGhpcy5ib3VuZHMud2lkdGhcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gdGhpcy5lbGVtZW50V2lkdGggKiB0aGlzLm9yaWdpblhcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gdGhpcy5lbGVtZW50SGVpZ2h0ICogdGhpcy5vcmlnaW5ZXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWCwgdGhpcy5lbGVtZW50V2lkdGggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKVxuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclksIHRoaXMuZWxlbWVudEhlaWdodCAtIHRoaXMuZWxlbWVudENlbnRlclkpXG4gIH1cblxuICBxdWV1ZUNhbGlicmF0aW9uKGRlbGF5KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSlcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25PcmllbnRhdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSlcbiAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMFxuICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwXG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSlcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICB9XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSlcbiAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKVxuICB9XG5cbiAgY2FsaWJyYXRlKHgsIHkpIHtcbiAgICB0aGlzLmNhbGlicmF0ZVggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVggOiB4XG4gICAgdGhpcy5jYWxpYnJhdGVZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVZIDogeVxuICB9XG5cbiAgaW52ZXJ0KHgsIHkpIHtcbiAgICB0aGlzLmludmVydFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFggOiB4XG4gICAgdGhpcy5pbnZlcnRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRZIDogeVxuICB9XG5cbiAgZnJpY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuZnJpY3Rpb25YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblggOiB4XG4gICAgdGhpcy5mcmljdGlvblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWSA6IHlcbiAgfVxuXG4gIHNjYWxhcih4LCB5KSB7XG4gICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeFxuICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHlcbiAgfVxuXG4gIGxpbWl0KHgsIHkpIHtcbiAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeFxuICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5XG4gIH1cblxuICBvcmlnaW4oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWCA6IHhcbiAgICB0aGlzLm9yaWdpblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblkgOiB5XG4gIH1cblxuICBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsMCknKVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQpIHtcbiAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJylcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geFxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5XG4gICAgfVxuICB9XG5cbiAgb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSBmYWxzZVxuICAgICAgdGhpcy5lbmFibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgb25Nb3Rpb25UaW1lcigpIHtcbiAgICBpZiAodGhpcy5tb3Rpb25TdXBwb3J0ICYmIHRoaXMubW90aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2VcbiAgICAgIHRoaXMuZW5hYmxlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWVcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBvbkFuaW1hdGlvbkZyYW1lKCkge1xuICAgIHRoaXMudXBkYXRlQm91bmRzKClcbiAgICBsZXQgY2FsaWJyYXRlZElucHV0WCA9IHRoaXMuaW5wdXRYIC0gdGhpcy5jYWxpYnJhdGlvblgsXG4gICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZXG4gICAgaWYgKChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRYKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHx8IChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpKSB7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24oMClcbiAgICB9XG4gICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WVxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WFxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZXG4gICAgfVxuICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApXG4gICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApXG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25YLCAtdGhpcy5saW1pdFgsIHRoaXMubGltaXRYKVxuICAgIH1cbiAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFkpKSkge1xuICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpXG4gICAgfVxuICAgIHRoaXMudmVsb2NpdHlYICs9ICh0aGlzLm1vdGlvblggLSB0aGlzLnZlbG9jaXR5WCkgKiB0aGlzLmZyaWN0aW9uWFxuICAgIHRoaXMudmVsb2NpdHlZICs9ICh0aGlzLm1vdGlvblkgLSB0aGlzLnZlbG9jaXR5WSkgKiB0aGlzLmZyaWN0aW9uWVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XSxcbiAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgIGRlcHRoWSA9IHRoaXMuZGVwdGhzWVtpbmRleF0sXG4gICAgICAgICAgeE9mZnNldCA9IHRoaXMudmVsb2NpdHlYICogKGRlcHRoWCAqICh0aGlzLmludmVydFggPyAtMSA6IDEpKSxcbiAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KVxuICAgIH1cbiAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXG4gIH1cblxuICByb3RhdGUoYmV0YSwgZ2FtbWEpe1xuICAgIC8vIEV4dHJhY3QgUm90YXRpb25cbiAgICBsZXQgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLCAvLyAgLTkwIDo6IDkwXG4gICAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVIgLy8gLTE4MCA6OiAxODBcblxuICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICBsZXQgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGhcbiAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBwb3J0cmFpdFxuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHhcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geVxuICAgIH1cblxuICAgIHRoaXMuaW5wdXRYID0geFxuICAgIHRoaXMuaW5wdXRZID0geVxuICB9XG5cbiAgb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQuYmV0YVxuICAgIGxldCBnYW1tYSA9IGV2ZW50LmdhbW1hXG4gICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQucm90YXRpb25SYXRlLmJldGFcbiAgICBsZXQgZ2FtbWEgPSBldmVudC5yb3RhdGlvblJhdGUuZ2FtbWFcbiAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFlcblxuICAgIC8vIHJlc2V0IGlucHV0IHRvIGNlbnRlciBpZiBob3Zlck9ubHkgaXMgc2V0IGFuZCB3ZSdyZSBub3QgaG92ZXJpbmcgdGhlIGVsZW1lbnRcbiAgICBpZih0aGlzLmhvdmVyT25seSAmJlxuICAgICAgKChjbGllbnRYIDwgdGhpcy5lbGVtZW50UG9zaXRpb25YIHx8IGNsaWVudFggPiB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCkgfHxcbiAgICAgIChjbGllbnRZIDwgdGhpcy5lbGVtZW50UG9zaXRpb25ZIHx8IGNsaWVudFkgPiB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpKSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IDBcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAwXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgLy8gQ2xpcCBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgZWxlbWVudCBib3VuZHMuXG4gICAgICBpZiAodGhpcy5jbGlwUmVsYXRpdmVJbnB1dCkge1xuICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKVxuICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpXG4gICAgICB9XG4gICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICBpZih0aGlzLmVsZW1lbnRSYW5nZVggJiYgdGhpcy5lbGVtZW50UmFuZ2VZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvblggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKSAvIHRoaXMuZWxlbWVudFJhbmdlWFxuICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb25ZIC0gdGhpcy5lbGVtZW50Q2VudGVyWSkgLyB0aGlzLmVsZW1lbnRSYW5nZVlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSB3aW5kb3cuXG4gICAgICBpZih0aGlzLndpbmRvd1JhZGl1c1ggJiYgdGhpcy53aW5kb3dSYWRpdXNZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLndpbmRvd0NlbnRlclgpIC8gdGhpcy53aW5kb3dSYWRpdXNYXG4gICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLndpbmRvd0NlbnRlclkpIC8gdGhpcy53aW5kb3dSYWRpdXNZXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kZXRlY3Rpb25UaW1lcilcblxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudFxuICAgIGRlbGV0ZSB0aGlzLmxheWVyc1xuICB9XG5cbiAgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzMuMS4wJ1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheFxuIl19

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/pjax/index.js":
/*!************************************!*\
  !*** ./node_modules/pjax/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var executeScripts = __webpack_require__(/*! ./lib/execute-scripts */ "./node_modules/pjax/lib/execute-scripts.js");
var forEachEls = __webpack_require__(/*! ./lib/foreach-els */ "./node_modules/pjax/lib/foreach-els.js");
var parseOptions = __webpack_require__(/*! ./lib/parse-options */ "./node_modules/pjax/lib/parse-options.js");
var switches = __webpack_require__(/*! ./lib/switches */ "./node_modules/pjax/lib/switches.js");
var newUid = __webpack_require__(/*! ./lib/uniqueid */ "./node_modules/pjax/lib/uniqueid.js");

var on = __webpack_require__(/*! ./lib/events/on */ "./node_modules/pjax/lib/events/on.js");
var trigger = __webpack_require__(/*! ./lib/events/trigger */ "./node_modules/pjax/lib/events/trigger.js");

var clone = __webpack_require__(/*! ./lib/util/clone */ "./node_modules/pjax/lib/util/clone.js");
var contains = __webpack_require__(/*! ./lib/util/contains */ "./node_modules/pjax/lib/util/contains.js");
var extend = __webpack_require__(/*! ./lib/util/extend */ "./node_modules/pjax/lib/util/extend.js");
var noop = __webpack_require__(/*! ./lib/util/noop */ "./node_modules/pjax/lib/util/noop.js");

var Pjax = function(options) {
  this.state = {
    numPendingSwitches: 0,
    href: null,
    options: null
  };

  this.options = parseOptions(options);
  this.log("Pjax options", this.options);

  if (this.options.scrollRestoration && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  this.maxUid = this.lastUid = newUid();

  this.parseDOM(document);

  on(
    window,
    "popstate",
    function(st) {
      if (st.state) {
        var opt = clone(this.options);
        opt.url = st.state.url;
        opt.title = st.state.title;
        // Since state already exists, prevent it from being pushed again
        opt.history = false;
        opt.scrollPos = st.state.scrollPos;
        if (st.state.uid < this.lastUid) {
          opt.backward = true;
        } else {
          opt.forward = true;
        }
        this.lastUid = st.state.uid;

        // @todo implement history cache here, based on uid
        this.loadUrl(st.state.url, opt);
      }
    }.bind(this)
  );
};

Pjax.switches = switches;

Pjax.prototype = {
  log: __webpack_require__(/*! ./lib/proto/log */ "./node_modules/pjax/lib/proto/log.js"),

  getElements: function(el) {
    return el.querySelectorAll(this.options.elements);
  },

  parseDOM: function(el) {
    var parseElement = __webpack_require__(/*! ./lib/proto/parse-element */ "./node_modules/pjax/lib/proto/parse-element.js");
    forEachEls(this.getElements(el), parseElement, this);
  },

  refresh: function(el) {
    this.parseDOM(el || document);
  },

  reload: function() {
    window.location.reload();
  },

  attachLink: __webpack_require__(/*! ./lib/proto/attach-link */ "./node_modules/pjax/lib/proto/attach-link.js"),

  attachForm: __webpack_require__(/*! ./lib/proto/attach-form */ "./node_modules/pjax/lib/proto/attach-form.js"),

  forEachSelectors: function(cb, context, DOMcontext) {
    return __webpack_require__(/*! ./lib/foreach-selectors */ "./node_modules/pjax/lib/foreach-selectors.js").bind(this)(
      this.options.selectors,
      cb,
      context,
      DOMcontext
    );
  },

  switchSelectors: function(selectors, fromEl, toEl, options) {
    return __webpack_require__(/*! ./lib/switches-selectors */ "./node_modules/pjax/lib/switches-selectors.js").bind(this)(
      this.options.switches,
      this.options.switchesOptions,
      selectors,
      fromEl,
      toEl,
      options
    );
  },

  latestChance: function(href) {
    window.location = href;
  },

  onSwitch: function() {
    trigger(window, "resize scroll");

    this.state.numPendingSwitches--;

    // debounce calls, so we only run this once after all switches are finished.
    if (this.state.numPendingSwitches === 0) {
      this.afterAllSwitches();
    }
  },

  loadContent: function(html, options) {
    if (typeof html !== "string") {
      trigger(document, "pjax:complete pjax:error", options);

      return;
    }

    var tmpEl = document.implementation.createHTMLDocument("pjax");

    // parse HTML attributes to copy them
    // since we are forced to use documentElement.innerHTML (outerHTML can't be used for <html>)
    var htmlRegex = /<html[^>]+>/gi;
    var htmlAttribsRegex = /\s?[a-z:]+(?:=['"][^'">]+['"])*/gi;
    var matches = html.match(htmlRegex);
    if (matches && matches.length) {
      matches = matches[0].match(htmlAttribsRegex);
      if (matches.length) {
        matches.shift();
        matches.forEach(function(htmlAttrib) {
          var attr = htmlAttrib.trim().split("=");
          if (attr.length === 1) {
            tmpEl.documentElement.setAttribute(attr[0], true);
          } else {
            tmpEl.documentElement.setAttribute(attr[0], attr[1].slice(1, -1));
          }
        });
      }
    }

    tmpEl.documentElement.innerHTML = html;
    this.log(
      "load content",
      tmpEl.documentElement.attributes,
      tmpEl.documentElement.innerHTML.length
    );

    // Clear out any focused controls before inserting new page contents.
    if (
      document.activeElement &&
      contains(document, this.options.selectors, document.activeElement)
    ) {
      try {
        document.activeElement.blur();
      } catch (e) {} // eslint-disable-line no-empty
    }

    this.switchSelectors(this.options.selectors, tmpEl, document, options);
  },

  abortRequest: __webpack_require__(/*! ./lib/abort-request */ "./node_modules/pjax/lib/abort-request.js"),

  doRequest: __webpack_require__(/*! ./lib/send-request */ "./node_modules/pjax/lib/send-request.js"),

  handleResponse: __webpack_require__(/*! ./lib/proto/handle-response */ "./node_modules/pjax/lib/proto/handle-response.js"),

  loadUrl: function(href, options) {
    options =
      typeof options === "object"
        ? extend({}, this.options, options)
        : clone(this.options);

    this.log("load href", href, options);

    // Abort any previous request
    this.abortRequest(this.request);

    trigger(document, "pjax:send", options);

    // Do the request
    this.request = this.doRequest(
      href,
      options,
      this.handleResponse.bind(this)
    );
  },

  afterAllSwitches: function() {
    // FF bug: Won’t autofocus fields that are inserted via JS.
    // This behavior is incorrect. So if theres no current focus, autofocus
    // the last field.
    //
    // http://www.w3.org/html/wg/drafts/html/master/forms.html
    var autofocusEl = Array.prototype.slice
      .call(document.querySelectorAll("[autofocus]"))
      .pop();
    if (autofocusEl && document.activeElement !== autofocusEl) {
      autofocusEl.focus();
    }

    // execute scripts when DOM have been completely updated
    this.options.selectors.forEach(function(selector) {
      forEachEls(document.querySelectorAll(selector), function(el) {
        executeScripts(el);
      });
    });

    var state = this.state;

    if (state.options.history) {
      if (!window.history.state) {
        this.lastUid = this.maxUid = newUid();
        window.history.replaceState(
          {
            url: window.location.href,
            title: document.title,
            uid: this.maxUid,
            scrollPos: [0, 0]
          },
          document.title
        );
      }

      // Update browser history
      this.lastUid = this.maxUid = newUid();

      window.history.pushState(
        {
          url: state.href,
          title: state.options.title,
          uid: this.maxUid,
          scrollPos: [0, 0]
        },
        state.options.title,
        state.href
      );
    }

    this.forEachSelectors(function(el) {
      this.parseDOM(el);
    }, this);

    // Fire Events
    trigger(document, "pjax:complete pjax:success", state.options);

    if (typeof state.options.analytics === "function") {
      state.options.analytics();
    }

    if (state.options.history) {
      // First parse url and check for hash to override scroll
      var a = document.createElement("a");
      a.href = this.state.href;
      if (a.hash) {
        var name = a.hash.slice(1);
        name = decodeURIComponent(name);

        var curtop = 0;
        var target =
          document.getElementById(name) || document.getElementsByName(name)[0];
        if (target) {
          // http://stackoverflow.com/questions/8111094/cross-browser-javascript-function-to-find-actual-position-of-an-element-in-page
          if (target.offsetParent) {
            do {
              curtop += target.offsetTop;

              target = target.offsetParent;
            } while (target);
          }
        }
        window.scrollTo(0, curtop);
      } else if (state.options.scrollTo !== false) {
        // Scroll page to top on new page load
        if (state.options.scrollTo.length > 1) {
          window.scrollTo(state.options.scrollTo[0], state.options.scrollTo[1]);
        } else {
          window.scrollTo(0, state.options.scrollTo);
        }
      }
    } else if (state.options.scrollRestoration && state.options.scrollPos) {
      window.scrollTo(state.options.scrollPos[0], state.options.scrollPos[1]);
    }

    this.state = {
      numPendingSwitches: 0,
      href: null,
      options: null
    };
  }
};

Pjax.isSupported = __webpack_require__(/*! ./lib/is-supported */ "./node_modules/pjax/lib/is-supported.js");

// arguably could do `if( require("./lib/is-supported")()) {` but that might be a little to simple
if (Pjax.isSupported()) {
  module.exports = Pjax;
}
// if there isn’t required browser functions, returning stupid api
else {
  var stupidPjax = noop;
  for (var key in Pjax.prototype) {
    if (
      Pjax.prototype.hasOwnProperty(key) &&
      typeof Pjax.prototype[key] === "function"
    ) {
      stupidPjax[key] = noop;
    }
  }

  module.exports = stupidPjax;
}


/***/ }),

/***/ "./node_modules/pjax/lib/abort-request.js":
/*!************************************************!*\
  !*** ./node_modules/pjax/lib/abort-request.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var noop = __webpack_require__(/*! ./util/noop */ "./node_modules/pjax/lib/util/noop.js");

module.exports = function(request) {
  if (request && request.readyState < 4) {
    request.onreadystatechange = noop;
    request.abort();
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/eval-script.js":
/*!**********************************************!*\
  !*** ./node_modules/pjax/lib/eval-script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(el) {
  var code = el.text || el.textContent || el.innerHTML || "";
  var src = el.src || "";
  var parent =
    el.parentNode || document.querySelector("head") || document.documentElement;
  var script = document.createElement("script");

  if (code.match("document.write")) {
    if (console && console.log) {
      console.log(
        "Script contains document.write. Can’t be executed correctly. Code skipped ",
        el
      );
    }
    return false;
  }

  script.type = "text/javascript";
  script.id = el.id;

  /* istanbul ignore if */
  if (src !== "") {
    script.src = src;
    script.async = false; // force synchronous loading of peripheral JS
  }

  if (code !== "") {
    try {
      script.appendChild(document.createTextNode(code));
    } catch (e) {
      /* istanbul ignore next */
      // old IEs have funky script nodes
      script.text = code;
    }
  }

  // execute
  parent.appendChild(script);
  // avoid pollution only in head or body tags
  if (
    (parent instanceof HTMLHeadElement || parent instanceof HTMLBodyElement) &&
    parent.contains(script)
  ) {
    parent.removeChild(script);
  }

  return true;
};


/***/ }),

/***/ "./node_modules/pjax/lib/events/on.js":
/*!********************************************!*\
  !*** ./node_modules/pjax/lib/events/on.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forEachEls = __webpack_require__(/*! ../foreach-els */ "./node_modules/pjax/lib/foreach-els.js");

module.exports = function(els, events, listener, useCapture) {
  events = typeof events === "string" ? events.split(" ") : events;

  events.forEach(function(e) {
    forEachEls(els, function(el) {
      el.addEventListener(e, listener, useCapture);
    });
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/events/trigger.js":
/*!*************************************************!*\
  !*** ./node_modules/pjax/lib/events/trigger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forEachEls = __webpack_require__(/*! ../foreach-els */ "./node_modules/pjax/lib/foreach-els.js");

module.exports = function(els, events, opts) {
  events = typeof events === "string" ? events.split(" ") : events;

  events.forEach(function(e) {
    var event;
    event = document.createEvent("HTMLEvents");
    event.initEvent(e, true, true);
    event.eventName = e;
    if (opts) {
      Object.keys(opts).forEach(function(key) {
        event[key] = opts[key];
      });
    }

    forEachEls(els, function(el) {
      var domFix = false;
      if (!el.parentNode && el !== document && el !== window) {
        // THANK YOU IE (9/10/11)
        // dispatchEvent doesn't work if the element is not in the DOM
        domFix = true;
        document.body.appendChild(el);
      }
      el.dispatchEvent(event);
      if (domFix) {
        el.parentNode.removeChild(el);
      }
    });
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/execute-scripts.js":
/*!**************************************************!*\
  !*** ./node_modules/pjax/lib/execute-scripts.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forEachEls = __webpack_require__(/*! ./foreach-els */ "./node_modules/pjax/lib/foreach-els.js");
var evalScript = __webpack_require__(/*! ./eval-script */ "./node_modules/pjax/lib/eval-script.js");
// Finds and executes scripts (used for newly added elements)
// Needed since innerHTML does not run scripts
module.exports = function(el) {
  if (el.tagName.toLowerCase() === "script") {
    evalScript(el);
  }

  forEachEls(el.querySelectorAll("script"), function(script) {
    if (!script.type || script.type.toLowerCase() === "text/javascript") {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      evalScript(script);
    }
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/foreach-els.js":
/*!**********************************************!*\
  !*** ./node_modules/pjax/lib/foreach-els.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global HTMLCollection: true */

module.exports = function(els, fn, context) {
  if (
    els instanceof HTMLCollection ||
    els instanceof NodeList ||
    els instanceof Array
  ) {
    return Array.prototype.forEach.call(els, fn, context);
  }
  // assume simple DOM element
  return fn.call(context, els);
};


/***/ }),

/***/ "./node_modules/pjax/lib/foreach-selectors.js":
/*!****************************************************!*\
  !*** ./node_modules/pjax/lib/foreach-selectors.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forEachEls = __webpack_require__(/*! ./foreach-els */ "./node_modules/pjax/lib/foreach-els.js");

module.exports = function(selectors, cb, context, DOMcontext) {
  DOMcontext = DOMcontext || document;
  selectors.forEach(function(selector) {
    forEachEls(DOMcontext.querySelectorAll(selector), cb, context);
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/is-supported.js":
/*!***********************************************!*\
  !*** ./node_modules/pjax/lib/is-supported.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
  // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
  return (
    window.history &&
    window.history.pushState &&
    window.history.replaceState &&
    // pushState isn’t reliable on iOS until 5.
    !navigator.userAgent.match(
      /((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/
    )
  );
};


/***/ }),

/***/ "./node_modules/pjax/lib/parse-options.js":
/*!************************************************!*\
  !*** ./node_modules/pjax/lib/parse-options.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global _gaq: true, ga: true */

var defaultSwitches = __webpack_require__(/*! ./switches */ "./node_modules/pjax/lib/switches.js");

module.exports = function(options) {
  options = options || {};
  options.elements = options.elements || "a[href], form[action]";
  options.selectors = options.selectors || ["title", ".js-Pjax"];
  options.switches = options.switches || {};
  options.switchesOptions = options.switchesOptions || {};
  options.history =
    typeof options.history === "undefined" ? true : options.history;
  options.analytics =
    typeof options.analytics === "function" || options.analytics === false
      ? options.analytics
      : defaultAnalytics;
  options.scrollTo =
    typeof options.scrollTo === "undefined" ? 0 : options.scrollTo;
  options.scrollRestoration =
    typeof options.scrollRestoration !== "undefined"
      ? options.scrollRestoration
      : true;
  options.cacheBust =
    typeof options.cacheBust === "undefined" ? true : options.cacheBust;
  options.debug = options.debug || false;
  options.timeout = options.timeout || 0;
  options.currentUrlFullReload =
    typeof options.currentUrlFullReload === "undefined"
      ? false
      : options.currentUrlFullReload;

  // We can’t replace body.outerHTML or head.outerHTML.
  // It creates a bug where a new body or head are created in the DOM.
  // If you set head.outerHTML, a new body tag is appended, so the DOM has 2 body nodes, and vice versa
  if (!options.switches.head) {
    options.switches.head = defaultSwitches.switchElementsAlt;
  }
  if (!options.switches.body) {
    options.switches.body = defaultSwitches.switchElementsAlt;
  }

  return options;
};

/* istanbul ignore next */
function defaultAnalytics() {
  if (window._gaq) {
    _gaq.push(["_trackPageview"]);
  }
  if (window.ga) {
    ga("send", "pageview", { page: location.pathname, title: document.title });
  }
}


/***/ }),

/***/ "./node_modules/pjax/lib/proto/attach-form.js":
/*!****************************************************!*\
  !*** ./node_modules/pjax/lib/proto/attach-form.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var on = __webpack_require__(/*! ../events/on */ "./node_modules/pjax/lib/events/on.js");
var clone = __webpack_require__(/*! ../util/clone */ "./node_modules/pjax/lib/util/clone.js");

var attrState = "data-pjax-state";

var formAction = function(el, event) {
  if (isDefaultPrevented(event)) {
    return;
  }

  // Since loadUrl modifies options and we may add our own modifications below,
  // clone it so the changes don't persist
  var options = clone(this.options);

  // Initialize requestOptions
  options.requestOptions = {
    requestUrl: el.getAttribute("action") || window.location.href,
    requestMethod: el.getAttribute("method") || "GET"
  };

  // create a testable virtual link of the form action
  var virtLinkElement = document.createElement("a");
  virtLinkElement.setAttribute("href", options.requestOptions.requestUrl);

  var attrValue = checkIfShouldAbort(virtLinkElement, options);
  if (attrValue) {
    el.setAttribute(attrState, attrValue);
    return;
  }

  event.preventDefault();

  if (el.enctype === "multipart/form-data") {
    options.requestOptions.formData = new FormData(el);
  } else {
    options.requestOptions.requestParams = parseFormElements(el);
  }

  el.setAttribute(attrState, "submit");

  options.triggerElement = el;
  this.loadUrl(virtLinkElement.href, options);
};

function parseFormElements(el) {
  var requestParams = [];
  var formElements = el.elements;

  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];
    var tagName = element.tagName.toLowerCase();
    // jscs:disable disallowImplicitTypeConversion
    if (
      !!element.name &&
      element.attributes !== undefined &&
      tagName !== "button"
    ) {
      // jscs:enable disallowImplicitTypeConversion
      var type = element.attributes.type;

      if (
        !type ||
        (type.value !== "checkbox" && type.value !== "radio") ||
        element.checked
      ) {
        // Build array of values to submit
        var values = [];

        if (tagName === "select") {
          var opt;

          for (var j = 0; j < element.options.length; j++) {
            opt = element.options[j];
            if (opt.selected && !opt.disabled) {
              values.push(opt.hasAttribute("value") ? opt.value : opt.text);
            }
          }
        } else {
          values.push(element.value);
        }

        for (var k = 0; k < values.length; k++) {
          requestParams.push({
            name: encodeURIComponent(element.name),
            value: encodeURIComponent(values[k])
          });
        }
      }
    }
  }

  return requestParams;
}

function checkIfShouldAbort(virtLinkElement, options) {
  // Ignore external links.
  if (
    virtLinkElement.protocol !== window.location.protocol ||
    virtLinkElement.host !== window.location.host
  ) {
    return "external";
  }

  // Ignore click if we are on an anchor on the same page
  if (
    virtLinkElement.hash &&
    virtLinkElement.href.replace(virtLinkElement.hash, "") ===
      window.location.href.replace(location.hash, "")
  ) {
    return "anchor";
  }

  // Ignore empty anchor "foo.html#"
  if (virtLinkElement.href === window.location.href.split("#")[0] + "#") {
    return "anchor-empty";
  }

  // if declared as a full reload, just normally submit the form
  if (
    options.currentUrlFullReload &&
    virtLinkElement.href === window.location.href.split("#")[0]
  ) {
    return "reload";
  }
}

var isDefaultPrevented = function(event) {
  return event.defaultPrevented || event.returnValue === false;
};

module.exports = function(el) {
  var that = this;

  el.setAttribute(attrState, "");

  on(el, "submit", function(event) {
    formAction.call(that, el, event);
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/proto/attach-link.js":
/*!****************************************************!*\
  !*** ./node_modules/pjax/lib/proto/attach-link.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var on = __webpack_require__(/*! ../events/on */ "./node_modules/pjax/lib/events/on.js");
var clone = __webpack_require__(/*! ../util/clone */ "./node_modules/pjax/lib/util/clone.js");

var attrState = "data-pjax-state";

var linkAction = function(el, event) {
  if (isDefaultPrevented(event)) {
    return;
  }

  // Since loadUrl modifies options and we may add our own modifications below,
  // clone it so the changes don't persist
  var options = clone(this.options);

  var attrValue = checkIfShouldAbort(el, event);
  if (attrValue) {
    el.setAttribute(attrState, attrValue);
    return;
  }

  event.preventDefault();

  // don’t do "nothing" if user try to reload the page by clicking the same link twice
  if (
    this.options.currentUrlFullReload &&
    el.href === window.location.href.split("#")[0]
  ) {
    el.setAttribute(attrState, "reload");
    this.reload();
    return;
  }

  el.setAttribute(attrState, "load");

  options.triggerElement = el;
  this.loadUrl(el.href, options);
};

function checkIfShouldAbort(el, event) {
  // Don’t break browser special behavior on links (like page in new window)
  if (
    event.which > 1 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return "modifier";
  }

  // we do test on href now to prevent unexpected behavior if for some reason
  // user have href that can be dynamically updated

  // Ignore external links.
  if (
    el.protocol !== window.location.protocol ||
    el.host !== window.location.host
  ) {
    return "external";
  }

  // Ignore anchors on the same page (keep native behavior)
  if (
    el.hash &&
    el.href.replace(el.hash, "") ===
      window.location.href.replace(location.hash, "")
  ) {
    return "anchor";
  }

  // Ignore empty anchor "foo.html#"
  if (el.href === window.location.href.split("#")[0] + "#") {
    return "anchor-empty";
  }
}

var isDefaultPrevented = function(event) {
  return event.defaultPrevented || event.returnValue === false;
};

module.exports = function(el) {
  var that = this;

  el.setAttribute(attrState, "");

  on(el, "click", function(event) {
    linkAction.call(that, el, event);
  });

  on(
    el,
    "keyup",
    function(event) {
      if (event.keyCode === 13) {
        linkAction.call(that, el, event);
      }
    }.bind(this)
  );
};


/***/ }),

/***/ "./node_modules/pjax/lib/proto/handle-response.js":
/*!********************************************************!*\
  !*** ./node_modules/pjax/lib/proto/handle-response.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var clone = __webpack_require__(/*! ../util/clone */ "./node_modules/pjax/lib/util/clone.js");
var newUid = __webpack_require__(/*! ../uniqueid */ "./node_modules/pjax/lib/uniqueid.js");
var trigger = __webpack_require__(/*! ../events/trigger */ "./node_modules/pjax/lib/events/trigger.js");

module.exports = function(responseText, request, href, options) {
  options = clone(options || this.options);
  options.request = request;

  // Fail if unable to load HTML via AJAX
  if (responseText === false) {
    trigger(document, "pjax:complete pjax:error", options);

    return;
  }

  // push scroll position to history
  var currentState = window.history.state || {};
  window.history.replaceState(
    {
      url: currentState.url || window.location.href,
      title: currentState.title || document.title,
      uid: currentState.uid || newUid(),
      scrollPos: [
        document.documentElement.scrollLeft || document.body.scrollLeft,
        document.documentElement.scrollTop || document.body.scrollTop
      ]
    },
    document.title,
    window.location.href
  );

  // Check for redirects
  var oldHref = href;
  if (request.responseURL) {
    if (href !== request.responseURL) {
      href = request.responseURL;
    }
  } else if (request.getResponseHeader("X-PJAX-URL")) {
    href = request.getResponseHeader("X-PJAX-URL");
  } else if (request.getResponseHeader("X-XHR-Redirected-To")) {
    href = request.getResponseHeader("X-XHR-Redirected-To");
  }

  // Add back the hash if it was removed
  var a = document.createElement("a");
  a.href = oldHref;
  var oldHash = a.hash;
  a.href = href;
  if (oldHash && !a.hash) {
    a.hash = oldHash;
    href = a.href;
  }

  this.state.href = href;
  this.state.options = options;

  try {
    this.loadContent(responseText, options);
  } catch (e) {
    trigger(document, "pjax:error", options);

    if (!this.options.debug) {
      if (console && console.error) {
        console.error("Pjax switch fail: ", e);
      }
      return this.latestChance(href);
    } else {
      throw e;
    }
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/proto/log.js":
/*!********************************************!*\
  !*** ./node_modules/pjax/lib/proto/log.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
  if (this.options.debug && console) {
    if (typeof console.log === "function") {
      console.log.apply(console, arguments);
    }
    // IE is weird
    else if (console.log) {
      console.log(arguments);
    }
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/proto/parse-element.js":
/*!******************************************************!*\
  !*** ./node_modules/pjax/lib/proto/parse-element.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var attrState = "data-pjax-state";

module.exports = function(el) {
  switch (el.tagName.toLowerCase()) {
    case "a":
      // only attach link if el does not already have link attached
      if (!el.hasAttribute(attrState)) {
        this.attachLink(el);
      }
      break;

    case "form":
      // only attach link if el does not already have link attached
      if (!el.hasAttribute(attrState)) {
        this.attachForm(el);
      }
      break;

    default:
      throw "Pjax can only be applied on <a> or <form> submit";
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/send-request.js":
/*!***********************************************!*\
  !*** ./node_modules/pjax/lib/send-request.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var updateQueryString = __webpack_require__(/*! ./util/update-query-string */ "./node_modules/pjax/lib/util/update-query-string.js");

module.exports = function(location, options, callback) {
  options = options || {};
  var queryString;
  var requestOptions = options.requestOptions || {};
  var requestMethod = (requestOptions.requestMethod || "GET").toUpperCase();
  var requestParams = requestOptions.requestParams || null;
  var formData = requestOptions.formData || null;
  var requestPayload = null;
  var request = new XMLHttpRequest();
  var timeout = options.timeout || 0;

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(request.responseText, request, location, options);
      } else if (request.status !== 0) {
        callback(null, request, location, options);
      }
    }
  };

  request.onerror = function(e) {
    console.log(e);
    callback(null, request, location, options);
  };

  request.ontimeout = function() {
    callback(null, request, location, options);
  };

  // Prepare the request payload for forms, if available
  if (requestParams && requestParams.length) {
    // Build query string
    queryString = requestParams
      .map(function(param) {
        return param.name + "=" + param.value;
      })
      .join("&");

    switch (requestMethod) {
      case "GET":
        // Reset query string to avoid an issue with repeat submissions where checkboxes that were
        // previously checked are incorrectly preserved
        location = location.split("?")[0];

        // Append new query string
        location += "?" + queryString;
        break;

      case "POST":
        // Send query string as request payload
        requestPayload = queryString;
        break;
    }
  } else if (formData) {
    requestPayload = formData;
  }

  // Add a timestamp as part of the query string if cache busting is enabled
  if (options.cacheBust) {
    location = updateQueryString(location, "t", Date.now());
  }

  request.open(requestMethod, location, true);
  request.timeout = timeout;
  request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  request.setRequestHeader("X-PJAX", "true");
  request.setRequestHeader(
    "X-PJAX-Selectors",
    JSON.stringify(options.selectors)
  );

  // Send the proper header information for POST forms
  if (requestPayload && requestMethod === "POST" && !formData) {
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
  }

  request.send(requestPayload);

  return request;
};


/***/ }),

/***/ "./node_modules/pjax/lib/switches-selectors.js":
/*!*****************************************************!*\
  !*** ./node_modules/pjax/lib/switches-selectors.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forEachEls = __webpack_require__(/*! ./foreach-els */ "./node_modules/pjax/lib/foreach-els.js");

var defaultSwitches = __webpack_require__(/*! ./switches */ "./node_modules/pjax/lib/switches.js");

module.exports = function(
  switches,
  switchesOptions,
  selectors,
  fromEl,
  toEl,
  options
) {
  var switchesQueue = [];

  selectors.forEach(function(selector) {
    var newEls = fromEl.querySelectorAll(selector);
    var oldEls = toEl.querySelectorAll(selector);
    if (this.log) {
      this.log("Pjax switch", selector, newEls, oldEls);
    }
    if (newEls.length !== oldEls.length) {
      throw "DOM doesn’t look the same on new loaded page: ’" +
        selector +
        "’ - new " +
        newEls.length +
        ", old " +
        oldEls.length;
    }

    forEachEls(
      newEls,
      function(newEl, i) {
        var oldEl = oldEls[i];
        if (this.log) {
          this.log("newEl", newEl, "oldEl", oldEl);
        }

        var callback = switches[selector]
          ? switches[selector].bind(
              this,
              oldEl,
              newEl,
              options,
              switchesOptions[selector]
            )
          : defaultSwitches.outerHTML.bind(this, oldEl, newEl, options);

        switchesQueue.push(callback);
      },
      this
    );
  }, this);

  this.state.numPendingSwitches = switchesQueue.length;

  switchesQueue.forEach(function(queuedSwitch) {
    queuedSwitch();
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/switches.js":
/*!*******************************************!*\
  !*** ./node_modules/pjax/lib/switches.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var on = __webpack_require__(/*! ./events/on */ "./node_modules/pjax/lib/events/on.js");

module.exports = {
  outerHTML: function(oldEl, newEl) {
    oldEl.outerHTML = newEl.outerHTML;
    this.onSwitch();
  },

  innerHTML: function(oldEl, newEl) {
    oldEl.innerHTML = newEl.innerHTML;

    if (newEl.className === "") {
      oldEl.removeAttribute("class");
    } else {
      oldEl.className = newEl.className;
    }

    this.onSwitch();
  },

  switchElementsAlt: function(oldEl, newEl) {
    oldEl.innerHTML = newEl.innerHTML;

    // Copy attributes from the new element to the old one
    if (newEl.hasAttributes()) {
      var attrs = newEl.attributes;
      for (var i = 0; i < attrs.length; i++) {
        oldEl.attributes.setNamedItem(attrs[i].cloneNode());
      }
    }

    this.onSwitch();
  },

  // Equivalent to outerHTML(), but doesn't require switchElementsAlt() for <head> and <body>
  replaceNode: function(oldEl, newEl) {
    oldEl.parentNode.replaceChild(newEl, oldEl);
    this.onSwitch();
  },

  sideBySide: function(oldEl, newEl, options, switchOptions) {
    var forEach = Array.prototype.forEach;
    var elsToRemove = [];
    var elsToAdd = [];
    var fragToAppend = document.createDocumentFragment();
    var animationEventNames =
      "animationend webkitAnimationEnd MSAnimationEnd oanimationend";
    var animatedElsNumber = 0;
    var sexyAnimationEnd = function(e) {
      if (e.target !== e.currentTarget) {
        // end triggered by an animation on a child
        return;
      }

      animatedElsNumber--;
      if (animatedElsNumber <= 0 && elsToRemove) {
        elsToRemove.forEach(function(el) {
          // browsing quickly can make the el
          // already removed by last page update ?
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });

        elsToAdd.forEach(function(el) {
          el.className = el.className.replace(
            el.getAttribute("data-pjax-classes"),
            ""
          );
          el.removeAttribute("data-pjax-classes");
        });

        elsToAdd = null; // free memory
        elsToRemove = null; // free memory

        // this is to trigger some repaint (example: picturefill)
        this.onSwitch();
      }
    }.bind(this);

    switchOptions = switchOptions || {};

    forEach.call(oldEl.childNodes, function(el) {
      elsToRemove.push(el);
      if (el.classList && !el.classList.contains("js-Pjax-remove")) {
        // for fast switch, clean element that just have been added, & not cleaned yet.
        if (el.hasAttribute("data-pjax-classes")) {
          el.className = el.className.replace(
            el.getAttribute("data-pjax-classes"),
            ""
          );
          el.removeAttribute("data-pjax-classes");
        }
        el.classList.add("js-Pjax-remove");
        if (switchOptions.callbacks && switchOptions.callbacks.removeElement) {
          switchOptions.callbacks.removeElement(el);
        }
        if (switchOptions.classNames) {
          el.className +=
            " " +
            switchOptions.classNames.remove +
            " " +
            (options.backward
              ? switchOptions.classNames.backward
              : switchOptions.classNames.forward);
        }
        animatedElsNumber++;
        on(el, animationEventNames, sexyAnimationEnd, true);
      }
    });

    forEach.call(newEl.childNodes, function(el) {
      if (el.classList) {
        var addClasses = "";
        if (switchOptions.classNames) {
          addClasses =
            " js-Pjax-add " +
            switchOptions.classNames.add +
            " " +
            (options.backward
              ? switchOptions.classNames.forward
              : switchOptions.classNames.backward);
        }
        if (switchOptions.callbacks && switchOptions.callbacks.addElement) {
          switchOptions.callbacks.addElement(el);
        }
        el.className += addClasses;
        el.setAttribute("data-pjax-classes", addClasses);
        elsToAdd.push(el);
        fragToAppend.appendChild(el);
        animatedElsNumber++;
        on(el, animationEventNames, sexyAnimationEnd, true);
      }
    });

    // pass all className of the parent
    oldEl.className = newEl.className;
    oldEl.appendChild(fragToAppend);
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/uniqueid.js":
/*!*******************************************!*\
  !*** ./node_modules/pjax/lib/uniqueid.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function() {
  var counter = 0;
  return function() {
    var id = "pjax" + new Date().getTime() + "_" + counter;
    counter++;
    return id;
  };
})();


/***/ }),

/***/ "./node_modules/pjax/lib/util/clone.js":
/*!*********************************************!*\
  !*** ./node_modules/pjax/lib/util/clone.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
  /* istanbul ignore if */
  if (null === obj || "object" !== typeof obj) {
    return obj;
  }
  var copy = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = obj[attr];
    }
  }
  return copy;
};


/***/ }),

/***/ "./node_modules/pjax/lib/util/contains.js":
/*!************************************************!*\
  !*** ./node_modules/pjax/lib/util/contains.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function contains(doc, selectors, el) {
  for (var i = 0; i < selectors.length; i++) {
    var selectedEls = doc.querySelectorAll(selectors[i]);
    for (var j = 0; j < selectedEls.length; j++) {
      if (selectedEls[j].contains(el)) {
        return true;
      }
    }
  }

  return false;
};


/***/ }),

/***/ "./node_modules/pjax/lib/util/extend.js":
/*!**********************************************!*\
  !*** ./node_modules/pjax/lib/util/extend.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(target) {
  if (target == null) {
    return null;
  }

  var to = Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    if (source != null) {
      for (var key in source) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          to[key] = source[key];
        }
      }
    }
  }
  return to;
};


/***/ }),

/***/ "./node_modules/pjax/lib/util/noop.js":
/*!********************************************!*\
  !*** ./node_modules/pjax/lib/util/noop.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {};


/***/ }),

/***/ "./node_modules/pjax/lib/util/update-query-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/pjax/lib/util/update-query-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./css/bundle.css";

/***/ }),

/***/ "./src/ts/components/mdcConf.ts":
/*!**************************************!*\
  !*** ./src/ts/components/mdcConf.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/index.js");
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/top-app-bar */ "./node_modules/@material/top-app-bar/index.js");
/**
 * Copyright 2019 Mashiro
 * @description material-components initial configuration
 * @author Mashiro
 * @license MIT
 */



const Conf = [['.mdc-top-app-bar', _material_top_app_bar__WEBPACK_IMPORTED_MODULE_2__["MDCTopAppBar"]], ['.mdc-text-field', _material_textfield__WEBPACK_IMPORTED_MODULE_1__["MDCTextField"]], [['.mdc-button', '.primary-action'], _material_ripple__WEBPACK_IMPORTED_MODULE_0__["MDCRipple"]]];
/* harmony default export */ __webpack_exports__["default"] = (Conf);

/***/ }),

/***/ "./src/ts/components/mdcInit.ts":
/*!**************************************!*\
  !*** ./src/ts/components/mdcInit.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdcConf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mdcConf */ "./src/ts/components/mdcConf.ts");
/**
 * Copyright 2019 Mashiro
 * @description material-components initial handler
 * @author Mashiro
 * @license MIT
 */

const Conf = _mdcConf__WEBPACK_IMPORTED_MODULE_0__["default"];
/** 
 * Initial [material-components-web](https://github.com/material-components/material-components-web/) 
 * through configuration in `mdcConf.ts``.
 * See <https://git.io/JegHJ>
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  let components = [];

  for (const i of Conf) {
    if (typeof i[0] == 'string') {
      const component = i[0];
      const constructor = i[1];
      components.map.call(document.querySelectorAll(component), function (e) {
        return new constructor(e);
      });
    } else if (typeof i[0] == 'object') {
      const component = i[0].join(',');
      const constructor = i[1];
      components.map.call(document.querySelectorAll(component), function (e) {
        return new constructor(e);
      });
    }
  }
});

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_coverImgInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/coverImgInit */ "./src/ts/modules/coverImgInit.ts");
/* harmony import */ var _modules_headerBarScrollHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/headerBarScrollHandler */ "./src/ts/modules/headerBarScrollHandler.ts");
/* harmony import */ var _components_mdcInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mdcInit */ "./src/ts/components/mdcInit.ts");
/* harmony import */ var pjax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pjax */ "./node_modules/pjax/index.js");
/* harmony import */ var pjax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pjax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_hexFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/hexFilter */ "./src/ts/modules/hexFilter.ts");
/* harmony import */ var _modules_rgb2hex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/rgb2hex */ "./src/ts/modules/rgb2hex.ts");
/**
 * Copyright 2019 Mashiro
 * @description Main
 * @author Mashiro
 * @license MIT
 */







window.onscroll = function () {
  Object(_modules_headerBarScrollHandler__WEBPACK_IMPORTED_MODULE_1__["default"])();
}; // TODO: global configuration
// TODO: transparent before calculation been done!


let themePrimaryColor = Object(_modules_rgb2hex__WEBPACK_IMPORTED_MODULE_5__["default"])(getComputedStyle(document.querySelector('footer')).backgroundColor);
let themeColorFilter = Object(_modules_hexFilter__WEBPACK_IMPORTED_MODULE_4__["default"])(themePrimaryColor);

let InitFun = function () {
  Object(_modules_coverImgInit__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_components_mdcInit__WEBPACK_IMPORTED_MODULE_2__["default"])();
  let footerBefore = document.querySelector("#footer-before");

  if (typeof footerBefore !== 'undefined' && footerBefore !== null) {
    // TODO: set theme color function!
    footerBefore.style.filter = themeColorFilter;
  }
};

window.onload = function () {
  InitFun();
  let pjax = new pjax__WEBPACK_IMPORTED_MODULE_3___default.a({
    elements: "a",
    // default is "a[href], form[action]"
    selectors: ["title", "#root"],
    cacheBust: true
  });

  function pjaxReload() {
    // console.log('pjax:complete')
    if (window.location.pathname == "/") {
      console.log(`home!`);
    } else {
      console.log(`not home!`);
    }

    InitFun();
  }

  document.addEventListener('pjax:complete', pjaxReload);
};

/***/ }),

/***/ "./src/ts/modules/coverImgInit.ts":
/*!****************************************!*\
  !*** ./src/ts/modules/coverImgInit.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright 2019 Mashiro
 * @description Sakura theme module
 * @author Mashiro
 * @license MIT
 */

/**
 * Initial index cover image and image box.
 * Include Parallax box initial and `#cover-img-container` size initial.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  let headerTopAfter = document.querySelector("#header-top-after");

  if (typeof headerTopAfter !== 'undefined' && headerTopAfter !== null) {
    headerTopAfter.style.height = `${window.innerHeight}px`;
  }

  let coverImgContainer = document.querySelector("#cover-img-container");

  if (typeof coverImgContainer !== 'undefined' && coverImgContainer !== null) {
    coverImgContainer.style.height = `${window.innerHeight}px`;

    /**
     * cover: `img#cover-img`
     */
    let coverImg = {};
    /**
     * mark: `figure#cover-img-container`
     */

    let coverBox = {};
    /**
     * layer: `div#img-view`
     */

    let coverView = {};
    coverImg.e = document.querySelector("#cover-img");
    coverImg.w = coverImg.e.naturalWidth;
    coverImg.h = coverImg.e.naturalHeight;
    coverBox.e = document.querySelector("#cover-img-container");
    coverBox.w = coverBox.e.offsetWidth;
    coverBox.h = coverBox.e.offsetHeight;
    coverView.e = document.querySelector("#img-view");
    coverBox.e.style.height = `${window.innerHeight}px`;
    coverBox.f = coverBox.w >= 1000 || coverBox.h >= 1000 ? 1000 : 500;

    if (coverBox.w >= coverBox.h) {
      coverBox.i = coverBox.w / coverBox.f * 50;
      coverBox.y = coverBox.i;
      coverBox.x = coverBox.i * coverBox.w / coverBox.h;
    } else {
      coverBox.i = coverBox.h / coverBox.f * 50;
      coverBox.x = coverBox.i;
      coverBox.y = coverBox.i * coverBox.h / coverBox.w;
    }

    coverView.e.style.cssText = `
        width: ${coverBox.w + coverBox.x}px; 
        height: ${coverBox.h + coverBox.y}px; 
        margin-left: ${-0.5 * coverBox.x}px; 
        margin-top: ${-0.5 * coverBox.y}px`;
    coverImg.e.style.cssText = `
        width: ${coverView.w + coverView.x}px;
        height: ${coverView.h + coverView.y}px`;

    if (!coverImg.w) {
      coverImg.w = coverImg.e.offsetWidth;
      coverImg.h = coverImg.e.offsetHeight;
    }

    coverImg._w = coverImg.e.parentElement.offsetWidth;
    coverImg._h = coverImg.e.parentElement.offsetHeight;
    coverImg.ratio = coverImg.h / coverImg.w;

    if (coverImg._h / coverImg._w > coverImg.ratio) {
      coverImg.e.style.height = coverImg._h + 'px';
      coverImg.e.style.width = coverImg._h / coverImg.ratio + 'px';
    } else {
      coverImg.e.style.width = coverImg._w + 'px';
      coverImg.e.style.height = coverImg._w * coverImg.ratio + 'px';
    }

    coverImg.e.style.left = (coverImg._w - parseInt(coverImg.e.style.width)) / 2 + 'px';
    coverImg.e.style.top = (coverImg._h - parseInt(coverImg.e.style.height)) / 2 + 'px';
    let scene = document.querySelector('#cover-img-container');
    let parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene);
  }
});

/***/ }),

/***/ "./src/ts/modules/headerBarScrollHandler.ts":
/*!**************************************************!*\
  !*** ./src/ts/modules/headerBarScrollHandler.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollDirection */ "./src/ts/modules/scrollDirection.ts");
/**
 * @description Sakura theme module
 * @author Mashiro
 * @since 19/10/31
 * @license MIT
 */

/**
 * Site top bar handler when page scroll
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  let ele = document.querySelector("#nav-header");

  if (Object(_scrollDirection__WEBPACK_IMPORTED_MODULE_0__["default"])('y') == 'down') {
    ele.style.top = `-120px`;
  } else if (Object(_scrollDirection__WEBPACK_IMPORTED_MODULE_0__["default"])('y') == 'up') {
    ele.style.top = `0px`;
  }
});

/***/ }),

/***/ "./src/ts/modules/hexFilter.ts":
/*!*************************************!*\
  !*** ./src/ts/modules/hexFilter.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @description CSS hex filter (https://codepen.io/sosuke/pen/Pjoqqp)
 * @license MIT
 */
class Color {
  constructor(r, g, b) {
    this.set(r, g, b);
  }

  toString() {
    return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
  }

  set(r, g, b) {
    this.r = this.clamp(r);
    this.g = this.clamp(g);
    this.b = this.clamp(b);
  }

  hueRotate(angle = 0) {
    angle = angle / 180 * Math.PI;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    this.multiply([0.213 + cos * 0.787 - sin * 0.213, 0.715 - cos * 0.715 - sin * 0.715, 0.072 - cos * 0.072 + sin * 0.928, 0.213 - cos * 0.213 + sin * 0.143, 0.715 + cos * 0.285 + sin * 0.140, 0.072 - cos * 0.072 - sin * 0.283, 0.213 - cos * 0.213 - sin * 0.787, 0.715 - cos * 0.715 + sin * 0.715, 0.072 + cos * 0.928 + sin * 0.072]);
  }

  grayscale(value = 1) {
    this.multiply([0.2126 + 0.7874 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 - 0.0722 * (1 - value), 0.2126 - 0.2126 * (1 - value), 0.7152 + 0.2848 * (1 - value), 0.0722 - 0.0722 * (1 - value), 0.2126 - 0.2126 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 + 0.9278 * (1 - value)]);
  }

  sepia(value = 1) {
    this.multiply([0.393 + 0.607 * (1 - value), 0.769 - 0.769 * (1 - value), 0.189 - 0.189 * (1 - value), 0.349 - 0.349 * (1 - value), 0.686 + 0.314 * (1 - value), 0.168 - 0.168 * (1 - value), 0.272 - 0.272 * (1 - value), 0.534 - 0.534 * (1 - value), 0.131 + 0.869 * (1 - value)]);
  }

  saturate(value = 1) {
    this.multiply([0.213 + 0.787 * value, 0.715 - 0.715 * value, 0.072 - 0.072 * value, 0.213 - 0.213 * value, 0.715 + 0.285 * value, 0.072 - 0.072 * value, 0.213 - 0.213 * value, 0.715 - 0.715 * value, 0.072 + 0.928 * value]);
  }

  multiply(matrix) {
    const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
    const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
    const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
    this.r = newR;
    this.g = newG;
    this.b = newB;
  }

  brightness(value = 1) {
    this.linear(value);
  }

  contrast(value = 1) {
    this.linear(value, -(0.5 * value) + 0.5);
  }

  linear(slope = 1, intercept = 0) {
    this.r = this.clamp(this.r * slope + intercept * 255);
    this.g = this.clamp(this.g * slope + intercept * 255);
    this.b = this.clamp(this.b * slope + intercept * 255);
  }

  invert(value = 1) {
    this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
    this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
    this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
  }

  hsl() {
    // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
        s,
        l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h * 100,
      s: s * 100,
      l: l * 100
    };
  }

  clamp(value) {
    if (value > 255) {
      value = 255;
    } else if (value < 0) {
      value = 0;
    }

    return value;
  }

}

class Solver {
  constructor(target, baseColor) {
    this.target = target;
    this.targetHSL = target.hsl();
    this.reusedColor = new Color(0, 0, 0);
  }

  solve() {
    const result = this.solveNarrow(this.solveWide());
    return {
      values: result.values,
      loss: result.loss,
      filter: this.css(result.values)
    };
  }

  solveWide() {
    const A = 5;
    const c = 15;
    const a = [60, 180, 18000, 600, 1.2, 1.2];
    let best = {
      loss: Infinity
    };

    for (let i = 0; best.loss > 25 && i < 3; i++) {
      const initial = [50, 20, 3750, 50, 100, 100];
      const result = this.spsa(A, a, c, initial, 1000);

      if (result.loss < best.loss) {
        best = result;
      }
    }

    return best;
  }

  solveNarrow(wide) {
    const A = wide.loss;
    const c = 2;
    const A1 = A + 1;
    const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
    return this.spsa(A, a, c, wide.values, 500);
  }

  spsa(A, a, c, values, iters) {
    const alpha = 1;
    const gamma = 0.16666666666666666;
    let best = null;
    let bestLoss = Infinity;
    const deltas = new Array(6);
    const highArgs = new Array(6);
    const lowArgs = new Array(6);

    for (let k = 0; k < iters; k++) {
      const ck = c / Math.pow(k + 1, gamma);

      for (let i = 0; i < 6; i++) {
        deltas[i] = Math.random() > 0.5 ? 1 : -1;
        highArgs[i] = values[i] + ck * deltas[i];
        lowArgs[i] = values[i] - ck * deltas[i];
      }

      const lossDiff = this.loss(highArgs) - this.loss(lowArgs);

      for (let i = 0; i < 6; i++) {
        const g = lossDiff / (2 * ck) * deltas[i];
        const ak = a[i] / Math.pow(A + k + 1, alpha);
        values[i] = fix(values[i] - ak * g, i);
      }

      const loss = this.loss(values);

      if (loss < bestLoss) {
        best = values.slice(0);
        bestLoss = loss;
      }
    }

    return {
      values: best,
      loss: bestLoss
    };

    function fix(value, idx) {
      let max = 100;

      if (idx === 2
      /* saturate */
      ) {
          max = 7500;
        } else if (idx === 4
      /* brightness */
      || idx === 5
      /* contrast */
      ) {
          max = 200;
        }

      if (idx === 3
      /* hue-rotate */
      ) {
          if (value > max) {
            value %= max;
          } else if (value < 0) {
            value = max + value % max;
          }
        } else if (value < 0) {
        value = 0;
      } else if (value > max) {
        value = max;
      }

      return value;
    }
  }

  loss(filters) {
    // Argument is array of percentages.
    const color = this.reusedColor;
    color.set(0, 0, 0);
    color.invert(filters[0] / 100);
    color.sepia(filters[1] / 100);
    color.saturate(filters[2] / 100);
    color.hueRotate(filters[3] * 3.6);
    color.brightness(filters[4] / 100);
    color.contrast(filters[5] / 100);
    const colorHSL = color.hsl();
    return Math.abs(color.r - this.target.r) + Math.abs(color.g - this.target.g) + Math.abs(color.b - this.target.b) + Math.abs(colorHSL.h - this.targetHSL.h) + Math.abs(colorHSL.s - this.targetHSL.s) + Math.abs(colorHSL.l - this.targetHSL.l);
  }

  css(filters) {
    function fmt(idx, multiplier = 1) {
      return Math.round(filters[idx] * multiplier);
    }

    return `invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%)`;
  }

}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}
/**
 * Convert #000 background to any color. 
 * Iuput a hex triplet and return filter.
 * 
 * Usage: 
 * ```js
 * document.querySelector('#icon').style.filter = getHexFilter('#1a263d');
 * ```
 *  If your icon set isn't black you can prepend "brightness(0) saturate(100%)" to your filter property which will first turn the icon set to black.
 * 
 * @param  {string}     hex     Hex triplet, eg: `'#1a263d'`, `#fff`
 * @return {string}             CSS filter
 */


/* harmony default export */ __webpack_exports__["default"] = (function (hex = '#1a263d') {
  const rgb = hexToRgb(hex);

  if (rgb.length !== 3) {
    console.log('Invalid format!');
    return;
  }

  const color = new Color(rgb[0], rgb[1], rgb[2]);
  const solver = new Solver(color);
  const result = solver.solve();
  let lossMsg;

  if (result.loss < 1) {
    lossMsg = 'This is a perfect result.';
  } else if (result.loss < 5) {
    lossMsg = 'The is close enough.';
  } else if (result.loss < 15) {
    lossMsg = 'The color is somewhat off. Consider running it again.';
  } else {
    lossMsg = 'The color is extremely off. Run it again!';
  }

  return `brightness(0) saturate(100%) ${result.filter}`;
});

/***/ }),

/***/ "./src/ts/modules/rgb2hex.ts":
/*!***********************************!*\
  !*** ./src/ts/modules/rgb2hex.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rgb2hex; });
/**
 * Function to convert hex format to a rgb color
 * @param   {string}    rgb the rgb string, eg. `rgb(252, 184, 171)` or `rgba(252, 184, 171, 1)`
 * @return  {string}        the hex triplet, eg. `#fcb8ab`
 */
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

/***/ }),

/***/ "./src/ts/modules/scrollDirection.ts":
/*!*******************************************!*\
  !*** ./src/ts/modules/scrollDirection.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @description Sakura theme module
 * @author Mashiro
 * @since 19/10/31
 * @license MIT
 */
let scrollAction = {
  x: undefined,
  y: undefined,
  d: undefined
};
/**
 * Detect window scroll direction
 * @param  {string}  direction  option: `Y`/`y` - horizontal; `X`/`x` - vertical
 * @return {string}             return window scroll direction
 */

/* harmony default export */ __webpack_exports__["default"] = (function (direction) {
  if (scrollAction.x == undefined) {
    scrollAction.x = window.pageXOffset;
    scrollAction.y = window.pageYOffset;
  }

  let diffX = scrollAction.x - window.pageXOffset;
  let diffY = scrollAction.y - window.pageYOffset;

  if (direction == 'x' || direction == 'X') {
    if (diffX < 0) {
      scrollAction.d = 'right';
    } else if (diffX > 0) {
      scrollAction.d = 'left';
    }
  } else {
    if (diffY < 0) {
      scrollAction.d = 'down';
    } else if (diffY > 0) {
      scrollAction.d = 'up';
    }
  }

  scrollAction.x = window.pageXOffset;
  scrollAction.y = window.pageYOffset;
  return scrollAction.d;
});

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/ts/index.ts ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/ts/index.ts */"./src/ts/index.ts");
module.exports = __webpack_require__(/*! ./src/scss/index.scss */"./src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvY2hhcmFjdGVyLWNvdW50ZXIvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NoYXJhY3Rlci1jb3VudGVyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jaGFyYWN0ZXItY291bnRlci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NoYXJhY3Rlci1jb3VudGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9maXhlZC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvc2hvcnQvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL3N0YW5kYXJkL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcmFsbGF4LWpzL2Rpc3QvcGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2Fib3J0LXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2V2YWwtc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9ldmVudHMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2V2ZW50cy90cmlnZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9leGVjdXRlLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2ZvcmVhY2gtZWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9mb3JlYWNoLXNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvaXMtc3VwcG9ydGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wcm90by9hdHRhY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvcHJvdG8vYXR0YWNoLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3Byb3RvL2hhbmRsZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvcHJvdG8vbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wcm90by9wYXJzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9zZW5kLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3N3aXRjaGVzLXNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvc3dpdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3VuaXF1ZWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvdXRpbC9ub29wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL3VwZGF0ZS1xdWVyeS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvbWRjQ29uZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9tZGNJbml0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9kdWxlcy9jb3ZlckltZ0luaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vZHVsZXMvaGVhZGVyQmFyU2Nyb2xsSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9kdWxlcy9oZXhGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vZHVsZXMvcmdiMmhleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9kdWxlcy9zY3JvbGxEaXJlY3Rpb24udHMiXSwibmFtZXMiOlsiQ29uZiIsIk1EQ1RvcEFwcEJhciIsIk1EQ1RleHRGaWVsZCIsIk1EQ1JpcHBsZSIsIm1kY0NvbmYiLCJjb21wb25lbnRzIiwiaSIsImNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwibWFwIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImUiLCJqb2luIiwid2luZG93Iiwib25zY3JvbGwiLCJoZWFkZXJCYXJTY3JvbGxIYW5kbGVyIiwidGhlbWVQcmltYXJ5Q29sb3IiLCJyZ2IyaGV4IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZUNvbG9yRmlsdGVyIiwiZ2V0SGV4RmlsdGVyIiwiSW5pdEZ1biIsImNvdmVySW1nSW5pIiwibWRjSW5pdCIsImZvb3RlckJlZm9yZSIsInN0eWxlIiwiZmlsdGVyIiwib25sb2FkIiwicGpheCIsIlBqYXgiLCJlbGVtZW50cyIsInNlbGVjdG9ycyIsImNhY2hlQnVzdCIsInBqYXhSZWxvYWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWFkZXJUb3BBZnRlciIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY292ZXJJbWdDb250YWluZXIiLCJjb3ZlckltZyIsImNvdmVyQm94IiwiY292ZXJWaWV3IiwidyIsIm5hdHVyYWxXaWR0aCIsImgiLCJuYXR1cmFsSGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJmIiwieSIsIngiLCJjc3NUZXh0IiwiX3ciLCJwYXJlbnRFbGVtZW50IiwiX2giLCJyYXRpbyIsIndpZHRoIiwibGVmdCIsInBhcnNlSW50IiwidG9wIiwic2NlbmUiLCJwYXJhbGxheEluc3RhbmNlIiwiUGFyYWxsYXgiLCJlbGUiLCJzY3JvbGxEaXJlY3Rpb24iLCJDb2xvciIsInIiLCJnIiwiYiIsInNldCIsInRvU3RyaW5nIiwiTWF0aCIsInJvdW5kIiwiY2xhbXAiLCJodWVSb3RhdGUiLCJhbmdsZSIsIlBJIiwic2luIiwiY29zIiwibXVsdGlwbHkiLCJncmF5c2NhbGUiLCJ2YWx1ZSIsInNlcGlhIiwic2F0dXJhdGUiLCJtYXRyaXgiLCJuZXdSIiwibmV3RyIsIm5ld0IiLCJicmlnaHRuZXNzIiwibGluZWFyIiwiY29udHJhc3QiLCJzbG9wZSIsImludGVyY2VwdCIsImludmVydCIsImhzbCIsIm1heCIsIm1pbiIsInMiLCJsIiwiZCIsIlNvbHZlciIsInRhcmdldCIsImJhc2VDb2xvciIsInRhcmdldEhTTCIsInJldXNlZENvbG9yIiwic29sdmUiLCJyZXN1bHQiLCJzb2x2ZU5hcnJvdyIsInNvbHZlV2lkZSIsInZhbHVlcyIsImxvc3MiLCJjc3MiLCJBIiwiYyIsImEiLCJiZXN0IiwiSW5maW5pdHkiLCJpbml0aWFsIiwic3BzYSIsIndpZGUiLCJBMSIsIml0ZXJzIiwiYWxwaGEiLCJnYW1tYSIsImJlc3RMb3NzIiwiZGVsdGFzIiwiQXJyYXkiLCJoaWdoQXJncyIsImxvd0FyZ3MiLCJrIiwiY2siLCJwb3ciLCJyYW5kb20iLCJsb3NzRGlmZiIsImFrIiwiZml4Iiwic2xpY2UiLCJpZHgiLCJmaWx0ZXJzIiwiY29sb3IiLCJjb2xvckhTTCIsImFicyIsImZtdCIsIm11bHRpcGxpZXIiLCJoZXhUb1JnYiIsImhleCIsInNob3J0aGFuZFJlZ2V4IiwicmVwbGFjZSIsIm0iLCJleGVjIiwicmdiIiwibGVuZ3RoIiwic29sdmVyIiwibG9zc01zZyIsIm1hdGNoIiwic2Nyb2xsQWN0aW9uIiwidW5kZWZpbmVkIiwiZGlyZWN0aW9uIiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsImRpZmZYIiwiZGlmZlkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FB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LFlBQVksQ0FBQ3pHLENBQWIsSUFBa0IwRyxTQUF0QixFQUFpQztBQUM3QkQsZ0JBQVksQ0FBQ3pHLENBQWIsR0FBaUIzQyxNQUFNLENBQUN1SixXQUF4QjtBQUNBSCxnQkFBWSxDQUFDMUcsQ0FBYixHQUFpQjFDLE1BQU0sQ0FBQ3dKLFdBQXhCO0FBQ0g7O0FBQ0QsTUFBSUMsS0FBSyxHQUFHTCxZQUFZLENBQUN6RyxDQUFiLEdBQWlCM0MsTUFBTSxDQUFDdUosV0FBcEM7QUFDQSxNQUFJRyxLQUFLLEdBQUdOLFlBQVksQ0FBQzFHLENBQWIsR0FBaUIxQyxNQUFNLENBQUN3SixXQUFwQzs7QUFDQSxNQUFJRixTQUFTLElBQUksR0FBYixJQUFvQkEsU0FBUyxJQUFJLEdBQXJDLEVBQTJDO0FBQ3ZDLFFBQUlHLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWEwsa0JBQVksQ0FBQ3hELENBQWIsR0FBaUIsT0FBakI7QUFDSCxLQUZELE1BRU8sSUFBSTZELEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDbEJMLGtCQUFZLENBQUN4RCxDQUFiLEdBQWlCLE1BQWpCO0FBQ0g7QUFDSixHQU5ELE1BTU87QUFDSCxRQUFJOEQsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYTixrQkFBWSxDQUFDeEQsQ0FBYixHQUFpQixNQUFqQjtBQUNILEtBRkQsTUFFTyxJQUFJOEQsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNsQk4sa0JBQVksQ0FBQ3hELENBQWIsR0FBaUIsSUFBakI7QUFDSDtBQUNKOztBQUNEd0QsY0FBWSxDQUFDekcsQ0FBYixHQUFpQjNDLE1BQU0sQ0FBQ3VKLFdBQXhCO0FBQ0FILGNBQVksQ0FBQzFHLENBQWIsR0FBaUIxQyxNQUFNLENBQUN3SixXQUF4QjtBQUNBLFNBQU9KLFlBQVksQ0FBQ3hELENBQXBCO0FBQ0gsQyIsImZpbGUiOiIuL2pzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENDb21wb25lbnQocm9vdCwgZm91bmRhdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gICAgfVxuICAgIE1EQ0NvbXBvbmVudC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAgICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICAgICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oe30pKTtcbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBtZXRob2QgcGFyYW0gb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlczsgaXQgZG9lcyBub3QgbmVlZCB0byBiZSB1bml0IHRlc3RlZCAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBfYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgICAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLCB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgICAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUpIHtcbiAgICAgICAgaWYgKHNob3VsZEJ1YmJsZSA9PT0gdm9pZCAwKSB7IHNob3VsZEJ1YmJsZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBldnQ7XG4gICAgICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgICAgICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBNRENDb21wb25lbnQgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdFxuICogcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNQYXNzaXZlXztcbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kXG4gKiBpZiBzbywgdXNlIHRoZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgdmFyIGlzU3VwcG9ydGVkXzEgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LCB7XG4gICAgICAgICAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3VwcG9ydGVkXzEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWRfMTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5IGNhbm5vdCB0aHJvdyBlcnJvciBkdWUgdG8gdGVzdHMuIHRzbGludCBhbHNvIGRpc2FibGVzIGNvbnNvbGUubG9nLlxuICAgICAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWRfMTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV8gPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0Zsb2F0aW5nTGFiZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRmxvYXRpbmdMYWJlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENGbG9hdGluZ0xhYmVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ0Zsb2F0aW5nTGFiZWwuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwocm9vdCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIHByb2R1Y2UgdGhlIGxhYmVsIHNoYWtlIGZvciBlcnJvcnMuXG4gICAgICogQHBhcmFtIHNob3VsZFNoYWtlIElmIHRydWUsIHNoYWtlcyB0aGUgbGFiZWwgYnkgYWRkaW5nIGEgQ1NTIGNsYXNzOyBvdGhlcndpc2UsIHN0b3BzIHNoYWtpbmcgYnkgcmVtb3ZpbmcgdGhlIGNsYXNzLlxuICAgICAqL1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWwucHJvdG90eXBlLnNoYWtlID0gZnVuY3Rpb24gKHNob3VsZFNoYWtlKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2hha2Uoc2hvdWxkU2hha2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBmbG9hdC9kb2NrLlxuICAgICAqIEBwYXJhbSBzaG91bGRGbG9hdCBJZiB0cnVlLCBmbG9hdHMgdGhlIGxhYmVsIGJ5IGFkZGluZyBhIENTUyBjbGFzczsgb3RoZXJ3aXNlLCBkb2NrcyBpdCBieSByZW1vdmluZyB0aGUgY2xhc3MuXG4gICAgICovXG4gICAgTURDRmxvYXRpbmdMYWJlbC5wcm90b3R5cGUuZmxvYXQgPSBmdW5jdGlvbiAoc2hvdWxkRmxvYXQpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5mbG9hdChzaG91bGRGbG9hdCk7XG4gICAgfTtcbiAgICBNRENGbG9hdGluZ0xhYmVsLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0V2lkdGgoKTtcbiAgICB9O1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWwucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdF8uc2Nyb2xsV2lkdGg7IH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy51bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENGbG9hdGluZ0xhYmVsO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ0Zsb2F0aW5nTGFiZWwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBMQUJFTF9GTE9BVF9BQk9WRTogJ21kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUnLFxuICAgIExBQkVMX1NIQUtFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1zaGFrZScsXG4gICAgUk9PVDogJ21kYy1mbG9hdGluZy1sYWJlbCcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTaGFrZUFuaW1hdGlvbkVuZF8oKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdhbmltYXRpb25lbmQnLCB0aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYW5pbWF0aW9uZW5kJywgdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIHRoZSBsYWJlbCBlbGVtZW50LlxuICAgICAqL1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0V2lkdGgoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0eWxlcyB0aGUgbGFiZWwgdG8gcHJvZHVjZSBhIHNoYWtlIGFuaW1hdGlvbiB0byBpbmRpY2F0ZSBhbiBlcnJvci5cbiAgICAgKiBAcGFyYW0gc2hvdWxkU2hha2UgSWYgdHJ1ZSwgYWRkcyB0aGUgc2hha2UgQ1NTIGNsYXNzOyBvdGhlcndpc2UsIHJlbW92ZXMgc2hha2UgY2xhc3MuXG4gICAgICovXG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLnNoYWtlID0gZnVuY3Rpb24gKHNob3VsZFNoYWtlKSB7XG4gICAgICAgIHZhciBMQUJFTF9TSEFLRSA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTEFCRUxfU0hBS0U7XG4gICAgICAgIGlmIChzaG91bGRTaGFrZSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBmbG9hdCBvciBkb2NrLlxuICAgICAqIEBwYXJhbSBzaG91bGRGbG9hdCBJZiB0cnVlLCBhZGRzIHRoZSBmbG9hdCBDU1MgY2xhc3M7IG90aGVyd2lzZSwgcmVtb3ZlcyBmbG9hdCBhbmQgc2hha2UgY2xhc3NlcyB0byBkb2NrIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5wcm90b3R5cGUuZmxvYXQgPSBmdW5jdGlvbiAoc2hvdWxkRmxvYXQpIHtcbiAgICAgICAgdmFyIF9hID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3NlcywgTEFCRUxfRkxPQVRfQUJPVkUgPSBfYS5MQUJFTF9GTE9BVF9BQk9WRSwgTEFCRUxfU0hBS0UgPSBfYS5MQUJFTF9TSEFLRTtcbiAgICAgICAgaWYgKHNob3VsZEZsb2F0KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKExBQkVMX0ZMT0FUX0FCT1ZFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfRkxPQVRfQUJPVkUpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVTaGFrZUFuaW1hdGlvbkVuZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBMQUJFTF9TSEFLRSA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTEFCRUxfU0hBS0U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDTGluZVJpcHBsZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0xpbmVSaXBwbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTGluZVJpcHBsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENMaW5lUmlwcGxlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ0xpbmVSaXBwbGUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0xpbmVSaXBwbGUocm9vdCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIGxpbmUgcmlwcGxlXG4gICAgICovXG4gICAgTURDTGluZVJpcHBsZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGVzIHRoZSBsaW5lIHJpcHBsZVxuICAgICAqL1xuICAgIE1EQ0xpbmVSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdHJhbnNmb3JtIG9yaWdpbiBnaXZlbiBhIHVzZXIncyBjbGljayBsb2NhdGlvbi5cbiAgICAgKiBUaGUgYHJpcHBsZUNlbnRlcmAgaXMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgbWlkZGxlIG9mIHRoZSByaXBwbGUuXG4gICAgICovXG4gICAgTURDTGluZVJpcHBsZS5wcm90b3R5cGUuc2V0UmlwcGxlQ2VudGVyID0gZnVuY3Rpb24gKHhDb29yZGluYXRlKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0UmlwcGxlQ2VudGVyKHhDb29yZGluYXRlKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVSaXBwbGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBzZXRTdHlsZTogZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMudW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcik7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDTGluZVJpcHBsZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTGluZVJpcHBsZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENMaW5lUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBMSU5FX1JJUFBMRV9BQ1RJVkU6ICdtZGMtbGluZS1yaXBwbGUtLWFjdGl2ZScsXG4gICAgTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HOiAnbWRjLWxpbmUtcmlwcGxlLS1kZWFjdGl2YXRpbmcnLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDTGluZVJpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGluZVJpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENMaW5lUmlwcGxlQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0U3R5bGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfQUNUSVZFKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRSaXBwbGVDZW50ZXIgPSBmdW5jdGlvbiAoeENvb3JkaW5hdGUpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndHJhbnNmb3JtLW9yaWdpbicsIHhDb29yZGluYXRlICsgXCJweCBjZW50ZXJcIik7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIGxpbmUgcmlwcGxlIHRvIGJlIGVpdGhlciB0cmFuc3BhcmVudCBvciBvcGFxdWVcbiAgICAgICAgLy8gYmVmb3JlIGVtaXR0aW5nIHRoZSBhbmltYXRpb24gZW5kIGV2ZW50XG4gICAgICAgIHZhciBpc0RlYWN0aXZhdGluZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgICAgICBpZiAoZXZ0LnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknKSB7XG4gICAgICAgICAgICBpZiAoaXNEZWFjdGl2YXRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENMaW5lUmlwcGxlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENOb3RjaGVkT3V0bGluZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENOb3RjaGVkT3V0bGluZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENOb3RjaGVkT3V0bGluZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENOb3RjaGVkT3V0bGluZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDTm90Y2hlZE91dGxpbmUocm9vdCk7XG4gICAgfTtcbiAgICBNRENOb3RjaGVkT3V0bGluZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vdGNoRWxlbWVudF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5OT1RDSF9FTEVNRU5UX1NFTEVDVE9SKTtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKCcuJyArIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXMuUk9PVCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcbiAgICAgICAgICAgIHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLk9VVExJTkVfVVBHUkFERUQpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuTk9fTEFCRUwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGNsYXNzZXMgYW5kIHN0eWxlcyB0byBvcGVuIHRoZSBub3RjaCB0byB0aGUgc3BlY2lmaWVkIHdpZHRoLlxuICAgICAqIEBwYXJhbSBub3RjaFdpZHRoIFRoZSBub3RjaCB3aWR0aCBpbiB0aGUgb3V0bGluZS5cbiAgICAgKi9cbiAgICBNRENOb3RjaGVkT3V0bGluZS5wcm90b3R5cGUubm90Y2ggPSBmdW5jdGlvbiAobm90Y2hXaWR0aCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLm5vdGNoKG5vdGNoV2lkdGgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBjbGFzc2VzIGFuZCBzdHlsZXMgdG8gY2xvc2UgdGhlIG5vdGNoLlxuICAgICAqL1xuICAgIE1EQ05vdGNoZWRPdXRsaW5lLnByb3RvdHlwZS5jbG9zZU5vdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmNsb3NlTm90Y2goKTtcbiAgICB9O1xuICAgIE1EQ05vdGNoZWRPdXRsaW5lLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgc2V0Tm90Y2hXaWR0aFByb3BlcnR5OiBmdW5jdGlvbiAod2lkdGgpIHsgcmV0dXJuIF90aGlzLm5vdGNoRWxlbWVudF8uc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgd2lkdGggKyAncHgnKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZU5vdGNoV2lkdGhQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubm90Y2hFbGVtZW50Xy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTm90Y2hlZE91dGxpbmU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDTm90Y2hlZE91dGxpbmUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIE5PVENIX0VMRU1FTlRfU0VMRUNUT1I6ICcubWRjLW5vdGNoZWQtb3V0bGluZV9fbm90Y2gnLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIC8vIFRoaXMgc2hvdWxkIHN0YXkgaW4gc3luYyB3aXRoICRtZGMtbm90Y2hlZC1vdXRsaW5lLXBhZGRpbmcgKiAyLlxuICAgIE5PVENIX0VMRU1FTlRfUEFERElORzogOCxcbn07XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBOT19MQUJFTDogJ21kYy1ub3RjaGVkLW91dGxpbmUtLW5vLWxhYmVsJyxcbiAgICBPVVRMSU5FX05PVENIRUQ6ICdtZGMtbm90Y2hlZC1vdXRsaW5lLS1ub3RjaGVkJyxcbiAgICBPVVRMSU5FX1VQR1JBREVEOiAnbWRjLW5vdGNoZWQtb3V0bGluZS0tdXBncmFkZWQnLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Tm90Y2hXaWR0aFByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlTm90Y2hXaWR0aFByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgb3V0bGluZSBub3RjaGVkIHNlbGVjdG9yIGFuZCB1cGRhdGVzIHRoZSBub3RjaCB3aWR0aCBjYWxjdWxhdGVkIGJhc2VkIG9mZiBvZiBub3RjaFdpZHRoLlxuICAgICAqL1xuICAgIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5wcm90b3R5cGUubm90Y2ggPSBmdW5jdGlvbiAobm90Y2hXaWR0aCkge1xuICAgICAgICB2YXIgT1VUTElORV9OT1RDSEVEID0gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1VUTElORV9OT1RDSEVEO1xuICAgICAgICBpZiAobm90Y2hXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIG5vdGNoV2lkdGggKz0gbnVtYmVycy5OT1RDSF9FTEVNRU5UX1BBRERJTkc7IC8vIEFkZCBwYWRkaW5nIGZyb20gbGVmdC9yaWdodC5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE5vdGNoV2lkdGhQcm9wZXJ0eShub3RjaFdpZHRoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhPVVRMSU5FX05PVENIRUQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBub3RjaGVkIG91dGxpbmUgc2VsZWN0b3IgdG8gY2xvc2UgdGhlIG5vdGNoIGluIHRoZSBvdXRsaW5lLlxuICAgICAqL1xuICAgIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2VOb3RjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIE9VVExJTkVfTk9UQ0hFRCA9IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9VVExJTkVfTk9UQ0hFRDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhPVVRMSU5FX05PVENIRUQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZU5vdGNoV2lkdGhQcm9wZXJ0eSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG52YXIgTURDUmlwcGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ1JpcHBsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290LCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHsgaXNVbmJvdW5kZWQ6IHVuZGVmaW5lZCB9OyB9XG4gICAgICAgIHZhciByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgICAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICAgICAgaWYgKG9wdHMuaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IG9wdHMuaXNVbmJvdW5kZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpOyB9LFxuICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IH0sXG4gICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9KTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhpbnN0YW5jZS5yb290XywgJzphY3RpdmUnKTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLmRpc2FibGVkKTsgfSxcbiAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLnVuYm91bmRlZCk7IH0sXG4gICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKHZhck5hbWUsIHZhbHVlKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7IH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlLnByb3RvdHlwZSwgXCJ1bmJvdW5kZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5ib3VuZGVkXyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RfO1xuICAgICAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gcm9vdC5kYXRhc2V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAgICovXG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5zZXRVbmJvdW5kZWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZChCb29sZWFuKHRoaXMudW5ib3VuZGVkXykpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENSaXBwbGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIH0gZnJvbSAnLi91dGlsJztcbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG52YXIgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93bicsXG5dO1xuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG52YXIgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51Jyxcbl07XG4vLyBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG52YXIgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xudmFyIE1EQ1JpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnU2NhbGVfID0gJzAnO1xuICAgICAgICBfdGhpcy5mcmFtZV8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNpemVfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMubWF4UmFkaXVzXyA9IDA7XG4gICAgICAgIF90aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZV8oZSk7IH07XG4gICAgICAgIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVfKCk7IH07XG4gICAgICAgIF90aGlzLmZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8xID0gX2EuUk9PVCwgVU5CT1VOREVEXzEgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1RfMSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEXzEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMiA9IF9hLlJPT1QsIFVOQk9VTkRFRF8yID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBldnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZV8oZXZ0KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuYm91bmRlZCA9IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgdmFyIFVOQk9VTkRFRCA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VTkJPVU5ERUQ7XG4gICAgICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1ByZXNzUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICAgICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUNzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmlwcGxlU3RyaW5ncyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyaXBwbGVTdHJpbmdzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUocmlwcGxlU3RyaW5nc1trZXldLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICB2YXIgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICAgICAgdmFyIGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZXZ0ICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZXZ0LnR5cGU7XG4gICAgICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGV2dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZXZ0O1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBldnQgIT09IHVuZGVmaW5lZCAmJiAoZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2dC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT09ICdwb2ludGVyZG93bicpO1xuICAgICAgICB2YXIgaGFzQWN0aXZhdGVkQ2hpbGQgPSBldnQgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KTsgfSk7XG4gICAgICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmVcbiAgICAgICAgICAgICAgICAmJiBldnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICYmIChldnQua2V5ID09PSAnICcgfHwgZXZ0LmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgICAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgICAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgICAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gX3RoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiAoZXZ0ICE9PSB1bmRlZmluZWQgJiYgZXZ0LnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVBY3RpdmF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX0VORDtcbiAgICAgICAgdmFyIF9iID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBGR19ERUFDVElWQVRJT04gPSBfYi5GR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT04gPSBfYi5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMgPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM7XG4gICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgICAgICB2YXIgdHJhbnNsYXRlRW5kID0gJyc7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSwgc3RhcnRQb2ludCA9IF9jLnN0YXJ0UG9pbnQsIGVuZFBvaW50ID0gX2MuZW5kUG9pbnQ7XG4gICAgICAgICAgICB0cmFuc2xhdGVTdGFydCA9IHN0YXJ0UG9pbnQueCArIFwicHgsIFwiICsgc3RhcnRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICAgICAgdHJhbnNsYXRlRW5kID0gZW5kUG9pbnQueCArIFwicHgsIFwiICsgZW5kUG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCk7IH0sIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgYWN0aXZhdGlvbkV2ZW50ID0gX2EuYWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXI7XG4gICAgICAgIHZhciBzdGFydFBvaW50O1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGFjdGl2YXRpb25FdmVudCwgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBzdGFydFBvaW50OiBzdGFydFBvaW50LCBlbmRQb2ludDogZW5kUG9pbnQgfTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgICAgICB2YXIgRkdfREVBQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBoYXNEZWFjdGl2YXRpb25VWFJ1biA9IF9hLmhhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZCA9IF9hLmlzQWN0aXZhdGVkO1xuICAgICAgICB2YXIgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuICAgICAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRkdfQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQ7IH0sIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVEZWFjdGl2YXRpb25fID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlID0gX2Eud2FzRWxlbWVudE1hZGVBY3RpdmU7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdmFyIG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuICAgICAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgICAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICAgICAgdmFyIGdldEJvdW5kZWRSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyhfdGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3coX3RoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuICAgICAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgdGhpcy5mZ1NjYWxlXyA9IFwiXCIgKyB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcbiAgICAgICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlTGF5b3V0Q3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1NJWkUgPSBfYS5WQVJfRkdfU0laRSwgVkFSX0xFRlQgPSBfYS5WQVJfTEVGVCwgVkFSX1RPUCA9IF9hLlZBUl9UT1AsIFZBUl9GR19TQ0FMRSA9IF9hLlZBUl9GR19TQ0FMRTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgdGhpcy5pbml0aWFsU2l6ZV8gKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnQgKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCB0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmV4cG9ydCB7IHV0aWwgfTtcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gICAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgICAvLyBBcHBlbmQgdG8gaGVhZCBpbnN0ZWFkIG9mIGJvZHkgYmVjYXVzZSB0aGlzIHNjcmlwdCBtaWdodCBiZSBpbnZva2VkIGluIHRoZVxuICAgIC8vIGhlYWQsIGluIHdoaWNoIGNhc2UgdGhlIGJvZHkgZG9lc24ndCBleGlzdCB5ZXQuIFRoZSBwcm9iZSB3b3JrcyBlaXRoZXIgd2F5LlxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHZhciBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2dCwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICAgIGlmICghZXZ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHggPSBwYWdlT2Zmc2V0LngsIHkgPSBwYWdlT2Zmc2V0Lnk7XG4gICAgdmFyIGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gICAgdmFyIGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgbm9ybWFsaXplZFg7XG4gICAgdmFyIG5vcm1hbGl6ZWRZO1xuICAgIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSBtb3VzZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IG1vdXNlRXZlbnQucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIocm9vdCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlci5wcm90b3R5cGUsIFwiZm91bmRhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl87XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXI7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgUk9PVDogJ21kYy10ZXh0LWZpZWxkLWNoYXJhY3Rlci1jb3VudGVyJyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBST09UX1NFTEVDVE9SOiBcIi5cIiArIGNzc0NsYXNzZXMuUk9PVCxcbn07XG5leHBvcnQgeyBzdHJpbmdzLCBjc3NDbGFzc2VzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24ucHJvdG90eXBlLnNldENvdW50ZXJWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50TGVuZ3RoLCBtYXhMZW5ndGgpIHtcbiAgICAgICAgY3VycmVudExlbmd0aCA9IE1hdGgubWluKGN1cnJlbnRMZW5ndGgsIG1heExlbmd0aCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjdXJyZW50TGVuZ3RoICsgXCIgLyBcIiArIG1heExlbmd0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCB7IGNzc0NsYXNzZXMgYXMgY2hhcmFjdGVyQ291bnRDc3NDbGFzc2VzLCBzdHJpbmdzIGFzIGNoYXJhY3RlckNvdW50U3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhcHBseVBhc3NpdmUgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyBwb255ZmlsbCBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IE1EQ0Zsb2F0aW5nTGFiZWwgfSBmcm9tICdAbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0xpbmVSaXBwbGUgfSBmcm9tICdAbWF0ZXJpYWwvbGluZS1yaXBwbGUvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ05vdGNoZWRPdXRsaW5lIH0gZnJvbSAnQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDUmlwcGxlIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyLCB9IGZyb20gJy4vY2hhcmFjdGVyLWNvdW50ZXIvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9jaGFyYWN0ZXItY291bnRlci9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZEhlbHBlclRleHQsIH0gZnJvbSAnLi9oZWxwZXItdGV4dC9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gfSBmcm9tICcuL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkSWNvbiB9IGZyb20gJy4vaWNvbi9jb21wb25lbnQnO1xudmFyIE1EQ1RleHRGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1RleHRGaWVsZC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkKHJvb3QpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHJpcHBsZUZhY3RvcnksIGxpbmVSaXBwbGVGYWN0b3J5LCBoZWxwZXJUZXh0RmFjdG9yeSwgY2hhcmFjdGVyQ291bnRlckZhY3RvcnksIGljb25GYWN0b3J5LCBsYWJlbEZhY3RvcnksIG91dGxpbmVGYWN0b3J5KSB7XG4gICAgICAgIGlmIChyaXBwbGVGYWN0b3J5ID09PSB2b2lkIDApIHsgcmlwcGxlRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCwgZm91bmRhdGlvbikgeyByZXR1cm4gbmV3IE1EQ1JpcHBsZShlbCwgZm91bmRhdGlvbik7IH07IH1cbiAgICAgICAgaWYgKGxpbmVSaXBwbGVGYWN0b3J5ID09PSB2b2lkIDApIHsgbGluZVJpcHBsZUZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENMaW5lUmlwcGxlKGVsKTsgfTsgfVxuICAgICAgICBpZiAoaGVscGVyVGV4dEZhY3RvcnkgPT09IHZvaWQgMCkgeyBoZWxwZXJUZXh0RmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHQoZWwpOyB9OyB9XG4gICAgICAgIGlmIChjaGFyYWN0ZXJDb3VudGVyRmFjdG9yeSA9PT0gdm9pZCAwKSB7IGNoYXJhY3RlckNvdW50ZXJGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlcihlbCk7IH07IH1cbiAgICAgICAgaWYgKGljb25GYWN0b3J5ID09PSB2b2lkIDApIHsgaWNvbkZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRJY29uKGVsKTsgfTsgfVxuICAgICAgICBpZiAobGFiZWxGYWN0b3J5ID09PSB2b2lkIDApIHsgbGFiZWxGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDRmxvYXRpbmdMYWJlbChlbCk7IH07IH1cbiAgICAgICAgaWYgKG91dGxpbmVGYWN0b3J5ID09PSB2b2lkIDApIHsgb3V0bGluZUZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENOb3RjaGVkT3V0bGluZShlbCk7IH07IH1cbiAgICAgICAgdGhpcy5pbnB1dF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5JTlBVVF9TRUxFQ1RPUik7XG4gICAgICAgIHZhciBsYWJlbEVsZW1lbnQgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5MQUJFTF9TRUxFQ1RPUik7XG4gICAgICAgIHRoaXMubGFiZWxfID0gbGFiZWxFbGVtZW50ID8gbGFiZWxGYWN0b3J5KGxhYmVsRWxlbWVudCkgOiBudWxsO1xuICAgICAgICB2YXIgbGluZVJpcHBsZUVsZW1lbnQgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5MSU5FX1JJUFBMRV9TRUxFQ1RPUik7XG4gICAgICAgIHRoaXMubGluZVJpcHBsZV8gPSBsaW5lUmlwcGxlRWxlbWVudCA/IGxpbmVSaXBwbGVGYWN0b3J5KGxpbmVSaXBwbGVFbGVtZW50KSA6IG51bGw7XG4gICAgICAgIHZhciBvdXRsaW5lRWxlbWVudCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLk9VVExJTkVfU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLm91dGxpbmVfID0gb3V0bGluZUVsZW1lbnQgPyBvdXRsaW5lRmFjdG9yeShvdXRsaW5lRWxlbWVudCkgOiBudWxsO1xuICAgICAgICAvLyBIZWxwZXIgdGV4dFxuICAgICAgICB2YXIgaGVscGVyVGV4dFN0cmluZ3MgPSBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIgbmV4dEVsZW1lbnRTaWJsaW5nID0gdGhpcy5yb290Xy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHZhciBoYXNIZWxwZXJMaW5lID0gKG5leHRFbGVtZW50U2libGluZyAmJiBuZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuSEVMUEVSX0xJTkUpKTtcbiAgICAgICAgdmFyIGhlbHBlclRleHRFbCA9IGhhc0hlbHBlckxpbmUgJiYgbmV4dEVsZW1lbnRTaWJsaW5nICYmIG5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKGhlbHBlclRleHRTdHJpbmdzLlJPT1RfU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLmhlbHBlclRleHRfID0gaGVscGVyVGV4dEVsID8gaGVscGVyVGV4dEZhY3RvcnkoaGVscGVyVGV4dEVsKSA6IG51bGw7XG4gICAgICAgIC8vIENoYXJhY3RlciBjb3VudGVyXG4gICAgICAgIHZhciBjaGFyYWN0ZXJDb3VudGVyU3RyaW5ncyA9IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJDb3VudGVyRWwgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoY2hhcmFjdGVyQ291bnRlclN0cmluZ3MuUk9PVF9TRUxFQ1RPUik7XG4gICAgICAgIC8vIElmIGNoYXJhY3RlciBjb3VudGVyIGlzIG5vdCBmb3VuZCBpbiByb290IGVsZW1lbnQgc2VhcmNoIGluIHNpYmxpbmcgZWxlbWVudC5cbiAgICAgICAgaWYgKCFjaGFyYWN0ZXJDb3VudGVyRWwgJiYgaGFzSGVscGVyTGluZSAmJiBuZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGNoYXJhY3RlckNvdW50ZXJFbCA9IG5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKGNoYXJhY3RlckNvdW50ZXJTdHJpbmdzLlJPT1RfU0VMRUNUT1IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyQ291bnRlcl8gPSBjaGFyYWN0ZXJDb3VudGVyRWwgPyBjaGFyYWN0ZXJDb3VudGVyRmFjdG9yeShjaGFyYWN0ZXJDb3VudGVyRWwpIDogbnVsbDtcbiAgICAgICAgdGhpcy5sZWFkaW5nSWNvbl8gPSBudWxsO1xuICAgICAgICB0aGlzLnRyYWlsaW5nSWNvbl8gPSBudWxsO1xuICAgICAgICB2YXIgaWNvbkVsZW1lbnRzID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuSUNPTl9TRUxFQ1RPUik7XG4gICAgICAgIGlmIChpY29uRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKGljb25FbGVtZW50cy5sZW5ndGggPiAxKSB7IC8vIEhhcyBib3RoIGljb25zLlxuICAgICAgICAgICAgICAgIHRoaXMubGVhZGluZ0ljb25fID0gaWNvbkZhY3RvcnkoaWNvbkVsZW1lbnRzWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWlsaW5nSWNvbl8gPSBpY29uRmFjdG9yeShpY29uRWxlbWVudHNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuV0lUSF9MRUFESU5HX0lDT04pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVhZGluZ0ljb25fID0gaWNvbkZhY3RvcnkoaWNvbkVsZW1lbnRzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhaWxpbmdJY29uXyA9IGljb25GYWN0b3J5KGljb25FbGVtZW50c1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmlwcGxlID0gdGhpcy5jcmVhdGVSaXBwbGVfKHJpcHBsZUZhY3RvcnkpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yaXBwbGUpIHtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5saW5lUmlwcGxlXykge1xuICAgICAgICAgICAgdGhpcy5saW5lUmlwcGxlXy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyVGV4dF8uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlckNvdW50ZXJfKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50ZXJfLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubGVhZGluZ0ljb25fLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50cmFpbGluZ0ljb25fKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWlsaW5nSWNvbl8uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhYmVsXykge1xuICAgICAgICAgICAgdGhpcy5sYWJlbF8uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm91dGxpbmVfKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBUZXh0IEZpZWxkJ3MgaW50ZXJuYWwgc3RhdGUgYmFzZWQgb24gdGhlIGVudmlyb25tZW50J3NcbiAgICAgKiBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuaW5wdXRfLmRpc2FibGVkO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFZhbHVlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBvbiB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc0Rpc2FibGVkKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gZGlzYWJsZWQgU2V0cyB0aGUgVGV4dCBGaWVsZCBkaXNhYmxlZCBvciBlbmFibGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJ2YWxpZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNWYWxpZCgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHZhbGlkIFNldHMgdGhlIFRleHQgRmllbGQgdmFsaWQgb3IgaW52YWxpZC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFZhbGlkKHZhbGlkKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwicmVxdWlyZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0Xy5yZXF1aXJlZDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSByZXF1aXJlZCBTZXRzIHRoZSBUZXh0IEZpZWxkIHRvIHJlcXVpcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcInBhdHRlcm5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0Xy5wYXR0ZXJuO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHBhdHRlcm4gU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIHZhbGlkYXRpb24gcGF0dGVybi5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJtaW5MZW5ndGhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0Xy5taW5MZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gbWluTGVuZ3RoIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBtaW5MZW5ndGguXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChtaW5MZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLm1pbkxlbmd0aCA9IG1pbkxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwibWF4TGVuZ3RoXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dF8ubWF4TGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIG1heExlbmd0aCBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgbWF4TGVuZ3RoLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBDaHJvbWUgdGhyb3dzIGV4Y2VwdGlvbiBpZiBtYXhMZW5ndGggaXMgc2V0IHRvIGEgdmFsdWUgbGVzcyB0aGFuIHplcm9cbiAgICAgICAgICAgIGlmIChtYXhMZW5ndGggPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dF8ucmVtb3ZlQXR0cmlidXRlKCdtYXhMZW5ndGgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRfLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwibWluXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dF8ubWluO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIG1pbiBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgbWluLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobWluKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5taW4gPSBtaW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcIm1heFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRfLm1heDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBtYXggU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIG1heC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG1heCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8ubWF4ID0gbWF4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJzdGVwXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dF8uc3RlcDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBzdGVwIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBzdGVwLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoc3RlcCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uc3RlcCA9IHN0ZXA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcImhlbHBlclRleHRDb250ZW50XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0SGVscGVyVGV4dENvbnRlbnQoY29udGVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcImxlYWRpbmdJY29uQXJpYUxhYmVsXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIGxlYWRpbmcgaWNvbi5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldExlYWRpbmdJY29uQXJpYUxhYmVsKGxhYmVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwibGVhZGluZ0ljb25Db250ZW50XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRMZWFkaW5nSWNvbkNvbnRlbnQoY29udGVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcInRyYWlsaW5nSWNvbkFyaWFMYWJlbFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9mIHRoZSB0cmFpbGluZyBpY29uLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VHJhaWxpbmdJY29uQXJpYUxhYmVsKGxhYmVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwidHJhaWxpbmdJY29uQ29udGVudFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHRyYWlsaW5nIGljb24uXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFRyYWlsaW5nSWNvbkNvbnRlbnQoY29udGVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcInVzZU5hdGl2ZVZhbGlkYXRpb25cIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgdXNlIG9mIG5hdGl2ZSB2YWxpZGF0aW9uLiBVc2UgdGhpcyBmb3IgY3VzdG9tIHZhbGlkYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB1c2VOYXRpdmVWYWxpZGF0aW9uIFNldCB0aGlzIHRvIGZhbHNlIHRvIGlnbm9yZSBuYXRpdmUgaW5wdXQgdmFsaWRhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHVzZU5hdGl2ZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VXNlTmF0aXZlVmFsaWRhdGlvbih1c2VOYXRpdmVWYWxpZGF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlucHV0Xy5mb2N1cygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVjb21wdXRlcyB0aGUgb3V0bGluZSBTVkcgcGF0aCBmb3IgdGhlIG91dGxpbmUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZW5Ob3RjaCA9IHRoaXMuZm91bmRhdGlvbl8uc2hvdWxkRmxvYXQ7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubm90Y2hPdXRsaW5lKG9wZW5Ob3RjaCk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgdGhpcy5nZXRSb290QWRhcHRlck1ldGhvZHNfKCksIHRoaXMuZ2V0SW5wdXRBZGFwdGVyTWV0aG9kc18oKSwgdGhpcy5nZXRMYWJlbEFkYXB0ZXJNZXRob2RzXygpLCB0aGlzLmdldExpbmVSaXBwbGVBZGFwdGVyTWV0aG9kc18oKSwgdGhpcy5nZXRPdXRsaW5lQWRhcHRlck1ldGhvZHNfKCkpO1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24oYWRhcHRlciwgdGhpcy5nZXRGb3VuZGF0aW9uTWFwXygpKTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZ2V0Um9vdEFkYXB0ZXJNZXRob2RzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMudW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHZhciBnZXRBdHRyaWJ1dGVzTGlzdCA9IGZ1bmN0aW9uIChtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtdXRhdGlvbnNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtdXRhdGlvbikgeyByZXR1cm4gbXV0YXRpb24uYXR0cmlidXRlTmFtZTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHsgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7IH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9uc0xpc3QpIHsgcmV0dXJuIGhhbmRsZXIoZ2V0QXR0cmlidXRlc0xpc3QobXV0YXRpb25zTGlzdCkpOyB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShfdGhpcy5pbnB1dF8sIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5kaXNjb25uZWN0KCk7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmdldElucHV0QWRhcHRlck1ldGhvZHNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0TmF0aXZlSW5wdXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmlucHV0XzsgfSxcbiAgICAgICAgICAgIGlzRm9jdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMuaW5wdXRfOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZ2V0TGFiZWxBZGFwdGVyTWV0aG9kc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmbG9hdExhYmVsOiBmdW5jdGlvbiAoc2hvdWxkRmxvYXQpIHsgcmV0dXJuIF90aGlzLmxhYmVsXyAmJiBfdGhpcy5sYWJlbF8uZmxvYXQoc2hvdWxkRmxvYXQpOyB9LFxuICAgICAgICAgICAgZ2V0TGFiZWxXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGFiZWxfID8gX3RoaXMubGFiZWxfLmdldFdpZHRoKCkgOiAwOyB9LFxuICAgICAgICAgICAgaGFzTGFiZWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oX3RoaXMubGFiZWxfKTsgfSxcbiAgICAgICAgICAgIHNoYWtlTGFiZWw6IGZ1bmN0aW9uIChzaG91bGRTaGFrZSkgeyByZXR1cm4gX3RoaXMubGFiZWxfICYmIF90aGlzLmxhYmVsXy5zaGFrZShzaG91bGRTaGFrZSk7IH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmdldExpbmVSaXBwbGVBZGFwdGVyTWV0aG9kc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0ZUxpbmVSaXBwbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGluZVJpcHBsZV8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGluZVJpcHBsZV8uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVhY3RpdmF0ZUxpbmVSaXBwbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGluZVJpcHBsZV8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGluZVJpcHBsZV8uZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luOiBmdW5jdGlvbiAobm9ybWFsaXplZFgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubGluZVJpcHBsZV8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGluZVJpcHBsZV8uc2V0UmlwcGxlQ2VudGVyKG5vcm1hbGl6ZWRYKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5nZXRPdXRsaW5lQWRhcHRlck1ldGhvZHNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xvc2VPdXRsaW5lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vdXRsaW5lXyAmJiBfdGhpcy5vdXRsaW5lXy5jbG9zZU5vdGNoKCk7IH0sXG4gICAgICAgICAgICBoYXNPdXRsaW5lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKF90aGlzLm91dGxpbmVfKTsgfSxcbiAgICAgICAgICAgIG5vdGNoT3V0bGluZTogZnVuY3Rpb24gKGxhYmVsV2lkdGgpIHsgcmV0dXJuIF90aGlzLm91dGxpbmVfICYmIF90aGlzLm91dGxpbmVfLm5vdGNoKGxhYmVsV2lkdGgpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBBIG1hcCBvZiBhbGwgc3ViY29tcG9uZW50cyB0byBzdWJmb3VuZGF0aW9ucy5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmdldEZvdW5kYXRpb25NYXBfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRlcjogdGhpcy5jaGFyYWN0ZXJDb3VudGVyXyA/IHRoaXMuY2hhcmFjdGVyQ291bnRlcl8uZm91bmRhdGlvbiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhlbHBlclRleHQ6IHRoaXMuaGVscGVyVGV4dF8gPyB0aGlzLmhlbHBlclRleHRfLmZvdW5kYXRpb24gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsZWFkaW5nSWNvbjogdGhpcy5sZWFkaW5nSWNvbl8gPyB0aGlzLmxlYWRpbmdJY29uXy5mb3VuZGF0aW9uIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdHJhaWxpbmdJY29uOiB0aGlzLnRyYWlsaW5nSWNvbl8gPyB0aGlzLnRyYWlsaW5nSWNvbl8uZm91bmRhdGlvbiA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuY3JlYXRlUmlwcGxlXyA9IGZ1bmN0aW9uIChyaXBwbGVGYWN0b3J5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpc1RleHRBcmVhID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5URVhUQVJFQSk7XG4gICAgICAgIHZhciBpc091dGxpbmVkID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5PVVRMSU5FRCk7XG4gICAgICAgIGlmIChpc1RleHRBcmVhIHx8IGlzT3V0bGluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSwgeyBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBvbnlmaWxsLm1hdGNoZXMoX3RoaXMuaW5wdXRfLCAnOmFjdGl2ZScpOyB9LCByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTsgfSwgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIHJpcHBsZUZhY3RvcnkodGhpcy5yb290XywgbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfQ09OVFJPTFM6ICdhcmlhLWNvbnRyb2xzJyxcbiAgICBJQ09OX1NFTEVDVE9SOiAnLm1kYy10ZXh0LWZpZWxkX19pY29uJyxcbiAgICBJTlBVVF9TRUxFQ1RPUjogJy5tZGMtdGV4dC1maWVsZF9faW5wdXQnLFxuICAgIExBQkVMX1NFTEVDVE9SOiAnLm1kYy1mbG9hdGluZy1sYWJlbCcsXG4gICAgTElORV9SSVBQTEVfU0VMRUNUT1I6ICcubWRjLWxpbmUtcmlwcGxlJyxcbiAgICBPVVRMSU5FX1NFTEVDVE9SOiAnLm1kYy1ub3RjaGVkLW91dGxpbmUnLFxufTtcbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIERFTlNFOiAnbWRjLXRleHQtZmllbGQtLWRlbnNlJyxcbiAgICBESVNBQkxFRDogJ21kYy10ZXh0LWZpZWxkLS1kaXNhYmxlZCcsXG4gICAgRk9DVVNFRDogJ21kYy10ZXh0LWZpZWxkLS1mb2N1c2VkJyxcbiAgICBGVUxMV0lEVEg6ICdtZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoJyxcbiAgICBIRUxQRVJfTElORTogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci1saW5lJyxcbiAgICBJTlZBTElEOiAnbWRjLXRleHQtZmllbGQtLWludmFsaWQnLFxuICAgIE5PX0xBQkVMOiAnbWRjLXRleHQtZmllbGQtLW5vLWxhYmVsJyxcbiAgICBPVVRMSU5FRDogJ21kYy10ZXh0LWZpZWxkLS1vdXRsaW5lZCcsXG4gICAgUk9PVDogJ21kYy10ZXh0LWZpZWxkJyxcbiAgICBURVhUQVJFQTogJ21kYy10ZXh0LWZpZWxkLS10ZXh0YXJlYScsXG4gICAgV0lUSF9MRUFESU5HX0lDT046ICdtZGMtdGV4dC1maWVsZC0td2l0aC1sZWFkaW5nLWljb24nLFxuICAgIFdJVEhfVFJBSUxJTkdfSUNPTjogJ21kYy10ZXh0LWZpZWxkLS13aXRoLXRyYWlsaW5nLWljb24nLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIERFTlNFX0xBQkVMX1NDQUxFOiAwLjkyMyxcbiAgICBMQUJFTF9TQ0FMRTogMC43NSxcbn07XG4vKipcbiAqIFdoaXRlbGlzdCBiYXNlZCBvZmYgb2YgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvSFRNTC9IVE1MNS9Db25zdHJhaW50X3ZhbGlkYXRpb25cbiAqIHVuZGVyIHRoZSBcIlZhbGlkYXRpb24tcmVsYXRlZCBhdHRyaWJ1dGVzXCIgc2VjdGlvbi5cbiAqL1xudmFyIFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QgPSBbXG4gICAgJ3BhdHRlcm4nLCAnbWluJywgJ21heCcsICdyZXF1aXJlZCcsICdzdGVwJywgJ21pbmxlbmd0aCcsICdtYXhsZW5ndGgnLFxuXTtcbi8qKlxuICogTGFiZWwgc2hvdWxkIGFsd2F5cyBmbG9hdCBmb3IgdGhlc2UgdHlwZXMgYXMgdGhleSBzaG93IHNvbWUgVUkgZXZlbiBpZiB2YWx1ZSBpcyBlbXB0eS5cbiAqL1xudmFyIEFMV0FZU19GTE9BVF9UWVBFUyA9IFtcbiAgICAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdtb250aCcsICdyYW5nZScsICd0aW1lJywgJ3dlZWsnLFxuXTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QsIEFMV0FZU19GTE9BVF9UWVBFUyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IEFMV0FZU19GTE9BVF9UWVBFUywgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncywgVkFMSURBVElPTl9BVFRSX1dISVRFTElTVCB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBQT0lOVEVSRE9XTl9FVkVOVFMgPSBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J107XG52YXIgSU5URVJBQ1RJT05fRVZFTlRTID0gWydjbGljaycsICdrZXlkb3duJ107XG52YXIgTURDVGV4dEZpZWxkRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhZGFwdGVyXG4gICAgICogQHBhcmFtIGZvdW5kYXRpb25NYXAgTWFwIGZyb20gc3ViY29tcG9uZW50IG5hbWVzIHRvIHRoZWlyIHN1YmZvdW5kYXRpb25zLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24oYWRhcHRlciwgZm91bmRhdGlvbk1hcCkge1xuICAgICAgICBpZiAoZm91bmRhdGlvbk1hcCA9PT0gdm9pZCAwKSB7IGZvdW5kYXRpb25NYXAgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNGb2N1c2VkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNWYWxpZF8gPSB0cnVlO1xuICAgICAgICBfdGhpcy51c2VOYXRpdmVWYWxpZGF0aW9uXyA9IHRydWU7XG4gICAgICAgIF90aGlzLmhlbHBlclRleHRfID0gZm91bmRhdGlvbk1hcC5oZWxwZXJUZXh0O1xuICAgICAgICBfdGhpcy5jaGFyYWN0ZXJDb3VudGVyXyA9IGZvdW5kYXRpb25NYXAuY2hhcmFjdGVyQ291bnRlcjtcbiAgICAgICAgX3RoaXMubGVhZGluZ0ljb25fID0gZm91bmRhdGlvbk1hcC5sZWFkaW5nSWNvbjtcbiAgICAgICAgX3RoaXMudHJhaWxpbmdJY29uXyA9IGZvdW5kYXRpb25NYXAudHJhaWxpbmdJY29uO1xuICAgICAgICBfdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmlucHV0Qmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmlucHV0SW5wdXRIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUlucHV0KCk7IH07XG4gICAgICAgIF90aGlzLnNldFBvaW50ZXJYT2Zmc2V0XyA9IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLnNldFRyYW5zZm9ybU9yaWdpbihldnQpOyB9O1xuICAgICAgICBfdGhpcy50ZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24oKTsgfTtcbiAgICAgICAgX3RoaXMudmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXJfID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXNMaXN0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlKGF0dHJpYnV0ZXNMaXN0KTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUsIFwic2hvdWxkQWx3YXlzRmxvYXRfXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudHlwZTtcbiAgICAgICAgICAgIHJldHVybiBBTFdBWVNfRkxPQVRfVFlQRVMuaW5kZXhPZih0eXBlKSA+PSAwO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUsIFwic2hvdWxkRmxvYXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3VsZEFsd2F5c0Zsb2F0XyB8fCB0aGlzLmlzRm9jdXNlZF8gfHwgQm9vbGVhbih0aGlzLmdldFZhbHVlKCkpIHx8IHRoaXMuaXNCYWRJbnB1dF8oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLCBcInNob3VsZFNoYWtlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNGb2N1c2VkXyAmJiAhdGhpcy5pc1ZhbGlkKCkgJiYgQm9vbGVhbih0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ1RleHRGaWVsZEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSk7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0TmF0aXZlSW5wdXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgaXNGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZUxpbmVSaXBwbGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZWFjdGl2YXRlTGluZVJpcHBsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzaGFrZUxhYmVsOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZmxvYXRMYWJlbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0xhYmVsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRMYWJlbFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGhhc091dGxpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG5vdGNoT3V0bGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGNsb3NlT3V0bGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzRm9jdXNlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSAmJiB0aGlzLnNob3VsZEZsb2F0KSB7XG4gICAgICAgICAgICB0aGlzLm5vdGNoT3V0bGluZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmlucHV0Qmx1ckhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdpbnB1dCcsIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUkRPV05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuc2V0UG9pbnRlclhPZmZzZXRfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIElOVEVSQUNUSU9OX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy50ZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXyA9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIodGhpcy52YWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLnNldENoYXJhY3RlckNvdW50ZXJfKHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGgpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignaW5wdXQnLCB0aGlzLmlucHV0SW5wdXRIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJET1dOX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuc2V0UG9pbnRlclhPZmZzZXRfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIElOVEVSQUNUSU9OX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIodGhpcy52YWxpZGF0aW9uT2JzZXJ2ZXJfKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdXNlciBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgVGV4dCBGaWVsZC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUZXh0RmllbGRJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5hdGl2ZUlucHV0ID0gdGhpcy5hZGFwdGVyXy5nZXROYXRpdmVJbnB1dCgpO1xuICAgICAgICBpZiAobmF0aXZlSW5wdXQgJiYgbmF0aXZlSW5wdXQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHZhbGlkYXRpb24gYXR0cmlidXRlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXNMaXN0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGF0dHJpYnV0ZXNMaXN0LnNvbWUoZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICAgIGlmIChWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNULmluZGV4T2YoYXR0cmlidXRlTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnN0eWxlVmFsaWRpdHlfKHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNMaXN0LmluZGV4T2YoJ21heGxlbmd0aCcpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyQ291bnRlcl8odGhpcy5nZXRWYWx1ZSgpLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9wZW5zL2Nsb3NlcyB0aGUgbm90Y2hlZCBvdXRsaW5lLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLm5vdGNoT3V0bGluZSA9IGZ1bmN0aW9uIChvcGVuTm90Y2gpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc091dGxpbmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcGVuTm90Y2gpIHtcbiAgICAgICAgICAgIHZhciBpc0RlbnNlID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkRFTlNFKTtcbiAgICAgICAgICAgIHZhciBsYWJlbFNjYWxlID0gaXNEZW5zZSA/IG51bWJlcnMuREVOU0VfTEFCRUxfU0NBTEUgOiBudW1iZXJzLkxBQkVMX1NDQUxFO1xuICAgICAgICAgICAgdmFyIGxhYmVsV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldExhYmVsV2lkdGgoKSAqIGxhYmVsU2NhbGU7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGNoT3V0bGluZShsYWJlbFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VPdXRsaW5lKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlcyB0aGUgdGV4dCBmaWVsZCBmb2N1cyBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZF8gPSB0cnVlO1xuICAgICAgICB0aGlzLnN0eWxlRm9jdXNlZF8odGhpcy5pc0ZvY3VzZWRfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZUxpbmVSaXBwbGUoKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgICAgICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwodGhpcy5zaG91bGRTaGFrZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2hvd1RvU2NyZWVuUmVhZGVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpbmUgcmlwcGxlJ3MgdHJhbnNmb3JtIG9yaWdpbiwgc28gdGhhdCB0aGUgbGluZSByaXBwbGUgYWN0aXZhdGVcbiAgICAgKiBhbmltYXRpb24gd2lsbCBhbmltYXRlIG91dCBmcm9tIHRoZSB1c2VyJ3MgY2xpY2sgbG9jYXRpb24uXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VHJhbnNmb3JtT3JpZ2luID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgdG91Y2hlcyA9IGV2dC50b3VjaGVzO1xuICAgICAgICB2YXIgdGFyZ2V0RXZlbnQgPSB0b3VjaGVzID8gdG91Y2hlc1swXSA6IGV2dDtcbiAgICAgICAgdmFyIHRhcmdldENsaWVudFJlY3QgPSB0YXJnZXRFdmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBub3JtYWxpemVkWCA9IHRhcmdldEV2ZW50LmNsaWVudFggLSB0YXJnZXRDbGllbnRSZWN0LmxlZnQ7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbihub3JtYWxpemVkWCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSBvZiB0ZXh0IGlucHV0IGFuZCB0ZXh0IGFyZWEuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlRm9jdXMoKTtcbiAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudGVyXyh0aGlzLmdldFZhbHVlKCkubGVuZ3RoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlcyB0aGUgVGV4dCBGaWVsZCdzIGZvY3VzIHN0YXRlIGluIGNhc2VzIHdoZW4gdGhlIGlucHV0IHZhbHVlXG4gICAgICogY2hhbmdlcyB3aXRob3V0IHVzZXIgaW5wdXQgKGUuZy4gcHJvZ3JhbW1hdGljYWxseSkuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuYXV0b0NvbXBsZXRlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8pIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyB0aGUgVGV4dCBGaWVsZCdzIGZvY3VzIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZUxpbmVSaXBwbGUoKTtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoKTtcbiAgICAgICAgdGhpcy5zdHlsZVZhbGlkaXR5Xyhpc1ZhbGlkKTtcbiAgICAgICAgdGhpcy5zdHlsZUZvY3VzZWRfKHRoaXMuaXNGb2N1c2VkXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRGbG9hdCkge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgb24gdGhlIGlucHV0IEVsZW1lbnQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gUHJldmVudCBTYWZhcmkgZnJvbSBtb3ZpbmcgdGhlIGNhcmV0IHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IHdoZW4gdGhlIHZhbHVlIGhhcyBub3QgY2hhbmdlZC5cbiAgICAgICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENoYXJhY3RlckNvdW50ZXJfKHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkKCk7XG4gICAgICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFRoZSBjdXN0b20gdmFsaWRpdHkgc3RhdGUsIGlmIHNldDsgb3RoZXJ3aXNlLCB0aGUgcmVzdWx0IG9mIGEgbmF0aXZlIHZhbGlkaXR5IGNoZWNrLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmlzVmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZU5hdGl2ZVZhbGlkYXRpb25fXG4gICAgICAgICAgICA/IHRoaXMuaXNOYXRpdmVJbnB1dFZhbGlkXygpIDogdGhpcy5pc1ZhbGlkXztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpc1ZhbGlkIFNldHMgdGhlIGN1c3RvbSB2YWxpZGl0eSBzdGF0ZSBvZiB0aGUgVGV4dCBGaWVsZC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWYWxpZCA9IGZ1bmN0aW9uIChpc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMuaXNWYWxpZF8gPSBpc1ZhbGlkO1xuICAgICAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuICAgICAgICB2YXIgc2hvdWxkU2hha2UgPSAhaXNWYWxpZCAmJiAhdGhpcy5pc0ZvY3VzZWRfO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwoc2hvdWxkU2hha2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSB1c2Ugb2YgbmF0aXZlIHZhbGlkYXRpb24uIFVzZSB0aGlzIGZvciBjdXN0b20gdmFsaWRhdGlvbi5cbiAgICAgKiBAcGFyYW0gdXNlTmF0aXZlVmFsaWRhdGlvbiBTZXQgdGhpcyB0byBmYWxzZSB0byBpZ25vcmUgbmF0aXZlIGlucHV0IHZhbGlkYXRpb24uXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VXNlTmF0aXZlVmFsaWRhdGlvbiA9IGZ1bmN0aW9uICh1c2VOYXRpdmVWYWxpZGF0aW9uKSB7XG4gICAgICAgIHRoaXMudXNlTmF0aXZlVmFsaWRhdGlvbl8gPSB1c2VOYXRpdmVWYWxpZGF0aW9uO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaXNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkuZGlzYWJsZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGlzYWJsZWQgU2V0cyB0aGUgdGV4dC1maWVsZCBkaXNhYmxlZCBvciBlbmFibGVkLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgdGhpcy5zdHlsZURpc2FibGVkXyhkaXNhYmxlZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29udGVudCBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBoZWxwZXIgdGV4dC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRIZWxwZXJUZXh0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclRleHRfLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIGxlYWRpbmcgaWNvbi5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRMZWFkaW5nSWNvbkFyaWFMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldExlYWRpbmdJY29uQ29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmxlYWRpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy5sZWFkaW5nSWNvbl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYXJpYSBsYWJlbCBvZiB0aGUgdHJhaWxpbmcgaWNvbi5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRUcmFpbGluZ0ljb25BcmlhTGFiZWwgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhaWxpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy50cmFpbGluZ0ljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgdHJhaWxpbmcgaWNvbi5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRUcmFpbGluZ0ljb25Db250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhaWxpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy50cmFpbGluZ0ljb25fLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgY2hhcmFjdGVyIGNvdW50ZXIgdmFsdWVzIHRoYXQgc2hvd3MgY2hhcmFjdGVycyB1c2VkIGFuZCB0aGUgdG90YWwgY2hhcmFjdGVyIGxpbWl0LlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldENoYXJhY3RlckNvdW50ZXJfID0gZnVuY3Rpb24gKGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYXJhY3RlckNvdW50ZXJfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heExlbmd0aCA9IHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkubWF4TGVuZ3RoO1xuICAgICAgICBpZiAobWF4TGVuZ3RoID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENUZXh0RmllbGRGb3VuZGF0aW9uOiBFeHBlY3RlZCBtYXhsZW5ndGggaHRtbCBwcm9wZXJ0eSBvbiB0ZXh0IGlucHV0IG9yIHRleHRhcmVhLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyQ291bnRlcl8uc2V0Q291bnRlclZhbHVlKGN1cnJlbnRMZW5ndGgsIG1heExlbmd0aCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIFRleHQgRmllbGQgaW5wdXQgZmFpbHMgaW4gY29udmVydGluZyB0aGUgdXNlci1zdXBwbGllZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0JhZElucHV0XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGhlIGJhZElucHV0IHByb3BlcnR5IGlzIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTEg8J+SqS5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsaWRpdHkuYmFkSW5wdXQgfHwgZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgbmF0aXZlIHZhbGlkaXR5IGNoZWNraW5nIChWYWxpZGl0eVN0YXRlLnZhbGlkKS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5pc05hdGl2ZUlucHV0VmFsaWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS52YWxpZGl0eS52YWxpZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0eWxlcyB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSB2YWxpZGl0eSBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zdHlsZVZhbGlkaXR5XyA9IGZ1bmN0aW9uIChpc1ZhbGlkKSB7XG4gICAgICAgIHZhciBJTlZBTElEID0gTURDVGV4dEZpZWxkRm91bmRhdGlvbi5jc3NDbGFzc2VzLklOVkFMSUQ7XG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKElOVkFMSUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhJTlZBTElEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRWYWxpZGl0eShpc1ZhbGlkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGZvY3VzZWQgc3RhdGUuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc3R5bGVGb2N1c2VkXyA9IGZ1bmN0aW9uIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgdmFyIEZPQ1VTRUQgPSBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRk9DVVNFRDtcbiAgICAgICAgaWYgKGlzRm9jdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGT0NVU0VEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRk9DVVNFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0eWxlcyB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zdHlsZURpc2FibGVkXyA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3NlcywgRElTQUJMRUQgPSBfYS5ESVNBQkxFRCwgSU5WQUxJRCA9IF9hLklOVkFMSUQ7XG4gICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKERJU0FCTEVEKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoSU5WQUxJRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKERJU0FCTEVEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUaGUgbmF0aXZlIHRleHQgaW5wdXQgZWxlbWVudCBmcm9tIHRoZSBob3N0IGVudmlyb25tZW50LCBvciBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBmb3IgdW5pdCB0ZXN0cy5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXROYXRpdmVJbnB1dF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRoaXMuYWRhcHRlcl8gbWF5IGJlIHVuZGVmaW5lZCBpbiBmb3VuZGF0aW9uIHVuaXQgdGVzdHMuIFRoaXMgaGFwcGVucyB3aGVuIHRlc3Rkb3VibGUgaXMgY3JlYXRpbmcgYSBtb2NrIG9iamVjdFxuICAgICAgICAvLyBhbmQgaW52b2tlcyB0aGUgc2hvdWxkU2hha2Uvc2hvdWxkRmxvYXQgZ2V0dGVycyAod2hpY2ggaW4gdHVybiBjYWxsIGdldFZhbHVlKCksIHdoaWNoIGNhbGxzIHRoaXMgbWV0aG9kKSBiZWZvcmVcbiAgICAgICAgLy8gaW5pdCgpIGhhcyBiZWVuIGNhbGxlZCBmcm9tIHRoZSBNRENUZXh0RmllbGQgY29uc3RydWN0b3IuIFRvIHdvcmsgYXJvdW5kIHRoYXQgaXNzdWUsIHdlIHJldHVybiBhIGR1bW15IG9iamVjdC5cbiAgICAgICAgdmFyIG5hdGl2ZUlucHV0ID0gdGhpcy5hZGFwdGVyXyA/IHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlSW5wdXQoKSA6IG51bGw7XG4gICAgICAgIHJldHVybiBuYXRpdmVJbnB1dCB8fCB7XG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IC0xLFxuICAgICAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICAgIHZhbGlkaXR5OiB7XG4gICAgICAgICAgICAgICAgYmFkSW5wdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENUZXh0RmllbGRIZWxwZXJUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZEhlbHBlclRleHQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkSGVscGVyVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRIZWxwZXJUZXh0KHJvb3QpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEhlbHBlclRleHQucHJvdG90eXBlLCBcImZvdW5kYXRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKGF0dHIsIHZhbHVlKSB7IHJldHVybiBfdGhpcy5yb290Xy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTsgfSxcbiAgICAgICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRIZWxwZXJUZXh0O1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZEhlbHBlclRleHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEhFTFBFUl9URVhUX1BFUlNJU1RFTlQ6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tcGVyc2lzdGVudCcsXG4gICAgSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0c6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tdmFsaWRhdGlvbi1tc2cnLFxuICAgIFJPT1Q6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dCcsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQVJJQV9ISURERU46ICdhcmlhLWhpZGRlbicsXG4gICAgUk9MRTogJ3JvbGUnLFxuICAgIFJPT1RfU0VMRUNUT1I6IFwiLlwiICsgY3NzQ2xhc3Nlcy5ST09ULFxufTtcbmV4cG9ydCB7IHN0cmluZ3MsIGNzc0NsYXNzZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBzZXRBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBoZWxwZXIgdGV4dCBmaWVsZC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpc1BlcnNpc3RlbnQgU2V0cyB0aGUgcGVyc2lzdGVuY3kgb2YgdGhlIGhlbHBlciB0ZXh0LlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRQZXJzaXN0ZW50ID0gZnVuY3Rpb24gKGlzUGVyc2lzdGVudCkge1xuICAgICAgICBpZiAoaXNQZXJzaXN0ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpc1ZhbGlkYXRpb24gVHJ1ZSB0byBtYWtlIHRoZSBoZWxwZXIgdGV4dCBhY3QgYXMgYW4gZXJyb3IgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWYWxpZGF0aW9uID0gZnVuY3Rpb24gKGlzVmFsaWRhdGlvbikge1xuICAgICAgICBpZiAoaXNWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIGhlbHBlciB0ZXh0IHZpc2libGUgdG8gdGhlIHNjcmVlbiByZWFkZXIuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24ucHJvdG90eXBlLnNob3dUb1NjcmVlblJlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKHN0cmluZ3MuQVJJQV9ISURERU4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsaWRpdHkgb2YgdGhlIGhlbHBlciB0ZXh0IGJhc2VkIG9uIHRoZSBpbnB1dCB2YWxpZGl0eS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmFsaWRpdHkgPSBmdW5jdGlvbiAoaW5wdXRJc1ZhbGlkKSB7XG4gICAgICAgIHZhciBoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgICAgICB2YXIgaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgICAgIHZhciB2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5ID0gaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyAmJiAhaW5wdXRJc1ZhbGlkO1xuICAgICAgICBpZiAodmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuUk9MRSwgJ2FsZXJ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5ST0xFKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlbHBlclRleHRJc1BlcnNpc3RlbnQgJiYgIXZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIGhlbHAgdGV4dCBmcm9tIHNjcmVlbiByZWFkZXJzLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5oaWRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9ISURERU4sICd0cnVlJyk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCB7IGNzc0NsYXNzZXMgYXMgaGVscGVyVGV4dENzc0NsYXNzZXMsIHN0cmluZ3MgYXMgaGVscGVyVGV4dFN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1RleHRGaWVsZEljb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkSWNvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRJY29uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1RleHRGaWVsZEljb24uYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEljb24ocm9vdCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbi5wcm90b3R5cGUsIFwiZm91bmRhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl87XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZEljb24ucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgZ2V0QXR0cjogZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmdldEF0dHJpYnV0ZShhdHRyKTsgfSxcbiAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uIChhdHRyLCB2YWx1ZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBfdGhpcy5yb290Xy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7IH0sXG4gICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy51bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIG5vdGlmeUljb25BY3Rpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmVtaXQoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24uc3RyaW5ncy5JQ09OX0VWRU5ULCB7fSAvKiBldnREYXRhICovLCB0cnVlIC8qIHNob3VsZEJ1YmJsZSAqLyk7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkSWNvbjtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRJY29uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgc3RyaW5ncyA9IHtcbiAgICBJQ09OX0VWRU5UOiAnTURDVGV4dEZpZWxkOmljb24nLFxuICAgIElDT05fUk9MRTogJ2J1dHRvbicsXG59O1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgUk9PVDogJ21kYy10ZXh0LWZpZWxkX19pY29uJyxcbn07XG5leHBvcnQgeyBzdHJpbmdzLCBjc3NDbGFzc2VzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBJTlRFUkFDVElPTl9FVkVOVFMgPSBbJ2NsaWNrJywgJ2tleWRvd24nXTtcbnZhciBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2F2ZWRUYWJJbmRleF8gPSBudWxsO1xuICAgICAgICBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXRBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUljb25BY3Rpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlcl8uZ2V0QXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgSU5URVJBQ1RJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBJTlRFUkFDVElPTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGlzYWJsZWQgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkVGFiSW5kZXhfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoJ3JvbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigndGFiaW5kZXgnLCB0aGlzLnNhdmVkVGFiSW5kZXhfKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigncm9sZScsIHN0cmluZ3MuSUNPTl9ST0xFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFyaWFMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGlzRW50ZXJLZXkgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snIHx8IGlzRW50ZXJLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SWNvbkFjdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCB7IGNzc0NsYXNzZXMgYXMgaWNvbkNzc0NsYXNzZXMsIHN0cmluZ3MgYXMgaWNvblN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2NoYXJhY3Rlci1jb3VudGVyL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vaGVscGVyLXRleHQvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9pY29uL2luZGV4Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENSaXBwbGUgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9maXhlZC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiB9IGZyb20gJy4vc2hvcnQvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9zdGFuZGFyZC9mb3VuZGF0aW9uJztcbnZhciBNRENUb3BBcHBCYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVG9wQXBwQmFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RvcEFwcEJhcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUb3BBcHBCYXIuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RvcEFwcEJhcihyb290KTtcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyaXBwbGVGYWN0b3J5KSB7XG4gICAgICAgIGlmIChyaXBwbGVGYWN0b3J5ID09PSB2b2lkIDApIHsgcmlwcGxlRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gTURDUmlwcGxlLmF0dGFjaFRvKGVsKTsgfTsgfVxuICAgICAgICB0aGlzLm5hdkljb25fID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTkFWSUdBVElPTl9JQ09OX1NFTEVDVE9SKTtcbiAgICAgICAgLy8gR2V0IGFsbCBpY29ucyBpbiB0aGUgdG9vbGJhciBhbmQgaW5zdGFudGlhdGUgdGhlIHJpcHBsZXNcbiAgICAgICAgdmFyIGljb25zID0gW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BQ1RJT05fSVRFTV9TRUxFQ1RPUikpO1xuICAgICAgICBpZiAodGhpcy5uYXZJY29uXykge1xuICAgICAgICAgICAgaWNvbnMucHVzaCh0aGlzLm5hdkljb25fKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmljb25SaXBwbGVzXyA9IGljb25zLm1hcChmdW5jdGlvbiAoaWNvbikge1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IHJpcHBsZUZhY3RvcnkoaWNvbik7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8gPSB3aW5kb3c7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2tfID0gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2suYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICAgICAgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemVfID0gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfID0gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVUYXJnZXRTY3JvbGwuYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyk7XG4gICAgICAgIGlmICh0aGlzLm5hdkljb25fKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkljb25fLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2tfKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNGaXhlZCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuRklYRURfQ0xBU1MpO1xuICAgICAgICB2YXIgaXNTaG9ydCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuU0hPUlRfQ0xBU1MpO1xuICAgICAgICBpZiAoIWlzU2hvcnQgJiYgIWlzRml4ZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZV8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaWNvblJpcHBsZXNfLmZvckVhY2goZnVuY3Rpb24gKGljb25SaXBwbGUpIHsgcmV0dXJuIGljb25SaXBwbGUuZGVzdHJveSgpOyB9KTtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyk7XG4gICAgICAgIGlmICh0aGlzLm5hdkljb25fKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkljb25fLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2tfKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNGaXhlZCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuRklYRURfQ0xBU1MpO1xuICAgICAgICB2YXIgaXNTaG9ydCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuU0hPUlRfQ0xBU1MpO1xuICAgICAgICBpZiAoIWlzU2hvcnQgJiYgIWlzRml4ZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZV8pO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgTURDVG9wQXBwQmFyLnByb3RvdHlwZS5zZXRTY3JvbGxUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIC8vIFJlbW92ZSBzY3JvbGwgaGFuZGxlciBmcm9tIHRoZSBwcmV2aW91cyBzY3JvbGwgdGFyZ2V0XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8gPSB0YXJnZXQ7XG4gICAgICAgIC8vIEluaXRpYWxpemUgc2Nyb2xsIGhhbmRsZXIgb24gdGhlIG5ldyBzY3JvbGwgdGFyZ2V0XG4gICAgICAgIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyA9XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZVRhcmdldFNjcm9sbC5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfKTtcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7IHJldHVybiBfdGhpcy5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgZ2V0VG9wQXBwQmFySGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGllbnRIZWlnaHQ7IH0sXG4gICAgICAgICAgICBub3RpZnlOYXZpZ2F0aW9uSWNvbkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmVtaXQoc3RyaW5ncy5OQVZJR0FUSU9OX0VWRU5ULCB7fSk7IH0sXG4gICAgICAgICAgICBnZXRWaWV3cG9ydFNjcm9sbFk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2luID0gX3RoaXMuc2Nyb2xsVGFyZ2V0XztcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5zY3JvbGxUYXJnZXRfO1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW4ucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHdpbi5wYWdlWU9mZnNldCA6IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUb3RhbEFjdGlvbkl0ZW1zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQUNUSU9OX0lURU1fU0VMRUNUT1IpLmxlbmd0aDsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgdmFyIGZvdW5kYXRpb247XG4gICAgICAgIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLlNIT1JUX0NMQVNTKSkge1xuICAgICAgICAgICAgZm91bmRhdGlvbiA9IG5ldyBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5GSVhFRF9DTEFTUykpIHtcbiAgICAgICAgICAgIGZvdW5kYXRpb24gPSBuZXcgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm91bmRhdGlvbiA9IG5ldyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZGF0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RvcEFwcEJhcjtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENUb3BBcHBCYXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEZJWEVEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1maXhlZCcsXG4gICAgRklYRURfU0NST0xMRURfQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLWZpeGVkLXNjcm9sbGVkJyxcbiAgICBTSE9SVF9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tc2hvcnQnLFxuICAgIFNIT1JUX0NPTExBUFNFRF9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tc2hvcnQtY29sbGFwc2VkJyxcbiAgICBTSE9SVF9IQVNfQUNUSU9OX0lURU1fQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLXNob3J0LWhhcy1hY3Rpb24taXRlbScsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgREVCT1VOQ0VfVEhST1RUTEVfUkVTSVpFX1RJTUVfTVM6IDEwMCxcbiAgICBNQVhfVE9QX0FQUF9CQVJfSEVJR0hUOiAxMjgsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQUNUSU9OX0lURU1fU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbScsXG4gICAgTkFWSUdBVElPTl9FVkVOVDogJ01EQ1RvcEFwcEJhcjpuYXYnLFxuICAgIE5BVklHQVRJT05fSUNPTl9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbicsXG4gICAgUk9PVF9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXInLFxuICAgIFRJVExFX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcl9fdGl0bGUnLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBjc3NDbGFzc2VzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gfSBmcm9tICcuLi9zdGFuZGFyZC9mb3VuZGF0aW9uJztcbnZhciBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZSB2YXJpYWJsZSBmb3IgdGhlIHByZXZpb3VzIHNjcm9sbCBpdGVyYXRpb24gdG9wIGFwcCBiYXIgc3RhdGVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLndhc1Njcm9sbGVkXyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBoYW5kbGVyIGZvciBhcHBseWluZy9yZW1vdmluZyB0aGUgbW9kaWZpZXIgY2xhc3Mgb24gdGhlIGZpeGVkIHRvcCBhcHAgYmFyLlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGFyZ2V0U2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbCA9IHRoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCk7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsIDw9IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndhc1Njcm9sbGVkXykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5GSVhFRF9TQ1JPTExFRF9DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy53YXNTY3JvbGxlZF8gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy53YXNTY3JvbGxlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuRklYRURfU0NST0xMRURfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMud2FzU2Nyb2xsZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbjtcbn0oTURDVG9wQXBwQmFyRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBvcHRpb25hbCBhcmd1bWVudCBpcyBub3QgYSBicmFuY2ggc3RhdGVtZW50ICovXG4gICAgZnVuY3Rpb24gTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUb3BBcHBCYXJBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBzZXRTdHlsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFRvcEFwcEJhckhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlOYXZpZ2F0aW9uSWNvbkNsaWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRWaWV3cG9ydFNjcm9sbFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VG90YWxBY3Rpb25JdGVtczogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKiogT3RoZXIgdmFyaWFudHMgb2YgVG9wQXBwQmFyIGZvdW5kYXRpb24gb3ZlcnJpZGVzIHRoaXMgbWV0aG9kICovXG4gICAgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRhcmdldFNjcm9sbCA9IGZ1bmN0aW9uICgpIHsgfTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eVxuICAgIC8qKiBPdGhlciB2YXJpYW50cyBvZiBUb3BBcHBCYXIgZm91bmRhdGlvbiBvdmVycmlkZXMgdGhpcyBtZXRob2QgKi9cbiAgICBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkgeyB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5XG4gICAgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZU5hdmlnYXRpb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlOYXZpZ2F0aW9uSWNvbkNsaWNrZWQoKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9maXhlZC9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc2hvcnQvZm91bmRhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3N0YW5kYXJkL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB9IGZyb20gJy4uL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG9wdGlvbmFsIGFyZ3VtZW50IGlzIG5vdCBhIGJyYW5jaCBzdGF0ZW1lbnQgKi9cbiAgICBmdW5jdGlvbiBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhZGFwdGVyKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc0NvbGxhcHNlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNBbHdheXNDb2xsYXBzZWRfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUsIFwiaXNDb2xsYXBzZWRcIiwge1xuICAgICAgICAvLyBQdWJsaWMgdmlzaWJpbGl0eSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0NvbGxhcHNlZF87XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldFRvdGFsQWN0aW9uSXRlbXMoKSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9IQVNfQUNUSU9OX0lURU1fQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGluaXRpYWxpemVkIHdpdGggU0hPUlRfQ09MTEFQU0VEX0NMQVNTLCB0aGUgYmFyIHNob3VsZCBhbHdheXMgYmUgY29sbGFwc2VkXG4gICAgICAgIHRoaXMuc2V0QWx3YXlzQ29sbGFwc2VkKHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9DT0xMQVBTRURfQ0xBU1MpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCBpZiB0aGUgc2hvcnQgdG9wIGFwcCBiYXIgc2hvdWxkIGFsd2F5cyBiZSBjb2xsYXBzZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgV2hlbiBgdHJ1ZWAsIGJhciB3aWxsIGFsd2F5cyBiZSBjb2xsYXBzZWQuIFdoZW4gYGZhbHNlYCwgYmFyIG1heSBjb2xsYXBzZSBvciBleHBhbmQgYmFzZWQgb24gc2Nyb2xsLlxuICAgICAqL1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QWx3YXlzQ29sbGFwc2VkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNBbHdheXNDb2xsYXBzZWRfID0gISF2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNBbHdheXNDb2xsYXBzZWRfKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbGV0IG1heWJlQ29sbGFwc2VCYXJfIGRldGVybWluZSBpZiB0aGUgYmFyIHNob3VsZCBiZSBjb2xsYXBzZWRcbiAgICAgICAgICAgIHRoaXMubWF5YmVDb2xsYXBzZUJhcl8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRBbHdheXNDb2xsYXBzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWx3YXlzQ29sbGFwc2VkXztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbCBoYW5kbGVyIGZvciBhcHBseWluZy9yZW1vdmluZyB0aGUgY29sbGFwc2VkIG1vZGlmaWVyIGNsYXNzIG9uIHRoZSBzaG9ydCB0b3AgYXBwIGJhci5cbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRhcmdldFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tYXliZUNvbGxhcHNlQmFyXygpO1xuICAgIH07XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5tYXliZUNvbGxhcHNlQmFyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbHdheXNDb2xsYXBzZWRfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA8PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY29sbGFwc2VfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDb2xsYXBzZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS51bmNvbGxhcHNlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0NPTExBUFNFRF9DTEFTUyk7XG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWRfID0gZmFsc2U7XG4gICAgfTtcbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmNvbGxhcHNlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0NPTExBUFNFRF9DTEFTUyk7XG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWRfID0gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb247XG59KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG51bWJlcnMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24gfSBmcm9tICcuLi9mb3VuZGF0aW9uJztcbnZhciBJTklUSUFMX1ZBTFVFID0gMDtcbnZhciBNRENUb3BBcHBCYXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RvcEFwcEJhckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG9wdGlvbmFsIGFyZ3VtZW50IGlzIG5vdCBhIGJyYW5jaCBzdGF0ZW1lbnQgKi9cbiAgICBmdW5jdGlvbiBNRENUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYWRhcHRlcikgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUgdG9wIGFwcCBiYXIgd2FzIGRvY2tlZCBpbiB0aGUgcHJldmlvdXMgc2Nyb2xsIGhhbmRsZXIgaXRlcmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMud2FzRG9ja2VkXyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHRvcCBhcHAgYmFyIGlzIGRvY2tlZCBpbiB0aGUgZnVsbHkgc2hvd24gcG9zaXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5pc0RvY2tlZFNob3dpbmdfID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhcmlhYmxlIGZvciBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgdG9wIGFwcCBiYXJcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZWQgdG8gcHJldmVudCB0aGUgdG9wIGFwcCBiYXIgZnJvbSBiZWluZyBzY3JvbGxlZCBvdXQgb2YgdmlldyBkdXJpbmcgcmVzaXplIGV2ZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGltZW91dCB0aGF0J3MgdXNlZCB0byB0aHJvdHRsZSB0aGUgcmVzaXplIGV2ZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMucmVzaXplVGhyb3R0bGVJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRpbWVvdXQgdGhhdCdzIHVzZWQgdG8gZGVib3VuY2UgdG9nZ2xpbmcgdGhlIGlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyB2YXJpYWJsZSBhZnRlciBhIHJlc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMucmVzaXplRGVib3VuY2VJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICBfdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb25fID0gX3RoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCk7XG4gICAgICAgIF90aGlzLnRvcEFwcEJhckhlaWdodF8gPSBfdGhpcy5hZGFwdGVyXy5nZXRUb3BBcHBCYXJIZWlnaHQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndG9wJywgJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGhhbmRsZXIgZm9yIHRoZSBkZWZhdWx0IHNjcm9sbCBiZWhhdmlvciBvZiB0aGUgdG9wIGFwcCBiYXIuXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGFyZ2V0U2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gTWF0aC5tYXgodGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKSwgMCk7XG4gICAgICAgIHZhciBkaWZmID0gY3VycmVudFNjcm9sbFBvc2l0aW9uIC0gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb25fO1xuICAgICAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl8gPSBjdXJyZW50U2Nyb2xsUG9zaXRpb247XG4gICAgICAgIC8vIElmIHRoZSB3aW5kb3cgaXMgYmVpbmcgcmVzaXplZCB0aGUgbGFzdFNjcm9sbFBvc2l0aW9uXyBuZWVkcyB0byBiZSB1cGRhdGVkIGJ1dCB0aGVcbiAgICAgICAgLy8gY3VycmVudCBzY3JvbGwgb2YgdGhlIHRvcCBhcHAgYmFyIHNob3VsZCBzdGF5IGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICAgICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfIC09IGRpZmY7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8pID4gdGhpcy50b3BBcHBCYXJIZWlnaHRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA9IC10aGlzLnRvcEFwcEJhckhlaWdodF87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1vdmVUb3BBcHBCYXJfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvcCBhcHAgYmFyIHJlc2l6ZSBoYW5kbGVyIHRoYXQgdGhyb3R0bGUvZGVib3VuY2UgZnVuY3Rpb25zIHRoYXQgZXhlY3V0ZSB1cGRhdGVzLlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVdpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhyb3R0bGUgcmVzaXplIGV2ZW50cyAxMCBwL3NcbiAgICAgICAgaWYgKCF0aGlzLnJlc2l6ZVRocm90dGxlSWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZVRocm90dGxlSWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzaXplVGhyb3R0bGVJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICAgICAgICAgIF90aGlzLnRocm90dGxlZFJlc2l6ZUhhbmRsZXJfKCk7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkRFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZURlYm91bmNlSWRfKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVEZWJvdW5jZUlkXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNpemVEZWJvdW5jZUlkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsKCk7XG4gICAgICAgICAgICBfdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLnJlc2l6ZURlYm91bmNlSWRfID0gSU5JVElBTF9WQUxVRTtcbiAgICAgICAgfSwgbnVtYmVycy5ERUJPVU5DRV9USFJPVFRMRV9SRVNJWkVfVElNRV9NUyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdGhlIERPTSBuZWVkcyB0byB1cGRhdGUuXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tGb3JVcGRhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2Zmc2NyZWVuQm91bmRhcnlUb3AgPSAtdGhpcy50b3BBcHBCYXJIZWlnaHRfO1xuICAgICAgICB2YXIgaGFzQW55UGl4ZWxzT2Zmc2NyZWVuID0gdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA8IDA7XG4gICAgICAgIHZhciBoYXNBbnlQaXhlbHNPbnNjcmVlbiA9IHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPiBvZmZzY3JlZW5Cb3VuZGFyeVRvcDtcbiAgICAgICAgdmFyIHBhcnRpYWxseVNob3dpbmcgPSBoYXNBbnlQaXhlbHNPZmZzY3JlZW4gJiYgaGFzQW55UGl4ZWxzT25zY3JlZW47XG4gICAgICAgIC8vIElmIGl0J3MgcGFydGlhbGx5IHNob3dpbmcsIGl0IGNhbid0IGJlIGRvY2tlZC5cbiAgICAgICAgaWYgKHBhcnRpYWxseVNob3dpbmcpIHtcbiAgICAgICAgICAgIHRoaXMud2FzRG9ja2VkXyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90IHByZXZpb3VzbHkgZG9ja2VkIGFuZCBub3QgcGFydGlhbGx5IHNob3dpbmcsIGl0J3Mgbm93IGRvY2tlZC5cbiAgICAgICAgICAgIGlmICghdGhpcy53YXNEb2NrZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXNEb2NrZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNEb2NrZWRTaG93aW5nXyAhPT0gaGFzQW55UGl4ZWxzT25zY3JlZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRG9ja2VkU2hvd2luZ18gPSBoYXNBbnlQaXhlbHNPbnNjcmVlbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFydGlhbGx5U2hvd2luZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIG1vdmUgdGhlIHRvcCBhcHAgYmFyIGlmIG5lZWRlZC5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5tb3ZlVG9wQXBwQmFyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tGb3JVcGRhdGVfKCkpIHtcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRvcCBhcHAgYmFyIGlzIGZ1bGx5IGhpZGRlbiB3ZSB1c2UgdGhlIG1heCBwb3RlbnRpYWwgdG9wIGFwcCBiYXIgaGVpZ2h0IGFzIG91ciBvZmZzZXRcbiAgICAgICAgICAgIC8vIHNvIHRoZSB0b3AgYXBwIGJhciBkb2Vzbid0IHNob3cgaWYgdGhlIHdpbmRvdyByZXNpemVzIGFuZCB0aGUgbmV3IGhlaWdodCA+IHRoZSBvbGQgaGVpZ2h0LlxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF87XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0KSA+PSB0aGlzLnRvcEFwcEJhckhlaWdodF8pIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAtbnVtYmVycy5NQVhfVE9QX0FQUF9CQVJfSEVJR0hUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndG9wJywgb2Zmc2V0ICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRocm90dGxlZCBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIHRvcCBhcHAgYmFyIHNjcm9sbGVkIHZhbHVlcyBpZiB0aGVcbiAgICAgKiB0b3AgYXBwIGJhciBoZWlnaHQgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS50aHJvdHRsZWRSZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmdldFRvcEFwcEJhckhlaWdodCgpO1xuICAgICAgICBpZiAodGhpcy50b3BBcHBCYXJIZWlnaHRfICE9PSBjdXJyZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLndhc0RvY2tlZF8gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSB0b3AgYXBwIGJhciBoYXMgYSBkaWZmZXJlbnQgaGVpZ2h0IGRlcGVuZGluZyBvbiB0aGUgc2NyZWVuIHdpZHRoLCB0aGlzXG4gICAgICAgICAgICAvLyB3aWxsIGVuc3VyZSB0aGF0IHRoZSB0b3AgYXBwIGJhciByZW1haW5zIGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGlmXG4gICAgICAgICAgICAvLyBjb21wbGV0ZWx5IGhpZGRlbiBhbmQgYSByZXNpemUgbWFrZXMgdGhlIHRvcCBhcHAgYmFyIGEgZGlmZmVyZW50IGhlaWdodC5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gLT0gdGhpcy50b3BBcHBCYXJIZWlnaHRfIC0gY3VycmVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudG9wQXBwQmFySGVpZ2h0XyA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGwoKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUb3BBcHBCYXJGb3VuZGF0aW9uO1xufShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVG9wQXBwQmFyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RvcEFwcEJhckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLlBhcmFsbGF4ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxufSx7fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lLCBtb2R1bGVMb2FkVGltZSwgbm9kZUxvYWRUaW1lLCB1cFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbm9kZUxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBtb2R1bGVMb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gICAgdXBUaW1lID0gcHJvY2Vzcy51cHRpbWUoKSAqIDFlOTtcbiAgICBub2RlTG9hZFRpbWUgPSBtb2R1bGVMb2FkVGltZSAtIHVwVGltZTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuXG59LHtcIl9wcm9jZXNzXCI6M31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG5cbn0se1wicGVyZm9ybWFuY2Utbm93XCI6Mn1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiogUGFyYWxsYXguanNcbiogQGF1dGhvciBNYXR0aGV3IFdhZ2VyZmllbGQgLSBAd2FnZXJmaWVsZCwgUmVuw6kgUm90aCAtIG1haWxAcmVuZXJvdGgub3JnXG4qIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgcGFyYWxsYXggZWZmZWN0IGJldHdlZW4gYW4gYXJyYXkgb2YgbGF5ZXJzLFxuKiAgICAgICAgICAgICAgZHJpdmluZyB0aGUgbW90aW9uIGZyb20gdGhlIGd5cm9zY29wZSBvdXRwdXQgb2YgYSBzbWFydGRldmljZS5cbiogICAgICAgICAgICAgIElmIG5vIGd5cm9zY29wZSBpcyBhdmFpbGFibGUsIHRoZSBjdXJzb3IgcG9zaXRpb24gaXMgdXNlZC5cbiovXG5cbnZhciBycUFuRnIgPSByZXF1aXJlKCdyYWYnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCAnd2Via2l0J10sIFsnLW1vei0nLCAnTW96J10sIFsnLW8tJywgJ08nXSwgWyctbXMtJywgJ21zJ11dLFxuXG4gIGNsYW1wOiBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbWluIDwgbWF4ID8gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlIDogdmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlO1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICByZXR1cm4gaGVscGVycy5kZXNlcmlhbGl6ZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkpO1xuICB9LFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LFxuICBjYW1lbENhc2U6IGZ1bmN0aW9uIGNhbWVsQ2FzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8tKyguKT8vZywgZnVuY3Rpb24gKG1hdGNoLCBjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKSA6ICcnO1xuICAgIH0pO1xuICB9LFxuICBhY2NlbGVyYXRlOiBmdW5jdGlvbiBhY2NlbGVyYXRlKGVsZW1lbnQpIHtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMC4wMDAxZGVnKScpO1xuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKTtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAnYmFja2ZhY2UtdmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgfSxcbiAgdHJhbnNmb3JtU3VwcG9ydDogZnVuY3Rpb24gdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMF0gKyAndHJhbnNmb3JtJztcbiAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICdUcmFuc2Zvcm0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJztcbiAgICAgICAganNQcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnMkQnOlxuICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5U3VwcG9ydDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczRCc6XG4gICAgICAgIGlmIChwcm9wZXJ0eVN1cHBvcnQpIHtcbiAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpLFxuICAgICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAgIGRvY3VtZW50T3ZlcmZsb3cgPSBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3csXG4gICAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSBmYWxzZTtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KTtcbiAgICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wZXJ0eVZhbHVlLmxlbmd0aCA+IDAgJiYgcHJvcGVydHlWYWx1ZSAhPT0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY3VtZW50T3ZlcmZsb3c7XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAgIGlmIChpc0NyZWF0ZWRCb2R5KSB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlU3VwcG9ydDtcbiAgfSxcbiAgY3NzOiBmdW5jdGlvbiBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldO1xuICAgIGlmICghanNQcm9wZXJ0eSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gaGVscGVycy5jYW1lbENhc2UoaGVscGVycy52ZW5kb3JzW2ldWzFdICsgJy0nICsgcHJvcGVydHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9IHZhbHVlO1xuICB9XG59O1xuXG52YXIgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgREVGQVVMVFMgPSB7XG4gIHJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICBjbGlwUmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gIGlucHV0RWxlbWVudDogbnVsbCxcbiAgaG92ZXJPbmx5OiBmYWxzZSxcbiAgY2FsaWJyYXRpb25UaHJlc2hvbGQ6IDEwMCxcbiAgY2FsaWJyYXRpb25EZWxheTogNTAwLFxuICBzdXBwb3J0RGVsYXk6IDUwMCxcbiAgY2FsaWJyYXRlWDogZmFsc2UsXG4gIGNhbGlicmF0ZVk6IHRydWUsXG4gIGludmVydFg6IHRydWUsXG4gIGludmVydFk6IHRydWUsXG4gIGxpbWl0WDogZmFsc2UsXG4gIGxpbWl0WTogZmFsc2UsXG4gIHNjYWxhclg6IDEwLjAsXG4gIHNjYWxhclk6IDEwLjAsXG4gIGZyaWN0aW9uWDogMC4xLFxuICBmcmljdGlvblk6IDAuMSxcbiAgb3JpZ2luWDogMC41LFxuICBvcmlnaW5ZOiAwLjUsXG4gIHBvaW50ZXJFdmVudHM6IGZhbHNlLFxuICBwcmVjaXNpb246IDEsXG4gIG9uUmVhZHk6IG51bGwsXG4gIHNlbGVjdG9yOiBudWxsXG59O1xuXG52YXIgUGFyYWxsYXggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhcmFsbGF4KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsYXgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2JqZWN0QXNzaWduKHRoaXMsIERFRkFVTFRTLCBkYXRhLCBvcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMuY2FsaWJyYXRpb25UaW1lciA9IG51bGw7XG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlO1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVwdGhzWCA9IFtdO1xuICAgIHRoaXMuZGVwdGhzWSA9IFtdO1xuICAgIHRoaXMucmFmID0gbnVsbDtcblxuICAgIHRoaXMuYm91bmRzID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwO1xuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IDA7XG4gICAgdGhpcy5lbGVtZW50V2lkdGggPSAwO1xuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDA7XG5cbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gMDtcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gMDtcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDA7XG4gICAgdGhpcy5lbGVtZW50UmFuZ2VZID0gMDtcblxuICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMDtcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDA7XG5cbiAgICB0aGlzLmlucHV0WCA9IDA7XG4gICAgdGhpcy5pbnB1dFkgPSAwO1xuXG4gICAgdGhpcy5tb3Rpb25YID0gMDtcbiAgICB0aGlzLm1vdGlvblkgPSAwO1xuXG4gICAgdGhpcy52ZWxvY2l0eVggPSAwO1xuICAgIHRoaXMudmVsb2NpdHlZID0gMDtcblxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uID0gdGhpcy5vbkRldmljZU9yaWVudGF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uT3JpZW50YXRpb25UaW1lciA9IHRoaXMub25PcmllbnRhdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdGlvblRpbWVyID0gdGhpcy5vbk1vdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BbmltYXRpb25GcmFtZSA9IHRoaXMub25BbmltYXRpb25GcmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dDZW50ZXJYID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsO1xuICAgIHRoaXMud2luZG93UmFkaXVzWCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gbnVsbDtcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgdGhpcy5kZXNrdG9wID0gIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxCQjEwfG1vYml8dGFibGV0fG9wZXJhIG1pbml8bmV4dXMgNykvaSk7XG4gICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gISF3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcDtcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcDtcbiAgICB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID0gMDtcbiAgICB0aGlzLm1vdGlvblN0YXR1cyA9IDA7XG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXJhbGxheCwgW3tcbiAgICBrZXk6ICdpbml0aWFsaXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCcyRCcpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCA9IGhlbHBlcnMudHJhbnNmb3JtU3VwcG9ydCgnM0QnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5hY2NlbGVyYXRlKHRoaXMuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIH1cblxuICAgICAgLy8gUG9pbnRlciBldmVudHNcbiAgICAgIGlmICghdGhpcy5wb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cFxuICAgICAgdGhpcy51cGRhdGVMYXllcnMoKTtcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIHRoaXMucXVldWVDYWxpYnJhdGlvbih0aGlzLmNhbGlicmF0aW9uRGVsYXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RvUmVhZHlDYWxsYmFjaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICAgIGlmICh0aGlzLm9uUmVhZHkpIHtcbiAgICAgICAgdGhpcy5vblJlYWR5KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlTGF5ZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlTGF5ZXJzKCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlcHRoc1ggPSBbXTtcbiAgICAgIHRoaXMuZGVwdGhzWSA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XTtcblxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF5ZXIuc3R5bGUucG9zaXRpb24gPSBpbmRleCA/ICdhYnNvbHV0ZScgOiAncmVsYXRpdmUnO1xuICAgICAgICBsYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbGF5ZXIuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIGxheWVyLnN0eWxlLnRvcCA9IDA7XG5cbiAgICAgICAgdmFyIGRlcHRoID0gaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgnKSB8fCAwO1xuICAgICAgICB0aGlzLmRlcHRoc1gucHVzaChoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aC14JykgfHwgZGVwdGgpO1xuICAgICAgICB0aGlzLmRlcHRoc1kucHVzaChoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aC15JykgfHwgZGVwdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZURpbWVuc2lvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaW1lbnNpb25zKCkge1xuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YO1xuICAgICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpblk7XG4gICAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpO1xuICAgICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlQm91bmRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQm91bmRzKCkge1xuICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmlucHV0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWCA9IHRoaXMuYm91bmRzLmxlZnQ7XG4gICAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSB0aGlzLmJvdW5kcy50b3A7XG4gICAgICB0aGlzLmVsZW1lbnRXaWR0aCA9IHRoaXMuYm91bmRzLndpZHRoO1xuICAgICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IHRoaXMuZWxlbWVudFdpZHRoICogdGhpcy5vcmlnaW5YO1xuICAgICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IHRoaXMuZWxlbWVudEhlaWdodCAqIHRoaXMub3JpZ2luWTtcbiAgICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclgsIHRoaXMuZWxlbWVudFdpZHRoIC0gdGhpcy5lbGVtZW50Q2VudGVyWCk7XG4gICAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSBNYXRoLm1heCh0aGlzLmVsZW1lbnRDZW50ZXJZLCB0aGlzLmVsZW1lbnRIZWlnaHQgLSB0aGlzLmVsZW1lbnRDZW50ZXJZKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdxdWV1ZUNhbGlicmF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVldWVDYWxpYnJhdGlvbihkZWxheSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcik7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pO1xuICAgICAgICB0aGlzLmRldGVjdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uT3JpZW50YXRpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblggPSAwO1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDA7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxpYnJhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxpYnJhdGUoeCwgeSkge1xuICAgICAgdGhpcy5jYWxpYnJhdGVYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVYIDogeDtcbiAgICAgIHRoaXMuY2FsaWJyYXRlWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsaWJyYXRlWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW52ZXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW52ZXJ0KHgsIHkpIHtcbiAgICAgIHRoaXMuaW52ZXJ0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuaW52ZXJ0WCA6IHg7XG4gICAgICB0aGlzLmludmVydFkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZyaWN0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZnJpY3Rpb24oeCwgeSkge1xuICAgICAgdGhpcy5mcmljdGlvblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWCA6IHg7XG4gICAgICB0aGlzLmZyaWN0aW9uWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuZnJpY3Rpb25ZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzY2FsYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY2FsYXIoeCwgeSkge1xuICAgICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeDtcbiAgICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGltaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW1pdCh4LCB5KSB7XG4gICAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeDtcbiAgICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29yaWdpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9yaWdpbih4LCB5KSB7XG4gICAgICB0aGlzLm9yaWdpblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblggOiB4O1xuICAgICAgdGhpcy5vcmlnaW5ZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcmlnaW5ZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRJbnB1dEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgICB4ID0geC50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSArICdweCc7XG4gICAgICB5ID0geS50b0ZpeGVkKHRoaXMucHJlY2lzaW9uKSArICdweCc7XG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgeCArICcsJyArIHkgKyAnLDApJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSB4O1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25PcmllbnRhdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0ICYmIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPT09IDApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25TdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW90aW9uVGltZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdGlvblRpbWVyKCkge1xuICAgICAgaWYgKHRoaXMubW90aW9uU3VwcG9ydCAmJiB0aGlzLm1vdGlvblN0YXR1cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2FsaWJyYXRpb25UaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbldpbmRvd1Jlc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25BbmltYXRpb25GcmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgdmFyIGNhbGlicmF0ZWRJbnB1dFggPSB0aGlzLmlucHV0WCAtIHRoaXMuY2FsaWJyYXRpb25YLFxuICAgICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZO1xuICAgICAgaWYgKE1hdGguYWJzKGNhbGlicmF0ZWRJbnB1dFgpID4gdGhpcy5jYWxpYnJhdGlvblRocmVzaG9sZCB8fCBNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHtcbiAgICAgICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKDApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gdGhpcy5jYWxpYnJhdGVYID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZO1xuICAgICAgICB0aGlzLm1vdGlvblkgPSB0aGlzLmNhbGlicmF0ZVkgPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdGlvblggPSB0aGlzLmNhbGlicmF0ZVggPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFg7XG4gICAgICAgIHRoaXMubW90aW9uWSA9IHRoaXMuY2FsaWJyYXRlWSA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApO1xuICAgICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApO1xuICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblgsIC10aGlzLmxpbWl0WCwgdGhpcy5saW1pdFgpO1xuICAgICAgfVxuICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRZKSkpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpO1xuICAgICAgfVxuICAgICAgdGhpcy52ZWxvY2l0eVggKz0gKHRoaXMubW90aW9uWCAtIHRoaXMudmVsb2NpdHlYKSAqIHRoaXMuZnJpY3Rpb25YO1xuICAgICAgdGhpcy52ZWxvY2l0eVkgKz0gKHRoaXMubW90aW9uWSAtIHRoaXMudmVsb2NpdHlZKSAqIHRoaXMuZnJpY3Rpb25ZO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF0sXG4gICAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgICAgZGVwdGhZID0gdGhpcy5kZXB0aHNZW2luZGV4XSxcbiAgICAgICAgICAgIHhPZmZzZXQgPSB0aGlzLnZlbG9jaXR5WCAqIChkZXB0aFggKiAodGhpcy5pbnZlcnRYID8gLTEgOiAxKSksXG4gICAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncm90YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm90YXRlKGJldGEsIGdhbW1hKSB7XG4gICAgICAvLyBFeHRyYWN0IFJvdGF0aW9uXG4gICAgICB2YXIgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLFxuICAgICAgICAgIC8vICAtOTAgOjogOTBcbiAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVI7IC8vIC0xODAgOjogMTgwXG5cbiAgICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICAgIHZhciBwb3J0cmFpdCA9IHRoaXMud2luZG93SGVpZ2h0ID4gdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgIGlmICh0aGlzLnBvcnRyYWl0ICE9PSBwb3J0cmFpdCkge1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gcG9ydHJhaXQ7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0geDtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSB5O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlucHV0WCA9IHg7XG4gICAgICB0aGlzLmlucHV0WSA9IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EZXZpY2VPcmllbnRhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGV2aWNlT3JpZW50YXRpb24oZXZlbnQpIHtcbiAgICAgIHZhciBiZXRhID0gZXZlbnQuYmV0YTtcbiAgICAgIHZhciBnYW1tYSA9IGV2ZW50LmdhbW1hO1xuICAgICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDE7XG4gICAgICAgIHRoaXMucm90YXRlKGJldGEsIGdhbW1hKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRldmljZU1vdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGV2aWNlTW90aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmV0YSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5iZXRhO1xuICAgICAgdmFyIGdhbW1hID0gZXZlbnQucm90YXRpb25SYXRlLmdhbW1hO1xuICAgICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxO1xuICAgICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgICAvLyByZXNldCBpbnB1dCB0byBjZW50ZXIgaWYgaG92ZXJPbmx5IGlzIHNldCBhbmQgd2UncmUgbm90IGhvdmVyaW5nIHRoZSBlbGVtZW50XG4gICAgICBpZiAodGhpcy5ob3Zlck9ubHkgJiYgKGNsaWVudFggPCB0aGlzLmVsZW1lbnRQb3NpdGlvblggfHwgY2xpZW50WCA+IHRoaXMuZWxlbWVudFBvc2l0aW9uWCArIHRoaXMuZWxlbWVudFdpZHRoIHx8IGNsaWVudFkgPCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgfHwgY2xpZW50WSA+IHRoaXMuZWxlbWVudFBvc2l0aW9uWSArIHRoaXMuZWxlbWVudEhlaWdodCkpIHtcbiAgICAgICAgdGhpcy5pbnB1dFggPSAwO1xuICAgICAgICB0aGlzLmlucHV0WSA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgICAvLyBDbGlwIG1vdXNlIGNvb3JkaW5hdGVzIGluc2lkZSBlbGVtZW50IGJvdW5kcy5cbiAgICAgICAgaWYgKHRoaXMuY2xpcFJlbGF0aXZlSW5wdXQpIHtcbiAgICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKTtcbiAgICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpO1xuICAgICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpO1xuICAgICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGN1bGF0ZSBpbnB1dCByZWxhdGl2ZSB0byB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudFJhbmdlWCAmJiB0aGlzLmVsZW1lbnRSYW5nZVkpIHtcbiAgICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb25YIC0gdGhpcy5lbGVtZW50Q2VudGVyWCkgLyB0aGlzLmVsZW1lbnRSYW5nZVg7XG4gICAgICAgICAgdGhpcy5pbnB1dFkgPSAoY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uWSAtIHRoaXMuZWxlbWVudENlbnRlclkpIC8gdGhpcy5lbGVtZW50UmFuZ2VZO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIHdpbmRvdy5cbiAgICAgICAgaWYgKHRoaXMud2luZG93UmFkaXVzWCAmJiB0aGlzLndpbmRvd1JhZGl1c1kpIHtcbiAgICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy53aW5kb3dDZW50ZXJYKSAvIHRoaXMud2luZG93UmFkaXVzWDtcbiAgICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy53aW5kb3dDZW50ZXJZKSAvIHRoaXMud2luZG93UmFkaXVzWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNhbGlicmF0aW9uVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGV0ZWN0aW9uVGltZXIpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5lbGVtZW50O1xuICAgICAgZGVsZXRlIHRoaXMubGF5ZXJzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2ZXJzaW9uKCkge1xuICAgICAgcmV0dXJuICczLjEuMCc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhcmFsbGF4O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmFsbGF4O1xuXG59LHtcIm9iamVjdC1hc3NpZ25cIjoxLFwicmFmXCI6NH1dfSx7fSxbNV0pKDUpXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmIySnFaV04wTFdGemMybG5iaTlwYm1SbGVDNXFjeUlzSW01dlpHVmZiVzlrZFd4bGN5OXdaWEptYjNKdFlXNWpaUzF1YjNjdmJHbGlMM0JsY21admNtMWhibU5sTFc1dmR5NXFjeUlzSW01dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmNtRm1MMmx1WkdWNExtcHpJaXdpYzNKakwzQmhjbUZzYkdGNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUXpGR1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenRCUTNCRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVONFRFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdRVU40UlVFN096czdPenM3TzBGQlVVRXNTVUZCVFN4VFFVRlRMRkZCUVZFc1MwRkJVaXhEUVVGbU8wRkJRMEVzU1VGQlRTeGxRVUZsTEZGQlFWRXNaVUZCVWl4RFFVRnlRanM3UVVGRlFTeEpRVUZOTEZWQlFWVTdRVUZEWkN4cFFrRkJaU3hGUVVSRU8wRkJSV1FzVjBGQlV5eERRVUZETEVsQlFVUXNSVUZCVHl4RFFVRkRMRlZCUVVRc1JVRkJXU3hSUVVGYUxFTkJRVkFzUlVGQk9FSXNRMEZCUXl4UFFVRkVMRVZCUVZNc1MwRkJWQ3hEUVVFNVFpeEZRVUVyUXl4RFFVRkRMRXRCUVVRc1JVRkJUeXhIUVVGUUxFTkJRUzlETEVWQlFUUkVMRU5CUVVNc1RVRkJSQ3hGUVVGUkxFbEJRVklzUTBGQk5VUXNRMEZHU3pzN1FVRkpaQ3hQUVVwakxHbENRVWxTTEV0QlNsRXNSVUZKUkN4SFFVcERMRVZCU1Vrc1IwRktTaXhGUVVsVE8wRkJRM0pDTEZkQlFVOHNUVUZCVFN4SFFVRk9MRWRCUTBZc1VVRkJVU3hIUVVGU0xFZEJRV01zUjBGQlpDeEhRVUZ2UWl4UlFVRlJMRWRCUVZJc1IwRkJZeXhIUVVGa0xFZEJRVzlDTEV0QlJIUkRMRWRCUlVZc1VVRkJVU3hIUVVGU0xFZEJRV01zUjBGQlpDeEhRVUZ2UWl4UlFVRlJMRWRCUVZJc1IwRkJZeXhIUVVGa0xFZEJRVzlDTEV0QlJqZERPMEZCUjBRc1IwRlNZVHRCUVZWa0xFMUJWbU1zWjBKQlZWUXNUMEZXVXl4RlFWVkJMRWxCVmtFc1JVRlZUVHRCUVVOc1FpeFhRVUZQTEZGQlFWRXNWMEZCVWl4RFFVRnZRaXhSUVVGUkxGbEJRVklzUTBGQmNVSXNWVUZCVVN4SlFVRTNRaXhEUVVGd1FpeERRVUZRTzBGQlEwUXNSMEZhWVR0QlFXTmtMR0ZCWkdNc2RVSkJZMFlzUzBGa1JTeEZRV05MTzBGQlEycENMRkZCUVVrc1ZVRkJWU3hOUVVGa0xFVkJRWE5DTzBGQlEzQkNMR0ZCUVU4c1NVRkJVRHRCUVVORUxFdEJSa1FzVFVGRlR5eEpRVUZKTEZWQlFWVXNUMEZCWkN4RlFVRjFRanRCUVVNMVFpeGhRVUZQTEV0QlFWQTdRVUZEUkN4TFFVWk5MRTFCUlVFc1NVRkJTU3hWUVVGVkxFMUJRV1FzUlVGQmMwSTdRVUZETTBJc1lVRkJUeXhKUVVGUU8wRkJRMFFzUzBGR1RTeE5RVVZCTEVsQlFVa3NRMEZCUXl4TlFVRk5MRmRCUVZjc1MwRkJXQ3hEUVVGT0xFTkJRVVFzU1VGQk5rSXNVMEZCVXl4TFFVRlVMRU5CUVdwRExFVkJRV3RFTzBGQlEzWkVMR0ZCUVU4c1YwRkJWeXhMUVVGWUxFTkJRVkE3UVVGRFJDeExRVVpOTEUxQlJVRTdRVUZEVEN4aFFVRlBMRXRCUVZBN1FVRkRSRHRCUVVOR0xFZEJNVUpoTzBGQk5FSmtMRmRCTlVKakxIRkNRVFJDU2l4TFFUVkNTU3hGUVRSQ1J6dEJRVU5tTEZkQlFVOHNUVUZCVFN4UFFVRk9MRU5CUVdNc1UwRkJaQ3hGUVVGNVFpeFZRVUZETEV0QlFVUXNSVUZCVVN4VFFVRlNMRVZCUVhOQ08wRkJRM0JFTEdGQlFVOHNXVUZCV1N4VlFVRlZMRmRCUVZZc1JVRkJXaXhIUVVGelF5eEZRVUUzUXp0QlFVTkVMRXRCUmswc1EwRkJVRHRCUVVkRUxFZEJhRU5oTzBGQmEwTmtMRmxCYkVOakxITkNRV3REU0N4UFFXeERSeXhGUVd0RFRUdEJRVU5zUWl4WlFVRlJMRWRCUVZJc1EwRkJXU3hQUVVGYUxFVkJRWEZDTEZkQlFYSkNMRVZCUVd0RExITkRRVUZzUXp0QlFVTkJMRmxCUVZFc1IwRkJVaXhEUVVGWkxFOUJRVm9zUlVGQmNVSXNhVUpCUVhKQ0xFVkJRWGRETEdGQlFYaERPMEZCUTBFc1dVRkJVU3hIUVVGU0xFTkJRVmtzVDBGQldpeEZRVUZ4UWl4eFFrRkJja0lzUlVGQk5FTXNVVUZCTlVNN1FVRkRSQ3hIUVhSRFlUdEJRWGREWkN4clFrRjRRMk1zTkVKQmQwTkhMRXRCZUVOSUxFVkJkME5WTzBGQlEzUkNMRkZCUVVrc1ZVRkJWU3hUUVVGVExHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJaRHRCUVVGQkxGRkJRMGtzYTBKQlFXdENMRXRCUkhSQ08wRkJRVUVzVVVGRlNTeG5Ra0ZCWjBJc1NVRkdjRUk3UVVGQlFTeFJRVWRKTEdsQ1FVRnBRaXhMUVVoeVFqdEJRVUZCTEZGQlNVa3NZMEZCWXl4SlFVcHNRanRCUVVGQkxGRkJTMGtzWVVGQllTeEpRVXhxUWp0QlFVMUJMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRVklzUlVGQlZ5eEpRVUZKTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhOUVVGd1F5eEZRVUUwUXl4SlFVRkpMRU5CUVdoRUxFVkJRVzFFTEVkQlFXNUVMRVZCUVhkRU8wRkJRM1JFTEZWQlFVa3NVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFTkJRV2hDTEUxQlFYVkNMRWxCUVROQ0xFVkJRV2xETzBGQlF5OUNMSE5DUVVGakxGRkJRVkVzVDBGQlVpeERRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeERRVUZ1UWl4SlFVRjNRaXhYUVVGMFF6dEJRVU5CTEhGQ1FVRmhMRkZCUVZFc1QwRkJVaXhEUVVGblFpeERRVUZvUWl4RlFVRnRRaXhEUVVGdVFpeEpRVUYzUWl4WFFVRnlRenRCUVVORUxFOUJTRVFzVFVGSFR6dEJRVU5NTEhOQ1FVRmpMRmRCUVdRN1FVRkRRU3h4UWtGQllTeFhRVUZpTzBGQlEwUTdRVUZEUkN4VlFVRkpMRkZCUVZFc1MwRkJVaXhEUVVGakxGVkJRV1FzVFVGQk9FSXNVMEZCYkVNc1JVRkJOa003UVVGRE0wTXNNRUpCUVd0Q0xFbEJRV3hDTzBGQlEwRTdRVUZEUkR0QlFVTkdPMEZCUTBRc1dVRkJUeXhMUVVGUU8wRkJRMFVzVjBGQlN5eEpRVUZNTzBGQlEwVXNlVUpCUVdsQ0xHVkJRV3BDTzBGQlEwRTdRVUZEUml4WFFVRkxMRWxCUVV3N1FVRkRSU3haUVVGSkxHVkJRVW9zUlVGQmNVSTdRVUZEYmtJc1kwRkJTU3hQUVVGUExGTkJRVk1zU1VGQlZDeEpRVUZwUWl4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzVFVGQmRrSXNRMEZCTlVJN1FVRkJRU3hqUVVOSkxHdENRVUZyUWl4VFFVRlRMR1ZCUkM5Q08wRkJRVUVzWTBGRlNTeHRRa0ZCYlVJc1owSkJRV2RDTEV0QlFXaENMRU5CUVhOQ0xGRkJSamRETzBGQlFVRXNZMEZIU1N4blFrRkJaMElzUzBGSWNFSTdPMEZCUzBFc1kwRkJTU3hEUVVGRExGTkJRVk1zU1VGQlpDeEZRVUZ2UWp0QlFVTnNRaXcwUWtGQlowSXNTVUZCYUVJN1FVRkRRU3cwUWtGQlowSXNTMEZCYUVJc1EwRkJjMElzVVVGQmRFSXNSMEZCYVVNc1VVRkJha003UVVGRFFTdzBRa0ZCWjBJc1YwRkJhRUlzUTBGQk5FSXNTVUZCTlVJN1FVRkRRU3hwUWtGQlN5eExRVUZNTEVOQlFWY3NVVUZCV0N4SFFVRnpRaXhSUVVGMFFqdEJRVU5CTEdsQ1FVRkxMRXRCUVV3c1EwRkJWeXhWUVVGWUxFZEJRWGRDTEVWQlFYaENPMEZCUTBRN08wRkJSVVFzWlVGQlN5eFhRVUZNTEVOQlFXbENMRTlCUVdwQ08wRkJRMEVzYTBKQlFWRXNTMEZCVWl4RFFVRmpMRlZCUVdRc1NVRkJORUlzTUVKQlFUVkNPMEZCUTBFc01FSkJRV2RDTEU5QlFVOHNaMEpCUVZBc1EwRkJkMElzVDBGQmVFSXNSVUZCYVVNc1owSkJRV3BETEVOQlFXdEVMRmRCUVd4RUxFTkJRV2hDTzBGQlEwRXNNa0pCUVdsQ0xHdENRVUZyUWl4VFFVRnNRaXhKUVVFclFpeGpRVUZqTEUxQlFXUXNSMEZCZFVJc1EwRkJkRVFzU1VGQk1rUXNhMEpCUVd0Q0xFMUJRVGxHTzBGQlEwRXNNRUpCUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRkZCUVhSQ0xFZEJRV2xETEdkQ1FVRnFRenRCUVVOQkxHVkJRVXNzVjBGQlRDeERRVUZwUWl4UFFVRnFRanM3UVVGRlFTeGpRVUZMTEdGQlFVd3NSVUZCY1VJN1FVRkRia0lzYVVKQlFVc3NaVUZCVEN4RFFVRnhRaXhQUVVGeVFqdEJRVU5CTEdsQ1FVRkxMRlZCUVV3c1EwRkJaMElzVjBGQmFFSXNRMEZCTkVJc1NVRkJOVUk3UVVGRFJEdEJRVU5HTzBGQlEwUTdRVUV2UWtvN1FVRnBRMEVzVjBGQlR5eGpRVUZRTzBGQlEwUXNSMEU1Um1FN1FVRm5SMlFzUzBGb1IyTXNaVUZuUjFZc1QwRm9SMVVzUlVGblIwUXNVVUZvUjBNc1JVRm5SMU1zUzBGb1IxUXNSVUZuUjJkQ08wRkJRelZDTEZGQlFVa3NZVUZCWVN4UlFVRlJMR0ZCUVZJc1EwRkJjMElzVVVGQmRFSXNRMEZCYWtJN1FVRkRRU3hSUVVGSkxFTkJRVU1zVlVGQlRDeEZRVUZwUWp0QlFVTm1MRmRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVklzUlVGQlZ5eEpRVUZKTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhOUVVGd1F5eEZRVUUwUXl4SlFVRkpMRU5CUVdoRUxFVkJRVzFFTEVkQlFXNUVMRVZCUVhkRU8wRkJRM1JFTEZsQlFVa3NVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFTkJRV2hDTEUxQlFYVkNMRWxCUVROQ0xFVkJRV2xETzBGQlF5OUNMSFZDUVVGaExGRkJRVkVzVTBGQlVpeERRVUZyUWl4UlFVRlJMRTlCUVZJc1EwRkJaMElzUTBGQmFFSXNSVUZCYlVJc1EwRkJia0lzU1VGQmQwSXNSMEZCZUVJc1IwRkJPRUlzVVVGQmFFUXNRMEZCWWp0QlFVTkVMRk5CUmtRc1RVRkZUenRCUVVOTUxIVkNRVUZoTEZGQlFXSTdRVUZEUkR0QlFVTkVMRmxCUVVrc1VVRkJVU3hMUVVGU0xFTkJRV01zVlVGQlpDeE5RVUU0UWl4VFFVRnNReXhGUVVFMlF6dEJRVU16UXl4clFrRkJVU3hoUVVGU0xFTkJRWE5DTEZGQlFYUkNMRWxCUVd0RExGVkJRV3hETzBGQlEwRTdRVUZEUkR0QlFVTkdPMEZCUTBZN1FVRkRSQ3haUVVGUkxFdEJRVklzUTBGQll5eFZRVUZrTEVsQlFUUkNMRXRCUVRWQ08wRkJRMFE3UVVGb1NHRXNRMEZCYUVJN08wRkJiMGhCTEVsQlFVMHNaVUZCWlN4RlFVRnlRanRCUVVGQkxFbEJRMDBzVjBGQlZ6dEJRVU5VTEdsQ1FVRmxMRXRCUkU0N1FVRkZWQ3h4UWtGQmJVSXNTMEZHVmp0QlFVZFVMR2RDUVVGakxFbEJTRXc3UVVGSlZDeGhRVUZYTEV0QlNrWTdRVUZMVkN4M1FrRkJjMElzUjBGTVlqdEJRVTFVTEc5Q1FVRnJRaXhIUVU1VU8wRkJUMVFzWjBKQlFXTXNSMEZRVER0QlFWRlVMR05CUVZrc1MwRlNTRHRCUVZOVUxHTkJRVmtzU1VGVVNEdEJRVlZVTEZkQlFWTXNTVUZXUVR0QlFWZFVMRmRCUVZNc1NVRllRVHRCUVZsVUxGVkJRVkVzUzBGYVF6dEJRV0ZVTEZWQlFWRXNTMEZpUXp0QlFXTlVMRmRCUVZNc1NVRmtRVHRCUVdWVUxGZEJRVk1zU1VGbVFUdEJRV2RDVkN4aFFVRlhMRWRCYUVKR08wRkJhVUpVTEdGQlFWY3NSMEZxUWtZN1FVRnJRbFFzVjBGQlV5eEhRV3hDUVR0QlFXMUNWQ3hYUVVGVExFZEJia0pCTzBGQmIwSlVMR2xDUVVGbExFdEJjRUpPTzBGQmNVSlVMR0ZCUVZjc1EwRnlRa1k3UVVGelFsUXNWMEZCVXl4SlFYUkNRVHRCUVhWQ1ZDeFpRVUZWTzBGQmRrSkVMRU5CUkdwQ096dEpRVEpDVFN4Uk8wRkJRMG9zYjBKQlFWa3NUMEZCV2l4RlFVRnhRaXhQUVVGeVFpeEZRVUU0UWp0QlFVRkJPenRCUVVVMVFpeFRRVUZMTEU5QlFVd3NSMEZCWlN4UFFVRm1PenRCUVVWQkxGRkJRVTBzVDBGQlR6dEJRVU5ZTEd0Q1FVRlpMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1lVRkJNMElzUTBGRVJEdEJRVVZZTEd0Q1FVRlpMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1lVRkJNMElzUTBGR1JEdEJRVWRZTEdWQlFWTXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4VlFVRXpRaXhEUVVoRk8wRkJTVmdzWlVGQlV5eFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNMRU5CU2tVN1FVRkxXQ3hqUVVGUkxGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzVTBGQk0wSXNRMEZNUnp0QlFVMVlMR05CUVZFc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhUUVVFelFpeERRVTVITzBGQlQxZ3NaVUZCVXl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMRlZCUVROQ0xFTkJVRVU3UVVGUldDeGxRVUZUTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNWVUZCTTBJc1EwRlNSVHRCUVZOWUxHbENRVUZYTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNXVUZCTTBJc1EwRlVRVHRCUVZWWUxHbENRVUZYTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNXVUZCTTBJc1EwRldRVHRCUVZkWUxHVkJRVk1zVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFZRVUV6UWl4RFFWaEZPMEZCV1Znc1pVRkJVeXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xGVkJRVE5DTEVOQldrVTdRVUZoV0N4eFFrRkJaU3hSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xHZENRVUV6UWl4RFFXSktPMEZCWTFnc2FVSkJRVmNzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFhRVUV6UWl4RFFXUkJPMEZCWlZnc2NVSkJRV1VzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeG5Ra0ZCTTBJc1EwRm1TanRCUVdkQ1dDeDVRa0ZCYlVJc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXh4UWtGQk0wSXNRMEZvUWxJN1FVRnBRbGdzYVVKQlFWY3NVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4WlFVRXpRaXhEUVdwQ1FUdEJRV3RDV0N4dlFrRkJZeXhUUVVGVExHRkJRVlFzUTBGQmRVSXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4bFFVRXpRaXhEUVVGMlFpeERRV3hDU0R0QlFXMUNXQ3huUWtGQlZTeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNPMEZCYmtKRExFdEJRV0k3TzBGQmMwSkJMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEVsQlFXaENMRVZCUVhOQ08wRkJRM0JDTEZWQlFVa3NTMEZCU3l4SFFVRk1MRTFCUVdNc1NVRkJiRUlzUlVGQmQwSTdRVUZEZEVJc1pVRkJUeXhMUVVGTExFZEJRVXdzUTBGQlVEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc2FVSkJRV0VzU1VGQllpeEZRVUZ0UWl4UlFVRnVRaXhGUVVFMlFpeEpRVUUzUWl4RlFVRnRReXhQUVVGdVF6czdRVUZGUVN4UlFVRkhMRU5CUVVNc1MwRkJTeXhaUVVGVUxFVkJRWFZDTzBGQlEzSkNMRmRCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEU5QlFYcENPMEZCUTBRN08wRkJSVVFzVTBGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhKUVVGNFFqdEJRVU5CTEZOQlFVc3NaVUZCVEN4SFFVRjFRaXhKUVVGMlFqdEJRVU5CTEZOQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVdZN1FVRkRRU3hUUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwRXNVMEZCU3l4UFFVRk1MRWRCUVdVc1JVRkJaanRCUVVOQkxGTkJRVXNzUjBGQlRDeEhRVUZYTEVsQlFWZzdPMEZCUlVFc1UwRkJTeXhOUVVGTUxFZEJRV01zU1VGQlpEdEJRVU5CTEZOQlFVc3NaMEpCUVV3c1IwRkJkMElzUTBGQmVFSTdRVUZEUVN4VFFVRkxMR2RDUVVGTUxFZEJRWGRDTEVOQlFYaENPMEZCUTBFc1UwRkJTeXhaUVVGTUxFZEJRVzlDTEVOQlFYQkNPMEZCUTBFc1UwRkJTeXhoUVVGTUxFZEJRWEZDTEVOQlFYSkNPenRCUVVWQkxGTkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxGTkJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanM3UVVGRlFTeFRRVUZMTEdGQlFVd3NSMEZCY1VJc1EwRkJja0k3UVVGRFFTeFRRVUZMTEdGQlFVd3NSMEZCY1VJc1EwRkJja0k3TzBGQlJVRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFTkJRWEJDTzBGQlEwRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFTkJRWEJDT3p0QlFVVkJMRk5CUVVzc1RVRkJUQ3hIUVVGakxFTkJRV1E3UVVGRFFTeFRRVUZMTEUxQlFVd3NSMEZCWXl4RFFVRmtPenRCUVVWQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXWTdRVUZEUVN4VFFVRkxMRTlCUVV3c1IwRkJaU3hEUVVGbU96dEJRVVZCTEZOQlFVc3NVMEZCVEN4SFFVRnBRaXhEUVVGcVFqdEJRVU5CTEZOQlFVc3NVMEZCVEN4SFFVRnBRaXhEUVVGcVFqczdRVUZGUVN4VFFVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eFhRVUZNTEVOQlFXbENMRWxCUVdwQ0xFTkJRWE5DTEVsQlFYUkNMRU5CUVc1Q08wRkJRMEVzVTBGQlN5eHRRa0ZCVEN4SFFVRXlRaXhMUVVGTExHMUNRVUZNTEVOQlFYbENMRWxCUVhwQ0xFTkJRVGhDTEVsQlFUbENMRU5CUVROQ08wRkJRMEVzVTBGQlN5eGpRVUZNTEVkQlFYTkNMRXRCUVVzc1kwRkJUQ3hEUVVGdlFpeEpRVUZ3UWl4RFFVRjVRaXhKUVVGNlFpeERRVUYwUWp0QlFVTkJMRk5CUVVzc2EwSkJRVXdzUjBGQk1FSXNTMEZCU3l4clFrRkJUQ3hEUVVGM1FpeEpRVUY0UWl4RFFVRTJRaXhKUVVFM1FpeERRVUV4UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEdGQlFVd3NRMEZCYlVJc1NVRkJia0lzUTBGQmQwSXNTVUZCZUVJc1EwRkJja0k3UVVGRFFTeFRRVUZMTEd0Q1FVRk1MRWRCUVRCQ0xFdEJRVXNzYTBKQlFVd3NRMEZCZDBJc1NVRkJlRUlzUTBGQk5rSXNTVUZCTjBJc1EwRkJNVUk3UVVGRFFTeFRRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFdEJRVXNzWjBKQlFVd3NRMEZCYzBJc1NVRkJkRUlzUTBGQk1rSXNTVUZCTTBJc1EwRkJlRUk3UVVGRFFTeFRRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhqUVVGTUxFTkJRVzlDTEVsQlFYQkNMRU5CUVhsQ0xFbEJRWHBDTEVOQlFYUkNPenRCUVVWQkxGTkJRVXNzVjBGQlRDeEhRVUZ0UWl4SlFVRnVRanRCUVVOQkxGTkJRVXNzV1VGQlRDeEhRVUZ2UWl4SlFVRndRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4SlFVRnlRanRCUVVOQkxGTkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RanRCUVVOQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFVTXNWVUZCVlN4VFFVRldMRU5CUVc5Q0xFdEJRWEJDTEVOQlFUQkNMRFJGUVVFeFFpeERRVUZvUWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeERRVUZETEVOQlFVTXNUMEZCVHl4cFFrRkJWQ3hKUVVFNFFpeERRVUZETEV0QlFVc3NUMEZCZWtRN1FVRkRRU3hUUVVGTExHdENRVUZNTEVkQlFUQkNMRU5CUVVNc1EwRkJReXhQUVVGUExITkNRVUZVTEVsQlFXMURMRU5CUVVNc1MwRkJTeXhQUVVGdVJUdEJRVU5CTEZOQlFVc3NhVUpCUVV3c1IwRkJlVUlzUTBGQmVrSTdRVUZEUVN4VFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdPMEZCUlVFc1UwRkJTeXhWUVVGTU8wRkJRMFE3T3pzN2FVTkJSVms3UVVGRFdDeFZRVUZKTEV0QlFVc3NhMEpCUVV3c1MwRkJORUlzVTBGQmFFTXNSVUZCTWtNN1FVRkRla01zWVVGQlN5eHJRa0ZCVEN4SFFVRXdRaXhSUVVGUkxHZENRVUZTTEVOQlFYbENMRWxCUVhwQ0xFTkJRVEZDTzBGQlEwRXNZVUZCU3l4clFrRkJUQ3hIUVVFd1FpeFJRVUZSTEdkQ1FVRlNMRU5CUVhsQ0xFbEJRWHBDTEVOQlFURkNPMEZCUTBRN08wRkJSVVE3UVVGRFFTeFZRVUZKTEV0QlFVc3NhMEpCUVZRc1JVRkJOa0k3UVVGRE0wSXNaMEpCUVZFc1ZVRkJVaXhEUVVGdFFpeExRVUZMTEU5QlFYaENPMEZCUTBRN08wRkJSVVFzVlVGQlNTeFJRVUZSTEU5QlFVOHNaMEpCUVZBc1EwRkJkMElzUzBGQlN5eFBRVUUzUWl4RFFVRmFPMEZCUTBFc1ZVRkJTU3hOUVVGTkxHZENRVUZPTEVOQlFYVkNMRlZCUVhaQ0xFMUJRWFZETEZGQlFUTkRMRVZCUVhGRU8wRkJRMjVFTEdGQlFVc3NUMEZCVEN4RFFVRmhMRXRCUVdJc1EwRkJiVUlzVVVGQmJrSXNSMEZCT0VJc1ZVRkJPVUk3UVVGRFJEczdRVUZGUkR0QlFVTkJMRlZCUVVjc1EwRkJReXhMUVVGTExHRkJRVlFzUlVGQmQwSTdRVUZEZEVJc1lVRkJTeXhQUVVGTUxFTkJRV0VzUzBGQllpeERRVUZ0UWl4aFFVRnVRaXhIUVVGdFF5eE5RVUZ1UXp0QlFVTkVPenRCUVVWRU8wRkJRMEVzVjBGQlN5eFpRVUZNTzBGQlEwRXNWMEZCU3l4blFrRkJURHRCUVVOQkxGZEJRVXNzVFVGQlREdEJRVU5CTEZkQlFVc3NaMEpCUVV3c1EwRkJjMElzUzBGQlN5eG5Ra0ZCTTBJN1FVRkRSRHM3TzNORFFVVnBRanRCUVVOb1FpeFZRVUZITEV0QlFVc3NUMEZCVWl4RlFVRnBRanRCUVVObUxHRkJRVXNzVDBGQlREdEJRVU5FTzBGQlEwWTdPenR0UTBGRll6dEJRVU5pTEZWQlFVY3NTMEZCU3l4UlFVRlNMRVZCUVd0Q08wRkJRMmhDTEdGQlFVc3NUVUZCVEN4SFFVRmpMRXRCUVVzc1QwRkJUQ3hEUVVGaExHZENRVUZpTEVOQlFUaENMRXRCUVVzc1VVRkJia01zUTBGQlpEdEJRVU5FTEU5QlJrUXNUVUZGVHp0QlFVTk1MR0ZCUVVzc1RVRkJUQ3hIUVVGakxFdEJRVXNzVDBGQlRDeERRVUZoTEZGQlFUTkNPMEZCUTBRN08wRkJSVVFzVlVGQlJ5eERRVUZETEV0QlFVc3NUVUZCVEN4RFFVRlpMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzUkNMR2RDUVVGUkxFbEJRVklzUTBGQllTeHJSRUZCWWp0QlFVTkVPenRCUVVWRUxGZEJRVXNzVDBGQlRDeEhRVUZsTEVWQlFXWTdRVUZEUVN4WFFVRkxMRTlCUVV3c1IwRkJaU3hGUVVGbU96dEJRVVZCTEZkQlFVc3NTVUZCU1N4UlFVRlJMRU5CUVdwQ0xFVkJRVzlDTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1RVRkJlRU1zUlVGQlowUXNUMEZCYUVRc1JVRkJlVVE3UVVGRGRrUXNXVUZCU1N4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUTBGQldqczdRVUZGUVN4WlFVRkpMRXRCUVVzc2EwSkJRVlFzUlVGQk5rSTdRVUZETTBJc2EwSkJRVkVzVlVGQlVpeERRVUZ0UWl4TFFVRnVRanRCUVVORU96dEJRVVZFTEdOQlFVMHNTMEZCVGl4RFFVRlpMRkZCUVZvc1IwRkJkVUlzVVVGQlVTeFZRVUZTTEVkQlFYRkNMRlZCUVRWRE8wRkJRMEVzWTBGQlRTeExRVUZPTEVOQlFWa3NUMEZCV2l4SFFVRnpRaXhQUVVGMFFqdEJRVU5CTEdOQlFVMHNTMEZCVGl4RFFVRlpMRWxCUVZvc1IwRkJiVUlzUTBGQmJrSTdRVUZEUVN4alFVRk5MRXRCUVU0c1EwRkJXU3hIUVVGYUxFZEJRV3RDTEVOQlFXeENPenRCUVVWQkxGbEJRVWtzVVVGQlVTeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRmlMRVZCUVc5Q0xFOUJRWEJDTEV0QlFXZERMRU5CUVRWRE8wRkJRMEVzWVVGQlN5eFBRVUZNTEVOQlFXRXNTVUZCWWl4RFFVRnJRaXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZpTEVWQlFXOUNMRk5CUVhCQ0xFdEJRV3RETEV0QlFYQkVPMEZCUTBFc1lVRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeERRVUZyUWl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGaUxFVkJRVzlDTEZOQlFYQkNMRXRCUVd0RExFdEJRWEJFTzBGQlEwUTdRVUZEUmpzN08zVkRRVVZyUWp0QlFVTnFRaXhYUVVGTExGZEJRVXdzUjBGQmJVSXNUMEZCVHl4VlFVRXhRanRCUVVOQkxGZEJRVXNzV1VGQlRDeEhRVUZ2UWl4UFFVRlBMRmRCUVROQ08wRkJRMEVzVjBGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZMTEU5QlFUZERPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFOUJRVGxETzBGQlEwRXNWMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NZVUZCWkN4RlFVRTJRaXhMUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4aFFVRnlSQ3hEUVVGeVFqdEJRVU5CTEZkQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZMTEdGQlFXUXNSVUZCTmtJc1MwRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NZVUZCZEVRc1EwRkJja0k3UVVGRFJEczdPMjFEUVVWak8wRkJRMklzVjBGQlN5eE5RVUZNTEVkQlFXTXNTMEZCU3l4WlFVRk1MRU5CUVd0Q0xIRkNRVUZzUWl4RlFVRmtPMEZCUTBFc1YwRkJTeXhuUWtGQlRDeEhRVUYzUWl4TFFVRkxMRTFCUVV3c1EwRkJXU3hKUVVGd1F6dEJRVU5CTEZkQlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCY0VNN1FVRkRRU3hYUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJhRU03UVVGRFFTeFhRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhOUVVGTUxFTkJRVmtzVFVGQmFrTTdRVUZEUVN4WFFVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1QwRkJMME03UVVGRFFTeFhRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NUMEZCYUVRN1FVRkRRU3hYUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhqUVVGa0xFVkJRVGhDTEV0QlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExHTkJRWFpFTEVOQlFYSkNPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1kwRkJaQ3hGUVVFNFFpeExRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhqUVVGNFJDeERRVUZ5UWp0QlFVTkVPenM3Y1VOQlJXZENMRXNzUlVGQlR6dEJRVU4wUWl4dFFrRkJZU3hMUVVGTExHZENRVUZzUWp0QlFVTkJMRmRCUVVzc1owSkJRVXdzUjBGQmQwSXNWMEZCVnl4TFFVRkxMR3RDUVVGb1FpeEZRVUZ2UXl4TFFVRndReXhEUVVGNFFqdEJRVU5FT3pzN05rSkJSVkU3UVVGRFVDeFZRVUZKTEV0QlFVc3NUMEZCVkN4RlFVRnJRanRCUVVOb1FqdEJRVU5FTzBGQlEwUXNWMEZCU3l4UFFVRk1MRWRCUVdVc1NVRkJaanM3UVVGRlFTeFZRVUZKTEV0QlFVc3NhMEpCUVZRc1JVRkJOa0k3UVVGRE0wSXNZVUZCU3l4UlFVRk1MRWRCUVdkQ0xFdEJRV2hDTzBGQlEwRXNaVUZCVHl4blFrRkJVQ3hEUVVGM1FpeHRRa0ZCZUVJc1JVRkJOa01zUzBGQlN5eHRRa0ZCYkVRN1FVRkRRU3hoUVVGTExHTkJRVXdzUjBGQmMwSXNWMEZCVnl4TFFVRkxMR3RDUVVGb1FpeEZRVUZ2UXl4TFFVRkxMRmxCUVhwRExFTkJRWFJDTzBGQlEwUXNUMEZLUkN4TlFVbFBMRWxCUVVrc1MwRkJTeXhoUVVGVUxFVkJRWGRDTzBGQlF6ZENMR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWp0QlFVTkJMR1ZCUVU4c1owSkJRVkFzUTBGQmQwSXNZMEZCZUVJc1JVRkJkME1zUzBGQlN5eGpRVUUzUXp0QlFVTkJMR0ZCUVVzc1kwRkJUQ3hIUVVGelFpeFhRVUZYTEV0QlFVc3NZVUZCYUVJc1JVRkJLMElzUzBGQlN5eFpRVUZ3UXl4RFFVRjBRanRCUVVORUxFOUJTazBzVFVGSlFUdEJRVU5NTEdGQlFVc3NXVUZCVEN4SFFVRnZRaXhEUVVGd1FqdEJRVU5CTEdGQlFVc3NXVUZCVEN4SFFVRnZRaXhEUVVGd1FqdEJRVU5CTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FqdEJRVU5CTEdWQlFVOHNaMEpCUVZBc1EwRkJkMElzVjBGQmVFSXNSVUZCY1VNc1MwRkJTeXhYUVVFeFF6dEJRVU5CTEdGQlFVc3NaVUZCVER0QlFVTkVPenRCUVVWRUxHRkJRVThzWjBKQlFWQXNRMEZCZDBJc1VVRkJlRUlzUlVGQmEwTXNTMEZCU3l4alFVRjJRenRCUVVOQkxGZEJRVXNzUjBGQlRDeEhRVUZYTEU5QlFVOHNTMEZCU3l4blFrRkJXaXhEUVVGWU8wRkJRMFE3T3pzNFFrRkZVenRCUVVOU0xGVkJRVWtzUTBGQlF5eExRVUZMTEU5QlFWWXNSVUZCYlVJN1FVRkRha0k3UVVGRFJEdEJRVU5FTEZkQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVdZN08wRkJSVUVzVlVGQlNTeExRVUZMTEd0Q1FVRlVMRVZCUVRaQ08wRkJRek5DTEdWQlFVOHNiVUpCUVZBc1EwRkJNa0lzYlVKQlFUTkNMRVZCUVdkRUxFdEJRVXNzYlVKQlFYSkVPMEZCUTBRc1QwRkdSQ3hOUVVWUExFbEJRVWtzUzBGQlN5eGhRVUZVTEVWQlFYZENPMEZCUXpkQ0xHVkJRVThzYlVKQlFWQXNRMEZCTWtJc1kwRkJNMElzUlVGQk1rTXNTMEZCU3l4alFVRm9SRHRCUVVORUxFOUJSazBzVFVGRlFUdEJRVU5NTEdWQlFVOHNiVUpCUVZBc1EwRkJNa0lzVjBGQk0wSXNSVUZCZDBNc1MwRkJTeXhYUVVFM1F6dEJRVU5FT3p0QlFVVkVMR0ZCUVU4c2JVSkJRVkFzUTBGQk1rSXNVVUZCTTBJc1JVRkJjVU1zUzBGQlN5eGpRVUV4UXp0QlFVTkJMR0ZCUVU4c1RVRkJVQ3hEUVVGakxFdEJRVXNzUjBGQmJrSTdRVUZEUkRzN096aENRVVZUTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEWkN4WFFVRkxMRlZCUVV3c1IwRkJhMElzVFVGQlRTeFRRVUZPTEVkQlFXdENMRXRCUVVzc1ZVRkJka0lzUjBGQmIwTXNRMEZCZEVRN1FVRkRRU3hYUVVGTExGVkJRVXdzUjBGQmEwSXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVlVGQmRrSXNSMEZCYjBNc1EwRkJkRVE3UVVGRFJEczdPekpDUVVWTkxFTXNSVUZCUnl4RExFVkJRVWM3UVVGRFdDeFhRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRk5CUVU0c1IwRkJhMElzUzBGQlN5eFBRVUYyUWl4SFFVRnBReXhEUVVGb1JEdEJRVU5CTEZkQlFVc3NUMEZCVEN4SFFVRmxMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEU5QlFYWkNMRWRCUVdsRExFTkJRV2hFTzBGQlEwUTdPenMyUWtGRlVTeERMRVZCUVVjc1F5eEZRVUZITzBGQlEySXNWMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRk5CUVhaQ0xFZEJRVzFETEVOQlFYQkVPMEZCUTBFc1YwRkJTeXhUUVVGTUxFZEJRV2xDTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExGTkJRWFpDTEVkQlFXMURMRU5CUVhCRU8wRkJRMFE3T3pzeVFrRkZUU3hETEVWQlFVY3NReXhGUVVGSE8wRkJRMWdzVjBGQlN5eFBRVUZNTEVkQlFXVXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVDBGQmRrSXNSMEZCYVVNc1EwRkJhRVE3UVVGRFFTeFhRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRk5CUVU0c1IwRkJhMElzUzBGQlN5eFBRVUYyUWl4SFFVRnBReXhEUVVGb1JEdEJRVU5FT3pzN01FSkJSVXNzUXl4RlFVRkhMRU1zUlVGQlJ6dEJRVU5XTEZkQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEUxQlFYWkNMRWRCUVdkRExFTkJRVGxETzBGQlEwRXNWMEZCU3l4TlFVRk1MRWRCUVdNc1RVRkJUU3hUUVVGT0xFZEJRV3RDTEV0QlFVc3NUVUZCZGtJc1IwRkJaME1zUTBGQk9VTTdRVUZEUkRzN096SkNRVVZOTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEV0N4WFFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTkxGTkJRVTRzUjBGQmEwSXNTMEZCU3l4UFFVRjJRaXhIUVVGcFF5eERRVUZvUkR0QlFVTkJMRmRCUVVzc1QwRkJUQ3hIUVVGbExFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRTlCUVhaQ0xFZEJRV2xETEVOQlFXaEVPMEZCUTBRN096dHZRMEZGWlN4UExFVkJRVk03UVVGRGRrSXNWMEZCU3l4WlFVRk1MRWRCUVc5Q0xFOUJRWEJDTzBGQlEwRXNWMEZCU3l4blFrRkJURHRCUVVORU96czdaME5CUlZjc1R5eEZRVUZUTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEZWtJc1ZVRkJTU3hGUVVGRkxFOUJRVVlzUTBGQlZTeExRVUZMTEZOQlFXWXNTVUZCTkVJc1NVRkJhRU03UVVGRFFTeFZRVUZKTEVWQlFVVXNUMEZCUml4RFFVRlZMRXRCUVVzc1UwRkJaaXhKUVVFMFFpeEpRVUZvUXp0QlFVTkJMRlZCUVVrc1MwRkJTeXhyUWtGQlZDeEZRVUUyUWp0QlFVTXpRaXhuUWtGQlVTeEhRVUZTTEVOQlFWa3NUMEZCV2l4RlFVRnhRaXhYUVVGeVFpeEZRVUZyUXl4cFFrRkJhVUlzUTBGQmFrSXNSMEZCY1VJc1IwRkJja0lzUjBGQk1rSXNRMEZCTTBJc1IwRkJLMElzUzBGQmFrVTdRVUZEUkN4UFFVWkVMRTFCUlU4c1NVRkJTU3hMUVVGTExHdENRVUZVTEVWQlFUWkNPMEZCUTJ4RExHZENRVUZSTEVkQlFWSXNRMEZCV1N4UFFVRmFMRVZCUVhGQ0xGZEJRWEpDTEVWQlFXdERMR1ZCUVdVc1EwRkJaaXhIUVVGdFFpeEhRVUZ1UWl4SFFVRjVRaXhEUVVGNlFpeEhRVUUyUWl4SFFVRXZSRHRCUVVORUxFOUJSazBzVFVGRlFUdEJRVU5NTEdkQ1FVRlJMRXRCUVZJc1EwRkJZeXhKUVVGa0xFZEJRWEZDTEVOQlFYSkNPMEZCUTBFc1owSkJRVkVzUzBGQlVpeERRVUZqTEVkQlFXUXNSMEZCYjBJc1EwRkJjRUk3UVVGRFJEdEJRVU5HT3pzN2VVTkJSVzlDTzBGQlEyNUNMRlZCUVVrc1MwRkJTeXhyUWtGQlRDeEpRVUV5UWl4TFFVRkxMR2xDUVVGTUxFdEJRVEpDTEVOQlFURkVMRVZCUVRaRU8wRkJRek5FTEdGQlFVc3NUMEZCVER0QlFVTkJMR0ZCUVVzc2EwSkJRVXdzUjBGQk1FSXNTMEZCTVVJN1FVRkRRU3hoUVVGTExFMUJRVXc3UVVGRFJDeFBRVXBFTEUxQlNVODdRVUZEVEN4aFFVRkxMR1ZCUVV3N1FVRkRSRHRCUVVOR096czdiME5CUldVN1FVRkRaQ3hWUVVGSkxFdEJRVXNzWVVGQlRDeEpRVUZ6UWl4TFFVRkxMRmxCUVV3c1MwRkJjMElzUTBGQmFFUXNSVUZCYlVRN1FVRkRha1FzWVVGQlN5eFBRVUZNTzBGQlEwRXNZVUZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRWEpDTzBGQlEwRXNZVUZCU3l4TlFVRk1PMEZCUTBRc1QwRktSQ3hOUVVsUE8wRkJRMHdzWVVGQlN5eGxRVUZNTzBGQlEwUTdRVUZEUmpzN08zbERRVVZ2UWp0QlFVTnVRaXhYUVVGTExHVkJRVXdzUjBGQmRVSXNTVUZCZGtJN1FVRkRSRHM3TzNGRFFVVm5RanRCUVVObUxGZEJRVXNzWjBKQlFVdzdRVUZEUkRzN08zVkRRVVZyUWp0QlFVTnFRaXhYUVVGTExGbEJRVXc3UVVGRFFTeFZRVUZKTEcxQ1FVRnRRaXhMUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEZsQlFURkRPMEZCUVVFc1ZVRkRTU3h0UWtGQmJVSXNTMEZCU3l4TlFVRk1MRWRCUVdNc1MwRkJTeXhaUVVReFF6dEJRVVZCTEZWQlFVc3NTMEZCU3l4SFFVRk1MRU5CUVZNc1owSkJRVlFzU1VGQk5rSXNTMEZCU3l4dlFrRkJia01zU1VGQk5rUXNTMEZCU3l4SFFVRk1MRU5CUVZNc1owSkJRVlFzU1VGQk5rSXNTMEZCU3l4dlFrRkJia2NzUlVGQk1FZzdRVUZEZUVnc1lVRkJTeXhuUWtGQlRDeERRVUZ6UWl4RFFVRjBRanRCUVVORU8wRkJRMFFzVlVGQlNTeExRVUZMTEZGQlFWUXNSVUZCYlVJN1FVRkRha0lzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwRXNZVUZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eExRVUZMTEUxQlFYcEVPMEZCUTBRc1QwRklSQ3hOUVVkUE8wRkJRMHdzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwRXNZVUZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eExRVUZMTEUxQlFYcEVPMEZCUTBRN1FVRkRSQ3hYUVVGTExFOUJRVXdzU1VGQlowSXNTMEZCU3l4WlFVRk1MRWxCUVhGQ0xFdEJRVXNzVDBGQlRDeEhRVUZsTEVkQlFYQkRMRU5CUVdoQ08wRkJRMEVzVjBGQlN5eFBRVUZNTEVsQlFXZENMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEU5QlFVd3NSMEZCWlN4SFFVRnlReXhEUVVGb1FqdEJRVU5CTEZWQlFVa3NRMEZCUXl4TlFVRk5MRmRCUVZjc1MwRkJTeXhOUVVGb1FpeERRVUZPTEVOQlFVd3NSVUZCY1VNN1FVRkRia01zWVVGQlN5eFBRVUZNTEVkQlFXVXNVVUZCVVN4TFFVRlNMRU5CUVdNc1MwRkJTeXhQUVVGdVFpeEZRVUUwUWl4RFFVRkRMRXRCUVVzc1RVRkJiRU1zUlVGQk1FTXNTMEZCU3l4TlFVRXZReXhEUVVGbU8wRkJRMFE3UVVGRFJDeFZRVUZKTEVOQlFVTXNUVUZCVFN4WFFVRlhMRXRCUVVzc1RVRkJhRUlzUTBGQlRpeERRVUZNTEVWQlFYRkRPMEZCUTI1RExHRkJRVXNzVDBGQlRDeEhRVUZsTEZGQlFWRXNTMEZCVWl4RFFVRmpMRXRCUVVzc1QwRkJia0lzUlVGQk5FSXNRMEZCUXl4TFFVRkxMRTFCUVd4RExFVkJRVEJETEV0QlFVc3NUVUZCTDBNc1EwRkJaanRCUVVORU8wRkJRMFFzVjBGQlN5eFRRVUZNTEVsQlFXdENMRU5CUVVNc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFRRVUZ5UWl4SlFVRnJReXhMUVVGTExGTkJRWHBFTzBGQlEwRXNWMEZCU3l4VFFVRk1MRWxCUVd0Q0xFTkJRVU1zUzBGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VFFVRnlRaXhKUVVGclF5eExRVUZMTEZOQlFYcEVPMEZCUTBFc1YwRkJTeXhKUVVGSkxGRkJRVkVzUTBGQmFrSXNSVUZCYjBJc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeE5RVUY0UXl4RlFVRm5SQ3hQUVVGb1JDeEZRVUY1UkR0QlFVTjJSQ3haUVVGSkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRmFPMEZCUVVFc1dVRkRTU3hUUVVGVExFdEJRVXNzVDBGQlRDeERRVUZoTEV0QlFXSXNRMEZFWWp0QlFVRkJMRmxCUlVrc1UwRkJVeXhMUVVGTExFOUJRVXdzUTBGQllTeExRVUZpTEVOQlJtSTdRVUZCUVN4WlFVZEpMRlZCUVZVc1MwRkJTeXhUUVVGTUxFbEJRV3RDTEZWQlFWVXNTMEZCU3l4UFFVRk1MRWRCUVdVc1EwRkJReXhEUVVGb1FpeEhRVUZ2UWl4RFFVRTVRaXhEUVVGc1FpeERRVWhrTzBGQlFVRXNXVUZKU1N4VlFVRlZMRXRCUVVzc1UwRkJUQ3hKUVVGclFpeFZRVUZWTEV0QlFVc3NUMEZCVEN4SFFVRmxMRU5CUVVNc1EwRkJhRUlzUjBGQmIwSXNRMEZCT1VJc1EwRkJiRUlzUTBGS1pEdEJRVXRCTEdGQlFVc3NWMEZCVEN4RFFVRnBRaXhMUVVGcVFpeEZRVUYzUWl4UFFVRjRRaXhGUVVGcFF5eFBRVUZxUXp0QlFVTkVPMEZCUTBRc1YwRkJTeXhIUVVGTUxFZEJRVmNzVDBGQlR5eExRVUZMTEdkQ1FVRmFMRU5CUVZnN1FVRkRSRHM3T3pKQ1FVVk5MRWtzUlVGQlRTeExMRVZCUVUwN1FVRkRha0k3UVVGRFFTeFZRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVZRc1NVRkJZeXhaUVVGMFFqdEJRVUZCTEZWQlFXOURPMEZCUTJoRExGVkJRVWtzUTBGQlF5eFRRVUZUTEVOQlFWWXNTVUZCWlN4WlFVUjJRaXhEUVVacFFpeERRVWR0UWpzN1FVRkZjRU03UVVGRFFTeFZRVUZKTEZkQlFWY3NTMEZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzVjBGQmVFTTdRVUZEUVN4VlFVRkpMRXRCUVVzc1VVRkJUQ3hMUVVGclFpeFJRVUYwUWl4RlFVRm5RenRCUVVNNVFpeGhRVUZMTEZGQlFVd3NSMEZCWjBJc1VVRkJhRUk3UVVGRFFTeGhRVUZMTEdWQlFVd3NSMEZCZFVJc1NVRkJka0k3UVVGRFJEczdRVUZGUkN4VlFVRkpMRXRCUVVzc1pVRkJWQ3hGUVVFd1FqdEJRVU40UWl4aFFVRkxMR1ZCUVV3c1IwRkJkVUlzUzBGQmRrSTdRVUZEUVN4aFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdRVUZEUVN4aFFVRkxMRmxCUVV3c1IwRkJiMElzUTBGQmNFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTExFMUJRVXdzUjBGQll5eERRVUZrTzBGQlEwRXNWMEZCU3l4TlFVRk1MRWRCUVdNc1EwRkJaRHRCUVVORU96czdkME5CUlcxQ0xFc3NSVUZCVHp0QlFVTjZRaXhWUVVGSkxFOUJRVThzVFVGQlRTeEpRVUZxUWp0QlFVTkJMRlZCUVVrc1VVRkJVU3hOUVVGTkxFdEJRV3hDTzBGQlEwRXNWVUZCU1N4VFFVRlRMRWxCUVZRc1NVRkJhVUlzVlVGQlZTeEpRVUV2UWl4RlFVRnhRenRCUVVOdVF5eGhRVUZMTEdsQ1FVRk1MRWRCUVhsQ0xFTkJRWHBDTzBGQlEwRXNZVUZCU3l4TlFVRk1MRU5CUVZrc1NVRkJXaXhGUVVGclFpeExRVUZzUWp0QlFVTkVPMEZCUTBZN096dHRRMEZGWXl4TExFVkJRVTg3UVVGRGNFSXNWVUZCU1N4UFFVRlBMRTFCUVUwc1dVRkJUaXhEUVVGdFFpeEpRVUU1UWp0QlFVTkJMRlZCUVVrc1VVRkJVU3hOUVVGTkxGbEJRVTRzUTBGQmJVSXNTMEZCTDBJN1FVRkRRU3hWUVVGSkxGTkJRVk1zU1VGQlZDeEpRVUZwUWl4VlFVRlZMRWxCUVM5Q0xFVkJRWEZETzBGQlEyNURMR0ZCUVVzc1dVRkJUQ3hIUVVGdlFpeERRVUZ3UWp0QlFVTkJMR0ZCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUlVGQmEwSXNTMEZCYkVJN1FVRkRSRHRCUVVOR096czdaME5CUlZjc1N5eEZRVUZQTzBGQlEycENMRlZCUVVrc1ZVRkJWU3hOUVVGTkxFOUJRWEJDTzBGQlFVRXNWVUZEU1N4VlFVRlZMRTFCUVUwc1QwRkVjRUk3TzBGQlIwRTdRVUZEUVN4VlFVRkhMRXRCUVVzc1UwRkJUQ3hMUVVORExGVkJRVlVzUzBGQlN5eG5Ra0ZCWml4SlFVRnRReXhWUVVGVkxFdEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhaUVVFelJTeEpRVU5CTEZWQlFWVXNTMEZCU3l4blFrRkJaaXhKUVVGdFF5eFZRVUZWTEV0QlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eGhRVVl4UlN4RFFVRklMRVZCUlRoR08wRkJRekZHTEdGQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRU3hoUVVGTExFMUJRVXdzUjBGQll5eERRVUZrTzBGQlEwRTdRVUZEUkRzN1FVRkZTQ3hWUVVGSkxFdEJRVXNzWVVGQlZDeEZRVUYzUWp0QlFVTjBRanRCUVVOQkxGbEJRVWtzUzBGQlN5eHBRa0ZCVkN4RlFVRTBRanRCUVVNeFFpeHZRa0ZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhQUVVGVUxFVkJRV3RDTEV0QlFVc3NaMEpCUVhaQ0xFTkJRVlk3UVVGRFFTeHZRa0ZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhQUVVGVUxFVkJRV3RDTEV0QlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eFpRVUV2UXl4RFFVRldPMEZCUTBFc2IwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNUMEZCVkN4RlFVRnJRaXhMUVVGTExHZENRVUYyUWl4RFFVRldPMEZCUTBFc2IwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNUMEZCVkN4RlFVRnJRaXhMUVVGTExHZENRVUZNTEVkQlFYZENMRXRCUVVzc1lVRkJMME1zUTBGQlZqdEJRVU5FTzBGQlEwUTdRVUZEUVN4WlFVRkhMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEdGQlFUbENMRVZCUVRaRE8wRkJRek5ETEdWQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVVNc1ZVRkJWU3hMUVVGTExHZENRVUZtTEVkQlFXdERMRXRCUVVzc1kwRkJlRU1zU1VGQk1FUXNTMEZCU3l4aFFVRTNSVHRCUVVOQkxHVkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFVTXNWVUZCVlN4TFFVRkxMR2RDUVVGbUxFZEJRV3RETEV0QlFVc3NZMEZCZUVNc1NVRkJNRVFzUzBGQlN5eGhRVUUzUlR0QlFVTkVPMEZCUTBZc1QwRmlSQ3hOUVdGUE8wRkJRMHc3UVVGRFFTeFpRVUZITEV0QlFVc3NZVUZCVEN4SlFVRnpRaXhMUVVGTExHRkJRVGxDTEVWQlFUWkRPMEZCUXpORExHVkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFVTXNWVUZCVlN4TFFVRkxMR0ZCUVdoQ0xFbEJRV2xETEV0QlFVc3NZVUZCY0VRN1FVRkRRU3hsUVVGTExFMUJRVXdzUjBGQll5eERRVUZETEZWQlFWVXNTMEZCU3l4aFFVRm9RaXhKUVVGcFF5eExRVUZMTEdGQlFYQkVPMEZCUTBRN1FVRkRSanRCUVVOR096czdPRUpCUlZNN1FVRkRVaXhYUVVGTExFOUJRVXc3TzBGQlJVRXNiVUpCUVdFc1MwRkJTeXhuUWtGQmJFSTdRVUZEUVN4dFFrRkJZU3hMUVVGTExHTkJRV3hDT3p0QlFVVkJMRmRCUVVzc1QwRkJUQ3hEUVVGaExHVkJRV0lzUTBGQk5rSXNUMEZCTjBJN1FVRkRRU3hYUVVGTExFbEJRVWtzVVVGQlVTeERRVUZxUWl4RlFVRnZRaXhSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEUxQlFYaERMRVZCUVdkRUxFOUJRV2hFTEVWQlFYbEVPMEZCUTNaRUxHRkJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NSVUZCYlVJc1pVRkJia0lzUTBGQmJVTXNUMEZCYmtNN1FVRkRSRHM3UVVGRlJDeGhRVUZQTEV0QlFVc3NUMEZCV2p0QlFVTkJMR0ZCUVU4c1MwRkJTeXhOUVVGYU8wRkJRMFE3T3pzNFFrRkZVenRCUVVOU0xHRkJRVThzVDBGQlVEdEJRVU5FT3pzN096czdRVUZKU0N4UFFVRlBMRTlCUVZBc1IwRkJhVUlzVVVGQmFrSWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCbEtIUXNiaXh5S1h0bWRXNWpkR2x2YmlCektHOHNkU2w3YVdZb0lXNWJiMTBwZTJsbUtDRjBXMjlkS1h0MllYSWdZVDEwZVhCbGIyWWdjbVZ4ZFdseVpUMDlYQ0ptZFc1amRHbHZibHdpSmlaeVpYRjFhWEpsTzJsbUtDRjFKaVpoS1hKbGRIVnliaUJoS0c4c0lUQXBPMmxtS0drcGNtVjBkWEp1SUdrb2J5d2hNQ2s3ZG1GeUlHWTlibVYzSUVWeWNtOXlLRndpUTJGdWJtOTBJR1pwYm1RZ2JXOWtkV3hsSUNkY0lpdHZLMXdpSjF3aUtUdDBhSEp2ZHlCbUxtTnZaR1U5WENKTlQwUlZURVZmVGs5VVgwWlBWVTVFWENJc1puMTJZWElnYkQxdVcyOWRQWHRsZUhCdmNuUnpPbnQ5ZlR0MFcyOWRXekJkTG1OaGJHd29iQzVsZUhCdmNuUnpMR1oxYm1OMGFXOXVLR1VwZTNaaGNpQnVQWFJiYjExYk1WMWJaVjA3Y21WMGRYSnVJSE1vYmo5dU9tVXBmU3hzTEd3dVpYaHdiM0owY3l4bExIUXNiaXh5S1gxeVpYUjFjbTRnYmx0dlhTNWxlSEJ2Y25SemZYWmhjaUJwUFhSNWNHVnZaaUJ5WlhGMWFYSmxQVDFjSW1aMWJtTjBhVzl1WENJbUpuSmxjWFZwY21VN1ptOXlLSFpoY2lCdlBUQTdienh5TG14bGJtZDBhRHR2S3lzcGN5aHlXMjlkS1R0eVpYUjFjbTRnYzMwcElpd2lMeXBjYm05aWFtVmpkQzFoYzNOcFoyNWNiaWhqS1NCVGFXNWtjbVVnVTI5eWFIVnpYRzVBYkdsalpXNXpaU0JOU1ZSY2Jpb3ZYRzVjYmlkMWMyVWdjM1J5YVdOMEp6dGNiaThxSUdWemJHbHVkQzFrYVhOaFlteGxJRzV2TFhWdWRYTmxaQzEyWVhKeklDb3ZYRzUyWVhJZ1oyVjBUM2R1VUhKdmNHVnlkSGxUZVcxaWIyeHpJRDBnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3p0Y2JuWmhjaUJvWVhOUGQyNVFjbTl3WlhKMGVTQTlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrN1hHNTJZWElnY0hKdmNFbHpSVzUxYldWeVlXSnNaU0E5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1Y0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdVN1hHNWNibVoxYm1OMGFXOXVJSFJ2VDJKcVpXTjBLSFpoYkNrZ2UxeHVYSFJwWmlBb2RtRnNJRDA5UFNCdWRXeHNJSHg4SUhaaGJDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNWNkRngwZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblQySnFaV04wTG1GemMybG5iaUJqWVc1dWIzUWdZbVVnWTJGc2JHVmtJSGRwZEdnZ2JuVnNiQ0J2Y2lCMWJtUmxabWx1WldRbktUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQlBZbXBsWTNRb2RtRnNLVHRjYm4xY2JseHVablZ1WTNScGIyNGdjMmh2ZFd4a1ZYTmxUbUYwYVhabEtDa2dlMXh1WEhSMGNua2dlMXh1WEhSY2RHbG1JQ2doVDJKcVpXTjBMbUZ6YzJsbmJpa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dVhIUmNkSDFjYmx4dVhIUmNkQzh2SUVSbGRHVmpkQ0JpZFdkbmVTQndjbTl3WlhKMGVTQmxiblZ0WlhKaGRHbHZiaUJ2Y21SbGNpQnBiaUJ2YkdSbGNpQldPQ0IyWlhKemFXOXVjeTVjYmx4dVhIUmNkQzh2SUdoMGRIQnpPaTh2WW5WbmN5NWphSEp2YldsMWJTNXZjbWN2Y0M5Mk9DOXBjM04xWlhNdlpHVjBZV2xzUDJsa1BUUXhNVGhjYmx4MFhIUjJZWElnZEdWemRERWdQU0J1WlhjZ1UzUnlhVzVuS0NkaFltTW5LVHNnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFd4cGJtVWdibTh0Ym1WM0xYZHlZWEJ3WlhKelhHNWNkRngwZEdWemRERmJOVjBnUFNBblpHVW5PMXh1WEhSY2RHbG1JQ2hQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsT1lXMWxjeWgwWlhOME1TbGJNRjBnUFQwOUlDYzFKeWtnZTF4dVhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFJjZEgxY2JseHVYSFJjZEM4dklHaDBkSEJ6T2k4dlluVm5jeTVqYUhKdmJXbDFiUzV2Y21jdmNDOTJPQzlwYzNOMVpYTXZaR1YwWVdsc1AybGtQVE13TlRaY2JseDBYSFIyWVhJZ2RHVnpkRElnUFNCN2ZUdGNibHgwWEhSbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElERXdPeUJwS3lzcElIdGNibHgwWEhSY2RIUmxjM1F5V3lkZkp5QXJJRk4wY21sdVp5NW1jbTl0UTJoaGNrTnZaR1VvYVNsZElEMGdhVHRjYmx4MFhIUjlYRzVjZEZ4MGRtRnlJRzl5WkdWeU1pQTlJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVU1aGJXVnpLSFJsYzNReUtTNXRZWEFvWm5WdVkzUnBiMjRnS0c0cElIdGNibHgwWEhSY2RISmxkSFZ5YmlCMFpYTjBNbHR1WFR0Y2JseDBYSFI5S1R0Y2JseDBYSFJwWmlBb2IzSmtaWEl5TG1wdmFXNG9KeWNwSUNFOVBTQW5NREV5TXpRMU5qYzRPU2NwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwWEhSOVhHNWNibHgwWEhRdkx5Qm9kSFJ3Y3pvdkwySjFaM011WTJoeWIyMXBkVzB1YjNKbkwzQXZkamd2YVhOemRXVnpMMlJsZEdGcGJEOXBaRDB6TURVMlhHNWNkRngwZG1GeUlIUmxjM1F6SUQwZ2UzMDdYRzVjZEZ4MEoyRmlZMlJsWm1kb2FXcHJiRzF1YjNCeGNuTjBKeTV6Y0d4cGRDZ25KeWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYkdWMGRHVnlLU0I3WEc1Y2RGeDBYSFIwWlhOME0xdHNaWFIwWlhKZElEMGdiR1YwZEdWeU8xeHVYSFJjZEgwcE8xeHVYSFJjZEdsbUlDaFBZbXBsWTNRdWEyVjVjeWhQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0IwWlhOME15a3BMbXB2YVc0b0p5Y3BJQ0U5UFZ4dVhIUmNkRngwWEhRbllXSmpaR1ZtWjJocGFtdHNiVzV2Y0hGeWMzUW5LU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJSFJ5ZFdVN1hHNWNkSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2UxeHVYSFJjZEM4dklGZGxJR1J2YmlkMElHVjRjR1ZqZENCaGJua2diMllnZEdobElHRmliM1psSUhSdklIUm9jbTkzTENCaWRYUWdZbVYwZEdWeUlIUnZJR0psSUhOaFptVXVYRzVjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSOVhHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnYzJodmRXeGtWWE5sVG1GMGFYWmxLQ2tnUHlCUFltcGxZM1F1WVhOemFXZHVJRG9nWm5WdVkzUnBiMjRnS0hSaGNtZGxkQ3dnYzI5MWNtTmxLU0I3WEc1Y2RIWmhjaUJtY205dE8xeHVYSFIyWVhJZ2RHOGdQU0IwYjA5aWFtVmpkQ2gwWVhKblpYUXBPMXh1WEhSMllYSWdjM2x0WW05c2N6dGNibHh1WEhSbWIzSWdLSFpoY2lCeklEMGdNVHNnY3lBOElHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lITXJLeWtnZTF4dVhIUmNkR1p5YjIwZ1BTQlBZbXBsWTNRb1lYSm5kVzFsYm5SelczTmRLVHRjYmx4dVhIUmNkR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQm1jbTl0S1NCN1hHNWNkRngwWEhScFppQW9hR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2htY205dExDQnJaWGtwS1NCN1hHNWNkRngwWEhSY2RIUnZXMnRsZVYwZ1BTQm1jbTl0VzJ0bGVWMDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLR2RsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3lrZ2UxeHVYSFJjZEZ4MGMzbHRZbTlzY3lBOUlHZGxkRTkzYmxCeWIzQmxjblI1VTNsdFltOXNjeWhtY205dEtUdGNibHgwWEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djM2x0WW05c2N5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dVhIUmNkRngwWEhScFppQW9jSEp2Y0VselJXNTFiV1Z5WVdKc1pTNWpZV3hzS0daeWIyMHNJSE41YldKdmJITmJhVjBwS1NCN1hHNWNkRngwWEhSY2RGeDBkRzliYzNsdFltOXNjMXRwWFYwZ1BTQm1jbTl0VzNONWJXSnZiSE5iYVYxZE8xeHVYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlIUnZPMXh1ZlR0Y2JpSXNJaTh2SUVkbGJtVnlZWFJsWkNCaWVTQkRiMlptWldWVFkzSnBjSFFnTVM0eE1pNHlYRzRvWm5WdVkzUnBiMjRvS1NCN1hHNGdJSFpoY2lCblpYUk9ZVzV2VTJWamIyNWtjeXdnYUhKMGFXMWxMQ0JzYjJGa1ZHbHRaU3dnYlc5a2RXeGxURzloWkZScGJXVXNJRzV2WkdWTWIyRmtWR2x0WlN3Z2RYQlVhVzFsTzF4dVhHNGdJR2xtSUNnb2RIbHdaVzltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JSEJsY21admNtMWhibU5sSUNFOVBTQnVkV3hzS1NBbUppQndaWEptYjNKdFlXNWpaUzV1YjNjcElIdGNiaUFnSUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwTzF4dUlDQWdJSDA3WEc0Z0lIMGdaV3h6WlNCcFppQW9LSFI1Y0dWdlppQndjbTlqWlhOeklDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JSEJ5YjJObGMzTWdJVDA5SUc1MWJHd3BJQ1ltSUhCeWIyTmxjM011YUhKMGFXMWxLU0I3WEc0Z0lDQWdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9aMlYwVG1GdWIxTmxZMjl1WkhNb0tTQXRJRzV2WkdWTWIyRmtWR2x0WlNrZ0x5QXhaVFk3WEc0Z0lDQWdmVHRjYmlBZ0lDQm9jblJwYldVZ1BTQndjbTlqWlhOekxtaHlkR2x0WlR0Y2JpQWdJQ0JuWlhST1lXNXZVMlZqYjI1a2N5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlHaHlPMXh1SUNBZ0lDQWdhSElnUFNCb2NuUnBiV1VvS1R0Y2JpQWdJQ0FnSUhKbGRIVnliaUJvY2xzd1hTQXFJREZsT1NBcklHaHlXekZkTzF4dUlDQWdJSDA3WEc0Z0lDQWdiVzlrZFd4bFRHOWhaRlJwYldVZ1BTQm5aWFJPWVc1dlUyVmpiMjVrY3lncE8xeHVJQ0FnSUhWd1ZHbHRaU0E5SUhCeWIyTmxjM011ZFhCMGFXMWxLQ2tnS2lBeFpUazdYRzRnSUNBZ2JtOWtaVXh2WVdSVWFXMWxJRDBnYlc5a2RXeGxURzloWkZScGJXVWdMU0IxY0ZScGJXVTdYRzRnSUgwZ1pXeHpaU0JwWmlBb1JHRjBaUzV1YjNjcElIdGNiaUFnSUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUVSaGRHVXVibTkzS0NrZ0xTQnNiMkZrVkdsdFpUdGNiaUFnSUNCOU8xeHVJQ0FnSUd4dllXUlVhVzFsSUQwZ1JHRjBaUzV1YjNjb0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BJQzBnYkc5aFpGUnBiV1U3WEc0Z0lDQWdmVHRjYmlBZ0lDQnNiMkZrVkdsdFpTQTlJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dUlDQjlYRzVjYm4wcExtTmhiR3dvZEdocGN5azdYRzVjYmk4dkl5QnpiM1Z5WTJWTllYQndhVzVuVlZKTVBYQmxjbVp2Y20xaGJtTmxMVzV2ZHk1cWN5NXRZWEJjYmlJc0lpOHZJSE5vYVcwZ1ptOXlJSFZ6YVc1bklIQnliMk5sYzNNZ2FXNGdZbkp2ZDNObGNseHVkbUZ5SUhCeWIyTmxjM01nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0OU8xeHVYRzR2THlCallXTm9aV1FnWm5KdmJTQjNhR0YwWlhabGNpQm5iRzlpWVd3Z2FYTWdjSEpsYzJWdWRDQnpieUIwYUdGMElIUmxjM1FnY25WdWJtVnljeUIwYUdGMElITjBkV0lnYVhSY2JpOHZJR1J2YmlkMElHSnlaV0ZySUhSb2FXNW5jeTRnSUVKMWRDQjNaU0J1WldWa0lIUnZJSGR5WVhBZ2FYUWdhVzRnWVNCMGNua2dZMkYwWTJnZ2FXNGdZMkZ6WlNCcGRDQnBjMXh1THk4Z2QzSmhjSEJsWkNCcGJpQnpkSEpwWTNRZ2JXOWtaU0JqYjJSbElIZG9hV05vSUdSdlpYTnVKM1FnWkdWbWFXNWxJR0Z1ZVNCbmJHOWlZV3h6TGlBZ1NYUW5jeUJwYm5OcFpHVWdZVnh1THk4Z1puVnVZM1JwYjI0Z1ltVmpZWFZ6WlNCMGNua3ZZMkYwWTJobGN5QmtaVzl3ZEdsdGFYcGxJR2x1SUdObGNuUmhhVzRnWlc1bmFXNWxjeTVjYmx4dWRtRnlJR05oWTJobFpGTmxkRlJwYldWdmRYUTdYRzUyWVhJZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWME8xeHVYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBVMlYwVkdsdGIzVjBLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jMlYwVkdsdFpXOTFkQ0JvWVhNZ2JtOTBJR0psWlc0Z1pHVm1hVzVsWkNjcE8xeHVmVnh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENBb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkamJHVmhjbFJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNiaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ6WlhSVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFUyVjBWR2x0YjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamJHVmhjbFJwYldWdmRYUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdmVnh1ZlNBb0tTbGNibVoxYm1OMGFXOXVJSEoxYmxScGJXVnZkWFFvWm5WdUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpGTmxkRlJwYldWdmRYUWdQVDA5SUhObGRGUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdMeTl1YjNKdFlXd2daVzUyYVhKdmJXVnVkSE1nYVc0Z2MyRnVaU0J6YVhSMVlYUnBiMjV6WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUhObGRGUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwSUh4OElDRmpZV05vWldSVFpYUlVhVzFsYjNWMEtTQW1KaUJ6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQnpaWFJVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQm1kVzRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1OVhHNW1kVzVqZEdsdmJpQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlHTnNaV0Z5VkdsdFpXOTFkQ0IzWVhOdUozUWdZWFpoYVd4aFlteGxJR0oxZENCM1lYTWdiR0YwZEdWeUlHUmxabWx1WldSY2JpQWdJQ0JwWmlBb0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENCOGZDQWhZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBLU0FtSmlCamJHVmhjbFJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1kyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUM4dklIZG9aVzRnZDJobGJpQnpiMjFsWW05a2VTQm9ZWE1nYzJOeVpYZGxaQ0IzYVhSb0lITmxkRlJwYldWdmRYUWdZblYwSUc1dklFa3VSUzRnYldGa1pHNWxjM05jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyaGxiaUIzWlNCaGNtVWdhVzRnU1M1RkxpQmlkWFFnZEdobElITmpjbWx3ZENCb1lYTWdZbVZsYmlCbGRtRnNaV1FnYzI4Z1NTNUZMaUJrYjJWemJpZDBJQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLRzUxYkd3c0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNJdVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGIyMWxJSFpsY25OcGIyNXpJRzltSUVrdVJTNGdhR0YyWlNCa2FXWm1aWEpsYm5RZ2NuVnNaWE1nWm05eUlHTnNaV0Z5VkdsdFpXOTFkQ0IyY3lCelpYUlVhVzFsYjNWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnYldGeWEyVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNWNibjFjYm5aaGNpQnhkV1YxWlNBOUlGdGRPMXh1ZG1GeUlHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNTJZWElnWTNWeWNtVnVkRkYxWlhWbE8xeHVkbUZ5SUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmx4dVpuVnVZM1JwYjI0Z1kyeGxZVzVWY0U1bGVIUlVhV05yS0NrZ2UxeHVJQ0FnSUdsbUlDZ2haSEpoYVc1cGJtY2dmSHdnSVdOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmpkWEp5Wlc1MFVYVmxkV1V1WTI5dVkyRjBLSEYxWlhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdaSEpoYVc1UmRXVjFaU2dwTzF4dUlDQWdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdaSEpoYVc1UmRXVjFaU2dwSUh0Y2JpQWdJQ0JwWmlBb1pISmhhVzVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2RHbHRaVzkxZENBOUlISjFibFJwYldWdmRYUW9ZMnhsWVc1VmNFNWxlSFJVYVdOcktUdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0FnSUhkb2FXeGxLR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCeGRXVjFaVHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0NzcmNYVmxkV1ZKYm1SbGVDQThJR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpWdHhkV1YxWlVsdVpHVjRYUzV5ZFc0b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnSUNBZ0lHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCOVhHNGdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdiblZzYkR0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lISjFia05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwS1R0Y2JuMWNibHh1Y0hKdlkyVnpjeTV1WlhoMFZHbGpheUE5SUdaMWJtTjBhVzl1SUNobWRXNHBJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjbWR6VzJrZ0xTQXhYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeGRXVjFaUzV3ZFhOb0tHNWxkeUJKZEdWdEtHWjFiaXdnWVhKbmN5a3BPMXh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdnZ1BUMDlJREVnSmlZZ0lXUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEoxYmxScGJXVnZkWFFvWkhKaGFXNVJkV1YxWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THk4Z2RqZ2diR2xyWlhNZ2NISmxaR2xqZEdsaWJHVWdiMkpxWldOMGMxeHVablZ1WTNScGIyNGdTWFJsYlNobWRXNHNJR0Z5Y21GNUtTQjdYRzRnSUNBZ2RHaHBjeTVtZFc0Z1BTQm1kVzQ3WEc0Z0lDQWdkR2hwY3k1aGNuSmhlU0E5SUdGeWNtRjVPMXh1ZlZ4dVNYUmxiUzV3Y205MGIzUjVjR1V1Y25WdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVMbUZ3Y0d4NUtHNTFiR3dzSUhSb2FYTXVZWEp5WVhrcE8xeHVmVHRjYm5CeWIyTmxjM011ZEdsMGJHVWdQU0FuWW5KdmQzTmxjaWM3WEc1d2NtOWpaWE56TG1KeWIzZHpaWElnUFNCMGNuVmxPMXh1Y0hKdlkyVnpjeTVsYm5ZZ1BTQjdmVHRjYm5CeWIyTmxjM011WVhKbmRpQTlJRnRkTzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1SUQwZ0p5YzdJQzh2SUdWdGNIUjVJSE4wY21sdVp5QjBieUJoZG05cFpDQnlaV2RsZUhBZ2FYTnpkV1Z6WEc1d2NtOWpaWE56TG5abGNuTnBiMjV6SUQwZ2UzMDdYRzVjYm1aMWJtTjBhVzl1SUc1dmIzQW9LU0I3ZlZ4dVhHNXdjbTlqWlhOekxtOXVJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVZV1JrVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV2Ym1ObElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyWm1JRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1eVpXMXZkbVZCYkd4TWFYTjBaVzVsY25NZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1bGJXbDBJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkU5dVkyVk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNWNibkJ5YjJObGMzTXViR2x6ZEdWdVpYSnpJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHNnY21WMGRYSnVJRnRkSUgxY2JseHVjSEp2WTJWemN5NWlhVzVrYVc1bklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WW1sdVpHbHVaeUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVYRzV3Y205alpYTnpMbU4zWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2N2SnlCOU8xeHVjSEp2WTJWemN5NWphR1JwY2lBOUlHWjFibU4wYVc5dUlDaGthWElwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZMmhrYVhJZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYm5CeWIyTmxjM011ZFcxaGMyc2dQU0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SURBN0lIMDdYRzRpTENKMllYSWdibTkzSUQwZ2NtVnhkV2x5WlNnbmNHVnlabTl5YldGdVkyVXRibTkzSnlsY2JpQWdMQ0J5YjI5MElEMGdkSGx3Wlc5bUlIZHBibVJ2ZHlBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCbmJHOWlZV3dnT2lCM2FXNWtiM2RjYmlBZ0xDQjJaVzVrYjNKeklEMGdXeWR0YjNvbkxDQW5kMlZpYTJsMEoxMWNiaUFnTENCemRXWm1hWGdnUFNBblFXNXBiV0YwYVc5dVJuSmhiV1VuWEc0Z0lDd2djbUZtSUQwZ2NtOXZkRnNuY21WeGRXVnpkQ2NnS3lCemRXWm1hWGhkWEc0Z0lDd2dZMkZtSUQwZ2NtOXZkRnNuWTJGdVkyVnNKeUFySUhOMVptWnBlRjBnZkh3Z2NtOXZkRnNuWTJGdVkyVnNVbVZ4ZFdWemRDY2dLeUJ6ZFdabWFYaGRYRzVjYm1admNpaDJZWElnYVNBOUlEQTdJQ0Z5WVdZZ0ppWWdhU0E4SUhabGJtUnZjbk11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnY21GbUlEMGdjbTl2ZEZ0MlpXNWtiM0p6VzJsZElDc2dKMUpsY1hWbGMzUW5JQ3NnYzNWbVptbDRYVnh1SUNCallXWWdQU0J5YjI5MFczWmxibVJ2Y25OYmFWMGdLeUFuUTJGdVkyVnNKeUFySUhOMVptWnBlRjFjYmlBZ0lDQWdJSHg4SUhKdmIzUmJkbVZ1Wkc5eWMxdHBYU0FySUNkRFlXNWpaV3hTWlhGMVpYTjBKeUFySUhOMVptWnBlRjFjYm4xY2JseHVMeThnVTI5dFpTQjJaWEp6YVc5dWN5QnZaaUJHUmlCb1lYWmxJSEpCUmlCaWRYUWdibTkwSUdOQlJseHVhV1lvSVhKaFppQjhmQ0FoWTJGbUtTQjdYRzRnSUhaaGNpQnNZWE4wSUQwZ01GeHVJQ0FnSUN3Z2FXUWdQU0F3WEc0Z0lDQWdMQ0J4ZFdWMVpTQTlJRnRkWEc0Z0lDQWdMQ0JtY21GdFpVUjFjbUYwYVc5dUlEMGdNVEF3TUNBdklEWXdYRzVjYmlBZ2NtRm1JRDBnWm5WdVkzUnBiMjRvWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0JwWmloeGRXVjFaUzVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lIWmhjaUJmYm05M0lEMGdibTkzS0NsY2JpQWdJQ0FnSUNBZ0xDQnVaWGgwSUQwZ1RXRjBhQzV0WVhnb01Dd2dabkpoYldWRWRYSmhkR2x2YmlBdElDaGZibTkzSUMwZ2JHRnpkQ2twWEc0Z0lDQWdJQ0JzWVhOMElEMGdibVY0ZENBcklGOXViM2RjYmlBZ0lDQWdJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqY0NBOUlIRjFaWFZsTG5Oc2FXTmxLREFwWEc0Z0lDQWdJQ0FnSUM4dklFTnNaV0Z5SUhGMVpYVmxJR2hsY21VZ2RHOGdjSEpsZG1WdWRGeHVJQ0FnSUNBZ0lDQXZMeUJqWVd4c1ltRmphM01nWm5KdmJTQmhjSEJsYm1ScGJtY2diR2x6ZEdWdVpYSnpYRzRnSUNBZ0lDQWdJQzh2SUhSdklIUm9aU0JqZFhKeVpXNTBJR1p5WVcxbEozTWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ2NYVmxkV1V1YkdWdVozUm9JRDBnTUZ4dUlDQWdJQ0FnSUNCbWIzSW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1kzQXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaWdoWTNCYmFWMHVZMkZ1WTJWc2JHVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbmw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR053VzJsZExtTmhiR3hpWVdOcktHeGhjM1FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUhzZ2RHaHliM2NnWlNCOUxDQXdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlN3Z1RXRjBhQzV5YjNWdVpDaHVaWGgwS1NsY2JpQWdJQ0I5WEc0Z0lDQWdjWFZsZFdVdWNIVnphQ2g3WEc0Z0lDQWdJQ0JvWVc1a2JHVTZJQ3NyYVdRc1hHNGdJQ0FnSUNCallXeHNZbUZqYXpvZ1kyRnNiR0poWTJzc1hHNGdJQ0FnSUNCallXNWpaV3hzWldRNklHWmhiSE5sWEc0Z0lDQWdmU2xjYmlBZ0lDQnlaWFIxY200Z2FXUmNiaUFnZlZ4dVhHNGdJR05oWmlBOUlHWjFibU4wYVc5dUtHaGhibVJzWlNrZ2UxeHVJQ0FnSUdadmNpaDJZWElnYVNBOUlEQTdJR2tnUENCeGRXVjFaUzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWW9jWFZsZFdWYmFWMHVhR0Z1Wkd4bElEMDlQU0JvWVc1a2JHVXBJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVmJhVjB1WTJGdVkyVnNiR1ZrSUQwZ2RISjFaVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR1p1S1NCN1hHNGdJQzh2SUZkeVlYQWdhVzRnWVNCdVpYY2dablZ1WTNScGIyNGdkRzhnY0hKbGRtVnVkRnh1SUNBdkx5QmdZMkZ1WTJWc1lDQndiM1JsYm5ScFlXeHNlU0JpWldsdVp5QmhjM05wWjI1bFpGeHVJQ0F2THlCMGJ5QjBhR1VnYm1GMGFYWmxJSEpCUmlCbWRXNWpkR2x2Ymx4dUlDQnlaWFIxY200Z2NtRm1MbU5oYkd3b2NtOXZkQ3dnWm00cFhHNTlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5NWpZVzVqWld3Z1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ1kyRm1MbUZ3Y0d4NUtISnZiM1FzSUdGeVozVnRaVzUwY3lsY2JuMWNibTF2WkhWc1pTNWxlSEJ2Y25SekxuQnZiSGxtYVd4c0lEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lISnZiM1F1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElEMGdjbUZtWEc0Z0lISnZiM1F1WTJGdVkyVnNRVzVwYldGMGFXOXVSbkpoYldVZ1BTQmpZV1pjYm4xY2JpSXNJaThxS2x4dUtpQlFZWEpoYkd4aGVDNXFjMXh1S2lCQVlYVjBhRzl5SUUxaGRIUm9aWGNnVjJGblpYSm1hV1ZzWkNBdElFQjNZV2RsY21acFpXeGtMQ0JTWlc3RHFTQlNiM1JvSUMwZ2JXRnBiRUJ5Wlc1bGNtOTBhQzV2Y21kY2Jpb2dRR1JsYzJOeWFYQjBhVzl1SUVOeVpXRjBaWE1nWVNCd1lYSmhiR3hoZUNCbFptWmxZM1FnWW1WMGQyVmxiaUJoYmlCaGNuSmhlU0J2WmlCc1lYbGxjbk1zWEc0cUlDQWdJQ0FnSUNBZ0lDQWdJQ0JrY21sMmFXNW5JSFJvWlNCdGIzUnBiMjRnWm5KdmJTQjBhR1VnWjNseWIzTmpiM0JsSUc5MWRIQjFkQ0J2WmlCaElITnRZWEowWkdWMmFXTmxMbHh1S2lBZ0lDQWdJQ0FnSUNBZ0lDQWdTV1lnYm04Z1ozbHliM05qYjNCbElHbHpJR0YyWVdsc1lXSnNaU3dnZEdobElHTjFjbk52Y2lCd2IzTnBkR2x2YmlCcGN5QjFjMlZrTGx4dUtpOWNibHh1WTI5dWMzUWdjbkZCYmtaeUlEMGdjbVZ4ZFdseVpTZ25jbUZtSnlsY2JtTnZibk4wSUc5aWFtVmpkRUZ6YzJsbmJpQTlJSEpsY1hWcGNtVW9KMjlpYW1WamRDMWhjM05wWjI0bktWeHVYRzVqYjI1emRDQm9aV3h3WlhKeklEMGdlMXh1SUNCd2NtOXdaWEowZVVOaFkyaGxPaUI3ZlN4Y2JpQWdkbVZ1Wkc5eWN6b2dXMjUxYkd3c0lGc25MWGRsWW10cGRDMG5MQ2QzWldKcmFYUW5YU3dnV3ljdGJXOTZMU2NzSjAxdmVpZGRMQ0JiSnkxdkxTY3NKMDhuWFN3Z1d5Y3RiWE10Snl3bmJYTW5YVjBzWEc1Y2JpQWdZMnhoYlhBb2RtRnNkV1VzSUcxcGJpd2diV0Y0S1NCN1hHNGdJQ0FnY21WMGRYSnVJRzFwYmlBOElHMWhlRnh1SUNBZ0lDQWdQeUFvZG1Gc2RXVWdQQ0J0YVc0Z1B5QnRhVzRnT2lCMllXeDFaU0ErSUcxaGVDQS9JRzFoZUNBNklIWmhiSFZsS1Z4dUlDQWdJQ0FnT2lBb2RtRnNkV1VnUENCdFlYZ2dQeUJ0WVhnZ09pQjJZV3gxWlNBK0lHMXBiaUEvSUcxcGJpQTZJSFpoYkhWbEtWeHVJQ0I5TEZ4dVhHNGdJR1JoZEdFb1pXeGxiV1Z1ZEN3Z2JtRnRaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm9aV3h3WlhKekxtUmxjMlZ5YVdGc2FYcGxLR1ZzWlcxbGJuUXVaMlYwUVhSMGNtbGlkWFJsS0Nka1lYUmhMU2NyYm1GdFpTa3BYRzRnSUgwc1hHNWNiaUFnWkdWelpYSnBZV3hwZW1Vb2RtRnNkV1VwSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1VnUFQwOUlDZDBjblZsSnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIWmhiSFZsSUQwOVBTQW5abUZzYzJVbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkhWbElEMDlQU0FuYm5Wc2JDY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doYVhOT1lVNG9jR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTa3BJQ1ltSUdselJtbHVhWFJsS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpWeHVJQ0FnSUgxY2JpQWdmU3hjYmx4dUlDQmpZVzFsYkVOaGMyVW9kbUZzZFdVcElIdGNiaUFnSUNCeVpYUjFjbTRnZG1Gc2RXVXVjbVZ3YkdGalpTZ3ZMU3NvTGlrL0wyY3NJQ2h0WVhSamFDd2dZMmhoY21GamRHVnlLU0E5UGlCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWTJoaGNtRmpkR1Z5SUQ4Z1kyaGhjbUZqZEdWeUxuUnZWWEJ3WlhKRFlYTmxLQ2tnT2lBbkoxeHVJQ0FnSUgwcFhHNGdJSDBzWEc1Y2JpQWdZV05qWld4bGNtRjBaU2hsYkdWdFpXNTBLU0I3WEc0Z0lDQWdhR1ZzY0dWeWN5NWpjM01vWld4bGJXVnVkQ3dnSjNSeVlXNXpabTl5YlNjc0lDZDBjbUZ1YzJ4aGRHVXpaQ2d3TERBc01Da2djbTkwWVhSbEtEQXVNREF3TVdSbFp5a25LVnh1SUNBZ0lHaGxiSEJsY25NdVkzTnpLR1ZzWlcxbGJuUXNJQ2QwY21GdWMyWnZjbTB0YzNSNWJHVW5MQ0FuY0hKbGMyVnlkbVV0TTJRbktWeHVJQ0FnSUdobGJIQmxjbk11WTNOektHVnNaVzFsYm5Rc0lDZGlZV05yWm1GalpTMTJhWE5wWW1sc2FYUjVKeXdnSjJocFpHUmxiaWNwWEc0Z0lIMHNYRzVjYmlBZ2RISmhibk5tYjNKdFUzVndjRzl5ZENoMllXeDFaU2tnZTF4dUlDQWdJR3hsZENCbGJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5a3NYRzRnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVVM1Z3Y0c5eWRDQTlJR1poYkhObExGeHVJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWWmhiSFZsSUQwZ2JuVnNiQ3hjYmlBZ0lDQWdJQ0FnWm1WaGRIVnlaVk4xY0hCdmNuUWdQU0JtWVd4elpTeGNiaUFnSUNBZ0lDQWdZM056VUhKdmNHVnlkSGtnUFNCdWRXeHNMRnh1SUNBZ0lDQWdJQ0JxYzFCeWIzQmxjblI1SUQwZ2JuVnNiRnh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc0lEMGdhR1ZzY0dWeWN5NTJaVzVrYjNKekxteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh1SUNBZ0lDQWdhV1lnS0dobGJIQmxjbk11ZG1WdVpHOXljMXRwWFNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQmpjM05RY205d1pYSjBlU0E5SUdobGJIQmxjbk11ZG1WdVpHOXljMXRwWFZzd1hTQXJJQ2QwY21GdWMyWnZjbTBuWEc0Z0lDQWdJQ0FnSUdwelVISnZjR1Z5ZEhrZ1BTQm9aV3h3WlhKekxuWmxibVJ2Y25OYmFWMWJNVjBnS3lBblZISmhibk5tYjNKdEoxeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ1kzTnpVSEp2Y0dWeWRIa2dQU0FuZEhKaGJuTm1iM0p0SjF4dUlDQWdJQ0FnSUNCcWMxQnliM0JsY25SNUlEMGdKM1J5WVc1elptOXliU2RjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtSUNobGJHVnRaVzUwTG5OMGVXeGxXMnB6VUhKdmNHVnlkSGxkSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnY0hKdmNHVnlkSGxUZFhCd2IzSjBJRDBnZEhKMVpWeHVJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnpkMmwwWTJnb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUdOaGMyVWdKekpFSnpwY2JpQWdJQ0FnSUNBZ1ptVmhkSFZ5WlZOMWNIQnZjblFnUFNCd2NtOXdaWEowZVZOMWNIQnZjblJjYmlBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lHTmhjMlVnSnpORUp6cGNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQmxjblI1VTNWd2NHOXlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHeGxkQ0JpYjJSNUlEMGdaRzlqZFcxbGJuUXVZbTlrZVNCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkaWIyUjVKeWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR1J2WTNWdFpXNTBSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5SUGRtVnlabXh2ZHlBOUlHUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1emRIbHNaUzV2ZG1WeVpteHZkeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdhWE5EY21WaGRHVmtRbTlrZVNBOUlHWmhiSE5sWEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvSVdSdlkzVnRaVzUwTG1KdlpIa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHpRM0psWVhSbFpFSnZaSGtnUFNCMGNuVmxYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzNSNWJHVXViM1psY21ac2IzY2dQU0FuYUdsa1pHVnVKMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5SRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHSnZaSGtwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmliMlI1TG5OMGVXeGxMbTkyWlhKbWJHOTNJRDBnSjJocFpHUmxiaWRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZaSGt1YzNSNWJHVXVZbUZqYTJkeWIzVnVaQ0E5SUNjblhHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ1ltOWtlUzVoY0hCbGJtUkRhR2xzWkNobGJHVnRaVzUwS1Z4dUlDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1ZiYW5OUWNtOXdaWEowZVYwZ1BTQW5kSEpoYm5Oc1lYUmxNMlFvTVhCNExERndlQ3d4Y0hncEoxeHVJQ0FnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVWbUZzZFdVZ1BTQjNhVzVrYjNjdVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNobGJHVnRaVzUwS1M1blpYUlFjbTl3WlhKMGVWWmhiSFZsS0dOemMxQnliM0JsY25SNUtWeHVJQ0FnSUNBZ0lDQWdJR1psWVhSMWNtVlRkWEJ3YjNKMElEMGdjSEp2Y0dWeWRIbFdZV3gxWlNBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUhCeWIzQmxjblI1Vm1Gc2RXVXViR1Z1WjNSb0lENGdNQ0FtSmlCd2NtOXdaWEowZVZaaGJIVmxJQ0U5UFNBbmJtOXVaU2RjYmlBZ0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc1pXMWxiblF1YzNSNWJHVXViM1psY21ac2IzY2dQU0JrYjJOMWJXVnVkRTkyWlhKbWJHOTNYRzRnSUNBZ0lDQWdJQ0FnWW05a2VTNXlaVzF2ZG1WRGFHbHNaQ2hsYkdWdFpXNTBLVnh1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLQ0JwYzBOeVpXRjBaV1JDYjJSNUlDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ltOWtlUzV5WlcxdmRtVkJkSFJ5YVdKMWRHVW9KM04wZVd4bEp5bGNiaUFnSUNBZ0lDQWdJQ0FnSUdKdlpIa3VjR0Z5Wlc1MFRtOWtaUzV5WlcxdmRtVkRhR2xzWkNoaWIyUjVLVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1ptVmhkSFZ5WlZOMWNIQnZjblJjYmlBZ2ZTeGNibHh1SUNCamMzTW9aV3hsYldWdWRDd2djSEp2Y0dWeWRIa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ2JHVjBJR3B6VUhKdmNHVnlkSGtnUFNCb1pXeHdaWEp6TG5CeWIzQmxjblI1UTJGamFHVmJjSEp2Y0dWeWRIbGRYRzRnSUNBZ2FXWWdLQ0ZxYzFCeWIzQmxjblI1S1NCN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNQ3dnYkNBOUlHaGxiSEJsY25NdWRtVnVaRzl5Y3k1c1pXNW5kR2c3SUdrZ1BDQnNPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dobGJIQmxjbk11ZG1WdVpHOXljMXRwWFNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR3B6VUhKdmNHVnlkSGtnUFNCb1pXeHdaWEp6TG1OaGJXVnNRMkZ6WlNob1pXeHdaWEp6TG5abGJtUnZjbk5iYVYxYk1WMGdLeUFuTFNjZ0t5QndjbTl3WlhKMGVTbGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0JxYzFCeWIzQmxjblI1SUQwZ2NISnZjR1Z5ZEhsY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvWld4bGJXVnVkQzV6ZEhsc1pWdHFjMUJ5YjNCbGNuUjVYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnYUdWc2NHVnljeTV3Y205d1pYSjBlVU5oWTJobFczQnliM0JsY25SNVhTQTlJR3B6VUhKdmNHVnlkSGxjYmlBZ0lDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lHVnNaVzFsYm5RdWMzUjViR1ZiYW5OUWNtOXdaWEowZVYwZ1BTQjJZV3gxWlZ4dUlDQjlYRzVjYm4xY2JseHVZMjl1YzNRZ1RVRkhTVU5mVGxWTlFrVlNJRDBnTXpBc1hHNGdJQ0FnSUNCRVJVWkJWVXhVVXlBOUlIdGNiaUFnSUNBZ0lDQWdjbVZzWVhScGRtVkpibkIxZERvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUdOc2FYQlNaV3hoZEdsMlpVbHVjSFYwT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnYVc1d2RYUkZiR1Z0Wlc1ME9pQnVkV3hzTEZ4dUlDQWdJQ0FnSUNCb2IzWmxjazl1YkhrNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNCallXeHBZbkpoZEdsdmJsUm9jbVZ6YUc5c1pEb2dNVEF3TEZ4dUlDQWdJQ0FnSUNCallXeHBZbkpoZEdsdmJrUmxiR0Y1T2lBMU1EQXNYRzRnSUNBZ0lDQWdJSE4xY0hCdmNuUkVaV3hoZVRvZ05UQXdMRnh1SUNBZ0lDQWdJQ0JqWVd4cFluSmhkR1ZZT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnWTJGc2FXSnlZWFJsV1RvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnYVc1MlpYSjBXRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdhVzUyWlhKMFdUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2JHbHRhWFJZT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnYkdsdGFYUlpPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdjMk5oYkdGeVdEb2dNVEF1TUN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR0Z5V1RvZ01UQXVNQ3hjYmlBZ0lDQWdJQ0FnWm5KcFkzUnBiMjVZT2lBd0xqRXNYRzRnSUNBZ0lDQWdJR1p5YVdOMGFXOXVXVG9nTUM0eExGeHVJQ0FnSUNBZ0lDQnZjbWxuYVc1WU9pQXdMalVzWEc0Z0lDQWdJQ0FnSUc5eWFXZHBibGs2SURBdU5TeGNiaUFnSUNBZ0lDQWdjRzlwYm5SbGNrVjJaVzUwY3pvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhCeVpXTnBjMmx2YmpvZ01TeGNiaUFnSUNBZ0lDQWdiMjVTWldGa2VUb2diblZzYkN4Y2JpQWdJQ0FnSUNBZ2MyVnNaV04wYjNJNklHNTFiR3hjYmlBZ0lDQWdJSDFjYmx4dVkyeGhjM01nVUdGeVlXeHNZWGdnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhsYkdWdFpXNTBMQ0J2Y0hScGIyNXpLU0I3WEc1Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5RZ1BTQmxiR1Z0Wlc1MFhHNWNiaUFnSUNCamIyNXpkQ0JrWVhSaElEMGdlMXh1SUNBZ0lDQWdZMkZzYVdKeVlYUmxXRG9nYUdWc2NHVnljeTVrWVhSaEtIUm9hWE11Wld4bGJXVnVkQ3dnSjJOaGJHbGljbUYwWlMxNEp5a3NYRzRnSUNBZ0lDQmpZV3hwWW5KaGRHVlpPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWTJGc2FXSnlZWFJsTFhrbktTeGNiaUFnSUNBZ0lHbHVkbVZ5ZEZnNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHBiblpsY25RdGVDY3BMRnh1SUNBZ0lDQWdhVzUyWlhKMFdUb2dhR1ZzY0dWeWN5NWtZWFJoS0hSb2FYTXVaV3hsYldWdWRDd2dKMmx1ZG1WeWRDMTVKeWtzWEc0Z0lDQWdJQ0JzYVcxcGRGZzZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RzYVcxcGRDMTRKeWtzWEc0Z0lDQWdJQ0JzYVcxcGRGazZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RzYVcxcGRDMTVKeWtzWEc0Z0lDQWdJQ0J6WTJGc1lYSllPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYzJOaGJHRnlMWGduS1N4Y2JpQWdJQ0FnSUhOallXeGhjbGs2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkelkyRnNZWEl0ZVNjcExGeHVJQ0FnSUNBZ1puSnBZM1JwYjI1WU9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5abkpwWTNScGIyNHRlQ2NwTEZ4dUlDQWdJQ0FnWm5KcFkzUnBiMjVaT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBblpuSnBZM1JwYjI0dGVTY3BMRnh1SUNBZ0lDQWdiM0pwWjJsdVdEb2dhR1ZzY0dWeWN5NWtZWFJoS0hSb2FYTXVaV3hsYldWdWRDd2dKMjl5YVdkcGJpMTRKeWtzWEc0Z0lDQWdJQ0J2Y21sbmFXNVpPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYjNKcFoybHVMWGtuS1N4Y2JpQWdJQ0FnSUhCdmFXNTBaWEpGZG1WdWRITTZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2R3YjJsdWRHVnlMV1YyWlc1MGN5Y3BMRnh1SUNBZ0lDQWdjSEpsWTJsemFXOXVPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuY0hKbFkybHphVzl1Snlrc1hHNGdJQ0FnSUNCeVpXeGhkR2wyWlVsdWNIVjBPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuY21Wc1lYUnBkbVV0YVc1d2RYUW5LU3hjYmlBZ0lDQWdJR05zYVhCU1pXeGhkR2wyWlVsdWNIVjBPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWTJ4cGNDMXlaV3hoZEdsMlpTMXBibkIxZENjcExGeHVJQ0FnSUNBZ2FHOTJaWEpQYm14NU9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5hRzkyWlhJdGIyNXNlU2NwTEZ4dUlDQWdJQ0FnYVc1d2RYUkZiR1Z0Wlc1ME9pQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkcGJuQjFkQzFsYkdWdFpXNTBKeWtwTEZ4dUlDQWdJQ0FnYzJWc1pXTjBiM0k2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkelpXeGxZM1J2Y2ljcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR1JoZEdFcElIdGNiaUFnSUNBZ0lHbG1JQ2hrWVhSaFcydGxlVjBnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ1pHVnNaWFJsSUdSaGRHRmJhMlY1WFZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJRzlpYW1WamRFRnpjMmxuYmloMGFHbHpMQ0JFUlVaQlZVeFVVeXdnWkdGMFlTd2diM0IwYVc5dWN5bGNibHh1SUNBZ0lHbG1LQ0YwYUdsekxtbHVjSFYwUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXBibkIxZEVWc1pXMWxiblFnUFNCMGFHbHpMbVZzWlcxbGJuUmNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1VkdsdFpYSWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHbHZia1pzWVdjZ1BTQjBjblZsWEc0Z0lDQWdkR2hwY3k1bGJtRmliR1ZrSUQwZ1ptRnNjMlZjYmlBZ0lDQjBhR2x6TG1SbGNIUm9jMWdnUFNCYlhWeHVJQ0FnSUhSb2FYTXVaR1Z3ZEdoeldTQTlJRnRkWEc0Z0lDQWdkR2hwY3k1eVlXWWdQU0J1ZFd4c1hHNWNiaUFnSUNCMGFHbHpMbUp2ZFc1a2N5QTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxnZ1BTQXdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVpJRDBnTUZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZkcFpIUm9JRDBnTUZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEVobGFXZG9kQ0E5SURCY2JseHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRFTmxiblJsY2xnZ1BTQXdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBRMlZ1ZEdWeVdTQTlJREJjYmx4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZKaGJtZGxXQ0E5SURCY2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SU1lXNW5aVmtnUFNBd1hHNWNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V0NBOUlEQmNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V1NBOUlEQmNibHh1SUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnTUZ4dUlDQWdJSFJvYVhNdWFXNXdkWFJaSUQwZ01GeHVYRzRnSUNBZ2RHaHBjeTV0YjNScGIyNVlJRDBnTUZ4dUlDQWdJSFJvYVhNdWJXOTBhVzl1V1NBOUlEQmNibHh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxZSUQwZ01GeHVJQ0FnSUhSb2FYTXVkbVZzYjJOcGRIbFpJRDBnTUZ4dVhHNGdJQ0FnZEdocGN5NXZiazF2ZFhObFRXOTJaU0E5SUhSb2FYTXViMjVOYjNWelpVMXZkbVV1WW1sdVpDaDBhR2x6S1Z4dUlDQWdJSFJvYVhNdWIyNUVaWFpwWTJWUGNtbGxiblJoZEdsdmJpQTlJSFJvYVhNdWIyNUVaWFpwWTJWUGNtbGxiblJoZEdsdmJpNWlhVzVrS0hSb2FYTXBYRzRnSUNBZ2RHaHBjeTV2YmtSbGRtbGpaVTF2ZEdsdmJpQTlJSFJvYVhNdWIyNUVaWFpwWTJWTmIzUnBiMjR1WW1sdVpDaDBhR2x6S1Z4dUlDQWdJSFJvYVhNdWIyNVBjbWxsYm5SaGRHbHZibFJwYldWeUlEMGdkR2hwY3k1dmJrOXlhV1Z1ZEdGMGFXOXVWR2x0WlhJdVltbHVaQ2gwYUdsektWeHVJQ0FnSUhSb2FYTXViMjVOYjNScGIyNVVhVzFsY2lBOUlIUm9hWE11YjI1TmIzUnBiMjVVYVcxbGNpNWlhVzVrS0hSb2FYTXBYRzRnSUNBZ2RHaHBjeTV2YmtOaGJHbGljbUYwYVc5dVZHbHRaWElnUFNCMGFHbHpMbTl1UTJGc2FXSnlZWFJwYjI1VWFXMWxjaTVpYVc1a0tIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1dmJrRnVhVzFoZEdsdmJrWnlZVzFsSUQwZ2RHaHBjeTV2YmtGdWFXMWhkR2x2YmtaeVlXMWxMbUpwYm1Rb2RHaHBjeWxjYmlBZ0lDQjBhR2x6TG05dVYybHVaRzkzVW1WemFYcGxJRDBnZEdocGN5NXZibGRwYm1SdmQxSmxjMmw2WlM1aWFXNWtLSFJvYVhNcFhHNWNiaUFnSUNCMGFHbHpMbmRwYm1SdmQxZHBaSFJvSUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11ZDJsdVpHOTNTR1ZwWjJoMElEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdWQybHVaRzkzUTJWdWRHVnlXQ0E5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xrZ1BTQnVkV3hzWEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTllJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVkMmx1Wkc5M1VtRmthWFZ6V1NBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG5CdmNuUnlZV2wwSUQwZ1ptRnNjMlZjYmlBZ0lDQjBhR2x6TG1SbGMydDBiM0FnUFNBaGJtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDNXRZWFJqYUNndktHbFFhRzl1Wlh4cFVHOWtmR2xRWVdSOFFXNWtjbTlwWkh4Q2JHRmphMEpsY25KNWZFSkNNVEI4Ylc5aWFYeDBZV0pzWlhSOGIzQmxjbUVnYldsdWFYeHVaWGgxY3lBM0tTOXBLVnh1SUNBZ0lIUm9hWE11Ylc5MGFXOXVVM1Z3Y0c5eWRDQTlJQ0VoZDJsdVpHOTNMa1JsZG1salpVMXZkR2x2YmtWMlpXNTBJQ1ltSUNGMGFHbHpMbVJsYzJ0MGIzQmNiaUFnSUNCMGFHbHpMbTl5YVdWdWRHRjBhVzl1VTNWd2NHOXlkQ0E5SUNFaGQybHVaRzkzTGtSbGRtbGpaVTl5YVdWdWRHRjBhVzl1UlhabGJuUWdKaVlnSVhSb2FYTXVaR1Z6YTNSdmNGeHVJQ0FnSUhSb2FYTXViM0pwWlc1MFlYUnBiMjVUZEdGMGRYTWdQU0F3WEc0Z0lDQWdkR2hwY3k1dGIzUnBiMjVUZEdGMGRYTWdQU0F3WEc1Y2JpQWdJQ0IwYUdsekxtbHVhWFJwWVd4cGMyVW9LVnh1SUNCOVhHNWNiaUFnYVc1cGRHbGhiR2x6WlNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1MGNtRnVjMlp2Y20weVJGTjFjSEJ2Y25RZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NTBjbUZ1YzJadmNtMHlSRk4xY0hCdmNuUWdQU0JvWld4d1pYSnpMblJ5WVc1elptOXliVk4xY0hCdmNuUW9KekpFSnlsY2JpQWdJQ0FnSUhSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBJRDBnYUdWc2NHVnljeTUwY21GdWMyWnZjbTFUZFhCd2IzSjBLQ2N6UkNjcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1EyOXVabWxuZFhKbElFTnZiblJsZUhRZ1UzUjViR1Z6WEc0Z0lDQWdhV1lnS0hSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0JvWld4d1pYSnpMbUZqWTJWc1pYSmhkR1VvZEdocGN5NWxiR1Z0Wlc1MEtWeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQnpkSGxzWlNBOUlIZHBibVJ2ZHk1blpYUkRiMjF3ZFhSbFpGTjBlV3hsS0hSb2FYTXVaV3hsYldWdWRDbGNiaUFnSUNCcFppQW9jM1I1YkdVdVoyVjBVSEp2Y0dWeWRIbFdZV3gxWlNnbmNHOXphWFJwYjI0bktTQTlQVDBnSjNOMFlYUnBZeWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZHlaV3hoZEdsMlpTZGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlFiMmx1ZEdWeUlHVjJaVzUwYzF4dUlDQWdJR2xtS0NGMGFHbHpMbkJ2YVc1MFpYSkZkbVZ1ZEhNcElIdGNiaUFnSUNBZ0lIUm9hWE11Wld4bGJXVnVkQzV6ZEhsc1pTNXdiMmx1ZEdWeVJYWmxiblJ6SUQwZ0oyNXZibVVuWEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnVTJWMGRYQmNiaUFnSUNCMGFHbHpMblZ3WkdGMFpVeGhlV1Z5Y3lncFhHNGdJQ0FnZEdocGN5NTFjR1JoZEdWRWFXMWxibk5wYjI1ektDbGNiaUFnSUNCMGFHbHpMbVZ1WVdKc1pTZ3BYRzRnSUNBZ2RHaHBjeTV4ZFdWMVpVTmhiR2xpY21GMGFXOXVLSFJvYVhNdVkyRnNhV0p5WVhScGIyNUVaV3hoZVNsY2JpQWdmVnh1WEc0Z0lHUnZVbVZoWkhsRFlXeHNZbUZqYXlncElIdGNiaUFnSUNCcFppaDBhR2x6TG05dVVtVmhaSGtwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVTWldGa2VTZ3BYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbFRHRjVaWEp6S0NrZ2UxeHVJQ0FnSUdsbUtIUm9hWE11YzJWc1pXTjBiM0lwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR0Y1WlhKeklEMGdkR2hwY3k1bGJHVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvZEdocGN5NXpaV3hsWTNSdmNpbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NXNZWGxsY25NZ1BTQjBhR2x6TG1Wc1pXMWxiblF1WTJocGJHUnlaVzVjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaWdoZEdocGN5NXNZWGxsY25NdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNCamIyNXpiMnhsTG5kaGNtNG9KMUJoY21Gc2JHRjRTbE02SUZsdmRYSWdjMk5sYm1VZ1pHOWxjeUJ1YjNRZ2FHRjJaU0JoYm5rZ2JHRjVaWEp6TGljcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NWtaWEIwYUhOWUlEMGdXMTFjYmlBZ0lDQjBhR2x6TG1SbGNIUm9jMWtnUFNCYlhWeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FXNWtaWGdnUFNBd095QnBibVJsZUNBOElIUm9hWE11YkdGNVpYSnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh1SUNBZ0lDQWdiR1YwSUd4aGVXVnlJRDBnZEdocGN5NXNZWGxsY25OYmFXNWtaWGhkWEc1Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG5SeVlXNXpabTl5YlRORVUzVndjRzl5ZENrZ2UxeHVJQ0FnSUNBZ0lDQm9aV3h3WlhKekxtRmpZMlZzWlhKaGRHVW9iR0Y1WlhJcFhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHeGhlV1Z5TG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnYVc1a1pYZ2dQeUFuWVdKemIyeDFkR1VuSURvZ0ozSmxiR0YwYVhabEoxeHVJQ0FnSUNBZ2JHRjVaWEl1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2RpYkc5amF5ZGNiaUFnSUNBZ0lHeGhlV1Z5TG5OMGVXeGxMbXhsWm5RZ1BTQXdYRzRnSUNBZ0lDQnNZWGxsY2k1emRIbHNaUzUwYjNBZ1BTQXdYRzVjYmlBZ0lDQWdJR3hsZENCa1pYQjBhQ0E5SUdobGJIQmxjbk11WkdGMFlTaHNZWGxsY2l3Z0oyUmxjSFJvSnlrZ2ZId2dNRnh1SUNBZ0lDQWdkR2hwY3k1a1pYQjBhSE5ZTG5CMWMyZ29hR1ZzY0dWeWN5NWtZWFJoS0d4aGVXVnlMQ0FuWkdWd2RHZ3RlQ2NwSUh4OElHUmxjSFJvS1Z4dUlDQWdJQ0FnZEdocGN5NWtaWEIwYUhOWkxuQjFjMmdvYUdWc2NHVnljeTVrWVhSaEtHeGhlV1Z5TENBblpHVndkR2d0ZVNjcElIeDhJR1JsY0hSb0tWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIVndaR0YwWlVScGJXVnVjMmx2Ym5Nb0tTQjdYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZFhhV1IwYUNBOUlIZHBibVJ2ZHk1cGJtNWxjbGRwWkhSb1hHNGdJQ0FnZEdocGN5NTNhVzVrYjNkSVpXbG5hSFFnUFNCM2FXNWtiM2N1YVc1dVpYSklaV2xuYUhSY2JpQWdJQ0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGdnUFNCMGFHbHpMbmRwYm1SdmQxZHBaSFJvSUNvZ2RHaHBjeTV2Y21sbmFXNVlYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZERaVzUwWlhKWklEMGdkR2hwY3k1M2FXNWtiM2RJWldsbmFIUWdLaUIwYUdsekxtOXlhV2RwYmxsY2JpQWdJQ0IwYUdsekxuZHBibVJ2ZDFKaFpHbDFjMWdnUFNCTllYUm9MbTFoZUNoMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xnc0lIUm9hWE11ZDJsdVpHOTNWMmxrZEdnZ0xTQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ3BYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWklEMGdUV0YwYUM1dFlYZ29kR2hwY3k1M2FXNWtiM2REWlc1MFpYSlpMQ0IwYUdsekxuZHBibVJ2ZDBobGFXZG9kQ0F0SUhSb2FYTXVkMmx1Wkc5M1EyVnVkR1Z5V1NsY2JpQWdmVnh1WEc0Z0lIVndaR0YwWlVKdmRXNWtjeWdwSUh0Y2JpQWdJQ0IwYUdsekxtSnZkVzVrY3lBOUlIUm9hWE11YVc1d2RYUkZiR1Z0Wlc1MExtZGxkRUp2ZFc1a2FXNW5RMnhwWlc1MFVtVmpkQ2dwWEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZSUQwZ2RHaHBjeTVpYjNWdVpITXViR1ZtZEZ4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZCdmMybDBhVzl1V1NBOUlIUm9hWE11WW05MWJtUnpMblJ2Y0Z4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZkcFpIUm9JRDBnZEdocGN5NWliM1Z1WkhNdWQybGtkR2hjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUWdQU0IwYUdsekxtSnZkVzVrY3k1b1pXbG5hSFJjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJEWlc1MFpYSllJRDBnZEdocGN5NWxiR1Z0Wlc1MFYybGtkR2dnS2lCMGFHbHpMbTl5YVdkcGJsaGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkRaVzUwWlhKWklEMGdkR2hwY3k1bGJHVnRaVzUwU0dWcFoyaDBJQ29nZEdocGN5NXZjbWxuYVc1WlhHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFVtRnVaMlZZSUQwZ1RXRjBhQzV0WVhnb2RHaHBjeTVsYkdWdFpXNTBRMlZ1ZEdWeVdDd2dkR2hwY3k1bGJHVnRaVzUwVjJsa2RHZ2dMU0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpZS1Z4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEZKaGJtZGxXU0E5SUUxaGRHZ3ViV0Y0S0hSb2FYTXVaV3hsYldWdWRFTmxiblJsY2xrc0lIUm9hWE11Wld4bGJXVnVkRWhsYVdkb2RDQXRJSFJvYVhNdVpXeGxiV1Z1ZEVObGJuUmxjbGtwWEc0Z0lIMWNibHh1SUNCeGRXVjFaVU5oYkdsaWNtRjBhVzl1S0dSbGJHRjVLU0I3WEc0Z0lDQWdZMnhsWVhKVWFXMWxiM1YwS0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYVcxbGNpbGNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1VkdsdFpYSWdQU0J6WlhSVWFXMWxiM1YwS0hSb2FYTXViMjVEWVd4cFluSmhkR2x2YmxScGJXVnlMQ0JrWld4aGVTbGNiaUFnZlZ4dVhHNGdJR1Z1WVdKc1pTZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NWxibUZpYkdWa0tTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1bGJtRmliR1ZrSUQwZ2RISjFaVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0pwWlc1MFlYUnBiMjVUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnZjblJ5WVdsMElEMGdabUZzYzJWY2JpQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RrWlhacFkyVnZjbWxsYm5SaGRHbHZiaWNzSUhSb2FYTXViMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaWxjYmlBZ0lDQWdJSFJvYVhNdVpHVjBaV04wYVc5dVZHbHRaWElnUFNCelpYUlVhVzFsYjNWMEtIUm9hWE11YjI1UGNtbGxiblJoZEdsdmJsUnBiV1Z5TENCMGFHbHpMbk4xY0hCdmNuUkVaV3hoZVNsY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXViVzkwYVc5dVUzVndjRzl5ZENrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV3YjNKMGNtRnBkQ0E5SUdaaGJITmxYRzRnSUNBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblpHVjJhV05sYlc5MGFXOXVKeXdnZEdocGN5NXZia1JsZG1salpVMXZkR2x2YmlsY2JpQWdJQ0FnSUhSb2FYTXVaR1YwWldOMGFXOXVWR2x0WlhJZ1BTQnpaWFJVYVcxbGIzVjBLSFJvYVhNdWIyNU5iM1JwYjI1VWFXMWxjaXdnZEdocGN5NXpkWEJ3YjNKMFJHVnNZWGtwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1WUlEMGdNRnh1SUNBZ0lDQWdkR2hwY3k1allXeHBZbkpoZEdsdmJsa2dQU0F3WEc0Z0lDQWdJQ0IwYUdsekxuQnZjblJ5WVdsMElEMGdabUZzYzJWY2JpQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R0YjNWelpXMXZkbVVuTENCMGFHbHpMbTl1VFc5MWMyVk5iM1psS1Z4dUlDQWdJQ0FnZEdocGN5NWtiMUpsWVdSNVEyRnNiR0poWTJzb0tWeHVJQ0FnSUgxY2JseHVJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R5WlhOcGVtVW5MQ0IwYUdsekxtOXVWMmx1Wkc5M1VtVnphWHBsS1Z4dUlDQWdJSFJvYVhNdWNtRm1JRDBnY25GQmJrWnlLSFJvYVhNdWIyNUJibWx0WVhScGIyNUdjbUZ0WlNsY2JpQWdmVnh1WEc0Z0lHUnBjMkZpYkdVb0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtVnVZV0pzWldRcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG1WdVlXSnNaV1FnUFNCbVlXeHpaVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0pwWlc1MFlYUnBiMjVUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0IzYVc1a2IzY3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduWkdWMmFXTmxiM0pwWlc1MFlYUnBiMjRuTENCMGFHbHpMbTl1UkdWMmFXTmxUM0pwWlc1MFlYUnBiMjRwWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gwYUdsekxtMXZkR2x2YmxOMWNIQnZjblFwSUh0Y2JpQWdJQ0FnSUhkcGJtUnZkeTV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0Nka1pYWnBZMlZ0YjNScGIyNG5MQ0IwYUdsekxtOXVSR1YyYVdObFRXOTBhVzl1S1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjNhVzVrYjNjdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25iVzkxYzJWdGIzWmxKeXdnZEdocGN5NXZiazF2ZFhObFRXOTJaU2xjYmlBZ0lDQjlYRzVjYmlBZ0lDQjNhVzVrYjNjdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25jbVZ6YVhwbEp5d2dkR2hwY3k1dmJsZHBibVJ2ZDFKbGMybDZaU2xjYmlBZ0lDQnljVUZ1Um5JdVkyRnVZMlZzS0hSb2FYTXVjbUZtS1Z4dUlDQjlYRzVjYmlBZ1kyRnNhV0p5WVhSbEtIZ3NJSGtwSUh0Y2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMFpWZ2dQU0I0SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtTmhiR2xpY21GMFpWZ2dPaUI0WEc0Z0lDQWdkR2hwY3k1allXeHBZbkpoZEdWWklEMGdlU0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1allXeHBZbkpoZEdWWklEb2dlVnh1SUNCOVhHNWNiaUFnYVc1MlpYSjBLSGdzSUhrcElIdGNiaUFnSUNCMGFHbHpMbWx1ZG1WeWRGZ2dQU0I0SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtbHVkbVZ5ZEZnZ09pQjRYRzRnSUNBZ2RHaHBjeTVwYm5abGNuUlpJRDBnZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXBiblpsY25SWklEb2dlVnh1SUNCOVhHNWNiaUFnWm5KcFkzUnBiMjRvZUN3Z2VTa2dlMXh1SUNBZ0lIUm9hWE11Wm5KcFkzUnBiMjVZSUQwZ2VDQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTVtY21samRHbHZibGdnT2lCNFhHNGdJQ0FnZEdocGN5NW1jbWxqZEdsdmJsa2dQU0I1SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtWnlhV04wYVc5dVdTQTZJSGxjYmlBZ2ZWeHVYRzRnSUhOallXeGhjaWg0TENCNUtTQjdYRzRnSUNBZ2RHaHBjeTV6WTJGc1lYSllJRDBnZUNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXpZMkZzWVhKWUlEb2dlRnh1SUNBZ0lIUm9hWE11YzJOaGJHRnlXU0E5SUhrZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhSb2FYTXVjMk5oYkdGeVdTQTZJSGxjYmlBZ2ZWeHVYRzRnSUd4cGJXbDBLSGdzSUhrcElIdGNiaUFnSUNCMGFHbHpMbXhwYldsMFdDQTlJSGdnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JSFJvYVhNdWJHbHRhWFJZSURvZ2VGeHVJQ0FnSUhSb2FYTXViR2x0YVhSWklEMGdlU0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1c2FXMXBkRmtnT2lCNVhHNGdJSDFjYmx4dUlDQnZjbWxuYVc0b2VDd2dlU2tnZTF4dUlDQWdJSFJvYVhNdWIzSnBaMmx1V0NBOUlIZ2dQVDA5SUhWdVpHVm1hVzVsWkNBL0lIUm9hWE11YjNKcFoybHVXQ0E2SUhoY2JpQWdJQ0IwYUdsekxtOXlhV2RwYmxrZ1BTQjVJRDA5UFNCMWJtUmxabWx1WldRZ1B5QjBhR2x6TG05eWFXZHBibGtnT2lCNVhHNGdJSDFjYmx4dUlDQnpaWFJKYm5CMWRFVnNaVzFsYm5Rb1pXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUhSb2FYTXVhVzV3ZFhSRmJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZEZ4dUlDQWdJSFJvYVhNdWRYQmtZWFJsUkdsdFpXNXphVzl1Y3lncFhHNGdJSDFjYmx4dUlDQnpaWFJRYjNOcGRHbHZiaWhsYkdWdFpXNTBMQ0I0TENCNUtTQjdYRzRnSUNBZ2VDQTlJSGd1ZEc5R2FYaGxaQ2gwYUdsekxuQnlaV05wYzJsdmJpa2dLeUFuY0hnblhHNGdJQ0FnZVNBOUlIa3VkRzlHYVhobFpDaDBhR2x6TG5CeVpXTnBjMmx2YmlrZ0t5QW5jSGduWEc0Z0lDQWdhV1lnS0hSb2FYTXVkSEpoYm5ObWIzSnRNMFJUZFhCd2IzSjBLU0I3WEc0Z0lDQWdJQ0JvWld4d1pYSnpMbU56Y3lobGJHVnRaVzUwTENBbmRISmhibk5tYjNKdEp5d2dKM1J5WVc1emJHRjBaVE5rS0NjZ0t5QjRJQ3NnSnl3bklDc2dlU0FySUNjc01Da25LVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hwY3k1MGNtRnVjMlp2Y20weVJGTjFjSEJ2Y25RcElIdGNiaUFnSUNBZ0lHaGxiSEJsY25NdVkzTnpLR1ZzWlcxbGJuUXNJQ2QwY21GdWMyWnZjbTBuTENBbmRISmhibk5zWVhSbEtDY2dLeUI0SUNzZ0p5d25JQ3NnZVNBcklDY3BKeWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVzWldaMElEMGdlRnh1SUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1MGIzQWdQU0I1WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1UGNtbGxiblJoZEdsdmJsUnBiV1Z5S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG05eWFXVnVkR0YwYVc5dVUzVndjRzl5ZENBbUppQjBhR2x6TG05eWFXVnVkR0YwYVc5dVUzUmhkSFZ6SUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtUnBjMkZpYkdVb0tWeHVJQ0FnSUNBZ2RHaHBjeTV2Y21sbGJuUmhkR2x2YmxOMWNIQnZjblFnUFNCbVlXeHpaVnh1SUNBZ0lDQWdkR2hwY3k1bGJtRmliR1VvS1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6TG1SdlVtVmhaSGxEWVd4c1ltRmpheWdwWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1TmIzUnBiMjVVYVcxbGNpZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXRiM1JwYjI1VGRYQndiM0owSUNZbUlIUm9hWE11Ylc5MGFXOXVVM1JoZEhWeklEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVJwYzJGaWJHVW9LVnh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVUZFhCd2IzSjBJRDBnWm1Gc2MyVmNiaUFnSUNBZ0lIUm9hWE11Wlc1aFlteGxLQ2xjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVrYjFKbFlXUjVRMkZzYkdKaFkyc29LVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRzl1UTJGc2FXSnlZWFJwYjI1VWFXMWxjaWdwSUh0Y2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVSbXhoWnlBOUlIUnlkV1ZjYmlBZ2ZWeHVYRzRnSUc5dVYybHVaRzkzVW1WemFYcGxLQ2tnZTF4dUlDQWdJSFJvYVhNdWRYQmtZWFJsUkdsdFpXNXphVzl1Y3lncFhHNGdJSDFjYmx4dUlDQnZia0Z1YVcxaGRHbHZia1p5WVcxbEtDa2dlMXh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxRbTkxYm1SektDbGNiaUFnSUNCc1pYUWdZMkZzYVdKeVlYUmxaRWx1Y0hWMFdDQTlJSFJvYVhNdWFXNXdkWFJZSUMwZ2RHaHBjeTVqWVd4cFluSmhkR2x2Ymxnc1hHNGdJQ0FnSUNBZ0lHTmhiR2xpY21GMFpXUkpibkIxZEZrZ1BTQjBhR2x6TG1sdWNIVjBXU0F0SUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVaWEc0Z0lDQWdhV1lnS0NoTllYUm9MbUZpY3loallXeHBZbkpoZEdWa1NXNXdkWFJZS1NBK0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFISmxjMmh2YkdRcElIeDhJQ2hOWVhSb0xtRmljeWhqWVd4cFluSmhkR1ZrU1c1d2RYUlpLU0ErSUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYUhKbGMyaHZiR1FwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkYxWlhWbFEyRnNhV0p5WVhScGIyNG9NQ2xjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJvYVhNdWNHOXlkSEpoYVhRcElIdGNiaUFnSUNBZ0lIUm9hWE11Ylc5MGFXOXVXQ0E5SUhSb2FYTXVZMkZzYVdKeVlYUmxXQ0EvSUdOaGJHbGljbUYwWldSSmJuQjFkRmtnT2lCMGFHbHpMbWx1Y0hWMFdWeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVpJRDBnZEdocGN5NWpZV3hwWW5KaGRHVlpJRDhnWTJGc2FXSnlZWFJsWkVsdWNIVjBXQ0E2SUhSb2FYTXVhVzV3ZFhSWVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXOTBhVzl1V0NBOUlIUm9hWE11WTJGc2FXSnlZWFJsV0NBL0lHTmhiR2xpY21GMFpXUkpibkIxZEZnZ09pQjBhR2x6TG1sdWNIVjBXRnh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVaSUQwZ2RHaHBjeTVqWVd4cFluSmhkR1ZaSUQ4Z1kyRnNhV0p5WVhSbFpFbHVjSFYwV1NBNklIUm9hWE11YVc1d2RYUlpYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQXFQU0IwYUdsekxtVnNaVzFsYm5SWGFXUjBhQ0FxSUNoMGFHbHpMbk5qWVd4aGNsZ2dMeUF4TURBcFhHNGdJQ0FnZEdocGN5NXRiM1JwYjI1WklDbzlJSFJvYVhNdVpXeGxiV1Z1ZEVobGFXZG9kQ0FxSUNoMGFHbHpMbk5qWVd4aGNsa2dMeUF4TURBcFhHNGdJQ0FnYVdZZ0tDRnBjMDVoVGlod1lYSnpaVVpzYjJGMEtIUm9hWE11YkdsdGFYUllLU2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQTlJR2hsYkhCbGNuTXVZMnhoYlhBb2RHaHBjeTV0YjNScGIyNVlMQ0F0ZEdocGN5NXNhVzFwZEZnc0lIUm9hWE11YkdsdGFYUllLVnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9JV2x6VG1GT0tIQmhjbk5sUm14dllYUW9kR2hwY3k1c2FXMXBkRmtwS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVpJRDBnYUdWc2NHVnljeTVqYkdGdGNDaDBhR2x6TG0xdmRHbHZibGtzSUMxMGFHbHpMbXhwYldsMFdTd2dkR2hwY3k1c2FXMXBkRmtwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxZSUNzOUlDaDBhR2x6TG0xdmRHbHZibGdnTFNCMGFHbHpMblpsYkc5amFYUjVXQ2tnS2lCMGFHbHpMbVp5YVdOMGFXOXVXRnh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxaSUNzOUlDaDBhR2x6TG0xdmRHbHZibGtnTFNCMGFHbHpMblpsYkc5amFYUjVXU2tnS2lCMGFHbHpMbVp5YVdOMGFXOXVXVnh1SUNBZ0lHWnZjaUFvYkdWMElHbHVaR1Y0SUQwZ01Ec2dhVzVrWlhnZ1BDQjBhR2x6TG14aGVXVnljeTVzWlc1bmRHZzdJR2x1WkdWNEt5c3BJSHRjYmlBZ0lDQWdJR3hsZENCc1lYbGxjaUE5SUhSb2FYTXViR0Y1WlhKelcybHVaR1Y0WFN4Y2JpQWdJQ0FnSUNBZ0lDQmtaWEIwYUZnZ1BTQjBhR2x6TG1SbGNIUm9jMWhiYVc1a1pYaGRMRnh1SUNBZ0lDQWdJQ0FnSUdSbGNIUm9XU0E5SUhSb2FYTXVaR1Z3ZEdoeldWdHBibVJsZUYwc1hHNGdJQ0FnSUNBZ0lDQWdlRTltWm5ObGRDQTlJSFJvYVhNdWRtVnNiMk5wZEhsWUlDb2dLR1JsY0hSb1dDQXFJQ2gwYUdsekxtbHVkbVZ5ZEZnZ1B5QXRNU0E2SURFcEtTeGNiaUFnSUNBZ0lDQWdJQ0I1VDJabWMyVjBJRDBnZEdocGN5NTJaV3h2WTJsMGVWa2dLaUFvWkdWd2RHaFpJQ29nS0hSb2FYTXVhVzUyWlhKMFdTQS9JQzB4SURvZ01Ta3BYRzRnSUNBZ0lDQjBhR2x6TG5ObGRGQnZjMmwwYVc5dUtHeGhlV1Z5TENCNFQyWm1jMlYwTENCNVQyWm1jMlYwS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5KaFppQTlJSEp4UVc1R2NpaDBhR2x6TG05dVFXNXBiV0YwYVc5dVJuSmhiV1VwWEc0Z0lIMWNibHh1SUNCeWIzUmhkR1VvWW1WMFlTd2daMkZ0YldFcGUxeHVJQ0FnSUM4dklFVjRkSEpoWTNRZ1VtOTBZWFJwYjI1Y2JpQWdJQ0JzWlhRZ2VDQTlJQ2hpWlhSaElIeDhJREFwSUM4Z1RVRkhTVU5mVGxWTlFrVlNMQ0F2THlBZ0xUa3dJRG82SURrd1hHNGdJQ0FnSUNBZ0lIa2dQU0FvWjJGdGJXRWdmSHdnTUNrZ0x5Qk5RVWRKUTE5T1ZVMUNSVklnTHk4Z0xURTRNQ0E2T2lBeE9EQmNibHh1SUNBZ0lDOHZJRVJsZEdWamRDQlBjbWxsYm5SaGRHbHZiaUJEYUdGdVoyVmNiaUFnSUNCc1pYUWdjRzl5ZEhKaGFYUWdQU0IwYUdsekxuZHBibVJ2ZDBobGFXZG9kQ0ErSUhSb2FYTXVkMmx1Wkc5M1YybGtkR2hjYmlBZ0lDQnBaaUFvZEdocGN5NXdiM0owY21GcGRDQWhQVDBnY0c5eWRISmhhWFFwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjRzl5ZEhKaGFYUWdQU0J3YjNKMGNtRnBkRnh1SUNBZ0lDQWdkR2hwY3k1allXeHBZbkpoZEdsdmJrWnNZV2NnUFNCMGNuVmxYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdVkyRnNhV0p5WVhScGIyNUdiR0ZuS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1Um14aFp5QTlJR1poYkhObFhHNGdJQ0FnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1V0NBOUlIaGNiaUFnSUNBZ0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1WklEMGdlVnh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnZUZ4dUlDQWdJSFJvYVhNdWFXNXdkWFJaSUQwZ2VWeHVJQ0I5WEc1Y2JpQWdiMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaWhsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JpWlhSaElEMGdaWFpsYm5RdVltVjBZVnh1SUNBZ0lHeGxkQ0JuWVcxdFlTQTlJR1YyWlc1MExtZGhiVzFoWEc0Z0lDQWdhV1lnS0dKbGRHRWdJVDA5SUc1MWJHd2dKaVlnWjJGdGJXRWdJVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWIzSnBaVzUwWVhScGIyNVRkR0YwZFhNZ1BTQXhYRzRnSUNBZ0lDQjBhR2x6TG5KdmRHRjBaU2hpWlhSaExDQm5ZVzF0WVNsY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCdmJrUmxkbWxqWlUxdmRHbHZiaWhsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JpWlhSaElEMGdaWFpsYm5RdWNtOTBZWFJwYjI1U1lYUmxMbUpsZEdGY2JpQWdJQ0JzWlhRZ1oyRnRiV0VnUFNCbGRtVnVkQzV5YjNSaGRHbHZibEpoZEdVdVoyRnRiV0ZjYmlBZ0lDQnBaaUFvWW1WMFlTQWhQVDBnYm5Wc2JDQW1KaUJuWVcxdFlTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVUZEdGMGRYTWdQU0F4WEc0Z0lDQWdJQ0IwYUdsekxuSnZkR0YwWlNoaVpYUmhMQ0JuWVcxdFlTbGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnZiazF2ZFhObFRXOTJaU2hsZG1WdWRDa2dlMXh1SUNBZ0lHeGxkQ0JqYkdsbGJuUllJRDBnWlhabGJuUXVZMnhwWlc1MFdDeGNiaUFnSUNBZ0lDQWdZMnhwWlc1MFdTQTlJR1YyWlc1MExtTnNhV1Z1ZEZsY2JseHVJQ0FnSUM4dklISmxjMlYwSUdsdWNIVjBJSFJ2SUdObGJuUmxjaUJwWmlCb2IzWmxjazl1YkhrZ2FYTWdjMlYwSUdGdVpDQjNaU2R5WlNCdWIzUWdhRzkyWlhKcGJtY2dkR2hsSUdWc1pXMWxiblJjYmlBZ0lDQnBaaWgwYUdsekxtaHZkbVZ5VDI1c2VTQW1KbHh1SUNBZ0lDQWdLQ2hqYkdsbGJuUllJRHdnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WUlIeDhJR05zYVdWdWRGZ2dQaUIwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxnZ0t5QjBhR2x6TG1Wc1pXMWxiblJYYVdSMGFDa2dmSHhjYmlBZ0lDQWdJQ2hqYkdsbGJuUlpJRHdnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WklIeDhJR05zYVdWdWRGa2dQaUIwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxrZ0t5QjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUXBLU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFdDQTlJREJjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEZrZ1BTQXdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWNtVnNZWFJwZG1WSmJuQjFkQ2tnZTF4dUlDQWdJQ0FnTHk4Z1EyeHBjQ0J0YjNWelpTQmpiMjl5WkdsdVlYUmxjeUJwYm5OcFpHVWdaV3hsYldWdWRDQmliM1Z1WkhNdVhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1amJHbHdVbVZzWVhScGRtVkpibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQmpiR2xsYm5SWUlEMGdUV0YwYUM1dFlYZ29ZMnhwWlc1MFdDd2dkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZS1Z4dUlDQWdJQ0FnSUNCamJHbGxiblJZSUQwZ1RXRjBhQzV0YVc0b1kyeHBaVzUwV0N3Z2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVlJQ3NnZEdocGN5NWxiR1Z0Wlc1MFYybGtkR2dwWEc0Z0lDQWdJQ0FnSUdOc2FXVnVkRmtnUFNCTllYUm9MbTFoZUNoamJHbGxiblJaTENCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsa3BYRzRnSUNBZ0lDQWdJR05zYVdWdWRGa2dQU0JOWVhSb0xtMXBiaWhqYkdsbGJuUlpMQ0IwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxrZ0t5QjBhR2x6TG1Wc1pXMWxiblJJWldsbmFIUXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQXZMeUJEWVd4amRXeGhkR1VnYVc1d2RYUWdjbVZzWVhScGRtVWdkRzhnZEdobElHVnNaVzFsYm5RdVhHNGdJQ0FnSUNCcFppaDBhR2x6TG1Wc1pXMWxiblJTWVc1blpWZ2dKaVlnZEdocGN5NWxiR1Z0Wlc1MFVtRnVaMlZaS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnS0dOc2FXVnVkRmdnTFNCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsZ2dMU0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpZS1NBdklIUm9hWE11Wld4bGJXVnVkRkpoYm1kbFdGeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBXU0E5SUNoamJHbGxiblJaSUMwZ2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVpJQzBnZEdocGN5NWxiR1Z0Wlc1MFEyVnVkR1Z5V1NrZ0x5QjBhR2x6TG1Wc1pXMWxiblJTWVc1blpWbGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnTHk4Z1EyRnNZM1ZzWVhSbElHbHVjSFYwSUhKbGJHRjBhWFpsSUhSdklIUm9aU0IzYVc1a2IzY3VYRzRnSUNBZ0lDQnBaaWgwYUdsekxuZHBibVJ2ZDFKaFpHbDFjMWdnSmlZZ2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ0tHTnNhV1Z1ZEZnZ0xTQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ3BJQzhnZEdocGN5NTNhVzVrYjNkU1lXUnBkWE5ZWEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSWklEMGdLR05zYVdWdWRGa2dMU0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGtwSUM4Z2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWlhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1pHVnpkSEp2ZVNncElIdGNiaUFnSUNCMGFHbHpMbVJwYzJGaWJHVW9LVnh1WEc0Z0lDQWdZMnhsWVhKVWFXMWxiM1YwS0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYVcxbGNpbGNiaUFnSUNCamJHVmhjbFJwYldWdmRYUW9kR2hwY3k1a1pYUmxZM1JwYjI1VWFXMWxjaWxjYmx4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEM1eVpXMXZkbVZCZEhSeWFXSjFkR1VvSjNOMGVXeGxKeWxjYmlBZ0lDQm1iM0lnS0d4bGRDQnBibVJsZUNBOUlEQTdJR2x1WkdWNElEd2dkR2hwY3k1c1lYbGxjbk11YkdWdVozUm9PeUJwYm1SbGVDc3JLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5YzF0cGJtUmxlRjB1Y21WdGIzWmxRWFIwY21saWRYUmxLQ2R6ZEhsc1pTY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1pHVnNaWFJsSUhSb2FYTXVaV3hsYldWdWRGeHVJQ0FnSUdSbGJHVjBaU0IwYUdsekxteGhlV1Z5YzF4dUlDQjlYRzVjYmlBZ2RtVnljMmx2YmlncElIdGNiaUFnSUNCeVpYUjFjbTRnSnpNdU1TNHdKMXh1SUNCOVhHNWNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCUVlYSmhiR3hoZUZ4dUlsMTlcbiIsInZhciBleGVjdXRlU2NyaXB0cyA9IHJlcXVpcmUoXCIuL2xpYi9leGVjdXRlLXNjcmlwdHNcIik7XG52YXIgZm9yRWFjaEVscyA9IHJlcXVpcmUoXCIuL2xpYi9mb3JlYWNoLWVsc1wiKTtcbnZhciBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKFwiLi9saWIvcGFyc2Utb3B0aW9uc1wiKTtcbnZhciBzd2l0Y2hlcyA9IHJlcXVpcmUoXCIuL2xpYi9zd2l0Y2hlc1wiKTtcbnZhciBuZXdVaWQgPSByZXF1aXJlKFwiLi9saWIvdW5pcXVlaWRcIik7XG5cbnZhciBvbiA9IHJlcXVpcmUoXCIuL2xpYi9ldmVudHMvb25cIik7XG52YXIgdHJpZ2dlciA9IHJlcXVpcmUoXCIuL2xpYi9ldmVudHMvdHJpZ2dlclwiKTtcblxudmFyIGNsb25lID0gcmVxdWlyZShcIi4vbGliL3V0aWwvY2xvbmVcIik7XG52YXIgY29udGFpbnMgPSByZXF1aXJlKFwiLi9saWIvdXRpbC9jb250YWluc1wiKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKFwiLi9saWIvdXRpbC9leHRlbmRcIik7XG52YXIgbm9vcCA9IHJlcXVpcmUoXCIuL2xpYi91dGlsL25vb3BcIik7XG5cbnZhciBQamF4ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB0aGlzLnN0YXRlID0ge1xuICAgIG51bVBlbmRpbmdTd2l0Y2hlczogMCxcbiAgICBocmVmOiBudWxsLFxuICAgIG9wdGlvbnM6IG51bGxcbiAgfTtcblxuICB0aGlzLm9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucyk7XG4gIHRoaXMubG9nKFwiUGpheCBvcHRpb25zXCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5zY3JvbGxSZXN0b3JhdGlvbiAmJiBcInNjcm9sbFJlc3RvcmF0aW9uXCIgaW4gaGlzdG9yeSkge1xuICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiO1xuICB9XG5cbiAgdGhpcy5tYXhVaWQgPSB0aGlzLmxhc3RVaWQgPSBuZXdVaWQoKTtcblxuICB0aGlzLnBhcnNlRE9NKGRvY3VtZW50KTtcblxuICBvbihcbiAgICB3aW5kb3csXG4gICAgXCJwb3BzdGF0ZVwiLFxuICAgIGZ1bmN0aW9uKHN0KSB7XG4gICAgICBpZiAoc3Quc3RhdGUpIHtcbiAgICAgICAgdmFyIG9wdCA9IGNsb25lKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIG9wdC51cmwgPSBzdC5zdGF0ZS51cmw7XG4gICAgICAgIG9wdC50aXRsZSA9IHN0LnN0YXRlLnRpdGxlO1xuICAgICAgICAvLyBTaW5jZSBzdGF0ZSBhbHJlYWR5IGV4aXN0cywgcHJldmVudCBpdCBmcm9tIGJlaW5nIHB1c2hlZCBhZ2FpblxuICAgICAgICBvcHQuaGlzdG9yeSA9IGZhbHNlO1xuICAgICAgICBvcHQuc2Nyb2xsUG9zID0gc3Quc3RhdGUuc2Nyb2xsUG9zO1xuICAgICAgICBpZiAoc3Quc3RhdGUudWlkIDwgdGhpcy5sYXN0VWlkKSB7XG4gICAgICAgICAgb3B0LmJhY2t3YXJkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHQuZm9yd2FyZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0VWlkID0gc3Quc3RhdGUudWlkO1xuXG4gICAgICAgIC8vIEB0b2RvIGltcGxlbWVudCBoaXN0b3J5IGNhY2hlIGhlcmUsIGJhc2VkIG9uIHVpZFxuICAgICAgICB0aGlzLmxvYWRVcmwoc3Quc3RhdGUudXJsLCBvcHQpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcblxuUGpheC5zd2l0Y2hlcyA9IHN3aXRjaGVzO1xuXG5QamF4LnByb3RvdHlwZSA9IHtcbiAgbG9nOiByZXF1aXJlKFwiLi9saWIvcHJvdG8vbG9nXCIpLFxuXG4gIGdldEVsZW1lbnRzOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBlbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5lbGVtZW50cyk7XG4gIH0sXG5cbiAgcGFyc2VET006IGZ1bmN0aW9uKGVsKSB7XG4gICAgdmFyIHBhcnNlRWxlbWVudCA9IHJlcXVpcmUoXCIuL2xpYi9wcm90by9wYXJzZS1lbGVtZW50XCIpO1xuICAgIGZvckVhY2hFbHModGhpcy5nZXRFbGVtZW50cyhlbCksIHBhcnNlRWxlbWVudCwgdGhpcyk7XG4gIH0sXG5cbiAgcmVmcmVzaDogZnVuY3Rpb24oZWwpIHtcbiAgICB0aGlzLnBhcnNlRE9NKGVsIHx8IGRvY3VtZW50KTtcbiAgfSxcblxuICByZWxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSxcblxuICBhdHRhY2hMaW5rOiByZXF1aXJlKFwiLi9saWIvcHJvdG8vYXR0YWNoLWxpbmtcIiksXG5cbiAgYXR0YWNoRm9ybTogcmVxdWlyZShcIi4vbGliL3Byb3RvL2F0dGFjaC1mb3JtXCIpLFxuXG4gIGZvckVhY2hTZWxlY3RvcnM6IGZ1bmN0aW9uKGNiLCBjb250ZXh0LCBET01jb250ZXh0KSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL2xpYi9mb3JlYWNoLXNlbGVjdG9yc1wiKS5iaW5kKHRoaXMpKFxuICAgICAgdGhpcy5vcHRpb25zLnNlbGVjdG9ycyxcbiAgICAgIGNiLFxuICAgICAgY29udGV4dCxcbiAgICAgIERPTWNvbnRleHRcbiAgICApO1xuICB9LFxuXG4gIHN3aXRjaFNlbGVjdG9yczogZnVuY3Rpb24oc2VsZWN0b3JzLCBmcm9tRWwsIHRvRWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vbGliL3N3aXRjaGVzLXNlbGVjdG9yc1wiKS5iaW5kKHRoaXMpKFxuICAgICAgdGhpcy5vcHRpb25zLnN3aXRjaGVzLFxuICAgICAgdGhpcy5vcHRpb25zLnN3aXRjaGVzT3B0aW9ucyxcbiAgICAgIHNlbGVjdG9ycyxcbiAgICAgIGZyb21FbCxcbiAgICAgIHRvRWwsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgfSxcblxuICBsYXRlc3RDaGFuY2U6IGZ1bmN0aW9uKGhyZWYpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBocmVmO1xuICB9LFxuXG4gIG9uU3dpdGNoOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VyKHdpbmRvdywgXCJyZXNpemUgc2Nyb2xsXCIpO1xuXG4gICAgdGhpcy5zdGF0ZS5udW1QZW5kaW5nU3dpdGNoZXMtLTtcblxuICAgIC8vIGRlYm91bmNlIGNhbGxzLCBzbyB3ZSBvbmx5IHJ1biB0aGlzIG9uY2UgYWZ0ZXIgYWxsIHN3aXRjaGVzIGFyZSBmaW5pc2hlZC5cbiAgICBpZiAodGhpcy5zdGF0ZS5udW1QZW5kaW5nU3dpdGNoZXMgPT09IDApIHtcbiAgICAgIHRoaXMuYWZ0ZXJBbGxTd2l0Y2hlcygpO1xuICAgIH1cbiAgfSxcblxuICBsb2FkQ29udGVudDogZnVuY3Rpb24oaHRtbCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgaHRtbCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdHJpZ2dlcihkb2N1bWVudCwgXCJwamF4OmNvbXBsZXRlIHBqYXg6ZXJyb3JcIiwgb3B0aW9ucyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG1wRWwgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJwamF4XCIpO1xuXG4gICAgLy8gcGFyc2UgSFRNTCBhdHRyaWJ1dGVzIHRvIGNvcHkgdGhlbVxuICAgIC8vIHNpbmNlIHdlIGFyZSBmb3JjZWQgdG8gdXNlIGRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgKG91dGVySFRNTCBjYW4ndCBiZSB1c2VkIGZvciA8aHRtbD4pXG4gICAgdmFyIGh0bWxSZWdleCA9IC88aHRtbFtePl0rPi9naTtcbiAgICB2YXIgaHRtbEF0dHJpYnNSZWdleCA9IC9cXHM/W2EtejpdKyg/Oj1bJ1wiXVteJ1wiPl0rWydcIl0pKi9naTtcbiAgICB2YXIgbWF0Y2hlcyA9IGh0bWwubWF0Y2goaHRtbFJlZ2V4KTtcbiAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXNbMF0ubWF0Y2goaHRtbEF0dHJpYnNSZWdleCk7XG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgbWF0Y2hlcy5zaGlmdCgpO1xuICAgICAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24oaHRtbEF0dHJpYikge1xuICAgICAgICAgIHZhciBhdHRyID0gaHRtbEF0dHJpYi50cmltKCkuc3BsaXQoXCI9XCIpO1xuICAgICAgICAgIGlmIChhdHRyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdG1wRWwuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyWzBdLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG1wRWwuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyWzBdLCBhdHRyWzFdLnNsaWNlKDEsIC0xKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0bXBFbC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB0aGlzLmxvZyhcbiAgICAgIFwibG9hZCBjb250ZW50XCIsXG4gICAgICB0bXBFbC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlcyxcbiAgICAgIHRtcEVsLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwubGVuZ3RoXG4gICAgKTtcblxuICAgIC8vIENsZWFyIG91dCBhbnkgZm9jdXNlZCBjb250cm9scyBiZWZvcmUgaW5zZXJ0aW5nIG5ldyBwYWdlIGNvbnRlbnRzLlxuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgIGNvbnRhaW5zKGRvY3VtZW50LCB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxuICAgICkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hTZWxlY3RvcnModGhpcy5vcHRpb25zLnNlbGVjdG9ycywgdG1wRWwsIGRvY3VtZW50LCBvcHRpb25zKTtcbiAgfSxcblxuICBhYm9ydFJlcXVlc3Q6IHJlcXVpcmUoXCIuL2xpYi9hYm9ydC1yZXF1ZXN0XCIpLFxuXG4gIGRvUmVxdWVzdDogcmVxdWlyZShcIi4vbGliL3NlbmQtcmVxdWVzdFwiKSxcblxuICBoYW5kbGVSZXNwb25zZTogcmVxdWlyZShcIi4vbGliL3Byb3RvL2hhbmRsZS1yZXNwb25zZVwiKSxcblxuICBsb2FkVXJsOiBmdW5jdGlvbihocmVmLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9XG4gICAgICB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIlxuICAgICAgICA/IGV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgICA6IGNsb25lKHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLmxvZyhcImxvYWQgaHJlZlwiLCBocmVmLCBvcHRpb25zKTtcblxuICAgIC8vIEFib3J0IGFueSBwcmV2aW91cyByZXF1ZXN0XG4gICAgdGhpcy5hYm9ydFJlcXVlc3QodGhpcy5yZXF1ZXN0KTtcblxuICAgIHRyaWdnZXIoZG9jdW1lbnQsIFwicGpheDpzZW5kXCIsIG9wdGlvbnMpO1xuXG4gICAgLy8gRG8gdGhlIHJlcXVlc3RcbiAgICB0aGlzLnJlcXVlc3QgPSB0aGlzLmRvUmVxdWVzdChcbiAgICAgIGhyZWYsXG4gICAgICBvcHRpb25zLFxuICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSxcblxuICBhZnRlckFsbFN3aXRjaGVzOiBmdW5jdGlvbigpIHtcbiAgICAvLyBGRiBidWc6IFdvbuKAmXQgYXV0b2ZvY3VzIGZpZWxkcyB0aGF0IGFyZSBpbnNlcnRlZCB2aWEgSlMuXG4gICAgLy8gVGhpcyBiZWhhdmlvciBpcyBpbmNvcnJlY3QuIFNvIGlmIHRoZXJlcyBubyBjdXJyZW50IGZvY3VzLCBhdXRvZm9jdXNcbiAgICAvLyB0aGUgbGFzdCBmaWVsZC5cbiAgICAvL1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL2h0bWwvd2cvZHJhZnRzL2h0bWwvbWFzdGVyL2Zvcm1zLmh0bWxcbiAgICB2YXIgYXV0b2ZvY3VzRWwgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgIC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbYXV0b2ZvY3VzXVwiKSlcbiAgICAgIC5wb3AoKTtcbiAgICBpZiAoYXV0b2ZvY3VzRWwgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gYXV0b2ZvY3VzRWwpIHtcbiAgICAgIGF1dG9mb2N1c0VsLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gZXhlY3V0ZSBzY3JpcHRzIHdoZW4gRE9NIGhhdmUgYmVlbiBjb21wbGV0ZWx5IHVwZGF0ZWRcbiAgICB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgIGZvckVhY2hFbHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGV4ZWN1dGVTY3JpcHRzKGVsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChzdGF0ZS5vcHRpb25zLmhpc3RvcnkpIHtcbiAgICAgIGlmICghd2luZG93Lmhpc3Rvcnkuc3RhdGUpIHtcbiAgICAgICAgdGhpcy5sYXN0VWlkID0gdGhpcy5tYXhVaWQgPSBuZXdVaWQoKTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgICB1aWQ6IHRoaXMubWF4VWlkLFxuICAgICAgICAgICAgc2Nyb2xsUG9zOiBbMCwgMF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvY3VtZW50LnRpdGxlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBicm93c2VyIGhpc3RvcnlcbiAgICAgIHRoaXMubGFzdFVpZCA9IHRoaXMubWF4VWlkID0gbmV3VWlkKCk7XG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHVybDogc3RhdGUuaHJlZixcbiAgICAgICAgICB0aXRsZTogc3RhdGUub3B0aW9ucy50aXRsZSxcbiAgICAgICAgICB1aWQ6IHRoaXMubWF4VWlkLFxuICAgICAgICAgIHNjcm9sbFBvczogWzAsIDBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLm9wdGlvbnMudGl0bGUsXG4gICAgICAgIHN0YXRlLmhyZWZcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JFYWNoU2VsZWN0b3JzKGZ1bmN0aW9uKGVsKSB7XG4gICAgICB0aGlzLnBhcnNlRE9NKGVsKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIC8vIEZpcmUgRXZlbnRzXG4gICAgdHJpZ2dlcihkb2N1bWVudCwgXCJwamF4OmNvbXBsZXRlIHBqYXg6c3VjY2Vzc1wiLCBzdGF0ZS5vcHRpb25zKTtcblxuICAgIGlmICh0eXBlb2Ygc3RhdGUub3B0aW9ucy5hbmFseXRpY3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgc3RhdGUub3B0aW9ucy5hbmFseXRpY3MoKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUub3B0aW9ucy5oaXN0b3J5KSB7XG4gICAgICAvLyBGaXJzdCBwYXJzZSB1cmwgYW5kIGNoZWNrIGZvciBoYXNoIHRvIG92ZXJyaWRlIHNjcm9sbFxuICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGEuaHJlZiA9IHRoaXMuc3RhdGUuaHJlZjtcbiAgICAgIGlmIChhLmhhc2gpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBhLmhhc2guc2xpY2UoMSk7XG4gICAgICAgIG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobmFtZSk7XG5cbiAgICAgICAgdmFyIGN1cnRvcCA9IDA7XG4gICAgICAgIHZhciB0YXJnZXQgPVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKG5hbWUpWzBdO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84MTExMDk0L2Nyb3NzLWJyb3dzZXItamF2YXNjcmlwdC1mdW5jdGlvbi10by1maW5kLWFjdHVhbC1wb3NpdGlvbi1vZi1hbi1lbGVtZW50LWluLXBhZ2VcbiAgICAgICAgICBpZiAodGFyZ2V0Lm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBjdXJ0b3AgKz0gdGFyZ2V0Lm9mZnNldFRvcDtcblxuICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGN1cnRvcCk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLm9wdGlvbnMuc2Nyb2xsVG8gIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIFNjcm9sbCBwYWdlIHRvIHRvcCBvbiBuZXcgcGFnZSBsb2FkXG4gICAgICAgIGlmIChzdGF0ZS5vcHRpb25zLnNjcm9sbFRvLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oc3RhdGUub3B0aW9ucy5zY3JvbGxUb1swXSwgc3RhdGUub3B0aW9ucy5zY3JvbGxUb1sxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHN0YXRlLm9wdGlvbnMuc2Nyb2xsVG8pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5vcHRpb25zLnNjcm9sbFJlc3RvcmF0aW9uICYmIHN0YXRlLm9wdGlvbnMuc2Nyb2xsUG9zKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oc3RhdGUub3B0aW9ucy5zY3JvbGxQb3NbMF0sIHN0YXRlLm9wdGlvbnMuc2Nyb2xsUG9zWzFdKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbnVtUGVuZGluZ1N3aXRjaGVzOiAwLFxuICAgICAgaHJlZjogbnVsbCxcbiAgICAgIG9wdGlvbnM6IG51bGxcbiAgICB9O1xuICB9XG59O1xuXG5QamF4LmlzU3VwcG9ydGVkID0gcmVxdWlyZShcIi4vbGliL2lzLXN1cHBvcnRlZFwiKTtcblxuLy8gYXJndWFibHkgY291bGQgZG8gYGlmKCByZXF1aXJlKFwiLi9saWIvaXMtc3VwcG9ydGVkXCIpKCkpIHtgIGJ1dCB0aGF0IG1pZ2h0IGJlIGEgbGl0dGxlIHRvIHNpbXBsZVxuaWYgKFBqYXguaXNTdXBwb3J0ZWQoKSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IFBqYXg7XG59XG4vLyBpZiB0aGVyZSBpc27igJl0IHJlcXVpcmVkIGJyb3dzZXIgZnVuY3Rpb25zLCByZXR1cm5pbmcgc3R1cGlkIGFwaVxuZWxzZSB7XG4gIHZhciBzdHVwaWRQamF4ID0gbm9vcDtcbiAgZm9yICh2YXIga2V5IGluIFBqYXgucHJvdG90eXBlKSB7XG4gICAgaWYgKFxuICAgICAgUGpheC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgdHlwZW9mIFBqYXgucHJvdG90eXBlW2tleV0gPT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgc3R1cGlkUGpheFtrZXldID0gbm9vcDtcbiAgICB9XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IHN0dXBpZFBqYXg7XG59XG4iLCJ2YXIgbm9vcCA9IHJlcXVpcmUoXCIuL3V0aWwvbm9vcFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QucmVhZHlTdGF0ZSA8IDQpIHtcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG5vb3A7XG4gICAgcmVxdWVzdC5hYm9ydCgpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICB2YXIgY29kZSA9IGVsLnRleHQgfHwgZWwudGV4dENvbnRlbnQgfHwgZWwuaW5uZXJIVE1MIHx8IFwiXCI7XG4gIHZhciBzcmMgPSBlbC5zcmMgfHwgXCJcIjtcbiAgdmFyIHBhcmVudCA9XG4gICAgZWwucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG4gIGlmIChjb2RlLm1hdGNoKFwiZG9jdW1lbnQud3JpdGVcIikpIHtcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmxvZykge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiU2NyaXB0IGNvbnRhaW5zIGRvY3VtZW50LndyaXRlLiBDYW7igJl0IGJlIGV4ZWN1dGVkIGNvcnJlY3RseS4gQ29kZSBza2lwcGVkIFwiLFxuICAgICAgICBlbFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICBzY3JpcHQuaWQgPSBlbC5pZDtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHNyYyAhPT0gXCJcIikge1xuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgc2NyaXB0LmFzeW5jID0gZmFsc2U7IC8vIGZvcmNlIHN5bmNocm9ub3VzIGxvYWRpbmcgb2YgcGVyaXBoZXJhbCBKU1xuICB9XG5cbiAgaWYgKGNvZGUgIT09IFwiXCIpIHtcbiAgICB0cnkge1xuICAgICAgc2NyaXB0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvZGUpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgLy8gb2xkIElFcyBoYXZlIGZ1bmt5IHNjcmlwdCBub2Rlc1xuICAgICAgc2NyaXB0LnRleHQgPSBjb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4ZWN1dGVcbiAgcGFyZW50LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIC8vIGF2b2lkIHBvbGx1dGlvbiBvbmx5IGluIGhlYWQgb3IgYm9keSB0YWdzXG4gIGlmIChcbiAgICAocGFyZW50IGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mIEhUTUxCb2R5RWxlbWVudCkgJiZcbiAgICBwYXJlbnQuY29udGFpbnMoc2NyaXB0KVxuICApIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsInZhciBmb3JFYWNoRWxzID0gcmVxdWlyZShcIi4uL2ZvcmVhY2gtZWxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVscywgZXZlbnRzLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBldmVudHMgPSB0eXBlb2YgZXZlbnRzID09PSBcInN0cmluZ1wiID8gZXZlbnRzLnNwbGl0KFwiIFwiKSA6IGV2ZW50cztcblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgZm9yRWFjaEVscyhlbHMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwidmFyIGZvckVhY2hFbHMgPSByZXF1aXJlKFwiLi4vZm9yZWFjaC1lbHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWxzLCBldmVudHMsIG9wdHMpIHtcbiAgZXZlbnRzID0gdHlwZW9mIGV2ZW50cyA9PT0gXCJzdHJpbmdcIiA/IGV2ZW50cy5zcGxpdChcIiBcIikgOiBldmVudHM7XG5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgIHZhciBldmVudDtcbiAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcbiAgICBldmVudC5pbml0RXZlbnQoZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZXZlbnQuZXZlbnROYW1lID0gZTtcbiAgICBpZiAob3B0cykge1xuICAgICAgT2JqZWN0LmtleXMob3B0cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgZXZlbnRba2V5XSA9IG9wdHNba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvckVhY2hFbHMoZWxzLCBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIGRvbUZpeCA9IGZhbHNlO1xuICAgICAgaWYgKCFlbC5wYXJlbnROb2RlICYmIGVsICE9PSBkb2N1bWVudCAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgICAgIC8vIFRIQU5LIFlPVSBJRSAoOS8xMC8xMSlcbiAgICAgICAgLy8gZGlzcGF0Y2hFdmVudCBkb2Vzbid0IHdvcmsgaWYgdGhlIGVsZW1lbnQgaXMgbm90IGluIHRoZSBET01cbiAgICAgICAgZG9tRml4ID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICB9XG4gICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIGlmIChkb21GaXgpIHtcbiAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsInZhciBmb3JFYWNoRWxzID0gcmVxdWlyZShcIi4vZm9yZWFjaC1lbHNcIik7XG52YXIgZXZhbFNjcmlwdCA9IHJlcXVpcmUoXCIuL2V2YWwtc2NyaXB0XCIpO1xuLy8gRmluZHMgYW5kIGV4ZWN1dGVzIHNjcmlwdHMgKHVzZWQgZm9yIG5ld2x5IGFkZGVkIGVsZW1lbnRzKVxuLy8gTmVlZGVkIHNpbmNlIGlubmVySFRNTCBkb2VzIG5vdCBydW4gc2NyaXB0c1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNjcmlwdFwiKSB7XG4gICAgZXZhbFNjcmlwdChlbCk7XG4gIH1cblxuICBmb3JFYWNoRWxzKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzY3JpcHRcIiksIGZ1bmN0aW9uKHNjcmlwdCkge1xuICAgIGlmICghc2NyaXB0LnR5cGUgfHwgc2NyaXB0LnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0L2phdmFzY3JpcHRcIikge1xuICAgICAgaWYgKHNjcmlwdC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICB9XG4gICAgICBldmFsU2NyaXB0KHNjcmlwdCk7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvKiBnbG9iYWwgSFRNTENvbGxlY3Rpb246IHRydWUgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbHMsIGZuLCBjb250ZXh0KSB7XG4gIGlmIChcbiAgICBlbHMgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fFxuICAgIGVscyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8XG4gICAgZWxzIGluc3RhbmNlb2YgQXJyYXlcbiAgKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxzLCBmbiwgY29udGV4dCk7XG4gIH1cbiAgLy8gYXNzdW1lIHNpbXBsZSBET00gZWxlbWVudFxuICByZXR1cm4gZm4uY2FsbChjb250ZXh0LCBlbHMpO1xufTtcbiIsInZhciBmb3JFYWNoRWxzID0gcmVxdWlyZShcIi4vZm9yZWFjaC1lbHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VsZWN0b3JzLCBjYiwgY29udGV4dCwgRE9NY29udGV4dCkge1xuICBET01jb250ZXh0ID0gRE9NY29udGV4dCB8fCBkb2N1bWVudDtcbiAgc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICBmb3JFYWNoRWxzKERPTWNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIGNiLCBjb250ZXh0KTtcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gQm9ycm93ZWQgd2hvbGVzYWxlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2RlZnVua3QvanF1ZXJ5LXBqYXhcbiAgcmV0dXJuIChcbiAgICB3aW5kb3cuaGlzdG9yeSAmJlxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAmJlxuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJlxuICAgIC8vIHB1c2hTdGF0ZSBpc27igJl0IHJlbGlhYmxlIG9uIGlPUyB1bnRpbCA1LlxuICAgICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFxuICAgICAgLygoaVBvZHxpUGhvbmV8aVBhZCkuK1xcYk9TXFxzK1sxLTRdXFxEfFdlYkFwcHNcXC8uK0NGTmV0d29yaykvXG4gICAgKVxuICApO1xufTtcbiIsIi8qIGdsb2JhbCBfZ2FxOiB0cnVlLCBnYTogdHJ1ZSAqL1xuXG52YXIgZGVmYXVsdFN3aXRjaGVzID0gcmVxdWlyZShcIi4vc3dpdGNoZXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5lbGVtZW50cyA9IG9wdGlvbnMuZWxlbWVudHMgfHwgXCJhW2hyZWZdLCBmb3JtW2FjdGlvbl1cIjtcbiAgb3B0aW9ucy5zZWxlY3RvcnMgPSBvcHRpb25zLnNlbGVjdG9ycyB8fCBbXCJ0aXRsZVwiLCBcIi5qcy1QamF4XCJdO1xuICBvcHRpb25zLnN3aXRjaGVzID0gb3B0aW9ucy5zd2l0Y2hlcyB8fCB7fTtcbiAgb3B0aW9ucy5zd2l0Y2hlc09wdGlvbnMgPSBvcHRpb25zLnN3aXRjaGVzT3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5oaXN0b3J5ID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5oaXN0b3J5ID09PSBcInVuZGVmaW5lZFwiID8gdHJ1ZSA6IG9wdGlvbnMuaGlzdG9yeTtcbiAgb3B0aW9ucy5hbmFseXRpY3MgPVxuICAgIHR5cGVvZiBvcHRpb25zLmFuYWx5dGljcyA9PT0gXCJmdW5jdGlvblwiIHx8IG9wdGlvbnMuYW5hbHl0aWNzID09PSBmYWxzZVxuICAgICAgPyBvcHRpb25zLmFuYWx5dGljc1xuICAgICAgOiBkZWZhdWx0QW5hbHl0aWNzO1xuICBvcHRpb25zLnNjcm9sbFRvID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5zY3JvbGxUbyA9PT0gXCJ1bmRlZmluZWRcIiA/IDAgOiBvcHRpb25zLnNjcm9sbFRvO1xuICBvcHRpb25zLnNjcm9sbFJlc3RvcmF0aW9uID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5zY3JvbGxSZXN0b3JhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgPyBvcHRpb25zLnNjcm9sbFJlc3RvcmF0aW9uXG4gICAgICA6IHRydWU7XG4gIG9wdGlvbnMuY2FjaGVCdXN0ID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5jYWNoZUJ1c3QgPT09IFwidW5kZWZpbmVkXCIgPyB0cnVlIDogb3B0aW9ucy5jYWNoZUJ1c3Q7XG4gIG9wdGlvbnMuZGVidWcgPSBvcHRpb25zLmRlYnVnIHx8IGZhbHNlO1xuICBvcHRpb25zLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcbiAgb3B0aW9ucy5jdXJyZW50VXJsRnVsbFJlbG9hZCA9XG4gICAgdHlwZW9mIG9wdGlvbnMuY3VycmVudFVybEZ1bGxSZWxvYWQgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gZmFsc2VcbiAgICAgIDogb3B0aW9ucy5jdXJyZW50VXJsRnVsbFJlbG9hZDtcblxuICAvLyBXZSBjYW7igJl0IHJlcGxhY2UgYm9keS5vdXRlckhUTUwgb3IgaGVhZC5vdXRlckhUTUwuXG4gIC8vIEl0IGNyZWF0ZXMgYSBidWcgd2hlcmUgYSBuZXcgYm9keSBvciBoZWFkIGFyZSBjcmVhdGVkIGluIHRoZSBET00uXG4gIC8vIElmIHlvdSBzZXQgaGVhZC5vdXRlckhUTUwsIGEgbmV3IGJvZHkgdGFnIGlzIGFwcGVuZGVkLCBzbyB0aGUgRE9NIGhhcyAyIGJvZHkgbm9kZXMsIGFuZCB2aWNlIHZlcnNhXG4gIGlmICghb3B0aW9ucy5zd2l0Y2hlcy5oZWFkKSB7XG4gICAgb3B0aW9ucy5zd2l0Y2hlcy5oZWFkID0gZGVmYXVsdFN3aXRjaGVzLnN3aXRjaEVsZW1lbnRzQWx0O1xuICB9XG4gIGlmICghb3B0aW9ucy5zd2l0Y2hlcy5ib2R5KSB7XG4gICAgb3B0aW9ucy5zd2l0Y2hlcy5ib2R5ID0gZGVmYXVsdFN3aXRjaGVzLnN3aXRjaEVsZW1lbnRzQWx0O1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gZGVmYXVsdEFuYWx5dGljcygpIHtcbiAgaWYgKHdpbmRvdy5fZ2FxKSB7XG4gICAgX2dhcS5wdXNoKFtcIl90cmFja1BhZ2V2aWV3XCJdKTtcbiAgfVxuICBpZiAod2luZG93LmdhKSB7XG4gICAgZ2EoXCJzZW5kXCIsIFwicGFnZXZpZXdcIiwgeyBwYWdlOiBsb2NhdGlvbi5wYXRobmFtZSwgdGl0bGU6IGRvY3VtZW50LnRpdGxlIH0pO1xuICB9XG59XG4iLCJ2YXIgb24gPSByZXF1aXJlKFwiLi4vZXZlbnRzL29uXCIpO1xudmFyIGNsb25lID0gcmVxdWlyZShcIi4uL3V0aWwvY2xvbmVcIik7XG5cbnZhciBhdHRyU3RhdGUgPSBcImRhdGEtcGpheC1zdGF0ZVwiO1xuXG52YXIgZm9ybUFjdGlvbiA9IGZ1bmN0aW9uKGVsLCBldmVudCkge1xuICBpZiAoaXNEZWZhdWx0UHJldmVudGVkKGV2ZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFNpbmNlIGxvYWRVcmwgbW9kaWZpZXMgb3B0aW9ucyBhbmQgd2UgbWF5IGFkZCBvdXIgb3duIG1vZGlmaWNhdGlvbnMgYmVsb3csXG4gIC8vIGNsb25lIGl0IHNvIHRoZSBjaGFuZ2VzIGRvbid0IHBlcnNpc3RcbiAgdmFyIG9wdGlvbnMgPSBjbG9uZSh0aGlzLm9wdGlvbnMpO1xuXG4gIC8vIEluaXRpYWxpemUgcmVxdWVzdE9wdGlvbnNcbiAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICByZXF1ZXN0VXJsOiBlbC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgcmVxdWVzdE1ldGhvZDogZWwuZ2V0QXR0cmlidXRlKFwibWV0aG9kXCIpIHx8IFwiR0VUXCJcbiAgfTtcblxuICAvLyBjcmVhdGUgYSB0ZXN0YWJsZSB2aXJ0dWFsIGxpbmsgb2YgdGhlIGZvcm0gYWN0aW9uXG4gIHZhciB2aXJ0TGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgdmlydExpbmtFbGVtZW50LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0VXJsKTtcblxuICB2YXIgYXR0clZhbHVlID0gY2hlY2tJZlNob3VsZEFib3J0KHZpcnRMaW5rRWxlbWVudCwgb3B0aW9ucyk7XG4gIGlmIChhdHRyVmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0clN0YXRlLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKGVsLmVuY3R5cGUgPT09IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiKSB7XG4gICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlbCk7XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0UGFyYW1zID0gcGFyc2VGb3JtRWxlbWVudHMoZWwpO1xuICB9XG5cbiAgZWwuc2V0QXR0cmlidXRlKGF0dHJTdGF0ZSwgXCJzdWJtaXRcIik7XG5cbiAgb3B0aW9ucy50cmlnZ2VyRWxlbWVudCA9IGVsO1xuICB0aGlzLmxvYWRVcmwodmlydExpbmtFbGVtZW50LmhyZWYsIG9wdGlvbnMpO1xufTtcblxuZnVuY3Rpb24gcGFyc2VGb3JtRWxlbWVudHMoZWwpIHtcbiAgdmFyIHJlcXVlc3RQYXJhbXMgPSBbXTtcbiAgdmFyIGZvcm1FbGVtZW50cyA9IGVsLmVsZW1lbnRzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBmb3JtRWxlbWVudHNbaV07XG4gICAgdmFyIHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBqc2NzOmRpc2FibGUgZGlzYWxsb3dJbXBsaWNpdFR5cGVDb252ZXJzaW9uXG4gICAgaWYgKFxuICAgICAgISFlbGVtZW50Lm5hbWUgJiZcbiAgICAgIGVsZW1lbnQuYXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0YWdOYW1lICE9PSBcImJ1dHRvblwiXG4gICAgKSB7XG4gICAgICAvLyBqc2NzOmVuYWJsZSBkaXNhbGxvd0ltcGxpY2l0VHlwZUNvbnZlcnNpb25cbiAgICAgIHZhciB0eXBlID0gZWxlbWVudC5hdHRyaWJ1dGVzLnR5cGU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXR5cGUgfHxcbiAgICAgICAgKHR5cGUudmFsdWUgIT09IFwiY2hlY2tib3hcIiAmJiB0eXBlLnZhbHVlICE9PSBcInJhZGlvXCIpIHx8XG4gICAgICAgIGVsZW1lbnQuY2hlY2tlZFxuICAgICAgKSB7XG4gICAgICAgIC8vIEJ1aWxkIGFycmF5IG9mIHZhbHVlcyB0byBzdWJtaXRcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGlmICh0YWdOYW1lID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgdmFyIG9wdDtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZWxlbWVudC5vcHRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBvcHQgPSBlbGVtZW50Lm9wdGlvbnNbal07XG4gICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkICYmICFvcHQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdmFsdWVzLnB1c2gob3B0Lmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpID8gb3B0LnZhbHVlIDogb3B0LnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdmFsdWVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgcmVxdWVzdFBhcmFtcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGVuY29kZVVSSUNvbXBvbmVudChlbGVtZW50Lm5hbWUpLFxuICAgICAgICAgICAgdmFsdWU6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZXNba10pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdFBhcmFtcztcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlNob3VsZEFib3J0KHZpcnRMaW5rRWxlbWVudCwgb3B0aW9ucykge1xuICAvLyBJZ25vcmUgZXh0ZXJuYWwgbGlua3MuXG4gIGlmIChcbiAgICB2aXJ0TGlua0VsZW1lbnQucHJvdG9jb2wgIT09IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCB8fFxuICAgIHZpcnRMaW5rRWxlbWVudC5ob3N0ICE9PSB3aW5kb3cubG9jYXRpb24uaG9zdFxuICApIHtcbiAgICByZXR1cm4gXCJleHRlcm5hbFwiO1xuICB9XG5cbiAgLy8gSWdub3JlIGNsaWNrIGlmIHdlIGFyZSBvbiBhbiBhbmNob3Igb24gdGhlIHNhbWUgcGFnZVxuICBpZiAoXG4gICAgdmlydExpbmtFbGVtZW50Lmhhc2ggJiZcbiAgICB2aXJ0TGlua0VsZW1lbnQuaHJlZi5yZXBsYWNlKHZpcnRMaW5rRWxlbWVudC5oYXNoLCBcIlwiKSA9PT1cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UobG9jYXRpb24uaGFzaCwgXCJcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwiYW5jaG9yXCI7XG4gIH1cblxuICAvLyBJZ25vcmUgZW1wdHkgYW5jaG9yIFwiZm9vLmh0bWwjXCJcbiAgaWYgKHZpcnRMaW5rRWxlbWVudC5ocmVmID09PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF0gKyBcIiNcIikge1xuICAgIHJldHVybiBcImFuY2hvci1lbXB0eVwiO1xuICB9XG5cbiAgLy8gaWYgZGVjbGFyZWQgYXMgYSBmdWxsIHJlbG9hZCwganVzdCBub3JtYWxseSBzdWJtaXQgdGhlIGZvcm1cbiAgaWYgKFxuICAgIG9wdGlvbnMuY3VycmVudFVybEZ1bGxSZWxvYWQgJiZcbiAgICB2aXJ0TGlua0VsZW1lbnQuaHJlZiA9PT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdXG4gICkge1xuICAgIHJldHVybiBcInJlbG9hZFwiO1xuICB9XG59XG5cbnZhciBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBmdW5jdGlvbihldmVudCkge1xuICByZXR1cm4gZXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCBldmVudC5yZXR1cm5WYWx1ZSA9PT0gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBlbC5zZXRBdHRyaWJ1dGUoYXR0clN0YXRlLCBcIlwiKTtcblxuICBvbihlbCwgXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBmb3JtQWN0aW9uLmNhbGwodGhhdCwgZWwsIGV2ZW50KTtcbiAgfSk7XG59O1xuIiwidmFyIG9uID0gcmVxdWlyZShcIi4uL2V2ZW50cy9vblwiKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoXCIuLi91dGlsL2Nsb25lXCIpO1xuXG52YXIgYXR0clN0YXRlID0gXCJkYXRhLXBqYXgtc3RhdGVcIjtcblxudmFyIGxpbmtBY3Rpb24gPSBmdW5jdGlvbihlbCwgZXZlbnQpIHtcbiAgaWYgKGlzRGVmYXVsdFByZXZlbnRlZChldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTaW5jZSBsb2FkVXJsIG1vZGlmaWVzIG9wdGlvbnMgYW5kIHdlIG1heSBhZGQgb3VyIG93biBtb2RpZmljYXRpb25zIGJlbG93LFxuICAvLyBjbG9uZSBpdCBzbyB0aGUgY2hhbmdlcyBkb24ndCBwZXJzaXN0XG4gIHZhciBvcHRpb25zID0gY2xvbmUodGhpcy5vcHRpb25zKTtcblxuICB2YXIgYXR0clZhbHVlID0gY2hlY2tJZlNob3VsZEFib3J0KGVsLCBldmVudCk7XG4gIGlmIChhdHRyVmFsdWUpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0clN0YXRlLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gZG9u4oCZdCBkbyBcIm5vdGhpbmdcIiBpZiB1c2VyIHRyeSB0byByZWxvYWQgdGhlIHBhZ2UgYnkgY2xpY2tpbmcgdGhlIHNhbWUgbGluayB0d2ljZVxuICBpZiAoXG4gICAgdGhpcy5vcHRpb25zLmN1cnJlbnRVcmxGdWxsUmVsb2FkICYmXG4gICAgZWwuaHJlZiA9PT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdXG4gICkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyU3RhdGUsIFwicmVsb2FkXCIpO1xuICAgIHRoaXMucmVsb2FkKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWwuc2V0QXR0cmlidXRlKGF0dHJTdGF0ZSwgXCJsb2FkXCIpO1xuXG4gIG9wdGlvbnMudHJpZ2dlckVsZW1lbnQgPSBlbDtcbiAgdGhpcy5sb2FkVXJsKGVsLmhyZWYsIG9wdGlvbnMpO1xufTtcblxuZnVuY3Rpb24gY2hlY2tJZlNob3VsZEFib3J0KGVsLCBldmVudCkge1xuICAvLyBEb27igJl0IGJyZWFrIGJyb3dzZXIgc3BlY2lhbCBiZWhhdmlvciBvbiBsaW5rcyAobGlrZSBwYWdlIGluIG5ldyB3aW5kb3cpXG4gIGlmIChcbiAgICBldmVudC53aGljaCA+IDEgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5XG4gICkge1xuICAgIHJldHVybiBcIm1vZGlmaWVyXCI7XG4gIH1cblxuICAvLyB3ZSBkbyB0ZXN0IG9uIGhyZWYgbm93IHRvIHByZXZlbnQgdW5leHBlY3RlZCBiZWhhdmlvciBpZiBmb3Igc29tZSByZWFzb25cbiAgLy8gdXNlciBoYXZlIGhyZWYgdGhhdCBjYW4gYmUgZHluYW1pY2FsbHkgdXBkYXRlZFxuXG4gIC8vIElnbm9yZSBleHRlcm5hbCBsaW5rcy5cbiAgaWYgKFxuICAgIGVsLnByb3RvY29sICE9PSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgfHxcbiAgICBlbC5ob3N0ICE9PSB3aW5kb3cubG9jYXRpb24uaG9zdFxuICApIHtcbiAgICByZXR1cm4gXCJleHRlcm5hbFwiO1xuICB9XG5cbiAgLy8gSWdub3JlIGFuY2hvcnMgb24gdGhlIHNhbWUgcGFnZSAoa2VlcCBuYXRpdmUgYmVoYXZpb3IpXG4gIGlmIChcbiAgICBlbC5oYXNoICYmXG4gICAgZWwuaHJlZi5yZXBsYWNlKGVsLmhhc2gsIFwiXCIpID09PVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShsb2NhdGlvbi5oYXNoLCBcIlwiKVxuICApIHtcbiAgICByZXR1cm4gXCJhbmNob3JcIjtcbiAgfVxuXG4gIC8vIElnbm9yZSBlbXB0eSBhbmNob3IgXCJmb28uaHRtbCNcIlxuICBpZiAoZWwuaHJlZiA9PT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdICsgXCIjXCIpIHtcbiAgICByZXR1cm4gXCJhbmNob3ItZW1wdHlcIjtcbiAgfVxufVxuXG52YXIgaXNEZWZhdWx0UHJldmVudGVkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgZXZlbnQucmV0dXJuVmFsdWUgPT09IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZWwuc2V0QXR0cmlidXRlKGF0dHJTdGF0ZSwgXCJcIik7XG5cbiAgb24oZWwsIFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsaW5rQWN0aW9uLmNhbGwodGhhdCwgZWwsIGV2ZW50KTtcbiAgfSk7XG5cbiAgb24oXG4gICAgZWwsXG4gICAgXCJrZXl1cFwiLFxuICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgbGlua0FjdGlvbi5jYWxsKHRoYXQsIGVsLCBldmVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG59O1xuIiwidmFyIGNsb25lID0gcmVxdWlyZShcIi4uL3V0aWwvY2xvbmVcIik7XG52YXIgbmV3VWlkID0gcmVxdWlyZShcIi4uL3VuaXF1ZWlkXCIpO1xudmFyIHRyaWdnZXIgPSByZXF1aXJlKFwiLi4vZXZlbnRzL3RyaWdnZXJcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVzcG9uc2VUZXh0LCByZXF1ZXN0LCBocmVmLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBjbG9uZShvcHRpb25zIHx8IHRoaXMub3B0aW9ucyk7XG4gIG9wdGlvbnMucmVxdWVzdCA9IHJlcXVlc3Q7XG5cbiAgLy8gRmFpbCBpZiB1bmFibGUgdG8gbG9hZCBIVE1MIHZpYSBBSkFYXG4gIGlmIChyZXNwb25zZVRleHQgPT09IGZhbHNlKSB7XG4gICAgdHJpZ2dlcihkb2N1bWVudCwgXCJwamF4OmNvbXBsZXRlIHBqYXg6ZXJyb3JcIiwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBwdXNoIHNjcm9sbCBwb3NpdGlvbiB0byBoaXN0b3J5XG4gIHZhciBjdXJyZW50U3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKFxuICAgIHtcbiAgICAgIHVybDogY3VycmVudFN0YXRlLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgIHRpdGxlOiBjdXJyZW50U3RhdGUudGl0bGUgfHwgZG9jdW1lbnQudGl0bGUsXG4gICAgICB1aWQ6IGN1cnJlbnRTdGF0ZS51aWQgfHwgbmV3VWlkKCksXG4gICAgICBzY3JvbGxQb3M6IFtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICBdXG4gICAgfSxcbiAgICBkb2N1bWVudC50aXRsZSxcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZlxuICApO1xuXG4gIC8vIENoZWNrIGZvciByZWRpcmVjdHNcbiAgdmFyIG9sZEhyZWYgPSBocmVmO1xuICBpZiAocmVxdWVzdC5yZXNwb25zZVVSTCkge1xuICAgIGlmIChocmVmICE9PSByZXF1ZXN0LnJlc3BvbnNlVVJMKSB7XG4gICAgICBocmVmID0gcmVxdWVzdC5yZXNwb25zZVVSTDtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5nZXRSZXNwb25zZUhlYWRlcihcIlgtUEpBWC1VUkxcIikpIHtcbiAgICBocmVmID0gcmVxdWVzdC5nZXRSZXNwb25zZUhlYWRlcihcIlgtUEpBWC1VUkxcIik7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5nZXRSZXNwb25zZUhlYWRlcihcIlgtWEhSLVJlZGlyZWN0ZWQtVG9cIikpIHtcbiAgICBocmVmID0gcmVxdWVzdC5nZXRSZXNwb25zZUhlYWRlcihcIlgtWEhSLVJlZGlyZWN0ZWQtVG9cIik7XG4gIH1cblxuICAvLyBBZGQgYmFjayB0aGUgaGFzaCBpZiBpdCB3YXMgcmVtb3ZlZFxuICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhLmhyZWYgPSBvbGRIcmVmO1xuICB2YXIgb2xkSGFzaCA9IGEuaGFzaDtcbiAgYS5ocmVmID0gaHJlZjtcbiAgaWYgKG9sZEhhc2ggJiYgIWEuaGFzaCkge1xuICAgIGEuaGFzaCA9IG9sZEhhc2g7XG4gICAgaHJlZiA9IGEuaHJlZjtcbiAgfVxuXG4gIHRoaXMuc3RhdGUuaHJlZiA9IGhyZWY7XG4gIHRoaXMuc3RhdGUub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgdHJ5IHtcbiAgICB0aGlzLmxvYWRDb250ZW50KHJlc3BvbnNlVGV4dCwgb3B0aW9ucyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cmlnZ2VyKGRvY3VtZW50LCBcInBqYXg6ZXJyb3JcIiwgb3B0aW9ucyk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiUGpheCBzd2l0Y2ggZmFpbDogXCIsIGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubGF0ZXN0Q2hhbmNlKGhyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZSkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgLy8gSUUgaXMgd2VpcmRcbiAgICBlbHNlIGlmIChjb25zb2xlLmxvZykge1xuICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn07XG4iLCJ2YXIgYXR0clN0YXRlID0gXCJkYXRhLXBqYXgtc3RhdGVcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICBzd2l0Y2ggKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJhXCI6XG4gICAgICAvLyBvbmx5IGF0dGFjaCBsaW5rIGlmIGVsIGRvZXMgbm90IGFscmVhZHkgaGF2ZSBsaW5rIGF0dGFjaGVkXG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZShhdHRyU3RhdGUpKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoTGluayhlbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJmb3JtXCI6XG4gICAgICAvLyBvbmx5IGF0dGFjaCBsaW5rIGlmIGVsIGRvZXMgbm90IGFscmVhZHkgaGF2ZSBsaW5rIGF0dGFjaGVkXG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZShhdHRyU3RhdGUpKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoRm9ybShlbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBcIlBqYXggY2FuIG9ubHkgYmUgYXBwbGllZCBvbiA8YT4gb3IgPGZvcm0+IHN1Ym1pdFwiO1xuICB9XG59O1xuIiwidmFyIHVwZGF0ZVF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbC91cGRhdGUtcXVlcnktc3RyaW5nXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxvY2F0aW9uLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHF1ZXJ5U3RyaW5nO1xuICB2YXIgcmVxdWVzdE9wdGlvbnMgPSBvcHRpb25zLnJlcXVlc3RPcHRpb25zIHx8IHt9O1xuICB2YXIgcmVxdWVzdE1ldGhvZCA9IChyZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0TWV0aG9kIHx8IFwiR0VUXCIpLnRvVXBwZXJDYXNlKCk7XG4gIHZhciByZXF1ZXN0UGFyYW1zID0gcmVxdWVzdE9wdGlvbnMucmVxdWVzdFBhcmFtcyB8fCBudWxsO1xuICB2YXIgZm9ybURhdGEgPSByZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSB8fCBudWxsO1xuICB2YXIgcmVxdWVzdFBheWxvYWQgPSBudWxsO1xuICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xuXG4gIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY2FsbGJhY2socmVxdWVzdC5yZXNwb25zZVRleHQsIHJlcXVlc3QsIGxvY2F0aW9uLCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDApIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVxdWVzdCwgbG9jYXRpb24sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVxdWVzdCwgbG9jYXRpb24sIG9wdGlvbnMpO1xuICB9O1xuXG4gIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVxdWVzdCwgbG9jYXRpb24sIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8vIFByZXBhcmUgdGhlIHJlcXVlc3QgcGF5bG9hZCBmb3IgZm9ybXMsIGlmIGF2YWlsYWJsZVxuICBpZiAocmVxdWVzdFBhcmFtcyAmJiByZXF1ZXN0UGFyYW1zLmxlbmd0aCkge1xuICAgIC8vIEJ1aWxkIHF1ZXJ5IHN0cmluZ1xuICAgIHF1ZXJ5U3RyaW5nID0gcmVxdWVzdFBhcmFtc1xuICAgICAgLm1hcChmdW5jdGlvbihwYXJhbSkge1xuICAgICAgICByZXR1cm4gcGFyYW0ubmFtZSArIFwiPVwiICsgcGFyYW0udmFsdWU7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCImXCIpO1xuXG4gICAgc3dpdGNoIChyZXF1ZXN0TWV0aG9kKSB7XG4gICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgIC8vIFJlc2V0IHF1ZXJ5IHN0cmluZyB0byBhdm9pZCBhbiBpc3N1ZSB3aXRoIHJlcGVhdCBzdWJtaXNzaW9ucyB3aGVyZSBjaGVja2JveGVzIHRoYXQgd2VyZVxuICAgICAgICAvLyBwcmV2aW91c2x5IGNoZWNrZWQgYXJlIGluY29ycmVjdGx5IHByZXNlcnZlZFxuICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLnNwbGl0KFwiP1wiKVswXTtcblxuICAgICAgICAvLyBBcHBlbmQgbmV3IHF1ZXJ5IHN0cmluZ1xuICAgICAgICBsb2NhdGlvbiArPSBcIj9cIiArIHF1ZXJ5U3RyaW5nO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgICAgLy8gU2VuZCBxdWVyeSBzdHJpbmcgYXMgcmVxdWVzdCBwYXlsb2FkXG4gICAgICAgIHJlcXVlc3RQYXlsb2FkID0gcXVlcnlTdHJpbmc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIGlmIChmb3JtRGF0YSkge1xuICAgIHJlcXVlc3RQYXlsb2FkID0gZm9ybURhdGE7XG4gIH1cblxuICAvLyBBZGQgYSB0aW1lc3RhbXAgYXMgcGFydCBvZiB0aGUgcXVlcnkgc3RyaW5nIGlmIGNhY2hlIGJ1c3RpbmcgaXMgZW5hYmxlZFxuICBpZiAob3B0aW9ucy5jYWNoZUJ1c3QpIHtcbiAgICBsb2NhdGlvbiA9IHVwZGF0ZVF1ZXJ5U3RyaW5nKGxvY2F0aW9uLCBcInRcIiwgRGF0ZS5ub3coKSk7XG4gIH1cblxuICByZXF1ZXN0Lm9wZW4ocmVxdWVzdE1ldGhvZCwgbG9jYXRpb24sIHRydWUpO1xuICByZXF1ZXN0LnRpbWVvdXQgPSB0aW1lb3V0O1xuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XG4gIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIlgtUEpBWFwiLCBcInRydWVcIik7XG4gIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcbiAgICBcIlgtUEpBWC1TZWxlY3RvcnNcIixcbiAgICBKU09OLnN0cmluZ2lmeShvcHRpb25zLnNlbGVjdG9ycylcbiAgKTtcblxuICAvLyBTZW5kIHRoZSBwcm9wZXIgaGVhZGVyIGluZm9ybWF0aW9uIGZvciBQT1NUIGZvcm1zXG4gIGlmIChyZXF1ZXN0UGF5bG9hZCAmJiByZXF1ZXN0TWV0aG9kID09PSBcIlBPU1RcIiAmJiAhZm9ybURhdGEpIHtcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiLFxuICAgICAgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0LnNlbmQocmVxdWVzdFBheWxvYWQpO1xuXG4gIHJldHVybiByZXF1ZXN0O1xufTtcbiIsInZhciBmb3JFYWNoRWxzID0gcmVxdWlyZShcIi4vZm9yZWFjaC1lbHNcIik7XG5cbnZhciBkZWZhdWx0U3dpdGNoZXMgPSByZXF1aXJlKFwiLi9zd2l0Y2hlc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihcbiAgc3dpdGNoZXMsXG4gIHN3aXRjaGVzT3B0aW9ucyxcbiAgc2VsZWN0b3JzLFxuICBmcm9tRWwsXG4gIHRvRWwsXG4gIG9wdGlvbnNcbikge1xuICB2YXIgc3dpdGNoZXNRdWV1ZSA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5ld0VscyA9IGZyb21FbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB2YXIgb2xkRWxzID0gdG9FbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgIHRoaXMubG9nKFwiUGpheCBzd2l0Y2hcIiwgc2VsZWN0b3IsIG5ld0Vscywgb2xkRWxzKTtcbiAgICB9XG4gICAgaWYgKG5ld0Vscy5sZW5ndGggIT09IG9sZEVscy5sZW5ndGgpIHtcbiAgICAgIHRocm93IFwiRE9NIGRvZXNu4oCZdCBsb29rIHRoZSBzYW1lIG9uIG5ldyBsb2FkZWQgcGFnZTog4oCZXCIgK1xuICAgICAgICBzZWxlY3RvciArXG4gICAgICAgIFwi4oCZIC0gbmV3IFwiICtcbiAgICAgICAgbmV3RWxzLmxlbmd0aCArXG4gICAgICAgIFwiLCBvbGQgXCIgK1xuICAgICAgICBvbGRFbHMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvckVhY2hFbHMoXG4gICAgICBuZXdFbHMsXG4gICAgICBmdW5jdGlvbihuZXdFbCwgaSkge1xuICAgICAgICB2YXIgb2xkRWwgPSBvbGRFbHNbaV07XG4gICAgICAgIGlmICh0aGlzLmxvZykge1xuICAgICAgICAgIHRoaXMubG9nKFwibmV3RWxcIiwgbmV3RWwsIFwib2xkRWxcIiwgb2xkRWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gc3dpdGNoZXNbc2VsZWN0b3JdXG4gICAgICAgICAgPyBzd2l0Y2hlc1tzZWxlY3Rvcl0uYmluZChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgb2xkRWwsXG4gICAgICAgICAgICAgIG5ld0VsLFxuICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICBzd2l0Y2hlc09wdGlvbnNbc2VsZWN0b3JdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBkZWZhdWx0U3dpdGNoZXMub3V0ZXJIVE1MLmJpbmQodGhpcywgb2xkRWwsIG5ld0VsLCBvcHRpb25zKTtcblxuICAgICAgICBzd2l0Y2hlc1F1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9LCB0aGlzKTtcblxuICB0aGlzLnN0YXRlLm51bVBlbmRpbmdTd2l0Y2hlcyA9IHN3aXRjaGVzUXVldWUubGVuZ3RoO1xuXG4gIHN3aXRjaGVzUXVldWUuZm9yRWFjaChmdW5jdGlvbihxdWV1ZWRTd2l0Y2gpIHtcbiAgICBxdWV1ZWRTd2l0Y2goKTtcbiAgfSk7XG59O1xuIiwidmFyIG9uID0gcmVxdWlyZShcIi4vZXZlbnRzL29uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb3V0ZXJIVE1MOiBmdW5jdGlvbihvbGRFbCwgbmV3RWwpIHtcbiAgICBvbGRFbC5vdXRlckhUTUwgPSBuZXdFbC5vdXRlckhUTUw7XG4gICAgdGhpcy5vblN3aXRjaCgpO1xuICB9LFxuXG4gIGlubmVySFRNTDogZnVuY3Rpb24ob2xkRWwsIG5ld0VsKSB7XG4gICAgb2xkRWwuaW5uZXJIVE1MID0gbmV3RWwuaW5uZXJIVE1MO1xuXG4gICAgaWYgKG5ld0VsLmNsYXNzTmFtZSA9PT0gXCJcIikge1xuICAgICAgb2xkRWwucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZEVsLmNsYXNzTmFtZSA9IG5ld0VsLmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLm9uU3dpdGNoKCk7XG4gIH0sXG5cbiAgc3dpdGNoRWxlbWVudHNBbHQ6IGZ1bmN0aW9uKG9sZEVsLCBuZXdFbCkge1xuICAgIG9sZEVsLmlubmVySFRNTCA9IG5ld0VsLmlubmVySFRNTDtcblxuICAgIC8vIENvcHkgYXR0cmlidXRlcyBmcm9tIHRoZSBuZXcgZWxlbWVudCB0byB0aGUgb2xkIG9uZVxuICAgIGlmIChuZXdFbC5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgIHZhciBhdHRycyA9IG5ld0VsLmF0dHJpYnV0ZXM7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9sZEVsLmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtKGF0dHJzW2ldLmNsb25lTm9kZSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9uU3dpdGNoKCk7XG4gIH0sXG5cbiAgLy8gRXF1aXZhbGVudCB0byBvdXRlckhUTUwoKSwgYnV0IGRvZXNuJ3QgcmVxdWlyZSBzd2l0Y2hFbGVtZW50c0FsdCgpIGZvciA8aGVhZD4gYW5kIDxib2R5PlxuICByZXBsYWNlTm9kZTogZnVuY3Rpb24ob2xkRWwsIG5ld0VsKSB7XG4gICAgb2xkRWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RWwsIG9sZEVsKTtcbiAgICB0aGlzLm9uU3dpdGNoKCk7XG4gIH0sXG5cbiAgc2lkZUJ5U2lkZTogZnVuY3Rpb24ob2xkRWwsIG5ld0VsLCBvcHRpb25zLCBzd2l0Y2hPcHRpb25zKSB7XG4gICAgdmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbiAgICB2YXIgZWxzVG9SZW1vdmUgPSBbXTtcbiAgICB2YXIgZWxzVG9BZGQgPSBbXTtcbiAgICB2YXIgZnJhZ1RvQXBwZW5kID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIHZhciBhbmltYXRpb25FdmVudE5hbWVzID1cbiAgICAgIFwiYW5pbWF0aW9uZW5kIHdlYmtpdEFuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kXCI7XG4gICAgdmFyIGFuaW1hdGVkRWxzTnVtYmVyID0gMDtcbiAgICB2YXIgc2V4eUFuaW1hdGlvbkVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIC8vIGVuZCB0cmlnZ2VyZWQgYnkgYW4gYW5pbWF0aW9uIG9uIGEgY2hpbGRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhbmltYXRlZEVsc051bWJlci0tO1xuICAgICAgaWYgKGFuaW1hdGVkRWxzTnVtYmVyIDw9IDAgJiYgZWxzVG9SZW1vdmUpIHtcbiAgICAgICAgZWxzVG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIC8vIGJyb3dzaW5nIHF1aWNrbHkgY2FuIG1ha2UgdGhlIGVsXG4gICAgICAgICAgLy8gYWxyZWFkeSByZW1vdmVkIGJ5IGxhc3QgcGFnZSB1cGRhdGUgP1xuICAgICAgICAgIGlmIChlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsc1RvQWRkLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShcbiAgICAgICAgICAgIGVsLmdldEF0dHJpYnV0ZShcImRhdGEtcGpheC1jbGFzc2VzXCIpLFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsc1RvQWRkID0gbnVsbDsgLy8gZnJlZSBtZW1vcnlcbiAgICAgICAgZWxzVG9SZW1vdmUgPSBudWxsOyAvLyBmcmVlIG1lbW9yeVxuXG4gICAgICAgIC8vIHRoaXMgaXMgdG8gdHJpZ2dlciBzb21lIHJlcGFpbnQgKGV4YW1wbGU6IHBpY3R1cmVmaWxsKVxuICAgICAgICB0aGlzLm9uU3dpdGNoKCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgc3dpdGNoT3B0aW9ucyA9IHN3aXRjaE9wdGlvbnMgfHwge307XG5cbiAgICBmb3JFYWNoLmNhbGwob2xkRWwuY2hpbGROb2RlcywgZnVuY3Rpb24oZWwpIHtcbiAgICAgIGVsc1RvUmVtb3ZlLnB1c2goZWwpO1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtUGpheC1yZW1vdmVcIikpIHtcbiAgICAgICAgLy8gZm9yIGZhc3Qgc3dpdGNoLCBjbGVhbiBlbGVtZW50IHRoYXQganVzdCBoYXZlIGJlZW4gYWRkZWQsICYgbm90IGNsZWFuZWQgeWV0LlxuICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIikpIHtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShcbiAgICAgICAgICAgIGVsLmdldEF0dHJpYnV0ZShcImRhdGEtcGpheC1jbGFzc2VzXCIpLFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImpzLVBqYXgtcmVtb3ZlXCIpO1xuICAgICAgICBpZiAoc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MgJiYgc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MucmVtb3ZlRWxlbWVudCkge1xuICAgICAgICAgIHN3aXRjaE9wdGlvbnMuY2FsbGJhY2tzLnJlbW92ZUVsZW1lbnQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMpIHtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgKz1cbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcy5yZW1vdmUgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKG9wdGlvbnMuYmFja3dhcmRcbiAgICAgICAgICAgICAgPyBzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMuYmFja3dhcmRcbiAgICAgICAgICAgICAgOiBzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMuZm9yd2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgYW5pbWF0ZWRFbHNOdW1iZXIrKztcbiAgICAgICAgb24oZWwsIGFuaW1hdGlvbkV2ZW50TmFtZXMsIHNleHlBbmltYXRpb25FbmQsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9yRWFjaC5jYWxsKG5ld0VsLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIHZhciBhZGRDbGFzc2VzID0gXCJcIjtcbiAgICAgICAgaWYgKHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcykge1xuICAgICAgICAgIGFkZENsYXNzZXMgPVxuICAgICAgICAgICAgXCIganMtUGpheC1hZGQgXCIgK1xuICAgICAgICAgICAgc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLmFkZCArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAob3B0aW9ucy5iYWNrd2FyZFxuICAgICAgICAgICAgICA/IHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcy5mb3J3YXJkXG4gICAgICAgICAgICAgIDogc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLmJhY2t3YXJkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MgJiYgc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MuYWRkRWxlbWVudCkge1xuICAgICAgICAgIHN3aXRjaE9wdGlvbnMuY2FsbGJhY2tzLmFkZEVsZW1lbnQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsLmNsYXNzTmFtZSArPSBhZGRDbGFzc2VzO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBqYXgtY2xhc3Nlc1wiLCBhZGRDbGFzc2VzKTtcbiAgICAgICAgZWxzVG9BZGQucHVzaChlbCk7XG4gICAgICAgIGZyYWdUb0FwcGVuZC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGFuaW1hdGVkRWxzTnVtYmVyKys7XG4gICAgICAgIG9uKGVsLCBhbmltYXRpb25FdmVudE5hbWVzLCBzZXh5QW5pbWF0aW9uRW5kLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHBhc3MgYWxsIGNsYXNzTmFtZSBvZiB0aGUgcGFyZW50XG4gICAgb2xkRWwuY2xhc3NOYW1lID0gbmV3RWwuY2xhc3NOYW1lO1xuICAgIG9sZEVsLmFwcGVuZENoaWxkKGZyYWdUb0FwcGVuZCk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGNvdW50ZXIgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkID0gXCJwamF4XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIFwiX1wiICsgY291bnRlcjtcbiAgICBjb3VudGVyKys7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAobnVsbCA9PT0gb2JqIHx8IFwib2JqZWN0XCIgIT09IHR5cGVvZiBvYmopIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIHZhciBjb3B5ID0gb2JqLmNvbnN0cnVjdG9yKCk7XG4gIGZvciAodmFyIGF0dHIgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgY29weVthdHRyXSA9IG9ialthdHRyXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvcHk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb250YWlucyhkb2MsIHNlbGVjdG9ycywgZWwpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2VsZWN0ZWRFbHMgPSBkb2MucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnNbaV0pO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0ZWRFbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChzZWxlY3RlZEVsc1tqXS5jb250YWlucyhlbCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIC8vIEF2b2lkIGJ1Z3Mgd2hlbiBoYXNPd25Qcm9wZXJ0eSBpcyBzaGFkb3dlZFxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRvW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmksIGtleSwgdmFsdWUpIHtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIihbPyZdKVwiICsga2V5ICsgXCI9Lio/KCZ8JClcIiwgXCJpXCIpO1xuICB2YXIgc2VwYXJhdG9yID0gdXJpLmluZGV4T2YoXCI/XCIpICE9PSAtMSA/IFwiJlwiIDogXCI/XCI7XG4gIGlmICh1cmkubWF0Y2gocmUpKSB7XG4gICAgcmV0dXJuIHVyaS5yZXBsYWNlKHJlLCBcIiQxXCIgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgXCIkMlwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdXJpICsgc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcbiAgfVxufTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vY3NzL2J1bmRsZS5jc3NcIjsiLCIvKipcbiAqIENvcHlyaWdodCAyMDE5IE1hc2hpcm9cbiAqIEBkZXNjcmlwdGlvbiBtYXRlcmlhbC1jb21wb25lbnRzIGluaXRpYWwgY29uZmlndXJhdGlvblxuICogQGF1dGhvciBNYXNoaXJvXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG5pbXBvcnQgeyBNRENSaXBwbGUgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlJztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQnO1xuaW1wb3J0IHsgTURDVG9wQXBwQmFyIH0gZnJvbSAnQG1hdGVyaWFsL3RvcC1hcHAtYmFyJztcblxuY29uc3QgQ29uZiA9IFtcbiAgICBbJy5tZGMtdG9wLWFwcC1iYXInLCBNRENUb3BBcHBCYXJdLFxuICAgIFsnLm1kYy10ZXh0LWZpZWxkJywgTURDVGV4dEZpZWxkXSxcbiAgICBbXG4gICAgICAgIFtcbiAgICAgICAgICAgICcubWRjLWJ1dHRvbicsXG4gICAgICAgICAgICAnLnByaW1hcnktYWN0aW9uJyxcbiAgICAgICAgXSxcbiAgICAgICAgTURDUmlwcGxlXG4gICAgXSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTkgTWFzaGlyb1xuICogQGRlc2NyaXB0aW9uIG1hdGVyaWFsLWNvbXBvbmVudHMgaW5pdGlhbCBoYW5kbGVyXG4gKiBAYXV0aG9yIE1hc2hpcm9cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgbWRjQ29uZiBmcm9tIFwiLi9tZGNDb25mXCJcblxuY29uc3QgQ29uZiA9IG1kY0NvbmZcblxuLyoqIFxuICogSW5pdGlhbCBbbWF0ZXJpYWwtY29tcG9uZW50cy13ZWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViLykgXG4gKiB0aHJvdWdoIGNvbmZpZ3VyYXRpb24gaW4gYG1kY0NvbmYudHNgYC5cbiAqIFNlZSA8aHR0cHM6Ly9naXQuaW8vSmVnSEo+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IFtdXG4gICAgZm9yIChjb25zdCBpIG9mIENvbmYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoaVswXSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGlbMF1cbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gaVsxXVxuICAgICAgICAgICAgY29tcG9uZW50cy5tYXAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbXBvbmVudCksIGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoaVswXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGlbMF0uam9pbignLCcpXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IGlbMV1cbiAgICAgICAgICAgIGNvbXBvbmVudHMubWFwLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb21wb25lbnQpLCBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcihlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDE5IE1hc2hpcm9cbiAqIEBkZXNjcmlwdGlvbiBNYWluXG4gKiBAYXV0aG9yIE1hc2hpcm9cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbmltcG9ydCBjb3ZlckltZ0luaSBmcm9tIFwiLi9tb2R1bGVzL2NvdmVySW1nSW5pdFwiXG5pbXBvcnQgaGVhZGVyQmFyU2Nyb2xsSGFuZGxlciBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlckJhclNjcm9sbEhhbmRsZXJcIlxuaW1wb3J0IG1kY0luaXQgZnJvbSBcIi4vY29tcG9uZW50cy9tZGNJbml0XCJcbmltcG9ydCBQamF4IGZyb20gXCJwamF4XCJcbmltcG9ydCBnZXRIZXhGaWx0ZXIgZnJvbSBcIi4vbW9kdWxlcy9oZXhGaWx0ZXJcIlxuaW1wb3J0IHJnYjJoZXggZnJvbSBcIi4vbW9kdWxlcy9yZ2IyaGV4XCJcblxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICBoZWFkZXJCYXJTY3JvbGxIYW5kbGVyKClcbn1cblxuLy8gVE9ETzogZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbi8vIFRPRE86IHRyYW5zcGFyZW50IGJlZm9yZSBjYWxjdWxhdGlvbiBiZWVuIGRvbmUhXG5sZXQgdGhlbWVQcmltYXJ5Q29sb3IgPSByZ2IyaGV4KGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykpLmJhY2tncm91bmRDb2xvcilcbmxldCB0aGVtZUNvbG9yRmlsdGVyID0gZ2V0SGV4RmlsdGVyKHRoZW1lUHJpbWFyeUNvbG9yKVxuXG5sZXQgSW5pdEZ1biA9IGZ1bmN0aW9uICgpIHtcbiAgY292ZXJJbWdJbmkoKVxuICBtZGNJbml0KClcbiAgXG4gIGxldCBmb290ZXJCZWZvcmUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItYmVmb3JlXCIpXG4gIGlmICh0eXBlb2YgKGZvb3RlckJlZm9yZSkgIT09ICd1bmRlZmluZWQnICYmIGZvb3RlckJlZm9yZSAhPT0gbnVsbCkge1xuICAgIC8vIFRPRE86IHNldCB0aGVtZSBjb2xvciBmdW5jdGlvbiFcbiAgICBmb290ZXJCZWZvcmUuc3R5bGUuZmlsdGVyID0gdGhlbWVDb2xvckZpbHRlclxuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIEluaXRGdW4oKVxuXG4gIGxldCBwamF4ID0gbmV3IFBqYXgoe1xuICAgIGVsZW1lbnRzOiBcImFcIiwgLy8gZGVmYXVsdCBpcyBcImFbaHJlZl0sIGZvcm1bYWN0aW9uXVwiXG4gICAgc2VsZWN0b3JzOiBbXCJ0aXRsZVwiLCBcIiNyb290XCJdLFxuICAgIGNhY2hlQnVzdDogdHJ1ZVxuICB9KVxuXG4gIGZ1bmN0aW9uIHBqYXhSZWxvYWQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3BqYXg6Y29tcGxldGUnKVxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBob21lIWApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBub3QgaG9tZSFgKVxuICAgIH1cbiAgICBJbml0RnVuKClcbiAgfVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwamF4OmNvbXBsZXRlJywgcGpheFJlbG9hZClcbn0iLCIvKipcbiAqIENvcHlyaWdodCAyMDE5IE1hc2hpcm9cbiAqIEBkZXNjcmlwdGlvbiBTYWt1cmEgdGhlbWUgbW9kdWxlXG4gKiBAYXV0aG9yIE1hc2hpcm9cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbmltcG9ydCBQYXJhbGxheCBmcm9tICdwYXJhbGxheC1qcydcblxuLyoqXG4gKiBJbml0aWFsIGluZGV4IGNvdmVyIGltYWdlIGFuZCBpbWFnZSBib3guXG4gKiBJbmNsdWRlIFBhcmFsbGF4IGJveCBpbml0aWFsIGFuZCBgI2NvdmVyLWltZy1jb250YWluZXJgIHNpemUgaW5pdGlhbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGxldCBoZWFkZXJUb3BBZnRlciA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlci10b3AtYWZ0ZXJcIilcbiAgICBpZiAodHlwZW9mIChoZWFkZXJUb3BBZnRlcikgIT09ICd1bmRlZmluZWQnICYmIGhlYWRlclRvcEFmdGVyICE9PSBudWxsKSB7XG4gICAgICAgIGhlYWRlclRvcEFmdGVyLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGBcbiAgICB9XG4gICAgXG4gICAgbGV0IGNvdmVySW1nQ29udGFpbmVyID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY292ZXItaW1nLWNvbnRhaW5lclwiKVxuICAgIGlmICh0eXBlb2YgKGNvdmVySW1nQ29udGFpbmVyKSAhPT0gJ3VuZGVmaW5lZCcgJiYgY292ZXJJbWdDb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgY292ZXJJbWdDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YFxuXG4gICAgICAgIGludGVyZmFjZSBMb29zZU9iamVjdCB7XG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiBhbnlcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjb3ZlcjogYGltZyNjb3Zlci1pbWdgXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgY292ZXJJbWc6IExvb3NlT2JqZWN0ID0ge31cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1hcms6IGBmaWd1cmUjY292ZXItaW1nLWNvbnRhaW5lcmBcbiAgICAgICAgICovXG4gICAgICAgIGxldCBjb3ZlckJveDogTG9vc2VPYmplY3QgPSB7fVxuICAgICAgICAvKipcbiAgICAgICAgICogbGF5ZXI6IGBkaXYjaW1nLXZpZXdgXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgY292ZXJWaWV3OiBMb29zZU9iamVjdCA9IHt9XG5cbiAgICAgICAgY292ZXJJbWcuZSA9IDxIVE1MSW1hZ2VFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY292ZXItaW1nXCIpXG4gICAgICAgIGNvdmVySW1nLncgPSA8bnVtYmVyPmNvdmVySW1nLmUubmF0dXJhbFdpZHRoXG4gICAgICAgIGNvdmVySW1nLmggPSA8bnVtYmVyPmNvdmVySW1nLmUubmF0dXJhbEhlaWdodFxuXG4gICAgICAgIGNvdmVyQm94LmUgPSA8SFRNTEltYWdlRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdmVyLWltZy1jb250YWluZXJcIilcbiAgICAgICAgY292ZXJCb3gudyA9IDxudW1iZXI+Y292ZXJCb3guZS5vZmZzZXRXaWR0aFxuICAgICAgICBjb3ZlckJveC5oID0gPG51bWJlcj5jb3ZlckJveC5lLm9mZnNldEhlaWdodFxuXG4gICAgICAgIGNvdmVyVmlldy5lID0gPEhUTUxJbWFnZUVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWctdmlld1wiKVxuXG4gICAgICAgIGNvdmVyQm94LmUuc3R5bGUuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0fXB4YFxuXG4gICAgICAgIGNvdmVyQm94LmYgPSAoY292ZXJCb3gudyA+PSAxMDAwIHx8IGNvdmVyQm94LmggPj0gMTAwMCkgPyAxMDAwIDogNTAwXG4gICAgICAgIGlmIChjb3ZlckJveC53ID49IGNvdmVyQm94LmgpIHtcbiAgICAgICAgICAgIGNvdmVyQm94LmkgPSBjb3ZlckJveC53IC8gY292ZXJCb3guZiAqIDUwO1xuICAgICAgICAgICAgY292ZXJCb3gueSA9IGNvdmVyQm94Lmk7XG4gICAgICAgICAgICBjb3ZlckJveC54ID0gY292ZXJCb3guaSAqIGNvdmVyQm94LncgLyBjb3ZlckJveC5oO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY292ZXJCb3guaSA9IGNvdmVyQm94LmggLyBjb3ZlckJveC5mICogNTA7XG4gICAgICAgICAgICBjb3ZlckJveC54ID0gY292ZXJCb3guaTtcbiAgICAgICAgICAgIGNvdmVyQm94LnkgPSBjb3ZlckJveC5pICogY292ZXJCb3guaCAvIGNvdmVyQm94Lnc7XG4gICAgICAgIH1cblxuICAgICAgICBjb3ZlclZpZXcuZS5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICB3aWR0aDogJHtjb3ZlckJveC53ICsgY292ZXJCb3gueH1weDsgXG4gICAgICAgIGhlaWdodDogJHtjb3ZlckJveC5oICsgY292ZXJCb3gueX1weDsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkey0wLjUgKiBjb3ZlckJveC54fXB4OyBcbiAgICAgICAgbWFyZ2luLXRvcDogJHstMC41ICogY292ZXJCb3gueX1weGBcblxuICAgICAgICBjb3ZlckltZy5lLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIHdpZHRoOiAke2NvdmVyVmlldy53ICsgY292ZXJWaWV3Lnh9cHg7XG4gICAgICAgIGhlaWdodDogJHtjb3ZlclZpZXcuaCArIGNvdmVyVmlldy55fXB4YFxuXG4gICAgICAgIGlmICghY292ZXJJbWcudykge1xuICAgICAgICAgICAgY292ZXJJbWcudyA9IGNvdmVySW1nLmUub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgIGNvdmVySW1nLmggPSBjb3ZlckltZy5lLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdmVySW1nLl93ID0gY292ZXJJbWcuZS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIGNvdmVySW1nLl9oID0gY292ZXJJbWcuZS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICBjb3ZlckltZy5yYXRpbyA9IGNvdmVySW1nLmggLyBjb3ZlckltZy53XG5cbiAgICAgICAgaWYgKGNvdmVySW1nLl9oIC8gY292ZXJJbWcuX3cgPiBjb3ZlckltZy5yYXRpbykge1xuICAgICAgICAgICAgY292ZXJJbWcuZS5zdHlsZS5oZWlnaHQgPSBjb3ZlckltZy5faCArICdweCc7XG4gICAgICAgICAgICBjb3ZlckltZy5lLnN0eWxlLndpZHRoID0gY292ZXJJbWcuX2ggLyBjb3ZlckltZy5yYXRpbyArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3ZlckltZy5lLnN0eWxlLndpZHRoID0gY292ZXJJbWcuX3cgKyAncHgnO1xuICAgICAgICAgICAgY292ZXJJbWcuZS5zdHlsZS5oZWlnaHQgPSBjb3ZlckltZy5fdyAqIGNvdmVySW1nLnJhdGlvICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdmVySW1nLmUuc3R5bGUubGVmdCA9IChjb3ZlckltZy5fdyAtIHBhcnNlSW50KGNvdmVySW1nLmUuc3R5bGUud2lkdGgpKSAvIDIgKyAncHgnO1xuICAgICAgICBjb3ZlckltZy5lLnN0eWxlLnRvcCA9IChjb3ZlckltZy5faCAtIHBhcnNlSW50KGNvdmVySW1nLmUuc3R5bGUuaGVpZ2h0KSkgLyAyICsgJ3B4JztcblxuICAgICAgICBsZXQgc2NlbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY292ZXItaW1nLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBwYXJhbGxheEluc3RhbmNlID0gbmV3IFBhcmFsbGF4KHNjZW5lKTtcbiAgICB9XG59IiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gU2FrdXJhIHRoZW1lIG1vZHVsZVxuICogQGF1dGhvciBNYXNoaXJvXG4gKiBAc2luY2UgMTkvMTAvMzFcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbmltcG9ydCBzY3JvbGxEaXJlY3Rpb24gZnJvbSBcIi4vc2Nyb2xsRGlyZWN0aW9uXCJcblxuLyoqXG4gKiBTaXRlIHRvcCBiYXIgaGFuZGxlciB3aGVuIHBhZ2Ugc2Nyb2xsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZWxlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWhlYWRlclwiKVxuICAgIGlmIChzY3JvbGxEaXJlY3Rpb24oJ3knKSA9PSAnZG93bicpIHtcbiAgICAgICAgZWxlLnN0eWxlLnRvcCA9IGAtMTIwcHhgXG4gICAgfVxuICAgIGVsc2UgaWYgKHNjcm9sbERpcmVjdGlvbigneScpID09ICd1cCcpIHtcbiAgICAgICAgZWxlLnN0eWxlLnRvcCA9IGAwcHhgXG4gICAgfVxufSIsIi8qKlxuICogQGRlc2NyaXB0aW9uIENTUyBoZXggZmlsdGVyIChodHRwczovL2NvZGVwZW4uaW8vc29zdWtlL3Blbi9Qam9xcXApXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG5jbGFzcyBDb2xvciB7XG4gICAgY29uc3RydWN0b3IociwgZywgYikge1xuICAgICAgICB0aGlzLnNldChyLCBnLCBiKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHtNYXRoLnJvdW5kKHRoaXMucil9LCAke01hdGgucm91bmQodGhpcy5nKX0sICR7TWF0aC5yb3VuZCh0aGlzLmIpfSlgO1xuICAgIH1cblxuICAgIHNldChyLCBnLCBiKSB7XG4gICAgICAgIHRoaXMuciA9IHRoaXMuY2xhbXAocik7XG4gICAgICAgIHRoaXMuZyA9IHRoaXMuY2xhbXAoZyk7XG4gICAgICAgIHRoaXMuYiA9IHRoaXMuY2xhbXAoYik7XG4gICAgfVxuXG4gICAgaHVlUm90YXRlKGFuZ2xlID0gMCkge1xuICAgICAgICBhbmdsZSA9IGFuZ2xlIC8gMTgwICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5tdWx0aXBseShbXG4gICAgICAgICAgICAwLjIxMyArIGNvcyAqIDAuNzg3IC0gc2luICogMC4yMTMsXG4gICAgICAgICAgICAwLjcxNSAtIGNvcyAqIDAuNzE1IC0gc2luICogMC43MTUsXG4gICAgICAgICAgICAwLjA3MiAtIGNvcyAqIDAuMDcyICsgc2luICogMC45MjgsXG4gICAgICAgICAgICAwLjIxMyAtIGNvcyAqIDAuMjEzICsgc2luICogMC4xNDMsXG4gICAgICAgICAgICAwLjcxNSArIGNvcyAqIDAuMjg1ICsgc2luICogMC4xNDAsXG4gICAgICAgICAgICAwLjA3MiAtIGNvcyAqIDAuMDcyIC0gc2luICogMC4yODMsXG4gICAgICAgICAgICAwLjIxMyAtIGNvcyAqIDAuMjEzIC0gc2luICogMC43ODcsXG4gICAgICAgICAgICAwLjcxNSAtIGNvcyAqIDAuNzE1ICsgc2luICogMC43MTUsXG4gICAgICAgICAgICAwLjA3MiArIGNvcyAqIDAuOTI4ICsgc2luICogMC4wNzIsXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGdyYXlzY2FsZSh2YWx1ZSA9IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBseShbXG4gICAgICAgICAgICAwLjIxMjYgKyAwLjc4NzQgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNzE1MiAtIDAuNzE1MiAqICgxIC0gdmFsdWUpLFxuICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNzE1MiArIDAuMjg0OCAqICgxIC0gdmFsdWUpLFxuICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNzE1MiAtIDAuNzE1MiAqICgxIC0gdmFsdWUpLFxuICAgICAgICAgICAgMC4wNzIyICsgMC45Mjc4ICogKDEgLSB2YWx1ZSksXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIHNlcGlhKHZhbHVlID0gMSkge1xuICAgICAgICB0aGlzLm11bHRpcGx5KFtcbiAgICAgICAgICAgIDAuMzkzICsgMC42MDcgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNzY5IC0gMC43NjkgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMTg5IC0gMC4xODkgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMzQ5IC0gMC4zNDkgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNjg2ICsgMC4zMTQgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMTY4IC0gMC4xNjggKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMjcyIC0gMC4yNzIgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNTM0IC0gMC41MzQgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMTMxICsgMC44NjkgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgc2F0dXJhdGUodmFsdWUgPSAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbHkoW1xuICAgICAgICAgICAgMC4yMTMgKyAwLjc4NyAqIHZhbHVlLFxuICAgICAgICAgICAgMC43MTUgLSAwLjcxNSAqIHZhbHVlLFxuICAgICAgICAgICAgMC4wNzIgLSAwLjA3MiAqIHZhbHVlLFxuICAgICAgICAgICAgMC4yMTMgLSAwLjIxMyAqIHZhbHVlLFxuICAgICAgICAgICAgMC43MTUgKyAwLjI4NSAqIHZhbHVlLFxuICAgICAgICAgICAgMC4wNzIgLSAwLjA3MiAqIHZhbHVlLFxuICAgICAgICAgICAgMC4yMTMgLSAwLjIxMyAqIHZhbHVlLFxuICAgICAgICAgICAgMC43MTUgLSAwLjcxNSAqIHZhbHVlLFxuICAgICAgICAgICAgMC4wNzIgKyAwLjkyOCAqIHZhbHVlLFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBtdWx0aXBseShtYXRyaXgpIHtcbiAgICAgICAgY29uc3QgbmV3UiA9IHRoaXMuY2xhbXAodGhpcy5yICogbWF0cml4WzBdICsgdGhpcy5nICogbWF0cml4WzFdICsgdGhpcy5iICogbWF0cml4WzJdKTtcbiAgICAgICAgY29uc3QgbmV3RyA9IHRoaXMuY2xhbXAodGhpcy5yICogbWF0cml4WzNdICsgdGhpcy5nICogbWF0cml4WzRdICsgdGhpcy5iICogbWF0cml4WzVdKTtcbiAgICAgICAgY29uc3QgbmV3QiA9IHRoaXMuY2xhbXAodGhpcy5yICogbWF0cml4WzZdICsgdGhpcy5nICogbWF0cml4WzddICsgdGhpcy5iICogbWF0cml4WzhdKTtcbiAgICAgICAgdGhpcy5yID0gbmV3UjtcbiAgICAgICAgdGhpcy5nID0gbmV3RztcbiAgICAgICAgdGhpcy5iID0gbmV3QjtcbiAgICB9XG5cbiAgICBicmlnaHRuZXNzKHZhbHVlID0gMSkge1xuICAgICAgICB0aGlzLmxpbmVhcih2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnRyYXN0KHZhbHVlID0gMSkge1xuICAgICAgICB0aGlzLmxpbmVhcih2YWx1ZSwgLSgwLjUgKiB2YWx1ZSkgKyAwLjUpO1xuICAgIH1cblxuICAgIGxpbmVhcihzbG9wZSA9IDEsIGludGVyY2VwdCA9IDApIHtcbiAgICAgICAgdGhpcy5yID0gdGhpcy5jbGFtcCh0aGlzLnIgKiBzbG9wZSArIGludGVyY2VwdCAqIDI1NSk7XG4gICAgICAgIHRoaXMuZyA9IHRoaXMuY2xhbXAodGhpcy5nICogc2xvcGUgKyBpbnRlcmNlcHQgKiAyNTUpO1xuICAgICAgICB0aGlzLmIgPSB0aGlzLmNsYW1wKHRoaXMuYiAqIHNsb3BlICsgaW50ZXJjZXB0ICogMjU1KTtcbiAgICB9XG5cbiAgICBpbnZlcnQodmFsdWUgPSAxKSB7XG4gICAgICAgIHRoaXMuciA9IHRoaXMuY2xhbXAoKHZhbHVlICsgdGhpcy5yIC8gMjU1ICogKDEgLSAyICogdmFsdWUpKSAqIDI1NSk7XG4gICAgICAgIHRoaXMuZyA9IHRoaXMuY2xhbXAoKHZhbHVlICsgdGhpcy5nIC8gMjU1ICogKDEgLSAyICogdmFsdWUpKSAqIDI1NSk7XG4gICAgICAgIHRoaXMuYiA9IHRoaXMuY2xhbXAoKHZhbHVlICsgdGhpcy5iIC8gMjU1ICogKDEgLSAyICogdmFsdWUpKSAqIDI1NSk7XG4gICAgfVxuXG4gICAgaHNsKCkge1xuICAgICAgICAvLyBDb2RlIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzk0OTMwNjAvMjY4ODAyNywgbGljZW5zZWQgdW5kZXIgQ0MgQlktU0EuXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIgLyAyNTU7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmcgLyAyNTU7XG4gICAgICAgIGNvbnN0IGIgPSB0aGlzLmIgLyAyNTU7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbGV0IGgsIHMsIGwgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgICAgICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICAgICAgICBoID0gcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBiOlxuICAgICAgICAgICAgICAgICAgICBoID0gKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGggLz0gNjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoOiBoICogMTAwLFxuICAgICAgICAgICAgczogcyAqIDEwMCxcbiAgICAgICAgICAgIGw6IGwgKiAxMDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xhbXAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID4gMjU1KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDI1NTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBTb2x2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgYmFzZUNvbG9yKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnRhcmdldEhTTCA9IHRhcmdldC5oc2woKTtcbiAgICAgICAgdGhpcy5yZXVzZWRDb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwKTtcbiAgICB9XG5cbiAgICBzb2x2ZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zb2x2ZU5hcnJvdyh0aGlzLnNvbHZlV2lkZSgpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlczogcmVzdWx0LnZhbHVlcyxcbiAgICAgICAgICAgIGxvc3M6IHJlc3VsdC5sb3NzLFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmNzcyhyZXN1bHQudmFsdWVzKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzb2x2ZVdpZGUoKSB7XG4gICAgICAgIGNvbnN0IEEgPSA1O1xuICAgICAgICBjb25zdCBjID0gMTU7XG4gICAgICAgIGNvbnN0IGEgPSBbNjAsIDE4MCwgMTgwMDAsIDYwMCwgMS4yLCAxLjJdO1xuXG4gICAgICAgIGxldCBiZXN0ID0geyBsb3NzOiBJbmZpbml0eSB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgYmVzdC5sb3NzID4gMjUgJiYgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5pdGlhbCA9IFs1MCwgMjAsIDM3NTAsIDUwLCAxMDAsIDEwMF07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNwc2EoQSwgYSwgYywgaW5pdGlhbCwgMTAwMCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxvc3MgPCBiZXN0Lmxvc3MpIHtcbiAgICAgICAgICAgICAgICBiZXN0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0O1xuICAgIH1cblxuICAgIHNvbHZlTmFycm93KHdpZGUpIHtcbiAgICAgICAgY29uc3QgQSA9IHdpZGUubG9zcztcbiAgICAgICAgY29uc3QgYyA9IDI7XG4gICAgICAgIGNvbnN0IEExID0gQSArIDE7XG4gICAgICAgIGNvbnN0IGEgPSBbMC4yNSAqIEExLCAwLjI1ICogQTEsIEExLCAwLjI1ICogQTEsIDAuMiAqIEExLCAwLjIgKiBBMV07XG4gICAgICAgIHJldHVybiB0aGlzLnNwc2EoQSwgYSwgYywgd2lkZS52YWx1ZXMsIDUwMCk7XG4gICAgfVxuXG4gICAgc3BzYShBLCBhLCBjLCB2YWx1ZXMsIGl0ZXJzKSB7XG4gICAgICAgIGNvbnN0IGFscGhhID0gMTtcbiAgICAgICAgY29uc3QgZ2FtbWEgPSAwLjE2NjY2NjY2NjY2NjY2NjY2O1xuXG4gICAgICAgIGxldCBiZXN0ID0gbnVsbDtcbiAgICAgICAgbGV0IGJlc3RMb3NzID0gSW5maW5pdHk7XG4gICAgICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBBcnJheSg2KTtcbiAgICAgICAgY29uc3QgaGlnaEFyZ3MgPSBuZXcgQXJyYXkoNik7XG4gICAgICAgIGNvbnN0IGxvd0FyZ3MgPSBuZXcgQXJyYXkoNik7XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpdGVyczsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBjayA9IGMgLyBNYXRoLnBvdyhrICsgMSwgZ2FtbWEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICBkZWx0YXNbaV0gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGhpZ2hBcmdzW2ldID0gdmFsdWVzW2ldICsgY2sgKiBkZWx0YXNbaV07XG4gICAgICAgICAgICAgICAgbG93QXJnc1tpXSA9IHZhbHVlc1tpXSAtIGNrICogZGVsdGFzW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb3NzRGlmZiA9IHRoaXMubG9zcyhoaWdoQXJncykgLSB0aGlzLmxvc3MobG93QXJncyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBsb3NzRGlmZiAvICgyICogY2spICogZGVsdGFzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFrID0gYVtpXSAvIE1hdGgucG93KEEgKyBrICsgMSwgYWxwaGEpO1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IGZpeCh2YWx1ZXNbaV0gLSBhayAqIGcsIGkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb3NzID0gdGhpcy5sb3NzKHZhbHVlcyk7XG4gICAgICAgICAgICBpZiAobG9zcyA8IGJlc3RMb3NzKSB7XG4gICAgICAgICAgICAgICAgYmVzdCA9IHZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICBiZXN0TG9zcyA9IGxvc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWVzOiBiZXN0LCBsb3NzOiBiZXN0TG9zcyB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpeCh2YWx1ZSwgaWR4KSB7XG4gICAgICAgICAgICBsZXQgbWF4ID0gMTAwO1xuICAgICAgICAgICAgaWYgKGlkeCA9PT0gMiAvKiBzYXR1cmF0ZSAqLykge1xuICAgICAgICAgICAgICAgIG1heCA9IDc1MDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkeCA9PT0gNCAvKiBicmlnaHRuZXNzICovIHx8IGlkeCA9PT0gNSAvKiBjb250cmFzdCAqLykge1xuICAgICAgICAgICAgICAgIG1heCA9IDIwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gMyAvKiBodWUtcm90YXRlICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICU9IG1heDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1heCArIHZhbHVlICUgbWF4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9zcyhmaWx0ZXJzKSB7XG4gICAgICAgIC8vIEFyZ3VtZW50IGlzIGFycmF5IG9mIHBlcmNlbnRhZ2VzLlxuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMucmV1c2VkQ29sb3I7XG4gICAgICAgIGNvbG9yLnNldCgwLCAwLCAwKTtcblxuICAgICAgICBjb2xvci5pbnZlcnQoZmlsdGVyc1swXSAvIDEwMCk7XG4gICAgICAgIGNvbG9yLnNlcGlhKGZpbHRlcnNbMV0gLyAxMDApO1xuICAgICAgICBjb2xvci5zYXR1cmF0ZShmaWx0ZXJzWzJdIC8gMTAwKTtcbiAgICAgICAgY29sb3IuaHVlUm90YXRlKGZpbHRlcnNbM10gKiAzLjYpO1xuICAgICAgICBjb2xvci5icmlnaHRuZXNzKGZpbHRlcnNbNF0gLyAxMDApO1xuICAgICAgICBjb2xvci5jb250cmFzdChmaWx0ZXJzWzVdIC8gMTAwKTtcblxuICAgICAgICBjb25zdCBjb2xvckhTTCA9IGNvbG9yLmhzbCgpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgTWF0aC5hYnMoY29sb3IuciAtIHRoaXMudGFyZ2V0LnIpICtcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbG9yLmcgLSB0aGlzLnRhcmdldC5nKSArXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xvci5iIC0gdGhpcy50YXJnZXQuYikgK1xuICAgICAgICAgICAgTWF0aC5hYnMoY29sb3JIU0wuaCAtIHRoaXMudGFyZ2V0SFNMLmgpICtcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbG9ySFNMLnMgLSB0aGlzLnRhcmdldEhTTC5zKSArXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xvckhTTC5sIC0gdGhpcy50YXJnZXRIU0wubClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjc3MoZmlsdGVycykge1xuICAgICAgICBmdW5jdGlvbiBmbXQoaWR4LCBtdWx0aXBsaWVyID0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZmlsdGVyc1tpZHhdICogbXVsdGlwbGllcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBpbnZlcnQoJHtmbXQoMCl9JSkgc2VwaWEoJHtmbXQoMSl9JSkgc2F0dXJhdGUoJHtmbXQoMil9JSkgaHVlLXJvdGF0ZSgke2ZtdCgzLCAzLjYpfWRlZykgYnJpZ2h0bmVzcygke2ZtdCg0KX0lKSBjb250cmFzdCgke2ZtdCg1KX0lKWA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICAvLyBFeHBhbmQgc2hvcnRoYW5kIGZvcm0gKGUuZy4gXCIwM0ZcIikgdG8gZnVsbCBmb3JtIChlLmcuIFwiMDAzM0ZGXCIpXG4gICAgY29uc3Qgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICAgIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCAobSwgciwgZywgYikgPT4ge1xuICAgICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICAgICAgcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgICAgICBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgICAgXVxuICAgICAgICA6IG51bGw7XG59XG5cbi8qKlxuICogQ29udmVydCAjMDAwIGJhY2tncm91bmQgdG8gYW55IGNvbG9yLiBcbiAqIEl1cHV0IGEgaGV4IHRyaXBsZXQgYW5kIHJldHVybiBmaWx0ZXIuXG4gKiBcbiAqIFVzYWdlOiBcbiAqIGBgYGpzXG4gKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvbicpLnN0eWxlLmZpbHRlciA9IGdldEhleEZpbHRlcignIzFhMjYzZCcpO1xuICogYGBgXG4gKiAgSWYgeW91ciBpY29uIHNldCBpc24ndCBibGFjayB5b3UgY2FuIHByZXBlbmQgXCJicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpXCIgdG8geW91ciBmaWx0ZXIgcHJvcGVydHkgd2hpY2ggd2lsbCBmaXJzdCB0dXJuIHRoZSBpY29uIHNldCB0byBibGFjay5cbiAqIFxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgaGV4ICAgICBIZXggdHJpcGxldCwgZWc6IGAnIzFhMjYzZCdgLCBgI2ZmZmBcbiAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgICAgQ1NTIGZpbHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaGV4OiBzdHJpbmcgPSAnIzFhMjYzZCcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJnYiA9IGhleFRvUmdiKGhleCk7XG4gICAgaWYgKHJnYi5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgZm9ybWF0IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IocmdiWzBdLCByZ2JbMV0sIHJnYlsyXSk7XG4gICAgY29uc3Qgc29sdmVyID0gbmV3IFNvbHZlcihjb2xvcik7XG4gICAgY29uc3QgcmVzdWx0ID0gc29sdmVyLnNvbHZlKCk7XG5cbiAgICBsZXQgbG9zc01zZztcbiAgICBpZiAocmVzdWx0Lmxvc3MgPCAxKSB7XG4gICAgICAgIGxvc3NNc2cgPSAnVGhpcyBpcyBhIHBlcmZlY3QgcmVzdWx0Lic7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQubG9zcyA8IDUpIHtcbiAgICAgICAgbG9zc01zZyA9ICdUaGUgaXMgY2xvc2UgZW5vdWdoLic7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQubG9zcyA8IDE1KSB7XG4gICAgICAgIGxvc3NNc2cgPSAnVGhlIGNvbG9yIGlzIHNvbWV3aGF0IG9mZi4gQ29uc2lkZXIgcnVubmluZyBpdCBhZ2Fpbi4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvc3NNc2cgPSAnVGhlIGNvbG9yIGlzIGV4dHJlbWVseSBvZmYuIFJ1biBpdCBhZ2FpbiEnO1xuICAgIH1cblxuICAgIHJldHVybiBgYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSAke3Jlc3VsdC5maWx0ZXJ9YDtcbn1cbiIsIi8qKlxuICogRnVuY3Rpb24gdG8gY29udmVydCBoZXggZm9ybWF0IHRvIGEgcmdiIGNvbG9yXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICByZ2IgdGhlIHJnYiBzdHJpbmcsIGVnLiBgcmdiKDI1MiwgMTg0LCAxNzEpYCBvciBgcmdiYSgyNTIsIDE4NCwgMTcxLCAxKWBcbiAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICB0aGUgaGV4IHRyaXBsZXQsIGVnLiBgI2ZjYjhhYmBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmdiMmhleChyZ2IpIHtcbiAgICByZ2IgPSByZ2IubWF0Y2goL15yZ2JhP1tcXHMrXT9cXChbXFxzK10/KFxcZCspW1xccytdPyxbXFxzK10/KFxcZCspW1xccytdPyxbXFxzK10/KFxcZCspW1xccytdPy9pKTtcbiAgICByZXR1cm4gKHJnYiAmJiByZ2IubGVuZ3RoID09PSA0KSA/IFwiI1wiICtcbiAgICAgICAgKFwiMFwiICsgcGFyc2VJbnQocmdiWzFdLCAxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMikgK1xuICAgICAgICAoXCIwXCIgKyBwYXJzZUludChyZ2JbMl0sIDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKSArXG4gICAgICAgIChcIjBcIiArIHBhcnNlSW50KHJnYlszXSwgMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpIDogJyc7XG59IiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gU2FrdXJhIHRoZW1lIG1vZHVsZVxuICogQGF1dGhvciBNYXNoaXJvXG4gKiBAc2luY2UgMTkvMTAvMzFcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbmxldCBzY3JvbGxBY3Rpb246IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIGQ6IHN0cmluZ1xufSA9IHtcbiAgICB4OiB1bmRlZmluZWQsXG4gICAgeTogdW5kZWZpbmVkLFxuICAgIGQ6IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIERldGVjdCB3aW5kb3cgc2Nyb2xsIGRpcmVjdGlvblxuICogQHBhcmFtICB7c3RyaW5nfSAgZGlyZWN0aW9uICBvcHRpb246IGBZYC9geWAgLSBob3Jpem9udGFsOyBgWGAvYHhgIC0gdmVydGljYWxcbiAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgICAgcmV0dXJuIHdpbmRvdyBzY3JvbGwgZGlyZWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkaXJlY3Rpb246IHN0cmluZykge1xuICAgIGlmIChzY3JvbGxBY3Rpb24ueCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2Nyb2xsQWN0aW9uLnggPSB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgc2Nyb2xsQWN0aW9uLnkgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICB9XG4gICAgbGV0IGRpZmZYID0gc2Nyb2xsQWN0aW9uLnggLSB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICBsZXQgZGlmZlkgPSBzY3JvbGxBY3Rpb24ueSAtIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIGlmIChkaXJlY3Rpb24gPT0gJ3gnIHx8IGRpcmVjdGlvbiA9PSAnWCcgKSB7XG4gICAgICAgIGlmIChkaWZmWCA8IDApIHtcbiAgICAgICAgICAgIHNjcm9sbEFjdGlvbi5kID0gJ3JpZ2h0J1xuICAgICAgICB9IGVsc2UgaWYgKGRpZmZYID4gMCkge1xuICAgICAgICAgICAgc2Nyb2xsQWN0aW9uLmQgPSAnbGVmdCdcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkaWZmWSA8IDApIHtcbiAgICAgICAgICAgIHNjcm9sbEFjdGlvbi5kID0gJ2Rvd24nXG4gICAgICAgIH0gZWxzZSBpZiAoZGlmZlkgPiAwKSB7XG4gICAgICAgICAgICBzY3JvbGxBY3Rpb24uZCA9ICd1cCdcbiAgICAgICAgfVxuICAgIH1cbiAgICBzY3JvbGxBY3Rpb24ueCA9IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgIHNjcm9sbEFjdGlvbi55ID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgcmV0dXJuIHNjcm9sbEFjdGlvbi5kXG59Il0sInNvdXJjZVJvb3QiOiIifQ==