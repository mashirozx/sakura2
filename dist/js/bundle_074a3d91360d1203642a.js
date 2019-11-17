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
/*! exports provided: MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, characterCountCssClasses, characterCountStrings */
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
/*! exports provided: MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, helperTextCssClasses, helperTextStrings */
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
/*! exports provided: MDCTextFieldIcon, MDCTextFieldIconFoundation, iconCssClasses, iconStrings */
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
/*! exports provided: MDCTextField, cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES, MDCTextFieldFoundation, MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, characterCountCssClasses, characterCountStrings, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, helperTextCssClasses, helperTextStrings, MDCTextFieldIcon, MDCTextFieldIconFoundation, iconCssClasses, iconStrings */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountStrings"]; });

/* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/@material/textfield/helper-text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperTextFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextStrings"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/index */ "./node_modules/@material/textfield/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIconFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconStrings"]; });

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

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
// let themePrimaryColor = rgb2hex(window.getComputedStyle(document.querySelector('footer')).backgroundColor)


let themePrimaryColor = '#fcb8ab';
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
  // TODO: you may calculate in css...
  let coverImgContainer = document.querySelector("#cover-img-container");

  if (typeof coverImgContainer !== 'undefined' && coverImgContainer !== null) {
    // coverImgContainer.style.height = `${window.innerHeight}px` //css instead

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

    let coverView = {}; // coverImg.e = <HTMLImageElement>document.querySelector("#cover-img")
    // coverImg.w = <number>coverImg.e.naturalWidth
    // coverImg.h = <number>coverImg.e.naturalHeight
    // coverBox.e = <HTMLImageElement>document.querySelector("#cover-img-container")
    // coverBox.w = <number>coverBox.e.offsetWidth
    // coverBox.h = <number>coverBox.e.offsetHeight
    // coverView.e = <HTMLImageElement>document.querySelector("#img-view")
    // coverBox.e.style.height = `${window.innerHeight}px`
    // coverBox.f = (coverBox.w >= 1000 || coverBox.h >= 1000) ? 1000 : 500
    // if (coverBox.w >= coverBox.h) {
    //     coverBox.i = coverBox.w / coverBox.f * 50;
    //     coverBox.y = coverBox.i;
    //     coverBox.x = coverBox.i * coverBox.w / coverBox.h;
    // } else {
    //     coverBox.i = coverBox.h / coverBox.f * 50;
    //     coverBox.x = coverBox.i;
    //     coverBox.y = coverBox.i * coverBox.h / coverBox.w;
    // }
    // coverView.e.style.cssText = `
    // width: ${coverBox.w + coverBox.x}px; 
    // height: ${coverBox.h + coverBox.y}px; 
    // margin-left: ${-0.5 * coverBox.x}px; 
    // margin-top: ${-0.5 * coverBox.y}px`
    // coverImg.e.style.cssText = `
    // width: ${coverView.w + coverView.x}px;
    // height: ${coverView.h + coverView.y}px`
    // if (!coverImg.w) {
    //     coverImg.w = coverImg.e.offsetWidth
    //     coverImg.h = coverImg.e.offsetHeight;
    // }
    // coverImg._w = coverImg.e.parentElement.offsetWidth
    // coverImg._h = coverImg.e.parentElement.offsetHeight
    // coverImg.ratio = coverImg.h / coverImg.w
    // if (coverImg._h / coverImg._w > coverImg.ratio) {
    //     coverImg.e.style.height = coverImg._h + 'px';
    //     coverImg.e.style.width = coverImg._h / coverImg.ratio + 'px';
    // } else {
    //     coverImg.e.style.width = coverImg._w + 'px';
    //     coverImg.e.style.height = coverImg._w * coverImg.ratio + 'px';
    // }
    // coverImg.e.style.left = (coverImg._w - parseInt(coverImg.e.style.width)) / 2 + 'px';
    // coverImg.e.style.top = (coverImg._h - parseInt(coverImg.e.style.height)) / 2 + 'px';
    // let scene = document.querySelector('#cover-img-container')
    // let parallaxInstance = new Parallax(scene);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvY2hhcmFjdGVyLWNvdW50ZXIvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NoYXJhY3Rlci1jb3VudGVyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jaGFyYWN0ZXItY291bnRlci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NoYXJhY3Rlci1jb3VudGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9maXhlZC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvc2hvcnQvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL3N0YW5kYXJkL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2Fib3J0LXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2V2YWwtc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9ldmVudHMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2V2ZW50cy90cmlnZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9leGVjdXRlLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2ZvcmVhY2gtZWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9mb3JlYWNoLXNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvaXMtc3VwcG9ydGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wcm90by9hdHRhY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvcHJvdG8vYXR0YWNoLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3Byb3RvL2hhbmRsZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvcHJvdG8vbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wcm90by9wYXJzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9zZW5kLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3N3aXRjaGVzLXNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvc3dpdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3VuaXF1ZWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvdXRpbC9ub29wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL3VwZGF0ZS1xdWVyeS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzRlMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbXBvbmVudHMvbWRjQ29uZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9tZGNJbml0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9kdWxlcy9jb3ZlckltZ0luaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vZHVsZXMvaGVhZGVyQmFyU2Nyb2xsSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9kdWxlcy9oZXhGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vZHVsZXMvc2Nyb2xsRGlyZWN0aW9uLnRzIl0sIm5hbWVzIjpbIkNvbmYiLCJNRENUb3BBcHBCYXIiLCJNRENUZXh0RmllbGQiLCJNRENSaXBwbGUiLCJtZGNDb25mIiwiY29tcG9uZW50cyIsImkiLCJjb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIm1hcCIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwiam9pbiIsIndpbmRvdyIsIm9uc2Nyb2xsIiwiaGVhZGVyQmFyU2Nyb2xsSGFuZGxlciIsInRoZW1lUHJpbWFyeUNvbG9yIiwidGhlbWVDb2xvckZpbHRlciIsImdldEhleEZpbHRlciIsIkluaXRGdW4iLCJjb3ZlckltZ0luaSIsIm1kY0luaXQiLCJmb290ZXJCZWZvcmUiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJmaWx0ZXIiLCJvbmxvYWQiLCJwamF4IiwiUGpheCIsImVsZW1lbnRzIiwic2VsZWN0b3JzIiwiY2FjaGVCdXN0IiwicGpheFJlbG9hZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvdmVySW1nQ29udGFpbmVyIiwiY292ZXJJbWciLCJjb3ZlckJveCIsImNvdmVyVmlldyIsImVsZSIsInNjcm9sbERpcmVjdGlvbiIsInRvcCIsIkNvbG9yIiwiciIsImciLCJiIiwic2V0IiwidG9TdHJpbmciLCJNYXRoIiwicm91bmQiLCJjbGFtcCIsImh1ZVJvdGF0ZSIsImFuZ2xlIiwiUEkiLCJzaW4iLCJjb3MiLCJtdWx0aXBseSIsImdyYXlzY2FsZSIsInZhbHVlIiwic2VwaWEiLCJzYXR1cmF0ZSIsIm1hdHJpeCIsIm5ld1IiLCJuZXdHIiwibmV3QiIsImJyaWdodG5lc3MiLCJsaW5lYXIiLCJjb250cmFzdCIsInNsb3BlIiwiaW50ZXJjZXB0IiwiaW52ZXJ0IiwiaHNsIiwibWF4IiwibWluIiwiaCIsInMiLCJsIiwiZCIsIlNvbHZlciIsInRhcmdldCIsImJhc2VDb2xvciIsInRhcmdldEhTTCIsInJldXNlZENvbG9yIiwic29sdmUiLCJyZXN1bHQiLCJzb2x2ZU5hcnJvdyIsInNvbHZlV2lkZSIsInZhbHVlcyIsImxvc3MiLCJjc3MiLCJBIiwiYyIsImEiLCJiZXN0IiwiSW5maW5pdHkiLCJpbml0aWFsIiwic3BzYSIsIndpZGUiLCJBMSIsIml0ZXJzIiwiYWxwaGEiLCJnYW1tYSIsImJlc3RMb3NzIiwiZGVsdGFzIiwiQXJyYXkiLCJoaWdoQXJncyIsImxvd0FyZ3MiLCJrIiwiY2siLCJwb3ciLCJyYW5kb20iLCJsb3NzRGlmZiIsImFrIiwiZml4Iiwic2xpY2UiLCJpZHgiLCJmaWx0ZXJzIiwiY29sb3IiLCJjb2xvckhTTCIsImFicyIsImZtdCIsIm11bHRpcGxpZXIiLCJoZXhUb1JnYiIsImhleCIsInNob3J0aGFuZFJlZ2V4IiwicmVwbGFjZSIsIm0iLCJleGVjIiwicGFyc2VJbnQiLCJyZ2IiLCJsZW5ndGgiLCJzb2x2ZXIiLCJsb3NzTXNnIiwic2Nyb2xsQWN0aW9uIiwieCIsInVuZGVmaW5lZCIsInkiLCJkaXJlY3Rpb24iLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiZGlmZlgiLCJkaWZmWSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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QUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkhBQTZILG1EQUFtRCxFQUFFO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUM7QUFDTTtBQUNvQjtBQUMzRDtBQUNBO0FBQ0EsSUFBSSwrQ0FBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUUsa0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLGtEQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxD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QUFZLENBQUNDLENBQWIsSUFBa0JDLFNBQXRCLEVBQWlDO0FBQzdCRixnQkFBWSxDQUFDQyxDQUFiLEdBQWlCNUgsTUFBTSxDQUFDZ0ksV0FBeEI7QUFDQUwsZ0JBQVksQ0FBQ0csQ0FBYixHQUFpQjlILE1BQU0sQ0FBQ2lJLFdBQXhCO0FBQ0g7O0FBQ0QsTUFBSUMsS0FBSyxHQUFHUCxZQUFZLENBQUNDLENBQWIsR0FBaUI1SCxNQUFNLENBQUNnSSxXQUFwQztBQUNBLE1BQUlHLEtBQUssR0FBR1IsWUFBWSxDQUFDRyxDQUFiLEdBQWlCOUgsTUFBTSxDQUFDaUksV0FBcEM7O0FBQ0EsTUFBSUYsU0FBUyxJQUFJLEdBQWIsSUFBb0JBLFNBQVMsSUFBSSxHQUFyQyxFQUEyQztBQUN2QyxRQUFJRyxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1hQLGtCQUFZLENBQUN4RCxDQUFiLEdBQWlCLE9BQWpCO0FBQ0gsS0FGRCxNQUVPLElBQUkrRCxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2xCUCxrQkFBWSxDQUFDeEQsQ0FBYixHQUFpQixNQUFqQjtBQUNIO0FBQ0osR0FORCxNQU1PO0FBQ0gsUUFBSWdFLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWFIsa0JBQVksQ0FBQ3hELENBQWIsR0FBaUIsTUFBakI7QUFDSCxLQUZELE1BRU8sSUFBSWdFLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDbEJSLGtCQUFZLENBQUN4RCxDQUFiLEdBQWlCLElBQWpCO0FBQ0g7QUFDSjs7QUFDRHdELGNBQVksQ0FBQ0MsQ0FBYixHQUFpQjVILE1BQU0sQ0FBQ2dJLFdBQXhCO0FBQ0FMLGNBQVksQ0FBQ0csQ0FBYixHQUFpQjlILE1BQU0sQ0FBQ2lJLFdBQXhCO0FBQ0EsU0FBT04sWUFBWSxDQUFDeEQsQ0FBcEI7QUFDSCxDIiwiZmlsZSI6Ii4vanMvYnVuZGxlXzA3NGEzZDkxMzYwZDEyMDM2NDJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0NvbXBvbmVudChyb290LCBmb3VuZGF0aW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgdHNsaWJfMS5fX3NwcmVhZChhcmdzKSk7XG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAgICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgICB9XG4gICAgTURDQ29tcG9uZW50LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgICAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAgICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAgICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgICAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbih7fSkpO1xuICAgIH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG1ldGhvZCBwYXJhbSBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzOyBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHVuaXQgdGVzdGVkICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIF9hcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAgICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAgICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgICAgICAvLyBjb21wb25lbnQuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAgICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAgICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUudW5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAgICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSkge1xuICAgICAgICBpZiAoc2hvdWxkQnViYmxlID09PSB2b2lkIDApIHsgc2hvdWxkQnViYmxlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGV2dDtcbiAgICAgICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IE1EQ0NvbXBvbmVudCB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0XG4gKiBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c1Bhc3NpdmVfO1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChnbG9iYWxPYmogPT09IHZvaWQgMCkgeyBnbG9iYWxPYmogPSB3aW5kb3c7IH1cbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWRfMSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sIHtcbiAgICAgICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZF8xO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHkgY2Fubm90IHRocm93IGVycm9yIGR1ZSB0byB0ZXN0cy4gdHNsaW50IGFsc28gZGlzYWJsZXMgY29uc29sZS5sb2cuXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZF8xO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlXyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDRmxvYXRpbmdMYWJlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENGbG9hdGluZ0xhYmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0Zsb2F0aW5nTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDRmxvYXRpbmdMYWJlbC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDRmxvYXRpbmdMYWJlbChyb290KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0eWxlcyB0aGUgbGFiZWwgdG8gcHJvZHVjZSB0aGUgbGFiZWwgc2hha2UgZm9yIGVycm9ycy5cbiAgICAgKiBAcGFyYW0gc2hvdWxkU2hha2UgSWYgdHJ1ZSwgc2hha2VzIHRoZSBsYWJlbCBieSBhZGRpbmcgYSBDU1MgY2xhc3M7IG90aGVyd2lzZSwgc3RvcHMgc2hha2luZyBieSByZW1vdmluZyB0aGUgY2xhc3MuXG4gICAgICovXG4gICAgTURDRmxvYXRpbmdMYWJlbC5wcm90b3R5cGUuc2hha2UgPSBmdW5jdGlvbiAoc2hvdWxkU2hha2UpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zaGFrZShzaG91bGRTaGFrZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIGZsb2F0L2RvY2suXG4gICAgICogQHBhcmFtIHNob3VsZEZsb2F0IElmIHRydWUsIGZsb2F0cyB0aGUgbGFiZWwgYnkgYWRkaW5nIGEgQ1NTIGNsYXNzOyBvdGhlcndpc2UsIGRvY2tzIGl0IGJ5IHJlbW92aW5nIHRoZSBjbGFzcy5cbiAgICAgKi9cbiAgICBNRENGbG9hdGluZ0xhYmVsLnByb3RvdHlwZS5mbG9hdCA9IGZ1bmN0aW9uIChzaG91bGRGbG9hdCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmZsb2F0KHNob3VsZEZsb2F0KTtcbiAgICB9O1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWwucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5nZXRXaWR0aCgpO1xuICAgIH07XG4gICAgTURDRmxvYXRpbmdMYWJlbC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGdldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5zY3JvbGxXaWR0aDsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLnVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0Zsb2F0aW5nTGFiZWw7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDRmxvYXRpbmdMYWJlbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIExBQkVMX0ZMT0FUX0FCT1ZFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZScsXG4gICAgTEFCRUxfU0hBS0U6ICdtZGMtZmxvYXRpbmctbGFiZWwtLXNoYWtlJyxcbiAgICBST09UOiAnbWRjLWZsb2F0aW5nLWxhYmVsJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVNoYWtlQW5pbWF0aW9uRW5kXygpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdhbmltYXRpb25lbmQnLCB0aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAgICovXG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5nZXRXaWR0aCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBwcm9kdWNlIGEgc2hha2UgYW5pbWF0aW9uIHRvIGluZGljYXRlIGFuIGVycm9yLlxuICAgICAqIEBwYXJhbSBzaG91bGRTaGFrZSBJZiB0cnVlLCBhZGRzIHRoZSBzaGFrZSBDU1MgY2xhc3M7IG90aGVyd2lzZSwgcmVtb3ZlcyBzaGFrZSBjbGFzcy5cbiAgICAgKi9cbiAgICBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5wcm90b3R5cGUuc2hha2UgPSBmdW5jdGlvbiAoc2hvdWxkU2hha2UpIHtcbiAgICAgICAgdmFyIExBQkVMX1NIQUtFID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MQUJFTF9TSEFLRTtcbiAgICAgICAgaWYgKHNob3VsZFNoYWtlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKExBQkVMX1NIQUtFKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIGZsb2F0IG9yIGRvY2suXG4gICAgICogQHBhcmFtIHNob3VsZEZsb2F0IElmIHRydWUsIGFkZHMgdGhlIGZsb2F0IENTUyBjbGFzczsgb3RoZXJ3aXNlLCByZW1vdmVzIGZsb2F0IGFuZCBzaGFrZSBjbGFzc2VzIHRvIGRvY2sgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5mbG9hdCA9IGZ1bmN0aW9uIChzaG91bGRGbG9hdCkge1xuICAgICAgICB2YXIgX2EgPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBMQUJFTF9GTE9BVF9BQk9WRSA9IF9hLkxBQkVMX0ZMT0FUX0FCT1ZFLCBMQUJFTF9TSEFLRSA9IF9hLkxBQkVMX1NIQUtFO1xuICAgICAgICBpZiAoc2hvdWxkRmxvYXQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTEFCRUxfRkxPQVRfQUJPVkUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9GTE9BVF9BQk9WRSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVNoYWtlQW5pbWF0aW9uRW5kXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIExBQkVMX1NIQUtFID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MQUJFTF9TSEFLRTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENMaW5lUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDTGluZVJpcHBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENMaW5lUmlwcGxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0xpbmVSaXBwbGUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDTGluZVJpcHBsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDTGluZVJpcHBsZShyb290KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGVcbiAgICAgKi9cbiAgICBNRENMaW5lUmlwcGxlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZXMgdGhlIGxpbmUgcmlwcGxlXG4gICAgICovXG4gICAgTURDTGluZVJpcHBsZS5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0cmFuc2Zvcm0gb3JpZ2luIGdpdmVuIGEgdXNlcidzIGNsaWNrIGxvY2F0aW9uLlxuICAgICAqIFRoZSBgcmlwcGxlQ2VudGVyYCBpcyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSBtaWRkbGUgb2YgdGhlIHJpcHBsZS5cbiAgICAgKi9cbiAgICBNRENMaW5lUmlwcGxlLnByb3RvdHlwZS5zZXRSaXBwbGVDZW50ZXIgPSBmdW5jdGlvbiAoeENvb3JkaW5hdGUpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRSaXBwbGVDZW50ZXIoeENvb3JkaW5hdGUpO1xuICAgIH07XG4gICAgTURDTGluZVJpcHBsZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAocHJvcGVydHlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHlOYW1lLCB2YWx1ZSk7IH0sXG4gICAgICAgICAgICByZWdpc3RlckV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy51bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENMaW5lUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENMaW5lUmlwcGxlO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ0xpbmVSaXBwbGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIExJTkVfUklQUExFX0FDVElWRTogJ21kYy1saW5lLXJpcHBsZS0tYWN0aXZlJyxcbiAgICBMSU5FX1JJUFBMRV9ERUFDVElWQVRJTkc6ICdtZGMtbGluZS1yaXBwbGUtLWRlYWN0aXZhdGluZycsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTGluZVJpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTGluZVJpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTGluZVJpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyA9IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGluZVJpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ0xpbmVSaXBwbGVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBzZXRTdHlsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDTGluZVJpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9BQ1RJVkUpO1xuICAgIH07XG4gICAgTURDTGluZVJpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFJpcHBsZUNlbnRlciA9IGZ1bmN0aW9uICh4Q29vcmRpbmF0ZSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlKCd0cmFuc2Zvcm0tb3JpZ2luJywgeENvb3JkaW5hdGUgKyBcInB4IGNlbnRlclwiKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgbGluZSByaXBwbGUgdG8gYmUgZWl0aGVyIHRyYW5zcGFyZW50IG9yIG9wYXF1ZVxuICAgICAgICAvLyBiZWZvcmUgZW1pdHRpbmcgdGhlIGFuaW1hdGlvbiBlbmQgZXZlbnRcbiAgICAgICAgdmFyIGlzRGVhY3RpdmF0aW5nID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gICAgICAgIGlmIChldnQucHJvcGVydHlOYW1lID09PSAnb3BhY2l0eScpIHtcbiAgICAgICAgICAgIGlmIChpc0RlYWN0aXZhdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDTGluZVJpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTGluZVJpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ05vdGNoZWRPdXRsaW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ05vdGNoZWRPdXRsaW5lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ05vdGNoZWRPdXRsaW5lKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ05vdGNoZWRPdXRsaW5lLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENOb3RjaGVkT3V0bGluZShyb290KTtcbiAgICB9O1xuICAgIE1EQ05vdGNoZWRPdXRsaW5lLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm90Y2hFbGVtZW50XyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLk5PVENIX0VMRU1FTlRfU0VMRUNUT1IpO1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5ST09UKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xuICAgICAgICAgICAgdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuT1VUTElORV9VUEdSQURFRCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5OT19MQUJFTCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgY2xhc3NlcyBhbmQgc3R5bGVzIHRvIG9wZW4gdGhlIG5vdGNoIHRvIHRoZSBzcGVjaWZpZWQgd2lkdGguXG4gICAgICogQHBhcmFtIG5vdGNoV2lkdGggVGhlIG5vdGNoIHdpZHRoIGluIHRoZSBvdXRsaW5lLlxuICAgICAqL1xuICAgIE1EQ05vdGNoZWRPdXRsaW5lLnByb3RvdHlwZS5ub3RjaCA9IGZ1bmN0aW9uIChub3RjaFdpZHRoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubm90Y2gobm90Y2hXaWR0aCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGNsYXNzZXMgYW5kIHN0eWxlcyB0byBjbG9zZSB0aGUgbm90Y2guXG4gICAgICovXG4gICAgTURDTm90Y2hlZE91dGxpbmUucHJvdG90eXBlLmNsb3NlTm90Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uY2xvc2VOb3RjaCgpO1xuICAgIH07XG4gICAgTURDTm90Y2hlZE91dGxpbmUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBzZXROb3RjaFdpZHRoUHJvcGVydHk6IGZ1bmN0aW9uICh3aWR0aCkgeyByZXR1cm4gX3RoaXMubm90Y2hFbGVtZW50Xy5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCB3aWR0aCArICdweCcpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlTm90Y2hXaWR0aFByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5ub3RjaEVsZW1lbnRfLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENOb3RjaGVkT3V0bGluZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENOb3RjaGVkT3V0bGluZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHN0cmluZ3MgPSB7XG4gICAgTk9UQ0hfRUxFTUVOVF9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lX19ub3RjaCcsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgLy8gVGhpcyBzaG91bGQgc3RheSBpbiBzeW5jIHdpdGggJG1kYy1ub3RjaGVkLW91dGxpbmUtcGFkZGluZyAqIDIuXG4gICAgTk9UQ0hfRUxFTUVOVF9QQURESU5HOiA4LFxufTtcbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIE5PX0xBQkVMOiAnbWRjLW5vdGNoZWQtb3V0bGluZS0tbm8tbGFiZWwnLFxuICAgIE9VVExJTkVfTk9UQ0hFRDogJ21kYy1ub3RjaGVkLW91dGxpbmUtLW5vdGNoZWQnLFxuICAgIE9VVExJTkVfVVBHUkFERUQ6ICdtZGMtbm90Y2hlZC1vdXRsaW5lLS11cGdyYWRlZCcsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXROb3RjaFdpZHRoUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVOb3RjaFdpZHRoUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBvdXRsaW5lIG5vdGNoZWQgc2VsZWN0b3IgYW5kIHVwZGF0ZXMgdGhlIG5vdGNoIHdpZHRoIGNhbGN1bGF0ZWQgYmFzZWQgb2ZmIG9mIG5vdGNoV2lkdGguXG4gICAgICovXG4gICAgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLnByb3RvdHlwZS5ub3RjaCA9IGZ1bmN0aW9uIChub3RjaFdpZHRoKSB7XG4gICAgICAgIHZhciBPVVRMSU5FX05PVENIRUQgPSBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PVVRMSU5FX05PVENIRUQ7XG4gICAgICAgIGlmIChub3RjaFdpZHRoID4gMCkge1xuICAgICAgICAgICAgbm90Y2hXaWR0aCArPSBudW1iZXJzLk5PVENIX0VMRU1FTlRfUEFERElORzsgLy8gQWRkIHBhZGRpbmcgZnJvbSBsZWZ0L3JpZ2h0LlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Tm90Y2hXaWR0aFByb3BlcnR5KG5vdGNoV2lkdGgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9VVExJTkVfTk9UQ0hFRCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIG5vdGNoZWQgb3V0bGluZSBzZWxlY3RvciB0byBjbG9zZSB0aGUgbm90Y2ggaW4gdGhlIG91dGxpbmUuXG4gICAgICovXG4gICAgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLnByb3RvdHlwZS5jbG9zZU5vdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgT1VUTElORV9OT1RDSEVEID0gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1VUTElORV9OT1RDSEVEO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE9VVExJTkVfTk9UQ0hFRCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlTm90Y2hXaWR0aFByb3BlcnR5KCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhcHBseVBhc3NpdmUgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL2V2ZW50cyc7XG5pbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5pbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBNRENSaXBwbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDUmlwcGxlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0geyBpc1VuYm91bmRlZDogdW5kZWZpbmVkIH07IH1cbiAgICAgICAgdmFyIHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgICAgICBpZiAob3B0cy5pc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gb3B0cy5pc1VuYm91bmRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH07XG4gICAgTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyk7IH0sXG4gICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCk7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH0pOyB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGluc3RhbmNlLnJvb3RfLCAnOmFjdGl2ZScpOyB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oaW5zdGFuY2UuZGlzYWJsZWQpOyB9LFxuICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oaW5zdGFuY2UudW5ib3VuZGVkKTsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAodmFyTmFtZSwgdmFsdWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKTsgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGUucHJvdG90eXBlLCBcInVuYm91bmRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdF87XG4gICAgICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiByb290LmRhdGFzZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICAgKi9cbiAgICBNRENSaXBwbGUucHJvdG90eXBlLnNldFVuYm91bmRlZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gICAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICAgIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICAgIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICAgIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbiAgICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gICAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gICAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gICAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LFxuICAgIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLFxuICAgIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gICAgUEFERElORzogMTAsXG4gICAgVEFQX0RFTEFZX01TOiAzMDAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzEgPSBfYS5ST09ULCBVTkJPVU5ERURfMSA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVF8xKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERURfMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1RfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV2dCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlXyhldnQpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VW5ib3VuZGVkID0gZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICB2YXIgVU5CT1VOREVEID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLlVOQk9VTkRFRDtcbiAgICAgICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnN1cHBvcnRzUHJlc3NSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByaXBwbGVTdHJpbmdzID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJpcHBsZVN0cmluZ3MpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgIHZhciBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgICAgICB2YXIgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBldnQgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBldnQudHlwZTtcbiAgICAgICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZXZ0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBldnQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGV2dCAhPT0gdW5kZWZpbmVkICYmIChldnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyk7XG4gICAgICAgIHZhciBoYXNBY3RpdmF0ZWRDaGlsZCA9IGV2dCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZUFjdGl2YXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfRU5EO1xuICAgICAgICB2YXIgX2IgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEZHX0RFQUNUSVZBVElPTiA9IF9iLkZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTiA9IF9iLkZHX0FDVElWQVRJT047XG4gICAgICAgIHZhciBERUFDVElWQVRJT05fVElNRU9VVF9NUyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5ERUFDVElWQVRJT05fVElNRU9VVF9NUztcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgICAgIHZhciB0cmFuc2xhdGVFbmQgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKTsgfSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBhY3RpdmF0aW9uRXZlbnQgPSBfYS5hY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlcjtcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQ7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoYWN0aXZhdGlvbkV2ZW50LCB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHN0YXJ0UG9pbnQ6IHN0YXJ0UG9pbnQsIGVuZFBvaW50OiBlbmRQb2ludCB9O1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAgICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgICAgIHZhciBGR19ERUFDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGhhc0RlYWN0aXZhdGlvblVYUnVuID0gX2EuaGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkID0gX2EuaXNBY3RpdmF0ZWQ7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlc2V0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZDsgfSwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0ZSA9IHRzbGliXzEuX19hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZURlYWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfYS53YXNFbGVtZW50TWFkZUFjdGl2ZTtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB2YXIgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG4gICAgICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAgICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAgICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgICAgICB2YXIgZ2V0Qm91bmRlZFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KF90aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyhfdGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgICAgICB0aGlzLmZnU2NhbGVfID0gXCJcIiArIHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVMYXlvdXRDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfU0laRSA9IF9hLlZBUl9GR19TSVpFLCBWQVJfTEVGVCA9IF9hLlZBUl9MRUZULCBWQVJfVE9QID0gX2EuVkFSX1RPUCwgVkFSX0ZHX1NDQUxFID0gX2EuVkFSX0ZHX1NDQUxFO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCB0aGlzLmluaXRpYWxTaXplXyArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCB0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdCArIFwicHhcIik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy50b3AgKyBcInB4XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgdXRpbCB9O1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvXG4gKiBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICAgIC8vIEFwcGVuZCB0byBoZWFkIGluc3RlYWQgb2YgYm9keSBiZWNhdXNlIHRoaXMgc2NyaXB0IG1pZ2h0IGJlIGludm9rZWQgaW4gdGhlXG4gICAgLy8gaGVhZCwgaW4gd2hpY2ggY2FzZSB0aGUgYm9keSBkb2Vzbid0IGV4aXN0IHlldC4gVGhlIHByb2JlIHdvcmtzIGVpdGhlciB3YXkuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIHZhciBDU1MgPSB3aW5kb3dPYmouQ1NTO1xuICAgIHZhciBzdXBwb3J0c0Nzc1ZhcnMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IENTUyAmJiB0eXBlb2YgQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICAgIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IENTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICAgIHZhciB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgICAgIENTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJykpO1xuICAgIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFycztcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlci5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlcihyb290KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyLnByb3RvdHlwZSwgXCJmb3VuZGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlci5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlcjtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBST09UOiAnbWRjLXRleHQtZmllbGQtY2hhcmFjdGVyLWNvdW50ZXInLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIFJPT1RfU0VMRUNUT1I6IFwiLlwiICsgY3NzQ2xhc3Nlcy5ST09ULFxufTtcbmV4cG9ydCB7IHN0cmluZ3MsIGNzc0NsYXNzZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q291bnRlclZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnRMZW5ndGgsIG1heExlbmd0aCkge1xuICAgICAgICBjdXJyZW50TGVuZ3RoID0gTWF0aC5taW4oY3VycmVudExlbmd0aCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50KGN1cnJlbnRMZW5ndGggKyBcIiAvIFwiICsgbWF4TGVuZ3RoKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuZXhwb3J0IHsgY3NzQ2xhc3NlcyBhcyBjaGFyYWN0ZXJDb3VudENzc0NsYXNzZXMsIHN0cmluZ3MgYXMgY2hhcmFjdGVyQ291bnRTdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9kb20vZXZlbnRzJztcbmltcG9ydCAqIGFzIHBvbnlmaWxsIGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHsgTURDRmxvYXRpbmdMYWJlbCB9IGZyb20gJ0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDTGluZVJpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9saW5lLXJpcHBsZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDTm90Y2hlZE91dGxpbmUgfSBmcm9tICdAbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENSaXBwbGUgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIsIH0gZnJvbSAnLi9jaGFyYWN0ZXItY291bnRlci9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24gfSBmcm9tICcuL2NoYXJhY3Rlci1jb3VudGVyL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkSGVscGVyVGV4dCwgfSBmcm9tICcuL2hlbHBlci10ZXh0L2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiB9IGZyb20gJy4vaGVscGVyLXRleHQvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRJY29uIH0gZnJvbSAnLi9pY29uL2NvbXBvbmVudCc7XG52YXIgTURDVGV4dEZpZWxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGV4dEZpZWxkLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGQocm9vdCk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocmlwcGxlRmFjdG9yeSwgbGluZVJpcHBsZUZhY3RvcnksIGhlbHBlclRleHRGYWN0b3J5LCBjaGFyYWN0ZXJDb3VudGVyRmFjdG9yeSwgaWNvbkZhY3RvcnksIGxhYmVsRmFjdG9yeSwgb3V0bGluZUZhY3RvcnkpIHtcbiAgICAgICAgaWYgKHJpcHBsZUZhY3RvcnkgPT09IHZvaWQgMCkgeyByaXBwbGVGYWN0b3J5ID0gZnVuY3Rpb24gKGVsLCBmb3VuZGF0aW9uKSB7IHJldHVybiBuZXcgTURDUmlwcGxlKGVsLCBmb3VuZGF0aW9uKTsgfTsgfVxuICAgICAgICBpZiAobGluZVJpcHBsZUZhY3RvcnkgPT09IHZvaWQgMCkgeyBsaW5lUmlwcGxlRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ0xpbmVSaXBwbGUoZWwpOyB9OyB9XG4gICAgICAgIGlmIChoZWxwZXJUZXh0RmFjdG9yeSA9PT0gdm9pZCAwKSB7IGhlbHBlclRleHRGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDVGV4dEZpZWxkSGVscGVyVGV4dChlbCk7IH07IH1cbiAgICAgICAgaWYgKGNoYXJhY3RlckNvdW50ZXJGYWN0b3J5ID09PSB2b2lkIDApIHsgY2hhcmFjdGVyQ291bnRlckZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyKGVsKTsgfTsgfVxuICAgICAgICBpZiAoaWNvbkZhY3RvcnkgPT09IHZvaWQgMCkgeyBpY29uRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEljb24oZWwpOyB9OyB9XG4gICAgICAgIGlmIChsYWJlbEZhY3RvcnkgPT09IHZvaWQgMCkgeyBsYWJlbEZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENGbG9hdGluZ0xhYmVsKGVsKTsgfTsgfVxuICAgICAgICBpZiAob3V0bGluZUZhY3RvcnkgPT09IHZvaWQgMCkgeyBvdXRsaW5lRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ05vdGNoZWRPdXRsaW5lKGVsKTsgfTsgfVxuICAgICAgICB0aGlzLmlucHV0XyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLklOUFVUX1NFTEVDVE9SKTtcbiAgICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxBQkVMX1NFTEVDVE9SKTtcbiAgICAgICAgdGhpcy5sYWJlbF8gPSBsYWJlbEVsZW1lbnQgPyBsYWJlbEZhY3RvcnkobGFiZWxFbGVtZW50KSA6IG51bGw7XG4gICAgICAgIHZhciBsaW5lUmlwcGxlRWxlbWVudCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxJTkVfUklQUExFX1NFTEVDVE9SKTtcbiAgICAgICAgdGhpcy5saW5lUmlwcGxlXyA9IGxpbmVSaXBwbGVFbGVtZW50ID8gbGluZVJpcHBsZUZhY3RvcnkobGluZVJpcHBsZUVsZW1lbnQpIDogbnVsbDtcbiAgICAgICAgdmFyIG91dGxpbmVFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuT1VUTElORV9TRUxFQ1RPUik7XG4gICAgICAgIHRoaXMub3V0bGluZV8gPSBvdXRsaW5lRWxlbWVudCA/IG91dGxpbmVGYWN0b3J5KG91dGxpbmVFbGVtZW50KSA6IG51bGw7XG4gICAgICAgIC8vIEhlbHBlciB0ZXh0XG4gICAgICAgIHZhciBoZWxwZXJUZXh0U3RyaW5ncyA9IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgICAgIHZhciBuZXh0RWxlbWVudFNpYmxpbmcgPSB0aGlzLnJvb3RfLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgdmFyIGhhc0hlbHBlckxpbmUgPSAobmV4dEVsZW1lbnRTaWJsaW5nICYmIG5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5IRUxQRVJfTElORSkpO1xuICAgICAgICB2YXIgaGVscGVyVGV4dEVsID0gaGFzSGVscGVyTGluZSAmJiBuZXh0RWxlbWVudFNpYmxpbmcgJiYgbmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoaGVscGVyVGV4dFN0cmluZ3MuUk9PVF9TRUxFQ1RPUik7XG4gICAgICAgIHRoaXMuaGVscGVyVGV4dF8gPSBoZWxwZXJUZXh0RWwgPyBoZWxwZXJUZXh0RmFjdG9yeShoZWxwZXJUZXh0RWwpIDogbnVsbDtcbiAgICAgICAgLy8gQ2hhcmFjdGVyIGNvdW50ZXJcbiAgICAgICAgdmFyIGNoYXJhY3RlckNvdW50ZXJTdHJpbmdzID0gTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGNoYXJhY3RlckNvdW50ZXJFbCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihjaGFyYWN0ZXJDb3VudGVyU3RyaW5ncy5ST09UX1NFTEVDVE9SKTtcbiAgICAgICAgLy8gSWYgY2hhcmFjdGVyIGNvdW50ZXIgaXMgbm90IGZvdW5kIGluIHJvb3QgZWxlbWVudCBzZWFyY2ggaW4gc2libGluZyBlbGVtZW50LlxuICAgICAgICBpZiAoIWNoYXJhY3RlckNvdW50ZXJFbCAmJiBoYXNIZWxwZXJMaW5lICYmIG5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRlckVsID0gbmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoY2hhcmFjdGVyQ291bnRlclN0cmluZ3MuUk9PVF9TRUxFQ1RPUik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudGVyXyA9IGNoYXJhY3RlckNvdW50ZXJFbCA/IGNoYXJhY3RlckNvdW50ZXJGYWN0b3J5KGNoYXJhY3RlckNvdW50ZXJFbCkgOiBudWxsO1xuICAgICAgICB0aGlzLmxlYWRpbmdJY29uXyA9IG51bGw7XG4gICAgICAgIHRoaXMudHJhaWxpbmdJY29uXyA9IG51bGw7XG4gICAgICAgIHZhciBpY29uRWxlbWVudHMgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5JQ09OX1NFTEVDVE9SKTtcbiAgICAgICAgaWYgKGljb25FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoaWNvbkVsZW1lbnRzLmxlbmd0aCA+IDEpIHsgLy8gSGFzIGJvdGggaWNvbnMuXG4gICAgICAgICAgICAgICAgdGhpcy5sZWFkaW5nSWNvbl8gPSBpY29uRmFjdG9yeShpY29uRWxlbWVudHNbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhaWxpbmdJY29uXyA9IGljb25GYWN0b3J5KGljb25FbGVtZW50c1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5XSVRIX0xFQURJTkdfSUNPTikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWFkaW5nSWNvbl8gPSBpY29uRmFjdG9yeShpY29uRWxlbWVudHNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFpbGluZ0ljb25fID0gaWNvbkZhY3RvcnkoaWNvbkVsZW1lbnRzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaXBwbGUgPSB0aGlzLmNyZWF0ZVJpcHBsZV8ocmlwcGxlRmFjdG9yeSk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJpcHBsZSkge1xuICAgICAgICAgICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVSaXBwbGVfLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyQ291bnRlcl8pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyQ291bnRlcl8uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlYWRpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy5sZWFkaW5nSWNvbl8uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFiZWxfKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsXy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3V0bGluZV8pIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIFRleHQgRmllbGQncyBpbnRlcm5hbCBzdGF0ZSBiYXNlZCBvbiB0aGUgZW52aXJvbm1lbnQnc1xuICAgICAqIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5pbnB1dF8uZGlzYWJsZWQ7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0VmFsdWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbnB1dC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmlzRGlzYWJsZWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBkaXNhYmxlZCBTZXRzIHRoZSBUZXh0IEZpZWxkIGRpc2FibGVkIG9yIGVuYWJsZWQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcInZhbGlkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc1ZhbGlkKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gdmFsaWQgU2V0cyB0aGUgVGV4dCBGaWVsZCB2YWxpZCBvciBpbnZhbGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VmFsaWQodmFsaWQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJyZXF1aXJlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRfLnJlcXVpcmVkO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHJlcXVpcmVkIFNldHMgdGhlIFRleHQgRmllbGQgdG8gcmVxdWlyZWQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8ucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwicGF0dGVyblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRfLnBhdHRlcm47XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gcGF0dGVybiBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgdmFsaWRhdGlvbiBwYXR0ZXJuLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8ucGF0dGVybiA9IHBhdHRlcm47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcIm1pbkxlbmd0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRfLm1pbkxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBtaW5MZW5ndGggU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIG1pbkxlbmd0aC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG1pbkxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8ubWluTGVuZ3RoID0gbWluTGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJtYXhMZW5ndGhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0Xy5tYXhMZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gbWF4TGVuZ3RoIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBtYXhMZW5ndGguXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIENocm9tZSB0aHJvd3MgZXhjZXB0aW9uIGlmIG1heExlbmd0aCBpcyBzZXQgdG8gYSB2YWx1ZSBsZXNzIHRoYW4gemVyb1xuICAgICAgICAgICAgaWYgKG1heExlbmd0aCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Xy5yZW1vdmVBdHRyaWJ1dGUoJ21heExlbmd0aCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dF8ubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJtaW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0Xy5taW47XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gbWluIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBtaW4uXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChtaW4pIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLm1pbiA9IG1pbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwibWF4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dF8ubWF4O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIG1heCBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgbWF4LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobWF4KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5tYXggPSBtYXg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcInN0ZXBcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0Xy5zdGVwO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHN0ZXAgU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIHN0ZXAuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5zdGVwID0gc3RlcDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwiaGVscGVyVGV4dENvbnRlbnRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgaGVscGVyIHRleHQgZWxlbWVudCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRIZWxwZXJUZXh0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwibGVhZGluZ0ljb25BcmlhTGFiZWxcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYXJpYSBsYWJlbCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0TGVhZGluZ0ljb25BcmlhTGFiZWwobGFiZWwpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJsZWFkaW5nSWNvbkNvbnRlbnRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBsZWFkaW5nIGljb24uXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldExlYWRpbmdJY29uQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwidHJhaWxpbmdJY29uQXJpYUxhYmVsXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIHRyYWlsaW5nIGljb24uXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRUcmFpbGluZ0ljb25BcmlhTGFiZWwobGFiZWwpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJ0cmFpbGluZ0ljb25Db250ZW50XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgdHJhaWxpbmcgaWNvbi5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VHJhaWxpbmdJY29uQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwidXNlTmF0aXZlVmFsaWRhdGlvblwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSB1c2Ugb2YgbmF0aXZlIHZhbGlkYXRpb24uIFVzZSB0aGlzIGZvciBjdXN0b20gdmFsaWRhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHVzZU5hdGl2ZVZhbGlkYXRpb24gU2V0IHRoaXMgdG8gZmFsc2UgdG8gaWdub3JlIG5hdGl2ZSBpbnB1dCB2YWxpZGF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodXNlTmF0aXZlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVc2VOYXRpdmVWYWxpZGF0aW9uKHVzZU5hdGl2ZVZhbGlkYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBGb2N1c2VzIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRfLmZvY3VzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWNvbXB1dGVzIHRoZSBvdXRsaW5lIFNWRyBwYXRoIGZvciB0aGUgb3V0bGluZSBlbGVtZW50LlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3Blbk5vdGNoID0gdGhpcy5mb3VuZGF0aW9uXy5zaG91bGRGbG9hdDtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5ub3RjaE91dGxpbmUob3Blbk5vdGNoKTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCB0aGlzLmdldFJvb3RBZGFwdGVyTWV0aG9kc18oKSwgdGhpcy5nZXRJbnB1dEFkYXB0ZXJNZXRob2RzXygpLCB0aGlzLmdldExhYmVsQWRhcHRlck1ldGhvZHNfKCksIHRoaXMuZ2V0TGluZVJpcHBsZUFkYXB0ZXJNZXRob2RzXygpLCB0aGlzLmdldE91dGxpbmVBZGFwdGVyTWV0aG9kc18oKSk7XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkRm91bmRhdGlvbihhZGFwdGVyLCB0aGlzLmdldEZvdW5kYXRpb25NYXBfKCkpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5nZXRSb290QWRhcHRlck1ldGhvZHNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy51bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGdldEF0dHJpYnV0ZXNMaXN0ID0gZnVuY3Rpb24gKG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG11dGF0aW9uc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG11dGF0aW9uKSB7IHJldHVybiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkgeyByZXR1cm4gYXR0cmlidXRlTmFtZTsgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zTGlzdCkgeyByZXR1cm4gaGFuZGxlcihnZXRBdHRyaWJ1dGVzTGlzdChtdXRhdGlvbnNMaXN0KSk7IH0pO1xuICAgICAgICAgICAgICAgIHZhciBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUgfTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKF90aGlzLmlucHV0XywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZ2V0SW5wdXRBZGFwdGVyTWV0aG9kc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXROYXRpdmVJbnB1dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaW5wdXRfOyB9LFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5pbnB1dF87IH0sXG4gICAgICAgICAgICByZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5pbnB1dF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5nZXRMYWJlbEFkYXB0ZXJNZXRob2RzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZsb2F0TGFiZWw6IGZ1bmN0aW9uIChzaG91bGRGbG9hdCkgeyByZXR1cm4gX3RoaXMubGFiZWxfICYmIF90aGlzLmxhYmVsXy5mbG9hdChzaG91bGRGbG9hdCk7IH0sXG4gICAgICAgICAgICBnZXRMYWJlbFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYWJlbF8gPyBfdGhpcy5sYWJlbF8uZ2V0V2lkdGgoKSA6IDA7IH0sXG4gICAgICAgICAgICBoYXNMYWJlbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihfdGhpcy5sYWJlbF8pOyB9LFxuICAgICAgICAgICAgc2hha2VMYWJlbDogZnVuY3Rpb24gKHNob3VsZFNoYWtlKSB7IHJldHVybiBfdGhpcy5sYWJlbF8gJiYgX3RoaXMubGFiZWxfLnNoYWtlKHNob3VsZFNoYWtlKTsgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZ2V0TGluZVJpcHBsZUFkYXB0ZXJNZXRob2RzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRlTGluZVJpcHBsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5saW5lUmlwcGxlXykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5saW5lUmlwcGxlXy5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWFjdGl2YXRlTGluZVJpcHBsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5saW5lUmlwcGxlXykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5saW5lUmlwcGxlXy5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uIChub3JtYWxpemVkWCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5saW5lUmlwcGxlXykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5saW5lUmlwcGxlXy5zZXRSaXBwbGVDZW50ZXIobm9ybWFsaXplZFgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmdldE91dGxpbmVBZGFwdGVyTWV0aG9kc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbG9zZU91dGxpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm91dGxpbmVfICYmIF90aGlzLm91dGxpbmVfLmNsb3NlTm90Y2goKTsgfSxcbiAgICAgICAgICAgIGhhc091dGxpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oX3RoaXMub3V0bGluZV8pOyB9LFxuICAgICAgICAgICAgbm90Y2hPdXRsaW5lOiBmdW5jdGlvbiAobGFiZWxXaWR0aCkgeyByZXR1cm4gX3RoaXMub3V0bGluZV8gJiYgX3RoaXMub3V0bGluZV8ubm90Y2gobGFiZWxXaWR0aCk7IH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIEEgbWFwIG9mIGFsbCBzdWJjb21wb25lbnRzIHRvIHN1YmZvdW5kYXRpb25zLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZ2V0Rm91bmRhdGlvbk1hcF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJDb3VudGVyOiB0aGlzLmNoYXJhY3RlckNvdW50ZXJfID8gdGhpcy5jaGFyYWN0ZXJDb3VudGVyXy5mb3VuZGF0aW9uIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGVscGVyVGV4dDogdGhpcy5oZWxwZXJUZXh0XyA/IHRoaXMuaGVscGVyVGV4dF8uZm91bmRhdGlvbiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGxlYWRpbmdJY29uOiB0aGlzLmxlYWRpbmdJY29uXyA/IHRoaXMubGVhZGluZ0ljb25fLmZvdW5kYXRpb24gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0cmFpbGluZ0ljb246IHRoaXMudHJhaWxpbmdJY29uXyA/IHRoaXMudHJhaWxpbmdJY29uXy5mb3VuZGF0aW9uIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5jcmVhdGVSaXBwbGVfID0gZnVuY3Rpb24gKHJpcHBsZUZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlzVGV4dEFyZWEgPSB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLlRFWFRBUkVBKTtcbiAgICAgICAgdmFyIGlzT3V0bGluZWQgPSB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLk9VVExJTkVEKTtcbiAgICAgICAgaWYgKGlzVGV4dEFyZWEgfHwgaXNPdXRsaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpLCB7IGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9ueWZpbGwubWF0Y2hlcyhfdGhpcy5pbnB1dF8sICc6YWN0aXZlJyk7IH0sIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpOyB9LCBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5pbnB1dF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gcmlwcGxlRmFjdG9yeSh0aGlzLnJvb3RfLCBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQVJJQV9DT05UUk9MUzogJ2FyaWEtY29udHJvbHMnLFxuICAgIElDT05fU0VMRUNUT1I6ICcubWRjLXRleHQtZmllbGRfX2ljb24nLFxuICAgIElOUFVUX1NFTEVDVE9SOiAnLm1kYy10ZXh0LWZpZWxkX19pbnB1dCcsXG4gICAgTEFCRUxfU0VMRUNUT1I6ICcubWRjLWZsb2F0aW5nLWxhYmVsJyxcbiAgICBMSU5FX1JJUFBMRV9TRUxFQ1RPUjogJy5tZGMtbGluZS1yaXBwbGUnLFxuICAgIE9VVExJTkVfU0VMRUNUT1I6ICcubWRjLW5vdGNoZWQtb3V0bGluZScsXG59O1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgREVOU0U6ICdtZGMtdGV4dC1maWVsZC0tZGVuc2UnLFxuICAgIERJU0FCTEVEOiAnbWRjLXRleHQtZmllbGQtLWRpc2FibGVkJyxcbiAgICBGT0NVU0VEOiAnbWRjLXRleHQtZmllbGQtLWZvY3VzZWQnLFxuICAgIEZVTExXSURUSDogJ21kYy10ZXh0LWZpZWxkLS1mdWxsd2lkdGgnLFxuICAgIEhFTFBFUl9MSU5FOiAnbWRjLXRleHQtZmllbGQtaGVscGVyLWxpbmUnLFxuICAgIElOVkFMSUQ6ICdtZGMtdGV4dC1maWVsZC0taW52YWxpZCcsXG4gICAgTk9fTEFCRUw6ICdtZGMtdGV4dC1maWVsZC0tbm8tbGFiZWwnLFxuICAgIE9VVExJTkVEOiAnbWRjLXRleHQtZmllbGQtLW91dGxpbmVkJyxcbiAgICBST09UOiAnbWRjLXRleHQtZmllbGQnLFxuICAgIFRFWFRBUkVBOiAnbWRjLXRleHQtZmllbGQtLXRleHRhcmVhJyxcbiAgICBXSVRIX0xFQURJTkdfSUNPTjogJ21kYy10ZXh0LWZpZWxkLS13aXRoLWxlYWRpbmctaWNvbicsXG4gICAgV0lUSF9UUkFJTElOR19JQ09OOiAnbWRjLXRleHQtZmllbGQtLXdpdGgtdHJhaWxpbmctaWNvbicsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgREVOU0VfTEFCRUxfU0NBTEU6IDAuOTIzLFxuICAgIExBQkVMX1NDQUxFOiAwLjc1LFxufTtcbi8qKlxuICogV2hpdGVsaXN0IGJhc2VkIG9mZiBvZiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9IVE1ML0hUTUw1L0NvbnN0cmFpbnRfdmFsaWRhdGlvblxuICogdW5kZXIgdGhlIFwiVmFsaWRhdGlvbi1yZWxhdGVkIGF0dHJpYnV0ZXNcIiBzZWN0aW9uLlxuICovXG52YXIgVkFMSURBVElPTl9BVFRSX1dISVRFTElTVCA9IFtcbiAgICAncGF0dGVybicsICdtaW4nLCAnbWF4JywgJ3JlcXVpcmVkJywgJ3N0ZXAnLCAnbWlubGVuZ3RoJywgJ21heGxlbmd0aCcsXG5dO1xuLyoqXG4gKiBMYWJlbCBzaG91bGQgYWx3YXlzIGZsb2F0IGZvciB0aGVzZSB0eXBlcyBhcyB0aGV5IHNob3cgc29tZSBVSSBldmVuIGlmIHZhbHVlIGlzIGVtcHR5LlxuICovXG52YXIgQUxXQVlTX0ZMT0FUX1RZUEVTID0gW1xuICAgICdjb2xvcicsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJywgJ21vbnRoJywgJ3JhbmdlJywgJ3RpbWUnLCAnd2VlaycsXG5dO1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgVkFMSURBVElPTl9BVFRSX1dISVRFTElTVCwgQUxXQVlTX0ZMT0FUX1RZUEVTIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgQUxXQVlTX0ZMT0FUX1RZUEVTLCBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzLCBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIFBPSU5URVJET1dOX0VWRU5UUyA9IFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnXTtcbnZhciBJTlRFUkFDVElPTl9FVkVOVFMgPSBbJ2NsaWNrJywgJ2tleWRvd24nXTtcbnZhciBNRENUZXh0RmllbGRGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFkYXB0ZXJcbiAgICAgKiBAcGFyYW0gZm91bmRhdGlvbk1hcCBNYXAgZnJvbSBzdWJjb21wb25lbnQgbmFtZXMgdG8gdGhlaXIgc3ViZm91bmRhdGlvbnMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkRm91bmRhdGlvbihhZGFwdGVyLCBmb3VuZGF0aW9uTWFwKSB7XG4gICAgICAgIGlmIChmb3VuZGF0aW9uTWFwID09PSB2b2lkIDApIHsgZm91bmRhdGlvbk1hcCA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc0ZvY3VzZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1ZhbGlkXyA9IHRydWU7XG4gICAgICAgIF90aGlzLnVzZU5hdGl2ZVZhbGlkYXRpb25fID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuaGVscGVyVGV4dF8gPSBmb3VuZGF0aW9uTWFwLmhlbHBlclRleHQ7XG4gICAgICAgIF90aGlzLmNoYXJhY3RlckNvdW50ZXJfID0gZm91bmRhdGlvbk1hcC5jaGFyYWN0ZXJDb3VudGVyO1xuICAgICAgICBfdGhpcy5sZWFkaW5nSWNvbl8gPSBmb3VuZGF0aW9uTWFwLmxlYWRpbmdJY29uO1xuICAgICAgICBfdGhpcy50cmFpbGluZ0ljb25fID0gZm91bmRhdGlvbk1hcC50cmFpbGluZ0ljb247XG4gICAgICAgIF90aGlzLmlucHV0Rm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlRm9jdXMoKTsgfTtcbiAgICAgICAgX3RoaXMuaW5wdXRCbHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kZWFjdGl2YXRlRm9jdXMoKTsgfTtcbiAgICAgICAgX3RoaXMuaW5wdXRJbnB1dEhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW5wdXQoKTsgfTtcbiAgICAgICAgX3RoaXMuc2V0UG9pbnRlclhPZmZzZXRfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuc2V0VHJhbnNmb3JtT3JpZ2luKGV2dCk7IH07XG4gICAgICAgIF90aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVUZXh0RmllbGRJbnRlcmFjdGlvbigpOyB9O1xuICAgICAgICBfdGhpcy52YWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcl8gPSBmdW5jdGlvbiAoYXR0cmlidXRlc0xpc3QpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2UoYXR0cmlidXRlc0xpc3QpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZSwgXCJzaG91bGRBbHdheXNGbG9hdF9cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS50eXBlO1xuICAgICAgICAgICAgcmV0dXJuIEFMV0FZU19GTE9BVF9UWVBFUy5pbmRleE9mKHR5cGUpID49IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZSwgXCJzaG91bGRGbG9hdFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkQWx3YXlzRmxvYXRfIHx8IHRoaXMuaXNGb2N1c2VkXyB8fCBCb29sZWFuKHRoaXMuZ2V0VmFsdWUoKSkgfHwgdGhpcy5pc0JhZElucHV0XygpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUsIFwic2hvdWxkU2hha2VcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc0ZvY3VzZWRfICYmICF0aGlzLmlzVmFsaWQoKSAmJiBCb29sZWFuKHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDVGV4dEZpZWxkQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9KTsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXROYXRpdmVJbnB1dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBpc0ZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGFjdGl2YXRlTGluZVJpcHBsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGVMaW5lUmlwcGxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNoYWtlTGFiZWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBmbG9hdExhYmVsOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzTGFiZWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGdldExhYmVsV2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgaGFzT3V0bGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgbm90Y2hPdXRsaW5lOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgY2xvc2VPdXRsaW5lOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNGb2N1c2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpICYmIHRoaXMuc2hvdWxkRmxvYXQpIHtcbiAgICAgICAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2lucHV0JywgdGhpcy5pbnB1dElucHV0SGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSRE9XTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5zZXRQb2ludGVyWE9mZnNldF8pO1xuICAgICAgICB9KTtcbiAgICAgICAgSU5URVJBQ1RJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uT2JzZXJ2ZXJfID1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcih0aGlzLnZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyQ291bnRlcl8odGhpcy5nZXRWYWx1ZSgpLmxlbmd0aCk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5pbnB1dEJsdXJIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdpbnB1dCcsIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUkRPV05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5zZXRQb2ludGVyWE9mZnNldF8pO1xuICAgICAgICB9KTtcbiAgICAgICAgSU5URVJBQ1RJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMudGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcih0aGlzLnZhbGlkYXRpb25PYnNlcnZlcl8pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB1c2VyIGludGVyYWN0aW9ucyB3aXRoIHRoZSBUZXh0IEZpZWxkLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRleHRGaWVsZEludGVyYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmF0aXZlSW5wdXQgPSB0aGlzLmFkYXB0ZXJfLmdldE5hdGl2ZUlucHV0KCk7XG4gICAgICAgIGlmIChuYXRpdmVJbnB1dCAmJiBuYXRpdmVJbnB1dC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjZWl2ZWRVc2VySW5wdXRfID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdmFsaWRhdGlvbiBhdHRyaWJ1dGUgY2hhbmdlc1xuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2UgPSBmdW5jdGlvbiAoYXR0cmlidXRlc0xpc3QpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgYXR0cmlidXRlc0xpc3Quc29tZShmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgaWYgKFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QuaW5kZXhPZihhdHRyaWJ1dGVOYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3R5bGVWYWxpZGl0eV8odHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXR0cmlidXRlc0xpc3QuaW5kZXhPZignbWF4bGVuZ3RoJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudGVyXyh0aGlzLmdldFZhbHVlKCkubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogT3BlbnMvY2xvc2VzIHRoZSBub3RjaGVkIG91dGxpbmUuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUubm90Y2hPdXRsaW5lID0gZnVuY3Rpb24gKG9wZW5Ob3RjaCkge1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaGFzT3V0bGluZSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZW5Ob3RjaCkge1xuICAgICAgICAgICAgdmFyIGlzRGVuc2UgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuREVOU0UpO1xuICAgICAgICAgICAgdmFyIGxhYmVsU2NhbGUgPSBpc0RlbnNlID8gbnVtYmVycy5ERU5TRV9MQUJFTF9TQ0FMRSA6IG51bWJlcnMuTEFCRUxfU0NBTEU7XG4gICAgICAgICAgICB2YXIgbGFiZWxXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGFiZWxXaWR0aCgpICogbGFiZWxTY2FsZTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZU91dGxpbmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVzIHRoZSB0ZXh0IGZpZWxkIGZvY3VzIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkXyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3R5bGVGb2N1c2VkXyh0aGlzLmlzRm9jdXNlZF8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFjdGl2YXRlTGluZVJpcHBsZSgpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGNoT3V0bGluZSh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbCh0aGlzLnNob3VsZFNoYWtlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zaG93VG9TY3JlZW5SZWFkZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbGluZSByaXBwbGUncyB0cmFuc2Zvcm0gb3JpZ2luLCBzbyB0aGF0IHRoZSBsaW5lIHJpcHBsZSBhY3RpdmF0ZVxuICAgICAqIGFuaW1hdGlvbiB3aWxsIGFuaW1hdGUgb3V0IGZyb20gdGhlIHVzZXIncyBjbGljayBsb2NhdGlvbi5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRUcmFuc2Zvcm1PcmlnaW4gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciB0b3VjaGVzID0gZXZ0LnRvdWNoZXM7XG4gICAgICAgIHZhciB0YXJnZXRFdmVudCA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdIDogZXZ0O1xuICAgICAgICB2YXIgdGFyZ2V0Q2xpZW50UmVjdCA9IHRhcmdldEV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRYID0gdGFyZ2V0RXZlbnQuY2xpZW50WCAtIHRhcmdldENsaWVudFJlY3QubGVmdDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luKG5vcm1hbGl6ZWRYKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgaW5wdXQgY2hhbmdlIG9mIHRleHQgaW5wdXQgYW5kIHRleHQgYXJlYS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGVGb2N1cygpO1xuICAgICAgICB0aGlzLnNldENoYXJhY3RlckNvdW50ZXJfKHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVzIHRoZSBUZXh0IEZpZWxkJ3MgZm9jdXMgc3RhdGUgaW4gY2FzZXMgd2hlbiB0aGUgaW5wdXQgdmFsdWVcbiAgICAgKiBjaGFuZ2VzIHdpdGhvdXQgdXNlciBpbnB1dCAoZS5nLiBwcm9ncmFtbWF0aWNhbGx5KS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5hdXRvQ29tcGxldGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY2VpdmVkVXNlcklucHV0Xykge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGVzIHRoZSBUZXh0IEZpZWxkJ3MgZm9jdXMgc3RhdGUuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlTGluZVJpcHBsZSgpO1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRoaXMuaXNWYWxpZCgpO1xuICAgICAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuICAgICAgICB0aGlzLnN0eWxlRm9jdXNlZF8odGhpcy5pc0ZvY3VzZWRfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgICAgICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwodGhpcy5zaG91bGRTaGFrZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZEZsb2F0KSB7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBvbiB0aGUgaW5wdXQgRWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBQcmV2ZW50IFNhZmFyaSBmcm9tIG1vdmluZyB0aGUgY2FyZXQgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgd2hlbiB0aGUgdmFsdWUgaGFzIG5vdCBjaGFuZ2VkLlxuICAgICAgICBpZiAodGhpcy5nZXRWYWx1ZSgpICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5nZXROYXRpdmVJbnB1dF8oKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyQ291bnRlcl8odmFsdWUubGVuZ3RoKTtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoKTtcbiAgICAgICAgdGhpcy5zdHlsZVZhbGlkaXR5Xyhpc1ZhbGlkKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgICAgICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwodGhpcy5zaG91bGRTaGFrZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gVGhlIGN1c3RvbSB2YWxpZGl0eSBzdGF0ZSwgaWYgc2V0OyBvdGhlcndpc2UsIHRoZSByZXN1bHQgb2YgYSBuYXRpdmUgdmFsaWRpdHkgY2hlY2suXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaXNWYWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlTmF0aXZlVmFsaWRhdGlvbl9cbiAgICAgICAgICAgID8gdGhpcy5pc05hdGl2ZUlucHV0VmFsaWRfKCkgOiB0aGlzLmlzVmFsaWRfO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGlzVmFsaWQgU2V0cyB0aGUgY3VzdG9tIHZhbGlkaXR5IHN0YXRlIG9mIHRoZSBUZXh0IEZpZWxkLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZhbGlkID0gZnVuY3Rpb24gKGlzVmFsaWQpIHtcbiAgICAgICAgdGhpcy5pc1ZhbGlkXyA9IGlzVmFsaWQ7XG4gICAgICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCk7XG4gICAgICAgIHZhciBzaG91bGRTaGFrZSA9ICFpc1ZhbGlkICYmICF0aGlzLmlzRm9jdXNlZF87XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbChzaG91bGRTaGFrZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIHVzZSBvZiBuYXRpdmUgdmFsaWRhdGlvbi4gVXNlIHRoaXMgZm9yIGN1c3RvbSB2YWxpZGF0aW9uLlxuICAgICAqIEBwYXJhbSB1c2VOYXRpdmVWYWxpZGF0aW9uIFNldCB0aGlzIHRvIGZhbHNlIHRvIGlnbm9yZSBuYXRpdmUgaW5wdXQgdmFsaWRhdGlvbi5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVc2VOYXRpdmVWYWxpZGF0aW9uID0gZnVuY3Rpb24gKHVzZU5hdGl2ZVZhbGlkYXRpb24pIHtcbiAgICAgICAgdGhpcy51c2VOYXRpdmVWYWxpZGF0aW9uXyA9IHVzZU5hdGl2ZVZhbGlkYXRpb247XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS5kaXNhYmxlZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkaXNhYmxlZCBTZXRzIHRoZSB0ZXh0LWZpZWxkIGRpc2FibGVkIG9yIGVuYWJsZWQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGlzYWJsZWQgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5nZXROYXRpdmVJbnB1dF8oKS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB0aGlzLnN0eWxlRGlzYWJsZWRfKGRpc2FibGVkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb250ZW50IFNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIGhlbHBlciB0ZXh0LlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldEhlbHBlclRleHRDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYXJpYSBsYWJlbCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldExlYWRpbmdJY29uQXJpYUxhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmxlYWRpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy5sZWFkaW5nSWNvbl8uc2V0QXJpYUxhYmVsKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBsZWFkaW5nIGljb24uXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0TGVhZGluZ0ljb25Db250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICAgICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9mIHRoZSB0cmFpbGluZyBpY29uLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRyYWlsaW5nSWNvbkFyaWFMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICBpZiAodGhpcy50cmFpbGluZ0ljb25fKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWlsaW5nSWNvbl8uc2V0QXJpYUxhYmVsKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSB0cmFpbGluZyBpY29uLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRyYWlsaW5nSWNvbkNvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICBpZiAodGhpcy50cmFpbGluZ0ljb25fKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWlsaW5nSWNvbl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBjaGFyYWN0ZXIgY291bnRlciB2YWx1ZXMgdGhhdCBzaG93cyBjaGFyYWN0ZXJzIHVzZWQgYW5kIHRoZSB0b3RhbCBjaGFyYWN0ZXIgbGltaXQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q2hhcmFjdGVyQ291bnRlcl8gPSBmdW5jdGlvbiAoY3VycmVudExlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hhcmFjdGVyQ291bnRlcl8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4TGVuZ3RoID0gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS5tYXhMZW5ndGg7XG4gICAgICAgIGlmIChtYXhMZW5ndGggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ1RleHRGaWVsZEZvdW5kYXRpb246IEV4cGVjdGVkIG1heGxlbmd0aCBodG1sIHByb3BlcnR5IG9uIHRleHQgaW5wdXQgb3IgdGV4dGFyZWEuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudGVyXy5zZXRDb3VudGVyVmFsdWUoY3VycmVudExlbmd0aCwgbWF4TGVuZ3RoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgVGV4dCBGaWVsZCBpbnB1dCBmYWlscyBpbiBjb252ZXJ0aW5nIHRoZSB1c2VyLXN1cHBsaWVkIHZhbHVlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmlzQmFkSW5wdXRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGUgYmFkSW5wdXQgcHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCBpbiBJRSAxMSDwn5KpLlxuICAgICAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS52YWxpZGl0eS5iYWRJbnB1dCB8fCBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiBuYXRpdmUgdmFsaWRpdHkgY2hlY2tpbmcgKFZhbGlkaXR5U3RhdGUudmFsaWQpLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmlzTmF0aXZlSW5wdXRWYWxpZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbGlkaXR5LnZhbGlkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIHZhbGlkaXR5IHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnN0eWxlVmFsaWRpdHlfID0gZnVuY3Rpb24gKGlzVmFsaWQpIHtcbiAgICAgICAgdmFyIElOVkFMSUQgPSBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXMuSU5WQUxJRDtcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoSU5WQUxJRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKElOVkFMSUQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclRleHRfLnNldFZhbGlkaXR5KGlzVmFsaWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgZm9jdXNlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zdHlsZUZvY3VzZWRfID0gZnVuY3Rpb24gKGlzRm9jdXNlZCkge1xuICAgICAgICB2YXIgRk9DVVNFRCA9IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GT0NVU0VEO1xuICAgICAgICBpZiAoaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZPQ1VTRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGT0NVU0VEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGRpc2FibGVkIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnN0eWxlRGlzYWJsZWRfID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIF9hID0gTURDVGV4dEZpZWxkRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBESVNBQkxFRCA9IF9hLkRJU0FCTEVELCBJTlZBTElEID0gX2EuSU5WQUxJRDtcbiAgICAgICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRElTQUJMRUQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhJTlZBTElEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRElTQUJMRUQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlYWRpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy5sZWFkaW5nSWNvbl8uc2V0RGlzYWJsZWQoaXNEaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHJhaWxpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy50cmFpbGluZ0ljb25fLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFRoZSBuYXRpdmUgdGV4dCBpbnB1dCBlbGVtZW50IGZyb20gdGhlIGhvc3QgZW52aXJvbm1lbnQsIG9yIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGZvciB1bml0IHRlc3RzLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmdldE5hdGl2ZUlucHV0XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhpcy5hZGFwdGVyXyBtYXkgYmUgdW5kZWZpbmVkIGluIGZvdW5kYXRpb24gdW5pdCB0ZXN0cy4gVGhpcyBoYXBwZW5zIHdoZW4gdGVzdGRvdWJsZSBpcyBjcmVhdGluZyBhIG1vY2sgb2JqZWN0XG4gICAgICAgIC8vIGFuZCBpbnZva2VzIHRoZSBzaG91bGRTaGFrZS9zaG91bGRGbG9hdCBnZXR0ZXJzICh3aGljaCBpbiB0dXJuIGNhbGwgZ2V0VmFsdWUoKSwgd2hpY2ggY2FsbHMgdGhpcyBtZXRob2QpIGJlZm9yZVxuICAgICAgICAvLyBpbml0KCkgaGFzIGJlZW4gY2FsbGVkIGZyb20gdGhlIE1EQ1RleHRGaWVsZCBjb25zdHJ1Y3Rvci4gVG8gd29yayBhcm91bmQgdGhhdCBpc3N1ZSwgd2UgcmV0dXJuIGEgZHVtbXkgb2JqZWN0LlxuICAgICAgICB2YXIgbmF0aXZlSW5wdXQgPSB0aGlzLmFkYXB0ZXJfID8gdGhpcy5hZGFwdGVyXy5nZXROYXRpdmVJbnB1dCgpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZUlucHV0IHx8IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1heExlbmd0aDogLTEsXG4gICAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgdmFsaWRpdHk6IHtcbiAgICAgICAgICAgICAgICBiYWRJbnB1dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1RleHRGaWVsZEhlbHBlclRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkSGVscGVyVGV4dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRIZWxwZXJUZXh0KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHQuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHQocm9vdCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSGVscGVyVGV4dC5wcm90b3R5cGUsIFwiZm91bmRhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl87XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHQucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBzZXRBdHRyOiBmdW5jdGlvbiAoYXR0ciwgdmFsdWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gX3RoaXMucm9vdF8ucmVtb3ZlQXR0cmlidXRlKGF0dHIpOyB9LFxuICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZEhlbHBlclRleHQ7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkSGVscGVyVGV4dCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgSEVMUEVSX1RFWFRfUEVSU0lTVEVOVDogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50JyxcbiAgICBIRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRzogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS12YWxpZGF0aW9uLW1zZycsXG4gICAgUk9PVDogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0Jyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0hJRERFTjogJ2FyaWEtaGlkZGVuJyxcbiAgICBST0xFOiAncm9sZScsXG4gICAgUk9PVF9TRUxFQ1RPUjogXCIuXCIgKyBjc3NDbGFzc2VzLlJPT1QsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIGhlbHBlciB0ZXh0IGZpZWxkLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGlzUGVyc2lzdGVudCBTZXRzIHRoZSBwZXJzaXN0ZW5jeSBvZiB0aGUgaGVscGVyIHRleHQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFBlcnNpc3RlbnQgPSBmdW5jdGlvbiAoaXNQZXJzaXN0ZW50KSB7XG4gICAgICAgIGlmIChpc1BlcnNpc3RlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGlzVmFsaWRhdGlvbiBUcnVlIHRvIG1ha2UgdGhlIGhlbHBlciB0ZXh0IGFjdCBhcyBhbiBlcnJvciB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZhbGlkYXRpb24gPSBmdW5jdGlvbiAoaXNWYWxpZGF0aW9uKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgaGVscGVyIHRleHQgdmlzaWJsZSB0byB0aGUgc2NyZWVuIHJlYWRlci5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2hvd1RvU2NyZWVuUmVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5BUklBX0hJRERFTik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWxpZGl0eSBvZiB0aGUgaGVscGVyIHRleHQgYmFzZWQgb24gdGhlIGlucHV0IHZhbGlkaXR5LlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWYWxpZGl0eSA9IGZ1bmN0aW9uIChpbnB1dElzVmFsaWQpIHtcbiAgICAgICAgdmFyIGhlbHBlclRleHRJc1BlcnNpc3RlbnQgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgICAgIHZhciBoZWxwZXJUZXh0SXNWYWxpZGF0aW9uTXNnID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICAgICAgdmFyIHZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkgPSBoZWxwZXJUZXh0SXNWYWxpZGF0aW9uTXNnICYmICFpbnB1dElzVmFsaWQ7XG4gICAgICAgIGlmICh2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5ST0xFLCAnYWxlcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cihzdHJpbmdzLlJPTEUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGVscGVyVGV4dElzUGVyc2lzdGVudCAmJiAhdmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlXygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgaGVscCB0ZXh0IGZyb20gc2NyZWVuIHJlYWRlcnMuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24ucHJvdG90eXBlLmhpZGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX0hJRERFTiwgJ3RydWUnKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuZXhwb3J0IHsgY3NzQ2xhc3NlcyBhcyBoZWxwZXJUZXh0Q3NzQ2xhc3Nlcywgc3RyaW5ncyBhcyBoZWxwZXJUZXh0U3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDVGV4dEZpZWxkSWNvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRJY29uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZEljb24oKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGV4dEZpZWxkSWNvbi5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkSWNvbihyb290KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRJY29uLnByb3RvdHlwZSwgXCJmb3VuZGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGV4dEZpZWxkSWNvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBnZXRBdHRyOiBmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gX3RoaXMucm9vdF8uZ2V0QXR0cmlidXRlKGF0dHIpOyB9LFxuICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKGF0dHIsIHZhbHVlKSB7IHJldHVybiBfdGhpcy5yb290Xy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTsgfSxcbiAgICAgICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLnVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgbm90aWZ5SWNvbkFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5zdHJpbmdzLklDT05fRVZFTlQsIHt9IC8qIGV2dERhdGEgKi8sIHRydWUgLyogc2hvdWxkQnViYmxlICovKTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRJY29uO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZEljb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIElDT05fRVZFTlQ6ICdNRENUZXh0RmllbGQ6aWNvbicsXG4gICAgSUNPTl9ST0xFOiAnYnV0dG9uJyxcbn07XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBST09UOiAnbWRjLXRleHQtZmllbGRfX2ljb24nLFxufTtcbmV4cG9ydCB7IHN0cmluZ3MsIGNzc0NsYXNzZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIElOVEVSQUNUSU9OX0VWRU5UUyA9IFsnY2xpY2snLCAna2V5ZG93biddO1xudmFyIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zYXZlZFRhYkluZGV4XyA9IG51bGw7XG4gICAgICAgIF90aGlzLmludGVyYWN0aW9uSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVJbnRlcmFjdGlvbihldnQpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5SWNvbkFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gdGhpcy5hZGFwdGVyXy5nZXRBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICBJTlRFUkFDVElPTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIElOVEVSQUNUSU9OX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZWRUYWJJbmRleF8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cigncm9sZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsIHRoaXMuc2F2ZWRUYWJJbmRleF8pO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdyb2xlJywgc3RyaW5ncy5JQ09OX1JPTEUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QXJpYUxhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cignYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUludGVyYWN0aW9uID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFbnRlcktleSA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdjbGljaycgfHwgaXNFbnRlcktleSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJY29uQWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuZXhwb3J0IHsgY3NzQ2xhc3NlcyBhcyBpY29uQ3NzQ2xhc3Nlcywgc3RyaW5ncyBhcyBpY29uU3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY2hhcmFjdGVyLWNvdW50ZXIvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWxwZXItdGV4dC9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2ljb24vaW5kZXgnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1JpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50JztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24gfSBmcm9tICcuL2ZpeGVkL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9zaG9ydC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gfSBmcm9tICcuL3N0YW5kYXJkL2ZvdW5kYXRpb24nO1xudmFyIE1EQ1RvcEFwcEJhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUb3BBcHBCYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVG9wQXBwQmFyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ1RvcEFwcEJhci5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDVG9wQXBwQmFyKHJvb3QpO1xuICAgIH07XG4gICAgTURDVG9wQXBwQmFyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHJpcHBsZUZhY3RvcnkpIHtcbiAgICAgICAgaWYgKHJpcHBsZUZhY3RvcnkgPT09IHZvaWQgMCkgeyByaXBwbGVGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBNRENSaXBwbGUuYXR0YWNoVG8oZWwpOyB9OyB9XG4gICAgICAgIHRoaXMubmF2SWNvbl8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5OQVZJR0FUSU9OX0lDT05fU0VMRUNUT1IpO1xuICAgICAgICAvLyBHZXQgYWxsIGljb25zIGluIHRoZSB0b29sYmFyIGFuZCBpbnN0YW50aWF0ZSB0aGUgcmlwcGxlc1xuICAgICAgICB2YXIgaWNvbnMgPSBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFDVElPTl9JVEVNX1NFTEVDVE9SKSk7XG4gICAgICAgIGlmICh0aGlzLm5hdkljb25fKSB7XG4gICAgICAgICAgICBpY29ucy5wdXNoKHRoaXMubmF2SWNvbl8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaWNvblJpcHBsZXNfID0gaWNvbnMubWFwKGZ1bmN0aW9uIChpY29uKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gcmlwcGxlRmFjdG9yeShpY29uKTtcbiAgICAgICAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0XyA9IHdpbmRvdztcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhbmRsZU5hdmlnYXRpb25DbGlja18gPSB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZU5hdmlnYXRpb25DbGljay5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZV8gPSB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgICAgICB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8gPSB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZVRhcmdldFNjcm9sbC5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfKTtcbiAgICAgICAgaWYgKHRoaXMubmF2SWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubmF2SWNvbl8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU5hdmlnYXRpb25DbGlja18pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0ZpeGVkID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5GSVhFRF9DTEFTUyk7XG4gICAgICAgIHZhciBpc1Nob3J0ID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5TSE9SVF9DTEFTUyk7XG4gICAgICAgIGlmICghaXNTaG9ydCAmJiAhaXNGaXhlZCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pY29uUmlwcGxlc18uZm9yRWFjaChmdW5jdGlvbiAoaWNvblJpcHBsZSkgeyByZXR1cm4gaWNvblJpcHBsZS5kZXN0cm95KCk7IH0pO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfKTtcbiAgICAgICAgaWYgKHRoaXMubmF2SWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubmF2SWNvbl8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU5hdmlnYXRpb25DbGlja18pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0ZpeGVkID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5GSVhFRF9DTEFTUyk7XG4gICAgICAgIHZhciBpc1Nob3J0ID0gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5TSE9SVF9DTEFTUyk7XG4gICAgICAgIGlmICghaXNTaG9ydCAmJiAhaXNGaXhlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplXyk7XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLnNldFNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHNjcm9sbCBoYW5kbGVyIGZyb20gdGhlIHByZXZpb3VzIHNjcm9sbCB0YXJnZXRcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0XyA9IHRhcmdldDtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzY3JvbGwgaGFuZGxlciBvbiB0aGUgbmV3IHNjcm9sbCB0YXJnZXRcbiAgICAgICAgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfID1cbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlVGFyZ2V0U2Nyb2xsLmJpbmQodGhpcy5mb3VuZGF0aW9uXyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Xy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8pO1xuICAgIH07XG4gICAgTURDVG9wQXBwQmFyLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgc2V0U3R5bGU6IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7IH0sXG4gICAgICAgICAgICBnZXRUb3BBcHBCYXJIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsaWVudEhlaWdodDsgfSxcbiAgICAgICAgICAgIG5vdGlmeU5hdmlnYXRpb25JY29uQ2xpY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChzdHJpbmdzLk5BVklHQVRJT05fRVZFTlQsIHt9KTsgfSxcbiAgICAgICAgICAgIGdldFZpZXdwb3J0U2Nyb2xsWTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB3aW4gPSBfdGhpcy5zY3JvbGxUYXJnZXRfO1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IF90aGlzLnNjcm9sbFRhcmdldF87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbi5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkID8gd2luLnBhZ2VZT2Zmc2V0IDogZWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRvdGFsQWN0aW9uSXRlbXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BQ1RJT05fSVRFTV9TRUxFQ1RPUikubGVuZ3RoOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB2YXIgZm91bmRhdGlvbjtcbiAgICAgICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuU0hPUlRfQ0xBU1MpKSB7XG4gICAgICAgICAgICBmb3VuZGF0aW9uID0gbmV3IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkZJWEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgZm91bmRhdGlvbiA9IG5ldyBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3VuZGF0aW9uID0gbmV3IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kYXRpb247XG4gICAgfTtcbiAgICByZXR1cm4gTURDVG9wQXBwQmFyO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RvcEFwcEJhciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgRklYRURfQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLWZpeGVkJyxcbiAgICBGSVhFRF9TQ1JPTExFRF9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tZml4ZWQtc2Nyb2xsZWQnLFxuICAgIFNIT1JUX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydCcsXG4gICAgU0hPUlRfQ09MTEFQU0VEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydC1jb2xsYXBzZWQnLFxuICAgIFNIT1JUX0hBU19BQ1RJT05fSVRFTV9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tc2hvcnQtaGFzLWFjdGlvbi1pdGVtJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBERUJPVU5DRV9USFJPVFRMRV9SRVNJWkVfVElNRV9NUzogMTAwLFxuICAgIE1BWF9UT1BfQVBQX0JBUl9IRUlHSFQ6IDEyOCxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fSVRFTV9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXJfX2FjdGlvbi1pdGVtJyxcbiAgICBOQVZJR0FUSU9OX0VWRU5UOiAnTURDVG9wQXBwQmFyOm5hdicsXG4gICAgTkFWSUdBVElPTl9JQ09OX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcl9fbmF2aWdhdGlvbi1pY29uJyxcbiAgICBST09UX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcicsXG4gICAgVElUTEVfU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyX190aXRsZScsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGNzc0NsYXNzZXMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDVG9wQXBwQmFyRm91bmRhdGlvbiB9IGZyb20gJy4uL3N0YW5kYXJkL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIHZhcmlhYmxlIGZvciB0aGUgcHJldmlvdXMgc2Nyb2xsIGl0ZXJhdGlvbiB0b3AgYXBwIGJhciBzdGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMud2FzU2Nyb2xsZWRfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGhhbmRsZXIgZm9yIGFwcGx5aW5nL3JlbW92aW5nIHRoZSBtb2RpZmllciBjbGFzcyBvbiB0aGUgZml4ZWQgdG9wIGFwcCBiYXIuXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUYXJnZXRTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsID0gdGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPD0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMud2FzU2Nyb2xsZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkZJWEVEX1NDUk9MTEVEX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB0aGlzLndhc1Njcm9sbGVkXyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLndhc1Njcm9sbGVkXykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5GSVhFRF9TQ1JPTExFRF9DTEFTUyk7XG4gICAgICAgICAgICAgICAgdGhpcy53YXNTY3JvbGxlZF8gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uO1xufShNRENUb3BBcHBCYXJGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG9wdGlvbmFsIGFyZ3VtZW50IGlzIG5vdCBhIGJyYW5jaCBzdGF0ZW1lbnQgKi9cbiAgICBmdW5jdGlvbiBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ1RvcEFwcEJhckFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VG9wQXBwQmFySGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU5hdmlnYXRpb25JY29uQ2xpY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFZpZXdwb3J0U2Nyb2xsWTogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRUb3RhbEFjdGlvbkl0ZW1zOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKiBPdGhlciB2YXJpYW50cyBvZiBUb3BBcHBCYXIgZm91bmRhdGlvbiBvdmVycmlkZXMgdGhpcyBtZXRob2QgKi9cbiAgICBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGFyZ2V0U2Nyb2xsID0gZnVuY3Rpb24gKCkgeyB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5XG4gICAgLyoqIE90aGVyIHZhcmlhbnRzIG9mIFRvcEFwcEJhciBmb3VuZGF0aW9uIG92ZXJyaWRlcyB0aGlzIG1ldGhvZCAqL1xuICAgIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVXaW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoKSB7IH07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHlcbiAgICBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlTmF2aWdhdGlvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU5hdmlnYXRpb25JY29uQ2xpY2tlZCgpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2ZpeGVkL2ZvdW5kYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zaG9ydC9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3RhbmRhcmQvZm91bmRhdGlvbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBjc3NDbGFzc2VzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uIH0gZnJvbSAnLi4vZm91bmRhdGlvbic7XG52YXIgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogb3B0aW9uYWwgYXJndW1lbnQgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xuICAgIGZ1bmN0aW9uIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGFkYXB0ZXIpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzQ29sbGFwc2VkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0Fsd2F5c0NvbGxhcHNlZF8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZSwgXCJpc0NvbGxhcHNlZFwiLCB7XG4gICAgICAgIC8vIFB1YmxpYyB2aXNpYmlsaXR5IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29sbGFwc2VkXztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0VG90YWxBY3Rpb25JdGVtcygpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0hBU19BQ1RJT05fSVRFTV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaW5pdGlhbGl6ZWQgd2l0aCBTSE9SVF9DT0xMQVBTRURfQ0xBU1MsIHRoZSBiYXIgc2hvdWxkIGFsd2F5cyBiZSBjb2xsYXBzZWRcbiAgICAgICAgdGhpcy5zZXRBbHdheXNDb2xsYXBzZWQodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0NPTExBUFNFRF9DTEFTUykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IGlmIHRoZSBzaG9ydCB0b3AgYXBwIGJhciBzaG91bGQgYWx3YXlzIGJlIGNvbGxhcHNlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBXaGVuIGB0cnVlYCwgYmFyIHdpbGwgYWx3YXlzIGJlIGNvbGxhcHNlZC4gV2hlbiBgZmFsc2VgLCBiYXIgbWF5IGNvbGxhcHNlIG9yIGV4cGFuZCBiYXNlZCBvbiBzY3JvbGwuXG4gICAgICovXG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBbHdheXNDb2xsYXBzZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pc0Fsd2F5c0NvbGxhcHNlZF8gPSAhIXZhbHVlO1xuICAgICAgICBpZiAodGhpcy5pc0Fsd2F5c0NvbGxhcHNlZF8pIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBsZXQgbWF5YmVDb2xsYXBzZUJhcl8gZGV0ZXJtaW5lIGlmIHRoZSBiYXIgc2hvdWxkIGJlIGNvbGxhcHNlZFxuICAgICAgICAgICAgdGhpcy5tYXliZUNvbGxhcHNlQmFyXygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmdldEFsd2F5c0NvbGxhcHNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbHdheXNDb2xsYXBzZWRfO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGhhbmRsZXIgZm9yIGFwcGx5aW5nL3JlbW92aW5nIHRoZSBjb2xsYXBzZWQgbW9kaWZpZXIgY2xhc3Mgb24gdGhlIHNob3J0IHRvcCBhcHAgYmFyLlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGFyZ2V0U2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1heWJlQ29sbGFwc2VCYXJfKCk7XG4gICAgfTtcbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLm1heWJlQ29sbGFwc2VCYXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Fsd2F5c0NvbGxhcHNlZF8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFNjcm9sbCA9IHRoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCk7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsIDw9IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkXykge1xuICAgICAgICAgICAgICAgIHRoaXMudW5jb2xsYXBzZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0NvbGxhcHNlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLnVuY29sbGFwc2VfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU0hPUlRfQ09MTEFQU0VEX0NMQVNTKTtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZF8gPSBmYWxzZTtcbiAgICB9O1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY29sbGFwc2VfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU0hPUlRfQ09MTEFQU0VEX0NMQVNTKTtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZF8gPSB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbjtcbn0oTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbnVtYmVycyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB9IGZyb20gJy4uL2ZvdW5kYXRpb24nO1xudmFyIElOSVRJQUxfVkFMVUUgPSAwO1xudmFyIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVG9wQXBwQmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogb3B0aW9uYWwgYXJndW1lbnQgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xuICAgIGZ1bmN0aW9uIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhZGFwdGVyKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSB0b3AgYXBwIGJhciB3YXMgZG9ja2VkIGluIHRoZSBwcmV2aW91cyBzY3JvbGwgaGFuZGxlciBpdGVyYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy53YXNEb2NrZWRfID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUgdG9wIGFwcCBiYXIgaXMgZG9ja2VkIGluIHRoZSBmdWxseSBzaG93biBwb3NpdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmlzRG9ja2VkU2hvd2luZ18gPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFyaWFibGUgZm9yIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB0b3AgYXBwIGJhclxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVXNlZCB0byBwcmV2ZW50IHRoZSB0b3AgYXBwIGJhciBmcm9tIGJlaW5nIHNjcm9sbGVkIG91dCBvZiB2aWV3IGR1cmluZyByZXNpemUgZXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0aW1lb3V0IHRoYXQncyB1c2VkIHRvIHRocm90dGxlIHRoZSByZXNpemUgZXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5yZXNpemVUaHJvdHRsZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGltZW91dCB0aGF0J3MgdXNlZCB0byBkZWJvdW5jZSB0b2dnbGluZyB0aGUgaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfIHZhcmlhYmxlIGFmdGVyIGEgcmVzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5yZXNpemVEZWJvdW5jZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgIF90aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl8gPSBfdGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKTtcbiAgICAgICAgX3RoaXMudG9wQXBwQmFySGVpZ2h0XyA9IF90aGlzLmFkYXB0ZXJfLmdldFRvcEFwcEJhckhlaWdodCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlKCd0b3AnLCAnJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgaGFuZGxlciBmb3IgdGhlIGRlZmF1bHQgc2Nyb2xsIGJlaGF2aW9yIG9mIHRoZSB0b3AgYXBwIGJhci5cbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUYXJnZXRTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSBNYXRoLm1heCh0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpLCAwKTtcbiAgICAgICAgdmFyIGRpZmYgPSBjdXJyZW50U2Nyb2xsUG9zaXRpb24gLSB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl87XG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uXyA9IGN1cnJlbnRTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgLy8gSWYgdGhlIHdpbmRvdyBpcyBiZWluZyByZXNpemVkIHRoZSBsYXN0U2Nyb2xsUG9zaXRpb25fIG5lZWRzIHRvIGJlIHVwZGF0ZWQgYnV0IHRoZVxuICAgICAgICAvLyBjdXJyZW50IHNjcm9sbCBvZiB0aGUgdG9wIGFwcCBiYXIgc2hvdWxkIHN0YXkgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gICAgICAgIGlmICghdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gLT0gZGlmZjtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXykgPiB0aGlzLnRvcEFwcEJhckhlaWdodF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID0gLXRoaXMudG9wQXBwQmFySGVpZ2h0XztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubW92ZVRvcEFwcEJhcl8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVG9wIGFwcCBiYXIgcmVzaXplIGhhbmRsZXIgdGhhdCB0aHJvdHRsZS9kZWJvdW5jZSBmdW5jdGlvbnMgdGhhdCBleGVjdXRlIHVwZGF0ZXMuXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaHJvdHRsZSByZXNpemUgZXZlbnRzIDEwIHAvc1xuICAgICAgICBpZiAoIXRoaXMucmVzaXplVGhyb3R0bGVJZF8pIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplVGhyb3R0bGVJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNpemVUaHJvdHRsZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgICAgICAgICAgX3RoaXMudGhyb3R0bGVkUmVzaXplSGFuZGxlcl8oKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuREVCT1VOQ0VfVEhST1RUTEVfUkVTSVpFX1RJTUVfTVMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucmVzaXplRGVib3VuY2VJZF8pIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZURlYm91bmNlSWRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2l6ZURlYm91bmNlSWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGwoKTtcbiAgICAgICAgICAgIF90aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMucmVzaXplRGVib3VuY2VJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICB9LCBudW1iZXJzLkRFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiB0aGUgRE9NIG5lZWRzIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0ZvclVwZGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvZmZzY3JlZW5Cb3VuZGFyeVRvcCA9IC10aGlzLnRvcEFwcEJhckhlaWdodF87XG4gICAgICAgIHZhciBoYXNBbnlQaXhlbHNPZmZzY3JlZW4gPSB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfIDwgMDtcbiAgICAgICAgdmFyIGhhc0FueVBpeGVsc09uc2NyZWVuID0gdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA+IG9mZnNjcmVlbkJvdW5kYXJ5VG9wO1xuICAgICAgICB2YXIgcGFydGlhbGx5U2hvd2luZyA9IGhhc0FueVBpeGVsc09mZnNjcmVlbiAmJiBoYXNBbnlQaXhlbHNPbnNjcmVlbjtcbiAgICAgICAgLy8gSWYgaXQncyBwYXJ0aWFsbHkgc2hvd2luZywgaXQgY2FuJ3QgYmUgZG9ja2VkLlxuICAgICAgICBpZiAocGFydGlhbGx5U2hvd2luZykge1xuICAgICAgICAgICAgdGhpcy53YXNEb2NrZWRfID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3QgcHJldmlvdXNseSBkb2NrZWQgYW5kIG5vdCBwYXJ0aWFsbHkgc2hvd2luZywgaXQncyBub3cgZG9ja2VkLlxuICAgICAgICAgICAgaWYgKCF0aGlzLndhc0RvY2tlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhc0RvY2tlZF8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc0RvY2tlZFNob3dpbmdfICE9PSBoYXNBbnlQaXhlbHNPbnNjcmVlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEb2NrZWRTaG93aW5nXyA9IGhhc0FueVBpeGVsc09uc2NyZWVuO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0aWFsbHlTaG93aW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gbW92ZSB0aGUgdG9wIGFwcCBiYXIgaWYgbmVlZGVkLlxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLm1vdmVUb3BBcHBCYXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja0ZvclVwZGF0ZV8oKSkge1xuICAgICAgICAgICAgLy8gT25jZSB0aGUgdG9wIGFwcCBiYXIgaXMgZnVsbHkgaGlkZGVuIHdlIHVzZSB0aGUgbWF4IHBvdGVudGlhbCB0b3AgYXBwIGJhciBoZWlnaHQgYXMgb3VyIG9mZnNldFxuICAgICAgICAgICAgLy8gc28gdGhlIHRvcCBhcHAgYmFyIGRvZXNuJ3Qgc2hvdyBpZiB0aGUgd2luZG93IHJlc2l6ZXMgYW5kIHRoZSBuZXcgaGVpZ2h0ID4gdGhlIG9sZCBoZWlnaHQuXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXztcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhvZmZzZXQpID49IHRoaXMudG9wQXBwQmFySGVpZ2h0Xykge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IC1udW1iZXJzLk1BWF9UT1BfQVBQX0JBUl9IRUlHSFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlKCd0b3AnLCBvZmZzZXQgKyAncHgnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgdG9wIGFwcCBiYXIgc2Nyb2xsZWQgdmFsdWVzIGlmIHRoZVxuICAgICAqIHRvcCBhcHAgYmFyIGhlaWdodCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLnRocm90dGxlZFJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9IHRoaXMuYWRhcHRlcl8uZ2V0VG9wQXBwQmFySGVpZ2h0KCk7XG4gICAgICAgIGlmICh0aGlzLnRvcEFwcEJhckhlaWdodF8gIT09IGN1cnJlbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2FzRG9ja2VkXyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gU2luY2UgdGhlIHRvcCBhcHAgYmFyIGhhcyBhIGRpZmZlcmVudCBoZWlnaHQgZGVwZW5kaW5nIG9uIHRoZSBzY3JlZW4gd2lkdGgsIHRoaXNcbiAgICAgICAgICAgIC8vIHdpbGwgZW5zdXJlIHRoYXQgdGhlIHRvcCBhcHAgYmFyIHJlbWFpbnMgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24gaWZcbiAgICAgICAgICAgIC8vIGNvbXBsZXRlbHkgaGlkZGVuIGFuZCBhIHJlc2l6ZSBtYWtlcyB0aGUgdG9wIGFwcCBiYXIgYSBkaWZmZXJlbnQgaGVpZ2h0LlxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyAtPSB0aGlzLnRvcEFwcEJhckhlaWdodF8gLSBjdXJyZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy50b3BBcHBCYXJIZWlnaHRfID0gY3VycmVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbCgpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RvcEFwcEJhckZvdW5kYXRpb247XG59KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVG9wQXBwQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwidmFyIGV4ZWN1dGVTY3JpcHRzID0gcmVxdWlyZShcIi4vbGliL2V4ZWN1dGUtc2NyaXB0c1wiKTtcbnZhciBmb3JFYWNoRWxzID0gcmVxdWlyZShcIi4vbGliL2ZvcmVhY2gtZWxzXCIpO1xudmFyIHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoXCIuL2xpYi9wYXJzZS1vcHRpb25zXCIpO1xudmFyIHN3aXRjaGVzID0gcmVxdWlyZShcIi4vbGliL3N3aXRjaGVzXCIpO1xudmFyIG5ld1VpZCA9IHJlcXVpcmUoXCIuL2xpYi91bmlxdWVpZFwiKTtcblxudmFyIG9uID0gcmVxdWlyZShcIi4vbGliL2V2ZW50cy9vblwiKTtcbnZhciB0cmlnZ2VyID0gcmVxdWlyZShcIi4vbGliL2V2ZW50cy90cmlnZ2VyXCIpO1xuXG52YXIgY2xvbmUgPSByZXF1aXJlKFwiLi9saWIvdXRpbC9jbG9uZVwiKTtcbnZhciBjb250YWlucyA9IHJlcXVpcmUoXCIuL2xpYi91dGlsL2NvbnRhaW5zXCIpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoXCIuL2xpYi91dGlsL2V4dGVuZFwiKTtcbnZhciBub29wID0gcmVxdWlyZShcIi4vbGliL3V0aWwvbm9vcFwiKTtcblxudmFyIFBqYXggPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbnVtUGVuZGluZ1N3aXRjaGVzOiAwLFxuICAgIGhyZWY6IG51bGwsXG4gICAgb3B0aW9uczogbnVsbFxuICB9O1xuXG4gIHRoaXMub3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKTtcbiAgdGhpcy5sb2coXCJQamF4IG9wdGlvbnNcIiwgdGhpcy5vcHRpb25zKTtcblxuICBpZiAodGhpcy5vcHRpb25zLnNjcm9sbFJlc3RvcmF0aW9uICYmIFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiBoaXN0b3J5KSB7XG4gICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gIH1cblxuICB0aGlzLm1heFVpZCA9IHRoaXMubGFzdFVpZCA9IG5ld1VpZCgpO1xuXG4gIHRoaXMucGFyc2VET00oZG9jdW1lbnQpO1xuXG4gIG9uKFxuICAgIHdpbmRvdyxcbiAgICBcInBvcHN0YXRlXCIsXG4gICAgZnVuY3Rpb24oc3QpIHtcbiAgICAgIGlmIChzdC5zdGF0ZSkge1xuICAgICAgICB2YXIgb3B0ID0gY2xvbmUodGhpcy5vcHRpb25zKTtcbiAgICAgICAgb3B0LnVybCA9IHN0LnN0YXRlLnVybDtcbiAgICAgICAgb3B0LnRpdGxlID0gc3Quc3RhdGUudGl0bGU7XG4gICAgICAgIC8vIFNpbmNlIHN0YXRlIGFscmVhZHkgZXhpc3RzLCBwcmV2ZW50IGl0IGZyb20gYmVpbmcgcHVzaGVkIGFnYWluXG4gICAgICAgIG9wdC5oaXN0b3J5ID0gZmFsc2U7XG4gICAgICAgIG9wdC5zY3JvbGxQb3MgPSBzdC5zdGF0ZS5zY3JvbGxQb3M7XG4gICAgICAgIGlmIChzdC5zdGF0ZS51aWQgPCB0aGlzLmxhc3RVaWQpIHtcbiAgICAgICAgICBvcHQuYmFja3dhcmQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdC5mb3J3YXJkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RVaWQgPSBzdC5zdGF0ZS51aWQ7XG5cbiAgICAgICAgLy8gQHRvZG8gaW1wbGVtZW50IGhpc3RvcnkgY2FjaGUgaGVyZSwgYmFzZWQgb24gdWlkXG4gICAgICAgIHRoaXMubG9hZFVybChzdC5zdGF0ZS51cmwsIG9wdCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG59O1xuXG5QamF4LnN3aXRjaGVzID0gc3dpdGNoZXM7XG5cblBqYXgucHJvdG90eXBlID0ge1xuICBsb2c6IHJlcXVpcmUoXCIuL2xpYi9wcm90by9sb2dcIiksXG5cbiAgZ2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLmVsZW1lbnRzKTtcbiAgfSxcblxuICBwYXJzZURPTTogZnVuY3Rpb24oZWwpIHtcbiAgICB2YXIgcGFyc2VFbGVtZW50ID0gcmVxdWlyZShcIi4vbGliL3Byb3RvL3BhcnNlLWVsZW1lbnRcIik7XG4gICAgZm9yRWFjaEVscyh0aGlzLmdldEVsZW1lbnRzKGVsKSwgcGFyc2VFbGVtZW50LCB0aGlzKTtcbiAgfSxcblxuICByZWZyZXNoOiBmdW5jdGlvbihlbCkge1xuICAgIHRoaXMucGFyc2VET00oZWwgfHwgZG9jdW1lbnQpO1xuICB9LFxuXG4gIHJlbG9hZDogZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuXG4gIGF0dGFjaExpbms6IHJlcXVpcmUoXCIuL2xpYi9wcm90by9hdHRhY2gtbGlua1wiKSxcblxuICBhdHRhY2hGb3JtOiByZXF1aXJlKFwiLi9saWIvcHJvdG8vYXR0YWNoLWZvcm1cIiksXG5cbiAgZm9yRWFjaFNlbGVjdG9yczogZnVuY3Rpb24oY2IsIGNvbnRleHQsIERPTWNvbnRleHQpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vbGliL2ZvcmVhY2gtc2VsZWN0b3JzXCIpLmJpbmQodGhpcykoXG4gICAgICB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLFxuICAgICAgY2IsXG4gICAgICBjb250ZXh0LFxuICAgICAgRE9NY29udGV4dFxuICAgICk7XG4gIH0sXG5cbiAgc3dpdGNoU2VsZWN0b3JzOiBmdW5jdGlvbihzZWxlY3RvcnMsIGZyb21FbCwgdG9FbCwgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi9saWIvc3dpdGNoZXMtc2VsZWN0b3JzXCIpLmJpbmQodGhpcykoXG4gICAgICB0aGlzLm9wdGlvbnMuc3dpdGNoZXMsXG4gICAgICB0aGlzLm9wdGlvbnMuc3dpdGNoZXNPcHRpb25zLFxuICAgICAgc2VsZWN0b3JzLFxuICAgICAgZnJvbUVsLFxuICAgICAgdG9FbCxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICB9LFxuXG4gIGxhdGVzdENoYW5jZTogZnVuY3Rpb24oaHJlZikge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IGhyZWY7XG4gIH0sXG5cbiAgb25Td2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgIHRyaWdnZXIod2luZG93LCBcInJlc2l6ZSBzY3JvbGxcIik7XG5cbiAgICB0aGlzLnN0YXRlLm51bVBlbmRpbmdTd2l0Y2hlcy0tO1xuXG4gICAgLy8gZGVib3VuY2UgY2FsbHMsIHNvIHdlIG9ubHkgcnVuIHRoaXMgb25jZSBhZnRlciBhbGwgc3dpdGNoZXMgYXJlIGZpbmlzaGVkLlxuICAgIGlmICh0aGlzLnN0YXRlLm51bVBlbmRpbmdTd2l0Y2hlcyA9PT0gMCkge1xuICAgICAgdGhpcy5hZnRlckFsbFN3aXRjaGVzKCk7XG4gICAgfVxuICB9LFxuXG4gIGxvYWRDb250ZW50OiBmdW5jdGlvbihodG1sLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBodG1sICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0cmlnZ2VyKGRvY3VtZW50LCBcInBqYXg6Y29tcGxldGUgcGpheDplcnJvclwiLCBvcHRpb25zKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0bXBFbCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcInBqYXhcIik7XG5cbiAgICAvLyBwYXJzZSBIVE1MIGF0dHJpYnV0ZXMgdG8gY29weSB0aGVtXG4gICAgLy8gc2luY2Ugd2UgYXJlIGZvcmNlZCB0byB1c2UgZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCAob3V0ZXJIVE1MIGNhbid0IGJlIHVzZWQgZm9yIDxodG1sPilcbiAgICB2YXIgaHRtbFJlZ2V4ID0gLzxodG1sW14+XSs+L2dpO1xuICAgIHZhciBodG1sQXR0cmlic1JlZ2V4ID0gL1xccz9bYS16Ol0rKD86PVsnXCJdW14nXCI+XStbJ1wiXSkqL2dpO1xuICAgIHZhciBtYXRjaGVzID0gaHRtbC5tYXRjaChodG1sUmVnZXgpO1xuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICBtYXRjaGVzID0gbWF0Y2hlc1swXS5tYXRjaChodG1sQXR0cmlic1JlZ2V4KTtcbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICBtYXRjaGVzLnNoaWZ0KCk7XG4gICAgICAgIG1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbihodG1sQXR0cmliKSB7XG4gICAgICAgICAgdmFyIGF0dHIgPSBodG1sQXR0cmliLnRyaW0oKS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgaWYgKGF0dHIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0bXBFbC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJbMF0sIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0bXBFbC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJbMF0sIGF0dHJbMV0uc2xpY2UoMSwgLTEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRtcEVsLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgIHRoaXMubG9nKFxuICAgICAgXCJsb2FkIGNvbnRlbnRcIixcbiAgICAgIHRtcEVsLmRvY3VtZW50RWxlbWVudC5hdHRyaWJ1dGVzLFxuICAgICAgdG1wRWwuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTC5sZW5ndGhcbiAgICApO1xuXG4gICAgLy8gQ2xlYXIgb3V0IGFueSBmb2N1c2VkIGNvbnRyb2xzIGJlZm9yZSBpbnNlcnRpbmcgbmV3IHBhZ2UgY29udGVudHMuXG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgICAgY29udGFpbnMoZG9jdW1lbnQsIHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaFNlbGVjdG9ycyh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCB0bXBFbCwgZG9jdW1lbnQsIG9wdGlvbnMpO1xuICB9LFxuXG4gIGFib3J0UmVxdWVzdDogcmVxdWlyZShcIi4vbGliL2Fib3J0LXJlcXVlc3RcIiksXG5cbiAgZG9SZXF1ZXN0OiByZXF1aXJlKFwiLi9saWIvc2VuZC1yZXF1ZXN0XCIpLFxuXG4gIGhhbmRsZVJlc3BvbnNlOiByZXF1aXJlKFwiLi9saWIvcHJvdG8vaGFuZGxlLXJlc3BvbnNlXCIpLFxuXG4gIGxvYWRVcmw6IGZ1bmN0aW9uKGhyZWYsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID1cbiAgICAgIHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiXG4gICAgICAgID8gZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICAgIDogY2xvbmUodGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMubG9nKFwibG9hZCBocmVmXCIsIGhyZWYsIG9wdGlvbnMpO1xuXG4gICAgLy8gQWJvcnQgYW55IHByZXZpb3VzIHJlcXVlc3RcbiAgICB0aGlzLmFib3J0UmVxdWVzdCh0aGlzLnJlcXVlc3QpO1xuXG4gICAgdHJpZ2dlcihkb2N1bWVudCwgXCJwamF4OnNlbmRcIiwgb3B0aW9ucyk7XG5cbiAgICAvLyBEbyB0aGUgcmVxdWVzdFxuICAgIHRoaXMucmVxdWVzdCA9IHRoaXMuZG9SZXF1ZXN0KFxuICAgICAgaHJlZixcbiAgICAgIG9wdGlvbnMsXG4gICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlLmJpbmQodGhpcylcbiAgICApO1xuICB9LFxuXG4gIGFmdGVyQWxsU3dpdGNoZXM6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEZGIGJ1ZzogV29u4oCZdCBhdXRvZm9jdXMgZmllbGRzIHRoYXQgYXJlIGluc2VydGVkIHZpYSBKUy5cbiAgICAvLyBUaGlzIGJlaGF2aW9yIGlzIGluY29ycmVjdC4gU28gaWYgdGhlcmVzIG5vIGN1cnJlbnQgZm9jdXMsIGF1dG9mb2N1c1xuICAgIC8vIHRoZSBsYXN0IGZpZWxkLlxuICAgIC8vXG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvaHRtbC93Zy9kcmFmdHMvaHRtbC9tYXN0ZXIvZm9ybXMuaHRtbFxuICAgIHZhciBhdXRvZm9jdXNFbCA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlthdXRvZm9jdXNdXCIpKVxuICAgICAgLnBvcCgpO1xuICAgIGlmIChhdXRvZm9jdXNFbCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBhdXRvZm9jdXNFbCkge1xuICAgICAgYXV0b2ZvY3VzRWwuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBleGVjdXRlIHNjcmlwdHMgd2hlbiBET00gaGF2ZSBiZWVuIGNvbXBsZXRlbHkgdXBkYXRlZFxuICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgZm9yRWFjaEVscyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZXhlY3V0ZVNjcmlwdHMoZWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKHN0YXRlLm9wdGlvbnMuaGlzdG9yeSkge1xuICAgICAgaWYgKCF3aW5kb3cuaGlzdG9yeS5zdGF0ZSkge1xuICAgICAgICB0aGlzLmxhc3RVaWQgPSB0aGlzLm1heFVpZCA9IG5ld1VpZCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgICAgIHVpZDogdGhpcy5tYXhVaWQsXG4gICAgICAgICAgICBzY3JvbGxQb3M6IFswLCAwXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZG9jdW1lbnQudGl0bGVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGJyb3dzZXIgaGlzdG9yeVxuICAgICAgdGhpcy5sYXN0VWlkID0gdGhpcy5tYXhVaWQgPSBuZXdVaWQoKTtcblxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBzdGF0ZS5ocmVmLFxuICAgICAgICAgIHRpdGxlOiBzdGF0ZS5vcHRpb25zLnRpdGxlLFxuICAgICAgICAgIHVpZDogdGhpcy5tYXhVaWQsXG4gICAgICAgICAgc2Nyb2xsUG9zOiBbMCwgMF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUub3B0aW9ucy50aXRsZSxcbiAgICAgICAgc3RhdGUuaHJlZlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmZvckVhY2hTZWxlY3RvcnMoZnVuY3Rpb24oZWwpIHtcbiAgICAgIHRoaXMucGFyc2VET00oZWwpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgLy8gRmlyZSBFdmVudHNcbiAgICB0cmlnZ2VyKGRvY3VtZW50LCBcInBqYXg6Y29tcGxldGUgcGpheDpzdWNjZXNzXCIsIHN0YXRlLm9wdGlvbnMpO1xuXG4gICAgaWYgKHR5cGVvZiBzdGF0ZS5vcHRpb25zLmFuYWx5dGljcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBzdGF0ZS5vcHRpb25zLmFuYWx5dGljcygpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5vcHRpb25zLmhpc3RvcnkpIHtcbiAgICAgIC8vIEZpcnN0IHBhcnNlIHVybCBhbmQgY2hlY2sgZm9yIGhhc2ggdG8gb3ZlcnJpZGUgc2Nyb2xsXG4gICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgYS5ocmVmID0gdGhpcy5zdGF0ZS5ocmVmO1xuICAgICAgaWYgKGEuaGFzaCkge1xuICAgICAgICB2YXIgbmFtZSA9IGEuaGFzaC5zbGljZSgxKTtcbiAgICAgICAgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChuYW1lKTtcblxuICAgICAgICB2YXIgY3VydG9wID0gMDtcbiAgICAgICAgdmFyIHRhcmdldCA9XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUobmFtZSlbMF07XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzgxMTEwOTQvY3Jvc3MtYnJvd3Nlci1qYXZhc2NyaXB0LWZ1bmN0aW9uLXRvLWZpbmQtYWN0dWFsLXBvc2l0aW9uLW9mLWFuLWVsZW1lbnQtaW4tcGFnZVxuICAgICAgICAgIGlmICh0YXJnZXQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIGN1cnRvcCArPSB0YXJnZXQub2Zmc2V0VG9wO1xuXG4gICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9IHdoaWxlICh0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgY3VydG9wKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUub3B0aW9ucy5zY3JvbGxUbyAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gU2Nyb2xsIHBhZ2UgdG8gdG9wIG9uIG5ldyBwYWdlIGxvYWRcbiAgICAgICAgaWYgKHN0YXRlLm9wdGlvbnMuc2Nyb2xsVG8ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhzdGF0ZS5vcHRpb25zLnNjcm9sbFRvWzBdLCBzdGF0ZS5vcHRpb25zLnNjcm9sbFRvWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc3RhdGUub3B0aW9ucy5zY3JvbGxUbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXRlLm9wdGlvbnMuc2Nyb2xsUmVzdG9yYXRpb24gJiYgc3RhdGUub3B0aW9ucy5zY3JvbGxQb3MpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhzdGF0ZS5vcHRpb25zLnNjcm9sbFBvc1swXSwgc3RhdGUub3B0aW9ucy5zY3JvbGxQb3NbMV0pO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBudW1QZW5kaW5nU3dpdGNoZXM6IDAsXG4gICAgICBocmVmOiBudWxsLFxuICAgICAgb3B0aW9uczogbnVsbFxuICAgIH07XG4gIH1cbn07XG5cblBqYXguaXNTdXBwb3J0ZWQgPSByZXF1aXJlKFwiLi9saWIvaXMtc3VwcG9ydGVkXCIpO1xuXG4vLyBhcmd1YWJseSBjb3VsZCBkbyBgaWYoIHJlcXVpcmUoXCIuL2xpYi9pcy1zdXBwb3J0ZWRcIikoKSkge2AgYnV0IHRoYXQgbWlnaHQgYmUgYSBsaXR0bGUgdG8gc2ltcGxlXG5pZiAoUGpheC5pc1N1cHBvcnRlZCgpKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gUGpheDtcbn1cbi8vIGlmIHRoZXJlIGlzbuKAmXQgcmVxdWlyZWQgYnJvd3NlciBmdW5jdGlvbnMsIHJldHVybmluZyBzdHVwaWQgYXBpXG5lbHNlIHtcbiAgdmFyIHN0dXBpZFBqYXggPSBub29wO1xuICBmb3IgKHZhciBrZXkgaW4gUGpheC5wcm90b3R5cGUpIHtcbiAgICBpZiAoXG4gICAgICBQamF4LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXG4gICAgICB0eXBlb2YgUGpheC5wcm90b3R5cGVba2V5XSA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICBzdHVwaWRQamF4W2tleV0gPSBub29wO1xuICAgIH1cbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gc3R1cGlkUGpheDtcbn1cbiIsInZhciBub29wID0gcmVxdWlyZShcIi4vdXRpbC9ub29wXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgaWYgKHJlcXVlc3QgJiYgcmVxdWVzdC5yZWFkeVN0YXRlIDwgNCkge1xuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gbm9vcDtcbiAgICByZXF1ZXN0LmFib3J0KCk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG4gIHZhciBjb2RlID0gZWwudGV4dCB8fCBlbC50ZXh0Q29udGVudCB8fCBlbC5pbm5lckhUTUwgfHwgXCJcIjtcbiAgdmFyIHNyYyA9IGVsLnNyYyB8fCBcIlwiO1xuICB2YXIgcGFyZW50ID1cbiAgICBlbC5wYXJlbnROb2RlIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cbiAgaWYgKGNvZGUubWF0Y2goXCJkb2N1bWVudC53cml0ZVwiKSkge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJTY3JpcHQgY29udGFpbnMgZG9jdW1lbnQud3JpdGUuIENhbuKAmXQgYmUgZXhlY3V0ZWQgY29ycmVjdGx5LiBDb2RlIHNraXBwZWQgXCIsXG4gICAgICAgIGVsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gIHNjcmlwdC5pZCA9IGVsLmlkO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoc3JjICE9PSBcIlwiKSB7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICBzY3JpcHQuYXN5bmMgPSBmYWxzZTsgLy8gZm9yY2Ugc3luY2hyb25vdXMgbG9hZGluZyBvZiBwZXJpcGhlcmFsIEpTXG4gIH1cblxuICBpZiAoY29kZSAhPT0gXCJcIikge1xuICAgIHRyeSB7XG4gICAgICBzY3JpcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29kZSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAvLyBvbGQgSUVzIGhhdmUgZnVua3kgc2NyaXB0IG5vZGVzXG4gICAgICBzY3JpcHQudGV4dCA9IGNvZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhlY3V0ZVxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgLy8gYXZvaWQgcG9sbHV0aW9uIG9ubHkgaW4gaGVhZCBvciBib2R5IHRhZ3NcbiAgaWYgKFxuICAgIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSAmJlxuICAgIHBhcmVudC5jb250YWlucyhzY3JpcHQpXG4gICkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwidmFyIGZvckVhY2hFbHMgPSByZXF1aXJlKFwiLi4vZm9yZWFjaC1lbHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWxzLCBldmVudHMsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGV2ZW50cyA9IHR5cGVvZiBldmVudHMgPT09IFwic3RyaW5nXCIgPyBldmVudHMuc3BsaXQoXCIgXCIpIDogZXZlbnRzO1xuXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICBmb3JFYWNoRWxzKGVscywgZnVuY3Rpb24oZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCJ2YXIgZm9yRWFjaEVscyA9IHJlcXVpcmUoXCIuLi9mb3JlYWNoLWVsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbHMsIGV2ZW50cywgb3B0cykge1xuICBldmVudHMgPSB0eXBlb2YgZXZlbnRzID09PSBcInN0cmluZ1wiID8gZXZlbnRzLnNwbGl0KFwiIFwiKSA6IGV2ZW50cztcblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2ZW50O1xuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO1xuICAgIGV2ZW50LmluaXRFdmVudChlLCB0cnVlLCB0cnVlKTtcbiAgICBldmVudC5ldmVudE5hbWUgPSBlO1xuICAgIGlmIChvcHRzKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBldmVudFtrZXldID0gb3B0c1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yRWFjaEVscyhlbHMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICB2YXIgZG9tRml4ID0gZmFsc2U7XG4gICAgICBpZiAoIWVsLnBhcmVudE5vZGUgJiYgZWwgIT09IGRvY3VtZW50ICYmIGVsICE9PSB3aW5kb3cpIHtcbiAgICAgICAgLy8gVEhBTksgWU9VIElFICg5LzEwLzExKVxuICAgICAgICAvLyBkaXNwYXRjaEV2ZW50IGRvZXNuJ3Qgd29yayBpZiB0aGUgZWxlbWVudCBpcyBub3QgaW4gdGhlIERPTVxuICAgICAgICBkb21GaXggPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKGRvbUZpeCkge1xuICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuIiwidmFyIGZvckVhY2hFbHMgPSByZXF1aXJlKFwiLi9mb3JlYWNoLWVsc1wiKTtcbnZhciBldmFsU2NyaXB0ID0gcmVxdWlyZShcIi4vZXZhbC1zY3JpcHRcIik7XG4vLyBGaW5kcyBhbmQgZXhlY3V0ZXMgc2NyaXB0cyAodXNlZCBmb3IgbmV3bHkgYWRkZWQgZWxlbWVudHMpXG4vLyBOZWVkZWQgc2luY2UgaW5uZXJIVE1MIGRvZXMgbm90IHJ1biBzY3JpcHRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG4gIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic2NyaXB0XCIpIHtcbiAgICBldmFsU2NyaXB0KGVsKTtcbiAgfVxuXG4gIGZvckVhY2hFbHMoZWwucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFwiKSwgZnVuY3Rpb24oc2NyaXB0KSB7XG4gICAgaWYgKCFzY3JpcHQudHlwZSB8fCBzY3JpcHQudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInRleHQvamF2YXNjcmlwdFwiKSB7XG4gICAgICBpZiAoc2NyaXB0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH1cbiAgICAgIGV2YWxTY3JpcHQoc2NyaXB0KTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qIGdsb2JhbCBIVE1MQ29sbGVjdGlvbjogdHJ1ZSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVscywgZm4sIGNvbnRleHQpIHtcbiAgaWYgKFxuICAgIGVscyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8XG4gICAgZWxzIGluc3RhbmNlb2YgTm9kZUxpc3QgfHxcbiAgICBlbHMgaW5zdGFuY2VvZiBBcnJheVxuICApIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbHMsIGZuLCBjb250ZXh0KTtcbiAgfVxuICAvLyBhc3N1bWUgc2ltcGxlIERPTSBlbGVtZW50XG4gIHJldHVybiBmbi5jYWxsKGNvbnRleHQsIGVscyk7XG59O1xuIiwidmFyIGZvckVhY2hFbHMgPSByZXF1aXJlKFwiLi9mb3JlYWNoLWVsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWxlY3RvcnMsIGNiLCBjb250ZXh0LCBET01jb250ZXh0KSB7XG4gIERPTWNvbnRleHQgPSBET01jb250ZXh0IHx8IGRvY3VtZW50O1xuICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIGZvckVhY2hFbHMoRE9NY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgY2IsIGNvbnRleHQpO1xuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAvLyBCb3Jyb3dlZCB3aG9sZXNhbGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGVmdW5rdC9qcXVlcnktcGpheFxuICByZXR1cm4gKFxuICAgIHdpbmRvdy5oaXN0b3J5ICYmXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlICYmXG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlICYmXG4gICAgLy8gcHVzaFN0YXRlIGlzbuKAmXQgcmVsaWFibGUgb24gaU9TIHVudGlsIDUuXG4gICAgIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXG4gICAgICAvKChpUG9kfGlQaG9uZXxpUGFkKS4rXFxiT1NcXHMrWzEtNF1cXER8V2ViQXBwc1xcLy4rQ0ZOZXR3b3JrKS9cbiAgICApXG4gICk7XG59O1xuIiwiLyogZ2xvYmFsIF9nYXE6IHRydWUsIGdhOiB0cnVlICovXG5cbnZhciBkZWZhdWx0U3dpdGNoZXMgPSByZXF1aXJlKFwiLi9zd2l0Y2hlc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmVsZW1lbnRzID0gb3B0aW9ucy5lbGVtZW50cyB8fCBcImFbaHJlZl0sIGZvcm1bYWN0aW9uXVwiO1xuICBvcHRpb25zLnNlbGVjdG9ycyA9IG9wdGlvbnMuc2VsZWN0b3JzIHx8IFtcInRpdGxlXCIsIFwiLmpzLVBqYXhcIl07XG4gIG9wdGlvbnMuc3dpdGNoZXMgPSBvcHRpb25zLnN3aXRjaGVzIHx8IHt9O1xuICBvcHRpb25zLnN3aXRjaGVzT3B0aW9ucyA9IG9wdGlvbnMuc3dpdGNoZXNPcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmhpc3RvcnkgPVxuICAgIHR5cGVvZiBvcHRpb25zLmhpc3RvcnkgPT09IFwidW5kZWZpbmVkXCIgPyB0cnVlIDogb3B0aW9ucy5oaXN0b3J5O1xuICBvcHRpb25zLmFuYWx5dGljcyA9XG4gICAgdHlwZW9mIG9wdGlvbnMuYW5hbHl0aWNzID09PSBcImZ1bmN0aW9uXCIgfHwgb3B0aW9ucy5hbmFseXRpY3MgPT09IGZhbHNlXG4gICAgICA/IG9wdGlvbnMuYW5hbHl0aWNzXG4gICAgICA6IGRlZmF1bHRBbmFseXRpY3M7XG4gIG9wdGlvbnMuc2Nyb2xsVG8gPVxuICAgIHR5cGVvZiBvcHRpb25zLnNjcm9sbFRvID09PSBcInVuZGVmaW5lZFwiID8gMCA6IG9wdGlvbnMuc2Nyb2xsVG87XG4gIG9wdGlvbnMuc2Nyb2xsUmVzdG9yYXRpb24gPVxuICAgIHR5cGVvZiBvcHRpb25zLnNjcm9sbFJlc3RvcmF0aW9uICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICA/IG9wdGlvbnMuc2Nyb2xsUmVzdG9yYXRpb25cbiAgICAgIDogdHJ1ZTtcbiAgb3B0aW9ucy5jYWNoZUJ1c3QgPVxuICAgIHR5cGVvZiBvcHRpb25zLmNhY2hlQnVzdCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRydWUgOiBvcHRpb25zLmNhY2hlQnVzdDtcbiAgb3B0aW9ucy5kZWJ1ZyA9IG9wdGlvbnMuZGVidWcgfHwgZmFsc2U7XG4gIG9wdGlvbnMudGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xuICBvcHRpb25zLmN1cnJlbnRVcmxGdWxsUmVsb2FkID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5jdXJyZW50VXJsRnVsbFJlbG9hZCA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgPyBmYWxzZVxuICAgICAgOiBvcHRpb25zLmN1cnJlbnRVcmxGdWxsUmVsb2FkO1xuXG4gIC8vIFdlIGNhbuKAmXQgcmVwbGFjZSBib2R5Lm91dGVySFRNTCBvciBoZWFkLm91dGVySFRNTC5cbiAgLy8gSXQgY3JlYXRlcyBhIGJ1ZyB3aGVyZSBhIG5ldyBib2R5IG9yIGhlYWQgYXJlIGNyZWF0ZWQgaW4gdGhlIERPTS5cbiAgLy8gSWYgeW91IHNldCBoZWFkLm91dGVySFRNTCwgYSBuZXcgYm9keSB0YWcgaXMgYXBwZW5kZWQsIHNvIHRoZSBET00gaGFzIDIgYm9keSBub2RlcywgYW5kIHZpY2UgdmVyc2FcbiAgaWYgKCFvcHRpb25zLnN3aXRjaGVzLmhlYWQpIHtcbiAgICBvcHRpb25zLnN3aXRjaGVzLmhlYWQgPSBkZWZhdWx0U3dpdGNoZXMuc3dpdGNoRWxlbWVudHNBbHQ7XG4gIH1cbiAgaWYgKCFvcHRpb25zLnN3aXRjaGVzLmJvZHkpIHtcbiAgICBvcHRpb25zLnN3aXRjaGVzLmJvZHkgPSBkZWZhdWx0U3dpdGNoZXMuc3dpdGNoRWxlbWVudHNBbHQ7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBkZWZhdWx0QW5hbHl0aWNzKCkge1xuICBpZiAod2luZG93Ll9nYXEpIHtcbiAgICBfZ2FxLnB1c2goW1wiX3RyYWNrUGFnZXZpZXdcIl0pO1xuICB9XG4gIGlmICh3aW5kb3cuZ2EpIHtcbiAgICBnYShcInNlbmRcIiwgXCJwYWdldmlld1wiLCB7IHBhZ2U6IGxvY2F0aW9uLnBhdGhuYW1lLCB0aXRsZTogZG9jdW1lbnQudGl0bGUgfSk7XG4gIH1cbn1cbiIsInZhciBvbiA9IHJlcXVpcmUoXCIuLi9ldmVudHMvb25cIik7XG52YXIgY2xvbmUgPSByZXF1aXJlKFwiLi4vdXRpbC9jbG9uZVwiKTtcblxudmFyIGF0dHJTdGF0ZSA9IFwiZGF0YS1wamF4LXN0YXRlXCI7XG5cbnZhciBmb3JtQWN0aW9uID0gZnVuY3Rpb24oZWwsIGV2ZW50KSB7XG4gIGlmIChpc0RlZmF1bHRQcmV2ZW50ZWQoZXZlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2luY2UgbG9hZFVybCBtb2RpZmllcyBvcHRpb25zIGFuZCB3ZSBtYXkgYWRkIG91ciBvd24gbW9kaWZpY2F0aW9ucyBiZWxvdyxcbiAgLy8gY2xvbmUgaXQgc28gdGhlIGNoYW5nZXMgZG9uJ3QgcGVyc2lzdFxuICB2YXIgb3B0aW9ucyA9IGNsb25lKHRoaXMub3B0aW9ucyk7XG5cbiAgLy8gSW5pdGlhbGl6ZSByZXF1ZXN0T3B0aW9uc1xuICBvcHRpb25zLnJlcXVlc3RPcHRpb25zID0ge1xuICAgIHJlcXVlc3RVcmw6IGVsLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICByZXF1ZXN0TWV0aG9kOiBlbC5nZXRBdHRyaWJ1dGUoXCJtZXRob2RcIikgfHwgXCJHRVRcIlxuICB9O1xuXG4gIC8vIGNyZWF0ZSBhIHRlc3RhYmxlIHZpcnR1YWwgbGluayBvZiB0aGUgZm9ybSBhY3Rpb25cbiAgdmFyIHZpcnRMaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICB2aXJ0TGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBvcHRpb25zLnJlcXVlc3RPcHRpb25zLnJlcXVlc3RVcmwpO1xuXG4gIHZhciBhdHRyVmFsdWUgPSBjaGVja0lmU2hvdWxkQWJvcnQodmlydExpbmtFbGVtZW50LCBvcHRpb25zKTtcbiAgaWYgKGF0dHJWYWx1ZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyU3RhdGUsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAoZWwuZW5jdHlwZSA9PT0gXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIpIHtcbiAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGVsKTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLnJlcXVlc3RQYXJhbXMgPSBwYXJzZUZvcm1FbGVtZW50cyhlbCk7XG4gIH1cblxuICBlbC5zZXRBdHRyaWJ1dGUoYXR0clN0YXRlLCBcInN1Ym1pdFwiKTtcblxuICBvcHRpb25zLnRyaWdnZXJFbGVtZW50ID0gZWw7XG4gIHRoaXMubG9hZFVybCh2aXJ0TGlua0VsZW1lbnQuaHJlZiwgb3B0aW9ucyk7XG59O1xuXG5mdW5jdGlvbiBwYXJzZUZvcm1FbGVtZW50cyhlbCkge1xuICB2YXIgcmVxdWVzdFBhcmFtcyA9IFtdO1xuICB2YXIgZm9ybUVsZW1lbnRzID0gZWwuZWxlbWVudHM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JtRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IGZvcm1FbGVtZW50c1tpXTtcbiAgICB2YXIgdGFnTmFtZSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGpzY3M6ZGlzYWJsZSBkaXNhbGxvd0ltcGxpY2l0VHlwZUNvbnZlcnNpb25cbiAgICBpZiAoXG4gICAgICAhIWVsZW1lbnQubmFtZSAmJlxuICAgICAgZWxlbWVudC5hdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRhZ05hbWUgIT09IFwiYnV0dG9uXCJcbiAgICApIHtcbiAgICAgIC8vIGpzY3M6ZW5hYmxlIGRpc2FsbG93SW1wbGljaXRUeXBlQ29udmVyc2lvblxuICAgICAgdmFyIHR5cGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMudHlwZTtcblxuICAgICAgaWYgKFxuICAgICAgICAhdHlwZSB8fFxuICAgICAgICAodHlwZS52YWx1ZSAhPT0gXCJjaGVja2JveFwiICYmIHR5cGUudmFsdWUgIT09IFwicmFkaW9cIikgfHxcbiAgICAgICAgZWxlbWVudC5jaGVja2VkXG4gICAgICApIHtcbiAgICAgICAgLy8gQnVpbGQgYXJyYXkgb2YgdmFsdWVzIHRvIHN1Ym1pdFxuICAgICAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICAgICAgaWYgKHRhZ05hbWUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICB2YXIgb3B0O1xuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG9wdCA9IGVsZW1lbnQub3B0aW9uc1tqXTtcbiAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgJiYgIW9wdC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICB2YWx1ZXMucHVzaChvcHQuaGFzQXR0cmlidXRlKFwidmFsdWVcIikgPyBvcHQudmFsdWUgOiBvcHQudGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB2YWx1ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICByZXF1ZXN0UGFyYW1zLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogZW5jb2RlVVJJQ29tcG9uZW50KGVsZW1lbnQubmFtZSksXG4gICAgICAgICAgICB2YWx1ZTogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlc1trXSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0UGFyYW1zO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmU2hvdWxkQWJvcnQodmlydExpbmtFbGVtZW50LCBvcHRpb25zKSB7XG4gIC8vIElnbm9yZSBleHRlcm5hbCBsaW5rcy5cbiAgaWYgKFxuICAgIHZpcnRMaW5rRWxlbWVudC5wcm90b2NvbCAhPT0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sIHx8XG4gICAgdmlydExpbmtFbGVtZW50Lmhvc3QgIT09IHdpbmRvdy5sb2NhdGlvbi5ob3N0XG4gICkge1xuICAgIHJldHVybiBcImV4dGVybmFsXCI7XG4gIH1cblxuICAvLyBJZ25vcmUgY2xpY2sgaWYgd2UgYXJlIG9uIGFuIGFuY2hvciBvbiB0aGUgc2FtZSBwYWdlXG4gIGlmIChcbiAgICB2aXJ0TGlua0VsZW1lbnQuaGFzaCAmJlxuICAgIHZpcnRMaW5rRWxlbWVudC5ocmVmLnJlcGxhY2UodmlydExpbmtFbGVtZW50Lmhhc2gsIFwiXCIpID09PVxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShsb2NhdGlvbi5oYXNoLCBcIlwiKVxuICApIHtcbiAgICByZXR1cm4gXCJhbmNob3JcIjtcbiAgfVxuXG4gIC8vIElnbm9yZSBlbXB0eSBhbmNob3IgXCJmb28uaHRtbCNcIlxuICBpZiAodmlydExpbmtFbGVtZW50LmhyZWYgPT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXSArIFwiI1wiKSB7XG4gICAgcmV0dXJuIFwiYW5jaG9yLWVtcHR5XCI7XG4gIH1cblxuICAvLyBpZiBkZWNsYXJlZCBhcyBhIGZ1bGwgcmVsb2FkLCBqdXN0IG5vcm1hbGx5IHN1Ym1pdCB0aGUgZm9ybVxuICBpZiAoXG4gICAgb3B0aW9ucy5jdXJyZW50VXJsRnVsbFJlbG9hZCAmJlxuICAgIHZpcnRMaW5rRWxlbWVudC5ocmVmID09PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF1cbiAgKSB7XG4gICAgcmV0dXJuIFwicmVsb2FkXCI7XG4gIH1cbn1cblxudmFyIGlzRGVmYXVsdFByZXZlbnRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5kZWZhdWx0UHJldmVudGVkIHx8IGV2ZW50LnJldHVyblZhbHVlID09PSBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyU3RhdGUsIFwiXCIpO1xuXG4gIG9uKGVsLCBcInN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGZvcm1BY3Rpb24uY2FsbCh0aGF0LCBlbCwgZXZlbnQpO1xuICB9KTtcbn07XG4iLCJ2YXIgb24gPSByZXF1aXJlKFwiLi4vZXZlbnRzL29uXCIpO1xudmFyIGNsb25lID0gcmVxdWlyZShcIi4uL3V0aWwvY2xvbmVcIik7XG5cbnZhciBhdHRyU3RhdGUgPSBcImRhdGEtcGpheC1zdGF0ZVwiO1xuXG52YXIgbGlua0FjdGlvbiA9IGZ1bmN0aW9uKGVsLCBldmVudCkge1xuICBpZiAoaXNEZWZhdWx0UHJldmVudGVkKGV2ZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFNpbmNlIGxvYWRVcmwgbW9kaWZpZXMgb3B0aW9ucyBhbmQgd2UgbWF5IGFkZCBvdXIgb3duIG1vZGlmaWNhdGlvbnMgYmVsb3csXG4gIC8vIGNsb25lIGl0IHNvIHRoZSBjaGFuZ2VzIGRvbid0IHBlcnNpc3RcbiAgdmFyIG9wdGlvbnMgPSBjbG9uZSh0aGlzLm9wdGlvbnMpO1xuXG4gIHZhciBhdHRyVmFsdWUgPSBjaGVja0lmU2hvdWxkQWJvcnQoZWwsIGV2ZW50KTtcbiAgaWYgKGF0dHJWYWx1ZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyU3RhdGUsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBkb27igJl0IGRvIFwibm90aGluZ1wiIGlmIHVzZXIgdHJ5IHRvIHJlbG9hZCB0aGUgcGFnZSBieSBjbGlja2luZyB0aGUgc2FtZSBsaW5rIHR3aWNlXG4gIGlmIChcbiAgICB0aGlzLm9wdGlvbnMuY3VycmVudFVybEZ1bGxSZWxvYWQgJiZcbiAgICBlbC5ocmVmID09PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF1cbiAgKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJTdGF0ZSwgXCJyZWxvYWRcIik7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbC5zZXRBdHRyaWJ1dGUoYXR0clN0YXRlLCBcImxvYWRcIik7XG5cbiAgb3B0aW9ucy50cmlnZ2VyRWxlbWVudCA9IGVsO1xuICB0aGlzLmxvYWRVcmwoZWwuaHJlZiwgb3B0aW9ucyk7XG59O1xuXG5mdW5jdGlvbiBjaGVja0lmU2hvdWxkQWJvcnQoZWwsIGV2ZW50KSB7XG4gIC8vIERvbuKAmXQgYnJlYWsgYnJvd3NlciBzcGVjaWFsIGJlaGF2aW9yIG9uIGxpbmtzIChsaWtlIHBhZ2UgaW4gbmV3IHdpbmRvdylcbiAgaWYgKFxuICAgIGV2ZW50LndoaWNoID4gMSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXlcbiAgKSB7XG4gICAgcmV0dXJuIFwibW9kaWZpZXJcIjtcbiAgfVxuXG4gIC8vIHdlIGRvIHRlc3Qgb24gaHJlZiBub3cgdG8gcHJldmVudCB1bmV4cGVjdGVkIGJlaGF2aW9yIGlmIGZvciBzb21lIHJlYXNvblxuICAvLyB1c2VyIGhhdmUgaHJlZiB0aGF0IGNhbiBiZSBkeW5hbWljYWxseSB1cGRhdGVkXG5cbiAgLy8gSWdub3JlIGV4dGVybmFsIGxpbmtzLlxuICBpZiAoXG4gICAgZWwucHJvdG9jb2wgIT09IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCB8fFxuICAgIGVsLmhvc3QgIT09IHdpbmRvdy5sb2NhdGlvbi5ob3N0XG4gICkge1xuICAgIHJldHVybiBcImV4dGVybmFsXCI7XG4gIH1cblxuICAvLyBJZ25vcmUgYW5jaG9ycyBvbiB0aGUgc2FtZSBwYWdlIChrZWVwIG5hdGl2ZSBiZWhhdmlvcilcbiAgaWYgKFxuICAgIGVsLmhhc2ggJiZcbiAgICBlbC5ocmVmLnJlcGxhY2UoZWwuaGFzaCwgXCJcIikgPT09XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKGxvY2F0aW9uLmhhc2gsIFwiXCIpXG4gICkge1xuICAgIHJldHVybiBcImFuY2hvclwiO1xuICB9XG5cbiAgLy8gSWdub3JlIGVtcHR5IGFuY2hvciBcImZvby5odG1sI1wiXG4gIGlmIChlbC5ocmVmID09PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF0gKyBcIiNcIikge1xuICAgIHJldHVybiBcImFuY2hvci1lbXB0eVwiO1xuICB9XG59XG5cbnZhciBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBmdW5jdGlvbihldmVudCkge1xuICByZXR1cm4gZXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCBldmVudC5yZXR1cm5WYWx1ZSA9PT0gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBlbC5zZXRBdHRyaWJ1dGUoYXR0clN0YXRlLCBcIlwiKTtcblxuICBvbihlbCwgXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGxpbmtBY3Rpb24uY2FsbCh0aGF0LCBlbCwgZXZlbnQpO1xuICB9KTtcblxuICBvbihcbiAgICBlbCxcbiAgICBcImtleXVwXCIsXG4gICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBsaW5rQWN0aW9uLmNhbGwodGhhdCwgZWwsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcylcbiAgKTtcbn07XG4iLCJ2YXIgY2xvbmUgPSByZXF1aXJlKFwiLi4vdXRpbC9jbG9uZVwiKTtcbnZhciBuZXdVaWQgPSByZXF1aXJlKFwiLi4vdW5pcXVlaWRcIik7XG52YXIgdHJpZ2dlciA9IHJlcXVpcmUoXCIuLi9ldmVudHMvdHJpZ2dlclwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZXNwb25zZVRleHQsIHJlcXVlc3QsIGhyZWYsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IGNsb25lKG9wdGlvbnMgfHwgdGhpcy5vcHRpb25zKTtcbiAgb3B0aW9ucy5yZXF1ZXN0ID0gcmVxdWVzdDtcblxuICAvLyBGYWlsIGlmIHVuYWJsZSB0byBsb2FkIEhUTUwgdmlhIEFKQVhcbiAgaWYgKHJlc3BvbnNlVGV4dCA9PT0gZmFsc2UpIHtcbiAgICB0cmlnZ2VyKGRvY3VtZW50LCBcInBqYXg6Y29tcGxldGUgcGpheDplcnJvclwiLCBvcHRpb25zKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHB1c2ggc2Nyb2xsIHBvc2l0aW9uIHRvIGhpc3RvcnlcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAge1xuICAgICAgdXJsOiBjdXJyZW50U3RhdGUudXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgdGl0bGU6IGN1cnJlbnRTdGF0ZS50aXRsZSB8fCBkb2N1bWVudC50aXRsZSxcbiAgICAgIHVpZDogY3VycmVudFN0YXRlLnVpZCB8fCBuZXdVaWQoKSxcbiAgICAgIHNjcm9sbFBvczogW1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgIF1cbiAgICB9LFxuICAgIGRvY3VtZW50LnRpdGxlLFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICk7XG5cbiAgLy8gQ2hlY2sgZm9yIHJlZGlyZWN0c1xuICB2YXIgb2xkSHJlZiA9IGhyZWY7XG4gIGlmIChyZXF1ZXN0LnJlc3BvbnNlVVJMKSB7XG4gICAgaWYgKGhyZWYgIT09IHJlcXVlc3QucmVzcG9uc2VVUkwpIHtcbiAgICAgIGhyZWYgPSByZXF1ZXN0LnJlc3BvbnNlVVJMO1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKFwiWC1QSkFYLVVSTFwiKSkge1xuICAgIGhyZWYgPSByZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKFwiWC1QSkFYLVVSTFwiKTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKFwiWC1YSFItUmVkaXJlY3RlZC1Ub1wiKSkge1xuICAgIGhyZWYgPSByZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKFwiWC1YSFItUmVkaXJlY3RlZC1Ub1wiKTtcbiAgfVxuXG4gIC8vIEFkZCBiYWNrIHRoZSBoYXNoIGlmIGl0IHdhcyByZW1vdmVkXG4gIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGEuaHJlZiA9IG9sZEhyZWY7XG4gIHZhciBvbGRIYXNoID0gYS5oYXNoO1xuICBhLmhyZWYgPSBocmVmO1xuICBpZiAob2xkSGFzaCAmJiAhYS5oYXNoKSB7XG4gICAgYS5oYXNoID0gb2xkSGFzaDtcbiAgICBocmVmID0gYS5ocmVmO1xuICB9XG5cbiAgdGhpcy5zdGF0ZS5ocmVmID0gaHJlZjtcbiAgdGhpcy5zdGF0ZS5vcHRpb25zID0gb3B0aW9ucztcblxuICB0cnkge1xuICAgIHRoaXMubG9hZENvbnRlbnQocmVzcG9uc2VUZXh0LCBvcHRpb25zKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyaWdnZXIoZG9jdW1lbnQsIFwicGpheDplcnJvclwiLCBvcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLmRlYnVnKSB7XG4gICAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQamF4IHN3aXRjaCBmYWlsOiBcIiwgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5sYXRlc3RDaGFuY2UoaHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICAvLyBJRSBpcyB3ZWlyZFxuICAgIGVsc2UgaWYgKGNvbnNvbGUubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufTtcbiIsInZhciBhdHRyU3RhdGUgPSBcImRhdGEtcGpheC1zdGF0ZVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG4gIHN3aXRjaCAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSBcImFcIjpcbiAgICAgIC8vIG9ubHkgYXR0YWNoIGxpbmsgaWYgZWwgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGxpbmsgYXR0YWNoZWRcbiAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKGF0dHJTdGF0ZSkpIHtcbiAgICAgICAgdGhpcy5hdHRhY2hMaW5rKGVsKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImZvcm1cIjpcbiAgICAgIC8vIG9ubHkgYXR0YWNoIGxpbmsgaWYgZWwgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGxpbmsgYXR0YWNoZWRcbiAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKGF0dHJTdGF0ZSkpIHtcbiAgICAgICAgdGhpcy5hdHRhY2hGb3JtKGVsKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IFwiUGpheCBjYW4gb25seSBiZSBhcHBsaWVkIG9uIDxhPiBvciA8Zm9ybT4gc3VibWl0XCI7XG4gIH1cbn07XG4iLCJ2YXIgdXBkYXRlUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi91dGlsL3VwZGF0ZS1xdWVyeS1zdHJpbmdcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obG9jYXRpb24sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcXVlcnlTdHJpbmc7XG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMgfHwge307XG4gIHZhciByZXF1ZXN0TWV0aG9kID0gKHJlcXVlc3RPcHRpb25zLnJlcXVlc3RNZXRob2QgfHwgXCJHRVRcIikudG9VcHBlckNhc2UoKTtcbiAgdmFyIHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0T3B0aW9ucy5yZXF1ZXN0UGFyYW1zIHx8IG51bGw7XG4gIHZhciBmb3JtRGF0YSA9IHJlcXVlc3RPcHRpb25zLmZvcm1EYXRhIHx8IG51bGw7XG4gIHZhciByZXF1ZXN0UGF5bG9hZCA9IG51bGw7XG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHZhciB0aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XG5cbiAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjYWxsYmFjayhyZXF1ZXN0LnJlc3BvbnNlVGV4dCwgcmVxdWVzdCwgbG9jYXRpb24sIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMCkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCByZXF1ZXN0LCBsb2NhdGlvbiwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjYWxsYmFjayhudWxsLCByZXF1ZXN0LCBsb2NhdGlvbiwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICBjYWxsYmFjayhudWxsLCByZXF1ZXN0LCBsb2NhdGlvbiwgb3B0aW9ucyk7XG4gIH07XG5cbiAgLy8gUHJlcGFyZSB0aGUgcmVxdWVzdCBwYXlsb2FkIGZvciBmb3JtcywgaWYgYXZhaWxhYmxlXG4gIGlmIChyZXF1ZXN0UGFyYW1zICYmIHJlcXVlc3RQYXJhbXMubGVuZ3RoKSB7XG4gICAgLy8gQnVpbGQgcXVlcnkgc3RyaW5nXG4gICAgcXVlcnlTdHJpbmcgPSByZXF1ZXN0UGFyYW1zXG4gICAgICAubWFwKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS5uYW1lICsgXCI9XCIgKyBwYXJhbS52YWx1ZTtcbiAgICAgIH0pXG4gICAgICAuam9pbihcIiZcIik7XG5cbiAgICBzd2l0Y2ggKHJlcXVlc3RNZXRob2QpIHtcbiAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgLy8gUmVzZXQgcXVlcnkgc3RyaW5nIHRvIGF2b2lkIGFuIGlzc3VlIHdpdGggcmVwZWF0IHN1Ym1pc3Npb25zIHdoZXJlIGNoZWNrYm94ZXMgdGhhdCB3ZXJlXG4gICAgICAgIC8vIHByZXZpb3VzbHkgY2hlY2tlZCBhcmUgaW5jb3JyZWN0bHkgcHJlc2VydmVkXG4gICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24uc3BsaXQoXCI/XCIpWzBdO1xuXG4gICAgICAgIC8vIEFwcGVuZCBuZXcgcXVlcnkgc3RyaW5nXG4gICAgICAgIGxvY2F0aW9uICs9IFwiP1wiICsgcXVlcnlTdHJpbmc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAvLyBTZW5kIHF1ZXJ5IHN0cmluZyBhcyByZXF1ZXN0IHBheWxvYWRcbiAgICAgICAgcmVxdWVzdFBheWxvYWQgPSBxdWVyeVN0cmluZztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2UgaWYgKGZvcm1EYXRhKSB7XG4gICAgcmVxdWVzdFBheWxvYWQgPSBmb3JtRGF0YTtcbiAgfVxuXG4gIC8vIEFkZCBhIHRpbWVzdGFtcCBhcyBwYXJ0IG9mIHRoZSBxdWVyeSBzdHJpbmcgaWYgY2FjaGUgYnVzdGluZyBpcyBlbmFibGVkXG4gIGlmIChvcHRpb25zLmNhY2hlQnVzdCkge1xuICAgIGxvY2F0aW9uID0gdXBkYXRlUXVlcnlTdHJpbmcobG9jYXRpb24sIFwidFwiLCBEYXRlLm5vdygpKTtcbiAgfVxuXG4gIHJlcXVlc3Qub3BlbihyZXF1ZXN0TWV0aG9kLCBsb2NhdGlvbiwgdHJ1ZSk7XG4gIHJlcXVlc3QudGltZW91dCA9IHRpbWVvdXQ7XG4gIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1QSkFYXCIsIFwidHJ1ZVwiKTtcbiAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgIFwiWC1QSkFYLVNlbGVjdG9yc1wiLFxuICAgIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuc2VsZWN0b3JzKVxuICApO1xuXG4gIC8vIFNlbmQgdGhlIHByb3BlciBoZWFkZXIgaW5mb3JtYXRpb24gZm9yIFBPU1QgZm9ybXNcbiAgaWYgKHJlcXVlc3RQYXlsb2FkICYmIHJlcXVlc3RNZXRob2QgPT09IFwiUE9TVFwiICYmICFmb3JtRGF0YSkge1xuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgIFwiQ29udGVudC1UeXBlXCIsXG4gICAgICBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3Quc2VuZChyZXF1ZXN0UGF5bG9hZCk7XG5cbiAgcmV0dXJuIHJlcXVlc3Q7XG59O1xuIiwidmFyIGZvckVhY2hFbHMgPSByZXF1aXJlKFwiLi9mb3JlYWNoLWVsc1wiKTtcblxudmFyIGRlZmF1bHRTd2l0Y2hlcyA9IHJlcXVpcmUoXCIuL3N3aXRjaGVzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFxuICBzd2l0Y2hlcyxcbiAgc3dpdGNoZXNPcHRpb25zLFxuICBzZWxlY3RvcnMsXG4gIGZyb21FbCxcbiAgdG9FbCxcbiAgb3B0aW9uc1xuKSB7XG4gIHZhciBzd2l0Y2hlc1F1ZXVlID0gW107XG5cbiAgc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICB2YXIgbmV3RWxzID0gZnJvbUVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHZhciBvbGRFbHMgPSB0b0VsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGlmICh0aGlzLmxvZykge1xuICAgICAgdGhpcy5sb2coXCJQamF4IHN3aXRjaFwiLCBzZWxlY3RvciwgbmV3RWxzLCBvbGRFbHMpO1xuICAgIH1cbiAgICBpZiAobmV3RWxzLmxlbmd0aCAhPT0gb2xkRWxzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgXCJET00gZG9lc27igJl0IGxvb2sgdGhlIHNhbWUgb24gbmV3IGxvYWRlZCBwYWdlOiDigJlcIiArXG4gICAgICAgIHNlbGVjdG9yICtcbiAgICAgICAgXCLigJkgLSBuZXcgXCIgK1xuICAgICAgICBuZXdFbHMubGVuZ3RoICtcbiAgICAgICAgXCIsIG9sZCBcIiArXG4gICAgICAgIG9sZEVscy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yRWFjaEVscyhcbiAgICAgIG5ld0VscyxcbiAgICAgIGZ1bmN0aW9uKG5ld0VsLCBpKSB7XG4gICAgICAgIHZhciBvbGRFbCA9IG9sZEVsc1tpXTtcbiAgICAgICAgaWYgKHRoaXMubG9nKSB7XG4gICAgICAgICAgdGhpcy5sb2coXCJuZXdFbFwiLCBuZXdFbCwgXCJvbGRFbFwiLCBvbGRFbCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBzd2l0Y2hlc1tzZWxlY3Rvcl1cbiAgICAgICAgICA/IHN3aXRjaGVzW3NlbGVjdG9yXS5iaW5kKFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICBvbGRFbCxcbiAgICAgICAgICAgICAgbmV3RWwsXG4gICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgIHN3aXRjaGVzT3B0aW9uc1tzZWxlY3Rvcl1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGRlZmF1bHRTd2l0Y2hlcy5vdXRlckhUTUwuYmluZCh0aGlzLCBvbGRFbCwgbmV3RWwsIG9wdGlvbnMpO1xuXG4gICAgICAgIHN3aXRjaGVzUXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH0sIHRoaXMpO1xuXG4gIHRoaXMuc3RhdGUubnVtUGVuZGluZ1N3aXRjaGVzID0gc3dpdGNoZXNRdWV1ZS5sZW5ndGg7XG5cbiAgc3dpdGNoZXNRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKHF1ZXVlZFN3aXRjaCkge1xuICAgIHF1ZXVlZFN3aXRjaCgpO1xuICB9KTtcbn07XG4iLCJ2YXIgb24gPSByZXF1aXJlKFwiLi9ldmVudHMvb25cIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvdXRlckhUTUw6IGZ1bmN0aW9uKG9sZEVsLCBuZXdFbCkge1xuICAgIG9sZEVsLm91dGVySFRNTCA9IG5ld0VsLm91dGVySFRNTDtcbiAgICB0aGlzLm9uU3dpdGNoKCk7XG4gIH0sXG5cbiAgaW5uZXJIVE1MOiBmdW5jdGlvbihvbGRFbCwgbmV3RWwpIHtcbiAgICBvbGRFbC5pbm5lckhUTUwgPSBuZXdFbC5pbm5lckhUTUw7XG5cbiAgICBpZiAobmV3RWwuY2xhc3NOYW1lID09PSBcIlwiKSB7XG4gICAgICBvbGRFbC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkRWwuY2xhc3NOYW1lID0gbmV3RWwuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHRoaXMub25Td2l0Y2goKTtcbiAgfSxcblxuICBzd2l0Y2hFbGVtZW50c0FsdDogZnVuY3Rpb24ob2xkRWwsIG5ld0VsKSB7XG4gICAgb2xkRWwuaW5uZXJIVE1MID0gbmV3RWwuaW5uZXJIVE1MO1xuXG4gICAgLy8gQ29weSBhdHRyaWJ1dGVzIGZyb20gdGhlIG5ldyBlbGVtZW50IHRvIHRoZSBvbGQgb25lXG4gICAgaWYgKG5ld0VsLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgdmFyIGF0dHJzID0gbmV3RWwuYXR0cmlidXRlcztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb2xkRWwuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW0oYXR0cnNbaV0uY2xvbmVOb2RlKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub25Td2l0Y2goKTtcbiAgfSxcblxuICAvLyBFcXVpdmFsZW50IHRvIG91dGVySFRNTCgpLCBidXQgZG9lc24ndCByZXF1aXJlIHN3aXRjaEVsZW1lbnRzQWx0KCkgZm9yIDxoZWFkPiBhbmQgPGJvZHk+XG4gIHJlcGxhY2VOb2RlOiBmdW5jdGlvbihvbGRFbCwgbmV3RWwpIHtcbiAgICBvbGRFbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbCwgb2xkRWwpO1xuICAgIHRoaXMub25Td2l0Y2goKTtcbiAgfSxcblxuICBzaWRlQnlTaWRlOiBmdW5jdGlvbihvbGRFbCwgbmV3RWwsIG9wdGlvbnMsIHN3aXRjaE9wdGlvbnMpIHtcbiAgICB2YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuICAgIHZhciBlbHNUb1JlbW92ZSA9IFtdO1xuICAgIHZhciBlbHNUb0FkZCA9IFtdO1xuICAgIHZhciBmcmFnVG9BcHBlbmQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgdmFyIGFuaW1hdGlvbkV2ZW50TmFtZXMgPVxuICAgICAgXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmRcIjtcbiAgICB2YXIgYW5pbWF0ZWRFbHNOdW1iZXIgPSAwO1xuICAgIHZhciBzZXh5QW5pbWF0aW9uRW5kID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgLy8gZW5kIHRyaWdnZXJlZCBieSBhbiBhbmltYXRpb24gb24gYSBjaGlsZFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGVkRWxzTnVtYmVyLS07XG4gICAgICBpZiAoYW5pbWF0ZWRFbHNOdW1iZXIgPD0gMCAmJiBlbHNUb1JlbW92ZSkge1xuICAgICAgICBlbHNUb1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgLy8gYnJvd3NpbmcgcXVpY2tseSBjYW4gbWFrZSB0aGUgZWxcbiAgICAgICAgICAvLyBhbHJlYWR5IHJlbW92ZWQgYnkgbGFzdCBwYWdlIHVwZGF0ZSA/XG4gICAgICAgICAgaWYgKGVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxzVG9BZGQuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIiksXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXBqYXgtY2xhc3Nlc1wiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxzVG9BZGQgPSBudWxsOyAvLyBmcmVlIG1lbW9yeVxuICAgICAgICBlbHNUb1JlbW92ZSA9IG51bGw7IC8vIGZyZWUgbWVtb3J5XG5cbiAgICAgICAgLy8gdGhpcyBpcyB0byB0cmlnZ2VyIHNvbWUgcmVwYWludCAoZXhhbXBsZTogcGljdHVyZWZpbGwpXG4gICAgICAgIHRoaXMub25Td2l0Y2goKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICBzd2l0Y2hPcHRpb25zID0gc3dpdGNoT3B0aW9ucyB8fCB7fTtcblxuICAgIGZvckVhY2guY2FsbChvbGRFbC5jaGlsZE5vZGVzLCBmdW5jdGlvbihlbCkge1xuICAgICAgZWxzVG9SZW1vdmUucHVzaChlbCk7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1QamF4LXJlbW92ZVwiKSkge1xuICAgICAgICAvLyBmb3IgZmFzdCBzd2l0Y2gsIGNsZWFuIGVsZW1lbnQgdGhhdCBqdXN0IGhhdmUgYmVlbiBhZGRlZCwgJiBub3QgY2xlYW5lZCB5ZXQuXG4gICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXBqYXgtY2xhc3Nlc1wiKSkge1xuICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgICAgICAgZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIiksXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXBqYXgtY2xhc3Nlc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwianMtUGpheC1yZW1vdmVcIik7XG4gICAgICAgIGlmIChzd2l0Y2hPcHRpb25zLmNhbGxiYWNrcyAmJiBzd2l0Y2hPcHRpb25zLmNhbGxiYWNrcy5yZW1vdmVFbGVtZW50KSB7XG4gICAgICAgICAgc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MucmVtb3ZlRWxlbWVudChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcykge1xuICAgICAgICAgIGVsLmNsYXNzTmFtZSArPVxuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLnJlbW92ZSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAob3B0aW9ucy5iYWNrd2FyZFxuICAgICAgICAgICAgICA/IHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcy5iYWNrd2FyZFxuICAgICAgICAgICAgICA6IHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcy5mb3J3YXJkKTtcbiAgICAgICAgfVxuICAgICAgICBhbmltYXRlZEVsc051bWJlcisrO1xuICAgICAgICBvbihlbCwgYW5pbWF0aW9uRXZlbnROYW1lcywgc2V4eUFuaW1hdGlvbkVuZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3JFYWNoLmNhbGwobmV3RWwuY2hpbGROb2RlcywgZnVuY3Rpb24oZWwpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgdmFyIGFkZENsYXNzZXMgPSBcIlwiO1xuICAgICAgICBpZiAoc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzKSB7XG4gICAgICAgICAgYWRkQ2xhc3NlcyA9XG4gICAgICAgICAgICBcIiBqcy1QamF4LWFkZCBcIiArXG4gICAgICAgICAgICBzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMuYWRkICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIChvcHRpb25zLmJhY2t3YXJkXG4gICAgICAgICAgICAgID8gc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLmZvcndhcmRcbiAgICAgICAgICAgICAgOiBzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMuYmFja3dhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2l0Y2hPcHRpb25zLmNhbGxiYWNrcyAmJiBzd2l0Y2hPcHRpb25zLmNhbGxiYWNrcy5hZGRFbGVtZW50KSB7XG4gICAgICAgICAgc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MuYWRkRWxlbWVudChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWwuY2xhc3NOYW1lICs9IGFkZENsYXNzZXM7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtcGpheC1jbGFzc2VzXCIsIGFkZENsYXNzZXMpO1xuICAgICAgICBlbHNUb0FkZC5wdXNoKGVsKTtcbiAgICAgICAgZnJhZ1RvQXBwZW5kLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgYW5pbWF0ZWRFbHNOdW1iZXIrKztcbiAgICAgICAgb24oZWwsIGFuaW1hdGlvbkV2ZW50TmFtZXMsIHNleHlBbmltYXRpb25FbmQsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gcGFzcyBhbGwgY2xhc3NOYW1lIG9mIHRoZSBwYXJlbnRcbiAgICBvbGRFbC5jbGFzc05hbWUgPSBuZXdFbC5jbGFzc05hbWU7XG4gICAgb2xkRWwuYXBwZW5kQ2hpbGQoZnJhZ1RvQXBwZW5kKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgY291bnRlciA9IDA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWQgPSBcInBqYXhcIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgXCJfXCIgKyBjb3VudGVyO1xuICAgIGNvdW50ZXIrKztcbiAgICByZXR1cm4gaWQ7XG4gIH07XG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChudWxsID09PSBvYmogfHwgXCJvYmplY3RcIiAhPT0gdHlwZW9mIG9iaikge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgdmFyIGNvcHkgPSBvYmouY29uc3RydWN0b3IoKTtcbiAgZm9yICh2YXIgYXR0ciBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICBjb3B5W2F0dHJdID0gb2JqW2F0dHJdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29weTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGRvYywgc2VsZWN0b3JzLCBlbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzZWxlY3RlZEVscyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yc1tpXSk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZWxlY3RlZEVscy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHNlbGVjdGVkRWxzW2pdLmNvbnRhaW5zKGVsKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgLy8gQXZvaWQgYnVncyB3aGVuIGhhc093blByb3BlcnR5IGlzIHNoYWRvd2VkXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdG9ba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVyaSwga2V5LCB2YWx1ZSkge1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKFs/Jl0pXCIgKyBrZXkgKyBcIj0uKj8oJnwkKVwiLCBcImlcIik7XG4gIHZhciBzZXBhcmF0b3IgPSB1cmkuaW5kZXhPZihcIj9cIikgIT09IC0xID8gXCImXCIgOiBcIj9cIjtcbiAgaWYgKHVyaS5tYXRjaChyZSkpIHtcbiAgICByZXR1cm4gdXJpLnJlcGxhY2UocmUsIFwiJDFcIiArIGtleSArIFwiPVwiICsgdmFsdWUgKyBcIiQyXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1cmkgKyBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICB9XG59O1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxOSBNYXNoaXJvXG4gKiBAZGVzY3JpcHRpb24gbWF0ZXJpYWwtY29tcG9uZW50cyBpbml0aWFsIGNvbmZpZ3VyYXRpb25cbiAqIEBhdXRob3IgTWFzaGlyb1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuaW1wb3J0IHsgTURDUmlwcGxlIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZSc7XG5pbXBvcnQgeyBNRENUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwvdGV4dGZpZWxkJztcbmltcG9ydCB7IE1EQ1RvcEFwcEJhciB9IGZyb20gJ0BtYXRlcmlhbC90b3AtYXBwLWJhcic7XG5cbmNvbnN0IENvbmYgPSBbXG4gICAgWycubWRjLXRvcC1hcHAtYmFyJywgTURDVG9wQXBwQmFyXSxcbiAgICBbJy5tZGMtdGV4dC1maWVsZCcsIE1EQ1RleHRGaWVsZF0sXG4gICAgW1xuICAgICAgICBbXG4gICAgICAgICAgICAnLm1kYy1idXR0b24nLFxuICAgICAgICAgICAgJy5wcmltYXJ5LWFjdGlvbicsXG4gICAgICAgIF0sXG4gICAgICAgIE1EQ1JpcHBsZVxuICAgIF0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IENvbmYiLCIvKipcbiAqIENvcHlyaWdodCAyMDE5IE1hc2hpcm9cbiAqIEBkZXNjcmlwdGlvbiBtYXRlcmlhbC1jb21wb25lbnRzIGluaXRpYWwgaGFuZGxlclxuICogQGF1dGhvciBNYXNoaXJvXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0IG1kY0NvbmYgZnJvbSBcIi4vbWRjQ29uZlwiXG5cbmNvbnN0IENvbmYgPSBtZGNDb25mXG5cbi8qKiBcbiAqIEluaXRpYWwgW21hdGVyaWFsLWNvbXBvbmVudHMtd2ViXShodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi8pIFxuICogdGhyb3VnaCBjb25maWd1cmF0aW9uIGluIGBtZGNDb25mLnRzYGAuXG4gKiBTZWUgPGh0dHBzOi8vZ2l0LmlvL0plZ0hKPlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbXBvbmVudHMgPSBbXVxuICAgIGZvciAoY29uc3QgaSBvZiBDb25mKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGlbMF0pID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBpWzBdXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IGlbMV1cbiAgICAgICAgICAgIGNvbXBvbmVudHMubWFwLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb21wb25lbnQpLCBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcihlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGlbMF0pID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBpWzBdLmpvaW4oJywnKVxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBpWzFdXG4gICAgICAgICAgICBjb21wb25lbnRzLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29tcG9uZW50KSwgZnVuY3Rpb24gKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxOSBNYXNoaXJvXG4gKiBAZGVzY3JpcHRpb24gTWFpblxuICogQGF1dGhvciBNYXNoaXJvXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG5pbXBvcnQgY292ZXJJbWdJbmkgZnJvbSBcIi4vbW9kdWxlcy9jb3ZlckltZ0luaXRcIlxuaW1wb3J0IGhlYWRlckJhclNjcm9sbEhhbmRsZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXJCYXJTY3JvbGxIYW5kbGVyXCJcbmltcG9ydCBtZGNJbml0IGZyb20gXCIuL2NvbXBvbmVudHMvbWRjSW5pdFwiXG5pbXBvcnQgUGpheCBmcm9tIFwicGpheFwiXG5pbXBvcnQgZ2V0SGV4RmlsdGVyIGZyb20gXCIuL21vZHVsZXMvaGV4RmlsdGVyXCJcbmltcG9ydCByZ2IyaGV4IGZyb20gXCIuL21vZHVsZXMvcmdiMmhleFwiXG5cbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgaGVhZGVyQmFyU2Nyb2xsSGFuZGxlcigpXG59XG5cbi8vIFRPRE86IGdsb2JhbCBjb25maWd1cmF0aW9uXG4vLyBUT0RPOiB0cmFuc3BhcmVudCBiZWZvcmUgY2FsY3VsYXRpb24gYmVlbiBkb25lIVxuLy8gbGV0IHRoZW1lUHJpbWFyeUNvbG9yID0gcmdiMmhleCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKSkuYmFja2dyb3VuZENvbG9yKVxubGV0IHRoZW1lUHJpbWFyeUNvbG9yID0gJyNmY2I4YWInXG5sZXQgdGhlbWVDb2xvckZpbHRlciA9IGdldEhleEZpbHRlcih0aGVtZVByaW1hcnlDb2xvcilcblxubGV0IEluaXRGdW4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvdmVySW1nSW5pKClcbiAgbWRjSW5pdCgpXG4gIFxuICBsZXQgZm9vdGVyQmVmb3JlID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWJlZm9yZVwiKVxuICBpZiAodHlwZW9mIChmb290ZXJCZWZvcmUpICE9PSAndW5kZWZpbmVkJyAmJiBmb290ZXJCZWZvcmUgIT09IG51bGwpIHtcbiAgICAvLyBUT0RPOiBzZXQgdGhlbWUgY29sb3IgZnVuY3Rpb24hXG4gICAgZm9vdGVyQmVmb3JlLnN0eWxlLmZpbHRlciA9IHRoZW1lQ29sb3JGaWx0ZXJcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBJbml0RnVuKClcblxuICBsZXQgcGpheCA9IG5ldyBQamF4KHtcbiAgICBlbGVtZW50czogXCJhXCIsIC8vIGRlZmF1bHQgaXMgXCJhW2hyZWZdLCBmb3JtW2FjdGlvbl1cIlxuICAgIHNlbGVjdG9yczogW1widGl0bGVcIiwgXCIjcm9vdFwiXSxcbiAgICBjYWNoZUJ1c3Q6IHRydWVcbiAgfSlcblxuICBmdW5jdGlvbiBwamF4UmVsb2FkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdwamF4OmNvbXBsZXRlJylcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL1wiKSB7XG4gICAgICBjb25zb2xlLmxvZyhgaG9tZSFgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgbm90IGhvbWUhYClcbiAgICB9XG4gICAgSW5pdEZ1bigpXG4gIH1cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGpheDpjb21wbGV0ZScsIHBqYXhSZWxvYWQpXG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxOSBNYXNoaXJvXG4gKiBAZGVzY3JpcHRpb24gU2FrdXJhIHRoZW1lIG1vZHVsZVxuICogQGF1dGhvciBNYXNoaXJvXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncGFyYWxsYXgtanMnXG5cbi8qKlxuICogSW5pdGlhbCBpbmRleCBjb3ZlciBpbWFnZSBhbmQgaW1hZ2UgYm94LlxuICogSW5jbHVkZSBQYXJhbGxheCBib3ggaW5pdGlhbCBhbmQgYCNjb3Zlci1pbWctY29udGFpbmVyYCBzaXplIGluaXRpYWwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiB5b3UgbWF5IGNhbGN1bGF0ZSBpbiBjc3MuLi5cbiAgICBsZXQgY292ZXJJbWdDb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3Zlci1pbWctY29udGFpbmVyXCIpXG4gICAgaWYgKHR5cGVvZiAoY292ZXJJbWdDb250YWluZXIpICE9PSAndW5kZWZpbmVkJyAmJiBjb3ZlckltZ0NvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICAvLyBjb3ZlckltZ0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9cHhgIC8vY3NzIGluc3RlYWRcblxuICAgICAgICBpbnRlcmZhY2UgTG9vc2VPYmplY3Qge1xuICAgICAgICAgICAgW2tleTogc3RyaW5nXTogYW55XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogY292ZXI6IGBpbWcjY292ZXItaW1nYFxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGNvdmVySW1nOiBMb29zZU9iamVjdCA9IHt9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBtYXJrOiBgZmlndXJlI2NvdmVyLWltZy1jb250YWluZXJgXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgY292ZXJCb3g6IExvb3NlT2JqZWN0ID0ge31cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGxheWVyOiBgZGl2I2ltZy12aWV3YFxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGNvdmVyVmlldzogTG9vc2VPYmplY3QgPSB7fVxuXG4gICAgICAgIC8vIGNvdmVySW1nLmUgPSA8SFRNTEltYWdlRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdmVyLWltZ1wiKVxuICAgICAgICAvLyBjb3ZlckltZy53ID0gPG51bWJlcj5jb3ZlckltZy5lLm5hdHVyYWxXaWR0aFxuICAgICAgICAvLyBjb3ZlckltZy5oID0gPG51bWJlcj5jb3ZlckltZy5lLm5hdHVyYWxIZWlnaHRcblxuICAgICAgICAvLyBjb3ZlckJveC5lID0gPEhUTUxJbWFnZUVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3Zlci1pbWctY29udGFpbmVyXCIpXG4gICAgICAgIC8vIGNvdmVyQm94LncgPSA8bnVtYmVyPmNvdmVyQm94LmUub2Zmc2V0V2lkdGhcbiAgICAgICAgLy8gY292ZXJCb3guaCA9IDxudW1iZXI+Y292ZXJCb3guZS5vZmZzZXRIZWlnaHRcblxuICAgICAgICAvLyBjb3ZlclZpZXcuZSA9IDxIVE1MSW1hZ2VFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nLXZpZXdcIilcblxuICAgICAgICAvLyBjb3ZlckJveC5lLnN0eWxlLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodH1weGBcblxuICAgICAgICAvLyBjb3ZlckJveC5mID0gKGNvdmVyQm94LncgPj0gMTAwMCB8fCBjb3ZlckJveC5oID49IDEwMDApID8gMTAwMCA6IDUwMFxuICAgICAgICAvLyBpZiAoY292ZXJCb3gudyA+PSBjb3ZlckJveC5oKSB7XG4gICAgICAgIC8vICAgICBjb3ZlckJveC5pID0gY292ZXJCb3gudyAvIGNvdmVyQm94LmYgKiA1MDtcbiAgICAgICAgLy8gICAgIGNvdmVyQm94LnkgPSBjb3ZlckJveC5pO1xuICAgICAgICAvLyAgICAgY292ZXJCb3gueCA9IGNvdmVyQm94LmkgKiBjb3ZlckJveC53IC8gY292ZXJCb3guaDtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGNvdmVyQm94LmkgPSBjb3ZlckJveC5oIC8gY292ZXJCb3guZiAqIDUwO1xuICAgICAgICAvLyAgICAgY292ZXJCb3gueCA9IGNvdmVyQm94Lmk7XG4gICAgICAgIC8vICAgICBjb3ZlckJveC55ID0gY292ZXJCb3guaSAqIGNvdmVyQm94LmggLyBjb3ZlckJveC53O1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gY292ZXJWaWV3LmUuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgLy8gd2lkdGg6ICR7Y292ZXJCb3gudyArIGNvdmVyQm94Lnh9cHg7IFxuICAgICAgICAvLyBoZWlnaHQ6ICR7Y292ZXJCb3guaCArIGNvdmVyQm94Lnl9cHg7IFxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogJHstMC41ICogY292ZXJCb3gueH1weDsgXG4gICAgICAgIC8vIG1hcmdpbi10b3A6ICR7LTAuNSAqIGNvdmVyQm94Lnl9cHhgXG5cbiAgICAgICAgLy8gY292ZXJJbWcuZS5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAvLyB3aWR0aDogJHtjb3ZlclZpZXcudyArIGNvdmVyVmlldy54fXB4O1xuICAgICAgICAvLyBoZWlnaHQ6ICR7Y292ZXJWaWV3LmggKyBjb3ZlclZpZXcueX1weGBcblxuICAgICAgICAvLyBpZiAoIWNvdmVySW1nLncpIHtcbiAgICAgICAgLy8gICAgIGNvdmVySW1nLncgPSBjb3ZlckltZy5lLm9mZnNldFdpZHRoXG4gICAgICAgIC8vICAgICBjb3ZlckltZy5oID0gY292ZXJJbWcuZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBjb3ZlckltZy5fdyA9IGNvdmVySW1nLmUucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICAvLyBjb3ZlckltZy5faCA9IGNvdmVySW1nLmUucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgLy8gY292ZXJJbWcucmF0aW8gPSBjb3ZlckltZy5oIC8gY292ZXJJbWcud1xuXG4gICAgICAgIC8vIGlmIChjb3ZlckltZy5faCAvIGNvdmVySW1nLl93ID4gY292ZXJJbWcucmF0aW8pIHtcbiAgICAgICAgLy8gICAgIGNvdmVySW1nLmUuc3R5bGUuaGVpZ2h0ID0gY292ZXJJbWcuX2ggKyAncHgnO1xuICAgICAgICAvLyAgICAgY292ZXJJbWcuZS5zdHlsZS53aWR0aCA9IGNvdmVySW1nLl9oIC8gY292ZXJJbWcucmF0aW8gKyAncHgnO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgY292ZXJJbWcuZS5zdHlsZS53aWR0aCA9IGNvdmVySW1nLl93ICsgJ3B4JztcbiAgICAgICAgLy8gICAgIGNvdmVySW1nLmUuc3R5bGUuaGVpZ2h0ID0gY292ZXJJbWcuX3cgKiBjb3ZlckltZy5yYXRpbyArICdweCc7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBjb3ZlckltZy5lLnN0eWxlLmxlZnQgPSAoY292ZXJJbWcuX3cgLSBwYXJzZUludChjb3ZlckltZy5lLnN0eWxlLndpZHRoKSkgLyAyICsgJ3B4JztcbiAgICAgICAgLy8gY292ZXJJbWcuZS5zdHlsZS50b3AgPSAoY292ZXJJbWcuX2ggLSBwYXJzZUludChjb3ZlckltZy5lLnN0eWxlLmhlaWdodCkpIC8gMiArICdweCc7XG5cbiAgICAgICAgLy8gbGV0IHNjZW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdmVyLWltZy1jb250YWluZXInKVxuICAgICAgICAvLyBsZXQgcGFyYWxsYXhJbnN0YW5jZSA9IG5ldyBQYXJhbGxheChzY2VuZSk7XG4gICAgfVxufSIsIi8qKlxuICogQGRlc2NyaXB0aW9uIFNha3VyYSB0aGVtZSBtb2R1bGVcbiAqIEBhdXRob3IgTWFzaGlyb1xuICogQHNpbmNlIDE5LzEwLzMxXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG5pbXBvcnQgc2Nyb2xsRGlyZWN0aW9uIGZyb20gXCIuL3Njcm9sbERpcmVjdGlvblwiXG5cbi8qKlxuICogU2l0ZSB0b3AgYmFyIGhhbmRsZXIgd2hlbiBwYWdlIHNjcm9sbFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGVsZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdi1oZWFkZXJcIilcbiAgICBpZiAoc2Nyb2xsRGlyZWN0aW9uKCd5JykgPT0gJ2Rvd24nKSB7XG4gICAgICAgIGVsZS5zdHlsZS50b3AgPSBgLTEyMHB4YFxuICAgIH1cbiAgICBlbHNlIGlmIChzY3JvbGxEaXJlY3Rpb24oJ3knKSA9PSAndXAnKSB7XG4gICAgICAgIGVsZS5zdHlsZS50b3AgPSBgMHB4YFxuICAgIH1cbn0iLCIvKipcbiAqIEBkZXNjcmlwdGlvbiBDU1MgaGV4IGZpbHRlciAoaHR0cHM6Ly9jb2RlcGVuLmlvL3Nvc3VrZS9wZW4vUGpvcXFwKVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuY2xhc3MgQ29sb3Ige1xuICAgIGNvbnN0cnVjdG9yKHIsIGcsIGIpIHtcbiAgICAgICAgdGhpcy5zZXQociwgZywgYik7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgcmdiKCR7TWF0aC5yb3VuZCh0aGlzLnIpfSwgJHtNYXRoLnJvdW5kKHRoaXMuZyl9LCAke01hdGgucm91bmQodGhpcy5iKX0pYDtcbiAgICB9XG5cbiAgICBzZXQociwgZywgYikge1xuICAgICAgICB0aGlzLnIgPSB0aGlzLmNsYW1wKHIpO1xuICAgICAgICB0aGlzLmcgPSB0aGlzLmNsYW1wKGcpO1xuICAgICAgICB0aGlzLmIgPSB0aGlzLmNsYW1wKGIpO1xuICAgIH1cblxuICAgIGh1ZVJvdGF0ZShhbmdsZSA9IDApIHtcbiAgICAgICAgYW5nbGUgPSBhbmdsZSAvIDE4MCAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuXG4gICAgICAgIHRoaXMubXVsdGlwbHkoW1xuICAgICAgICAgICAgMC4yMTMgKyBjb3MgKiAwLjc4NyAtIHNpbiAqIDAuMjEzLFxuICAgICAgICAgICAgMC43MTUgLSBjb3MgKiAwLjcxNSAtIHNpbiAqIDAuNzE1LFxuICAgICAgICAgICAgMC4wNzIgLSBjb3MgKiAwLjA3MiArIHNpbiAqIDAuOTI4LFxuICAgICAgICAgICAgMC4yMTMgLSBjb3MgKiAwLjIxMyArIHNpbiAqIDAuMTQzLFxuICAgICAgICAgICAgMC43MTUgKyBjb3MgKiAwLjI4NSArIHNpbiAqIDAuMTQwLFxuICAgICAgICAgICAgMC4wNzIgLSBjb3MgKiAwLjA3MiAtIHNpbiAqIDAuMjgzLFxuICAgICAgICAgICAgMC4yMTMgLSBjb3MgKiAwLjIxMyAtIHNpbiAqIDAuNzg3LFxuICAgICAgICAgICAgMC43MTUgLSBjb3MgKiAwLjcxNSArIHNpbiAqIDAuNzE1LFxuICAgICAgICAgICAgMC4wNzIgKyBjb3MgKiAwLjkyOCArIHNpbiAqIDAuMDcyLFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBncmF5c2NhbGUodmFsdWUgPSAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbHkoW1xuICAgICAgICAgICAgMC4yMTI2ICsgMC43ODc0ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjcxNTIgLSAwLjcxNTIgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMDcyMiAtIDAuMDcyMiAqICgxIC0gdmFsdWUpLFxuICAgICAgICAgICAgMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjcxNTIgKyAwLjI4NDggKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMDcyMiAtIDAuMDcyMiAqICgxIC0gdmFsdWUpLFxuICAgICAgICAgICAgMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjcxNTIgLSAwLjcxNTIgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMDcyMiArIDAuOTI3OCAqICgxIC0gdmFsdWUpLFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBzZXBpYSh2YWx1ZSA9IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBseShbXG4gICAgICAgICAgICAwLjM5MyArIDAuNjA3ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjc2OSAtIDAuNzY5ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjE4OSAtIDAuMTg5ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjM0OSAtIDAuMzQ5ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjY4NiArIDAuMzE0ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjE2OCAtIDAuMTY4ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjI3MiAtIDAuMjcyICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjUzNCAtIDAuNTM0ICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjEzMSArIDAuODY5ICogKDEgLSB2YWx1ZSksXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIHNhdHVyYXRlKHZhbHVlID0gMSkge1xuICAgICAgICB0aGlzLm11bHRpcGx5KFtcbiAgICAgICAgICAgIDAuMjEzICsgMC43ODcgKiB2YWx1ZSxcbiAgICAgICAgICAgIDAuNzE1IC0gMC43MTUgKiB2YWx1ZSxcbiAgICAgICAgICAgIDAuMDcyIC0gMC4wNzIgKiB2YWx1ZSxcbiAgICAgICAgICAgIDAuMjEzIC0gMC4yMTMgKiB2YWx1ZSxcbiAgICAgICAgICAgIDAuNzE1ICsgMC4yODUgKiB2YWx1ZSxcbiAgICAgICAgICAgIDAuMDcyIC0gMC4wNzIgKiB2YWx1ZSxcbiAgICAgICAgICAgIDAuMjEzIC0gMC4yMTMgKiB2YWx1ZSxcbiAgICAgICAgICAgIDAuNzE1IC0gMC43MTUgKiB2YWx1ZSxcbiAgICAgICAgICAgIDAuMDcyICsgMC45MjggKiB2YWx1ZSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgbXVsdGlwbHkobWF0cml4KSB7XG4gICAgICAgIGNvbnN0IG5ld1IgPSB0aGlzLmNsYW1wKHRoaXMuciAqIG1hdHJpeFswXSArIHRoaXMuZyAqIG1hdHJpeFsxXSArIHRoaXMuYiAqIG1hdHJpeFsyXSk7XG4gICAgICAgIGNvbnN0IG5ld0cgPSB0aGlzLmNsYW1wKHRoaXMuciAqIG1hdHJpeFszXSArIHRoaXMuZyAqIG1hdHJpeFs0XSArIHRoaXMuYiAqIG1hdHJpeFs1XSk7XG4gICAgICAgIGNvbnN0IG5ld0IgPSB0aGlzLmNsYW1wKHRoaXMuciAqIG1hdHJpeFs2XSArIHRoaXMuZyAqIG1hdHJpeFs3XSArIHRoaXMuYiAqIG1hdHJpeFs4XSk7XG4gICAgICAgIHRoaXMuciA9IG5ld1I7XG4gICAgICAgIHRoaXMuZyA9IG5ld0c7XG4gICAgICAgIHRoaXMuYiA9IG5ld0I7XG4gICAgfVxuXG4gICAgYnJpZ2h0bmVzcyh2YWx1ZSA9IDEpIHtcbiAgICAgICAgdGhpcy5saW5lYXIodmFsdWUpO1xuICAgIH1cbiAgICBjb250cmFzdCh2YWx1ZSA9IDEpIHtcbiAgICAgICAgdGhpcy5saW5lYXIodmFsdWUsIC0oMC41ICogdmFsdWUpICsgMC41KTtcbiAgICB9XG5cbiAgICBsaW5lYXIoc2xvcGUgPSAxLCBpbnRlcmNlcHQgPSAwKSB7XG4gICAgICAgIHRoaXMuciA9IHRoaXMuY2xhbXAodGhpcy5yICogc2xvcGUgKyBpbnRlcmNlcHQgKiAyNTUpO1xuICAgICAgICB0aGlzLmcgPSB0aGlzLmNsYW1wKHRoaXMuZyAqIHNsb3BlICsgaW50ZXJjZXB0ICogMjU1KTtcbiAgICAgICAgdGhpcy5iID0gdGhpcy5jbGFtcCh0aGlzLmIgKiBzbG9wZSArIGludGVyY2VwdCAqIDI1NSk7XG4gICAgfVxuXG4gICAgaW52ZXJ0KHZhbHVlID0gMSkge1xuICAgICAgICB0aGlzLnIgPSB0aGlzLmNsYW1wKCh2YWx1ZSArIHRoaXMuciAvIDI1NSAqICgxIC0gMiAqIHZhbHVlKSkgKiAyNTUpO1xuICAgICAgICB0aGlzLmcgPSB0aGlzLmNsYW1wKCh2YWx1ZSArIHRoaXMuZyAvIDI1NSAqICgxIC0gMiAqIHZhbHVlKSkgKiAyNTUpO1xuICAgICAgICB0aGlzLmIgPSB0aGlzLmNsYW1wKCh2YWx1ZSArIHRoaXMuYiAvIDI1NSAqICgxIC0gMiAqIHZhbHVlKSkgKiAyNTUpO1xuICAgIH1cblxuICAgIGhzbCgpIHtcbiAgICAgICAgLy8gQ29kZSB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85NDkzMDYwLzI2ODgwMjcsIGxpY2Vuc2VkIHVuZGVyIENDIEJZLVNBLlxuICAgICAgICBjb25zdCByID0gdGhpcy5yIC8gMjU1O1xuICAgICAgICBjb25zdCBnID0gdGhpcy5nIC8gMjU1O1xuICAgICAgICBjb25zdCBiID0gdGhpcy5iIC8gMjU1O1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIGxldCBoLCBzLCBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgICAgICAgaCA9IHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZCA9IG1heCAtIG1pbjtcbiAgICAgICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSByOlxuICAgICAgICAgICAgICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBnOlxuICAgICAgICAgICAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgYjpcbiAgICAgICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoIC89IDY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaDogaCAqIDEwMCxcbiAgICAgICAgICAgIHM6IHMgKiAxMDAsXG4gICAgICAgICAgICBsOiBsICogMTAwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNsYW1wKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+IDI1NSkge1xuICAgICAgICAgICAgdmFsdWUgPSAyNTU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuY2xhc3MgU29sdmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGJhc2VDb2xvcikge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy50YXJnZXRIU0wgPSB0YXJnZXQuaHNsKCk7XG4gICAgICAgIHRoaXMucmV1c2VkQ29sb3IgPSBuZXcgQ29sb3IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc29sdmVOYXJyb3codGhpcy5zb2x2ZVdpZGUoKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHJlc3VsdC52YWx1ZXMsXG4gICAgICAgICAgICBsb3NzOiByZXN1bHQubG9zcyxcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5jc3MocmVzdWx0LnZhbHVlcyksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc29sdmVXaWRlKCkge1xuICAgICAgICBjb25zdCBBID0gNTtcbiAgICAgICAgY29uc3QgYyA9IDE1O1xuICAgICAgICBjb25zdCBhID0gWzYwLCAxODAsIDE4MDAwLCA2MDAsIDEuMiwgMS4yXTtcblxuICAgICAgICBsZXQgYmVzdCA9IHsgbG9zczogSW5maW5pdHkgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGJlc3QubG9zcyA+IDI1ICYmIGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWwgPSBbNTAsIDIwLCAzNzUwLCA1MCwgMTAwLCAxMDBdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zcHNhKEEsIGEsIGMsIGluaXRpYWwsIDEwMDApO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sb3NzIDwgYmVzdC5sb3NzKSB7XG4gICAgICAgICAgICAgICAgYmVzdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICB9XG5cbiAgICBzb2x2ZU5hcnJvdyh3aWRlKSB7XG4gICAgICAgIGNvbnN0IEEgPSB3aWRlLmxvc3M7XG4gICAgICAgIGNvbnN0IGMgPSAyO1xuICAgICAgICBjb25zdCBBMSA9IEEgKyAxO1xuICAgICAgICBjb25zdCBhID0gWzAuMjUgKiBBMSwgMC4yNSAqIEExLCBBMSwgMC4yNSAqIEExLCAwLjIgKiBBMSwgMC4yICogQTFdO1xuICAgICAgICByZXR1cm4gdGhpcy5zcHNhKEEsIGEsIGMsIHdpZGUudmFsdWVzLCA1MDApO1xuICAgIH1cblxuICAgIHNwc2EoQSwgYSwgYywgdmFsdWVzLCBpdGVycykge1xuICAgICAgICBjb25zdCBhbHBoYSA9IDE7XG4gICAgICAgIGNvbnN0IGdhbW1hID0gMC4xNjY2NjY2NjY2NjY2NjY2NjtcblxuICAgICAgICBsZXQgYmVzdCA9IG51bGw7XG4gICAgICAgIGxldCBiZXN0TG9zcyA9IEluZmluaXR5O1xuICAgICAgICBjb25zdCBkZWx0YXMgPSBuZXcgQXJyYXkoNik7XG4gICAgICAgIGNvbnN0IGhpZ2hBcmdzID0gbmV3IEFycmF5KDYpO1xuICAgICAgICBjb25zdCBsb3dBcmdzID0gbmV3IEFycmF5KDYpO1xuXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaXRlcnM7IGsrKykge1xuICAgICAgICAgICAgY29uc3QgY2sgPSBjIC8gTWF0aC5wb3coayArIDEsIGdhbW1hKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGVsdGFzW2ldID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICBoaWdoQXJnc1tpXSA9IHZhbHVlc1tpXSArIGNrICogZGVsdGFzW2ldO1xuICAgICAgICAgICAgICAgIGxvd0FyZ3NbaV0gPSB2YWx1ZXNbaV0gLSBjayAqIGRlbHRhc1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9zc0RpZmYgPSB0aGlzLmxvc3MoaGlnaEFyZ3MpIC0gdGhpcy5sb3NzKGxvd0FyZ3MpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gbG9zc0RpZmYgLyAoMiAqIGNrKSAqIGRlbHRhc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhayA9IGFbaV0gLyBNYXRoLnBvdyhBICsgayArIDEsIGFscGhhKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSBmaXgodmFsdWVzW2ldIC0gYWsgKiBnLCBpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9zcyA9IHRoaXMubG9zcyh2YWx1ZXMpO1xuICAgICAgICAgICAgaWYgKGxvc3MgPCBiZXN0TG9zcykge1xuICAgICAgICAgICAgICAgIGJlc3QgPSB2YWx1ZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgYmVzdExvc3MgPSBsb3NzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbHVlczogYmVzdCwgbG9zczogYmVzdExvc3MgfTtcblxuICAgICAgICBmdW5jdGlvbiBmaXgodmFsdWUsIGlkeCkge1xuICAgICAgICAgICAgbGV0IG1heCA9IDEwMDtcbiAgICAgICAgICAgIGlmIChpZHggPT09IDIgLyogc2F0dXJhdGUgKi8pIHtcbiAgICAgICAgICAgICAgICBtYXggPSA3NTAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZHggPT09IDQgLyogYnJpZ2h0bmVzcyAqLyB8fCBpZHggPT09IDUgLyogY29udHJhc3QgKi8pIHtcbiAgICAgICAgICAgICAgICBtYXggPSAyMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpZHggPT09IDMgLyogaHVlLXJvdGF0ZSAqLykge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAlPSBtYXg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtYXggKyB2YWx1ZSAlIG1heDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvc3MoZmlsdGVycykge1xuICAgICAgICAvLyBBcmd1bWVudCBpcyBhcnJheSBvZiBwZXJjZW50YWdlcy5cbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLnJldXNlZENvbG9yO1xuICAgICAgICBjb2xvci5zZXQoMCwgMCwgMCk7XG5cbiAgICAgICAgY29sb3IuaW52ZXJ0KGZpbHRlcnNbMF0gLyAxMDApO1xuICAgICAgICBjb2xvci5zZXBpYShmaWx0ZXJzWzFdIC8gMTAwKTtcbiAgICAgICAgY29sb3Iuc2F0dXJhdGUoZmlsdGVyc1syXSAvIDEwMCk7XG4gICAgICAgIGNvbG9yLmh1ZVJvdGF0ZShmaWx0ZXJzWzNdICogMy42KTtcbiAgICAgICAgY29sb3IuYnJpZ2h0bmVzcyhmaWx0ZXJzWzRdIC8gMTAwKTtcbiAgICAgICAgY29sb3IuY29udHJhc3QoZmlsdGVyc1s1XSAvIDEwMCk7XG5cbiAgICAgICAgY29uc3QgY29sb3JIU0wgPSBjb2xvci5oc2woKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbG9yLnIgLSB0aGlzLnRhcmdldC5yKSArXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xvci5nIC0gdGhpcy50YXJnZXQuZykgK1xuICAgICAgICAgICAgTWF0aC5hYnMoY29sb3IuYiAtIHRoaXMudGFyZ2V0LmIpICtcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbG9ySFNMLmggLSB0aGlzLnRhcmdldEhTTC5oKSArXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xvckhTTC5zIC0gdGhpcy50YXJnZXRIU0wucykgK1xuICAgICAgICAgICAgTWF0aC5hYnMoY29sb3JIU0wubCAtIHRoaXMudGFyZ2V0SFNMLmwpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY3NzKGZpbHRlcnMpIHtcbiAgICAgICAgZnVuY3Rpb24gZm10KGlkeCwgbXVsdGlwbGllciA9IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGZpbHRlcnNbaWR4XSAqIG11bHRpcGxpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgaW52ZXJ0KCR7Zm10KDApfSUpIHNlcGlhKCR7Zm10KDEpfSUpIHNhdHVyYXRlKCR7Zm10KDIpfSUpIGh1ZS1yb3RhdGUoJHtmbXQoMywgMy42KX1kZWcpIGJyaWdodG5lc3MoJHtmbXQoNCl9JSkgY29udHJhc3QoJHtmbXQoNSl9JSlgO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gICAgLy8gRXhwYW5kIHNob3J0aGFuZCBmb3JtIChlLmcuIFwiMDNGXCIpIHRvIGZ1bGwgZm9ybSAoZS5nLiBcIjAwMzNGRlwiKVxuICAgIGNvbnN0IHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgICBoZXggPSBoZXgucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgKG0sIHIsIGcsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgICAgIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICAgICAgcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIF1cbiAgICAgICAgOiBudWxsO1xufVxuXG4vKipcbiAqIENvbnZlcnQgIzAwMCBiYWNrZ3JvdW5kIHRvIGFueSBjb2xvci4gXG4gKiBJdXB1dCBhIGhleCB0cmlwbGV0IGFuZCByZXR1cm4gZmlsdGVyLlxuICogXG4gKiBVc2FnZTogXG4gKiBgYGBqc1xuICogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKS5zdHlsZS5maWx0ZXIgPSBnZXRIZXhGaWx0ZXIoJyMxYTI2M2QnKTtcbiAqIGBgYFxuICogIElmIHlvdXIgaWNvbiBzZXQgaXNuJ3QgYmxhY2sgeW91IGNhbiBwcmVwZW5kIFwiYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKVwiIHRvIHlvdXIgZmlsdGVyIHByb3BlcnR5IHdoaWNoIHdpbGwgZmlyc3QgdHVybiB0aGUgaWNvbiBzZXQgdG8gYmxhY2suXG4gKiBcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgIGhleCAgICAgSGV4IHRyaXBsZXQsIGVnOiBgJyMxYTI2M2QnYCwgYCNmZmZgXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgICAgIENTUyBmaWx0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGhleDogc3RyaW5nID0gJyMxYTI2M2QnKTogc3RyaW5nIHtcbiAgICBjb25zdCByZ2IgPSBoZXhUb1JnYihoZXgpO1xuICAgIGlmIChyZ2IubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIGZvcm1hdCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKHJnYlswXSwgcmdiWzFdLCByZ2JbMl0pO1xuICAgIGNvbnN0IHNvbHZlciA9IG5ldyBTb2x2ZXIoY29sb3IpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHNvbHZlci5zb2x2ZSgpO1xuXG4gICAgbGV0IGxvc3NNc2c7XG4gICAgaWYgKHJlc3VsdC5sb3NzIDwgMSkge1xuICAgICAgICBsb3NzTXNnID0gJ1RoaXMgaXMgYSBwZXJmZWN0IHJlc3VsdC4nO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxvc3MgPCA1KSB7XG4gICAgICAgIGxvc3NNc2cgPSAnVGhlIGlzIGNsb3NlIGVub3VnaC4nO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxvc3MgPCAxNSkge1xuICAgICAgICBsb3NzTXNnID0gJ1RoZSBjb2xvciBpcyBzb21ld2hhdCBvZmYuIENvbnNpZGVyIHJ1bm5pbmcgaXQgYWdhaW4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb3NzTXNnID0gJ1RoZSBjb2xvciBpcyBleHRyZW1lbHkgb2ZmLiBSdW4gaXQgYWdhaW4hJztcbiAgICB9XG5cbiAgICByZXR1cm4gYGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgJHtyZXN1bHQuZmlsdGVyfWA7XG59XG4iLCIvKipcbiAqIEBkZXNjcmlwdGlvbiBTYWt1cmEgdGhlbWUgbW9kdWxlXG4gKiBAYXV0aG9yIE1hc2hpcm9cbiAqIEBzaW5jZSAxOS8xMC8zMVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxubGV0IHNjcm9sbEFjdGlvbjoge1xuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgZDogc3RyaW5nXG59ID0ge1xuICAgIHg6IHVuZGVmaW5lZCxcbiAgICB5OiB1bmRlZmluZWQsXG4gICAgZDogdW5kZWZpbmVkXG59XG5cbi8qKlxuICogRGV0ZWN0IHdpbmRvdyBzY3JvbGwgZGlyZWN0aW9uXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBkaXJlY3Rpb24gIG9wdGlvbjogYFlgL2B5YCAtIGhvcml6b250YWw7IGBYYC9geGAgLSB2ZXJ0aWNhbFxuICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgICAgICByZXR1cm4gd2luZG93IHNjcm9sbCBkaXJlY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRpcmVjdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKHNjcm9sbEFjdGlvbi54ID09IHVuZGVmaW5lZCkge1xuICAgICAgICBzY3JvbGxBY3Rpb24ueCA9IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICBzY3JvbGxBY3Rpb24ueSA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIH1cbiAgICBsZXQgZGlmZlggPSBzY3JvbGxBY3Rpb24ueCAtIHdpbmRvdy5wYWdlWE9mZnNldFxuICAgIGxldCBkaWZmWSA9IHNjcm9sbEFjdGlvbi55IC0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAneCcgfHwgZGlyZWN0aW9uID09ICdYJyApIHtcbiAgICAgICAgaWYgKGRpZmZYIDwgMCkge1xuICAgICAgICAgICAgc2Nyb2xsQWN0aW9uLmQgPSAncmlnaHQnXG4gICAgICAgIH0gZWxzZSBpZiAoZGlmZlggPiAwKSB7XG4gICAgICAgICAgICBzY3JvbGxBY3Rpb24uZCA9ICdsZWZ0J1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRpZmZZIDwgMCkge1xuICAgICAgICAgICAgc2Nyb2xsQWN0aW9uLmQgPSAnZG93bidcbiAgICAgICAgfSBlbHNlIGlmIChkaWZmWSA+IDApIHtcbiAgICAgICAgICAgIHNjcm9sbEFjdGlvbi5kID0gJ3VwJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHNjcm9sbEFjdGlvbi54ID0gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgc2Nyb2xsQWN0aW9uLnkgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICByZXR1cm4gc2Nyb2xsQWN0aW9uLmRcbn0iXSwic291cmNlUm9vdCI6IiJ9