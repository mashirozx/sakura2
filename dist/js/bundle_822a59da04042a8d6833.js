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

/***/ "./node_modules/vh-check/dist/vh-check.js":
/*!************************************************!*\
  !*** ./node_modules/vh-check/dist/vh-check.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    // don't know a better way to get the size of a CSS 100vh…
    function createTestElement() {
        var testElement = document.createElement('div');
        testElement.style.cssText =
            'position: fixed; top: 0; height: 100vh; pointer-events: none;';
        document.documentElement.insertBefore(testElement, document.documentElement.firstChild);
        return testElement;
    }
    function removeTestElement(element) {
        document.documentElement.removeChild(element);
    }
    //  in some browsers this will be bigger than window.innerHeight
    function checkSizes() {
        var vhTest = createTestElement();
        var windowHeight = window.innerHeight;
        var vh = vhTest.offsetHeight;
        var offset = vh - windowHeight;
        removeTestElement(vhTest);
        return {
            vh: vh,
            windowHeight: windowHeight,
            offset: offset,
            isNeeded: offset !== 0,
            value: 0,
        };
    }
    // export
    function noop() { }
    function computeDifference() {
        var sizes = checkSizes();
        sizes.value = sizes.offset;
        return sizes;
    }
    function redefineVhUnit() {
        var sizes = checkSizes();
        sizes.value = sizes.windowHeight * 0.01;
        return sizes;
    }

    var methods = /*#__PURE__*/Object.freeze({
        noop: noop,
        computeDifference: computeDifference,
        redefineVhUnit: redefineVhUnit
    });

    function isString(text) {
        return typeof text === "string" && text.length > 0;
    }
    function isFunction(f) {
        return typeof f === "function";
    }
    var defaultOptions = Object.freeze({
        cssVarName: 'vh-offset',
        redefineVh: false,
        method: computeDifference,
        force: false,
        bind: true,
        updateOnTouch: false,
        onUpdate: noop,
    });
    function getOptions(options) {
        // old options handling: only redefine the CSS var name
        if (isString(options)) {
            return __assign({}, defaultOptions, { cssVarName: options });
        }
        // be sure to have a configuration object
        if (typeof options !== 'object')
            return defaultOptions;
        // make sure we have the right options to start with
        var finalOptions = {
            force: options.force === true,
            bind: options.bind !== false,
            updateOnTouch: options.updateOnTouch === true,
            onUpdate: isFunction(options.onUpdate) ? options.onUpdate : noop,
        };
        // method change
        var redefineVh = options.redefineVh === true;
        finalOptions.method =
            methods[redefineVh ? 'redefineVhUnit' : 'computeDifference'];
        finalOptions.cssVarName = isString(options.cssVarName)
            ? options.cssVarName
            : redefineVh
                ? /*
                  when redefining vh unit we follow this article name convention
                  https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
                */
                    'vh'
                : defaultOptions.cssVarName;
        return finalOptions;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
    var passiveSupported = false;
    var eventListeners = [];
    /* istanbul ignore next */
    try {
        var options = Object.defineProperty({}, "passive", {
            get: function () {
                passiveSupported = true;
            },
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    function addListener(eventName, callback) {
        eventListeners.push({
            eventName: eventName,
            callback: callback,
        });
        window.addEventListener(eventName, callback, 
        /* istanbul ignore next */
        passiveSupported ? { passive: true } : false);
    }
    function removeAll() {
        eventListeners.forEach(function (config) {
            window.removeEventListener(config.eventName, config.callback);
        });
        eventListeners = [];
    }

    function updateCssVar(cssVarName, result) {
        document.documentElement.style.setProperty("--" + cssVarName, result.value + "px");
    }
    function formatResult(sizes, options) {
        return __assign({}, sizes, { unbind: removeAll, recompute: options.method });
    }
    function vhCheck(options) {
        var config = Object.freeze(getOptions(options));
        var result = formatResult(config.method(), config);
        // usefulness check
        if (!result.isNeeded && !config.force) {
            return result;
        }
        updateCssVar(config.cssVarName, result);
        config.onUpdate(result);
        // enabled by default
        if (!config.bind)
            return result;
        function onWindowChange() {
            window.requestAnimationFrame(function () {
                var sizes = config.method();
                updateCssVar(config.cssVarName, sizes);
                config.onUpdate(formatResult(sizes, config));
            });
        }
        // be sure we don't duplicates events listeners
        result.unbind();
        // listen for orientation change
        // - this can't be configured
        // - because it's convenient and not a real performance bottleneck
        addListener('orientationchange', onWindowChange);
        // listen to touch move for scrolling
        // – disabled by default
        // - listening to scrolling can be expansive…
        if (config.updateOnTouch) {
            addListener('touchmove', onWindowChange);
        }
        return result;
    }

    return vhCheck;

})));


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
/* harmony import */ var _modules_headerBarScrollHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerBarScrollHandler */ "./src/ts/modules/headerBarScrollHandler.ts");
/* harmony import */ var _components_mdcInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mdcInit */ "./src/ts/components/mdcInit.ts");
/* harmony import */ var pjax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pjax */ "./node_modules/pjax/index.js");
/* harmony import */ var pjax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pjax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_hexFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hexFilter */ "./src/ts/modules/hexFilter.ts");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vh-check */ "./node_modules/vh-check/dist/vh-check.js");
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vh_check__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Copyright 2019 Mashiro
 * @description Main
 * @author Mashiro
 * @license MIT
 */
// import coverImgIni from "./modules/coverImgInit"







window.onscroll = function () {
  Object(_modules_headerBarScrollHandler__WEBPACK_IMPORTED_MODULE_0__["default"])();
}; // TODO: global configuration
// TODO: transparent before calculation been done!
// let themePrimaryColor = rgb2hex(window.getComputedStyle(document.querySelector('footer')).backgroundColor)


let themePrimaryColor = '#fcb8ab';
let themeColorFilter = Object(_modules_hexFilter__WEBPACK_IMPORTED_MODULE_3__["default"])(themePrimaryColor);
vh_check__WEBPACK_IMPORTED_MODULE_5___default()();

let InitFun = function () {
  // coverImgIni()
  Object(_components_mdcInit__WEBPACK_IMPORTED_MODULE_1__["default"])();
  let coverImgContainer = document.querySelector(".parallax-wrapper");

  if (typeof coverImgContainer !== 'undefined' && coverImgContainer !== null) {
    let scene = document.querySelector('.parallax-wrapper');
    let parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_4___default.a(scene);
  }

  let footerBefore = document.querySelector("#footer-before");

  if (typeof footerBefore !== 'undefined' && footerBefore !== null) {
    // TODO: set theme color function!
    footerBefore.style.filter = themeColorFilter;
  }
};

window.onload = function () {
  InitFun();
  let pjax = new pjax__WEBPACK_IMPORTED_MODULE_2___default.a({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvY2hhcmFjdGVyLWNvdW50ZXIvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NoYXJhY3Rlci1jb3VudGVyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jaGFyYWN0ZXItY291bnRlci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NoYXJhY3Rlci1jb3VudGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9maXhlZC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvc2hvcnQvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL3N0YW5kYXJkL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcmFsbGF4LWpzL2Rpc3QvcGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2Fib3J0LXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2V2YWwtc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9ldmVudHMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2V2ZW50cy90cmlnZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9leGVjdXRlLXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL2ZvcmVhY2gtZWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9mb3JlYWNoLXNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvaXMtc3VwcG9ydGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wcm90by9hdHRhY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvcHJvdG8vYXR0YWNoLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3Byb3RvL2hhbmRsZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvcHJvdG8vbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9wcm90by9wYXJzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi9zZW5kLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3N3aXRjaGVzLXNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvc3dpdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BqYXgvbGliL3VuaXF1ZWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGpheC9saWIvdXRpbC9ub29wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wamF4L2xpYi91dGlsL3VwZGF0ZS1xdWVyeS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmgtY2hlY2svZGlzdC92aC1jaGVjay5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3M/NGUxZSIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29tcG9uZW50cy9tZGNDb25mLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jb21wb25lbnRzL21kY0luaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tb2R1bGVzL2hlYWRlckJhclNjcm9sbEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vZHVsZXMvaGV4RmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tb2R1bGVzL3Njcm9sbERpcmVjdGlvbi50cyJdLCJuYW1lcyI6WyJDb25mIiwiTURDVG9wQXBwQmFyIiwiTURDVGV4dEZpZWxkIiwiTURDUmlwcGxlIiwibWRjQ29uZiIsImNvbXBvbmVudHMiLCJpIiwiY29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsImpvaW4iLCJ3aW5kb3ciLCJvbnNjcm9sbCIsImhlYWRlckJhclNjcm9sbEhhbmRsZXIiLCJ0aGVtZVByaW1hcnlDb2xvciIsInRoZW1lQ29sb3JGaWx0ZXIiLCJnZXRIZXhGaWx0ZXIiLCJ2aENoZWNrIiwiSW5pdEZ1biIsIm1kY0luaXQiLCJjb3ZlckltZ0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJzY2VuZSIsInBhcmFsbGF4SW5zdGFuY2UiLCJQYXJhbGxheCIsImZvb3RlckJlZm9yZSIsInN0eWxlIiwiZmlsdGVyIiwib25sb2FkIiwicGpheCIsIlBqYXgiLCJlbGVtZW50cyIsInNlbGVjdG9ycyIsImNhY2hlQnVzdCIsInBqYXhSZWxvYWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGUiLCJzY3JvbGxEaXJlY3Rpb24iLCJ0b3AiLCJDb2xvciIsInIiLCJnIiwiYiIsInNldCIsInRvU3RyaW5nIiwiTWF0aCIsInJvdW5kIiwiY2xhbXAiLCJodWVSb3RhdGUiLCJhbmdsZSIsIlBJIiwic2luIiwiY29zIiwibXVsdGlwbHkiLCJncmF5c2NhbGUiLCJ2YWx1ZSIsInNlcGlhIiwic2F0dXJhdGUiLCJtYXRyaXgiLCJuZXdSIiwibmV3RyIsIm5ld0IiLCJicmlnaHRuZXNzIiwibGluZWFyIiwiY29udHJhc3QiLCJzbG9wZSIsImludGVyY2VwdCIsImludmVydCIsImhzbCIsIm1heCIsIm1pbiIsImgiLCJzIiwibCIsImQiLCJTb2x2ZXIiLCJ0YXJnZXQiLCJiYXNlQ29sb3IiLCJ0YXJnZXRIU0wiLCJyZXVzZWRDb2xvciIsInNvbHZlIiwicmVzdWx0Iiwic29sdmVOYXJyb3ciLCJzb2x2ZVdpZGUiLCJ2YWx1ZXMiLCJsb3NzIiwiY3NzIiwiQSIsImMiLCJhIiwiYmVzdCIsIkluZmluaXR5IiwiaW5pdGlhbCIsInNwc2EiLCJ3aWRlIiwiQTEiLCJpdGVycyIsImFscGhhIiwiZ2FtbWEiLCJiZXN0TG9zcyIsImRlbHRhcyIsIkFycmF5IiwiaGlnaEFyZ3MiLCJsb3dBcmdzIiwiayIsImNrIiwicG93IiwicmFuZG9tIiwibG9zc0RpZmYiLCJhayIsImZpeCIsInNsaWNlIiwiaWR4IiwiZmlsdGVycyIsImNvbG9yIiwiY29sb3JIU0wiLCJhYnMiLCJmbXQiLCJtdWx0aXBsaWVyIiwiaGV4VG9SZ2IiLCJoZXgiLCJzaG9ydGhhbmRSZWdleCIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInBhcnNlSW50IiwicmdiIiwibGVuZ3RoIiwic29sdmVyIiwibG9zc01zZyIsInNjcm9sbEFjdGlvbiIsIngiLCJ1bmRlZmluZWQiLCJ5IiwiZGlyZWN0aW9uIiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsImRpZmZYIiwiZGlmZlkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJC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QUFFO0FBQ3BFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZIQUE2SCxtREFBbUQsRUFBRTtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QseUNBQXlDLEVBQUU7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzRUFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUUsa0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtREFBbUQsRUFBRTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFnQixHQUFHO0FBQ3ZDO0FBQ0EsK0NBQStDLDBDQUEwQyxFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHVFQUFhO0FBQ2dCO0FBQy9CO0FBQ2Usa0ZBQW1CLEVBQUM7QUFDbkMsc0M7Ozs7Ozs7Ozs7OztBQzVjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQ2Y7QUFDWTtBQUNBO0FBQ0M7QUFDN0IsaUM7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0NBQWtDLHNCQUFzQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLGdDOzs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lDO0FBQ3VCO0FBQ2M7QUFDdEU7QUFDQSxJQUFJLCtDQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG1CQUFtQixrRkFBc0M7QUFDekQ7QUFDQTtBQUNBLENBQUMsQ0FBQyxxRUFBWTtBQUMwQjtBQUN4QyxxQzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQy9CLHFDOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lDO0FBQ3lCO0FBQ1I7QUFDbEQ7QUFDQSxJQUFJLCtDQUFpQjtBQUNyQjtBQUNBLGlDQUFpQyw4Q0FBZ0IsR0FBRztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQVU7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQixrREFBTztBQUMxQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUEwQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0JBQWtCLEVBQUU7QUFDN0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHVFQUFhO0FBQ21DO0FBQ2xEO0FBQ2UscUdBQXNDLEVBQUM7QUFDdEQsc0M7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUNDO0FBQzBFO0FBQ3ZHLGlDOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUM7QUFDdUI7QUFDSjtBQUNEO0FBQ21CO0FBQ047QUFDUTtBQUNqQjtBQUNXO0FBQ1k7QUFDVTtBQUN0QztBQUNJO0FBQ1k7QUFDVTtBQUN4QjtBQUNwRDtBQUNBLElBQUksK0NBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDRDQUE0QyxZQUFZLG9FQUFTLGlCQUFpQixHQUFHO0FBQzVILDJDQUEyQyxvQ0FBb0MsWUFBWSw2RUFBYSxLQUFLLEdBQUc7QUFDaEgsMkNBQTJDLG9DQUFvQyxZQUFZLDhFQUFzQixLQUFLLEdBQUc7QUFDekgsaURBQWlELDBDQUEwQyxZQUFZLHlGQUE0QixLQUFLLEdBQUc7QUFDM0kscUNBQXFDLDhCQUE4QixZQUFZLGlFQUFnQixLQUFLLEdBQUc7QUFDdkcsc0NBQXNDLCtCQUErQixZQUFZLG1GQUFnQixLQUFLLEdBQUc7QUFDekcsd0NBQXdDLGlDQUFpQyxZQUFZLHFGQUFpQixLQUFLLEdBQUc7QUFDOUcsK0NBQStDLG1EQUFPO0FBQ3RELG9EQUFvRCxtREFBTztBQUMzRDtBQUNBLHlEQUF5RCxtREFBTztBQUNoRTtBQUNBLHNEQUFzRCxtREFBTztBQUM3RDtBQUNBO0FBQ0EsZ0NBQWdDLHlGQUFnQztBQUNoRTtBQUNBLHlGQUF5RixzREFBVTtBQUNuRztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUdBQXNDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsbURBQU87QUFDOUQ7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsc0RBQVU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Es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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7OztBQUlELENBQUM7O0FBRUQsQ0FBQyxFQUFFLGFBQWE7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7QUFFdEMsQ0FBQyxHQUFHO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMscUlBQXFJOztBQUV0SSxDQUFDLEVBQUUsb0JBQW9CO0FBQ3ZCOztBQUVBLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtB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QUFvQkEsU0FBUyxJQUFJLEdBQXJDLEVBQTJDO0FBQ3ZDLFFBQUlHLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWFAsa0JBQVksQ0FBQ3hELENBQWIsR0FBaUIsT0FBakI7QUFDSCxLQUZELE1BRU8sSUFBSStELEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDbEJQLGtCQUFZLENBQUN4RCxDQUFiLEdBQWlCLE1BQWpCO0FBQ0g7QUFDSixHQU5ELE1BTU87QUFDSCxRQUFJZ0UsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYUixrQkFBWSxDQUFDeEQsQ0FBYixHQUFpQixNQUFqQjtBQUNILEtBRkQsTUFFTyxJQUFJZ0UsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNsQlIsa0JBQVksQ0FBQ3hELENBQWIsR0FBaUIsSUFBakI7QUFDSDtBQUNKOztBQUNEd0QsY0FBWSxDQUFDQyxDQUFiLEdBQWlCNUgsTUFBTSxDQUFDZ0ksV0FBeEI7QUFDQUwsY0FBWSxDQUFDRyxDQUFiLEdBQWlCOUgsTUFBTSxDQUFDaUksV0FBeEI7QUFDQSxTQUFPTixZQUFZLENBQUN4RCxDQUFwQjtBQUNILEMiLCJmaWxlIjoiLi9qcy9idW5kbGVfODIyYTU5ZGEwNDA0MmE4ZDY4MzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDQ29tcG9uZW50KHJvb3QsIGZvdW5kYXRpb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCB0c2xpYl8xLl9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgICAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICAgIH1cbiAgICBNRENDb21wb25lbnQuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgICAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgICAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKHt9KSk7XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbWV0aG9kIHBhcmFtIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXM7IGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgdW5pdCB0ZXN0ZWQgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgX2FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgICAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgICAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAgICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgICAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgICAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSwgd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICAgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlKSB7XG4gICAgICAgIGlmIChzaG91bGRCdWJibGUgPT09IHZvaWQgMCkgeyBzaG91bGRCdWJibGUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZXZ0O1xuICAgICAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTURDQ29tcG9uZW50IH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9ueWZpbGwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENGbG9hdGluZ0xhYmVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0Zsb2F0aW5nTGFiZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRmxvYXRpbmdMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENGbG9hdGluZ0xhYmVsLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENGbG9hdGluZ0xhYmVsKHJvb3QpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBwcm9kdWNlIHRoZSBsYWJlbCBzaGFrZSBmb3IgZXJyb3JzLlxuICAgICAqIEBwYXJhbSBzaG91bGRTaGFrZSBJZiB0cnVlLCBzaGFrZXMgdGhlIGxhYmVsIGJ5IGFkZGluZyBhIENTUyBjbGFzczsgb3RoZXJ3aXNlLCBzdG9wcyBzaGFraW5nIGJ5IHJlbW92aW5nIHRoZSBjbGFzcy5cbiAgICAgKi9cbiAgICBNRENGbG9hdGluZ0xhYmVsLnByb3RvdHlwZS5zaGFrZSA9IGZ1bmN0aW9uIChzaG91bGRTaGFrZSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNoYWtlKHNob3VsZFNoYWtlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0eWxlcyB0aGUgbGFiZWwgdG8gZmxvYXQvZG9jay5cbiAgICAgKiBAcGFyYW0gc2hvdWxkRmxvYXQgSWYgdHJ1ZSwgZmxvYXRzIHRoZSBsYWJlbCBieSBhZGRpbmcgYSBDU1MgY2xhc3M7IG90aGVyd2lzZSwgZG9ja3MgaXQgYnkgcmVtb3ZpbmcgdGhlIGNsYXNzLlxuICAgICAqL1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWwucHJvdG90eXBlLmZsb2F0ID0gZnVuY3Rpb24gKHNob3VsZEZsb2F0KSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZmxvYXQoc2hvdWxkRmxvYXQpO1xuICAgIH07XG4gICAgTURDRmxvYXRpbmdMYWJlbC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFdpZHRoKCk7XG4gICAgfTtcbiAgICBNRENGbG9hdGluZ0xhYmVsLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgZ2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnNjcm9sbFdpZHRoOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMudW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcik7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDRmxvYXRpbmdMYWJlbDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENGbG9hdGluZ0xhYmVsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTEFCRUxfRkxPQVRfQUJPVkU6ICdtZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlJyxcbiAgICBMQUJFTF9TSEFLRTogJ21kYy1mbG9hdGluZy1sYWJlbC0tc2hha2UnLFxuICAgIFJPT1Q6ICdtZGMtZmxvYXRpbmctbGFiZWwnLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU2hha2VBbmltYXRpb25FbmRfKCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENGbG9hdGluZ0xhYmVsQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYW5pbWF0aW9uZW5kJywgdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldFdpZHRoKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIHByb2R1Y2UgYSBzaGFrZSBhbmltYXRpb24gdG8gaW5kaWNhdGUgYW4gZXJyb3IuXG4gICAgICogQHBhcmFtIHNob3VsZFNoYWtlIElmIHRydWUsIGFkZHMgdGhlIHNoYWtlIENTUyBjbGFzczsgb3RoZXJ3aXNlLCByZW1vdmVzIHNoYWtlIGNsYXNzLlxuICAgICAqL1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5zaGFrZSA9IGZ1bmN0aW9uIChzaG91bGRTaGFrZSkge1xuICAgICAgICB2YXIgTEFCRUxfU0hBS0UgPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzLkxBQkVMX1NIQUtFO1xuICAgICAgICBpZiAoc2hvdWxkU2hha2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0eWxlcyB0aGUgbGFiZWwgdG8gZmxvYXQgb3IgZG9jay5cbiAgICAgKiBAcGFyYW0gc2hvdWxkRmxvYXQgSWYgdHJ1ZSwgYWRkcyB0aGUgZmxvYXQgQ1NTIGNsYXNzOyBvdGhlcndpc2UsIHJlbW92ZXMgZmxvYXQgYW5kIHNoYWtlIGNsYXNzZXMgdG8gZG9jayB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLmZsb2F0ID0gZnVuY3Rpb24gKHNob3VsZEZsb2F0KSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIExBQkVMX0ZMT0FUX0FCT1ZFID0gX2EuTEFCRUxfRkxPQVRfQUJPVkUsIExBQkVMX1NIQUtFID0gX2EuTEFCRUxfU0hBS0U7XG4gICAgICAgIGlmIChzaG91bGRGbG9hdCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhMQUJFTF9GTE9BVF9BQk9WRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX0ZMT0FUX0FCT1ZFKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlU2hha2VBbmltYXRpb25FbmRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgTEFCRUxfU0hBS0UgPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzLkxBQkVMX1NIQUtFO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENMaW5lUmlwcGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0xpbmVSaXBwbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTGluZVJpcHBsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENMaW5lUmlwcGxlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENMaW5lUmlwcGxlKHJvb3QpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVzIHRoZSBsaW5lIHJpcHBsZVxuICAgICAqL1xuICAgIE1EQ0xpbmVSaXBwbGUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGVcbiAgICAgKi9cbiAgICBNRENMaW5lUmlwcGxlLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRyYW5zZm9ybSBvcmlnaW4gZ2l2ZW4gYSB1c2VyJ3MgY2xpY2sgbG9jYXRpb24uXG4gICAgICogVGhlIGByaXBwbGVDZW50ZXJgIGlzIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIG1pZGRsZSBvZiB0aGUgcmlwcGxlLlxuICAgICAqL1xuICAgIE1EQ0xpbmVSaXBwbGUucHJvdG90eXBlLnNldFJpcHBsZUNlbnRlciA9IGZ1bmN0aW9uICh4Q29vcmRpbmF0ZSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFJpcHBsZUNlbnRlcih4Q29vcmRpbmF0ZSk7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgc2V0U3R5bGU6IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIHZhbHVlKSB7IHJldHVybiBfdGhpcy5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlKTsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLnVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0xpbmVSaXBwbGU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDTGluZVJpcHBsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTElORV9SSVBQTEVfQUNUSVZFOiAnbWRjLWxpbmUtcmlwcGxlLS1hY3RpdmUnLFxuICAgIExJTkVfUklQUExFX0RFQUNUSVZBVElORzogJ21kYy1saW5lLXJpcHBsZS0tZGVhY3RpdmF0aW5nJyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENMaW5lUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENMaW5lUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENMaW5lUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDTGluZVJpcHBsZUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTGluZVJpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDTGluZVJpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0FDVElWRSk7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UmlwcGxlQ2VudGVyID0gZnVuY3Rpb24gKHhDb29yZGluYXRlKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoJ3RyYW5zZm9ybS1vcmlnaW4nLCB4Q29vcmRpbmF0ZSArIFwicHggY2VudGVyXCIpO1xuICAgIH07XG4gICAgTURDTGluZVJpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgIH07XG4gICAgTURDTGluZVJpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBsaW5lIHJpcHBsZSB0byBiZSBlaXRoZXIgdHJhbnNwYXJlbnQgb3Igb3BhcXVlXG4gICAgICAgIC8vIGJlZm9yZSBlbWl0dGluZyB0aGUgYW5pbWF0aW9uIGVuZCBldmVudFxuICAgICAgICB2YXIgaXNEZWFjdGl2YXRpbmcgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgICAgICAgaWYgKGV2dC5wcm9wZXJ0eU5hbWUgPT09ICdvcGFjaXR5Jykge1xuICAgICAgICAgICAgaWYgKGlzRGVhY3RpdmF0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENMaW5lUmlwcGxlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDTGluZVJpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDTm90Y2hlZE91dGxpbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTm90Y2hlZE91dGxpbmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTm90Y2hlZE91dGxpbmUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDTm90Y2hlZE91dGxpbmUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ05vdGNoZWRPdXRsaW5lKHJvb3QpO1xuICAgIH07XG4gICAgTURDTm90Y2hlZE91dGxpbmUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub3RjaEVsZW1lbnRfID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTk9UQ0hfRUxFTUVOVF9TRUxFQ1RPUik7XG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcignLicgKyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzLlJPT1QpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XG4gICAgICAgICAgICB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5PVVRMSU5FX1VQR1JBREVEKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLk5PX0xBQkVMKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBjbGFzc2VzIGFuZCBzdHlsZXMgdG8gb3BlbiB0aGUgbm90Y2ggdG8gdGhlIHNwZWNpZmllZCB3aWR0aC5cbiAgICAgKiBAcGFyYW0gbm90Y2hXaWR0aCBUaGUgbm90Y2ggd2lkdGggaW4gdGhlIG91dGxpbmUuXG4gICAgICovXG4gICAgTURDTm90Y2hlZE91dGxpbmUucHJvdG90eXBlLm5vdGNoID0gZnVuY3Rpb24gKG5vdGNoV2lkdGgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5ub3RjaChub3RjaFdpZHRoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgY2xhc3NlcyBhbmQgc3R5bGVzIHRvIGNsb3NlIHRoZSBub3RjaC5cbiAgICAgKi9cbiAgICBNRENOb3RjaGVkT3V0bGluZS5wcm90b3R5cGUuY2xvc2VOb3RjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZU5vdGNoKCk7XG4gICAgfTtcbiAgICBNRENOb3RjaGVkT3V0bGluZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHNldE5vdGNoV2lkdGhQcm9wZXJ0eTogZnVuY3Rpb24gKHdpZHRoKSB7IHJldHVybiBfdGhpcy5ub3RjaEVsZW1lbnRfLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7IH0sXG4gICAgICAgICAgICByZW1vdmVOb3RjaFdpZHRoUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm5vdGNoRWxlbWVudF8uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJyk7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ05vdGNoZWRPdXRsaW5lO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ05vdGNoZWRPdXRsaW5lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgc3RyaW5ncyA9IHtcbiAgICBOT1RDSF9FTEVNRU5UX1NFTEVDVE9SOiAnLm1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICAvLyBUaGlzIHNob3VsZCBzdGF5IGluIHN5bmMgd2l0aCAkbWRjLW5vdGNoZWQtb3V0bGluZS1wYWRkaW5nICogMi5cbiAgICBOT1RDSF9FTEVNRU5UX1BBRERJTkc6IDgsXG59O1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTk9fTEFCRUw6ICdtZGMtbm90Y2hlZC1vdXRsaW5lLS1uby1sYWJlbCcsXG4gICAgT1VUTElORV9OT1RDSEVEOiAnbWRjLW5vdGNoZWQtb3V0bGluZS0tbm90Y2hlZCcsXG4gICAgT1VUTElORV9VUEdSQURFRDogJ21kYy1ub3RjaGVkLW91dGxpbmUtLXVwZ3JhZGVkJyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldE5vdGNoV2lkdGhQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZU5vdGNoV2lkdGhQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG91dGxpbmUgbm90Y2hlZCBzZWxlY3RvciBhbmQgdXBkYXRlcyB0aGUgbm90Y2ggd2lkdGggY2FsY3VsYXRlZCBiYXNlZCBvZmYgb2Ygbm90Y2hXaWR0aC5cbiAgICAgKi9cbiAgICBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24ucHJvdG90eXBlLm5vdGNoID0gZnVuY3Rpb24gKG5vdGNoV2lkdGgpIHtcbiAgICAgICAgdmFyIE9VVExJTkVfTk9UQ0hFRCA9IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9VVExJTkVfTk9UQ0hFRDtcbiAgICAgICAgaWYgKG5vdGNoV2lkdGggPiAwKSB7XG4gICAgICAgICAgICBub3RjaFdpZHRoICs9IG51bWJlcnMuTk9UQ0hfRUxFTUVOVF9QQURESU5HOyAvLyBBZGQgcGFkZGluZyBmcm9tIGxlZnQvcmlnaHQuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXROb3RjaFdpZHRoUHJvcGVydHkobm90Y2hXaWR0aCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoT1VUTElORV9OT1RDSEVEKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgbm90Y2hlZCBvdXRsaW5lIHNlbGVjdG9yIHRvIGNsb3NlIHRoZSBub3RjaCBpbiB0aGUgb3V0bGluZS5cbiAgICAgKi9cbiAgICBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlTm90Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBPVVRMSU5FX05PVENIRUQgPSBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PVVRMSU5FX05PVENIRUQ7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1VUTElORV9OT1RDSEVEKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVOb3RjaFdpZHRoUHJvcGVydHkoKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9kb20vZXZlbnRzJztcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIE1EQ1JpcHBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNRENSaXBwbGUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7IGlzVW5ib3VuZGVkOiB1bmRlZmluZWQgfTsgfVxuICAgICAgICB2YXIgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAgICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgICAgIGlmIChvcHRzLmlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSBvcHRzLmlzVW5ib3VuZGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgfTtcbiAgICBNRENSaXBwbGUuY3JlYXRlQWRhcHRlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KTsgfSxcbiAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyB9LFxuICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfSk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hdGNoZXMoaW5zdGFuY2Uucm9vdF8sICc6YWN0aXZlJyk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS5kaXNhYmxlZCk7IH0sXG4gICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS51bmJvdW5kZWQpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICh2YXJOYW1lLCB2YWx1ZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZS5wcm90b3R5cGUsIFwidW5ib3VuZGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5yb290XztcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHJvb3QuZGF0YXNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuc2V0VW5ib3VuZGVkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQoQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAgIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gICAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gICAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gICAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxuICAgIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICAgIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG59O1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsXG4gICAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsXG4gICAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgICBQQURESU5HOiAxMCxcbiAgICBUQVBfREVMQVlfTVM6IDMwMCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyB9IGZyb20gJy4vdXRpbCc7XG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxudmFyIEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nLFxuXTtcbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xudmFyIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudScsXG5dO1xuLy8gc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xudmFyIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbnZhciBNRENSaXBwbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ1NjYWxlXyA9ICcwJztcbiAgICAgICAgX3RoaXMuZnJhbWVfID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gICAgICAgIF90aGlzLmluaXRpYWxTaXplXyA9IDA7XG4gICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIF90aGlzLm1heFJhZGl1c18gPSAwO1xuICAgICAgICBfdGhpcy51bmJvdW5kZWRDb29yZHNfID0geyBsZWZ0OiAwLCB0b3A6IDAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGVfKGUpOyB9O1xuICAgICAgICBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kZWFjdGl2YXRlXygpOyB9O1xuICAgICAgICBfdGhpcy5mb2N1c0hhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlRm9jdXMoKTsgfTtcbiAgICAgICAgX3RoaXMuYmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQmx1cigpOyB9O1xuICAgICAgICBfdGhpcy5yZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxheW91dCgpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiAwLCB5OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMSA9IF9hLlJPT1QsIFVOQk9VTkRFRF8xID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UXzEpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRF8xKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzIgPSBfYS5ST09ULCBVTkJPVU5ERURfMiA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERURfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZXZ0IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVfKGV2dCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVbmJvdW5kZWQgPSBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgIHZhciBVTkJPVU5ERUQgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVU5CT1VOREVEO1xuICAgICAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc3VwcG9ydHNQcmVzc1JpcHBsZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgICAgICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZW1vdmVDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJpcHBsZVN0cmluZ3MgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmlwcGxlU3RyaW5ncyk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHJpcHBsZVN0cmluZ3Nba2V5XSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgICAgIHZhciBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGV2dCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGV2dC50eXBlO1xuICAgICAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBldnQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGV2dDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZXZ0ICE9PSB1bmRlZmluZWQgJiYgKGV2dC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2dC50eXBlID09PSAncG9pbnRlcmRvd24nKTtcbiAgICAgICAgdmFyIGhhc0FjdGl2YXRlZENoaWxkID0gZXZ0ICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBfdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCk7IH0pO1xuICAgICAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhldnQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlXG4gICAgICAgICAgICAgICAgJiYgZXZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiAoZXZ0LmtleSA9PT0gJyAnIHx8IGV2dC5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAgICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAgICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICAgICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF90aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gKGV2dCAhPT0gdW5kZWZpbmVkICYmIGV2dC50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlQWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9FTkQ7XG4gICAgICAgIHZhciBfYiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgRkdfREVBQ1RJVkFUSU9OID0gX2IuRkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OID0gX2IuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIERFQUNUSVZBVElPTl9USU1FT1VUX01TID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLkRFQUNUSVZBVElPTl9USU1FT1VUX01TO1xuICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB2YXIgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICAgICAgdmFyIHRyYW5zbGF0ZUVuZCA9ICcnO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCksIHN0YXJ0UG9pbnQgPSBfYy5zdGFydFBvaW50LCBlbmRQb2ludCA9IF9jLmVuZFBvaW50O1xuICAgICAgICAgICAgdHJhbnNsYXRlU3RhcnQgPSBzdGFydFBvaW50LnggKyBcInB4LCBcIiArIHN0YXJ0UG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUVuZCA9IGVuZFBvaW50LnggKyBcInB4LCBcIiArIGVuZFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpOyB9LCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGFjdGl2YXRpb25FdmVudCA9IF9hLmFjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyO1xuICAgICAgICB2YXIgc3RhcnRQb2ludDtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhhY3RpdmF0aW9uRXZlbnQsIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbmRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRQb2ludDogc3RhcnRQb2ludCwgZW5kUG9pbnQ6IGVuZFBvaW50IH07XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgICAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICAgICAgdmFyIEZHX0RFQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT047XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSBfYS5oYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWQgPSBfYS5pc0FjdGl2YXRlZDtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEZHX0FDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVzZXRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkOyB9LCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRlID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlRGVhY3RpdmF0aW9uXyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF9hLndhc0VsZW1lbnRNYWRlQWN0aXZlO1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHZhciBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcbiAgICAgICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgICAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgICAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAgICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgICAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgICAgIHZhciBnZXRCb3VuZGVkUmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coX3RoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KF90aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcbiAgICAgICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgIHRoaXMuZmdTY2FsZV8gPSBcIlwiICsgdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUxheW91dENzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19TSVpFID0gX2EuVkFSX0ZHX1NJWkUsIFZBUl9MRUZUID0gX2EuVkFSX0xFRlQsIFZBUl9UT1AgPSBfYS5WQVJfVE9QLCBWQVJfRkdfU0NBTEUgPSBfYS5WQVJfRkdfU0NBTEU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcCArIFwicHhcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5leHBvcnQgeyB1dGlsIH07XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgLy8gQXBwZW5kIHRvIGhlYWQgaW5zdGVhZCBvZiBib2R5IGJlY2F1c2UgdGhpcyBzY3JpcHQgbWlnaHQgYmUgaW52b2tlZCBpbiB0aGVcbiAgICAvLyBoZWFkLCBpbiB3aGljaCBjYXNlIHRoZSBib2R5IGRvZXNuJ3QgZXhpc3QgeWV0LiBUaGUgcHJvYmUgd29ya3MgZWl0aGVyIHdheS5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAgIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gICAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAgIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB2YXIgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgdmFyIENTUyA9IHdpbmRvd09iai5DU1M7XG4gICAgdmFyIHN1cHBvcnRzQ3NzVmFycyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gQ1NTICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAgIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gICAgdmFyIHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChDU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICAgICAgQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKSk7XG4gICAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJzO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldnQsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgICBpZiAoIWV2dCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIHZhciB4ID0gcGFnZU9mZnNldC54LCB5ID0gcGFnZU9mZnNldC55O1xuICAgIHZhciBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICAgIHZhciBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG4gICAgdmFyIG5vcm1hbGl6ZWRYO1xuICAgIHZhciBub3JtYWxpemVkWTtcbiAgICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gICAgaWYgKGV2dC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gbW91c2VFdmVudC5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSBtb3VzZUV2ZW50LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICByZXR1cm4geyB4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyKHJvb3QpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIucHJvdG90eXBlLCBcImZvdW5kYXRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucm9vdF8udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIFJPT1Q6ICdtZGMtdGV4dC1maWVsZC1jaGFyYWN0ZXItY291bnRlcicsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgUk9PVF9TRUxFQ1RPUjogXCIuXCIgKyBjc3NDbGFzc2VzLlJPT1QsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDb3VudGVyVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudExlbmd0aCwgbWF4TGVuZ3RoKSB7XG4gICAgICAgIGN1cnJlbnRMZW5ndGggPSBNYXRoLm1pbihjdXJyZW50TGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY3VycmVudExlbmd0aCArIFwiIC8gXCIgKyBtYXhMZW5ndGgpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG5leHBvcnQgeyBjc3NDbGFzc2VzIGFzIGNoYXJhY3RlckNvdW50Q3NzQ2xhc3Nlcywgc3RyaW5ncyBhcyBjaGFyYWN0ZXJDb3VudFN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0ICogYXMgcG9ueWZpbGwgZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5pbXBvcnQgeyBNRENGbG9hdGluZ0xhYmVsIH0gZnJvbSAnQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENMaW5lUmlwcGxlIH0gZnJvbSAnQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENOb3RjaGVkT3V0bGluZSB9IGZyb20gJ0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1JpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlciwgfSBmcm9tICcuL2NoYXJhY3Rlci1jb3VudGVyL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbiB9IGZyb20gJy4vY2hhcmFjdGVyLWNvdW50ZXIvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRIZWxwZXJUZXh0LCB9IGZyb20gJy4vaGVscGVyLXRleHQvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIH0gZnJvbSAnLi9oZWxwZXItdGV4dC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZEljb24gfSBmcm9tICcuL2ljb24vY29tcG9uZW50JztcbnZhciBNRENUZXh0RmllbGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUZXh0RmllbGQuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZChyb290KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChyaXBwbGVGYWN0b3J5LCBsaW5lUmlwcGxlRmFjdG9yeSwgaGVscGVyVGV4dEZhY3RvcnksIGNoYXJhY3RlckNvdW50ZXJGYWN0b3J5LCBpY29uRmFjdG9yeSwgbGFiZWxGYWN0b3J5LCBvdXRsaW5lRmFjdG9yeSkge1xuICAgICAgICBpZiAocmlwcGxlRmFjdG9yeSA9PT0gdm9pZCAwKSB7IHJpcHBsZUZhY3RvcnkgPSBmdW5jdGlvbiAoZWwsIGZvdW5kYXRpb24pIHsgcmV0dXJuIG5ldyBNRENSaXBwbGUoZWwsIGZvdW5kYXRpb24pOyB9OyB9XG4gICAgICAgIGlmIChsaW5lUmlwcGxlRmFjdG9yeSA9PT0gdm9pZCAwKSB7IGxpbmVSaXBwbGVGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDTGluZVJpcHBsZShlbCk7IH07IH1cbiAgICAgICAgaWYgKGhlbHBlclRleHRGYWN0b3J5ID09PSB2b2lkIDApIHsgaGVscGVyVGV4dEZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRIZWxwZXJUZXh0KGVsKTsgfTsgfVxuICAgICAgICBpZiAoY2hhcmFjdGVyQ291bnRlckZhY3RvcnkgPT09IHZvaWQgMCkgeyBjaGFyYWN0ZXJDb3VudGVyRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXIoZWwpOyB9OyB9XG4gICAgICAgIGlmIChpY29uRmFjdG9yeSA9PT0gdm9pZCAwKSB7IGljb25GYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDVGV4dEZpZWxkSWNvbihlbCk7IH07IH1cbiAgICAgICAgaWYgKGxhYmVsRmFjdG9yeSA9PT0gdm9pZCAwKSB7IGxhYmVsRmFjdG9yeSA9IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwoZWwpOyB9OyB9XG4gICAgICAgIGlmIChvdXRsaW5lRmFjdG9yeSA9PT0gdm9pZCAwKSB7IG91dGxpbmVGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDTm90Y2hlZE91dGxpbmUoZWwpOyB9OyB9XG4gICAgICAgIHRoaXMuaW5wdXRfID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSU5QVVRfU0VMRUNUT1IpO1xuICAgICAgICB2YXIgbGFiZWxFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTEFCRUxfU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLmxhYmVsXyA9IGxhYmVsRWxlbWVudCA/IGxhYmVsRmFjdG9yeShsYWJlbEVsZW1lbnQpIDogbnVsbDtcbiAgICAgICAgdmFyIGxpbmVSaXBwbGVFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTElORV9SSVBQTEVfU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLmxpbmVSaXBwbGVfID0gbGluZVJpcHBsZUVsZW1lbnQgPyBsaW5lUmlwcGxlRmFjdG9yeShsaW5lUmlwcGxlRWxlbWVudCkgOiBudWxsO1xuICAgICAgICB2YXIgb3V0bGluZUVsZW1lbnQgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5PVVRMSU5FX1NFTEVDVE9SKTtcbiAgICAgICAgdGhpcy5vdXRsaW5lXyA9IG91dGxpbmVFbGVtZW50ID8gb3V0bGluZUZhY3Rvcnkob3V0bGluZUVsZW1lbnQpIDogbnVsbDtcbiAgICAgICAgLy8gSGVscGVyIHRleHRcbiAgICAgICAgdmFyIGhlbHBlclRleHRTdHJpbmdzID0gTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIG5leHRFbGVtZW50U2libGluZyA9IHRoaXMucm9vdF8ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB2YXIgaGFzSGVscGVyTGluZSA9IChuZXh0RWxlbWVudFNpYmxpbmcgJiYgbmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkhFTFBFUl9MSU5FKSk7XG4gICAgICAgIHZhciBoZWxwZXJUZXh0RWwgPSBoYXNIZWxwZXJMaW5lICYmIG5leHRFbGVtZW50U2libGluZyAmJiBuZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcihoZWxwZXJUZXh0U3RyaW5ncy5ST09UX1NFTEVDVE9SKTtcbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0XyA9IGhlbHBlclRleHRFbCA/IGhlbHBlclRleHRGYWN0b3J5KGhlbHBlclRleHRFbCkgOiBudWxsO1xuICAgICAgICAvLyBDaGFyYWN0ZXIgY291bnRlclxuICAgICAgICB2YXIgY2hhcmFjdGVyQ291bnRlclN0cmluZ3MgPSBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIgY2hhcmFjdGVyQ291bnRlckVsID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKGNoYXJhY3RlckNvdW50ZXJTdHJpbmdzLlJPT1RfU0VMRUNUT1IpO1xuICAgICAgICAvLyBJZiBjaGFyYWN0ZXIgY291bnRlciBpcyBub3QgZm91bmQgaW4gcm9vdCBlbGVtZW50IHNlYXJjaCBpbiBzaWJsaW5nIGVsZW1lbnQuXG4gICAgICAgIGlmICghY2hhcmFjdGVyQ291bnRlckVsICYmIGhhc0hlbHBlckxpbmUgJiYgbmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJDb3VudGVyRWwgPSBuZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcihjaGFyYWN0ZXJDb3VudGVyU3RyaW5ncy5ST09UX1NFTEVDVE9SKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50ZXJfID0gY2hhcmFjdGVyQ291bnRlckVsID8gY2hhcmFjdGVyQ291bnRlckZhY3RvcnkoY2hhcmFjdGVyQ291bnRlckVsKSA6IG51bGw7XG4gICAgICAgIHRoaXMubGVhZGluZ0ljb25fID0gbnVsbDtcbiAgICAgICAgdGhpcy50cmFpbGluZ0ljb25fID0gbnVsbDtcbiAgICAgICAgdmFyIGljb25FbGVtZW50cyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLklDT05fU0VMRUNUT1IpO1xuICAgICAgICBpZiAoaWNvbkVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChpY29uRWxlbWVudHMubGVuZ3RoID4gMSkgeyAvLyBIYXMgYm90aCBpY29ucy5cbiAgICAgICAgICAgICAgICB0aGlzLmxlYWRpbmdJY29uXyA9IGljb25GYWN0b3J5KGljb25FbGVtZW50c1swXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFpbGluZ0ljb25fID0gaWNvbkZhY3RvcnkoaWNvbkVsZW1lbnRzWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLldJVEhfTEVBRElOR19JQ09OKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYWRpbmdJY29uXyA9IGljb25GYWN0b3J5KGljb25FbGVtZW50c1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWlsaW5nSWNvbl8gPSBpY29uRmFjdG9yeShpY29uRWxlbWVudHNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJpcHBsZSA9IHRoaXMuY3JlYXRlUmlwcGxlXyhyaXBwbGVGYWN0b3J5KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmlwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGluZVJpcHBsZV8pIHtcbiAgICAgICAgICAgIHRoaXMubGluZVJpcHBsZV8uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclRleHRfLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJDb3VudGVyXykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudGVyXy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICAgICAgICB0aGlzLmxlYWRpbmdJY29uXy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHJhaWxpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy50cmFpbGluZ0ljb25fLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYWJlbF8pIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWxfLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vdXRsaW5lXykge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgVGV4dCBGaWVsZCdzIGludGVybmFsIHN0YXRlIGJhc2VkIG9uIHRoZSBlbnZpcm9ubWVudCdzXG4gICAgICogc3RhdGUuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmlucHV0Xy5kaXNhYmxlZDtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5nZXRWYWx1ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgb24gdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNEaXNhYmxlZCgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIGRpc2FibGVkIFNldHMgdGhlIFRleHQgRmllbGQgZGlzYWJsZWQgb3IgZW5hYmxlZC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldERpc2FibGVkKGRpc2FibGVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwidmFsaWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmlzVmFsaWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB2YWxpZCBTZXRzIHRoZSBUZXh0IEZpZWxkIHZhbGlkIG9yIGludmFsaWQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRWYWxpZCh2YWxpZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcInJlcXVpcmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dF8ucmVxdWlyZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gcmVxdWlyZWQgU2V0cyB0aGUgVGV4dCBGaWVsZCB0byByZXF1aXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJwYXR0ZXJuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dF8ucGF0dGVybjtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBwYXR0ZXJuIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyB2YWxpZGF0aW9uIHBhdHRlcm4uXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwibWluTGVuZ3RoXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dF8ubWluTGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIG1pbkxlbmd0aCBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgbWluTGVuZ3RoLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobWluTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5taW5MZW5ndGggPSBtaW5MZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcIm1heExlbmd0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRfLm1heExlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBtYXhMZW5ndGggU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIG1heExlbmd0aC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG1heExlbmd0aCkge1xuICAgICAgICAgICAgLy8gQ2hyb21lIHRocm93cyBleGNlcHRpb24gaWYgbWF4TGVuZ3RoIGlzIHNldCB0byBhIHZhbHVlIGxlc3MgdGhhbiB6ZXJvXG4gICAgICAgICAgICBpZiAobWF4TGVuZ3RoIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRfLnJlbW92ZUF0dHJpYnV0ZSgnbWF4TGVuZ3RoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Xy5tYXhMZW5ndGggPSBtYXhMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcIm1pblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRfLm1pbjtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSBtaW4gU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIG1pbi5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG1pbikge1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8ubWluID0gbWluO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJtYXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0Xy5tYXg7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gbWF4IFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBtYXguXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChtYXgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLm1heCA9IG1heDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZC5wcm90b3R5cGUsIFwic3RlcFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRfLnN0ZXA7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gc3RlcCBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3Mgc3RlcC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLnN0ZXAgPSBzdGVwO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJoZWxwZXJUZXh0Q29udGVudFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50IGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldEhlbHBlclRleHRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJsZWFkaW5nSWNvbkFyaWFMYWJlbFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9mIHRoZSBsZWFkaW5nIGljb24uXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRMZWFkaW5nSWNvbkFyaWFMYWJlbChsYWJlbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcImxlYWRpbmdJY29uQ29udGVudFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGxlYWRpbmcgaWNvbi5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0TGVhZGluZ0ljb25Db250ZW50KGNvbnRlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJ0cmFpbGluZ0ljb25BcmlhTGFiZWxcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYXJpYSBsYWJlbCBvZiB0aGUgdHJhaWxpbmcgaWNvbi5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFRyYWlsaW5nSWNvbkFyaWFMYWJlbChsYWJlbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGQucHJvdG90eXBlLCBcInRyYWlsaW5nSWNvbkNvbnRlbnRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSB0cmFpbGluZyBpY29uLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRUcmFpbGluZ0ljb25Db250ZW50KGNvbnRlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkLnByb3RvdHlwZSwgXCJ1c2VOYXRpdmVWYWxpZGF0aW9uXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIHVzZSBvZiBuYXRpdmUgdmFsaWRhdGlvbi4gVXNlIHRoaXMgZm9yIGN1c3RvbSB2YWxpZGF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0gdXNlTmF0aXZlVmFsaWRhdGlvbiBTZXQgdGhpcyB0byBmYWxzZSB0byBpZ25vcmUgbmF0aXZlIGlucHV0IHZhbGlkYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1c2VOYXRpdmVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVzZU5hdGl2ZVZhbGlkYXRpb24odXNlTmF0aXZlVmFsaWRhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dF8uZm9jdXMoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlY29tcHV0ZXMgdGhlIG91dGxpbmUgU1ZHIHBhdGggZm9yIHRoZSBvdXRsaW5lIGVsZW1lbnQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVuTm90Y2ggPSB0aGlzLmZvdW5kYXRpb25fLnNob3VsZEZsb2F0O1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLm5vdGNoT3V0bGluZShvcGVuTm90Y2gpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuZ2V0Um9vdEFkYXB0ZXJNZXRob2RzXygpLCB0aGlzLmdldElucHV0QWRhcHRlck1ldGhvZHNfKCksIHRoaXMuZ2V0TGFiZWxBZGFwdGVyTWV0aG9kc18oKSwgdGhpcy5nZXRMaW5lUmlwcGxlQWRhcHRlck1ldGhvZHNfKCksIHRoaXMuZ2V0T3V0bGluZUFkYXB0ZXJNZXRob2RzXygpKTtcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRGb3VuZGF0aW9uKGFkYXB0ZXIsIHRoaXMuZ2V0Rm91bmRhdGlvbk1hcF8oKSk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmdldFJvb3RBZGFwdGVyTWV0aG9kc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHsgcmV0dXJuIF90aGlzLnVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ2V0QXR0cmlidXRlc0xpc3QgPSBmdW5jdGlvbiAobXV0YXRpb25zTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXV0YXRpb25zTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobXV0YXRpb24pIHsgcmV0dXJuIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7IHJldHVybiBhdHRyaWJ1dGVOYW1lOyB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnNMaXN0KSB7IHJldHVybiBoYW5kbGVyKGdldEF0dHJpYnV0ZXNMaXN0KG11dGF0aW9uc0xpc3QpKTsgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoX3RoaXMuaW5wdXRfLCBjb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5nZXRJbnB1dEFkYXB0ZXJNZXRob2RzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldE5hdGl2ZUlucHV0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5pbnB1dF87IH0sXG4gICAgICAgICAgICBpc0ZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLmlucHV0XzsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlucHV0Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmdldExhYmVsQWRhcHRlck1ldGhvZHNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmxvYXRMYWJlbDogZnVuY3Rpb24gKHNob3VsZEZsb2F0KSB7IHJldHVybiBfdGhpcy5sYWJlbF8gJiYgX3RoaXMubGFiZWxfLmZsb2F0KHNob3VsZEZsb2F0KTsgfSxcbiAgICAgICAgICAgIGdldExhYmVsV2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxhYmVsXyA/IF90aGlzLmxhYmVsXy5nZXRXaWR0aCgpIDogMDsgfSxcbiAgICAgICAgICAgIGhhc0xhYmVsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKF90aGlzLmxhYmVsXyk7IH0sXG4gICAgICAgICAgICBzaGFrZUxhYmVsOiBmdW5jdGlvbiAoc2hvdWxkU2hha2UpIHsgcmV0dXJuIF90aGlzLmxhYmVsXyAmJiBfdGhpcy5sYWJlbF8uc2hha2Uoc2hvdWxkU2hha2UpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5nZXRMaW5lUmlwcGxlQWRhcHRlck1ldGhvZHNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGVMaW5lUmlwcGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxpbmVSaXBwbGVfLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlYWN0aXZhdGVMaW5lUmlwcGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxpbmVSaXBwbGVfLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbjogZnVuY3Rpb24gKG5vcm1hbGl6ZWRYKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxpbmVSaXBwbGVfLnNldFJpcHBsZUNlbnRlcihub3JtYWxpemVkWCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZC5wcm90b3R5cGUuZ2V0T3V0bGluZUFkYXB0ZXJNZXRob2RzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsb3NlT3V0bGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub3V0bGluZV8gJiYgX3RoaXMub3V0bGluZV8uY2xvc2VOb3RjaCgpOyB9LFxuICAgICAgICAgICAgaGFzT3V0bGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihfdGhpcy5vdXRsaW5lXyk7IH0sXG4gICAgICAgICAgICBub3RjaE91dGxpbmU6IGZ1bmN0aW9uIChsYWJlbFdpZHRoKSB7IHJldHVybiBfdGhpcy5vdXRsaW5lXyAmJiBfdGhpcy5vdXRsaW5lXy5ub3RjaChsYWJlbFdpZHRoKTsgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gQSBtYXAgb2YgYWxsIHN1YmNvbXBvbmVudHMgdG8gc3ViZm91bmRhdGlvbnMuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkLnByb3RvdHlwZS5nZXRGb3VuZGF0aW9uTWFwXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoYXJhY3RlckNvdW50ZXI6IHRoaXMuY2hhcmFjdGVyQ291bnRlcl8gPyB0aGlzLmNoYXJhY3RlckNvdW50ZXJfLmZvdW5kYXRpb24gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoZWxwZXJUZXh0OiB0aGlzLmhlbHBlclRleHRfID8gdGhpcy5oZWxwZXJUZXh0Xy5mb3VuZGF0aW9uIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGVhZGluZ0ljb246IHRoaXMubGVhZGluZ0ljb25fID8gdGhpcy5sZWFkaW5nSWNvbl8uZm91bmRhdGlvbiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRyYWlsaW5nSWNvbjogdGhpcy50cmFpbGluZ0ljb25fID8gdGhpcy50cmFpbGluZ0ljb25fLmZvdW5kYXRpb24gOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGQucHJvdG90eXBlLmNyZWF0ZVJpcHBsZV8gPSBmdW5jdGlvbiAocmlwcGxlRmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaXNUZXh0QXJlYSA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuVEVYVEFSRUEpO1xuICAgICAgICB2YXIgaXNPdXRsaW5lZCA9IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuT1VUTElORUQpO1xuICAgICAgICBpZiAoaXNUZXh0QXJlYSB8fCBpc091dGxpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcyksIHsgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBwb255ZmlsbC5tYXRjaGVzKF90aGlzLmlucHV0XywgJzphY3RpdmUnKTsgfSwgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7IH0sIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlucHV0Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiByaXBwbGVGYWN0b3J5KHRoaXMucm9vdF8sIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUZXh0RmllbGQ7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0NPTlRST0xTOiAnYXJpYS1jb250cm9scycsXG4gICAgSUNPTl9TRUxFQ1RPUjogJy5tZGMtdGV4dC1maWVsZF9faWNvbicsXG4gICAgSU5QVVRfU0VMRUNUT1I6ICcubWRjLXRleHQtZmllbGRfX2lucHV0JyxcbiAgICBMQUJFTF9TRUxFQ1RPUjogJy5tZGMtZmxvYXRpbmctbGFiZWwnLFxuICAgIExJTkVfUklQUExFX1NFTEVDVE9SOiAnLm1kYy1saW5lLXJpcHBsZScsXG4gICAgT1VUTElORV9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lJyxcbn07XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBERU5TRTogJ21kYy10ZXh0LWZpZWxkLS1kZW5zZScsXG4gICAgRElTQUJMRUQ6ICdtZGMtdGV4dC1maWVsZC0tZGlzYWJsZWQnLFxuICAgIEZPQ1VTRUQ6ICdtZGMtdGV4dC1maWVsZC0tZm9jdXNlZCcsXG4gICAgRlVMTFdJRFRIOiAnbWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCcsXG4gICAgSEVMUEVSX0xJTkU6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItbGluZScsXG4gICAgSU5WQUxJRDogJ21kYy10ZXh0LWZpZWxkLS1pbnZhbGlkJyxcbiAgICBOT19MQUJFTDogJ21kYy10ZXh0LWZpZWxkLS1uby1sYWJlbCcsXG4gICAgT1VUTElORUQ6ICdtZGMtdGV4dC1maWVsZC0tb3V0bGluZWQnLFxuICAgIFJPT1Q6ICdtZGMtdGV4dC1maWVsZCcsXG4gICAgVEVYVEFSRUE6ICdtZGMtdGV4dC1maWVsZC0tdGV4dGFyZWEnLFxuICAgIFdJVEhfTEVBRElOR19JQ09OOiAnbWRjLXRleHQtZmllbGQtLXdpdGgtbGVhZGluZy1pY29uJyxcbiAgICBXSVRIX1RSQUlMSU5HX0lDT046ICdtZGMtdGV4dC1maWVsZC0td2l0aC10cmFpbGluZy1pY29uJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBERU5TRV9MQUJFTF9TQ0FMRTogMC45MjMsXG4gICAgTEFCRUxfU0NBTEU6IDAuNzUsXG59O1xuLyoqXG4gKiBXaGl0ZWxpc3QgYmFzZWQgb2ZmIG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0hUTUwvSFRNTDUvQ29uc3RyYWludF92YWxpZGF0aW9uXG4gKiB1bmRlciB0aGUgXCJWYWxpZGF0aW9uLXJlbGF0ZWQgYXR0cmlidXRlc1wiIHNlY3Rpb24uXG4gKi9cbnZhciBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNUID0gW1xuICAgICdwYXR0ZXJuJywgJ21pbicsICdtYXgnLCAncmVxdWlyZWQnLCAnc3RlcCcsICdtaW5sZW5ndGgnLCAnbWF4bGVuZ3RoJyxcbl07XG4vKipcbiAqIExhYmVsIHNob3VsZCBhbHdheXMgZmxvYXQgZm9yIHRoZXNlIHR5cGVzIGFzIHRoZXkgc2hvdyBzb21lIFVJIGV2ZW4gaWYgdmFsdWUgaXMgZW1wdHkuXG4gKi9cbnZhciBBTFdBWVNfRkxPQVRfVFlQRVMgPSBbXG4gICAgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnbW9udGgnLCAncmFuZ2UnLCAndGltZScsICd3ZWVrJyxcbl07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNULCBBTFdBWVNfRkxPQVRfVFlQRVMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBBTFdBWVNfRkxPQVRfVFlQRVMsIGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MsIFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgUE9JTlRFUkRPV05fRVZFTlRTID0gWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddO1xudmFyIElOVEVSQUNUSU9OX0VWRU5UUyA9IFsnY2xpY2snLCAna2V5ZG93biddO1xudmFyIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gYWRhcHRlclxuICAgICAqIEBwYXJhbSBmb3VuZGF0aW9uTWFwIE1hcCBmcm9tIHN1YmNvbXBvbmVudCBuYW1lcyB0byB0aGVpciBzdWJmb3VuZGF0aW9ucy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRGb3VuZGF0aW9uKGFkYXB0ZXIsIGZvdW5kYXRpb25NYXApIHtcbiAgICAgICAgaWYgKGZvdW5kYXRpb25NYXAgPT09IHZvaWQgMCkgeyBmb3VuZGF0aW9uTWFwID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzRm9jdXNlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMucmVjZWl2ZWRVc2VySW5wdXRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzVmFsaWRfID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMudXNlTmF0aXZlVmFsaWRhdGlvbl8gPSB0cnVlO1xuICAgICAgICBfdGhpcy5oZWxwZXJUZXh0XyA9IGZvdW5kYXRpb25NYXAuaGVscGVyVGV4dDtcbiAgICAgICAgX3RoaXMuY2hhcmFjdGVyQ291bnRlcl8gPSBmb3VuZGF0aW9uTWFwLmNoYXJhY3RlckNvdW50ZXI7XG4gICAgICAgIF90aGlzLmxlYWRpbmdJY29uXyA9IGZvdW5kYXRpb25NYXAubGVhZGluZ0ljb247XG4gICAgICAgIF90aGlzLnRyYWlsaW5nSWNvbl8gPSBmb3VuZGF0aW9uTWFwLnRyYWlsaW5nSWNvbjtcbiAgICAgICAgX3RoaXMuaW5wdXRGb2N1c0hhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5pbnB1dEJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5pbnB1dElucHV0SGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVJbnB1dCgpOyB9O1xuICAgICAgICBfdGhpcy5zZXRQb2ludGVyWE9mZnNldF8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5zZXRUcmFuc2Zvcm1PcmlnaW4oZXZ0KTsgfTtcbiAgICAgICAgX3RoaXMudGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVRleHRGaWVsZEludGVyYWN0aW9uKCk7IH07XG4gICAgICAgIF90aGlzLnZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyXyA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzTGlzdCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZShhdHRyaWJ1dGVzTGlzdCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLCBcInNob3VsZEFsd2F5c0Zsb2F0X1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnR5cGU7XG4gICAgICAgICAgICByZXR1cm4gQUxXQVlTX0ZMT0FUX1RZUEVTLmluZGV4T2YodHlwZSkgPj0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLCBcInNob3VsZEZsb2F0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG91bGRBbHdheXNGbG9hdF8gfHwgdGhpcy5pc0ZvY3VzZWRfIHx8IEJvb2xlYW4odGhpcy5nZXRWYWx1ZSgpKSB8fCB0aGlzLmlzQmFkSW5wdXRfKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZSwgXCJzaG91bGRTaGFrZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzRm9jdXNlZF8gJiYgIXRoaXMuaXNWYWxpZCgpICYmIEJvb2xlYW4odGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUZXh0RmllbGRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0pOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldE5hdGl2ZUlucHV0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGlzRm9jdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVMaW5lUmlwcGxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUxpbmVSaXBwbGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2hha2VMYWJlbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZsb2F0TGFiZWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNMYWJlbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgZ2V0TGFiZWxXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBoYXNPdXRsaW5lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RjaE91dGxpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBjbG9zZU91dGxpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0ZvY3VzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkgJiYgdGhpcy5zaG91bGRGbG9hdCkge1xuICAgICAgICAgICAgdGhpcy5ub3RjaE91dGxpbmUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5pbnB1dEJsdXJIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignaW5wdXQnLCB0aGlzLmlucHV0SW5wdXRIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJET1dOX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLnNldFBvaW50ZXJYT2Zmc2V0Xyk7XG4gICAgICAgIH0pO1xuICAgICAgICBJTlRFUkFDVElPTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMudGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25PYnNlcnZlcl8gPVxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKHRoaXMudmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudGVyXyh0aGlzLmdldFZhbHVlKCkubGVuZ3RoKTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmlucHV0Qmx1ckhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2lucHV0JywgdGhpcy5pbnB1dElucHV0SGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSRE9XTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLnNldFBvaW50ZXJYT2Zmc2V0Xyk7XG4gICAgICAgIH0pO1xuICAgICAgICBJTlRFUkFDVElPTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy50ZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHVzZXIgaW50ZXJhY3Rpb25zIHdpdGggdGhlIFRleHQgRmllbGQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuYXRpdmVJbnB1dCA9IHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlSW5wdXQoKTtcbiAgICAgICAgaWYgKG5hdGl2ZUlucHV0ICYmIG5hdGl2ZUlucHV0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8gPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB2YWxpZGF0aW9uIGF0dHJpYnV0ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzTGlzdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBhdHRyaWJ1dGVzTGlzdC5zb21lKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICBpZiAoVkFMSURBVElPTl9BVFRSX1dISVRFTElTVC5pbmRleE9mKGF0dHJpYnV0ZU5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdHlsZVZhbGlkaXR5Xyh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzTGlzdC5pbmRleE9mKCdtYXhsZW5ndGgnKSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldENoYXJhY3RlckNvdW50ZXJfKHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVucy9jbG9zZXMgdGhlIG5vdGNoZWQgb3V0bGluZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5ub3RjaE91dGxpbmUgPSBmdW5jdGlvbiAob3Blbk5vdGNoKSB7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNPdXRsaW5lKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3Blbk5vdGNoKSB7XG4gICAgICAgICAgICB2YXIgaXNEZW5zZSA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5ERU5TRSk7XG4gICAgICAgICAgICB2YXIgbGFiZWxTY2FsZSA9IGlzRGVuc2UgPyBudW1iZXJzLkRFTlNFX0xBQkVMX1NDQUxFIDogbnVtYmVycy5MQUJFTF9TQ0FMRTtcbiAgICAgICAgICAgIHZhciBsYWJlbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRMYWJlbFdpZHRoKCkgKiBsYWJlbFNjYWxlO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RjaE91dGxpbmUobGFiZWxXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlT3V0bGluZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIHRleHQgZmllbGQgZm9jdXMgc3RhdGUuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWRfID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdHlsZUZvY3VzZWRfKHRoaXMuaXNGb2N1c2VkXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVMaW5lUmlwcGxlKCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclRleHRfLnNob3dUb1NjcmVlblJlYWRlcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsaW5lIHJpcHBsZSdzIHRyYW5zZm9ybSBvcmlnaW4sIHNvIHRoYXQgdGhlIGxpbmUgcmlwcGxlIGFjdGl2YXRlXG4gICAgICogYW5pbWF0aW9uIHdpbGwgYW5pbWF0ZSBvdXQgZnJvbSB0aGUgdXNlcidzIGNsaWNrIGxvY2F0aW9uLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRyYW5zZm9ybU9yaWdpbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIHRvdWNoZXMgPSBldnQudG91Y2hlcztcbiAgICAgICAgdmFyIHRhcmdldEV2ZW50ID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0gOiBldnQ7XG4gICAgICAgIHZhciB0YXJnZXRDbGllbnRSZWN0ID0gdGFyZ2V0RXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgbm9ybWFsaXplZFggPSB0YXJnZXRFdmVudC5jbGllbnRYIC0gdGFyZ2V0Q2xpZW50UmVjdC5sZWZ0O1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW4obm9ybWFsaXplZFgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2Ugb2YgdGV4dCBpbnB1dCBhbmQgdGV4dCBhcmVhLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZUZvY3VzKCk7XG4gICAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyQ291bnRlcl8odGhpcy5nZXRWYWx1ZSgpLmxlbmd0aCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIFRleHQgRmllbGQncyBmb2N1cyBzdGF0ZSBpbiBjYXNlcyB3aGVuIHRoZSBpbnB1dCB2YWx1ZVxuICAgICAqIGNoYW5nZXMgd2l0aG91dCB1c2VyIGlucHV0IChlLmcuIHByb2dyYW1tYXRpY2FsbHkpLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmF1dG9Db21wbGV0ZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjZWl2ZWRVc2VySW5wdXRfKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZXMgdGhlIFRleHQgRmllbGQncyBmb2N1cyBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVMaW5lUmlwcGxlKCk7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkKCk7XG4gICAgICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCk7XG4gICAgICAgIHRoaXMuc3R5bGVGb2N1c2VkXyh0aGlzLmlzRm9jdXNlZF8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGNoT3V0bGluZSh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbCh0aGlzLnNob3VsZFNoYWtlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkRmxvYXQpIHtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZWRVc2VySW5wdXRfID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS52YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbnB1dCBFbGVtZW50LlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIFByZXZlbnQgU2FmYXJpIGZyb20gbW92aW5nIHRoZSBjYXJldCB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCB3aGVuIHRoZSB2YWx1ZSBoYXMgbm90IGNoYW5nZWQuXG4gICAgICAgIGlmICh0aGlzLmdldFZhbHVlKCkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudGVyXyh2YWx1ZS5sZW5ndGgpO1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRoaXMuaXNWYWxpZCgpO1xuICAgICAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGNoT3V0bGluZSh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbCh0aGlzLnNob3VsZFNoYWtlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUaGUgY3VzdG9tIHZhbGlkaXR5IHN0YXRlLCBpZiBzZXQ7IG90aGVyd2lzZSwgdGhlIHJlc3VsdCBvZiBhIG5hdGl2ZSB2YWxpZGl0eSBjaGVjay5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VOYXRpdmVWYWxpZGF0aW9uX1xuICAgICAgICAgICAgPyB0aGlzLmlzTmF0aXZlSW5wdXRWYWxpZF8oKSA6IHRoaXMuaXNWYWxpZF87XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXNWYWxpZCBTZXRzIHRoZSBjdXN0b20gdmFsaWRpdHkgc3RhdGUgb2YgdGhlIFRleHQgRmllbGQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmFsaWQgPSBmdW5jdGlvbiAoaXNWYWxpZCkge1xuICAgICAgICB0aGlzLmlzVmFsaWRfID0gaXNWYWxpZDtcbiAgICAgICAgdGhpcy5zdHlsZVZhbGlkaXR5Xyhpc1ZhbGlkKTtcbiAgICAgICAgdmFyIHNob3VsZFNoYWtlID0gIWlzVmFsaWQgJiYgIXRoaXMuaXNGb2N1c2VkXztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHNob3VsZFNoYWtlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBvciBkaXNhYmxlcyB0aGUgdXNlIG9mIG5hdGl2ZSB2YWxpZGF0aW9uLiBVc2UgdGhpcyBmb3IgY3VzdG9tIHZhbGlkYXRpb24uXG4gICAgICogQHBhcmFtIHVzZU5hdGl2ZVZhbGlkYXRpb24gU2V0IHRoaXMgdG8gZmFsc2UgdG8gaWdub3JlIG5hdGl2ZSBpbnB1dCB2YWxpZGF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVzZU5hdGl2ZVZhbGlkYXRpb24gPSBmdW5jdGlvbiAodXNlTmF0aXZlVmFsaWRhdGlvbikge1xuICAgICAgICB0aGlzLnVzZU5hdGl2ZVZhbGlkYXRpb25fID0gdXNlTmF0aXZlVmFsaWRhdGlvbjtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLmRpc2FibGVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGRpc2FibGVkIFNldHMgdGhlIHRleHQtZmllbGQgZGlzYWJsZWQgb3IgZW5hYmxlZC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmdldE5hdGl2ZUlucHV0XygpLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuc3R5bGVEaXNhYmxlZF8oZGlzYWJsZWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbnRlbnQgU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0SGVscGVyVGV4dENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9mIHRoZSBsZWFkaW5nIGljb24uXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0TGVhZGluZ0ljb25BcmlhTGFiZWwgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICAgICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXRBcmlhTGFiZWwobGFiZWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGxlYWRpbmcgaWNvbi5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRMZWFkaW5nSWNvbkNvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIHRyYWlsaW5nIGljb24uXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VHJhaWxpbmdJY29uQXJpYUxhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5zZXRBcmlhTGFiZWwobGFiZWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHRyYWlsaW5nIGljb24uXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VHJhaWxpbmdJY29uQ29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGNoYXJhY3RlciBjb3VudGVyIHZhbHVlcyB0aGF0IHNob3dzIGNoYXJhY3RlcnMgdXNlZCBhbmQgdGhlIHRvdGFsIGNoYXJhY3RlciBsaW1pdC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDaGFyYWN0ZXJDb3VudGVyXyA9IGZ1bmN0aW9uIChjdXJyZW50TGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFyYWN0ZXJDb3VudGVyXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhMZW5ndGggPSB0aGlzLmdldE5hdGl2ZUlucHV0XygpLm1heExlbmd0aDtcbiAgICAgICAgaWYgKG1heExlbmd0aCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTURDVGV4dEZpZWxkRm91bmRhdGlvbjogRXhwZWN0ZWQgbWF4bGVuZ3RoIGh0bWwgcHJvcGVydHkgb24gdGV4dCBpbnB1dCBvciB0ZXh0YXJlYS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50ZXJfLnNldENvdW50ZXJWYWx1ZShjdXJyZW50TGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUcnVlIGlmIHRoZSBUZXh0IEZpZWxkIGlucHV0IGZhaWxzIGluIGNvbnZlcnRpbmcgdGhlIHVzZXItc3VwcGxpZWQgdmFsdWUuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaXNCYWRJbnB1dF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRoZSBiYWRJbnB1dCBwcm9wZXJ0eSBpcyBub3Qgc3VwcG9ydGVkIGluIElFIDExIPCfkqkuXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbGlkaXR5LmJhZElucHV0IHx8IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIG5hdGl2ZSB2YWxpZGl0eSBjaGVja2luZyAoVmFsaWRpdHlTdGF0ZS52YWxpZCkuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuaXNOYXRpdmVJbnB1dFZhbGlkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsaWRpdHkudmFsaWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgdmFsaWRpdHkgc3RhdGUuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc3R5bGVWYWxpZGl0eV8gPSBmdW5jdGlvbiAoaXNWYWxpZCkge1xuICAgICAgICB2YXIgSU5WQUxJRCA9IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5JTlZBTElEO1xuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhJTlZBTElEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoSU5WQUxJRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2V0VmFsaWRpdHkoaXNWYWxpZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0eWxlcyB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBmb2N1c2VkIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24ucHJvdG90eXBlLnN0eWxlRm9jdXNlZF8gPSBmdW5jdGlvbiAoaXNGb2N1c2VkKSB7XG4gICAgICAgIHZhciBGT0NVU0VEID0gTURDVGV4dEZpZWxkRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZPQ1VTRUQ7XG4gICAgICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRk9DVVNFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZPQ1VTRUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgZGlzYWJsZWQgc3RhdGUuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuc3R5bGVEaXNhYmxlZF8gPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICB2YXIgX2EgPSBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIERJU0FCTEVEID0gX2EuRElTQUJMRUQsIElOVkFMSUQgPSBfYS5JTlZBTElEO1xuICAgICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhESVNBQkxFRCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKElOVkFMSUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhESVNBQkxFRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICAgICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50cmFpbGluZ0ljb25fKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWlsaW5nSWNvbl8uc2V0RGlzYWJsZWQoaXNEaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gVGhlIG5hdGl2ZSB0ZXh0IGlucHV0IGVsZW1lbnQgZnJvbSB0aGUgaG9zdCBlbnZpcm9ubWVudCwgb3IgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgZm9yIHVuaXQgdGVzdHMuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0TmF0aXZlSW5wdXRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGlzLmFkYXB0ZXJfIG1heSBiZSB1bmRlZmluZWQgaW4gZm91bmRhdGlvbiB1bml0IHRlc3RzLiBUaGlzIGhhcHBlbnMgd2hlbiB0ZXN0ZG91YmxlIGlzIGNyZWF0aW5nIGEgbW9jayBvYmplY3RcbiAgICAgICAgLy8gYW5kIGludm9rZXMgdGhlIHNob3VsZFNoYWtlL3Nob3VsZEZsb2F0IGdldHRlcnMgKHdoaWNoIGluIHR1cm4gY2FsbCBnZXRWYWx1ZSgpLCB3aGljaCBjYWxscyB0aGlzIG1ldGhvZCkgYmVmb3JlXG4gICAgICAgIC8vIGluaXQoKSBoYXMgYmVlbiBjYWxsZWQgZnJvbSB0aGUgTURDVGV4dEZpZWxkIGNvbnN0cnVjdG9yLiBUbyB3b3JrIGFyb3VuZCB0aGF0IGlzc3VlLCB3ZSByZXR1cm4gYSBkdW1teSBvYmplY3QuXG4gICAgICAgIHZhciBuYXRpdmVJbnB1dCA9IHRoaXMuYWRhcHRlcl8gPyB0aGlzLmFkYXB0ZXJfLmdldE5hdGl2ZUlucHV0KCkgOiBudWxsO1xuICAgICAgICByZXR1cm4gbmF0aXZlSW5wdXQgfHwge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAtMSxcbiAgICAgICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgICAgICB2YWxpZGl0eToge1xuICAgICAgICAgICAgICAgIGJhZElucHV0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDVGV4dEZpZWxkSGVscGVyVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRIZWxwZXJUZXh0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZEhlbHBlclRleHQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkSGVscGVyVGV4dChyb290KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRIZWxwZXJUZXh0LnByb3RvdHlwZSwgXCJmb3VuZGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uIChhdHRyLCB2YWx1ZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBfdGhpcy5yb290Xy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7IH0sXG4gICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJvb3RfLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkSGVscGVyVGV4dDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRIZWxwZXJUZXh0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBIRUxQRVJfVEVYVF9QRVJTSVNURU5UOiAnbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXBlcnNpc3RlbnQnLFxuICAgIEhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHOiAnbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXZhbGlkYXRpb24tbXNnJyxcbiAgICBST09UOiAnbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQnLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfSElEREVOOiAnYXJpYS1oaWRkZW4nLFxuICAgIFJPTEU6ICdyb2xlJyxcbiAgICBST09UX1NFTEVDVE9SOiBcIi5cIiArIGNzc0NsYXNzZXMuUk9PVCxcbn07XG5leHBvcnQgeyBzdHJpbmdzLCBjc3NDbGFzc2VzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQgZmllbGQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24ucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXNQZXJzaXN0ZW50IFNldHMgdGhlIHBlcnNpc3RlbmN5IG9mIHRoZSBoZWxwZXIgdGV4dC5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UGVyc2lzdGVudCA9IGZ1bmN0aW9uIChpc1BlcnNpc3RlbnQpIHtcbiAgICAgICAgaWYgKGlzUGVyc2lzdGVudCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXNWYWxpZGF0aW9uIFRydWUgdG8gbWFrZSB0aGUgaGVscGVyIHRleHQgYWN0IGFzIGFuIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmFsaWRhdGlvbiA9IGZ1bmN0aW9uIChpc1ZhbGlkYXRpb24pIHtcbiAgICAgICAgaWYgKGlzVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBoZWxwZXIgdGV4dCB2aXNpYmxlIHRvIHRoZSBzY3JlZW4gcmVhZGVyLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zaG93VG9TY3JlZW5SZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cihzdHJpbmdzLkFSSUFfSElEREVOKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbGlkaXR5IG9mIHRoZSBoZWxwZXIgdGV4dCBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsaWRpdHkuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZhbGlkaXR5ID0gZnVuY3Rpb24gKGlucHV0SXNWYWxpZCkge1xuICAgICAgICB2YXIgaGVscGVyVGV4dElzUGVyc2lzdGVudCA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICAgICAgdmFyIGhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2cgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgICAgICB2YXIgdmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSA9IGhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2cgJiYgIWlucHV0SXNWYWxpZDtcbiAgICAgICAgaWYgKHZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlJPTEUsICdhbGVydCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKHN0cmluZ3MuUk9MRSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ICYmICF2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBoZWxwIHRleHQgZnJvbSBzY3JlZW4gcmVhZGVycy5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGlkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLkFSSUFfSElEREVOLCAndHJ1ZScpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG5leHBvcnQgeyBjc3NDbGFzc2VzIGFzIGhlbHBlclRleHRDc3NDbGFzc2VzLCBzdHJpbmdzIGFzIGhlbHBlclRleHRTdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENUZXh0RmllbGRJY29uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RleHRGaWVsZEljb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkSWNvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUZXh0RmllbGRJY29uLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRJY29uKHJvb3QpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEljb24ucHJvdG90eXBlLCBcImZvdW5kYXRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRJY29uLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGdldEF0dHI6IGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBfdGhpcy5yb290Xy5nZXRBdHRyaWJ1dGUoYXR0cik7IH0sXG4gICAgICAgICAgICBzZXRBdHRyOiBmdW5jdGlvbiAoYXR0ciwgdmFsdWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7IH0sXG4gICAgICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gX3RoaXMucm9vdF8ucmVtb3ZlQXR0cmlidXRlKGF0dHIpOyB9LFxuICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yb290Xy50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7IHJldHVybiBfdGhpcy5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMudW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBub3RpZnlJY29uQWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5lbWl0KE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnN0cmluZ3MuSUNPTl9FVkVOVCwge30gLyogZXZ0RGF0YSAqLywgdHJ1ZSAvKiBzaG91bGRCdWJibGUgKi8pOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZEljb247XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDVGV4dEZpZWxkSWNvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHN0cmluZ3MgPSB7XG4gICAgSUNPTl9FVkVOVDogJ01EQ1RleHRGaWVsZDppY29uJyxcbiAgICBJQ09OX1JPTEU6ICdidXR0b24nLFxufTtcbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIFJPT1Q6ICdtZGMtdGV4dC1maWVsZF9faWNvbicsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgSU5URVJBQ1RJT05fRVZFTlRTID0gWydjbGljaycsICdrZXlkb3duJ107XG52YXIgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNhdmVkVGFiSW5kZXhfID0gbnVsbDtcbiAgICAgICAgX3RoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyA9IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUludGVyYWN0aW9uKGV2dCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ1RleHRGaWVsZEljb25BZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBzZXRBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlJY29uQWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2F2ZWRUYWJJbmRleF8gPSB0aGlzLmFkYXB0ZXJfLmdldEF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgIElOVEVSQUNUSU9OX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgSU5URVJBQ1RJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZFRhYkluZGV4Xykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKCdyb2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3RhYmluZGV4JywgdGhpcy5zYXZlZFRhYkluZGV4Xyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3JvbGUnLCBzdHJpbmdzLklDT05fUk9MRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBcmlhTGFiZWwgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0VudGVyS2V5ID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2NsaWNrJyB8fCBpc0VudGVyS2V5KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUljb25BY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG5leHBvcnQgeyBjc3NDbGFzc2VzIGFzIGljb25Dc3NDbGFzc2VzLCBzdHJpbmdzIGFzIGljb25TdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jaGFyYWN0ZXItY291bnRlci9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL2hlbHBlci10ZXh0L2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vaWNvbi9pbmRleCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDUmlwcGxlIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbiB9IGZyb20gJy4vZml4ZWQvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24gfSBmcm9tICcuL3Nob3J0L2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDVG9wQXBwQmFyRm91bmRhdGlvbiB9IGZyb20gJy4vc3RhbmRhcmQvZm91bmRhdGlvbic7XG52YXIgTURDVG9wQXBwQmFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RvcEFwcEJhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUb3BBcHBCYXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTURDVG9wQXBwQmFyLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENUb3BBcHBCYXIocm9vdCk7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocmlwcGxlRmFjdG9yeSkge1xuICAgICAgICBpZiAocmlwcGxlRmFjdG9yeSA9PT0gdm9pZCAwKSB7IHJpcHBsZUZhY3RvcnkgPSBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIE1EQ1JpcHBsZS5hdHRhY2hUbyhlbCk7IH07IH1cbiAgICAgICAgdGhpcy5uYXZJY29uXyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLk5BVklHQVRJT05fSUNPTl9TRUxFQ1RPUik7XG4gICAgICAgIC8vIEdldCBhbGwgaWNvbnMgaW4gdGhlIHRvb2xiYXIgYW5kIGluc3RhbnRpYXRlIHRoZSByaXBwbGVzXG4gICAgICAgIHZhciBpY29ucyA9IFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQUNUSU9OX0lURU1fU0VMRUNUT1IpKTtcbiAgICAgICAgaWYgKHRoaXMubmF2SWNvbl8pIHtcbiAgICAgICAgICAgIGljb25zLnB1c2godGhpcy5uYXZJY29uXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pY29uUmlwcGxlc18gPSBpY29ucy5tYXAoZnVuY3Rpb24gKGljb24pIHtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSByaXBwbGVGYWN0b3J5KGljb24pO1xuICAgICAgICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmlwcGxlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfID0gd2luZG93O1xuICAgIH07XG4gICAgTURDVG9wQXBwQmFyLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGlvbkNsaWNrXyA9IHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlTmF2aWdhdGlvbkNsaWNrLmJpbmQodGhpcy5mb3VuZGF0aW9uXyk7XG4gICAgICAgIHRoaXMuaGFuZGxlV2luZG93UmVzaXplXyA9IHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlV2luZG93UmVzaXplLmJpbmQodGhpcy5mb3VuZGF0aW9uXyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyA9IHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlVGFyZ2V0U2Nyb2xsLmJpbmQodGhpcy5mb3VuZGF0aW9uXyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Xy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8pO1xuICAgICAgICBpZiAodGhpcy5uYXZJY29uXykge1xuICAgICAgICAgICAgdGhpcy5uYXZJY29uXy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTmF2aWdhdGlvbkNsaWNrXyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzRml4ZWQgPSB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkZJWEVEX0NMQVNTKTtcbiAgICAgICAgdmFyIGlzU2hvcnQgPSB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLlNIT1JUX0NMQVNTKTtcbiAgICAgICAgaWYgKCFpc1Nob3J0ICYmICFpc0ZpeGVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemVfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVG9wQXBwQmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmljb25SaXBwbGVzXy5mb3JFYWNoKGZ1bmN0aW9uIChpY29uUmlwcGxlKSB7IHJldHVybiBpY29uUmlwcGxlLmRlc3Ryb3koKTsgfSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8pO1xuICAgICAgICBpZiAodGhpcy5uYXZJY29uXykge1xuICAgICAgICAgICAgdGhpcy5uYXZJY29uXy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTmF2aWdhdGlvbkNsaWNrXyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzRml4ZWQgPSB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkZJWEVEX0NMQVNTKTtcbiAgICAgICAgdmFyIGlzU2hvcnQgPSB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLlNIT1JUX0NMQVNTKTtcbiAgICAgICAgaWYgKCFpc1Nob3J0ICYmICFpc0ZpeGVkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemVfKTtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIE1EQ1RvcEFwcEJhci5wcm90b3R5cGUuc2V0U2Nyb2xsVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAvLyBSZW1vdmUgc2Nyb2xsIGhhbmRsZXIgZnJvbSB0aGUgcHJldmlvdXMgc2Nyb2xsIHRhcmdldFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVUYXJnZXRTY3JvbGxfKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfID0gdGFyZ2V0O1xuICAgICAgICAvLyBJbml0aWFsaXplIHNjcm9sbCBoYW5kbGVyIG9uIHRoZSBuZXcgc2Nyb2xsIHRhcmdldFxuICAgICAgICB0aGlzLmhhbmRsZVRhcmdldFNjcm9sbF8gPVxuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVUYXJnZXRTY3JvbGwuYmluZCh0aGlzLmZvdW5kYXRpb25fKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXRfLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsXyk7XG4gICAgfTtcbiAgICBNRENUb3BBcHBCYXIucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBfdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBzZXRTdHlsZTogZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTsgfSxcbiAgICAgICAgICAgIGdldFRvcEFwcEJhckhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xpZW50SGVpZ2h0OyB9LFxuICAgICAgICAgICAgbm90aWZ5TmF2aWdhdGlvbkljb25DbGlja2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5lbWl0KHN0cmluZ3MuTkFWSUdBVElPTl9FVkVOVCwge30pOyB9LFxuICAgICAgICAgICAgZ2V0Vmlld3BvcnRTY3JvbGxZOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpbiA9IF90aGlzLnNjcm9sbFRhcmdldF87XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMuc2Nyb2xsVGFyZ2V0XztcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luLnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQgPyB3aW4ucGFnZVlPZmZzZXQgOiBlbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG90YWxBY3Rpb25JdGVtczogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFDVElPTl9JVEVNX1NFTEVDVE9SKS5sZW5ndGg7IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIHZhciBmb3VuZGF0aW9uO1xuICAgICAgICBpZiAodGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5TSE9SVF9DTEFTUykpIHtcbiAgICAgICAgICAgIGZvdW5kYXRpb24gPSBuZXcgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuRklYRURfQ0xBU1MpKSB7XG4gICAgICAgICAgICBmb3VuZGF0aW9uID0gbmV3IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvdW5kYXRpb24gPSBuZXcgTURDVG9wQXBwQmFyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmRhdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBNRENUb3BBcHBCYXI7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDVG9wQXBwQmFyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBGSVhFRF9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tZml4ZWQnLFxuICAgIEZJWEVEX1NDUk9MTEVEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1maXhlZC1zY3JvbGxlZCcsXG4gICAgU0hPUlRfQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLXNob3J0JyxcbiAgICBTSE9SVF9DT0xMQVBTRURfQ0xBU1M6ICdtZGMtdG9wLWFwcC1iYXItLXNob3J0LWNvbGxhcHNlZCcsXG4gICAgU0hPUlRfSEFTX0FDVElPTl9JVEVNX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydC1oYXMtYWN0aW9uLWl0ZW0nLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIERFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TOiAxMDAsXG4gICAgTUFYX1RPUF9BUFBfQkFSX0hFSUdIVDogMTI4LFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFDVElPTl9JVEVNX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcl9fYWN0aW9uLWl0ZW0nLFxuICAgIE5BVklHQVRJT05fRVZFTlQ6ICdNRENUb3BBcHBCYXI6bmF2JyxcbiAgICBOQVZJR0FUSU9OX0lDT05fU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyX19uYXZpZ2F0aW9uLWljb24nLFxuICAgIFJPT1RfU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyJyxcbiAgICBUSVRMRV9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXJfX3RpdGxlJyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIH0gZnJvbSAnLi4vc3RhbmRhcmQvZm91bmRhdGlvbic7XG52YXIgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgdmFyaWFibGUgZm9yIHRoZSBwcmV2aW91cyBzY3JvbGwgaXRlcmF0aW9uIHRvcCBhcHAgYmFyIHN0YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy53YXNTY3JvbGxlZF8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgaGFuZGxlciBmb3IgYXBwbHlpbmcvcmVtb3ZpbmcgdGhlIG1vZGlmaWVyIGNsYXNzIG9uIHRoZSBmaXhlZCB0b3AgYXBwIGJhci5cbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRhcmdldFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA8PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy53YXNTY3JvbGxlZF8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuRklYRURfU0NST0xMRURfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMud2FzU2Nyb2xsZWRfID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMud2FzU2Nyb2xsZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkZJWEVEX1NDUk9MTEVEX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB0aGlzLndhc1Njcm9sbGVkXyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb247XG59KE1EQ1RvcEFwcEJhckZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogb3B0aW9uYWwgYXJndW1lbnQgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xuICAgIGZ1bmN0aW9uIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDVG9wQXBwQmFyQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0U3R5bGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRUb3BBcHBCYXJIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5TmF2aWdhdGlvbkljb25DbGlja2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Vmlld3BvcnRTY3JvbGxZOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldFRvdGFsQWN0aW9uSXRlbXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqIE90aGVyIHZhcmlhbnRzIG9mIFRvcEFwcEJhciBmb3VuZGF0aW9uIG92ZXJyaWRlcyB0aGlzIG1ldGhvZCAqL1xuICAgIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUYXJnZXRTY3JvbGwgPSBmdW5jdGlvbiAoKSB7IH07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHlcbiAgICAvKiogT3RoZXIgdmFyaWFudHMgb2YgVG9wQXBwQmFyIGZvdW5kYXRpb24gb3ZlcnJpZGVzIHRoaXMgbWV0aG9kICovXG4gICAgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVdpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHsgfTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eVxuICAgIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVOYXZpZ2F0aW9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5TmF2aWdhdGlvbkljb25DbGlja2VkKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZml4ZWQvZm91bmRhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3Nob3J0L2ZvdW5kYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zdGFuZGFyZC9mb3VuZGF0aW9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGNzc0NsYXNzZXMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24gfSBmcm9tICcuLi9mb3VuZGF0aW9uJztcbnZhciBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBvcHRpb25hbCBhcmd1bWVudCBpcyBub3QgYSBicmFuY2ggc3RhdGVtZW50ICovXG4gICAgZnVuY3Rpb24gTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYWRhcHRlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNDb2xsYXBzZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzQWx3YXlzQ29sbGFwc2VkXyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLCBcImlzQ29sbGFwc2VkXCIsIHtcbiAgICAgICAgLy8gUHVibGljIHZpc2liaWxpdHkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb2xsYXBzZWRfO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5nZXRUb3RhbEFjdGlvbkl0ZW1zKCkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU0hPUlRfSEFTX0FDVElPTl9JVEVNX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpbml0aWFsaXplZCB3aXRoIFNIT1JUX0NPTExBUFNFRF9DTEFTUywgdGhlIGJhciBzaG91bGQgYWx3YXlzIGJlIGNvbGxhcHNlZFxuICAgICAgICB0aGlzLnNldEFsd2F5c0NvbGxhcHNlZCh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuU0hPUlRfQ09MTEFQU0VEX0NMQVNTKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgaWYgdGhlIHNob3J0IHRvcCBhcHAgYmFyIHNob3VsZCBhbHdheXMgYmUgY29sbGFwc2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIFdoZW4gYHRydWVgLCBiYXIgd2lsbCBhbHdheXMgYmUgY29sbGFwc2VkLiBXaGVuIGBmYWxzZWAsIGJhciBtYXkgY29sbGFwc2Ugb3IgZXhwYW5kIGJhc2VkIG9uIHNjcm9sbC5cbiAgICAgKi9cbiAgICBNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFsd2F5c0NvbGxhcHNlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlzQWx3YXlzQ29sbGFwc2VkXyA9ICEhdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmlzQWx3YXlzQ29sbGFwc2VkXykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZV8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxldCBtYXliZUNvbGxhcHNlQmFyXyBkZXRlcm1pbmUgaWYgdGhlIGJhciBzaG91bGQgYmUgY29sbGFwc2VkXG4gICAgICAgICAgICB0aGlzLm1heWJlQ29sbGFwc2VCYXJfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0QWx3YXlzQ29sbGFwc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Fsd2F5c0NvbGxhcHNlZF87XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgaGFuZGxlciBmb3IgYXBwbHlpbmcvcmVtb3ZpbmcgdGhlIGNvbGxhcHNlZCBtb2RpZmllciBjbGFzcyBvbiB0aGUgc2hvcnQgdG9wIGFwcCBiYXIuXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUYXJnZXRTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWF5YmVDb2xsYXBzZUJhcl8oKTtcbiAgICB9O1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUubWF5YmVDb2xsYXBzZUJhcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWx3YXlzQ29sbGFwc2VkXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsID0gdGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPD0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmNvbGxhcHNlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGFwc2VkXykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUudW5jb2xsYXBzZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9DT0xMQVBTRURfQ0xBU1MpO1xuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkXyA9IGZhbHNlO1xuICAgIH07XG4gICAgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jb2xsYXBzZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9DT0xMQVBTRURfQ0xBU1MpO1xuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkXyA9IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uO1xufShNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBudW1iZXJzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uIH0gZnJvbSAnLi4vZm91bmRhdGlvbic7XG52YXIgSU5JVElBTF9WQUxVRSA9IDA7XG52YXIgTURDVG9wQXBwQmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUb3BBcHBCYXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBvcHRpb25hbCBhcmd1bWVudCBpcyBub3QgYSBicmFuY2ggc3RhdGVtZW50ICovXG4gICAgZnVuY3Rpb24gTURDVG9wQXBwQmFyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGFkYXB0ZXIpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHRvcCBhcHAgYmFyIHdhcyBkb2NrZWQgaW4gdGhlIHByZXZpb3VzIHNjcm9sbCBoYW5kbGVyIGl0ZXJhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLndhc0RvY2tlZF8gPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSB0b3AgYXBwIGJhciBpcyBkb2NrZWQgaW4gdGhlIGZ1bGx5IHNob3duIHBvc2l0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaXNEb2NrZWRTaG93aW5nXyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYXJpYWJsZSBmb3IgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHRvcCBhcHAgYmFyXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2VkIHRvIHByZXZlbnQgdGhlIHRvcCBhcHAgYmFyIGZyb20gYmVpbmcgc2Nyb2xsZWQgb3V0IG9mIHZpZXcgZHVyaW5nIHJlc2l6ZSBldmVudHNcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRpbWVvdXQgdGhhdCdzIHVzZWQgdG8gdGhyb3R0bGUgdGhlIHJlc2l6ZSBldmVudHNcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnJlc2l6ZVRocm90dGxlSWRfID0gSU5JVElBTF9WQUxVRTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0aW1lb3V0IHRoYXQncyB1c2VkIHRvIGRlYm91bmNlIHRvZ2dsaW5nIHRoZSBpc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gdmFyaWFibGUgYWZ0ZXIgYSByZXNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnJlc2l6ZURlYm91bmNlSWRfID0gSU5JVElBTF9WQUxVRTtcbiAgICAgICAgX3RoaXMubGFzdFNjcm9sbFBvc2l0aW9uXyA9IF90aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuICAgICAgICBfdGhpcy50b3BBcHBCYXJIZWlnaHRfID0gX3RoaXMuYWRhcHRlcl8uZ2V0VG9wQXBwQmFySGVpZ2h0KCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoJ3RvcCcsICcnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbCBoYW5kbGVyIGZvciB0aGUgZGVmYXVsdCBzY3JvbGwgYmVoYXZpb3Igb2YgdGhlIHRvcCBhcHAgYmFyLlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRhcmdldFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IE1hdGgubWF4KHRoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCksIDApO1xuICAgICAgICB2YXIgZGlmZiA9IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiAtIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uXztcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb25fID0gY3VycmVudFNjcm9sbFBvc2l0aW9uO1xuICAgICAgICAvLyBJZiB0aGUgd2luZG93IGlzIGJlaW5nIHJlc2l6ZWQgdGhlIGxhc3RTY3JvbGxQb3NpdGlvbl8gbmVlZHMgdG8gYmUgdXBkYXRlZCBidXQgdGhlXG4gICAgICAgIC8vIGN1cnJlbnQgc2Nyb2xsIG9mIHRoZSB0b3AgYXBwIGJhciBzaG91bGQgc3RheSBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAgICAgICAgaWYgKCF0aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyAtPSBkaWZmO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyh0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfKSA+IHRoaXMudG9wQXBwQmFySGVpZ2h0Xykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAtdGhpcy50b3BBcHBCYXJIZWlnaHRfO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9wQXBwQmFyXygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUb3AgYXBwIGJhciByZXNpemUgaGFuZGxlciB0aGF0IHRocm90dGxlL2RlYm91bmNlIGZ1bmN0aW9ucyB0aGF0IGV4ZWN1dGUgdXBkYXRlcy5cbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVXaW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRocm90dGxlIHJlc2l6ZSBldmVudHMgMTAgcC9zXG4gICAgICAgIGlmICghdGhpcy5yZXNpemVUaHJvdHRsZUlkXykge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVUaHJvdHRsZUlkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2l6ZVRocm90dGxlSWRfID0gSU5JVElBTF9WQUxVRTtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHJvdHRsZWRSZXNpemVIYW5kbGVyXygpO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5ERUJPVU5DRV9USFJPVFRMRV9SRVNJWkVfVElNRV9NUyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5yZXNpemVEZWJvdW5jZUlkXykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplRGVib3VuY2VJZF8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzaXplRGVib3VuY2VJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVRhcmdldFNjcm9sbCgpO1xuICAgICAgICAgICAgX3RoaXMuaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5yZXNpemVEZWJvdW5jZUlkXyA9IElOSVRJQUxfVkFMVUU7XG4gICAgICAgIH0sIG51bWJlcnMuREVCT1VOQ0VfVEhST1RUTEVfUkVTSVpFX1RJTUVfTVMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoZSBET00gbmVlZHMgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRm9yVXBkYXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9mZnNjcmVlbkJvdW5kYXJ5VG9wID0gLXRoaXMudG9wQXBwQmFySGVpZ2h0XztcbiAgICAgICAgdmFyIGhhc0FueVBpeGVsc09mZnNjcmVlbiA9IHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPCAwO1xuICAgICAgICB2YXIgaGFzQW55UGl4ZWxzT25zY3JlZW4gPSB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID4gb2Zmc2NyZWVuQm91bmRhcnlUb3A7XG4gICAgICAgIHZhciBwYXJ0aWFsbHlTaG93aW5nID0gaGFzQW55UGl4ZWxzT2Zmc2NyZWVuICYmIGhhc0FueVBpeGVsc09uc2NyZWVuO1xuICAgICAgICAvLyBJZiBpdCdzIHBhcnRpYWxseSBzaG93aW5nLCBpdCBjYW4ndCBiZSBkb2NrZWQuXG4gICAgICAgIGlmIChwYXJ0aWFsbHlTaG93aW5nKSB7XG4gICAgICAgICAgICB0aGlzLndhc0RvY2tlZF8gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vdCBwcmV2aW91c2x5IGRvY2tlZCBhbmQgbm90IHBhcnRpYWxseSBzaG93aW5nLCBpdCdzIG5vdyBkb2NrZWQuXG4gICAgICAgICAgICBpZiAoIXRoaXMud2FzRG9ja2VkXykge1xuICAgICAgICAgICAgICAgIHRoaXMud2FzRG9ja2VkXyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzRG9ja2VkU2hvd2luZ18gIT09IGhhc0FueVBpeGVsc09uc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RvY2tlZFNob3dpbmdfID0gaGFzQW55UGl4ZWxzT25zY3JlZW47XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnRpYWxseVNob3dpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBtb3ZlIHRoZSB0b3AgYXBwIGJhciBpZiBuZWVkZWQuXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUubW92ZVRvcEFwcEJhcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrRm9yVXBkYXRlXygpKSB7XG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0b3AgYXBwIGJhciBpcyBmdWxseSBoaWRkZW4gd2UgdXNlIHRoZSBtYXggcG90ZW50aWFsIHRvcCBhcHAgYmFyIGhlaWdodCBhcyBvdXIgb2Zmc2V0XG4gICAgICAgICAgICAvLyBzbyB0aGUgdG9wIGFwcCBiYXIgZG9lc24ndCBzaG93IGlmIHRoZSB3aW5kb3cgcmVzaXplcyBhbmQgdGhlIG5ldyBoZWlnaHQgPiB0aGUgb2xkIGhlaWdodC5cbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldCkgPj0gdGhpcy50b3BBcHBCYXJIZWlnaHRfKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gLW51bWJlcnMuTUFYX1RPUF9BUFBfQkFSX0hFSUdIVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoJ3RvcCcsIG9mZnNldCArICdweCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaHJvdHRsZWQgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB0b3AgYXBwIGJhciBzY3JvbGxlZCB2YWx1ZXMgaWYgdGhlXG4gICAgICogdG9wIGFwcCBiYXIgaGVpZ2h0IGNoYW5nZXMuXG4gICAgICovXG4gICAgTURDVG9wQXBwQmFyRm91bmRhdGlvbi5wcm90b3R5cGUudGhyb3R0bGVkUmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gdGhpcy5hZGFwdGVyXy5nZXRUb3BBcHBCYXJIZWlnaHQoKTtcbiAgICAgICAgaWYgKHRoaXMudG9wQXBwQmFySGVpZ2h0XyAhPT0gY3VycmVudEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy53YXNEb2NrZWRfID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgdG9wIGFwcCBiYXIgaGFzIGEgZGlmZmVyZW50IGhlaWdodCBkZXBlbmRpbmcgb24gdGhlIHNjcmVlbiB3aWR0aCwgdGhpc1xuICAgICAgICAgICAgLy8gd2lsbCBlbnN1cmUgdGhhdCB0aGUgdG9wIGFwcCBiYXIgcmVtYWlucyBpbiB0aGUgY29ycmVjdCBsb2NhdGlvbiBpZlxuICAgICAgICAgICAgLy8gY29tcGxldGVseSBoaWRkZW4gYW5kIGEgcmVzaXplIG1ha2VzIHRoZSB0b3AgYXBwIGJhciBhIGRpZmZlcmVudCBoZWlnaHQuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfIC09IHRoaXMudG9wQXBwQmFySGVpZ2h0XyAtIGN1cnJlbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnRvcEFwcEJhckhlaWdodF8gPSBjdXJyZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlVGFyZ2V0U2Nyb2xsKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVG9wQXBwQmFyRm91bmRhdGlvbjtcbn0oTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUb3BBcHBCYXJGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5QYXJhbGxheCA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbW9kdWxlTG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICAgIHVwVGltZSA9IHByb2Nlc3MudXB0aW1lKCkgKiAxZTk7XG4gICAgbm9kZUxvYWRUaW1lID0gbW9kdWxlTG9hZFRpbWUgLSB1cFRpbWU7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcblxufSx7XCJfcHJvY2Vzc1wiOjN9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuXG59LHtcInBlcmZvcm1hbmNlLW5vd1wiOjJ9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4qIFBhcmFsbGF4LmpzXG4qIEBhdXRob3IgTWF0dGhldyBXYWdlcmZpZWxkIC0gQHdhZ2VyZmllbGQsIFJlbsOpIFJvdGggLSBtYWlsQHJlbmVyb3RoLm9yZ1xuKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIHBhcmFsbGF4IGVmZmVjdCBiZXR3ZWVuIGFuIGFycmF5IG9mIGxheWVycyxcbiogICAgICAgICAgICAgIGRyaXZpbmcgdGhlIG1vdGlvbiBmcm9tIHRoZSBneXJvc2NvcGUgb3V0cHV0IG9mIGEgc21hcnRkZXZpY2UuXG4qICAgICAgICAgICAgICBJZiBubyBneXJvc2NvcGUgaXMgYXZhaWxhYmxlLCB0aGUgY3Vyc29yIHBvc2l0aW9uIGlzIHVzZWQuXG4qL1xuXG52YXIgcnFBbkZyID0gcmVxdWlyZSgncmFmJyk7XG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgaGVscGVycyA9IHtcbiAgcHJvcGVydHlDYWNoZToge30sXG4gIHZlbmRvcnM6IFtudWxsLCBbJy13ZWJraXQtJywgJ3dlYmtpdCddLCBbJy1tb3otJywgJ01veiddLCBbJy1vLScsICdPJ10sIFsnLW1zLScsICdtcyddXSxcblxuICBjbGFtcDogZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heCA/IHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSA6IHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZTtcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YShlbGVtZW50LCBuYW1lKSB7XG4gICAgcmV0dXJuIGhlbHBlcnMuZGVzZXJpYWxpemUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpKTtcbiAgfSxcbiAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIGRlc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSxcbiAgY2FtZWxDYXNlOiBmdW5jdGlvbiBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIGZ1bmN0aW9uIChtYXRjaCwgY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgICB9KTtcbiAgfSxcbiAgYWNjZWxlcmF0ZTogZnVuY3Rpb24gYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKTtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtLXN0eWxlJywgJ3ByZXNlcnZlLTNkJyk7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ2JhY2tmYWNlLXZpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gIH0sXG4gIHRyYW5zZm9ybVN1cHBvcnQ6IGZ1bmN0aW9uIHRyYW5zZm9ybVN1cHBvcnQodmFsdWUpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG51bGwsXG4gICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gZmFsc2UsXG4gICAgICAgIGNzc1Byb3BlcnR5ID0gbnVsbCxcbiAgICAgICAganNQcm9wZXJ0eSA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoaGVscGVycy52ZW5kb3JzW2ldICE9PSBudWxsKSB7XG4gICAgICAgIGNzc1Byb3BlcnR5ID0gaGVscGVycy52ZW5kb3JzW2ldWzBdICsgJ3RyYW5zZm9ybSc7XG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgIGpzUHJvcGVydHkgPSAndHJhbnNmb3JtJztcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnM0QnOlxuICAgICAgICBpZiAocHJvcGVydHlTdXBwb3J0KSB7XG4gICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKSxcbiAgICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgICBkb2N1bWVudE92ZXJmbG93ID0gZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93LFxuICAgICAgICAgICAgICBpc0NyZWF0ZWRCb2R5ID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJztcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NQcm9wZXJ0eSk7XG4gICAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcGVydHlWYWx1ZS5sZW5ndGggPiAwICYmIHByb3BlcnR5VmFsdWUgIT09ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93O1xuICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoaXNDcmVhdGVkQm9keSkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnQ7XG4gIH0sXG4gIGNzczogZnVuY3Rpb24gY3NzKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciBqc1Byb3BlcnR5ID0gaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XTtcbiAgICBpZiAoIWpzUHJvcGVydHkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoaGVscGVycy52ZW5kb3JzW2ldICE9PSBudWxsKSB7XG4gICAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMuY2FtZWxDYXNlKGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICctJyArIHByb3BlcnR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGhlbHBlcnMucHJvcGVydHlDYWNoZVtwcm9wZXJ0eV0gPSBqc1Byb3BlcnR5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfVxufTtcblxudmFyIE1BR0lDX05VTUJFUiA9IDMwLFxuICAgIERFRkFVTFRTID0ge1xuICByZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgY2xpcFJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICBpbnB1dEVsZW1lbnQ6IG51bGwsXG4gIGhvdmVyT25seTogZmFsc2UsXG4gIGNhbGlicmF0aW9uVGhyZXNob2xkOiAxMDAsXG4gIGNhbGlicmF0aW9uRGVsYXk6IDUwMCxcbiAgc3VwcG9ydERlbGF5OiA1MDAsXG4gIGNhbGlicmF0ZVg6IGZhbHNlLFxuICBjYWxpYnJhdGVZOiB0cnVlLFxuICBpbnZlcnRYOiB0cnVlLFxuICBpbnZlcnRZOiB0cnVlLFxuICBsaW1pdFg6IGZhbHNlLFxuICBsaW1pdFk6IGZhbHNlLFxuICBzY2FsYXJYOiAxMC4wLFxuICBzY2FsYXJZOiAxMC4wLFxuICBmcmljdGlvblg6IDAuMSxcbiAgZnJpY3Rpb25ZOiAwLjEsXG4gIG9yaWdpblg6IDAuNSxcbiAgb3JpZ2luWTogMC41LFxuICBwb2ludGVyRXZlbnRzOiBmYWxzZSxcbiAgcHJlY2lzaW9uOiAxLFxuICBvblJlYWR5OiBudWxsLFxuICBzZWxlY3RvcjogbnVsbFxufTtcblxudmFyIFBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJhbGxheChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGF4KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNhbGlicmF0ZVg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdjYWxpYnJhdGUteCcpLFxuICAgICAgY2FsaWJyYXRlWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS15JyksXG4gICAgICBpbnZlcnRYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW52ZXJ0LXgnKSxcbiAgICAgIGludmVydFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteScpLFxuICAgICAgbGltaXRYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnbGltaXQteCcpLFxuICAgICAgbGltaXRZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnbGltaXQteScpLFxuICAgICAgc2NhbGFyWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3NjYWxhci14JyksXG4gICAgICBzY2FsYXJZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXknKSxcbiAgICAgIGZyaWN0aW9uWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ZyaWN0aW9uLXgnKSxcbiAgICAgIGZyaWN0aW9uWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ZyaWN0aW9uLXknKSxcbiAgICAgIG9yaWdpblg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdvcmlnaW4teCcpLFxuICAgICAgb3JpZ2luWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi15JyksXG4gICAgICBwb2ludGVyRXZlbnRzOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncG9pbnRlci1ldmVudHMnKSxcbiAgICAgIHByZWNpc2lvbjogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3ByZWNpc2lvbicpLFxuICAgICAgcmVsYXRpdmVJbnB1dDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3JlbGF0aXZlLWlucHV0JyksXG4gICAgICBjbGlwUmVsYXRpdmVJbnB1dDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NsaXAtcmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGhvdmVyT25seTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2hvdmVyLW9ubHknKSxcbiAgICAgIGlucHV0RWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW5wdXQtZWxlbWVudCcpKSxcbiAgICAgIHNlbGVjdG9yOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2VsZWN0b3InKVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdEFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoIXRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsO1xuICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlcHRoc1ggPSBbXTtcbiAgICB0aGlzLmRlcHRoc1kgPSBbXTtcbiAgICB0aGlzLnJhZiA9IG51bGw7XG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gMDtcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSAwO1xuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMDtcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSAwO1xuXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IDA7XG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDA7XG5cbiAgICB0aGlzLmVsZW1lbnRSYW5nZVggPSAwO1xuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IDA7XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDA7XG4gICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwO1xuXG4gICAgdGhpcy5pbnB1dFggPSAwO1xuICAgIHRoaXMuaW5wdXRZID0gMDtcblxuICAgIHRoaXMubW90aW9uWCA9IDA7XG4gICAgdGhpcy5tb3Rpb25ZID0gMDtcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5WSA9IDA7XG5cbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EZXZpY2VNb3Rpb24gPSB0aGlzLm9uRGV2aWNlTW90aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk9yaWVudGF0aW9uVGltZXIgPSB0aGlzLm9uT3JpZW50YXRpb25UaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3Rpb25UaW1lciA9IHRoaXMub25Nb3Rpb25UaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DYWxpYnJhdGlvblRpbWVyID0gdGhpcy5vbkNhbGlicmF0aW9uVGltZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQW5pbWF0aW9uRnJhbWUgPSB0aGlzLm9uQW5pbWF0aW9uRnJhbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSBudWxsO1xuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBudWxsO1xuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IG51bGw7XG4gICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgIHRoaXMuZGVza3RvcCA9ICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfEJsYWNrQmVycnl8QkIxMHxtb2JpfHRhYmxldHxvcGVyYSBtaW5pfG5leHVzIDcpL2kpO1xuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3A7XG4gICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSAhIXdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3A7XG4gICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDA7XG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFyYWxsYXgsIFt7XG4gICAga2V5OiAnaW5pdGlhbGlzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCA9IGhlbHBlcnMudHJhbnNmb3JtU3VwcG9ydCgnMkQnKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzNEJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbmZpZ3VyZSBDb250ZXh0IFN0eWxlc1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuYWNjZWxlcmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgaWYgKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFBvaW50ZXIgZXZlbnRzXG4gICAgICBpZiAoIXRoaXMucG9pbnRlckV2ZW50cykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXBcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJzKCk7XG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24odGhpcy5jYWxpYnJhdGlvbkRlbGF5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkb1JlYWR5Q2FsbGJhY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1JlYWR5Q2FsbGJhY2soKSB7XG4gICAgICBpZiAodGhpcy5vblJlYWR5KSB7XG4gICAgICAgIHRoaXMub25SZWFkeSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZUxheWVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUxheWVycygpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxheWVycyA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdQYXJhbGxheEpTOiBZb3VyIHNjZW5lIGRvZXMgbm90IGhhdmUgYW55IGxheWVycy4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZXB0aHNYID0gW107XG4gICAgICB0aGlzLmRlcHRoc1kgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF07XG5cbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgICAgaGVscGVycy5hY2NlbGVyYXRlKGxheWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJztcbiAgICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBsYXllci5zdHlsZS50b3AgPSAwO1xuXG4gICAgICAgIHZhciBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMDtcbiAgICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKTtcbiAgICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGltZW5zaW9ucygpIHtcbiAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgdGhpcy53aW5kb3dDZW50ZXJYID0gdGhpcy53aW5kb3dXaWR0aCAqIHRoaXMub3JpZ2luWDtcbiAgICAgIHRoaXMud2luZG93Q2VudGVyWSA9IHRoaXMud2luZG93SGVpZ2h0ICogdGhpcy5vcmlnaW5ZO1xuICAgICAgdGhpcy53aW5kb3dSYWRpdXNYID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJYLCB0aGlzLndpbmRvd1dpZHRoIC0gdGhpcy53aW5kb3dDZW50ZXJYKTtcbiAgICAgIHRoaXMud2luZG93UmFkaXVzWSA9IE1hdGgubWF4KHRoaXMud2luZG93Q2VudGVyWSwgdGhpcy53aW5kb3dIZWlnaHQgLSB0aGlzLndpbmRvd0NlbnRlclkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZUJvdW5kcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUJvdW5kcygpIHtcbiAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5pbnB1dEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSB0aGlzLmJvdW5kcy5sZWZ0O1xuICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gdGhpcy5ib3VuZHMudG9wO1xuICAgICAgdGhpcy5lbGVtZW50V2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aDtcbiAgICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodDtcbiAgICAgIHRoaXMuZWxlbWVudENlbnRlclggPSB0aGlzLmVsZW1lbnRXaWR0aCAqIHRoaXMub3JpZ2luWDtcbiAgICAgIHRoaXMuZWxlbWVudENlbnRlclkgPSB0aGlzLmVsZW1lbnRIZWlnaHQgKiB0aGlzLm9yaWdpblk7XG4gICAgICB0aGlzLmVsZW1lbnRSYW5nZVggPSBNYXRoLm1heCh0aGlzLmVsZW1lbnRDZW50ZXJYLCB0aGlzLmVsZW1lbnRXaWR0aCAtIHRoaXMuZWxlbWVudENlbnRlclgpO1xuICAgICAgdGhpcy5lbGVtZW50UmFuZ2VZID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWSwgdGhpcy5lbGVtZW50SGVpZ2h0IC0gdGhpcy5lbGVtZW50Q2VudGVyWSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncXVldWVDYWxpYnJhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHF1ZXVlQ2FsaWJyYXRpb24oZGVsYXkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNhbGlicmF0aW9uVGltZXIpO1xuICAgICAgdGhpcy5jYWxpYnJhdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uQ2FsaWJyYXRpb25UaW1lciwgZGVsYXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbk9yaWVudGF0aW9uVGltZXIsIHRoaXMuc3VwcG9ydERlbGF5KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3Rpb25TdXBwb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb24pO1xuICAgICAgICB0aGlzLmRldGVjdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uTW90aW9uVGltZXIsIHRoaXMuc3VwcG9ydERlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMDtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwO1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgdGhpcy5yYWYgPSBycUFuRnIodGhpcy5vbkFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3Rpb25TdXBwb3J0KSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgcnFBbkZyLmNhbmNlbCh0aGlzLnJhZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FsaWJyYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsaWJyYXRlKHgsIHkpIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRlWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsaWJyYXRlWCA6IHg7XG4gICAgICB0aGlzLmNhbGlicmF0ZVkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ludmVydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGludmVydCh4LCB5KSB7XG4gICAgICB0aGlzLmludmVydFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFggOiB4O1xuICAgICAgdGhpcy5pbnZlcnRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmcmljdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyaWN0aW9uKHgsIHkpIHtcbiAgICAgIHRoaXMuZnJpY3Rpb25YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblggOiB4O1xuICAgICAgdGhpcy5mcmljdGlvblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2NhbGFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2NhbGFyKHgsIHkpIHtcbiAgICAgIHRoaXMuc2NhbGFyWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWCA6IHg7XG4gICAgICB0aGlzLnNjYWxhclkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLnNjYWxhclkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xpbWl0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGltaXQoeCwgeSkge1xuICAgICAgdGhpcy5saW1pdFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmxpbWl0WCA6IHg7XG4gICAgICB0aGlzLmxpbWl0WSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvcmlnaW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcmlnaW4oeCwgeSkge1xuICAgICAgdGhpcy5vcmlnaW5YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcmlnaW5YIDogeDtcbiAgICAgIHRoaXMub3JpZ2luWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0SW5wdXRFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5wdXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9zaXRpb24oZWxlbWVudCwgeCwgeSkge1xuICAgICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnO1xuICAgICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnO1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIHggKyAnLCcgKyB5ICsgJywwKScpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgeCArICcsJyArIHkgKyAnKScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uT3JpZW50YXRpb25UaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uT3JpZW50YXRpb25UaW1lcigpIHtcbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3Rpb25UaW1lcigpIHtcbiAgICAgIGlmICh0aGlzLm1vdGlvblN1cHBvcnQgJiYgdGhpcy5tb3Rpb25TdGF0dXMgPT09IDApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMubW90aW9uU3VwcG9ydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNhbGlicmF0aW9uVGltZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNhbGlicmF0aW9uVGltZXIoKSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25XaW5kb3dSZXNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQW5pbWF0aW9uRnJhbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkFuaW1hdGlvbkZyYW1lKCkge1xuICAgICAgdGhpcy51cGRhdGVCb3VuZHMoKTtcbiAgICAgIHZhciBjYWxpYnJhdGVkSW5wdXRYID0gdGhpcy5pbnB1dFggLSB0aGlzLmNhbGlicmF0aW9uWCxcbiAgICAgICAgICBjYWxpYnJhdGVkSW5wdXRZID0gdGhpcy5pbnB1dFkgLSB0aGlzLmNhbGlicmF0aW9uWTtcbiAgICAgIGlmIChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRYKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQgfHwgTWF0aC5hYnMoY2FsaWJyYXRlZElucHV0WSkgPiB0aGlzLmNhbGlicmF0aW9uVGhyZXNob2xkKSB7XG4gICAgICAgIHRoaXMucXVldWVDYWxpYnJhdGlvbigwKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvcnRyYWl0KSB7XG4gICAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WTtcbiAgICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gdGhpcy5jYWxpYnJhdGVYID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYO1xuICAgICAgICB0aGlzLm1vdGlvblkgPSB0aGlzLmNhbGlicmF0ZVkgPyBjYWxpYnJhdGVkSW5wdXRZIDogdGhpcy5pbnB1dFk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vdGlvblggKj0gdGhpcy5lbGVtZW50V2lkdGggKiAodGhpcy5zY2FsYXJYIC8gMTAwKTtcbiAgICAgIHRoaXMubW90aW9uWSAqPSB0aGlzLmVsZW1lbnRIZWlnaHQgKiAodGhpcy5zY2FsYXJZIC8gMTAwKTtcbiAgICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh0aGlzLmxpbWl0WCkpKSB7XG4gICAgICAgIHRoaXMubW90aW9uWCA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25YLCAtdGhpcy5saW1pdFgsIHRoaXMubGltaXRYKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh0aGlzLmxpbWl0WSkpKSB7XG4gICAgICAgIHRoaXMubW90aW9uWSA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25ZLCAtdGhpcy5saW1pdFksIHRoaXMubGltaXRZKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmVsb2NpdHlYICs9ICh0aGlzLm1vdGlvblggLSB0aGlzLnZlbG9jaXR5WCkgKiB0aGlzLmZyaWN0aW9uWDtcbiAgICAgIHRoaXMudmVsb2NpdHlZICs9ICh0aGlzLm1vdGlvblkgLSB0aGlzLnZlbG9jaXR5WSkgKiB0aGlzLmZyaWN0aW9uWTtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdLFxuICAgICAgICAgICAgZGVwdGhYID0gdGhpcy5kZXB0aHNYW2luZGV4XSxcbiAgICAgICAgICAgIGRlcHRoWSA9IHRoaXMuZGVwdGhzWVtpbmRleF0sXG4gICAgICAgICAgICB4T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVggKiAoZGVwdGhYICogKHRoaXMuaW52ZXJ0WCA/IC0xIDogMSkpLFxuICAgICAgICAgICAgeU9mZnNldCA9IHRoaXMudmVsb2NpdHlZICogKGRlcHRoWSAqICh0aGlzLmludmVydFkgPyAtMSA6IDEpKTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihsYXllciwgeE9mZnNldCwgeU9mZnNldCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JvdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdGF0ZShiZXRhLCBnYW1tYSkge1xuICAgICAgLy8gRXh0cmFjdCBSb3RhdGlvblxuICAgICAgdmFyIHggPSAoYmV0YSB8fCAwKSAvIE1BR0lDX05VTUJFUixcbiAgICAgICAgICAvLyAgLTkwIDo6IDkwXG4gICAgICB5ID0gKGdhbW1hIHx8IDApIC8gTUFHSUNfTlVNQkVSOyAvLyAtMTgwIDo6IDE4MFxuXG4gICAgICAvLyBEZXRlY3QgT3JpZW50YXRpb24gQ2hhbmdlXG4gICAgICB2YXIgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGg7XG4gICAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IHBvcnRyYWl0O1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhbGlicmF0aW9uRmxhZykge1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHg7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnB1dFggPSB4O1xuICAgICAgdGhpcy5pbnB1dFkgPSB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRGV2aWNlT3JpZW50YXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRldmljZU9yaWVudGF0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmV0YSA9IGV2ZW50LmJldGE7XG4gICAgICB2YXIgZ2FtbWEgPSBldmVudC5nYW1tYTtcbiAgICAgIGlmIChiZXRhICE9PSBudWxsICYmIGdhbW1hICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxO1xuICAgICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EZXZpY2VNb3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgICAgdmFyIGJldGEgPSBldmVudC5yb3RhdGlvblJhdGUuYmV0YTtcbiAgICAgIHZhciBnYW1tYSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5nYW1tYTtcbiAgICAgIGlmIChiZXRhICE9PSBudWxsICYmIGdhbW1hICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMubW90aW9uU3RhdHVzID0gMTtcbiAgICAgICAgdGhpcy5yb3RhdGUoYmV0YSwgZ2FtbWEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW91c2VNb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIHZhciBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZID0gZXZlbnQuY2xpZW50WTtcblxuICAgICAgLy8gcmVzZXQgaW5wdXQgdG8gY2VudGVyIGlmIGhvdmVyT25seSBpcyBzZXQgYW5kIHdlJ3JlIG5vdCBob3ZlcmluZyB0aGUgZWxlbWVudFxuICAgICAgaWYgKHRoaXMuaG92ZXJPbmx5ICYmIChjbGllbnRYIDwgdGhpcy5lbGVtZW50UG9zaXRpb25YIHx8IGNsaWVudFggPiB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCB8fCBjbGllbnRZIDwgdGhpcy5lbGVtZW50UG9zaXRpb25ZIHx8IGNsaWVudFkgPiB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gMDtcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAwO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnJlbGF0aXZlSW5wdXQpIHtcbiAgICAgICAgLy8gQ2xpcCBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgZWxlbWVudCBib3VuZHMuXG4gICAgICAgIGlmICh0aGlzLmNsaXBSZWxhdGl2ZUlucHV0KSB7XG4gICAgICAgICAgY2xpZW50WCA9IE1hdGgubWF4KGNsaWVudFgsIHRoaXMuZWxlbWVudFBvc2l0aW9uWCk7XG4gICAgICAgICAgY2xpZW50WCA9IE1hdGgubWluKGNsaWVudFgsIHRoaXMuZWxlbWVudFBvc2l0aW9uWCArIHRoaXMuZWxlbWVudFdpZHRoKTtcbiAgICAgICAgICBjbGllbnRZID0gTWF0aC5tYXgoY2xpZW50WSwgdGhpcy5lbGVtZW50UG9zaXRpb25ZKTtcbiAgICAgICAgICBjbGllbnRZID0gTWF0aC5taW4oY2xpZW50WSwgdGhpcy5lbGVtZW50UG9zaXRpb25ZICsgdGhpcy5lbGVtZW50SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRSYW5nZVggJiYgdGhpcy5lbGVtZW50UmFuZ2VZKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFggPSAoY2xpZW50WCAtIHRoaXMuZWxlbWVudFBvc2l0aW9uWCAtIHRoaXMuZWxlbWVudENlbnRlclgpIC8gdGhpcy5lbGVtZW50UmFuZ2VYO1xuICAgICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvblkgLSB0aGlzLmVsZW1lbnRDZW50ZXJZKSAvIHRoaXMuZWxlbWVudFJhbmdlWTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSB3aW5kb3cuXG4gICAgICAgIGlmICh0aGlzLndpbmRvd1JhZGl1c1ggJiYgdGhpcy53aW5kb3dSYWRpdXNZKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFggPSAoY2xpZW50WCAtIHRoaXMud2luZG93Q2VudGVyWCkgLyB0aGlzLndpbmRvd1JhZGl1c1g7XG4gICAgICAgICAgdGhpcy5pbnB1dFkgPSAoY2xpZW50WSAtIHRoaXMud2luZG93Q2VudGVyWSkgLyB0aGlzLndpbmRvd1JhZGl1c1k7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jYWxpYnJhdGlvblRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRldGVjdGlvblRpbWVyKTtcblxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy5sYXllcnNbaW5kZXhdLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudDtcbiAgICAgIGRlbGV0ZSB0aGlzLmxheWVycztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2ZXJzaW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmVyc2lvbigpIHtcbiAgICAgIHJldHVybiAnMy4xLjAnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYXJhbGxheDtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheDtcblxufSx7XCJvYmplY3QtYXNzaWduXCI6MSxcInJhZlwiOjR9XX0se30sWzVdKSg1KVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKdWIyUmxYMjF2WkhWc1pYTXZiMkpxWldOMExXRnpjMmxuYmk5cGJtUmxlQzVxY3lJc0ltNXZaR1ZmYlc5a2RXeGxjeTl3WlhKbWIzSnRZVzVqWlMxdWIzY3ZiR2xpTDNCbGNtWnZjbTFoYm1ObExXNXZkeTVxY3lJc0ltNXZaR1ZmYlc5a2RXeGxjeTl3Y205alpYTnpMMkp5YjNkelpYSXVhbk1pTENKdWIyUmxYMjF2WkhWc1pYTXZjbUZtTDJsdVpHVjRMbXB6SWl3aWMzSmpMM0JoY21Gc2JHRjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkRRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlF6RkdRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3p0QlEzQkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVTjRURUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3UVVONFJVRTdPenM3T3pzN08wRkJVVUVzU1VGQlRTeFRRVUZUTEZGQlFWRXNTMEZCVWl4RFFVRm1PMEZCUTBFc1NVRkJUU3hsUVVGbExGRkJRVkVzWlVGQlVpeERRVUZ5UWpzN1FVRkZRU3hKUVVGTkxGVkJRVlU3UVVGRFpDeHBRa0ZCWlN4RlFVUkVPMEZCUldRc1YwRkJVeXhEUVVGRExFbEJRVVFzUlVGQlR5eERRVUZETEZWQlFVUXNSVUZCV1N4UlFVRmFMRU5CUVZBc1JVRkJPRUlzUTBGQlF5eFBRVUZFTEVWQlFWTXNTMEZCVkN4RFFVRTVRaXhGUVVFclF5eERRVUZETEV0QlFVUXNSVUZCVHl4SFFVRlFMRU5CUVM5RExFVkJRVFJFTEVOQlFVTXNUVUZCUkN4RlFVRlJMRWxCUVZJc1EwRkJOVVFzUTBGR1N6czdRVUZKWkN4UFFVcGpMR2xDUVVsU0xFdEJTbEVzUlVGSlJDeEhRVXBETEVWQlNVa3NSMEZLU2l4RlFVbFRPMEZCUTNKQ0xGZEJRVThzVFVGQlRTeEhRVUZPTEVkQlEwWXNVVUZCVVN4SFFVRlNMRWRCUVdNc1IwRkJaQ3hIUVVGdlFpeFJRVUZSTEVkQlFWSXNSMEZCWXl4SFFVRmtMRWRCUVc5Q0xFdEJSSFJETEVkQlJVWXNVVUZCVVN4SFFVRlNMRWRCUVdNc1IwRkJaQ3hIUVVGdlFpeFJRVUZSTEVkQlFWSXNSMEZCWXl4SFFVRmtMRWRCUVc5Q0xFdEJSamRETzBGQlIwUXNSMEZTWVR0QlFWVmtMRTFCVm1Nc1owSkJWVlFzVDBGV1V5eEZRVlZCTEVsQlZrRXNSVUZWVFR0QlFVTnNRaXhYUVVGUExGRkJRVkVzVjBGQlVpeERRVUZ2UWl4UlFVRlJMRmxCUVZJc1EwRkJjVUlzVlVGQlVTeEpRVUUzUWl4RFFVRndRaXhEUVVGUU8wRkJRMFFzUjBGYVlUdEJRV05rTEdGQlpHTXNkVUpCWTBZc1MwRmtSU3hGUVdOTE8wRkJRMnBDTEZGQlFVa3NWVUZCVlN4TlFVRmtMRVZCUVhOQ08wRkJRM0JDTEdGQlFVOHNTVUZCVUR0QlFVTkVMRXRCUmtRc1RVRkZUeXhKUVVGSkxGVkJRVlVzVDBGQlpDeEZRVUYxUWp0QlFVTTFRaXhoUVVGUExFdEJRVkE3UVVGRFJDeExRVVpOTEUxQlJVRXNTVUZCU1N4VlFVRlZMRTFCUVdRc1JVRkJjMEk3UVVGRE0wSXNZVUZCVHl4SlFVRlFPMEZCUTBRc1MwRkdUU3hOUVVWQkxFbEJRVWtzUTBGQlF5eE5RVUZOTEZkQlFWY3NTMEZCV0N4RFFVRk9MRU5CUVVRc1NVRkJOa0lzVTBGQlV5eExRVUZVTEVOQlFXcERMRVZCUVd0RU8wRkJRM1pFTEdGQlFVOHNWMEZCVnl4TFFVRllMRU5CUVZBN1FVRkRSQ3hMUVVaTkxFMUJSVUU3UVVGRFRDeGhRVUZQTEV0QlFWQTdRVUZEUkR0QlFVTkdMRWRCTVVKaE8wRkJORUprTEZkQk5VSmpMSEZDUVRSQ1NpeExRVFZDU1N4RlFUUkNSenRCUVVObUxGZEJRVThzVFVGQlRTeFBRVUZPTEVOQlFXTXNVMEZCWkN4RlFVRjVRaXhWUVVGRExFdEJRVVFzUlVGQlVTeFRRVUZTTEVWQlFYTkNPMEZCUTNCRUxHRkJRVThzV1VGQldTeFZRVUZWTEZkQlFWWXNSVUZCV2l4SFFVRnpReXhGUVVFM1F6dEJRVU5FTEV0QlJrMHNRMEZCVUR0QlFVZEVMRWRCYUVOaE8wRkJhME5rTEZsQmJFTmpMSE5DUVd0RFNDeFBRV3hEUnl4RlFXdERUVHRCUVVOc1FpeFpRVUZSTEVkQlFWSXNRMEZCV1N4UFFVRmFMRVZCUVhGQ0xGZEJRWEpDTEVWQlFXdERMSE5EUVVGc1F6dEJRVU5CTEZsQlFWRXNSMEZCVWl4RFFVRlpMRTlCUVZvc1JVRkJjVUlzYVVKQlFYSkNMRVZCUVhkRExHRkJRWGhETzBGQlEwRXNXVUZCVVN4SFFVRlNMRU5CUVZrc1QwRkJXaXhGUVVGeFFpeHhRa0ZCY2tJc1JVRkJORU1zVVVGQk5VTTdRVUZEUkN4SFFYUkRZVHRCUVhkRFpDeHJRa0Y0UTJNc05FSkJkME5ITEV0QmVFTklMRVZCZDBOVk8wRkJRM1JDTEZGQlFVa3NWVUZCVlN4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzUzBGQmRrSXNRMEZCWkR0QlFVRkJMRkZCUTBrc2EwSkJRV3RDTEV0QlJIUkNPMEZCUVVFc1VVRkZTU3huUWtGQlowSXNTVUZHY0VJN1FVRkJRU3hSUVVkSkxHbENRVUZwUWl4TFFVaHlRanRCUVVGQkxGRkJTVWtzWTBGQll5eEpRVXBzUWp0QlFVRkJMRkZCUzBrc1lVRkJZU3hKUVV4cVFqdEJRVTFCTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVZJc1JVRkJWeXhKUVVGSkxGRkJRVkVzVDBGQlVpeERRVUZuUWl4TlFVRndReXhGUVVFMFF5eEpRVUZKTEVOQlFXaEVMRVZCUVcxRUxFZEJRVzVFTEVWQlFYZEVPMEZCUTNSRUxGVkJRVWtzVVVGQlVTeFBRVUZTTEVOQlFXZENMRU5CUVdoQ0xFMUJRWFZDTEVsQlFUTkNMRVZCUVdsRE8wRkJReTlDTEhOQ1FVRmpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeERRVUZvUWl4RlFVRnRRaXhEUVVGdVFpeEpRVUYzUWl4WFFVRjBRenRCUVVOQkxIRkNRVUZoTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhEUVVGb1FpeEZRVUZ0UWl4RFFVRnVRaXhKUVVGM1FpeFhRVUZ5UXp0QlFVTkVMRTlCU0VRc1RVRkhUenRCUVVOTUxITkNRVUZqTEZkQlFXUTdRVUZEUVN4eFFrRkJZU3hYUVVGaU8wRkJRMFE3UVVGRFJDeFZRVUZKTEZGQlFWRXNTMEZCVWl4RFFVRmpMRlZCUVdRc1RVRkJPRUlzVTBGQmJFTXNSVUZCTmtNN1FVRkRNME1zTUVKQlFXdENMRWxCUVd4Q08wRkJRMEU3UVVGRFJEdEJRVU5HTzBGQlEwUXNXVUZCVHl4TFFVRlFPMEZCUTBVc1YwRkJTeXhKUVVGTU8wRkJRMFVzZVVKQlFXbENMR1ZCUVdwQ08wRkJRMEU3UVVGRFJpeFhRVUZMTEVsQlFVdzdRVUZEUlN4WlFVRkpMR1ZCUVVvc1JVRkJjVUk3UVVGRGJrSXNZMEZCU1N4UFFVRlBMRk5CUVZNc1NVRkJWQ3hKUVVGcFFpeFRRVUZUTEdGQlFWUXNRMEZCZFVJc1RVRkJka0lzUTBGQk5VSTdRVUZCUVN4alFVTkpMR3RDUVVGclFpeFRRVUZUTEdWQlJDOUNPMEZCUVVFc1kwRkZTU3h0UWtGQmJVSXNaMEpCUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRkZCUmpkRE8wRkJRVUVzWTBGSFNTeG5Ra0ZCWjBJc1MwRkljRUk3TzBGQlMwRXNZMEZCU1N4RFFVRkRMRk5CUVZNc1NVRkJaQ3hGUVVGdlFqdEJRVU5zUWl3MFFrRkJaMElzU1VGQmFFSTdRVUZEUVN3MFFrRkJaMElzUzBGQmFFSXNRMEZCYzBJc1VVRkJkRUlzUjBGQmFVTXNVVUZCYWtNN1FVRkRRU3cwUWtGQlowSXNWMEZCYUVJc1EwRkJORUlzU1VGQk5VSTdRVUZEUVN4cFFrRkJTeXhMUVVGTUxFTkJRVmNzVVVGQldDeEhRVUZ6UWl4UlFVRjBRanRCUVVOQkxHbENRVUZMTEV0QlFVd3NRMEZCVnl4VlFVRllMRWRCUVhkQ0xFVkJRWGhDTzBGQlEwUTdPMEZCUlVRc1pVRkJTeXhYUVVGTUxFTkJRV2xDTEU5QlFXcENPMEZCUTBFc2EwSkJRVkVzUzBGQlVpeERRVUZqTEZWQlFXUXNTVUZCTkVJc01FSkJRVFZDTzBGQlEwRXNNRUpCUVdkQ0xFOUJRVThzWjBKQlFWQXNRMEZCZDBJc1QwRkJlRUlzUlVGQmFVTXNaMEpCUVdwRExFTkJRV3RFTEZkQlFXeEVMRU5CUVdoQ08wRkJRMEVzTWtKQlFXbENMR3RDUVVGclFpeFRRVUZzUWl4SlFVRXJRaXhqUVVGakxFMUJRV1FzUjBGQmRVSXNRMEZCZEVRc1NVRkJNa1FzYTBKQlFXdENMRTFCUVRsR08wRkJRMEVzTUVKQlFXZENMRXRCUVdoQ0xFTkJRWE5DTEZGQlFYUkNMRWRCUVdsRExHZENRVUZxUXp0QlFVTkJMR1ZCUVVzc1YwRkJUQ3hEUVVGcFFpeFBRVUZxUWpzN1FVRkZRU3hqUVVGTExHRkJRVXdzUlVGQmNVSTdRVUZEYmtJc2FVSkJRVXNzWlVGQlRDeERRVUZ4UWl4UFFVRnlRanRCUVVOQkxHbENRVUZMTEZWQlFVd3NRMEZCWjBJc1YwRkJhRUlzUTBGQk5FSXNTVUZCTlVJN1FVRkRSRHRCUVVOR08wRkJRMFE3UVVFdlFrbzdRVUZwUTBFc1YwRkJUeXhqUVVGUU8wRkJRMFFzUjBFNVJtRTdRVUZuUjJRc1MwRm9SMk1zWlVGblIxWXNUMEZvUjFVc1JVRm5SMFFzVVVGb1IwTXNSVUZuUjFNc1MwRm9SMVFzUlVGblIyZENPMEZCUXpWQ0xGRkJRVWtzWVVGQllTeFJRVUZSTEdGQlFWSXNRMEZCYzBJc1VVRkJkRUlzUTBGQmFrSTdRVUZEUVN4UlFVRkpMRU5CUVVNc1ZVRkJUQ3hGUVVGcFFqdEJRVU5tTEZkQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVZJc1JVRkJWeXhKUVVGSkxGRkJRVkVzVDBGQlVpeERRVUZuUWl4TlFVRndReXhGUVVFMFF5eEpRVUZKTEVOQlFXaEVMRVZCUVcxRUxFZEJRVzVFTEVWQlFYZEVPMEZCUTNSRUxGbEJRVWtzVVVGQlVTeFBRVUZTTEVOQlFXZENMRU5CUVdoQ0xFMUJRWFZDTEVsQlFUTkNMRVZCUVdsRE8wRkJReTlDTEhWQ1FVRmhMRkZCUVZFc1UwRkJVaXhEUVVGclFpeFJRVUZSTEU5QlFWSXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSXNRMEZCYmtJc1NVRkJkMElzUjBGQmVFSXNSMEZCT0VJc1VVRkJhRVFzUTBGQllqdEJRVU5FTEZOQlJrUXNUVUZGVHp0QlFVTk1MSFZDUVVGaExGRkJRV0k3UVVGRFJEdEJRVU5FTEZsQlFVa3NVVUZCVVN4TFFVRlNMRU5CUVdNc1ZVRkJaQ3hOUVVFNFFpeFRRVUZzUXl4RlFVRTJRenRCUVVNelF5eHJRa0ZCVVN4aFFVRlNMRU5CUVhOQ0xGRkJRWFJDTEVsQlFXdERMRlZCUVd4RE8wRkJRMEU3UVVGRFJEdEJRVU5HTzBGQlEwWTdRVUZEUkN4WlFVRlJMRXRCUVZJc1EwRkJZeXhWUVVGa0xFbEJRVFJDTEV0QlFUVkNPMEZCUTBRN1FVRm9TR0VzUTBGQmFFSTdPMEZCYjBoQkxFbEJRVTBzWlVGQlpTeEZRVUZ5UWp0QlFVRkJMRWxCUTAwc1YwRkJWenRCUVVOVUxHbENRVUZsTEV0QlJFNDdRVUZGVkN4eFFrRkJiVUlzUzBGR1ZqdEJRVWRVTEdkQ1FVRmpMRWxCU0V3N1FVRkpWQ3hoUVVGWExFdEJTa1k3UVVGTFZDeDNRa0ZCYzBJc1IwRk1ZanRCUVUxVUxHOUNRVUZyUWl4SFFVNVVPMEZCVDFRc1owSkJRV01zUjBGUVREdEJRVkZVTEdOQlFWa3NTMEZTU0R0QlFWTlVMR05CUVZrc1NVRlVTRHRCUVZWVUxGZEJRVk1zU1VGV1FUdEJRVmRVTEZkQlFWTXNTVUZZUVR0QlFWbFVMRlZCUVZFc1MwRmFRenRCUVdGVUxGVkJRVkVzUzBGaVF6dEJRV05VTEZkQlFWTXNTVUZrUVR0QlFXVlVMRmRCUVZNc1NVRm1RVHRCUVdkQ1ZDeGhRVUZYTEVkQmFFSkdPMEZCYVVKVUxHRkJRVmNzUjBGcVFrWTdRVUZyUWxRc1YwRkJVeXhIUVd4Q1FUdEJRVzFDVkN4WFFVRlRMRWRCYmtKQk8wRkJiMEpVTEdsQ1FVRmxMRXRCY0VKT08wRkJjVUpVTEdGQlFWY3NRMEZ5UWtZN1FVRnpRbFFzVjBGQlV5eEpRWFJDUVR0QlFYVkNWQ3haUVVGVk8wRkJka0pFTEVOQlJHcENPenRKUVRKQ1RTeFJPMEZCUTBvc2IwSkJRVmtzVDBGQldpeEZRVUZ4UWl4UFFVRnlRaXhGUVVFNFFqdEJRVUZCT3p0QlFVVTFRaXhUUVVGTExFOUJRVXdzUjBGQlpTeFBRVUZtT3p0QlFVVkJMRkZCUVUwc1QwRkJUenRCUVVOWUxHdENRVUZaTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNZVUZCTTBJc1EwRkVSRHRCUVVWWUxHdENRVUZaTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNZVUZCTTBJc1EwRkdSRHRCUVVkWUxHVkJRVk1zVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFZRVUV6UWl4RFFVaEZPMEZCU1Znc1pVRkJVeXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xGVkJRVE5DTEVOQlNrVTdRVUZMV0N4alFVRlJMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1UwRkJNMElzUTBGTVJ6dEJRVTFZTEdOQlFWRXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4VFFVRXpRaXhEUVU1SE8wRkJUMWdzWlVGQlV5eFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNMRU5CVUVVN1FVRlJXQ3hsUVVGVExGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzVlVGQk0wSXNRMEZTUlR0QlFWTllMR2xDUVVGWExGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzV1VGQk0wSXNRMEZVUVR0QlFWVllMR2xDUVVGWExGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzV1VGQk0wSXNRMEZXUVR0QlFWZFlMR1ZCUVZNc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhWUVVFelFpeERRVmhGTzBGQldWZ3NaVUZCVXl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMRlZCUVROQ0xFTkJXa1U3UVVGaFdDeHhRa0ZCWlN4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMR2RDUVVFelFpeERRV0pLTzBGQlkxZ3NhVUpCUVZjc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhYUVVFelFpeERRV1JCTzBGQlpWZ3NjVUpCUVdVc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhuUWtGQk0wSXNRMEZtU2p0QlFXZENXQ3g1UWtGQmJVSXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4eFFrRkJNMElzUTBGb1FsSTdRVUZwUWxnc2FVSkJRVmNzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFpRVUV6UWl4RFFXcENRVHRCUVd0Q1dDeHZRa0ZCWXl4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeGxRVUV6UWl4RFFVRjJRaXhEUVd4Q1NEdEJRVzFDV0N4blFrRkJWU3hSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xGVkJRVE5DTzBGQmJrSkRMRXRCUVdJN08wRkJjMEpCTEZOQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFbEJRV2hDTEVWQlFYTkNPMEZCUTNCQ0xGVkJRVWtzUzBGQlN5eEhRVUZNTEUxQlFXTXNTVUZCYkVJc1JVRkJkMEk3UVVGRGRFSXNaVUZCVHl4TFFVRkxMRWRCUVV3c1EwRkJVRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNhVUpCUVdFc1NVRkJZaXhGUVVGdFFpeFJRVUZ1UWl4RlFVRTJRaXhKUVVFM1FpeEZRVUZ0UXl4UFFVRnVRenM3UVVGRlFTeFJRVUZITEVOQlFVTXNTMEZCU3l4WlFVRlVMRVZCUVhWQ08wRkJRM0pDTEZkQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExFOUJRWHBDTzBGQlEwUTdPMEZCUlVRc1UwRkJTeXhuUWtGQlRDeEhRVUYzUWl4SlFVRjRRanRCUVVOQkxGTkJRVXNzWlVGQlRDeEhRVUYxUWl4SlFVRjJRanRCUVVOQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFXWTdRVUZEUVN4VFFVRkxMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVTBGQlN5eFBRVUZNTEVkQlFXVXNSVUZCWmp0QlFVTkJMRk5CUVVzc1IwRkJUQ3hIUVVGWExFbEJRVmc3TzBGQlJVRXNVMEZCU3l4TlFVRk1MRWRCUVdNc1NVRkJaRHRCUVVOQkxGTkJRVXNzWjBKQlFVd3NSMEZCZDBJc1EwRkJlRUk3UVVGRFFTeFRRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFTkJRWGhDTzBGQlEwRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFTkJRWEJDTzBGQlEwRXNVMEZCU3l4aFFVRk1MRWRCUVhGQ0xFTkJRWEpDT3p0QlFVVkJMRk5CUVVzc1kwRkJUQ3hIUVVGelFpeERRVUYwUWp0QlFVTkJMRk5CUVVzc1kwRkJUQ3hIUVVGelFpeERRVUYwUWpzN1FVRkZRU3hUUVVGTExHRkJRVXdzUjBGQmNVSXNRMEZCY2tJN1FVRkRRU3hUUVVGTExHRkJRVXdzUjBGQmNVSXNRMEZCY2tJN08wRkJSVUVzVTBGQlN5eFpRVUZNTEVkQlFXOUNMRU5CUVhCQ08wRkJRMEVzVTBGQlN5eFpRVUZNTEVkQlFXOUNMRU5CUVhCQ096dEJRVVZCTEZOQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRU3hUUVVGTExFMUJRVXdzUjBGQll5eERRVUZrT3p0QlFVVkJMRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFRRVUZMTEU5QlFVd3NSMEZCWlN4RFFVRm1PenRCUVVWQkxGTkJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnFRanRCUVVOQkxGTkJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnFRanM3UVVGRlFTeFRRVUZMTEZkQlFVd3NSMEZCYlVJc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEVsQlFXcENMRU5CUVhOQ0xFbEJRWFJDTEVOQlFXNUNPMEZCUTBFc1UwRkJTeXh0UWtGQlRDeEhRVUV5UWl4TFFVRkxMRzFDUVVGTUxFTkJRWGxDTEVsQlFYcENMRU5CUVRoQ0xFbEJRVGxDTEVOQlFUTkNPMEZCUTBFc1UwRkJTeXhqUVVGTUxFZEJRWE5DTEV0QlFVc3NZMEZCVEN4RFFVRnZRaXhKUVVGd1FpeERRVUY1UWl4SlFVRjZRaXhEUVVGMFFqdEJRVU5CTEZOQlFVc3NhMEpCUVV3c1IwRkJNRUlzUzBGQlN5eHJRa0ZCVEN4RFFVRjNRaXhKUVVGNFFpeERRVUUyUWl4SlFVRTNRaXhEUVVFeFFqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExHRkJRVXdzUTBGQmJVSXNTVUZCYmtJc1EwRkJkMElzU1VGQmVFSXNRMEZCY2tJN1FVRkRRU3hUUVVGTExHdENRVUZNTEVkQlFUQkNMRXRCUVVzc2EwSkJRVXdzUTBGQmQwSXNTVUZCZUVJc1EwRkJOa0lzU1VGQk4wSXNRMEZCTVVJN1FVRkRRU3hUUVVGTExHZENRVUZNTEVkQlFYZENMRXRCUVVzc1owSkJRVXdzUTBGQmMwSXNTVUZCZEVJc1EwRkJNa0lzU1VGQk0wSXNRMEZCZUVJN1FVRkRRU3hUUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4alFVRk1MRU5CUVc5Q0xFbEJRWEJDTEVOQlFYbENMRWxCUVhwQ0xFTkJRWFJDT3p0QlFVVkJMRk5CUVVzc1YwRkJUQ3hIUVVGdFFpeEpRVUZ1UWp0QlFVTkJMRk5CUVVzc1dVRkJUQ3hIUVVGdlFpeEpRVUZ3UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZ5UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZ5UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZ5UWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEpRVUZ5UWp0QlFVTkJMRk5CUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWp0QlFVTkJMRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRVU1zVlVGQlZTeFRRVUZXTEVOQlFXOUNMRXRCUVhCQ0xFTkJRVEJDTERSRlFVRXhRaXhEUVVGb1FqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhEUVVGRExFTkJRVU1zVDBGQlR5eHBRa0ZCVkN4SlFVRTRRaXhEUVVGRExFdEJRVXNzVDBGQmVrUTdRVUZEUVN4VFFVRkxMR3RDUVVGTUxFZEJRVEJDTEVOQlFVTXNRMEZCUXl4UFFVRlBMSE5DUVVGVUxFbEJRVzFETEVOQlFVTXNTMEZCU3l4UFFVRnVSVHRCUVVOQkxGTkJRVXNzYVVKQlFVd3NSMEZCZVVJc1EwRkJla0k3UVVGRFFTeFRRVUZMTEZsQlFVd3NSMEZCYjBJc1EwRkJjRUk3TzBGQlJVRXNVMEZCU3l4VlFVRk1PMEZCUTBRN096czdhVU5CUlZrN1FVRkRXQ3hWUVVGSkxFdEJRVXNzYTBKQlFVd3NTMEZCTkVJc1UwRkJhRU1zUlVGQk1rTTdRVUZEZWtNc1lVRkJTeXhyUWtGQlRDeEhRVUV3UWl4UlFVRlJMR2RDUVVGU0xFTkJRWGxDTEVsQlFYcENMRU5CUVRGQ08wRkJRMEVzWVVGQlN5eHJRa0ZCVEN4SFFVRXdRaXhSUVVGUkxHZENRVUZTTEVOQlFYbENMRWxCUVhwQ0xFTkJRVEZDTzBGQlEwUTdPMEZCUlVRN1FVRkRRU3hWUVVGSkxFdEJRVXNzYTBKQlFWUXNSVUZCTmtJN1FVRkRNMElzWjBKQlFWRXNWVUZCVWl4RFFVRnRRaXhMUVVGTExFOUJRWGhDTzBGQlEwUTdPMEZCUlVRc1ZVRkJTU3hSUVVGUkxFOUJRVThzWjBKQlFWQXNRMEZCZDBJc1MwRkJTeXhQUVVFM1FpeERRVUZhTzBGQlEwRXNWVUZCU1N4TlFVRk5MR2RDUVVGT0xFTkJRWFZDTEZWQlFYWkNMRTFCUVhWRExGRkJRVE5ETEVWQlFYRkVPMEZCUTI1RUxHRkJRVXNzVDBGQlRDeERRVUZoTEV0QlFXSXNRMEZCYlVJc1VVRkJia0lzUjBGQk9FSXNWVUZCT1VJN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZWQlFVY3NRMEZCUXl4TFFVRkxMR0ZCUVZRc1JVRkJkMEk3UVVGRGRFSXNZVUZCU3l4UFFVRk1MRU5CUVdFc1MwRkJZaXhEUVVGdFFpeGhRVUZ1UWl4SFFVRnRReXhOUVVGdVF6dEJRVU5FT3p0QlFVVkVPMEZCUTBFc1YwRkJTeXhaUVVGTU8wRkJRMEVzVjBGQlN5eG5Ra0ZCVER0QlFVTkJMRmRCUVVzc1RVRkJURHRCUVVOQkxGZEJRVXNzWjBKQlFVd3NRMEZCYzBJc1MwRkJTeXhuUWtGQk0wSTdRVUZEUkRzN08zTkRRVVZwUWp0QlFVTm9RaXhWUVVGSExFdEJRVXNzVDBGQlVpeEZRVUZwUWp0QlFVTm1MR0ZCUVVzc1QwRkJURHRCUVVORU8wRkJRMFk3T3p0dFEwRkZZenRCUVVOaUxGVkJRVWNzUzBGQlN5eFJRVUZTTEVWQlFXdENPMEZCUTJoQ0xHRkJRVXNzVFVGQlRDeEhRVUZqTEV0QlFVc3NUMEZCVEN4RFFVRmhMR2RDUVVGaUxFTkJRVGhDTEV0QlFVc3NVVUZCYmtNc1EwRkJaRHRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NTEdGQlFVc3NUVUZCVEN4SFFVRmpMRXRCUVVzc1QwRkJUQ3hEUVVGaExGRkJRVE5DTzBGQlEwUTdPMEZCUlVRc1ZVRkJSeXhEUVVGRExFdEJRVXNzVFVGQlRDeERRVUZaTEUxQlFXaENMRVZCUVhkQ08wRkJRM1JDTEdkQ1FVRlJMRWxCUVZJc1EwRkJZU3hyUkVGQllqdEJRVU5FT3p0QlFVVkVMRmRCUVVzc1QwRkJUQ3hIUVVGbExFVkJRV1k3UVVGRFFTeFhRVUZMTEU5QlFVd3NSMEZCWlN4RlFVRm1PenRCUVVWQkxGZEJRVXNzU1VGQlNTeFJRVUZSTEVOQlFXcENMRVZCUVc5Q0xGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NUVUZCZUVNc1JVRkJaMFFzVDBGQmFFUXNSVUZCZVVRN1FVRkRka1FzV1VGQlNTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRXRCUVZvc1EwRkJXanM3UVVGRlFTeFpRVUZKTEV0QlFVc3NhMEpCUVZRc1JVRkJOa0k3UVVGRE0wSXNhMEpCUVZFc1ZVRkJVaXhEUVVGdFFpeExRVUZ1UWp0QlFVTkVPenRCUVVWRUxHTkJRVTBzUzBGQlRpeERRVUZaTEZGQlFWb3NSMEZCZFVJc1VVRkJVU3hWUVVGU0xFZEJRWEZDTEZWQlFUVkRPMEZCUTBFc1kwRkJUU3hMUVVGT0xFTkJRVmtzVDBGQldpeEhRVUZ6UWl4UFFVRjBRanRCUVVOQkxHTkJRVTBzUzBGQlRpeERRVUZaTEVsQlFWb3NSMEZCYlVJc1EwRkJia0k3UVVGRFFTeGpRVUZOTEV0QlFVNHNRMEZCV1N4SFFVRmFMRWRCUVd0Q0xFTkJRV3hDT3p0QlFVVkJMRmxCUVVrc1VVRkJVU3hSUVVGUkxFbEJRVklzUTBGQllTeExRVUZpTEVWQlFXOUNMRTlCUVhCQ0xFdEJRV2RETEVOQlFUVkRPMEZCUTBFc1lVRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeERRVUZyUWl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGaUxFVkJRVzlDTEZOQlFYQkNMRXRCUVd0RExFdEJRWEJFTzBGQlEwRXNZVUZCU3l4UFFVRk1MRU5CUVdFc1NVRkJZaXhEUVVGclFpeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRmlMRVZCUVc5Q0xGTkJRWEJDTEV0QlFXdERMRXRCUVhCRU8wRkJRMFE3UVVGRFJqczdPM1ZEUVVWclFqdEJRVU5xUWl4WFFVRkxMRmRCUVV3c1IwRkJiVUlzVDBGQlR5eFZRVUV4UWp0QlFVTkJMRmRCUVVzc1dVRkJUQ3hIUVVGdlFpeFBRVUZQTEZkQlFUTkNPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NWMEZCVEN4SFFVRnRRaXhMUVVGTExFOUJRVGRETzBGQlEwRXNWMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRTlCUVRsRE8wRkJRMEVzVjBGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVXNzWVVGQlpDeEZRVUUyUWl4TFFVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQlN5eGhRVUZ5UkN4RFFVRnlRanRCUVVOQkxGZEJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGTExHRkJRV1FzUlVGQk5rSXNTMEZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzWVVGQmRFUXNRMEZCY2tJN1FVRkRSRHM3TzIxRFFVVmpPMEZCUTJJc1YwRkJTeXhOUVVGTUxFZEJRV01zUzBGQlN5eFpRVUZNTEVOQlFXdENMSEZDUVVGc1FpeEZRVUZrTzBGQlEwRXNWMEZCU3l4blFrRkJUQ3hIUVVGM1FpeExRVUZMTEUxQlFVd3NRMEZCV1N4SlFVRndRenRCUVVOQkxGZEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQmNFTTdRVUZEUVN4WFFVRkxMRmxCUVV3c1IwRkJiMElzUzBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCYUVNN1FVRkRRU3hYUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1RVRkJha003UVVGRFFTeFhRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NUMEZCTDBNN1FVRkRRU3hYUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzVDBGQmFFUTdRVUZEUVN4WFFVRkxMR0ZCUVV3c1IwRkJjVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4alFVRmtMRVZCUVRoQ0xFdEJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMR05CUVhaRUxFTkJRWEpDTzBGQlEwRXNWMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NZMEZCWkN4RlFVRTRRaXhMUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4alFVRjRSQ3hEUVVGeVFqdEJRVU5FT3pzN2NVTkJSV2RDTEVzc1JVRkJUenRCUVVOMFFpeHRRa0ZCWVN4TFFVRkxMR2RDUVVGc1FqdEJRVU5CTEZkQlFVc3NaMEpCUVV3c1IwRkJkMElzVjBGQlZ5eExRVUZMTEd0Q1FVRm9RaXhGUVVGdlF5eExRVUZ3UXl4RFFVRjRRanRCUVVORU96czdOa0pCUlZFN1FVRkRVQ3hWUVVGSkxFdEJRVXNzVDBGQlZDeEZRVUZyUWp0QlFVTm9RanRCUVVORU8wRkJRMFFzVjBGQlN5eFBRVUZNTEVkQlFXVXNTVUZCWmpzN1FVRkZRU3hWUVVGSkxFdEJRVXNzYTBKQlFWUXNSVUZCTmtJN1FVRkRNMElzWVVGQlN5eFJRVUZNTEVkQlFXZENMRXRCUVdoQ08wRkJRMEVzWlVGQlR5eG5Ra0ZCVUN4RFFVRjNRaXh0UWtGQmVFSXNSVUZCTmtNc1MwRkJTeXh0UWtGQmJFUTdRVUZEUVN4aFFVRkxMR05CUVV3c1IwRkJjMElzVjBGQlZ5eExRVUZMTEd0Q1FVRm9RaXhGUVVGdlF5eExRVUZMTEZsQlFYcERMRU5CUVhSQ08wRkJRMFFzVDBGS1JDeE5RVWxQTEVsQlFVa3NTMEZCU3l4aFFVRlVMRVZCUVhkQ08wRkJRemRDTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FqdEJRVU5CTEdWQlFVOHNaMEpCUVZBc1EwRkJkMElzWTBGQmVFSXNSVUZCZDBNc1MwRkJTeXhqUVVFM1F6dEJRVU5CTEdGQlFVc3NZMEZCVEN4SFFVRnpRaXhYUVVGWExFdEJRVXNzWVVGQmFFSXNSVUZCSzBJc1MwRkJTeXhaUVVGd1F5eERRVUYwUWp0QlFVTkVMRTlCU2swc1RVRkpRVHRCUVVOTUxHRkJRVXNzV1VGQlRDeEhRVUZ2UWl4RFFVRndRanRCUVVOQkxHRkJRVXNzV1VGQlRDeEhRVUZ2UWl4RFFVRndRanRCUVVOQkxHRkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RanRCUVVOQkxHVkJRVThzWjBKQlFWQXNRMEZCZDBJc1YwRkJlRUlzUlVGQmNVTXNTMEZCU3l4WFFVRXhRenRCUVVOQkxHRkJRVXNzWlVGQlREdEJRVU5FT3p0QlFVVkVMR0ZCUVU4c1owSkJRVkFzUTBGQmQwSXNVVUZCZUVJc1JVRkJhME1zUzBGQlN5eGpRVUYyUXp0QlFVTkJMRmRCUVVzc1IwRkJUQ3hIUVVGWExFOUJRVThzUzBGQlN5eG5Ra0ZCV2l4RFFVRllPMEZCUTBRN096czRRa0ZGVXp0QlFVTlNMRlZCUVVrc1EwRkJReXhMUVVGTExFOUJRVllzUlVGQmJVSTdRVUZEYWtJN1FVRkRSRHRCUVVORUxGZEJRVXNzVDBGQlRDeEhRVUZsTEV0QlFXWTdPMEZCUlVFc1ZVRkJTU3hMUVVGTExHdENRVUZVTEVWQlFUWkNPMEZCUXpOQ0xHVkJRVThzYlVKQlFWQXNRMEZCTWtJc2JVSkJRVE5DTEVWQlFXZEVMRXRCUVVzc2JVSkJRWEpFTzBGQlEwUXNUMEZHUkN4TlFVVlBMRWxCUVVrc1MwRkJTeXhoUVVGVUxFVkJRWGRDTzBGQlF6ZENMR1ZCUVU4c2JVSkJRVkFzUTBGQk1rSXNZMEZCTTBJc1JVRkJNa01zUzBGQlN5eGpRVUZvUkR0QlFVTkVMRTlCUmswc1RVRkZRVHRCUVVOTUxHVkJRVThzYlVKQlFWQXNRMEZCTWtJc1YwRkJNMElzUlVGQmQwTXNTMEZCU3l4WFFVRTNRenRCUVVORU96dEJRVVZFTEdGQlFVOHNiVUpCUVZBc1EwRkJNa0lzVVVGQk0wSXNSVUZCY1VNc1MwRkJTeXhqUVVFeFF6dEJRVU5CTEdGQlFVOHNUVUZCVUN4RFFVRmpMRXRCUVVzc1IwRkJia0k3UVVGRFJEczdPemhDUVVWVExFTXNSVUZCUnl4RExFVkJRVWM3UVVGRFpDeFhRVUZMTEZWQlFVd3NSMEZCYTBJc1RVRkJUU3hUUVVGT0xFZEJRV3RDTEV0QlFVc3NWVUZCZGtJc1IwRkJiME1zUTBGQmRFUTdRVUZEUVN4WFFVRkxMRlZCUVV3c1IwRkJhMElzVFVGQlRTeFRRVUZPTEVkQlFXdENMRXRCUVVzc1ZVRkJka0lzUjBGQmIwTXNRMEZCZEVRN1FVRkRSRHM3T3pKQ1FVVk5MRU1zUlVGQlJ5eERMRVZCUVVjN1FVRkRXQ3hYUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEZOQlFVNHNSMEZCYTBJc1MwRkJTeXhQUVVGMlFpeEhRVUZwUXl4RFFVRm9SRHRCUVVOQkxGZEJRVXNzVDBGQlRDeEhRVUZsTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExFOUJRWFpDTEVkQlFXbERMRU5CUVdoRU8wRkJRMFE3T3pzMlFrRkZVU3hETEVWQlFVY3NReXhGUVVGSE8wRkJRMklzVjBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEZOQlFYWkNMRWRCUVcxRExFTkJRWEJFTzBGQlEwRXNWMEZCU3l4VFFVRk1MRWRCUVdsQ0xFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRk5CUVhaQ0xFZEJRVzFETEVOQlFYQkVPMEZCUTBRN096c3lRa0ZGVFN4RExFVkJRVWNzUXl4RlFVRkhPMEZCUTFnc1YwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlRTeFRRVUZPTEVkQlFXdENMRXRCUVVzc1QwRkJka0lzUjBGQmFVTXNRMEZCYUVRN1FVRkRRU3hYUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEZOQlFVNHNSMEZCYTBJc1MwRkJTeXhQUVVGMlFpeEhRVUZwUXl4RFFVRm9SRHRCUVVORU96czdNRUpCUlVzc1F5eEZRVUZITEVNc1JVRkJSenRCUVVOV0xGZEJRVXNzVFVGQlRDeEhRVUZqTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExFMUJRWFpDTEVkQlFXZERMRU5CUVRsRE8wRkJRMEVzVjBGQlN5eE5RVUZNTEVkQlFXTXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVFVGQmRrSXNSMEZCWjBNc1EwRkJPVU03UVVGRFJEczdPekpDUVVWTkxFTXNSVUZCUnl4RExFVkJRVWM3UVVGRFdDeFhRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRk5CUVU0c1IwRkJhMElzUzBGQlN5eFBRVUYyUWl4SFFVRnBReXhEUVVGb1JEdEJRVU5CTEZkQlFVc3NUMEZCVEN4SFFVRmxMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEU5QlFYWkNMRWRCUVdsRExFTkJRV2hFTzBGQlEwUTdPenR2UTBGRlpTeFBMRVZCUVZNN1FVRkRka0lzVjBGQlN5eFpRVUZNTEVkQlFXOUNMRTlCUVhCQ08wRkJRMEVzVjBGQlN5eG5Ra0ZCVER0QlFVTkVPenM3WjBOQlJWY3NUeXhGUVVGVExFTXNSVUZCUnl4RExFVkJRVWM3UVVGRGVrSXNWVUZCU1N4RlFVRkZMRTlCUVVZc1EwRkJWU3hMUVVGTExGTkJRV1lzU1VGQk5FSXNTVUZCYUVNN1FVRkRRU3hWUVVGSkxFVkJRVVVzVDBGQlJpeERRVUZWTEV0QlFVc3NVMEZCWml4SlFVRTBRaXhKUVVGb1F6dEJRVU5CTEZWQlFVa3NTMEZCU3l4clFrRkJWQ3hGUVVFMlFqdEJRVU16UWl4blFrRkJVU3hIUVVGU0xFTkJRVmtzVDBGQldpeEZRVUZ4UWl4WFFVRnlRaXhGUVVGclF5eHBRa0ZCYVVJc1EwRkJha0lzUjBGQmNVSXNSMEZCY2tJc1IwRkJNa0lzUTBGQk0wSXNSMEZCSzBJc1MwRkJha1U3UVVGRFJDeFBRVVpFTEUxQlJVOHNTVUZCU1N4TFFVRkxMR3RDUVVGVUxFVkJRVFpDTzBGQlEyeERMR2RDUVVGUkxFZEJRVklzUTBGQldTeFBRVUZhTEVWQlFYRkNMRmRCUVhKQ0xFVkJRV3RETEdWQlFXVXNRMEZCWml4SFFVRnRRaXhIUVVGdVFpeEhRVUY1UWl4RFFVRjZRaXhIUVVFMlFpeEhRVUV2UkR0QlFVTkVMRTlCUmswc1RVRkZRVHRCUVVOTUxHZENRVUZSTEV0QlFWSXNRMEZCWXl4SlFVRmtMRWRCUVhGQ0xFTkJRWEpDTzBGQlEwRXNaMEpCUVZFc1MwRkJVaXhEUVVGakxFZEJRV1FzUjBGQmIwSXNRMEZCY0VJN1FVRkRSRHRCUVVOR096czdlVU5CUlc5Q08wRkJRMjVDTEZWQlFVa3NTMEZCU3l4clFrRkJUQ3hKUVVFeVFpeExRVUZMTEdsQ1FVRk1MRXRCUVRKQ0xFTkJRVEZFTEVWQlFUWkVPMEZCUXpORUxHRkJRVXNzVDBGQlREdEJRVU5CTEdGQlFVc3NhMEpCUVV3c1IwRkJNRUlzUzBGQk1VSTdRVUZEUVN4aFFVRkxMRTFCUVV3N1FVRkRSQ3hQUVVwRUxFMUJTVTg3UVVGRFRDeGhRVUZMTEdWQlFVdzdRVUZEUkR0QlFVTkdPenM3YjBOQlJXVTdRVUZEWkN4VlFVRkpMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEZsQlFVd3NTMEZCYzBJc1EwRkJhRVFzUlVGQmJVUTdRVUZEYWtRc1lVRkJTeXhQUVVGTU8wRkJRMEVzWVVGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVhKQ08wRkJRMEVzWVVGQlN5eE5RVUZNTzBGQlEwUXNUMEZLUkN4TlFVbFBPMEZCUTB3c1lVRkJTeXhsUVVGTU8wRkJRMFE3UVVGRFJqczdPM2xEUVVWdlFqdEJRVU51UWl4WFFVRkxMR1ZCUVV3c1IwRkJkVUlzU1VGQmRrSTdRVUZEUkRzN08zRkRRVVZuUWp0QlFVTm1MRmRCUVVzc1owSkJRVXc3UVVGRFJEczdPM1ZEUVVWclFqdEJRVU5xUWl4WFFVRkxMRmxCUVV3N1FVRkRRU3hWUVVGSkxHMUNRVUZ0UWl4TFFVRkxMRTFCUVV3c1IwRkJZeXhMUVVGTExGbEJRVEZETzBGQlFVRXNWVUZEU1N4dFFrRkJiVUlzUzBGQlN5eE5RVUZNTEVkQlFXTXNTMEZCU3l4WlFVUXhRenRCUVVWQkxGVkJRVXNzUzBGQlN5eEhRVUZNTEVOQlFWTXNaMEpCUVZRc1NVRkJOa0lzUzBGQlN5eHZRa0ZCYmtNc1NVRkJOa1FzUzBGQlN5eEhRVUZNTEVOQlFWTXNaMEpCUVZRc1NVRkJOa0lzUzBGQlN5eHZRa0ZCYmtjc1JVRkJNRWc3UVVGRGVFZ3NZVUZCU3l4blFrRkJUQ3hEUVVGelFpeERRVUYwUWp0QlFVTkVPMEZCUTBRc1ZVRkJTU3hMUVVGTExGRkJRVlFzUlVGQmJVSTdRVUZEYWtJc1lVRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFZRVUZNTEVkQlFXdENMR2RDUVVGc1FpeEhRVUZ4UXl4TFFVRkxMRTFCUVhwRU8wRkJRMEVzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwUXNUMEZJUkN4TlFVZFBPMEZCUTB3c1lVRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFZRVUZNTEVkQlFXdENMR2RDUVVGc1FpeEhRVUZ4UXl4TFFVRkxMRTFCUVhwRU8wRkJRMEVzWVVGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xHZENRVUZzUWl4SFFVRnhReXhMUVVGTExFMUJRWHBFTzBGQlEwUTdRVUZEUkN4WFFVRkxMRTlCUVV3c1NVRkJaMElzUzBGQlN5eFpRVUZNTEVsQlFYRkNMRXRCUVVzc1QwRkJUQ3hIUVVGbExFZEJRWEJETEVOQlFXaENPMEZCUTBFc1YwRkJTeXhQUVVGTUxFbEJRV2RDTEV0QlFVc3NZVUZCVEN4SlFVRnpRaXhMUVVGTExFOUJRVXdzUjBGQlpTeEhRVUZ5UXl4RFFVRm9RanRCUVVOQkxGVkJRVWtzUTBGQlF5eE5RVUZOTEZkQlFWY3NTMEZCU3l4TlFVRm9RaXhEUVVGT0xFTkJRVXdzUlVGQmNVTTdRVUZEYmtNc1lVRkJTeXhQUVVGTUxFZEJRV1VzVVVGQlVTeExRVUZTTEVOQlFXTXNTMEZCU3l4UFFVRnVRaXhGUVVFMFFpeERRVUZETEV0QlFVc3NUVUZCYkVNc1JVRkJNRU1zUzBGQlN5eE5RVUV2UXl4RFFVRm1PMEZCUTBRN1FVRkRSQ3hWUVVGSkxFTkJRVU1zVFVGQlRTeFhRVUZYTEV0QlFVc3NUVUZCYUVJc1EwRkJUaXhEUVVGTUxFVkJRWEZETzBGQlEyNURMR0ZCUVVzc1QwRkJUQ3hIUVVGbExGRkJRVkVzUzBGQlVpeERRVUZqTEV0QlFVc3NUMEZCYmtJc1JVRkJORUlzUTBGQlF5eExRVUZMTEUxQlFXeERMRVZCUVRCRExFdEJRVXNzVFVGQkwwTXNRMEZCWmp0QlFVTkVPMEZCUTBRc1YwRkJTeXhUUVVGTUxFbEJRV3RDTEVOQlFVTXNTMEZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhUUVVGeVFpeEpRVUZyUXl4TFFVRkxMRk5CUVhwRU8wRkJRMEVzVjBGQlN5eFRRVUZNTEVsQlFXdENMRU5CUVVNc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFRRVUZ5UWl4SlFVRnJReXhMUVVGTExGTkJRWHBFTzBGQlEwRXNWMEZCU3l4SlFVRkpMRkZCUVZFc1EwRkJha0lzUlVGQmIwSXNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hOUVVGNFF5eEZRVUZuUkN4UFFVRm9SQ3hGUVVGNVJEdEJRVU4yUkN4WlFVRkpMRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQldpeERRVUZhTzBGQlFVRXNXVUZEU1N4VFFVRlRMRXRCUVVzc1QwRkJUQ3hEUVVGaExFdEJRV0lzUTBGRVlqdEJRVUZCTEZsQlJVa3NVMEZCVXl4TFFVRkxMRTlCUVV3c1EwRkJZU3hMUVVGaUxFTkJSbUk3UVVGQlFTeFpRVWRKTEZWQlFWVXNTMEZCU3l4VFFVRk1MRWxCUVd0Q0xGVkJRVlVzUzBGQlN5eFBRVUZNTEVkQlFXVXNRMEZCUXl4RFFVRm9RaXhIUVVGdlFpeERRVUU1UWl4RFFVRnNRaXhEUVVoa08wRkJRVUVzV1VGSlNTeFZRVUZWTEV0QlFVc3NVMEZCVEN4SlFVRnJRaXhWUVVGVkxFdEJRVXNzVDBGQlRDeEhRVUZsTEVOQlFVTXNRMEZCYUVJc1IwRkJiMElzUTBGQk9VSXNRMEZCYkVJc1EwRktaRHRCUVV0QkxHRkJRVXNzVjBGQlRDeERRVUZwUWl4TFFVRnFRaXhGUVVGM1FpeFBRVUY0UWl4RlFVRnBReXhQUVVGcVF6dEJRVU5FTzBGQlEwUXNWMEZCU3l4SFFVRk1MRWRCUVZjc1QwRkJUeXhMUVVGTExHZENRVUZhTEVOQlFWZzdRVUZEUkRzN096SkNRVVZOTEVrc1JVRkJUU3hMTEVWQlFVMDdRVUZEYWtJN1FVRkRRU3hWUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFWUXNTVUZCWXl4WlFVRjBRanRCUVVGQkxGVkJRVzlETzBGQlEyaERMRlZCUVVrc1EwRkJReXhUUVVGVExFTkJRVllzU1VGQlpTeFpRVVIyUWl4RFFVWnBRaXhEUVVkdFFqczdRVUZGY0VNN1FVRkRRU3hWUVVGSkxGZEJRVmNzUzBGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1YwRkJlRU03UVVGRFFTeFZRVUZKTEV0QlFVc3NVVUZCVEN4TFFVRnJRaXhSUVVGMFFpeEZRVUZuUXp0QlFVTTVRaXhoUVVGTExGRkJRVXdzUjBGQlowSXNVVUZCYUVJN1FVRkRRU3hoUVVGTExHVkJRVXdzUjBGQmRVSXNTVUZCZGtJN1FVRkRSRHM3UVVGRlJDeFZRVUZKTEV0QlFVc3NaVUZCVkN4RlFVRXdRanRCUVVONFFpeGhRVUZMTEdWQlFVd3NSMEZCZFVJc1MwRkJka0k3UVVGRFFTeGhRVUZMTEZsQlFVd3NSMEZCYjBJc1EwRkJjRUk3UVVGRFFTeGhRVUZMTEZsQlFVd3NSMEZCYjBJc1EwRkJjRUk3UVVGRFJEczdRVUZGUkN4WFFVRkxMRTFCUVV3c1IwRkJZeXhEUVVGa08wRkJRMEVzVjBGQlN5eE5RVUZNTEVkQlFXTXNRMEZCWkR0QlFVTkVPenM3ZDBOQlJXMUNMRXNzUlVGQlR6dEJRVU42UWl4VlFVRkpMRTlCUVU4c1RVRkJUU3hKUVVGcVFqdEJRVU5CTEZWQlFVa3NVVUZCVVN4TlFVRk5MRXRCUVd4Q08wRkJRMEVzVlVGQlNTeFRRVUZUTEVsQlFWUXNTVUZCYVVJc1ZVRkJWU3hKUVVFdlFpeEZRVUZ4UXp0QlFVTnVReXhoUVVGTExHbENRVUZNTEVkQlFYbENMRU5CUVhwQ08wRkJRMEVzWVVGQlN5eE5RVUZNTEVOQlFWa3NTVUZCV2l4RlFVRnJRaXhMUVVGc1FqdEJRVU5FTzBGQlEwWTdPenR0UTBGRll5eExMRVZCUVU4N1FVRkRjRUlzVlVGQlNTeFBRVUZQTEUxQlFVMHNXVUZCVGl4RFFVRnRRaXhKUVVFNVFqdEJRVU5CTEZWQlFVa3NVVUZCVVN4TlFVRk5MRmxCUVU0c1EwRkJiVUlzUzBGQkwwSTdRVUZEUVN4VlFVRkpMRk5CUVZNc1NVRkJWQ3hKUVVGcFFpeFZRVUZWTEVsQlFTOUNMRVZCUVhGRE8wRkJRMjVETEdGQlFVc3NXVUZCVEN4SFFVRnZRaXhEUVVGd1FqdEJRVU5CTEdGQlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc1JVRkJhMElzUzBGQmJFSTdRVUZEUkR0QlFVTkdPenM3WjBOQlJWY3NTeXhGUVVGUE8wRkJRMnBDTEZWQlFVa3NWVUZCVlN4TlFVRk5MRTlCUVhCQ08wRkJRVUVzVlVGRFNTeFZRVUZWTEUxQlFVMHNUMEZFY0VJN08wRkJSMEU3UVVGRFFTeFZRVUZITEV0QlFVc3NVMEZCVEN4TFFVTkRMRlZCUVZVc1MwRkJTeXhuUWtGQlppeEpRVUZ0UXl4VlFVRlZMRXRCUVVzc1owSkJRVXdzUjBGQmQwSXNTMEZCU3l4WlFVRXpSU3hKUVVOQkxGVkJRVlVzUzBGQlN5eG5Ra0ZCWml4SlFVRnRReXhWUVVGVkxFdEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhoUVVZeFJTeERRVUZJTEVWQlJUaEdPMEZCUXpGR0xHRkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFXUTdRVUZEUVN4aFFVRkxMRTFCUVV3c1IwRkJZeXhEUVVGa08wRkJRMEU3UVVGRFJEczdRVUZGU0N4VlFVRkpMRXRCUVVzc1lVRkJWQ3hGUVVGM1FqdEJRVU4wUWp0QlFVTkJMRmxCUVVrc1MwRkJTeXhwUWtGQlZDeEZRVUUwUWp0QlFVTXhRaXh2UWtGQlZTeExRVUZMTEVkQlFVd3NRMEZCVXl4UFFVRlVMRVZCUVd0Q0xFdEJRVXNzWjBKQlFYWkNMRU5CUVZZN1FVRkRRU3h2UWtGQlZTeExRVUZMTEVkQlFVd3NRMEZCVXl4UFFVRlVMRVZCUVd0Q0xFdEJRVXNzWjBKQlFVd3NSMEZCZDBJc1MwRkJTeXhaUVVFdlF5eERRVUZXTzBGQlEwRXNiMEpCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zVDBGQlZDeEZRVUZyUWl4TFFVRkxMR2RDUVVGMlFpeERRVUZXTzBGQlEwRXNiMEpCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zVDBGQlZDeEZRVUZyUWl4TFFVRkxMR2RDUVVGTUxFZEJRWGRDTEV0QlFVc3NZVUZCTDBNc1EwRkJWanRCUVVORU8wRkJRMFE3UVVGRFFTeFpRVUZITEV0QlFVc3NZVUZCVEN4SlFVRnpRaXhMUVVGTExHRkJRVGxDTEVWQlFUWkRPMEZCUXpORExHVkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFVTXNWVUZCVlN4TFFVRkxMR2RDUVVGbUxFZEJRV3RETEV0QlFVc3NZMEZCZUVNc1NVRkJNRVFzUzBGQlN5eGhRVUUzUlR0QlFVTkJMR1ZCUVVzc1RVRkJUQ3hIUVVGakxFTkJRVU1zVlVGQlZTeExRVUZMTEdkQ1FVRm1MRWRCUVd0RExFdEJRVXNzWTBGQmVFTXNTVUZCTUVRc1MwRkJTeXhoUVVFM1JUdEJRVU5FTzBGQlEwWXNUMEZpUkN4TlFXRlBPMEZCUTB3N1FVRkRRU3haUVVGSExFdEJRVXNzWVVGQlRDeEpRVUZ6UWl4TFFVRkxMR0ZCUVRsQ0xFVkJRVFpETzBGQlF6TkRMR1ZCUVVzc1RVRkJUQ3hIUVVGakxFTkJRVU1zVlVGQlZTeExRVUZMTEdGQlFXaENMRWxCUVdsRExFdEJRVXNzWVVGQmNFUTdRVUZEUVN4bFFVRkxMRTFCUVV3c1IwRkJZeXhEUVVGRExGVkJRVlVzUzBGQlN5eGhRVUZvUWl4SlFVRnBReXhMUVVGTExHRkJRWEJFTzBGQlEwUTdRVUZEUmp0QlFVTkdPenM3T0VKQlJWTTdRVUZEVWl4WFFVRkxMRTlCUVV3N08wRkJSVUVzYlVKQlFXRXNTMEZCU3l4blFrRkJiRUk3UVVGRFFTeHRRa0ZCWVN4TFFVRkxMR05CUVd4Q096dEJRVVZCTEZkQlFVc3NUMEZCVEN4RFFVRmhMR1ZCUVdJc1EwRkJOa0lzVDBGQk4wSTdRVUZEUVN4WFFVRkxMRWxCUVVrc1VVRkJVU3hEUVVGcVFpeEZRVUZ2UWl4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFMUJRWGhETEVWQlFXZEVMRTlCUVdoRUxFVkJRWGxFTzBGQlEzWkVMR0ZCUVVzc1RVRkJUQ3hEUVVGWkxFdEJRVm9zUlVGQmJVSXNaVUZCYmtJc1EwRkJiVU1zVDBGQmJrTTdRVUZEUkRzN1FVRkZSQ3hoUVVGUExFdEJRVXNzVDBGQldqdEJRVU5CTEdGQlFVOHNTMEZCU3l4TlFVRmFPMEZCUTBRN096czRRa0ZGVXp0QlFVTlNMR0ZCUVU4c1QwRkJVRHRCUVVORU96czdPenM3UVVGSlNDeFBRVUZQTEU5QlFWQXNSMEZCYVVJc1VVRkJha0lpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQmxLSFFzYml4eUtYdG1kVzVqZEdsdmJpQnpLRzhzZFNsN2FXWW9JVzViYjEwcGUybG1LQ0YwVzI5ZEtYdDJZWElnWVQxMGVYQmxiMllnY21WeGRXbHlaVDA5WENKbWRXNWpkR2x2Ymx3aUppWnlaWEYxYVhKbE8ybG1LQ0YxSmlaaEtYSmxkSFZ5YmlCaEtHOHNJVEFwTzJsbUtHa3BjbVYwZFhKdUlHa29ieXdoTUNrN2RtRnlJR1k5Ym1WM0lFVnljbTl5S0Z3aVEyRnVibTkwSUdacGJtUWdiVzlrZFd4bElDZGNJaXR2SzF3aUoxd2lLVHQwYUhKdmR5Qm1MbU52WkdVOVhDSk5UMFJWVEVWZlRrOVVYMFpQVlU1RVhDSXNabjEyWVhJZ2JEMXVXMjlkUFh0bGVIQnZjblJ6T250OWZUdDBXMjlkV3pCZExtTmhiR3dvYkM1bGVIQnZjblJ6TEdaMWJtTjBhVzl1S0dVcGUzWmhjaUJ1UFhSYmIxMWJNVjFiWlYwN2NtVjBkWEp1SUhNb2JqOXVPbVVwZlN4c0xHd3VaWGh3YjNKMGN5eGxMSFFzYml4eUtYMXlaWFIxY200Z2JsdHZYUzVsZUhCdmNuUnpmWFpoY2lCcFBYUjVjR1Z2WmlCeVpYRjFhWEpsUFQxY0ltWjFibU4wYVc5dVhDSW1KbkpsY1hWcGNtVTdabTl5S0haaGNpQnZQVEE3Ynp4eUxteGxibWQwYUR0dkt5c3BjeWh5VzI5ZEtUdHlaWFIxY200Z2MzMHBJaXdpTHlwY2JtOWlhbVZqZEMxaGMzTnBaMjVjYmloaktTQlRhVzVrY21VZ1UyOXlhSFZ6WEc1QWJHbGpaVzV6WlNCTlNWUmNiaW92WEc1Y2JpZDFjMlVnYzNSeWFXTjBKenRjYmk4cUlHVnpiR2x1ZEMxa2FYTmhZbXhsSUc1dkxYVnVkWE5sWkMxMllYSnpJQ292WEc1MllYSWdaMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6SUQwZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N6dGNiblpoY2lCb1lYTlBkMjVRY205d1pYSjBlU0E5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIazdYRzUyWVhJZ2NISnZjRWx6Ulc1MWJXVnlZV0pzWlNBOUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWNISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVTdYRzVjYm1aMWJtTjBhVzl1SUhSdlQySnFaV04wS0haaGJDa2dlMXh1WEhScFppQW9kbUZzSUQwOVBTQnVkV3hzSUh4OElIWmhiQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzVjZEZ4MGRHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25UMkpxWldOMExtRnpjMmxuYmlCallXNXViM1FnWW1VZ1kyRnNiR1ZrSUhkcGRHZ2diblZzYkNCdmNpQjFibVJsWm1sdVpXUW5LVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJQWW1wbFkzUW9kbUZzS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJodmRXeGtWWE5sVG1GMGFYWmxLQ2tnZTF4dVhIUjBjbmtnZTF4dVhIUmNkR2xtSUNnaFQySnFaV04wTG1GemMybG5iaWtnZTF4dVhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFJjZEgxY2JseHVYSFJjZEM4dklFUmxkR1ZqZENCaWRXZG5lU0J3Y205d1pYSjBlU0JsYm5WdFpYSmhkR2x2YmlCdmNtUmxjaUJwYmlCdmJHUmxjaUJXT0NCMlpYSnphVzl1Y3k1Y2JseHVYSFJjZEM4dklHaDBkSEJ6T2k4dlluVm5jeTVqYUhKdmJXbDFiUzV2Y21jdmNDOTJPQzlwYzNOMVpYTXZaR1YwWVdsc1AybGtQVFF4TVRoY2JseDBYSFIyWVhJZ2RHVnpkREVnUFNCdVpYY2dVM1J5YVc1bktDZGhZbU1uS1RzZ0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnYm04dGJtVjNMWGR5WVhCd1pYSnpYRzVjZEZ4MGRHVnpkREZiTlYwZ1BTQW5aR1VuTzF4dVhIUmNkR2xtSUNoUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbE9ZVzFsY3loMFpYTjBNU2xiTUYwZ1BUMDlJQ2MxSnlrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSY2RIMWNibHh1WEhSY2RDOHZJR2gwZEhCek9pOHZZblZuY3k1amFISnZiV2wxYlM1dmNtY3ZjQzkyT0M5cGMzTjFaWE12WkdWMFlXbHNQMmxrUFRNd05UWmNibHgwWEhSMllYSWdkR1Z6ZERJZ1BTQjdmVHRjYmx4MFhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJREV3T3lCcEt5c3BJSHRjYmx4MFhIUmNkSFJsYzNReVd5ZGZKeUFySUZOMGNtbHVaeTVtY205dFEyaGhja052WkdVb2FTbGRJRDBnYVR0Y2JseDBYSFI5WEc1Y2RGeDBkbUZ5SUc5eVpHVnlNaUE5SUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVVNWhiV1Z6S0hSbGMzUXlLUzV0WVhBb1puVnVZM1JwYjI0Z0tHNHBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQjBaWE4wTWx0dVhUdGNibHgwWEhSOUtUdGNibHgwWEhScFppQW9iM0prWlhJeUxtcHZhVzRvSnljcElDRTlQU0FuTURFeU16UTFOamM0T1NjcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MFhIUjlYRzVjYmx4MFhIUXZMeUJvZEhSd2N6b3ZMMkoxWjNNdVkyaHliMjFwZFcwdWIzSm5MM0F2ZGpndmFYTnpkV1Z6TDJSbGRHRnBiRDlwWkQwek1EVTJYRzVjZEZ4MGRtRnlJSFJsYzNReklEMGdlMzA3WEc1Y2RGeDBKMkZpWTJSbFptZG9hV3ByYkcxdWIzQnhjbk4wSnk1emNHeHBkQ2duSnlrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2JHVjBkR1Z5S1NCN1hHNWNkRngwWEhSMFpYTjBNMXRzWlhSMFpYSmRJRDBnYkdWMGRHVnlPMXh1WEhSY2RIMHBPMXh1WEhSY2RHbG1JQ2hQWW1wbFkzUXVhMlY1Y3loUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCMFpYTjBNeWtwTG1wdmFXNG9KeWNwSUNFOVBWeHVYSFJjZEZ4MFhIUW5ZV0pqWkdWbVoyaHBhbXRzYlc1dmNIRnljM1FuS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWm1Gc2MyVTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUhSeWRXVTdYRzVjZEgwZ1kyRjBZMmdnS0dWeWNpa2dlMXh1WEhSY2RDOHZJRmRsSUdSdmJpZDBJR1Y0Y0dWamRDQmhibmtnYjJZZ2RHaGxJR0ZpYjNabElIUnZJSFJvY205M0xDQmlkWFFnWW1WMGRHVnlJSFJ2SUdKbElITmhabVV1WEc1Y2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dVhIUjlYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2MyaHZkV3hrVlhObFRtRjBhWFpsS0NrZ1B5QlBZbXBsWTNRdVlYTnphV2R1SURvZ1puVnVZM1JwYjI0Z0tIUmhjbWRsZEN3Z2MyOTFjbU5sS1NCN1hHNWNkSFpoY2lCbWNtOXRPMXh1WEhSMllYSWdkRzhnUFNCMGIwOWlhbVZqZENoMFlYSm5aWFFwTzF4dVhIUjJZWElnYzNsdFltOXNjenRjYmx4dVhIUm1iM0lnS0haaGNpQnpJRDBnTVRzZ2N5QThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJSE1yS3lrZ2UxeHVYSFJjZEdaeWIyMGdQU0JQWW1wbFkzUW9ZWEpuZFcxbGJuUnpXM05kS1R0Y2JseHVYSFJjZEdadmNpQW9kbUZ5SUd0bGVTQnBiaUJtY205dEtTQjdYRzVjZEZ4MFhIUnBaaUFvYUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNobWNtOXRMQ0JyWlhrcEtTQjdYRzVjZEZ4MFhIUmNkSFJ2VzJ0bGVWMGdQU0JtY205dFcydGxlVjA3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0dkbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N5a2dlMXh1WEhSY2RGeDBjM2x0WW05c2N5QTlJR2RsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3lobWNtOXRLVHRjYmx4MFhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYzNsdFltOXNjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVYSFJjZEZ4MFhIUnBaaUFvY0hKdmNFbHpSVzUxYldWeVlXSnNaUzVqWVd4c0tHWnliMjBzSUhONWJXSnZiSE5iYVYwcEtTQjdYRzVjZEZ4MFhIUmNkRngwZEc5YmMzbHRZbTlzYzF0cFhWMGdQU0JtY205dFczTjViV0p2YkhOYmFWMWRPMXh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOVhHNWNibHgwY21WMGRYSnVJSFJ2TzF4dWZUdGNiaUlzSWk4dklFZGxibVZ5WVhSbFpDQmllU0JEYjJabVpXVlRZM0pwY0hRZ01TNHhNaTR5WEc0b1puVnVZM1JwYjI0b0tTQjdYRzRnSUhaaGNpQm5aWFJPWVc1dlUyVmpiMjVrY3l3Z2FISjBhVzFsTENCc2IyRmtWR2x0WlN3Z2JXOWtkV3hsVEc5aFpGUnBiV1VzSUc1dlpHVk1iMkZrVkdsdFpTd2dkWEJVYVcxbE8xeHVYRzRnSUdsbUlDZ29kSGx3Wlc5bUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJQ1ltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0J1ZFd4c0tTQW1KaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY3BJSHRjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncE8xeHVJQ0FnSUgwN1hHNGdJSDBnWld4elpTQnBaaUFvS0hSNWNHVnZaaUJ3Y205alpYTnpJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJQ1ltSUhCeWIyTmxjM01nSVQwOUlHNTFiR3dwSUNZbUlIQnliMk5sYzNNdWFISjBhVzFsS1NCN1hHNGdJQ0FnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvWjJWMFRtRnViMU5sWTI5dVpITW9LU0F0SUc1dlpHVk1iMkZrVkdsdFpTa2dMeUF4WlRZN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JvY25ScGJXVWdQU0J3Y205alpYTnpMbWh5ZEdsdFpUdGNiaUFnSUNCblpYUk9ZVzV2VTJWamIyNWtjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2h5TzF4dUlDQWdJQ0FnYUhJZ1BTQm9jblJwYldVb0tUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCb2Nsc3dYU0FxSURGbE9TQXJJR2h5V3pGZE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYlc5a2RXeGxURzloWkZScGJXVWdQU0JuWlhST1lXNXZVMlZqYjI1a2N5Z3BPMXh1SUNBZ0lIVndWR2x0WlNBOUlIQnliMk5sYzNNdWRYQjBhVzFsS0NrZ0tpQXhaVGs3WEc0Z0lDQWdibTlrWlV4dllXUlVhVzFsSUQwZ2JXOWtkV3hsVEc5aFpGUnBiV1VnTFNCMWNGUnBiV1U3WEc0Z0lIMGdaV3h6WlNCcFppQW9SR0YwWlM1dWIzY3BJSHRjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFUmhkR1V1Ym05M0tDa2dMU0JzYjJGa1ZHbHRaVHRjYmlBZ0lDQjlPMXh1SUNBZ0lHeHZZV1JVYVcxbElEMGdSR0YwWlM1dWIzY29LVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwSUMwZ2JHOWhaRlJwYldVN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JzYjJGa1ZHbHRaU0E5SUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVJQ0I5WEc1Y2JuMHBMbU5oYkd3b2RHaHBjeWs3WEc1Y2JpOHZJeUJ6YjNWeVkyVk5ZWEJ3YVc1blZWSk1QWEJsY21admNtMWhibU5sTFc1dmR5NXFjeTV0WVhCY2JpSXNJaTh2SUhOb2FXMGdabTl5SUhWemFXNW5JSEJ5YjJObGMzTWdhVzRnWW5KdmQzTmxjbHh1ZG1GeUlIQnliMk5sYzNNZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdDlPMXh1WEc0dkx5QmpZV05vWldRZ1puSnZiU0IzYUdGMFpYWmxjaUJuYkc5aVlXd2dhWE1nY0hKbGMyVnVkQ0J6YnlCMGFHRjBJSFJsYzNRZ2NuVnVibVZ5Y3lCMGFHRjBJSE4wZFdJZ2FYUmNiaTh2SUdSdmJpZDBJR0p5WldGcklIUm9hVzVuY3k0Z0lFSjFkQ0IzWlNCdVpXVmtJSFJ2SUhkeVlYQWdhWFFnYVc0Z1lTQjBjbmtnWTJGMFkyZ2dhVzRnWTJGelpTQnBkQ0JwYzF4dUx5OGdkM0poY0hCbFpDQnBiaUJ6ZEhKcFkzUWdiVzlrWlNCamIyUmxJSGRvYVdOb0lHUnZaWE51SjNRZ1pHVm1hVzVsSUdGdWVTQm5iRzlpWVd4ekxpQWdTWFFuY3lCcGJuTnBaR1VnWVZ4dUx5OGdablZ1WTNScGIyNGdZbVZqWVhWelpTQjBjbmt2WTJGMFkyaGxjeUJrWlc5d2RHbHRhWHBsSUdsdUlHTmxjblJoYVc0Z1pXNW5hVzVsY3k1Y2JseHVkbUZ5SUdOaFkyaGxaRk5sZEZScGJXVnZkWFE3WEc1MllYSWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBPMXh1WEc1bWRXNWpkR2x2YmlCa1pXWmhkV3gwVTJWMFZHbHRiM1YwS0NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduYzJWMFZHbHRaVzkxZENCb1lYTWdibTkwSUdKbFpXNGdaR1ZtYVc1bFpDY3BPMXh1ZlZ4dVpuVnVZM1JwYjI0Z1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWRDQW9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZGpiR1ZoY2xScGJXVnZkWFFnYUdGeklHNXZkQ0JpWldWdUlHUmxabWx1WldRbktUdGNibjFjYmlobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCelpYUlVhVzFsYjNWMElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnYzJWMFZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ1pHVm1ZWFZzZEZObGRGUnBiVzkxZER0Y2JpQWdJQ0I5WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQmpiR1ZoY2xScGJXVnZkWFFnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR05zWldGeVZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnZlZ4dWZTQW9LU2xjYm1aMWJtTjBhVzl1SUhKMWJsUnBiV1Z2ZFhRb1puVnVLU0I3WEc0Z0lDQWdhV1lnS0dOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFQwOUlITmxkRlJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnTHk5dWIzSnRZV3dnWlc1MmFYSnZiV1Z1ZEhNZ2FXNGdjMkZ1WlNCemFYUjFZWFJwYjI1elhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlITmxkRlJwYldWdmRYUWdkMkZ6YmlkMElHRjJZV2xzWVdKc1pTQmlkWFFnZDJGeklHeGhkSFJsY2lCa1pXWnBibVZrWEc0Z0lDQWdhV1lnS0NoallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwOVBTQmtaV1poZFd4MFUyVjBWR2x0YjNWMElIeDhJQ0ZqWVdOb1pXUlRaWFJVYVcxbGIzVjBLU0FtSmlCelpYUlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0J6WlhSVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJWMFZHbHRaVzkxZENobWRXNHNJREFwTzF4dUlDQWdJSDFjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBdkx5QjNhR1Z1SUhkb1pXNGdjMjl0WldKdlpIa2dhR0Z6SUhOamNtVjNaV1FnZDJsMGFDQnpaWFJVYVcxbGIzVjBJR0oxZENCdWJ5QkpMa1V1SUcxaFpHUnVaWE56WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZkb1pXNGdkMlVnWVhKbElHbHVJRWt1UlM0Z1luVjBJSFJvWlNCelkzSnBjSFFnYUdGeklHSmxaVzRnWlhaaGJHVmtJSE52SUVrdVJTNGdaRzlsYzI0bmRDQjBjblZ6ZENCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCM2FHVnVJR05oYkd4bFpDQnViM0p0WVd4c2VWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpGTmxkRlJwYldWdmRYUXVZMkZzYkNodWRXeHNMQ0JtZFc0c0lEQXBPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9LR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYzJGdFpTQmhjeUJoWW05MlpTQmlkWFFnZDJobGJpQnBkQ2R6SUdFZ2RtVnljMmx2YmlCdlppQkpMa1V1SUhSb1lYUWdiWFZ6ZENCb1lYWmxJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJR1p2Y2lBbmRHaHBjeWNzSUdodmNHWjFiR3g1SUc5MWNpQmpiMjUwWlhoMElHTnZjbkpsWTNRZ2IzUm9aWEozYVhObElHbDBJSGRwYkd3Z2RHaHliM2NnWVNCbmJHOWlZV3dnWlhKeWIzSmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnWm5WdUxDQXdLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNTlYRzVtZFc1amRHbHZiaUJ5ZFc1RGJHVmhjbFJwYldWdmRYUW9iV0Z5YTJWeUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ1kyeGxZWEpVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUM4dmJtOXliV0ZzSUdWdWRtbHliMjFsYm5SeklHbHVJSE5oYm1VZ2MybDBkV0YwYVc5dWMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklHbG1JR05zWldGeVZHbHRaVzkxZENCM1lYTnVKM1FnWVhaaGFXeGhZbXhsSUdKMWRDQjNZWE1nYkdGMGRHVnlJR1JsWm1sdVpXUmNiaUFnSUNCcFppQW9LR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWRDQjhmQ0FoWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwS1NBbUppQmpiR1ZoY2xScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMGdZMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDOHZJSGRvWlc0Z2QyaGxiaUJ6YjIxbFltOWtlU0JvWVhNZ2MyTnlaWGRsWkNCM2FYUm9JSE5sZEZScGJXVnZkWFFnWW5WMElHNXZJRWt1UlM0Z2JXRmtaRzVsYzNOY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENodFlYSnJaWElwTzF4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwZTF4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWMmhsYmlCM1pTQmhjbVVnYVc0Z1NTNUZMaUJpZFhRZ2RHaGxJSE5qY21sd2RDQm9ZWE1nWW1WbGJpQmxkbUZzWldRZ2MyOGdTUzVGTGlCa2IyVnpiaWQwSUNCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDNWpZV3hzS0c1MWJHd3NJRzFoY210bGNpazdYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYzJGdFpTQmhjeUJoWW05MlpTQmlkWFFnZDJobGJpQnBkQ2R6SUdFZ2RtVnljMmx2YmlCdlppQkpMa1V1SUhSb1lYUWdiWFZ6ZENCb1lYWmxJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJR1p2Y2lBbmRHaHBjeWNzSUdodmNHWjFiR3g1SUc5MWNpQmpiMjUwWlhoMElHTnZjbkpsWTNRZ2IzUm9aWEozYVhObElHbDBJSGRwYkd3Z2RHaHliM2NnWVNCbmJHOWlZV3dnWlhKeWIzSXVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlRiMjFsSUhabGNuTnBiMjV6SUc5bUlFa3VSUzRnYUdGMlpTQmthV1ptWlhKbGJuUWdjblZzWlhNZ1ptOXlJR05zWldGeVZHbHRaVzkxZENCMmN5QnpaWFJVYVcxbGIzVjBYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTG1OaGJHd29kR2hwY3l3Z2JXRnlhMlZ5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzVjYm4xY2JuWmhjaUJ4ZFdWMVpTQTlJRnRkTzF4dWRtRnlJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzUyWVhJZ1kzVnljbVZ1ZEZGMVpYVmxPMXh1ZG1GeUlIRjFaWFZsU1c1a1pYZ2dQU0F0TVR0Y2JseHVablZ1WTNScGIyNGdZMnhsWVc1VmNFNWxlSFJVYVdOcktDa2dlMXh1SUNBZ0lHbG1JQ2doWkhKaGFXNXBibWNnZkh3Z0lXTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNGdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JqZFhKeVpXNTBVWFZsZFdVdVkyOXVZMkYwS0hGMVpYVmxLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnWkhKaGFXNVJkV1YxWlNncE8xeHVJQ0FnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWkhKaGFXNVJkV1YxWlNncElIdGNiaUFnSUNCcFppQW9aSEpoYVc1cGJtY3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCMllYSWdkR2x0Wlc5MWRDQTlJSEoxYmxScGJXVnZkWFFvWTJ4bFlXNVZjRTVsZUhSVWFXTnJLVHRjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJSFJ5ZFdVN1hHNWNiaUFnSUNCMllYSWdiR1Z1SUQwZ2NYVmxkV1V1YkdWdVozUm9PMXh1SUNBZ0lIZG9hV3hsS0d4bGJpa2dlMXh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVWFZsZFdVZ1BTQnhkV1YxWlR0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1VnUFNCYlhUdGNiaUFnSUNBZ0lDQWdkMmhwYkdVZ0tDc3JjWFZsZFdWSmJtUmxlQ0E4SUd4bGJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SUmRXVjFaVnR4ZFdWMVpVbHVaR1Y0WFM1eWRXNG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUNBZ0lDQWdJR3hsYmlBOUlIRjFaWFZsTG14bGJtZDBhRHRjYmlBZ0lDQjlYRzRnSUNBZ1kzVnljbVZ1ZEZGMVpYVmxJRDBnYm5Wc2JEdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dUlDQWdJSEoxYmtOc1pXRnlWR2x0Wlc5MWRDaDBhVzFsYjNWMEtUdGNibjFjYmx4dWNISnZZMlZ6Y3k1dVpYaDBWR2xqYXlBOUlHWjFibU4wYVc5dUlDaG1kVzRwSUh0Y2JpQWdJQ0IyWVhJZ1lYSm5jeUE5SUc1bGR5QkJjbkpoZVNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUMwZ01TazdYRzRnSUNBZ2FXWWdLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF4S1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoY21kelcya2dMU0F4WFNBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnhkV1YxWlM1d2RYTm9LRzVsZHlCSmRHVnRLR1oxYml3Z1lYSm5jeWtwTzF4dUlDQWdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ2dQVDA5SURFZ0ppWWdJV1J5WVdsdWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhKMWJsUnBiV1Z2ZFhRb1pISmhhVzVSZFdWMVpTazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dUx5OGdkamdnYkdsclpYTWdjSEpsWkdsamRHbGliR1VnYjJKcVpXTjBjMXh1Wm5WdVkzUnBiMjRnU1hSbGJTaG1kVzRzSUdGeWNtRjVLU0I3WEc0Z0lDQWdkR2hwY3k1bWRXNGdQU0JtZFc0N1hHNGdJQ0FnZEdocGN5NWhjbkpoZVNBOUlHRnljbUY1TzF4dWZWeHVTWFJsYlM1d2NtOTBiM1I1Y0dVdWNuVnVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVablZ1TG1Gd2NHeDVLRzUxYkd3c0lIUm9hWE11WVhKeVlYa3BPMXh1ZlR0Y2JuQnliMk5sYzNNdWRHbDBiR1VnUFNBblluSnZkM05sY2ljN1hHNXdjbTlqWlhOekxtSnliM2R6WlhJZ1BTQjBjblZsTzF4dWNISnZZMlZ6Y3k1bGJuWWdQU0I3ZlR0Y2JuQnliMk5sYzNNdVlYSm5kaUE5SUZ0ZE8xeHVjSEp2WTJWemN5NTJaWEp6YVc5dUlEMGdKeWM3SUM4dklHVnRjSFI1SUhOMGNtbHVaeUIwYnlCaGRtOXBaQ0J5WldkbGVIQWdhWE56ZFdWelhHNXdjbTlqWlhOekxuWmxjbk5wYjI1eklEMGdlMzA3WEc1Y2JtWjFibU4wYVc5dUlHNXZiM0FvS1NCN2ZWeHVYRzV3Y205alpYTnpMbTl1SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011WVdSa1RHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1dmJtTmxJRDBnYm05dmNEdGNibkJ5YjJObGMzTXViMlptSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y21WdGIzWmxUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXlaVzF2ZG1WQmJHeE1hWE4wWlc1bGNuTWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NWxiV2wwSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y0hKbGNHVnVaRXhwYzNSbGJtVnlJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFOXVZMlZNYVhOMFpXNWxjaUE5SUc1dmIzQTdYRzVjYm5CeWIyTmxjM011YkdsemRHVnVaWEp6SUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VwSUhzZ2NtVjBkWEp1SUZ0ZElIMWNibHh1Y0hKdlkyVnpjeTVpYVc1a2FXNW5JRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQnliMk5sYzNNdVltbHVaR2x1WnlCcGN5QnViM1FnYzNWd2NHOXlkR1ZrSnlrN1hHNTlPMXh1WEc1d2NtOWpaWE56TG1OM1pDQTlJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SUNjdkp5QjlPMXh1Y0hKdlkyVnpjeTVqYUdScGNpQTlJR1oxYm1OMGFXOXVJQ2hrYVhJcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WTJoa2FYSWdhWE1nYm05MElITjFjSEJ2Y25SbFpDY3BPMXh1ZlR0Y2JuQnliMk5sYzNNdWRXMWhjMnNnUFNCbWRXNWpkR2x2YmlncElIc2djbVYwZFhKdUlEQTdJSDA3WEc0aUxDSjJZWElnYm05M0lEMGdjbVZ4ZFdseVpTZ25jR1Z5Wm05eWJXRnVZMlV0Ym05M0p5bGNiaUFnTENCeWIyOTBJRDBnZEhsd1pXOW1JSGRwYm1SdmR5QTlQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5Qm5iRzlpWVd3Z09pQjNhVzVrYjNkY2JpQWdMQ0IyWlc1a2IzSnpJRDBnV3lkdGIzb25MQ0FuZDJWaWEybDBKMTFjYmlBZ0xDQnpkV1ptYVhnZ1BTQW5RVzVwYldGMGFXOXVSbkpoYldVblhHNGdJQ3dnY21GbUlEMGdjbTl2ZEZzbmNtVnhkV1Z6ZENjZ0t5QnpkV1ptYVhoZFhHNGdJQ3dnWTJGbUlEMGdjbTl2ZEZzblkyRnVZMlZzSnlBcklITjFabVpwZUYwZ2ZId2djbTl2ZEZzblkyRnVZMlZzVW1WeGRXVnpkQ2NnS3lCemRXWm1hWGhkWEc1Y2JtWnZjaWgyWVhJZ2FTQTlJREE3SUNGeVlXWWdKaVlnYVNBOElIWmxibVJ2Y25NdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ2NtRm1JRDBnY205dmRGdDJaVzVrYjNKelcybGRJQ3NnSjFKbGNYVmxjM1FuSUNzZ2MzVm1abWw0WFZ4dUlDQmpZV1lnUFNCeWIyOTBXM1psYm1SdmNuTmJhVjBnS3lBblEyRnVZMlZzSnlBcklITjFabVpwZUYxY2JpQWdJQ0FnSUh4OElISnZiM1JiZG1WdVpHOXljMXRwWFNBcklDZERZVzVqWld4U1pYRjFaWE4wSnlBcklITjFabVpwZUYxY2JuMWNibHh1THk4Z1UyOXRaU0IyWlhKemFXOXVjeUJ2WmlCR1JpQm9ZWFpsSUhKQlJpQmlkWFFnYm05MElHTkJSbHh1YVdZb0lYSmhaaUI4ZkNBaFkyRm1LU0I3WEc0Z0lIWmhjaUJzWVhOMElEMGdNRnh1SUNBZ0lDd2dhV1FnUFNBd1hHNGdJQ0FnTENCeGRXVjFaU0E5SUZ0ZFhHNGdJQ0FnTENCbWNtRnRaVVIxY21GMGFXOXVJRDBnTVRBd01DQXZJRFl3WEc1Y2JpQWdjbUZtSUQwZ1puVnVZM1JwYjI0b1kyRnNiR0poWTJzcElIdGNiaUFnSUNCcFppaHhkV1YxWlM1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJSFpoY2lCZmJtOTNJRDBnYm05M0tDbGNiaUFnSUNBZ0lDQWdMQ0J1WlhoMElEMGdUV0YwYUM1dFlYZ29NQ3dnWm5KaGJXVkVkWEpoZEdsdmJpQXRJQ2hmYm05M0lDMGdiR0Z6ZENrcFhHNGdJQ0FnSUNCc1lYTjBJRDBnYm1WNGRDQXJJRjl1YjNkY2JpQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCamNDQTlJSEYxWlhWbExuTnNhV05sS0RBcFhHNGdJQ0FnSUNBZ0lDOHZJRU5zWldGeUlIRjFaWFZsSUdobGNtVWdkRzhnY0hKbGRtVnVkRnh1SUNBZ0lDQWdJQ0F2THlCallXeHNZbUZqYTNNZ1puSnZiU0JoY0hCbGJtUnBibWNnYkdsemRHVnVaWEp6WEc0Z0lDQWdJQ0FnSUM4dklIUnZJSFJvWlNCamRYSnlaVzUwSUdaeVlXMWxKM01nY1hWbGRXVmNiaUFnSUNBZ0lDQWdjWFZsZFdVdWJHVnVaM1JvSUQwZ01GeHVJQ0FnSUNBZ0lDQm1iM0lvZG1GeUlHa2dQU0F3T3lCcElEd2dZM0F1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlnaFkzQmJhVjB1WTJGdVkyVnNiR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwY25sN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOd1cybGRMbU5oYkd4aVlXTnJLR3hoYzNRcFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdOaGRHTm9LR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlncElIc2dkR2h5YjNjZ1pTQjlMQ0F3S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZTd2dUV0YwYUM1eWIzVnVaQ2h1WlhoMEtTbGNiaUFnSUNCOVhHNGdJQ0FnY1hWbGRXVXVjSFZ6YUNoN1hHNGdJQ0FnSUNCb1lXNWtiR1U2SUNzcmFXUXNYRzRnSUNBZ0lDQmpZV3hzWW1GamF6b2dZMkZzYkdKaFkyc3NYRzRnSUNBZ0lDQmpZVzVqWld4c1pXUTZJR1poYkhObFhHNGdJQ0FnZlNsY2JpQWdJQ0J5WlhSMWNtNGdhV1JjYmlBZ2ZWeHVYRzRnSUdOaFppQTlJR1oxYm1OMGFXOXVLR2hoYm1Sc1pTa2dlMXh1SUNBZ0lHWnZjaWgyWVhJZ2FTQTlJREE3SUdrZ1BDQnhkV1YxWlM1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdhV1lvY1hWbGRXVmJhVjB1YUdGdVpHeGxJRDA5UFNCb1lXNWtiR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1ZiYVYwdVkyRnVZMlZzYkdWa0lEMGdkSEoxWlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dadUtTQjdYRzRnSUM4dklGZHlZWEFnYVc0Z1lTQnVaWGNnWm5WdVkzUnBiMjRnZEc4Z2NISmxkbVZ1ZEZ4dUlDQXZMeUJnWTJGdVkyVnNZQ0J3YjNSbGJuUnBZV3hzZVNCaVpXbHVaeUJoYzNOcFoyNWxaRnh1SUNBdkx5QjBieUIwYUdVZ2JtRjBhWFpsSUhKQlJpQm1kVzVqZEdsdmJseHVJQ0J5WlhSMWNtNGdjbUZtTG1OaGJHd29jbTl2ZEN3Z1ptNHBYRzU5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeTVqWVc1alpXd2dQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdZMkZtTG1Gd2NHeDVLSEp2YjNRc0lHRnlaM1Z0Wlc1MGN5bGNibjFjYm0xdlpIVnNaUzVsZUhCdmNuUnpMbkJ2YkhsbWFXeHNJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJSEp2YjNRdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJRDBnY21GbVhHNGdJSEp2YjNRdVkyRnVZMlZzUVc1cGJXRjBhVzl1Um5KaGJXVWdQU0JqWVdaY2JuMWNiaUlzSWk4cUtseHVLaUJRWVhKaGJHeGhlQzVxYzF4dUtpQkFZWFYwYUc5eUlFMWhkSFJvWlhjZ1YyRm5aWEptYVdWc1pDQXRJRUIzWVdkbGNtWnBaV3hrTENCU1pXN0RxU0JTYjNSb0lDMGdiV0ZwYkVCeVpXNWxjbTkwYUM1dmNtZGNiaW9nUUdSbGMyTnlhWEIwYVc5dUlFTnlaV0YwWlhNZ1lTQndZWEpoYkd4aGVDQmxabVpsWTNRZ1ltVjBkMlZsYmlCaGJpQmhjbkpoZVNCdlppQnNZWGxsY25Nc1hHNHFJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2NtbDJhVzVuSUhSb1pTQnRiM1JwYjI0Z1puSnZiU0IwYUdVZ1ozbHliM05qYjNCbElHOTFkSEIxZENCdlppQmhJSE50WVhKMFpHVjJhV05sTGx4dUtpQWdJQ0FnSUNBZ0lDQWdJQ0FnU1dZZ2JtOGdaM2x5YjNOamIzQmxJR2x6SUdGMllXbHNZV0pzWlN3Z2RHaGxJR04xY25OdmNpQndiM05wZEdsdmJpQnBjeUIxYzJWa0xseHVLaTljYmx4dVkyOXVjM1FnY25GQmJrWnlJRDBnY21WeGRXbHlaU2duY21GbUp5bGNibU52Ym5OMElHOWlhbVZqZEVGemMybG5iaUE5SUhKbGNYVnBjbVVvSjI5aWFtVmpkQzFoYzNOcFoyNG5LVnh1WEc1amIyNXpkQ0JvWld4d1pYSnpJRDBnZTF4dUlDQndjbTl3WlhKMGVVTmhZMmhsT2lCN2ZTeGNiaUFnZG1WdVpHOXljem9nVzI1MWJHd3NJRnNuTFhkbFltdHBkQzBuTENkM1pXSnJhWFFuWFN3Z1d5Y3RiVzk2TFNjc0owMXZlaWRkTENCYkp5MXZMU2NzSjA4blhTd2dXeWN0YlhNdEp5d25iWE1uWFYwc1hHNWNiaUFnWTJ4aGJYQW9kbUZzZFdVc0lHMXBiaXdnYldGNEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUcxcGJpQThJRzFoZUZ4dUlDQWdJQ0FnUHlBb2RtRnNkV1VnUENCdGFXNGdQeUJ0YVc0Z09pQjJZV3gxWlNBK0lHMWhlQ0EvSUcxaGVDQTZJSFpoYkhWbEtWeHVJQ0FnSUNBZ09pQW9kbUZzZFdVZ1BDQnRZWGdnUHlCdFlYZ2dPaUIyWVd4MVpTQStJRzFwYmlBL0lHMXBiaUE2SUhaaGJIVmxLVnh1SUNCOUxGeHVYRzRnSUdSaGRHRW9aV3hsYldWdWRDd2dibUZ0WlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJvWld4d1pYSnpMbVJsYzJWeWFXRnNhWHBsS0dWc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtDZGtZWFJoTFNjcmJtRnRaU2twWEc0Z0lIMHNYRzVjYmlBZ1pHVnpaWEpwWVd4cGVtVW9kbUZzZFdVcElIdGNiaUFnSUNCcFppQW9kbUZzZFdVZ1BUMDlJQ2QwY25WbEp5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1ZjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkhWbElEMDlQU0FuWm1Gc2MyVW5LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJWY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0haaGJIVmxJRDA5UFNBbmJuVnNiQ2NwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGFYTk9ZVTRvY0dGeWMyVkdiRzloZENoMllXeDFaU2twSUNZbUlHbHpSbWx1YVhSbEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhCaGNuTmxSbXh2WVhRb2RtRnNkV1VwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMllXeDFaVnh1SUNBZ0lIMWNiaUFnZlN4Y2JseHVJQ0JqWVcxbGJFTmhjMlVvZG1Gc2RXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RtRnNkV1V1Y21Wd2JHRmpaU2d2TFNzb0xpay9MMmNzSUNodFlYUmphQ3dnWTJoaGNtRmpkR1Z5S1NBOVBpQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1kyaGhjbUZqZEdWeUlEOGdZMmhoY21GamRHVnlMblJ2VlhCd1pYSkRZWE5sS0NrZ09pQW5KMXh1SUNBZ0lIMHBYRzRnSUgwc1hHNWNiaUFnWVdOalpXeGxjbUYwWlNobGJHVnRaVzUwS1NCN1hHNGdJQ0FnYUdWc2NHVnljeTVqYzNNb1pXeGxiV1Z1ZEN3Z0ozUnlZVzV6Wm05eWJTY3NJQ2QwY21GdWMyeGhkR1V6WkNnd0xEQXNNQ2tnY205MFlYUmxLREF1TURBd01XUmxaeWtuS1Z4dUlDQWdJR2hsYkhCbGNuTXVZM056S0dWc1pXMWxiblFzSUNkMGNtRnVjMlp2Y20wdGMzUjViR1VuTENBbmNISmxjMlZ5ZG1VdE0yUW5LVnh1SUNBZ0lHaGxiSEJsY25NdVkzTnpLR1ZzWlcxbGJuUXNJQ2RpWVdOclptRmpaUzEyYVhOcFltbHNhWFI1Snl3Z0oyaHBaR1JsYmljcFhHNGdJSDBzWEc1Y2JpQWdkSEpoYm5ObWIzSnRVM1Z3Y0c5eWRDaDJZV3gxWlNrZ2UxeHVJQ0FnSUd4bGRDQmxiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWtzWEc0Z0lDQWdJQ0FnSUhCeWIzQmxjblI1VTNWd2NHOXlkQ0E5SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0J3Y205d1pYSjBlVlpoYkhWbElEMGdiblZzYkN4Y2JpQWdJQ0FnSUNBZ1ptVmhkSFZ5WlZOMWNIQnZjblFnUFNCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnWTNOelVISnZjR1Z5ZEhrZ1BTQnVkV3hzTEZ4dUlDQWdJQ0FnSUNCcWMxQnliM0JsY25SNUlEMGdiblZzYkZ4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd0xDQnNJRDBnYUdWc2NHVnljeTUyWlc1a2IzSnpMbXhsYm1kMGFEc2dhU0E4SUd3N0lHa3JLeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHaGxiSEJsY25NdWRtVnVaRzl5YzF0cFhTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0JqYzNOUWNtOXdaWEowZVNBOUlHaGxiSEJsY25NdWRtVnVaRzl5YzF0cFhWc3dYU0FySUNkMGNtRnVjMlp2Y20wblhHNGdJQ0FnSUNBZ0lHcHpVSEp2Y0dWeWRIa2dQU0JvWld4d1pYSnpMblpsYm1SdmNuTmJhVjFiTVYwZ0t5QW5WSEpoYm5ObWIzSnRKMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdZM056VUhKdmNHVnlkSGtnUFNBbmRISmhibk5tYjNKdEoxeHVJQ0FnSUNBZ0lDQnFjMUJ5YjNCbGNuUjVJRDBnSjNSeVlXNXpabTl5YlNkY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsbUlDaGxiR1Z0Wlc1MExuTjBlV3hsVzJwelVISnZjR1Z5ZEhsZElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjR1Z5ZEhsVGRYQndiM0owSUQwZ2RISjFaVnh1SUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J6ZDJsMFkyZ29kbUZzZFdVcElIdGNiaUFnSUNBZ0lHTmhjMlVnSnpKRUp6cGNiaUFnSUNBZ0lDQWdabVZoZEhWeVpWTjFjSEJ2Y25RZ1BTQndjbTl3WlhKMGVWTjFjSEJ2Y25SY2JpQWdJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQWdJR05oYzJVZ0p6TkVKenBjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnliM0JsY25SNVUzVndjRzl5ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJR3hsZENCaWIyUjVJRDBnWkc5amRXMWxiblF1WW05a2VTQjhmQ0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGliMlI1Snlrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUlBkbVZ5Wm14dmR5QTlJR1J2WTNWdFpXNTBSV3hsYldWdWRDNXpkSGxzWlM1dmRtVnlabXh2ZHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhORGNtVmhkR1ZrUW05a2VTQTlJR1poYkhObFhHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb0lXUnZZM1Z0Wlc1MExtSnZaSGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2x6UTNKbFlYUmxaRUp2WkhrZ1BTQjBjblZsWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRFVnNaVzFsYm5RdWMzUjViR1V1YjNabGNtWnNiM2NnUFNBbmFHbGtaR1Z1SjF4dUlDQWdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR0p2WkhrcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JpYjJSNUxuTjBlV3hsTG05MlpYSm1iRzkzSUQwZ0oyaHBaR1JsYmlkY2JpQWdJQ0FnSUNBZ0lDQWdJR0p2WkhrdWMzUjViR1V1WW1GamEyZHliM1Z1WkNBOUlDY25YRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdZbTlrZVM1aGNIQmxibVJEYUdsc1pDaGxiR1Z0Wlc1MEtWeHVJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdWYmFuTlFjbTl3WlhKMGVWMGdQU0FuZEhKaGJuTnNZWFJsTTJRb01YQjRMREZ3ZUN3eGNIZ3BKMXh1SUNBZ0lDQWdJQ0FnSUhCeWIzQmxjblI1Vm1Gc2RXVWdQU0IzYVc1a2IzY3VaMlYwUTI5dGNIVjBaV1JUZEhsc1pTaGxiR1Z0Wlc1MEtTNW5aWFJRY205d1pYSjBlVlpoYkhWbEtHTnpjMUJ5YjNCbGNuUjVLVnh1SUNBZ0lDQWdJQ0FnSUdabFlYUjFjbVZUZFhCd2IzSjBJRDBnY0hKdmNHVnlkSGxXWVd4MVpTQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlIQnliM0JsY25SNVZtRnNkV1V1YkdWdVozUm9JRDRnTUNBbUppQndjbTl3WlhKMGVWWmhiSFZsSUNFOVBTQW5ibTl1WlNkY2JpQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRFVnNaVzFsYm5RdWMzUjViR1V1YjNabGNtWnNiM2NnUFNCa2IyTjFiV1Z1ZEU5MlpYSm1iRzkzWEc0Z0lDQWdJQ0FnSUNBZ1ltOWtlUzV5WlcxdmRtVkRhR2xzWkNobGJHVnRaVzUwS1Z4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0NCcGMwTnlaV0YwWldSQ2IyUjVJQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZbTlrZVM1eVpXMXZkbVZCZEhSeWFXSjFkR1VvSjNOMGVXeGxKeWxjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZaSGt1Y0dGeVpXNTBUbTlrWlM1eVpXMXZkbVZEYUdsc1pDaGliMlI1S1Z4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdabVZoZEhWeVpWTjFjSEJ2Y25SY2JpQWdmU3hjYmx4dUlDQmpjM01vWld4bGJXVnVkQ3dnY0hKdmNHVnlkSGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdiR1YwSUdwelVISnZjR1Z5ZEhrZ1BTQm9aV3h3WlhKekxuQnliM0JsY25SNVEyRmphR1ZiY0hKdmNHVnlkSGxkWEc0Z0lDQWdhV1lnS0NGcWMxQnliM0JsY25SNUtTQjdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTUN3Z2JDQTlJR2hsYkhCbGNuTXVkbVZ1Wkc5eWN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHaGxiSEJsY25NdWRtVnVaRzl5YzF0cFhTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUdwelVISnZjR1Z5ZEhrZ1BTQm9aV3h3WlhKekxtTmhiV1ZzUTJGelpTaG9aV3h3WlhKekxuWmxibVJ2Y25OYmFWMWJNVjBnS3lBbkxTY2dLeUJ3Y205d1pYSjBlU2xjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCcWMxQnliM0JsY25SNUlEMGdjSEp2Y0dWeWRIbGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JwWmlBb1pXeGxiV1Z1ZEM1emRIbHNaVnRxYzFCeWIzQmxjblI1WFNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FHVnNjR1Z5Y3k1d2NtOXdaWEowZVVOaFkyaGxXM0J5YjNCbGNuUjVYU0E5SUdwelVISnZjR1Z5ZEhsY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJR1ZzWlcxbGJuUXVjM1I1YkdWYmFuTlFjbTl3WlhKMGVWMGdQU0IyWVd4MVpWeHVJQ0I5WEc1Y2JuMWNibHh1WTI5dWMzUWdUVUZIU1VOZlRsVk5Ra1ZTSUQwZ016QXNYRzRnSUNBZ0lDQkVSVVpCVlV4VVV5QTlJSHRjYmlBZ0lDQWdJQ0FnY21Wc1lYUnBkbVZKYm5CMWREb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lHTnNhWEJTWld4aGRHbDJaVWx1Y0hWME9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ2FXNXdkWFJGYkdWdFpXNTBPaUJ1ZFd4c0xGeHVJQ0FnSUNBZ0lDQm9iM1psY2s5dWJIazZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQmpZV3hwWW5KaGRHbHZibFJvY21WemFHOXNaRG9nTVRBd0xGeHVJQ0FnSUNBZ0lDQmpZV3hwWW5KaGRHbHZia1JsYkdGNU9pQTFNREFzWEc0Z0lDQWdJQ0FnSUhOMWNIQnZjblJFWld4aGVUb2dOVEF3TEZ4dUlDQWdJQ0FnSUNCallXeHBZbkpoZEdWWU9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ1kyRnNhV0p5WVhSbFdUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2FXNTJaWEowV0RvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnYVc1MlpYSjBXVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdiR2x0YVhSWU9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ2JHbHRhWFJaT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnYzJOaGJHRnlXRG9nTVRBdU1DeGNiaUFnSUNBZ0lDQWdjMk5oYkdGeVdUb2dNVEF1TUN4Y2JpQWdJQ0FnSUNBZ1puSnBZM1JwYjI1WU9pQXdMakVzWEc0Z0lDQWdJQ0FnSUdaeWFXTjBhVzl1V1RvZ01DNHhMRnh1SUNBZ0lDQWdJQ0J2Y21sbmFXNVlPaUF3TGpVc1hHNGdJQ0FnSUNBZ0lHOXlhV2RwYmxrNklEQXVOU3hjYmlBZ0lDQWdJQ0FnY0c5cGJuUmxja1YyWlc1MGN6b2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lIQnlaV05wYzJsdmJqb2dNU3hjYmlBZ0lDQWdJQ0FnYjI1U1pXRmtlVG9nYm5Wc2JDeGNiaUFnSUNBZ0lDQWdjMlZzWldOMGIzSTZJRzUxYkd4Y2JpQWdJQ0FnSUgxY2JseHVZMnhoYzNNZ1VHRnlZV3hzWVhnZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lobGJHVnRaVzUwTENCdmNIUnBiMjV6S1NCN1hHNWNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUWdQU0JsYkdWdFpXNTBYRzVjYmlBZ0lDQmpiMjV6ZENCa1lYUmhJRDBnZTF4dUlDQWdJQ0FnWTJGc2FXSnlZWFJsV0RvZ2FHVnNjR1Z5Y3k1a1lYUmhLSFJvYVhNdVpXeGxiV1Z1ZEN3Z0oyTmhiR2xpY21GMFpTMTRKeWtzWEc0Z0lDQWdJQ0JqWVd4cFluSmhkR1ZaT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBblkyRnNhV0p5WVhSbExYa25LU3hjYmlBZ0lDQWdJR2x1ZG1WeWRGZzZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RwYm5abGNuUXRlQ2NwTEZ4dUlDQWdJQ0FnYVc1MlpYSjBXVG9nYUdWc2NHVnljeTVrWVhSaEtIUm9hWE11Wld4bGJXVnVkQ3dnSjJsdWRtVnlkQzE1Snlrc1hHNGdJQ0FnSUNCc2FXMXBkRmc2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkc2FXMXBkQzE0Snlrc1hHNGdJQ0FnSUNCc2FXMXBkRms2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkc2FXMXBkQzE1Snlrc1hHNGdJQ0FnSUNCelkyRnNZWEpZT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmMyTmhiR0Z5TFhnbktTeGNiaUFnSUNBZ0lITmpZV3hoY2xrNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHpZMkZzWVhJdGVTY3BMRnh1SUNBZ0lDQWdabkpwWTNScGIyNVlPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWm5KcFkzUnBiMjR0ZUNjcExGeHVJQ0FnSUNBZ1puSnBZM1JwYjI1Wk9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5abkpwWTNScGIyNHRlU2NwTEZ4dUlDQWdJQ0FnYjNKcFoybHVXRG9nYUdWc2NHVnljeTVrWVhSaEtIUm9hWE11Wld4bGJXVnVkQ3dnSjI5eWFXZHBiaTE0Snlrc1hHNGdJQ0FnSUNCdmNtbG5hVzVaT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmIzSnBaMmx1TFhrbktTeGNiaUFnSUNBZ0lIQnZhVzUwWlhKRmRtVnVkSE02SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkd2IybHVkR1Z5TFdWMlpXNTBjeWNwTEZ4dUlDQWdJQ0FnY0hKbFkybHphVzl1T2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmNISmxZMmx6YVc5dUp5a3NYRzRnSUNBZ0lDQnlaV3hoZEdsMlpVbHVjSFYwT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmNtVnNZWFJwZG1VdGFXNXdkWFFuS1N4Y2JpQWdJQ0FnSUdOc2FYQlNaV3hoZEdsMlpVbHVjSFYwT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBblkyeHBjQzF5Wld4aGRHbDJaUzFwYm5CMWRDY3BMRnh1SUNBZ0lDQWdhRzkyWlhKUGJteDVPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYUc5MlpYSXRiMjVzZVNjcExGeHVJQ0FnSUNBZ2FXNXdkWFJGYkdWdFpXNTBPaUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHBibkIxZEMxbGJHVnRaVzUwSnlrcExGeHVJQ0FnSUNBZ2MyVnNaV04wYjNJNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHpaV3hsWTNSdmNpY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdSaGRHRXBJSHRjYmlBZ0lDQWdJR2xtSUNoa1lYUmhXMnRsZVYwZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdaR1ZzWlhSbElHUmhkR0ZiYTJWNVhWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUc5aWFtVmpkRUZ6YzJsbmJpaDBhR2x6TENCRVJVWkJWVXhVVXl3Z1pHRjBZU3dnYjNCMGFXOXVjeWxjYmx4dUlDQWdJR2xtS0NGMGFHbHpMbWx1Y0hWMFJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFVnNaVzFsYm5RZ1BTQjBhR2x6TG1Wc1pXMWxiblJjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVZHbHRaWElnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVqWVd4cFluSmhkR2x2Ymtac1lXY2dQU0IwY25WbFhHNGdJQ0FnZEdocGN5NWxibUZpYkdWa0lEMGdabUZzYzJWY2JpQWdJQ0IwYUdsekxtUmxjSFJvYzFnZ1BTQmJYVnh1SUNBZ0lIUm9hWE11WkdWd2RHaHpXU0E5SUZ0ZFhHNGdJQ0FnZEdocGN5NXlZV1lnUFNCdWRXeHNYRzVjYmlBZ0lDQjBhR2x6TG1KdmRXNWtjeUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsZ2dQU0F3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVaSUQwZ01GeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGZHBaSFJvSUQwZ01GeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRFaGxhV2RvZENBOUlEQmNibHh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRU5sYm5SbGNsZ2dQU0F3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwUTJWdWRHVnlXU0E5SURCY2JseHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGSmhibWRsV0NBOUlEQmNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUlNZVzVuWlZrZ1BTQXdYRzVjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVdDQTlJREJjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVdTQTlJREJjYmx4dUlDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ01GeHVJQ0FnSUhSb2FYTXVhVzV3ZFhSWklEMGdNRnh1WEc0Z0lDQWdkR2hwY3k1dGIzUnBiMjVZSUQwZ01GeHVJQ0FnSUhSb2FYTXViVzkwYVc5dVdTQTlJREJjYmx4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhsWUlEMGdNRnh1SUNBZ0lIUm9hWE11ZG1Wc2IyTnBkSGxaSUQwZ01GeHVYRzRnSUNBZ2RHaHBjeTV2YmsxdmRYTmxUVzkyWlNBOUlIUm9hWE11YjI1TmIzVnpaVTF2ZG1VdVltbHVaQ2gwYUdsektWeHVJQ0FnSUhSb2FYTXViMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaUE5SUhSb2FYTXViMjVFWlhacFkyVlBjbWxsYm5SaGRHbHZiaTVpYVc1a0tIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1dmJrUmxkbWxqWlUxdmRHbHZiaUE5SUhSb2FYTXViMjVFWlhacFkyVk5iM1JwYjI0dVltbHVaQ2gwYUdsektWeHVJQ0FnSUhSb2FYTXViMjVQY21sbGJuUmhkR2x2YmxScGJXVnlJRDBnZEdocGN5NXZiazl5YVdWdWRHRjBhVzl1VkdsdFpYSXVZbWx1WkNoMGFHbHpLVnh1SUNBZ0lIUm9hWE11YjI1TmIzUnBiMjVVYVcxbGNpQTlJSFJvYVhNdWIyNU5iM1JwYjI1VWFXMWxjaTVpYVc1a0tIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1dmJrTmhiR2xpY21GMGFXOXVWR2x0WlhJZ1BTQjBhR2x6TG05dVEyRnNhV0p5WVhScGIyNVVhVzFsY2k1aWFXNWtLSFJvYVhNcFhHNGdJQ0FnZEdocGN5NXZia0Z1YVcxaGRHbHZia1p5WVcxbElEMGdkR2hwY3k1dmJrRnVhVzFoZEdsdmJrWnlZVzFsTG1KcGJtUW9kR2hwY3lsY2JpQWdJQ0IwYUdsekxtOXVWMmx1Wkc5M1VtVnphWHBsSUQwZ2RHaHBjeTV2YmxkcGJtUnZkMUpsYzJsNlpTNWlhVzVrS0hSb2FYTXBYRzVjYmlBZ0lDQjBhR2x6TG5kcGJtUnZkMWRwWkhSb0lEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdWQybHVaRzkzU0dWcFoyaDBJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVkMmx1Wkc5M1EyVnVkR1Z5V0NBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsa2dQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NTNhVzVrYjNkU1lXUnBkWE5ZSUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11ZDJsdVpHOTNVbUZrYVhWeldTQTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxuQnZjblJ5WVdsMElEMGdabUZzYzJWY2JpQWdJQ0IwYUdsekxtUmxjMnQwYjNBZ1BTQWhibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzV0WVhSamFDZ3ZLR2xRYUc5dVpYeHBVRzlrZkdsUVlXUjhRVzVrY205cFpIeENiR0ZqYTBKbGNuSjVmRUpDTVRCOGJXOWlhWHgwWVdKc1pYUjhiM0JsY21FZ2JXbHVhWHh1WlhoMWN5QTNLUzlwS1Z4dUlDQWdJSFJvYVhNdWJXOTBhVzl1VTNWd2NHOXlkQ0E5SUNFaGQybHVaRzkzTGtSbGRtbGpaVTF2ZEdsdmJrVjJaVzUwSUNZbUlDRjBhR2x6TG1SbGMydDBiM0JjYmlBZ0lDQjBhR2x6TG05eWFXVnVkR0YwYVc5dVUzVndjRzl5ZENBOUlDRWhkMmx1Wkc5M0xrUmxkbWxqWlU5eWFXVnVkR0YwYVc5dVJYWmxiblFnSmlZZ0lYUm9hWE11WkdWemEzUnZjRnh1SUNBZ0lIUm9hWE11YjNKcFpXNTBZWFJwYjI1VGRHRjBkWE1nUFNBd1hHNGdJQ0FnZEdocGN5NXRiM1JwYjI1VGRHRjBkWE1nUFNBd1hHNWNiaUFnSUNCMGFHbHpMbWx1YVhScFlXeHBjMlVvS1Z4dUlDQjlYRzVjYmlBZ2FXNXBkR2xoYkdselpTZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NTBjbUZ1YzJadmNtMHlSRk4xY0hCdmNuUWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTUwY21GdWMyWnZjbTB5UkZOMWNIQnZjblFnUFNCb1pXeHdaWEp6TG5SeVlXNXpabTl5YlZOMWNIQnZjblFvSnpKRUp5bGNiaUFnSUNBZ0lIUm9hWE11ZEhKaGJuTm1iM0p0TTBSVGRYQndiM0owSUQwZ2FHVnNjR1Z5Y3k1MGNtRnVjMlp2Y20xVGRYQndiM0owS0NjelJDY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRMjl1Wm1sbmRYSmxJRU52Ym5SbGVIUWdVM1I1YkdWelhHNGdJQ0FnYVdZZ0tIUm9hWE11ZEhKaGJuTm1iM0p0TTBSVGRYQndiM0owS1NCN1hHNGdJQ0FnSUNCb1pXeHdaWEp6TG1GalkyVnNaWEpoZEdVb2RHaHBjeTVsYkdWdFpXNTBLVnh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0J6ZEhsc1pTQTlJSGRwYm1SdmR5NW5aWFJEYjIxd2RYUmxaRk4wZVd4bEtIUm9hWE11Wld4bGJXVnVkQ2xjYmlBZ0lDQnBaaUFvYzNSNWJHVXVaMlYwVUhKdmNHVnlkSGxXWVd4MVpTZ25jRzl6YVhScGIyNG5LU0E5UFQwZ0ozTjBZWFJwWXljcElIdGNiaUFnSUNBZ0lIUm9hWE11Wld4bGJXVnVkQzV6ZEhsc1pTNXdiM05wZEdsdmJpQTlJQ2R5Wld4aGRHbDJaU2RjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJRYjJsdWRHVnlJR1YyWlc1MGMxeHVJQ0FnSUdsbUtDRjBhR2x6TG5CdmFXNTBaWEpGZG1WdWRITXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVpXeGxiV1Z1ZEM1emRIbHNaUzV3YjJsdWRHVnlSWFpsYm5SeklEMGdKMjV2Ym1VblhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1UyVjBkWEJjYmlBZ0lDQjBhR2x6TG5Wd1pHRjBaVXhoZVdWeWN5Z3BYRzRnSUNBZ2RHaHBjeTUxY0dSaGRHVkVhVzFsYm5OcGIyNXpLQ2xjYmlBZ0lDQjBhR2x6TG1WdVlXSnNaU2dwWEc0Z0lDQWdkR2hwY3k1eGRXVjFaVU5oYkdsaWNtRjBhVzl1S0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVFWld4aGVTbGNiaUFnZlZ4dVhHNGdJR1J2VW1WaFpIbERZV3hzWW1GamF5Z3BJSHRjYmlBZ0lDQnBaaWgwYUdsekxtOXVVbVZoWkhrcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1U1pXRmtlU2dwWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnZFhCa1lYUmxUR0Y1WlhKektDa2dlMXh1SUNBZ0lHbG1LSFJvYVhNdWMyVnNaV04wYjNJcElIdGNiaUFnSUNBZ0lIUm9hWE11YkdGNVpYSnpJRDBnZEdocGN5NWxiR1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b2RHaHBjeTV6Wld4bFkzUnZjaWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzWVhsbGNuTWdQU0IwYUdsekxtVnNaVzFsYm5RdVkyaHBiR1J5Wlc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlnaGRHaHBjeTVzWVhsbGNuTXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQmpiMjV6YjJ4bExuZGhjbTRvSjFCaGNtRnNiR0Y0U2xNNklGbHZkWElnYzJObGJtVWdaRzlsY3lCdWIzUWdhR0YyWlNCaGJua2diR0Y1WlhKekxpY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTVrWlhCMGFITllJRDBnVzExY2JpQWdJQ0IwYUdsekxtUmxjSFJvYzFrZ1BTQmJYVnh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhVzVrWlhnZ1BTQXdPeUJwYm1SbGVDQThJSFJvYVhNdWJHRjVaWEp6TG14bGJtZDBhRHNnYVc1a1pYZ3JLeWtnZTF4dUlDQWdJQ0FnYkdWMElHeGhlV1Z5SUQwZ2RHaHBjeTVzWVhsbGNuTmJhVzVrWlhoZFhHNWNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuUnlZVzV6Wm05eWJUTkVVM1Z3Y0c5eWRDa2dlMXh1SUNBZ0lDQWdJQ0JvWld4d1pYSnpMbUZqWTJWc1pYSmhkR1VvYkdGNVpYSXBYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR3hoZVdWeUxuTjBlV3hsTG5CdmMybDBhVzl1SUQwZ2FXNWtaWGdnUHlBbllXSnpiMngxZEdVbklEb2dKM0psYkdGMGFYWmxKMXh1SUNBZ0lDQWdiR0Y1WlhJdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkaWJHOWpheWRjYmlBZ0lDQWdJR3hoZVdWeUxuTjBlV3hsTG14bFpuUWdQU0F3WEc0Z0lDQWdJQ0JzWVhsbGNpNXpkSGxzWlM1MGIzQWdQU0F3WEc1Y2JpQWdJQ0FnSUd4bGRDQmtaWEIwYUNBOUlHaGxiSEJsY25NdVpHRjBZU2hzWVhsbGNpd2dKMlJsY0hSb0p5a2dmSHdnTUZ4dUlDQWdJQ0FnZEdocGN5NWtaWEIwYUhOWUxuQjFjMmdvYUdWc2NHVnljeTVrWVhSaEtHeGhlV1Z5TENBblpHVndkR2d0ZUNjcElIeDhJR1JsY0hSb0tWeHVJQ0FnSUNBZ2RHaHBjeTVrWlhCMGFITlpMbkIxYzJnb2FHVnNjR1Z5Y3k1a1lYUmhLR3hoZVdWeUxDQW5aR1Z3ZEdndGVTY3BJSHg4SUdSbGNIUm9LVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpVUnBiV1Z1YzJsdmJuTW9LU0I3WEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RYYVdSMGFDQTlJSGRwYm1SdmR5NXBibTVsY2xkcFpIUm9YRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZElaV2xuYUhRZ1BTQjNhVzVrYjNjdWFXNXVaWEpJWldsbmFIUmNiaUFnSUNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xnZ1BTQjBhR2x6TG5kcGJtUnZkMWRwWkhSb0lDb2dkR2hwY3k1dmNtbG5hVzVZWEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2REWlc1MFpYSlpJRDBnZEdocGN5NTNhVzVrYjNkSVpXbG5hSFFnS2lCMGFHbHpMbTl5YVdkcGJsbGNiaUFnSUNCMGFHbHpMbmRwYm1SdmQxSmhaR2wxYzFnZ1BTQk5ZWFJvTG0xaGVDaDBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ3NJSFJvYVhNdWQybHVaRzkzVjJsa2RHZ2dMU0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGdwWEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTlpJRDBnVFdGMGFDNXRZWGdvZEdocGN5NTNhVzVrYjNkRFpXNTBaWEpaTENCMGFHbHpMbmRwYm1SdmQwaGxhV2RvZENBdElIUm9hWE11ZDJsdVpHOTNRMlZ1ZEdWeVdTbGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpVSnZkVzVrY3lncElIdGNiaUFnSUNCMGFHbHpMbUp2ZFc1a2N5QTlJSFJvYVhNdWFXNXdkWFJGYkdWdFpXNTBMbWRsZEVKdmRXNWthVzVuUTJ4cFpXNTBVbVZqZENncFhHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WUlEMGdkR2hwY3k1aWIzVnVaSE11YkdWbWRGeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGQnZjMmwwYVc5dVdTQTlJSFJvYVhNdVltOTFibVJ6TG5SdmNGeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGZHBaSFJvSUQwZ2RHaHBjeTVpYjNWdVpITXVkMmxrZEdoY2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SSVpXbG5hSFFnUFNCMGFHbHpMbUp2ZFc1a2N5NW9aV2xuYUhSY2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpZSUQwZ2RHaHBjeTVsYkdWdFpXNTBWMmxrZEdnZ0tpQjBhR2x6TG05eWFXZHBibGhjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJEWlc1MFpYSlpJRDBnZEdocGN5NWxiR1Z0Wlc1MFNHVnBaMmgwSUNvZ2RHaHBjeTV2Y21sbmFXNVpYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBVbUZ1WjJWWUlEMGdUV0YwYUM1dFlYZ29kR2hwY3k1bGJHVnRaVzUwUTJWdWRHVnlXQ3dnZEdocGN5NWxiR1Z0Wlc1MFYybGtkR2dnTFNCMGFHbHpMbVZzWlcxbGJuUkRaVzUwWlhKWUtWeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRGSmhibWRsV1NBOUlFMWhkR2d1YldGNEtIUm9hWE11Wld4bGJXVnVkRU5sYm5SbGNsa3NJSFJvYVhNdVpXeGxiV1Z1ZEVobGFXZG9kQ0F0SUhSb2FYTXVaV3hsYldWdWRFTmxiblJsY2xrcFhHNGdJSDFjYmx4dUlDQnhkV1YxWlVOaGJHbGljbUYwYVc5dUtHUmxiR0Y1S1NCN1hHNGdJQ0FnWTJ4bFlYSlVhVzFsYjNWMEtIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFXMWxjaWxjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVZHbHRaWElnUFNCelpYUlVhVzFsYjNWMEtIUm9hWE11YjI1RFlXeHBZbkpoZEdsdmJsUnBiV1Z5TENCa1pXeGhlU2xjYmlBZ2ZWeHVYRzRnSUdWdVlXSnNaU2dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVsYm1GaWJHVmtLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NWxibUZpYkdWa0lEMGdkSEoxWlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjNKcFpXNTBZWFJwYjI1VGRYQndiM0owS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkJ2Y25SeVlXbDBJRDBnWm1Gc2MyVmNiaUFnSUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Nka1pYWnBZMlZ2Y21sbGJuUmhkR2x2Ymljc0lIUm9hWE11YjI1RVpYWnBZMlZQY21sbGJuUmhkR2x2YmlsY2JpQWdJQ0FnSUhSb2FYTXVaR1YwWldOMGFXOXVWR2x0WlhJZ1BTQnpaWFJVYVcxbGIzVjBLSFJvYVhNdWIyNVBjbWxsYm5SaGRHbHZibFJwYldWeUxDQjBhR2x6TG5OMWNIQnZjblJFWld4aGVTbGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIUm9hWE11Ylc5MGFXOXVVM1Z3Y0c5eWRDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1d2IzSjBjbUZwZENBOUlHWmhiSE5sWEc0Z0lDQWdJQ0IzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25aR1YyYVdObGJXOTBhVzl1Snl3Z2RHaHBjeTV2YmtSbGRtbGpaVTF2ZEdsdmJpbGNiaUFnSUNBZ0lIUm9hWE11WkdWMFpXTjBhVzl1VkdsdFpYSWdQU0J6WlhSVWFXMWxiM1YwS0hSb2FYTXViMjVOYjNScGIyNVVhVzFsY2l3Z2RHaHBjeTV6ZFhCd2IzSjBSR1ZzWVhrcFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyRnNhV0p5WVhScGIyNVlJRDBnTUZ4dUlDQWdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHbHZibGtnUFNBd1hHNGdJQ0FnSUNCMGFHbHpMbkJ2Y25SeVlXbDBJRDBnWm1Gc2MyVmNiaUFnSUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkdGIzVnpaVzF2ZG1VbkxDQjBhR2x6TG05dVRXOTFjMlZOYjNabEtWeHVJQ0FnSUNBZ2RHaHBjeTVrYjFKbFlXUjVRMkZzYkdKaFkyc29LVnh1SUNBZ0lIMWNibHh1SUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkeVpYTnBlbVVuTENCMGFHbHpMbTl1VjJsdVpHOTNVbVZ6YVhwbEtWeHVJQ0FnSUhSb2FYTXVjbUZtSUQwZ2NuRkJia1p5S0hSb2FYTXViMjVCYm1sdFlYUnBiMjVHY21GdFpTbGNiaUFnZlZ4dVhHNGdJR1JwYzJGaWJHVW9LU0I3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMbVZ1WVdKc1pXUXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxtVnVZV0pzWldRZ1BTQm1ZV3h6WlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjNKcFpXNTBZWFJwYjI1VGRYQndiM0owS1NCN1hHNGdJQ0FnSUNCM2FXNWtiM2N1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnblpHVjJhV05sYjNKcFpXNTBZWFJwYjI0bkxDQjBhR2x6TG05dVJHVjJhV05sVDNKcFpXNTBZWFJwYjI0cFhHNGdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHbHpMbTF2ZEdsdmJsTjFjSEJ2Y25RcElIdGNiaUFnSUNBZ0lIZHBibVJ2ZHk1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtDZGtaWFpwWTJWdGIzUnBiMjRuTENCMGFHbHpMbTl1UkdWMmFXTmxUVzkwYVc5dUtWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IzYVc1a2IzY3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduYlc5MWMyVnRiM1psSnl3Z2RHaHBjeTV2YmsxdmRYTmxUVzkyWlNsY2JpQWdJQ0I5WEc1Y2JpQWdJQ0IzYVc1a2IzY3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduY21WemFYcGxKeXdnZEdocGN5NXZibGRwYm1SdmQxSmxjMmw2WlNsY2JpQWdJQ0J5Y1VGdVJuSXVZMkZ1WTJWc0tIUm9hWE11Y21GbUtWeHVJQ0I5WEc1Y2JpQWdZMkZzYVdKeVlYUmxLSGdzSUhrcElIdGNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBaVmdnUFNCNElEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbU5oYkdsaWNtRjBaVmdnT2lCNFhHNGdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHVlpJRDBnZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NWpZV3hwWW5KaGRHVlpJRG9nZVZ4dUlDQjlYRzVjYmlBZ2FXNTJaWEowS0hnc0lIa3BJSHRjYmlBZ0lDQjBhR2x6TG1sdWRtVnlkRmdnUFNCNElEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbWx1ZG1WeWRGZ2dPaUI0WEc0Z0lDQWdkR2hwY3k1cGJuWmxjblJaSUQwZ2VTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTVwYm5abGNuUlpJRG9nZVZ4dUlDQjlYRzVjYmlBZ1puSnBZM1JwYjI0b2VDd2dlU2tnZTF4dUlDQWdJSFJvYVhNdVpuSnBZM1JwYjI1WUlEMGdlQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1bWNtbGpkR2x2YmxnZ09pQjRYRzRnSUNBZ2RHaHBjeTVtY21samRHbHZibGtnUFNCNUlEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbVp5YVdOMGFXOXVXU0E2SUhsY2JpQWdmVnh1WEc0Z0lITmpZV3hoY2loNExDQjVLU0I3WEc0Z0lDQWdkR2hwY3k1elkyRnNZWEpZSUQwZ2VDQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTV6WTJGc1lYSllJRG9nZUZ4dUlDQWdJSFJvYVhNdWMyTmhiR0Z5V1NBOUlIa2dQVDA5SUhWdVpHVm1hVzVsWkNBL0lIUm9hWE11YzJOaGJHRnlXU0E2SUhsY2JpQWdmVnh1WEc0Z0lHeHBiV2wwS0hnc0lIa3BJSHRjYmlBZ0lDQjBhR2x6TG14cGJXbDBXQ0E5SUhnZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhSb2FYTXViR2x0YVhSWUlEb2dlRnh1SUNBZ0lIUm9hWE11YkdsdGFYUlpJRDBnZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXNhVzFwZEZrZ09pQjVYRzRnSUgxY2JseHVJQ0J2Y21sbmFXNG9lQ3dnZVNrZ2UxeHVJQ0FnSUhSb2FYTXViM0pwWjJsdVdDQTlJSGdnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JSFJvYVhNdWIzSnBaMmx1V0NBNklIaGNiaUFnSUNCMGFHbHpMbTl5YVdkcGJsa2dQU0I1SUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxtOXlhV2RwYmxrZ09pQjVYRzRnSUgxY2JseHVJQ0J6WlhSSmJuQjFkRVZzWlcxbGJuUW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lIUm9hWE11YVc1d2RYUkZiR1Z0Wlc1MElEMGdaV3hsYldWdWRGeHVJQ0FnSUhSb2FYTXVkWEJrWVhSbFJHbHRaVzV6YVc5dWN5Z3BYRzRnSUgxY2JseHVJQ0J6WlhSUWIzTnBkR2x2YmlobGJHVnRaVzUwTENCNExDQjVLU0I3WEc0Z0lDQWdlQ0E5SUhndWRHOUdhWGhsWkNoMGFHbHpMbkJ5WldOcGMybHZiaWtnS3lBbmNIZ25YRzRnSUNBZ2VTQTlJSGt1ZEc5R2FYaGxaQ2gwYUdsekxuQnlaV05wYzJsdmJpa2dLeUFuY0hnblhHNGdJQ0FnYVdZZ0tIUm9hWE11ZEhKaGJuTm1iM0p0TTBSVGRYQndiM0owS1NCN1hHNGdJQ0FnSUNCb1pXeHdaWEp6TG1OemN5aGxiR1Z0Wlc1MExDQW5kSEpoYm5ObWIzSnRKeXdnSjNSeVlXNXpiR0YwWlROa0tDY2dLeUI0SUNzZ0p5d25JQ3NnZVNBcklDY3NNQ2tuS1Z4dUlDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NTBjbUZ1YzJadmNtMHlSRk4xY0hCdmNuUXBJSHRjYmlBZ0lDQWdJR2hsYkhCbGNuTXVZM056S0dWc1pXMWxiblFzSUNkMGNtRnVjMlp2Y20wbkxDQW5kSEpoYm5Oc1lYUmxLQ2NnS3lCNElDc2dKeXduSUNzZ2VTQXJJQ2NwSnlsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1c1pXWjBJRDBnZUZ4dUlDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNTBiM0FnUFNCNVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNVBjbWxsYm5SaGRHbHZibFJwYldWeUtDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtOXlhV1Z1ZEdGMGFXOXVVM1Z3Y0c5eWRDQW1KaUIwYUdsekxtOXlhV1Z1ZEdGMGFXOXVVM1JoZEhWeklEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVJwYzJGaWJHVW9LVnh1SUNBZ0lDQWdkR2hwY3k1dmNtbGxiblJoZEdsdmJsTjFjSEJ2Y25RZ1BTQm1ZV3h6WlZ4dUlDQWdJQ0FnZEdocGN5NWxibUZpYkdVb0tWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxtUnZVbVZoWkhsRFlXeHNZbUZqYXlncFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNU5iM1JwYjI1VWFXMWxjaWdwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV0YjNScGIyNVRkWEJ3YjNKMElDWW1JSFJvYVhNdWJXOTBhVzl1VTNSaGRIVnpJRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1ScGMyRmliR1VvS1Z4dUlDQWdJQ0FnZEdocGN5NXRiM1JwYjI1VGRYQndiM0owSUQwZ1ptRnNjMlZjYmlBZ0lDQWdJSFJvYVhNdVpXNWhZbXhsS0NsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1a2IxSmxZV1I1UTJGc2JHSmhZMnNvS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUc5dVEyRnNhV0p5WVhScGIyNVVhVzFsY2lncElIdGNiaUFnSUNCMGFHbHpMbU5oYkdsaWNtRjBhVzl1Um14aFp5QTlJSFJ5ZFdWY2JpQWdmVnh1WEc0Z0lHOXVWMmx1Wkc5M1VtVnphWHBsS0NrZ2UxeHVJQ0FnSUhSb2FYTXVkWEJrWVhSbFJHbHRaVzV6YVc5dWN5Z3BYRzRnSUgxY2JseHVJQ0J2YmtGdWFXMWhkR2x2YmtaeVlXMWxLQ2tnZTF4dUlDQWdJSFJvYVhNdWRYQmtZWFJsUW05MWJtUnpLQ2xjYmlBZ0lDQnNaWFFnWTJGc2FXSnlZWFJsWkVsdWNIVjBXQ0E5SUhSb2FYTXVhVzV3ZFhSWUlDMGdkR2hwY3k1allXeHBZbkpoZEdsdmJsZ3NYRzRnSUNBZ0lDQWdJR05oYkdsaWNtRjBaV1JKYm5CMWRGa2dQU0IwYUdsekxtbHVjSFYwV1NBdElIUm9hWE11WTJGc2FXSnlZWFJwYjI1WlhHNGdJQ0FnYVdZZ0tDaE5ZWFJvTG1GaWN5aGpZV3hwWW5KaGRHVmtTVzV3ZFhSWUtTQStJSFJvYVhNdVkyRnNhV0p5WVhScGIyNVVhSEpsYzJodmJHUXBJSHg4SUNoTllYUm9MbUZpY3loallXeHBZbkpoZEdWa1NXNXdkWFJaS1NBK0lIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFISmxjMmh2YkdRcEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG5GMVpYVmxRMkZzYVdKeVlYUnBiMjRvTUNsY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXVjRzl5ZEhKaGFYUXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXOTBhVzl1V0NBOUlIUm9hWE11WTJGc2FXSnlZWFJsV0NBL0lHTmhiR2xpY21GMFpXUkpibkIxZEZrZ09pQjBhR2x6TG1sdWNIVjBXVnh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVaSUQwZ2RHaHBjeTVqWVd4cFluSmhkR1ZaSUQ4Z1kyRnNhV0p5WVhSbFpFbHVjSFYwV0NBNklIUm9hWE11YVc1d2RYUllYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQTlJSFJvYVhNdVkyRnNhV0p5WVhSbFdDQS9JR05oYkdsaWNtRjBaV1JKYm5CMWRGZ2dPaUIwYUdsekxtbHVjSFYwV0Z4dUlDQWdJQ0FnZEdocGN5NXRiM1JwYjI1WklEMGdkR2hwY3k1allXeHBZbkpoZEdWWklEOGdZMkZzYVdKeVlYUmxaRWx1Y0hWMFdTQTZJSFJvYVhNdWFXNXdkWFJaWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11Ylc5MGFXOXVXQ0FxUFNCMGFHbHpMbVZzWlcxbGJuUlhhV1IwYUNBcUlDaDBhR2x6TG5OallXeGhjbGdnTHlBeE1EQXBYRzRnSUNBZ2RHaHBjeTV0YjNScGIyNVpJQ285SUhSb2FYTXVaV3hsYldWdWRFaGxhV2RvZENBcUlDaDBhR2x6TG5OallXeGhjbGtnTHlBeE1EQXBYRzRnSUNBZ2FXWWdLQ0ZwYzA1aFRpaHdZWEp6WlVac2IyRjBLSFJvYVhNdWJHbHRhWFJZS1NrcElIdGNiaUFnSUNBZ0lIUm9hWE11Ylc5MGFXOXVXQ0E5SUdobGJIQmxjbk11WTJ4aGJYQW9kR2hwY3k1dGIzUnBiMjVZTENBdGRHaHBjeTVzYVcxcGRGZ3NJSFJvYVhNdWJHbHRhWFJZS1Z4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvSVdselRtRk9LSEJoY25ObFJteHZZWFFvZEdocGN5NXNhVzFwZEZrcEtTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dGIzUnBiMjVaSUQwZ2FHVnNjR1Z5Y3k1amJHRnRjQ2gwYUdsekxtMXZkR2x2Ymxrc0lDMTBhR2x6TG14cGJXbDBXU3dnZEdocGN5NXNhVzFwZEZrcFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhsWUlDczlJQ2gwYUdsekxtMXZkR2x2YmxnZ0xTQjBhR2x6TG5abGJHOWphWFI1V0NrZ0tpQjBhR2x6TG1aeWFXTjBhVzl1V0Z4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhsWklDczlJQ2gwYUdsekxtMXZkR2x2YmxrZ0xTQjBhR2x6TG5abGJHOWphWFI1V1NrZ0tpQjBhR2x6TG1aeWFXTjBhVzl1V1Z4dUlDQWdJR1p2Y2lBb2JHVjBJR2x1WkdWNElEMGdNRHNnYVc1a1pYZ2dQQ0IwYUdsekxteGhlV1Z5Y3k1c1pXNW5kR2c3SUdsdVpHVjRLeXNwSUh0Y2JpQWdJQ0FnSUd4bGRDQnNZWGxsY2lBOUlIUm9hWE11YkdGNVpYSnpXMmx1WkdWNFhTeGNiaUFnSUNBZ0lDQWdJQ0JrWlhCMGFGZ2dQU0IwYUdsekxtUmxjSFJvYzFoYmFXNWtaWGhkTEZ4dUlDQWdJQ0FnSUNBZ0lHUmxjSFJvV1NBOUlIUm9hWE11WkdWd2RHaHpXVnRwYm1SbGVGMHNYRzRnSUNBZ0lDQWdJQ0FnZUU5bVpuTmxkQ0E5SUhSb2FYTXVkbVZzYjJOcGRIbFlJQ29nS0dSbGNIUm9XQ0FxSUNoMGFHbHpMbWx1ZG1WeWRGZ2dQeUF0TVNBNklERXBLU3hjYmlBZ0lDQWdJQ0FnSUNCNVQyWm1jMlYwSUQwZ2RHaHBjeTUyWld4dlkybDBlVmtnS2lBb1pHVndkR2haSUNvZ0tIUm9hWE11YVc1MlpYSjBXU0EvSUMweElEb2dNU2twWEc0Z0lDQWdJQ0IwYUdsekxuTmxkRkJ2YzJsMGFXOXVLR3hoZVdWeUxDQjRUMlptYzJWMExDQjVUMlptYzJWMEtWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxuSmhaaUE5SUhKeFFXNUdjaWgwYUdsekxtOXVRVzVwYldGMGFXOXVSbkpoYldVcFhHNGdJSDFjYmx4dUlDQnliM1JoZEdVb1ltVjBZU3dnWjJGdGJXRXBlMXh1SUNBZ0lDOHZJRVY0ZEhKaFkzUWdVbTkwWVhScGIyNWNiaUFnSUNCc1pYUWdlQ0E5SUNoaVpYUmhJSHg4SURBcElDOGdUVUZIU1VOZlRsVk5Ra1ZTTENBdkx5QWdMVGt3SURvNklEa3dYRzRnSUNBZ0lDQWdJSGtnUFNBb1oyRnRiV0VnZkh3Z01Da2dMeUJOUVVkSlExOU9WVTFDUlZJZ0x5OGdMVEU0TUNBNk9pQXhPREJjYmx4dUlDQWdJQzh2SUVSbGRHVmpkQ0JQY21sbGJuUmhkR2x2YmlCRGFHRnVaMlZjYmlBZ0lDQnNaWFFnY0c5eWRISmhhWFFnUFNCMGFHbHpMbmRwYm1SdmQwaGxhV2RvZENBK0lIUm9hWE11ZDJsdVpHOTNWMmxrZEdoY2JpQWdJQ0JwWmlBb2RHaHBjeTV3YjNKMGNtRnBkQ0FoUFQwZ2NHOXlkSEpoYVhRcElIdGNiaUFnSUNBZ0lIUm9hWE11Y0c5eWRISmhhWFFnUFNCd2IzSjBjbUZwZEZ4dUlDQWdJQ0FnZEdocGN5NWpZV3hwWW5KaGRHbHZia1pzWVdjZ1BTQjBjblZsWEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVZMkZzYVdKeVlYUnBiMjVHYkdGbktTQjdYRzRnSUNBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVJteGhaeUE5SUdaaGJITmxYRzRnSUNBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVdDQTlJSGhjYmlBZ0lDQWdJSFJvYVhNdVkyRnNhV0p5WVhScGIyNVpJRDBnZVZ4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ2VGeHVJQ0FnSUhSb2FYTXVhVzV3ZFhSWklEMGdlVnh1SUNCOVhHNWNiaUFnYjI1RVpYWnBZMlZQY21sbGJuUmhkR2x2YmlobGRtVnVkQ2tnZTF4dUlDQWdJR3hsZENCaVpYUmhJRDBnWlhabGJuUXVZbVYwWVZ4dUlDQWdJR3hsZENCbllXMXRZU0E5SUdWMlpXNTBMbWRoYlcxaFhHNGdJQ0FnYVdZZ0tHSmxkR0VnSVQwOUlHNTFiR3dnSmlZZ1oyRnRiV0VnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViM0pwWlc1MFlYUnBiMjVUZEdGMGRYTWdQU0F4WEc0Z0lDQWdJQ0IwYUdsekxuSnZkR0YwWlNoaVpYUmhMQ0JuWVcxdFlTbGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnZia1JsZG1salpVMXZkR2x2YmlobGRtVnVkQ2tnZTF4dUlDQWdJR3hsZENCaVpYUmhJRDBnWlhabGJuUXVjbTkwWVhScGIyNVNZWFJsTG1KbGRHRmNiaUFnSUNCc1pYUWdaMkZ0YldFZ1BTQmxkbVZ1ZEM1eWIzUmhkR2x2YmxKaGRHVXVaMkZ0YldGY2JpQWdJQ0JwWmlBb1ltVjBZU0FoUFQwZ2JuVnNiQ0FtSmlCbllXMXRZU0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXRiM1JwYjI1VGRHRjBkWE1nUFNBeFhHNGdJQ0FnSUNCMGFHbHpMbkp2ZEdGMFpTaGlaWFJoTENCbllXMXRZU2xjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J2YmsxdmRYTmxUVzkyWlNobGRtVnVkQ2tnZTF4dUlDQWdJR3hsZENCamJHbGxiblJZSUQwZ1pYWmxiblF1WTJ4cFpXNTBXQ3hjYmlBZ0lDQWdJQ0FnWTJ4cFpXNTBXU0E5SUdWMlpXNTBMbU5zYVdWdWRGbGNibHh1SUNBZ0lDOHZJSEpsYzJWMElHbHVjSFYwSUhSdklHTmxiblJsY2lCcFppQm9iM1psY2s5dWJIa2dhWE1nYzJWMElHRnVaQ0IzWlNkeVpTQnViM1FnYUc5MlpYSnBibWNnZEdobElHVnNaVzFsYm5SY2JpQWdJQ0JwWmloMGFHbHpMbWh2ZG1WeVQyNXNlU0FtSmx4dUlDQWdJQ0FnS0NoamJHbGxiblJZSUR3Z2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVlJSHg4SUdOc2FXVnVkRmdnUGlCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsZ2dLeUIwYUdsekxtVnNaVzFsYm5SWGFXUjBhQ2tnZkh4Y2JpQWdJQ0FnSUNoamJHbGxiblJaSUR3Z2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVpJSHg4SUdOc2FXVnVkRmtnUGlCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsa2dLeUIwYUdsekxtVnNaVzFsYm5SSVpXbG5hSFFwS1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBXQ0E5SURCY2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRGa2dQU0F3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVjbVZzWVhScGRtVkpibkIxZENrZ2UxeHVJQ0FnSUNBZ0x5OGdRMnhwY0NCdGIzVnpaU0JqYjI5eVpHbHVZWFJsY3lCcGJuTnBaR1VnWld4bGJXVnVkQ0JpYjNWdVpITXVYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWpiR2x3VW1Wc1lYUnBkbVZKYm5CMWRDa2dlMXh1SUNBZ0lDQWdJQ0JqYkdsbGJuUllJRDBnVFdGMGFDNXRZWGdvWTJ4cFpXNTBXQ3dnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WUtWeHVJQ0FnSUNBZ0lDQmpiR2xsYm5SWUlEMGdUV0YwYUM1dGFXNG9ZMnhwWlc1MFdDd2dkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZSUNzZ2RHaHBjeTVsYkdWdFpXNTBWMmxrZEdncFhHNGdJQ0FnSUNBZ0lHTnNhV1Z1ZEZrZ1BTQk5ZWFJvTG0xaGVDaGpiR2xsYm5SWkxDQjBhR2x6TG1Wc1pXMWxiblJRYjNOcGRHbHZibGtwWEc0Z0lDQWdJQ0FnSUdOc2FXVnVkRmtnUFNCTllYUm9MbTFwYmloamJHbGxiblJaTENCMGFHbHpMbVZzWlcxbGJuUlFiM05wZEdsdmJsa2dLeUIwYUdsekxtVnNaVzFsYm5SSVpXbG5hSFFwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0F2THlCRFlXeGpkV3hoZEdVZ2FXNXdkWFFnY21Wc1lYUnBkbVVnZEc4Z2RHaGxJR1ZzWlcxbGJuUXVYRzRnSUNBZ0lDQnBaaWgwYUdsekxtVnNaVzFsYm5SU1lXNW5aVmdnSmlZZ2RHaHBjeTVsYkdWdFpXNTBVbUZ1WjJWWktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJZSUQwZ0tHTnNhV1Z1ZEZnZ0xTQjBhR2x6TG1Wc1pXMWxiblJRYjNOcGRHbHZibGdnTFNCMGFHbHpMbVZzWlcxbGJuUkRaVzUwWlhKWUtTQXZJSFJvYVhNdVpXeGxiV1Z1ZEZKaGJtZGxXRnh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwV1NBOUlDaGpiR2xsYm5SWklDMGdkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVaSUMwZ2RHaHBjeTVsYkdWdFpXNTBRMlZ1ZEdWeVdTa2dMeUIwYUdsekxtVnNaVzFsYm5SU1lXNW5aVmxjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0x5OGdRMkZzWTNWc1lYUmxJR2x1Y0hWMElISmxiR0YwYVhabElIUnZJSFJvWlNCM2FXNWtiM2N1WEc0Z0lDQWdJQ0JwWmloMGFHbHpMbmRwYm1SdmQxSmhaR2wxYzFnZ0ppWWdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTlpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSWUlEMGdLR05zYVdWdWRGZ2dMU0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGdwSUM4Z2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUlpJRDBnS0dOc2FXVnVkRmtnTFNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xrcElDOGdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTlpYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdaR1Z6ZEhKdmVTZ3BJSHRjYmlBZ0lDQjBhR2x6TG1ScGMyRmliR1VvS1Z4dVhHNGdJQ0FnWTJ4bFlYSlVhVzFsYjNWMEtIUm9hWE11WTJGc2FXSnlZWFJwYjI1VWFXMWxjaWxjYmlBZ0lDQmpiR1ZoY2xScGJXVnZkWFFvZEdocGN5NWtaWFJsWTNScGIyNVVhVzFsY2lsY2JseHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXlaVzF2ZG1WQmRIUnlhV0oxZEdVb0ozTjBlV3hsSnlsY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwYm1SbGVDQTlJREE3SUdsdVpHVjRJRHdnZEdocGN5NXNZWGxsY25NdWJHVnVaM1JvT3lCcGJtUmxlQ3NyS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeWMxdHBibVJsZUYwdWNtVnRiM1psUVhSMGNtbGlkWFJsS0NkemRIbHNaU2NwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdaR1ZzWlhSbElIUm9hWE11Wld4bGJXVnVkRnh1SUNBZ0lHUmxiR1YwWlNCMGFHbHpMbXhoZVdWeWMxeHVJQ0I5WEc1Y2JpQWdkbVZ5YzJsdmJpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0p6TXVNUzR3SjF4dUlDQjlYRzVjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQlFZWEpoYkd4aGVGeHVJbDE5XG4iLCJ2YXIgZXhlY3V0ZVNjcmlwdHMgPSByZXF1aXJlKFwiLi9saWIvZXhlY3V0ZS1zY3JpcHRzXCIpO1xudmFyIGZvckVhY2hFbHMgPSByZXF1aXJlKFwiLi9saWIvZm9yZWFjaC1lbHNcIik7XG52YXIgcGFyc2VPcHRpb25zID0gcmVxdWlyZShcIi4vbGliL3BhcnNlLW9wdGlvbnNcIik7XG52YXIgc3dpdGNoZXMgPSByZXF1aXJlKFwiLi9saWIvc3dpdGNoZXNcIik7XG52YXIgbmV3VWlkID0gcmVxdWlyZShcIi4vbGliL3VuaXF1ZWlkXCIpO1xuXG52YXIgb24gPSByZXF1aXJlKFwiLi9saWIvZXZlbnRzL29uXCIpO1xudmFyIHRyaWdnZXIgPSByZXF1aXJlKFwiLi9saWIvZXZlbnRzL3RyaWdnZXJcIik7XG5cbnZhciBjbG9uZSA9IHJlcXVpcmUoXCIuL2xpYi91dGlsL2Nsb25lXCIpO1xudmFyIGNvbnRhaW5zID0gcmVxdWlyZShcIi4vbGliL3V0aWwvY29udGFpbnNcIik7XG52YXIgZXh0ZW5kID0gcmVxdWlyZShcIi4vbGliL3V0aWwvZXh0ZW5kXCIpO1xudmFyIG5vb3AgPSByZXF1aXJlKFwiLi9saWIvdXRpbC9ub29wXCIpO1xuXG52YXIgUGpheCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBudW1QZW5kaW5nU3dpdGNoZXM6IDAsXG4gICAgaHJlZjogbnVsbCxcbiAgICBvcHRpb25zOiBudWxsXG4gIH07XG5cbiAgdGhpcy5vcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuICB0aGlzLmxvZyhcIlBqYXggb3B0aW9uc1wiLCB0aGlzLm9wdGlvbnMpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMuc2Nyb2xsUmVzdG9yYXRpb24gJiYgXCJzY3JvbGxSZXN0b3JhdGlvblwiIGluIGhpc3RvcnkpIHtcbiAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIjtcbiAgfVxuXG4gIHRoaXMubWF4VWlkID0gdGhpcy5sYXN0VWlkID0gbmV3VWlkKCk7XG5cbiAgdGhpcy5wYXJzZURPTShkb2N1bWVudCk7XG5cbiAgb24oXG4gICAgd2luZG93LFxuICAgIFwicG9wc3RhdGVcIixcbiAgICBmdW5jdGlvbihzdCkge1xuICAgICAgaWYgKHN0LnN0YXRlKSB7XG4gICAgICAgIHZhciBvcHQgPSBjbG9uZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICBvcHQudXJsID0gc3Quc3RhdGUudXJsO1xuICAgICAgICBvcHQudGl0bGUgPSBzdC5zdGF0ZS50aXRsZTtcbiAgICAgICAgLy8gU2luY2Ugc3RhdGUgYWxyZWFkeSBleGlzdHMsIHByZXZlbnQgaXQgZnJvbSBiZWluZyBwdXNoZWQgYWdhaW5cbiAgICAgICAgb3B0Lmhpc3RvcnkgPSBmYWxzZTtcbiAgICAgICAgb3B0LnNjcm9sbFBvcyA9IHN0LnN0YXRlLnNjcm9sbFBvcztcbiAgICAgICAgaWYgKHN0LnN0YXRlLnVpZCA8IHRoaXMubGFzdFVpZCkge1xuICAgICAgICAgIG9wdC5iYWNrd2FyZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0LmZvcndhcmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFVpZCA9IHN0LnN0YXRlLnVpZDtcblxuICAgICAgICAvLyBAdG9kbyBpbXBsZW1lbnQgaGlzdG9yeSBjYWNoZSBoZXJlLCBiYXNlZCBvbiB1aWRcbiAgICAgICAgdGhpcy5sb2FkVXJsKHN0LnN0YXRlLnVybCwgb3B0KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcylcbiAgKTtcbn07XG5cblBqYXguc3dpdGNoZXMgPSBzd2l0Y2hlcztcblxuUGpheC5wcm90b3R5cGUgPSB7XG4gIGxvZzogcmVxdWlyZShcIi4vbGliL3Byb3RvL2xvZ1wiKSxcblxuICBnZXRFbGVtZW50czogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMuZWxlbWVudHMpO1xuICB9LFxuXG4gIHBhcnNlRE9NOiBmdW5jdGlvbihlbCkge1xuICAgIHZhciBwYXJzZUVsZW1lbnQgPSByZXF1aXJlKFwiLi9saWIvcHJvdG8vcGFyc2UtZWxlbWVudFwiKTtcbiAgICBmb3JFYWNoRWxzKHRoaXMuZ2V0RWxlbWVudHMoZWwpLCBwYXJzZUVsZW1lbnQsIHRoaXMpO1xuICB9LFxuXG4gIHJlZnJlc2g6IGZ1bmN0aW9uKGVsKSB7XG4gICAgdGhpcy5wYXJzZURPTShlbCB8fCBkb2N1bWVudCk7XG4gIH0sXG5cbiAgcmVsb2FkOiBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sXG5cbiAgYXR0YWNoTGluazogcmVxdWlyZShcIi4vbGliL3Byb3RvL2F0dGFjaC1saW5rXCIpLFxuXG4gIGF0dGFjaEZvcm06IHJlcXVpcmUoXCIuL2xpYi9wcm90by9hdHRhY2gtZm9ybVwiKSxcblxuICBmb3JFYWNoU2VsZWN0b3JzOiBmdW5jdGlvbihjYiwgY29udGV4dCwgRE9NY29udGV4dCkge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi9saWIvZm9yZWFjaC1zZWxlY3RvcnNcIikuYmluZCh0aGlzKShcbiAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsXG4gICAgICBjYixcbiAgICAgIGNvbnRleHQsXG4gICAgICBET01jb250ZXh0XG4gICAgKTtcbiAgfSxcblxuICBzd2l0Y2hTZWxlY3RvcnM6IGZ1bmN0aW9uKHNlbGVjdG9ycywgZnJvbUVsLCB0b0VsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL2xpYi9zd2l0Y2hlcy1zZWxlY3RvcnNcIikuYmluZCh0aGlzKShcbiAgICAgIHRoaXMub3B0aW9ucy5zd2l0Y2hlcyxcbiAgICAgIHRoaXMub3B0aW9ucy5zd2l0Y2hlc09wdGlvbnMsXG4gICAgICBzZWxlY3RvcnMsXG4gICAgICBmcm9tRWwsXG4gICAgICB0b0VsLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gIH0sXG5cbiAgbGF0ZXN0Q2hhbmNlOiBmdW5jdGlvbihocmVmKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gaHJlZjtcbiAgfSxcblxuICBvblN3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgdHJpZ2dlcih3aW5kb3csIFwicmVzaXplIHNjcm9sbFwiKTtcblxuICAgIHRoaXMuc3RhdGUubnVtUGVuZGluZ1N3aXRjaGVzLS07XG5cbiAgICAvLyBkZWJvdW5jZSBjYWxscywgc28gd2Ugb25seSBydW4gdGhpcyBvbmNlIGFmdGVyIGFsbCBzd2l0Y2hlcyBhcmUgZmluaXNoZWQuXG4gICAgaWYgKHRoaXMuc3RhdGUubnVtUGVuZGluZ1N3aXRjaGVzID09PSAwKSB7XG4gICAgICB0aGlzLmFmdGVyQWxsU3dpdGNoZXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgbG9hZENvbnRlbnQ6IGZ1bmN0aW9uKGh0bWwsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGh0bWwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRyaWdnZXIoZG9jdW1lbnQsIFwicGpheDpjb21wbGV0ZSBwamF4OmVycm9yXCIsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRtcEVsID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwicGpheFwiKTtcblxuICAgIC8vIHBhcnNlIEhUTUwgYXR0cmlidXRlcyB0byBjb3B5IHRoZW1cbiAgICAvLyBzaW5jZSB3ZSBhcmUgZm9yY2VkIHRvIHVzZSBkb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MIChvdXRlckhUTUwgY2FuJ3QgYmUgdXNlZCBmb3IgPGh0bWw+KVxuICAgIHZhciBodG1sUmVnZXggPSAvPGh0bWxbXj5dKz4vZ2k7XG4gICAgdmFyIGh0bWxBdHRyaWJzUmVnZXggPSAvXFxzP1thLXo6XSsoPzo9WydcIl1bXidcIj5dK1snXCJdKSovZ2k7XG4gICAgdmFyIG1hdGNoZXMgPSBodG1sLm1hdGNoKGh0bWxSZWdleCk7XG4gICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIG1hdGNoZXMgPSBtYXRjaGVzWzBdLm1hdGNoKGh0bWxBdHRyaWJzUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoZXMuc2hpZnQoKTtcbiAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uKGh0bWxBdHRyaWIpIHtcbiAgICAgICAgICB2YXIgYXR0ciA9IGh0bWxBdHRyaWIudHJpbSgpLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICBpZiAoYXR0ci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRtcEVsLmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0clswXSwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRtcEVsLmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0clswXSwgYXR0clsxXS5zbGljZSgxLCAtMSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG1wRWwuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgdGhpcy5sb2coXG4gICAgICBcImxvYWQgY29udGVudFwiLFxuICAgICAgdG1wRWwuZG9jdW1lbnRFbGVtZW50LmF0dHJpYnV0ZXMsXG4gICAgICB0bXBFbC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MLmxlbmd0aFxuICAgICk7XG5cbiAgICAvLyBDbGVhciBvdXQgYW55IGZvY3VzZWQgY29udHJvbHMgYmVmb3JlIGluc2VydGluZyBuZXcgcGFnZSBjb250ZW50cy5cbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXG4gICAgICBjb250YWlucyhkb2N1bWVudCwgdGhpcy5vcHRpb25zLnNlbGVjdG9ycywgZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcbiAgICApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoU2VsZWN0b3JzKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsIHRtcEVsLCBkb2N1bWVudCwgb3B0aW9ucyk7XG4gIH0sXG5cbiAgYWJvcnRSZXF1ZXN0OiByZXF1aXJlKFwiLi9saWIvYWJvcnQtcmVxdWVzdFwiKSxcblxuICBkb1JlcXVlc3Q6IHJlcXVpcmUoXCIuL2xpYi9zZW5kLXJlcXVlc3RcIiksXG5cbiAgaGFuZGxlUmVzcG9uc2U6IHJlcXVpcmUoXCIuL2xpYi9wcm90by9oYW5kbGUtcmVzcG9uc2VcIiksXG5cbiAgbG9hZFVybDogZnVuY3Rpb24oaHJlZiwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPVxuICAgICAgdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCJcbiAgICAgICAgPyBleHRlbmQoe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICAgICAgOiBjbG9uZSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy5sb2coXCJsb2FkIGhyZWZcIiwgaHJlZiwgb3B0aW9ucyk7XG5cbiAgICAvLyBBYm9ydCBhbnkgcHJldmlvdXMgcmVxdWVzdFxuICAgIHRoaXMuYWJvcnRSZXF1ZXN0KHRoaXMucmVxdWVzdCk7XG5cbiAgICB0cmlnZ2VyKGRvY3VtZW50LCBcInBqYXg6c2VuZFwiLCBvcHRpb25zKTtcblxuICAgIC8vIERvIHRoZSByZXF1ZXN0XG4gICAgdGhpcy5yZXF1ZXN0ID0gdGhpcy5kb1JlcXVlc3QoXG4gICAgICBocmVmLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UuYmluZCh0aGlzKVxuICAgICk7XG4gIH0sXG5cbiAgYWZ0ZXJBbGxTd2l0Y2hlczogZnVuY3Rpb24oKSB7XG4gICAgLy8gRkYgYnVnOiBXb27igJl0IGF1dG9mb2N1cyBmaWVsZHMgdGhhdCBhcmUgaW5zZXJ0ZWQgdmlhIEpTLlxuICAgIC8vIFRoaXMgYmVoYXZpb3IgaXMgaW5jb3JyZWN0LiBTbyBpZiB0aGVyZXMgbm8gY3VycmVudCBmb2N1cywgYXV0b2ZvY3VzXG4gICAgLy8gdGhlIGxhc3QgZmllbGQuXG4gICAgLy9cbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9mb3Jtcy5odG1sXG4gICAgdmFyIGF1dG9mb2N1c0VsID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgICAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2F1dG9mb2N1c11cIikpXG4gICAgICAucG9wKCk7XG4gICAgaWYgKGF1dG9mb2N1c0VsICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGF1dG9mb2N1c0VsKSB7XG4gICAgICBhdXRvZm9jdXNFbC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIGV4ZWN1dGUgc2NyaXB0cyB3aGVuIERPTSBoYXZlIGJlZW4gY29tcGxldGVseSB1cGRhdGVkXG4gICAgdGhpcy5vcHRpb25zLnNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICBmb3JFYWNoRWxzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCBmdW5jdGlvbihlbCkge1xuICAgICAgICBleGVjdXRlU2NyaXB0cyhlbCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoc3RhdGUub3B0aW9ucy5oaXN0b3J5KSB7XG4gICAgICBpZiAoIXdpbmRvdy5oaXN0b3J5LnN0YXRlKSB7XG4gICAgICAgIHRoaXMubGFzdFVpZCA9IHRoaXMubWF4VWlkID0gbmV3VWlkKCk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LnRpdGxlLFxuICAgICAgICAgICAgdWlkOiB0aGlzLm1heFVpZCxcbiAgICAgICAgICAgIHNjcm9sbFBvczogWzAsIDBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkb2N1bWVudC50aXRsZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgYnJvd3NlciBoaXN0b3J5XG4gICAgICB0aGlzLmxhc3RVaWQgPSB0aGlzLm1heFVpZCA9IG5ld1VpZCgpO1xuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6IHN0YXRlLmhyZWYsXG4gICAgICAgICAgdGl0bGU6IHN0YXRlLm9wdGlvbnMudGl0bGUsXG4gICAgICAgICAgdWlkOiB0aGlzLm1heFVpZCxcbiAgICAgICAgICBzY3JvbGxQb3M6IFswLCAwXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZS5vcHRpb25zLnRpdGxlLFxuICAgICAgICBzdGF0ZS5ocmVmXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFNlbGVjdG9ycyhmdW5jdGlvbihlbCkge1xuICAgICAgdGhpcy5wYXJzZURPTShlbCk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICAvLyBGaXJlIEV2ZW50c1xuICAgIHRyaWdnZXIoZG9jdW1lbnQsIFwicGpheDpjb21wbGV0ZSBwamF4OnN1Y2Nlc3NcIiwgc3RhdGUub3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIHN0YXRlLm9wdGlvbnMuYW5hbHl0aWNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHN0YXRlLm9wdGlvbnMuYW5hbHl0aWNzKCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLm9wdGlvbnMuaGlzdG9yeSkge1xuICAgICAgLy8gRmlyc3QgcGFyc2UgdXJsIGFuZCBjaGVjayBmb3IgaGFzaCB0byBvdmVycmlkZSBzY3JvbGxcbiAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhLmhyZWYgPSB0aGlzLnN0YXRlLmhyZWY7XG4gICAgICBpZiAoYS5oYXNoKSB7XG4gICAgICAgIHZhciBuYW1lID0gYS5oYXNoLnNsaWNlKDEpO1xuICAgICAgICBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuXG4gICAgICAgIHZhciBjdXJ0b3AgPSAwO1xuICAgICAgICB2YXIgdGFyZ2V0ID1cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShuYW1lKVswXTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODExMTA5NC9jcm9zcy1icm93c2VyLWphdmFzY3JpcHQtZnVuY3Rpb24tdG8tZmluZC1hY3R1YWwtcG9zaXRpb24tb2YtYW4tZWxlbWVudC1pbi1wYWdlXG4gICAgICAgICAgaWYgKHRhcmdldC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgY3VydG9wICs9IHRhcmdldC5vZmZzZXRUb3A7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBjdXJ0b3ApO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5vcHRpb25zLnNjcm9sbFRvICE9PSBmYWxzZSkge1xuICAgICAgICAvLyBTY3JvbGwgcGFnZSB0byB0b3Agb24gbmV3IHBhZ2UgbG9hZFxuICAgICAgICBpZiAoc3RhdGUub3B0aW9ucy5zY3JvbGxUby5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKHN0YXRlLm9wdGlvbnMuc2Nyb2xsVG9bMF0sIHN0YXRlLm9wdGlvbnMuc2Nyb2xsVG9bMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzdGF0ZS5vcHRpb25zLnNjcm9sbFRvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdGUub3B0aW9ucy5zY3JvbGxSZXN0b3JhdGlvbiAmJiBzdGF0ZS5vcHRpb25zLnNjcm9sbFBvcykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHN0YXRlLm9wdGlvbnMuc2Nyb2xsUG9zWzBdLCBzdGF0ZS5vcHRpb25zLnNjcm9sbFBvc1sxXSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG51bVBlbmRpbmdTd2l0Y2hlczogMCxcbiAgICAgIGhyZWY6IG51bGwsXG4gICAgICBvcHRpb25zOiBudWxsXG4gICAgfTtcbiAgfVxufTtcblxuUGpheC5pc1N1cHBvcnRlZCA9IHJlcXVpcmUoXCIuL2xpYi9pcy1zdXBwb3J0ZWRcIik7XG5cbi8vIGFyZ3VhYmx5IGNvdWxkIGRvIGBpZiggcmVxdWlyZShcIi4vbGliL2lzLXN1cHBvcnRlZFwiKSgpKSB7YCBidXQgdGhhdCBtaWdodCBiZSBhIGxpdHRsZSB0byBzaW1wbGVcbmlmIChQamF4LmlzU3VwcG9ydGVkKCkpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBQamF4O1xufVxuLy8gaWYgdGhlcmUgaXNu4oCZdCByZXF1aXJlZCBicm93c2VyIGZ1bmN0aW9ucywgcmV0dXJuaW5nIHN0dXBpZCBhcGlcbmVsc2Uge1xuICB2YXIgc3R1cGlkUGpheCA9IG5vb3A7XG4gIGZvciAodmFyIGtleSBpbiBQamF4LnByb3RvdHlwZSkge1xuICAgIGlmIChcbiAgICAgIFBqYXgucHJvdG90eXBlLmhhc093blByb3BlcnR5KGtleSkgJiZcbiAgICAgIHR5cGVvZiBQamF4LnByb3RvdHlwZVtrZXldID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgIHN0dXBpZFBqYXhba2V5XSA9IG5vb3A7XG4gICAgfVxuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHVwaWRQamF4O1xufVxuIiwidmFyIG5vb3AgPSByZXF1aXJlKFwiLi91dGlsL25vb3BcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LnJlYWR5U3RhdGUgPCA0KSB7XG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBub29wO1xuICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpIHtcbiAgdmFyIGNvZGUgPSBlbC50ZXh0IHx8IGVsLnRleHRDb250ZW50IHx8IGVsLmlubmVySFRNTCB8fCBcIlwiO1xuICB2YXIgc3JjID0gZWwuc3JjIHx8IFwiXCI7XG4gIHZhciBwYXJlbnQgPVxuICAgIGVsLnBhcmVudE5vZGUgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIikgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblxuICBpZiAoY29kZS5tYXRjaChcImRvY3VtZW50LndyaXRlXCIpKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIlNjcmlwdCBjb250YWlucyBkb2N1bWVudC53cml0ZS4gQ2Fu4oCZdCBiZSBleGVjdXRlZCBjb3JyZWN0bHkuIENvZGUgc2tpcHBlZCBcIixcbiAgICAgICAgZWxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgc2NyaXB0LmlkID0gZWwuaWQ7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChzcmMgIT09IFwiXCIpIHtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIHNjcmlwdC5hc3luYyA9IGZhbHNlOyAvLyBmb3JjZSBzeW5jaHJvbm91cyBsb2FkaW5nIG9mIHBlcmlwaGVyYWwgSlNcbiAgfVxuXG4gIGlmIChjb2RlICE9PSBcIlwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNjcmlwdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2RlKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIC8vIG9sZCBJRXMgaGF2ZSBmdW5reSBzY3JpcHQgbm9kZXNcbiAgICAgIHNjcmlwdC50ZXh0ID0gY29kZTtcbiAgICB9XG4gIH1cblxuICAvLyBleGVjdXRlXG4gIHBhcmVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAvLyBhdm9pZCBwb2xsdXRpb24gb25seSBpbiBoZWFkIG9yIGJvZHkgdGFnc1xuICBpZiAoXG4gICAgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCB8fCBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MQm9keUVsZW1lbnQpICYmXG4gICAgcGFyZW50LmNvbnRhaW5zKHNjcmlwdClcbiAgKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCJ2YXIgZm9yRWFjaEVscyA9IHJlcXVpcmUoXCIuLi9mb3JlYWNoLWVsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbHMsIGV2ZW50cywgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgZXZlbnRzID0gdHlwZW9mIGV2ZW50cyA9PT0gXCJzdHJpbmdcIiA/IGV2ZW50cy5zcGxpdChcIiBcIikgOiBldmVudHM7XG5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgIGZvckVhY2hFbHMoZWxzLCBmdW5jdGlvbihlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsInZhciBmb3JFYWNoRWxzID0gcmVxdWlyZShcIi4uL2ZvcmVhY2gtZWxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVscywgZXZlbnRzLCBvcHRzKSB7XG4gIGV2ZW50cyA9IHR5cGVvZiBldmVudHMgPT09IFwic3RyaW5nXCIgPyBldmVudHMuc3BsaXQoXCIgXCIpIDogZXZlbnRzO1xuXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZlbnQ7XG4gICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7XG4gICAgZXZlbnQuaW5pdEV2ZW50KGUsIHRydWUsIHRydWUpO1xuICAgIGV2ZW50LmV2ZW50TmFtZSA9IGU7XG4gICAgaWYgKG9wdHMpIHtcbiAgICAgIE9iamVjdC5rZXlzKG9wdHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGV2ZW50W2tleV0gPSBvcHRzW2tleV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3JFYWNoRWxzKGVscywgZnVuY3Rpb24oZWwpIHtcbiAgICAgIHZhciBkb21GaXggPSBmYWxzZTtcbiAgICAgIGlmICghZWwucGFyZW50Tm9kZSAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwgIT09IHdpbmRvdykge1xuICAgICAgICAvLyBUSEFOSyBZT1UgSUUgKDkvMTAvMTEpXG4gICAgICAgIC8vIGRpc3BhdGNoRXZlbnQgZG9lc24ndCB3b3JrIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBpbiB0aGUgRE9NXG4gICAgICAgIGRvbUZpeCA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBpZiAoZG9tRml4KSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG4iLCJ2YXIgZm9yRWFjaEVscyA9IHJlcXVpcmUoXCIuL2ZvcmVhY2gtZWxzXCIpO1xudmFyIGV2YWxTY3JpcHQgPSByZXF1aXJlKFwiLi9ldmFsLXNjcmlwdFwiKTtcbi8vIEZpbmRzIGFuZCBleGVjdXRlcyBzY3JpcHRzICh1c2VkIGZvciBuZXdseSBhZGRlZCBlbGVtZW50cylcbi8vIE5lZWRlZCBzaW5jZSBpbm5lckhUTUwgZG9lcyBub3QgcnVuIHNjcmlwdHNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpIHtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzY3JpcHRcIikge1xuICAgIGV2YWxTY3JpcHQoZWwpO1xuICB9XG5cbiAgZm9yRWFjaEVscyhlbC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0XCIpLCBmdW5jdGlvbihzY3JpcHQpIHtcbiAgICBpZiAoIXNjcmlwdC50eXBlIHx8IHNjcmlwdC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGV4dC9qYXZhc2NyaXB0XCIpIHtcbiAgICAgIGlmIChzY3JpcHQucGFyZW50Tm9kZSkge1xuICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgfVxuICAgICAgZXZhbFNjcmlwdChzY3JpcHQpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyogZ2xvYmFsIEhUTUxDb2xsZWN0aW9uOiB0cnVlICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWxzLCBmbiwgY29udGV4dCkge1xuICBpZiAoXG4gICAgZWxzIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHxcbiAgICBlbHMgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fFxuICAgIGVscyBpbnN0YW5jZW9mIEFycmF5XG4gICkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZm4sIGNvbnRleHQpO1xuICB9XG4gIC8vIGFzc3VtZSBzaW1wbGUgRE9NIGVsZW1lbnRcbiAgcmV0dXJuIGZuLmNhbGwoY29udGV4dCwgZWxzKTtcbn07XG4iLCJ2YXIgZm9yRWFjaEVscyA9IHJlcXVpcmUoXCIuL2ZvcmVhY2gtZWxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlbGVjdG9ycywgY2IsIGNvbnRleHQsIERPTWNvbnRleHQpIHtcbiAgRE9NY29udGV4dCA9IERPTWNvbnRleHQgfHwgZG9jdW1lbnQ7XG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgZm9yRWFjaEVscyhET01jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCBjYiwgY29udGV4dCk7XG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIC8vIEJvcnJvd2VkIHdob2xlc2FsZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1bmt0L2pxdWVyeS1wamF4XG4gIHJldHVybiAoXG4gICAgd2luZG93Lmhpc3RvcnkgJiZcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgJiZcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgJiZcbiAgICAvLyBwdXNoU3RhdGUgaXNu4oCZdCByZWxpYWJsZSBvbiBpT1MgdW50aWwgNS5cbiAgICAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChcbiAgICAgIC8oKGlQb2R8aVBob25lfGlQYWQpLitcXGJPU1xccytbMS00XVxcRHxXZWJBcHBzXFwvLitDRk5ldHdvcmspL1xuICAgIClcbiAgKTtcbn07XG4iLCIvKiBnbG9iYWwgX2dhcTogdHJ1ZSwgZ2E6IHRydWUgKi9cblxudmFyIGRlZmF1bHRTd2l0Y2hlcyA9IHJlcXVpcmUoXCIuL3N3aXRjaGVzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuZWxlbWVudHMgPSBvcHRpb25zLmVsZW1lbnRzIHx8IFwiYVtocmVmXSwgZm9ybVthY3Rpb25dXCI7XG4gIG9wdGlvbnMuc2VsZWN0b3JzID0gb3B0aW9ucy5zZWxlY3RvcnMgfHwgW1widGl0bGVcIiwgXCIuanMtUGpheFwiXTtcbiAgb3B0aW9ucy5zd2l0Y2hlcyA9IG9wdGlvbnMuc3dpdGNoZXMgfHwge307XG4gIG9wdGlvbnMuc3dpdGNoZXNPcHRpb25zID0gb3B0aW9ucy5zd2l0Y2hlc09wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuaGlzdG9yeSA9XG4gICAgdHlwZW9mIG9wdGlvbnMuaGlzdG9yeSA9PT0gXCJ1bmRlZmluZWRcIiA/IHRydWUgOiBvcHRpb25zLmhpc3Rvcnk7XG4gIG9wdGlvbnMuYW5hbHl0aWNzID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5hbmFseXRpY3MgPT09IFwiZnVuY3Rpb25cIiB8fCBvcHRpb25zLmFuYWx5dGljcyA9PT0gZmFsc2VcbiAgICAgID8gb3B0aW9ucy5hbmFseXRpY3NcbiAgICAgIDogZGVmYXVsdEFuYWx5dGljcztcbiAgb3B0aW9ucy5zY3JvbGxUbyA9XG4gICAgdHlwZW9mIG9wdGlvbnMuc2Nyb2xsVG8gPT09IFwidW5kZWZpbmVkXCIgPyAwIDogb3B0aW9ucy5zY3JvbGxUbztcbiAgb3B0aW9ucy5zY3JvbGxSZXN0b3JhdGlvbiA9XG4gICAgdHlwZW9mIG9wdGlvbnMuc2Nyb2xsUmVzdG9yYXRpb24gIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gb3B0aW9ucy5zY3JvbGxSZXN0b3JhdGlvblxuICAgICAgOiB0cnVlO1xuICBvcHRpb25zLmNhY2hlQnVzdCA9XG4gICAgdHlwZW9mIG9wdGlvbnMuY2FjaGVCdXN0ID09PSBcInVuZGVmaW5lZFwiID8gdHJ1ZSA6IG9wdGlvbnMuY2FjaGVCdXN0O1xuICBvcHRpb25zLmRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgb3B0aW9ucy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XG4gIG9wdGlvbnMuY3VycmVudFVybEZ1bGxSZWxvYWQgPVxuICAgIHR5cGVvZiBvcHRpb25zLmN1cnJlbnRVcmxGdWxsUmVsb2FkID09PSBcInVuZGVmaW5lZFwiXG4gICAgICA/IGZhbHNlXG4gICAgICA6IG9wdGlvbnMuY3VycmVudFVybEZ1bGxSZWxvYWQ7XG5cbiAgLy8gV2UgY2Fu4oCZdCByZXBsYWNlIGJvZHkub3V0ZXJIVE1MIG9yIGhlYWQub3V0ZXJIVE1MLlxuICAvLyBJdCBjcmVhdGVzIGEgYnVnIHdoZXJlIGEgbmV3IGJvZHkgb3IgaGVhZCBhcmUgY3JlYXRlZCBpbiB0aGUgRE9NLlxuICAvLyBJZiB5b3Ugc2V0IGhlYWQub3V0ZXJIVE1MLCBhIG5ldyBib2R5IHRhZyBpcyBhcHBlbmRlZCwgc28gdGhlIERPTSBoYXMgMiBib2R5IG5vZGVzLCBhbmQgdmljZSB2ZXJzYVxuICBpZiAoIW9wdGlvbnMuc3dpdGNoZXMuaGVhZCkge1xuICAgIG9wdGlvbnMuc3dpdGNoZXMuaGVhZCA9IGRlZmF1bHRTd2l0Y2hlcy5zd2l0Y2hFbGVtZW50c0FsdDtcbiAgfVxuICBpZiAoIW9wdGlvbnMuc3dpdGNoZXMuYm9keSkge1xuICAgIG9wdGlvbnMuc3dpdGNoZXMuYm9keSA9IGRlZmF1bHRTd2l0Y2hlcy5zd2l0Y2hFbGVtZW50c0FsdDtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGRlZmF1bHRBbmFseXRpY3MoKSB7XG4gIGlmICh3aW5kb3cuX2dhcSkge1xuICAgIF9nYXEucHVzaChbXCJfdHJhY2tQYWdldmlld1wiXSk7XG4gIH1cbiAgaWYgKHdpbmRvdy5nYSkge1xuICAgIGdhKFwic2VuZFwiLCBcInBhZ2V2aWV3XCIsIHsgcGFnZTogbG9jYXRpb24ucGF0aG5hbWUsIHRpdGxlOiBkb2N1bWVudC50aXRsZSB9KTtcbiAgfVxufVxuIiwidmFyIG9uID0gcmVxdWlyZShcIi4uL2V2ZW50cy9vblwiKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoXCIuLi91dGlsL2Nsb25lXCIpO1xuXG52YXIgYXR0clN0YXRlID0gXCJkYXRhLXBqYXgtc3RhdGVcIjtcblxudmFyIGZvcm1BY3Rpb24gPSBmdW5jdGlvbihlbCwgZXZlbnQpIHtcbiAgaWYgKGlzRGVmYXVsdFByZXZlbnRlZChldmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTaW5jZSBsb2FkVXJsIG1vZGlmaWVzIG9wdGlvbnMgYW5kIHdlIG1heSBhZGQgb3VyIG93biBtb2RpZmljYXRpb25zIGJlbG93LFxuICAvLyBjbG9uZSBpdCBzbyB0aGUgY2hhbmdlcyBkb24ndCBwZXJzaXN0XG4gIHZhciBvcHRpb25zID0gY2xvbmUodGhpcy5vcHRpb25zKTtcblxuICAvLyBJbml0aWFsaXplIHJlcXVlc3RPcHRpb25zXG4gIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgcmVxdWVzdFVybDogZWwuZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgIHJlcXVlc3RNZXRob2Q6IGVsLmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBcIkdFVFwiXG4gIH07XG5cbiAgLy8gY3JlYXRlIGEgdGVzdGFibGUgdmlydHVhbCBsaW5rIG9mIHRoZSBmb3JtIGFjdGlvblxuICB2YXIgdmlydExpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHZpcnRMaW5rRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMucmVxdWVzdFVybCk7XG5cbiAgdmFyIGF0dHJWYWx1ZSA9IGNoZWNrSWZTaG91bGRBYm9ydCh2aXJ0TGlua0VsZW1lbnQsIG9wdGlvbnMpO1xuICBpZiAoYXR0clZhbHVlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJTdGF0ZSwgYXR0clZhbHVlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmIChlbC5lbmN0eXBlID09PSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIikge1xuICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZWwpO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMucmVxdWVzdFBhcmFtcyA9IHBhcnNlRm9ybUVsZW1lbnRzKGVsKTtcbiAgfVxuXG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyU3RhdGUsIFwic3VibWl0XCIpO1xuXG4gIG9wdGlvbnMudHJpZ2dlckVsZW1lbnQgPSBlbDtcbiAgdGhpcy5sb2FkVXJsKHZpcnRMaW5rRWxlbWVudC5ocmVmLCBvcHRpb25zKTtcbn07XG5cbmZ1bmN0aW9uIHBhcnNlRm9ybUVsZW1lbnRzKGVsKSB7XG4gIHZhciByZXF1ZXN0UGFyYW1zID0gW107XG4gIHZhciBmb3JtRWxlbWVudHMgPSBlbC5lbGVtZW50cztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtZW50ID0gZm9ybUVsZW1lbnRzW2ldO1xuICAgIHZhciB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8ganNjczpkaXNhYmxlIGRpc2FsbG93SW1wbGljaXRUeXBlQ29udmVyc2lvblxuICAgIGlmIChcbiAgICAgICEhZWxlbWVudC5uYW1lICYmXG4gICAgICBlbGVtZW50LmF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGFnTmFtZSAhPT0gXCJidXR0b25cIlxuICAgICkge1xuICAgICAgLy8ganNjczplbmFibGUgZGlzYWxsb3dJbXBsaWNpdFR5cGVDb252ZXJzaW9uXG4gICAgICB2YXIgdHlwZSA9IGVsZW1lbnQuYXR0cmlidXRlcy50eXBlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICF0eXBlIHx8XG4gICAgICAgICh0eXBlLnZhbHVlICE9PSBcImNoZWNrYm94XCIgJiYgdHlwZS52YWx1ZSAhPT0gXCJyYWRpb1wiKSB8fFxuICAgICAgICBlbGVtZW50LmNoZWNrZWRcbiAgICAgICkge1xuICAgICAgICAvLyBCdWlsZCBhcnJheSBvZiB2YWx1ZXMgdG8gc3VibWl0XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICAgIHZhciBvcHQ7XG5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGVsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgb3B0ID0gZWxlbWVudC5vcHRpb25zW2pdO1xuICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCAmJiAhb3B0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9wdC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA/IG9wdC52YWx1ZSA6IG9wdC50ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goZWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHZhbHVlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIHJlcXVlc3RQYXJhbXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBlbmNvZGVVUklDb21wb25lbnQoZWxlbWVudC5uYW1lKSxcbiAgICAgICAgICAgIHZhbHVlOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWVzW2tdKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3RQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZTaG91bGRBYm9ydCh2aXJ0TGlua0VsZW1lbnQsIG9wdGlvbnMpIHtcbiAgLy8gSWdub3JlIGV4dGVybmFsIGxpbmtzLlxuICBpZiAoXG4gICAgdmlydExpbmtFbGVtZW50LnByb3RvY29sICE9PSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgfHxcbiAgICB2aXJ0TGlua0VsZW1lbnQuaG9zdCAhPT0gd2luZG93LmxvY2F0aW9uLmhvc3RcbiAgKSB7XG4gICAgcmV0dXJuIFwiZXh0ZXJuYWxcIjtcbiAgfVxuXG4gIC8vIElnbm9yZSBjbGljayBpZiB3ZSBhcmUgb24gYW4gYW5jaG9yIG9uIHRoZSBzYW1lIHBhZ2VcbiAgaWYgKFxuICAgIHZpcnRMaW5rRWxlbWVudC5oYXNoICYmXG4gICAgdmlydExpbmtFbGVtZW50LmhyZWYucmVwbGFjZSh2aXJ0TGlua0VsZW1lbnQuaGFzaCwgXCJcIikgPT09XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKGxvY2F0aW9uLmhhc2gsIFwiXCIpXG4gICkge1xuICAgIHJldHVybiBcImFuY2hvclwiO1xuICB9XG5cbiAgLy8gSWdub3JlIGVtcHR5IGFuY2hvciBcImZvby5odG1sI1wiXG4gIGlmICh2aXJ0TGlua0VsZW1lbnQuaHJlZiA9PT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdICsgXCIjXCIpIHtcbiAgICByZXR1cm4gXCJhbmNob3ItZW1wdHlcIjtcbiAgfVxuXG4gIC8vIGlmIGRlY2xhcmVkIGFzIGEgZnVsbCByZWxvYWQsIGp1c3Qgbm9ybWFsbHkgc3VibWl0IHRoZSBmb3JtXG4gIGlmIChcbiAgICBvcHRpb25zLmN1cnJlbnRVcmxGdWxsUmVsb2FkICYmXG4gICAgdmlydExpbmtFbGVtZW50LmhyZWYgPT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXVxuICApIHtcbiAgICByZXR1cm4gXCJyZWxvYWRcIjtcbiAgfVxufVxuXG52YXIgaXNEZWZhdWx0UHJldmVudGVkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgZXZlbnQucmV0dXJuVmFsdWUgPT09IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZWwuc2V0QXR0cmlidXRlKGF0dHJTdGF0ZSwgXCJcIik7XG5cbiAgb24oZWwsIFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZm9ybUFjdGlvbi5jYWxsKHRoYXQsIGVsLCBldmVudCk7XG4gIH0pO1xufTtcbiIsInZhciBvbiA9IHJlcXVpcmUoXCIuLi9ldmVudHMvb25cIik7XG52YXIgY2xvbmUgPSByZXF1aXJlKFwiLi4vdXRpbC9jbG9uZVwiKTtcblxudmFyIGF0dHJTdGF0ZSA9IFwiZGF0YS1wamF4LXN0YXRlXCI7XG5cbnZhciBsaW5rQWN0aW9uID0gZnVuY3Rpb24oZWwsIGV2ZW50KSB7XG4gIGlmIChpc0RlZmF1bHRQcmV2ZW50ZWQoZXZlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2luY2UgbG9hZFVybCBtb2RpZmllcyBvcHRpb25zIGFuZCB3ZSBtYXkgYWRkIG91ciBvd24gbW9kaWZpY2F0aW9ucyBiZWxvdyxcbiAgLy8gY2xvbmUgaXQgc28gdGhlIGNoYW5nZXMgZG9uJ3QgcGVyc2lzdFxuICB2YXIgb3B0aW9ucyA9IGNsb25lKHRoaXMub3B0aW9ucyk7XG5cbiAgdmFyIGF0dHJWYWx1ZSA9IGNoZWNrSWZTaG91bGRBYm9ydChlbCwgZXZlbnQpO1xuICBpZiAoYXR0clZhbHVlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJTdGF0ZSwgYXR0clZhbHVlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIGRvbuKAmXQgZG8gXCJub3RoaW5nXCIgaWYgdXNlciB0cnkgdG8gcmVsb2FkIHRoZSBwYWdlIGJ5IGNsaWNraW5nIHRoZSBzYW1lIGxpbmsgdHdpY2VcbiAgaWYgKFxuICAgIHRoaXMub3B0aW9ucy5jdXJyZW50VXJsRnVsbFJlbG9hZCAmJlxuICAgIGVsLmhyZWYgPT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXVxuICApIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0clN0YXRlLCBcInJlbG9hZFwiKTtcbiAgICB0aGlzLnJlbG9hZCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyU3RhdGUsIFwibG9hZFwiKTtcblxuICBvcHRpb25zLnRyaWdnZXJFbGVtZW50ID0gZWw7XG4gIHRoaXMubG9hZFVybChlbC5ocmVmLCBvcHRpb25zKTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSWZTaG91bGRBYm9ydChlbCwgZXZlbnQpIHtcbiAgLy8gRG9u4oCZdCBicmVhayBicm93c2VyIHNwZWNpYWwgYmVoYXZpb3Igb24gbGlua3MgKGxpa2UgcGFnZSBpbiBuZXcgd2luZG93KVxuICBpZiAoXG4gICAgZXZlbnQud2hpY2ggPiAxIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleVxuICApIHtcbiAgICByZXR1cm4gXCJtb2RpZmllclwiO1xuICB9XG5cbiAgLy8gd2UgZG8gdGVzdCBvbiBocmVmIG5vdyB0byBwcmV2ZW50IHVuZXhwZWN0ZWQgYmVoYXZpb3IgaWYgZm9yIHNvbWUgcmVhc29uXG4gIC8vIHVzZXIgaGF2ZSBocmVmIHRoYXQgY2FuIGJlIGR5bmFtaWNhbGx5IHVwZGF0ZWRcblxuICAvLyBJZ25vcmUgZXh0ZXJuYWwgbGlua3MuXG4gIGlmIChcbiAgICBlbC5wcm90b2NvbCAhPT0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sIHx8XG4gICAgZWwuaG9zdCAhPT0gd2luZG93LmxvY2F0aW9uLmhvc3RcbiAgKSB7XG4gICAgcmV0dXJuIFwiZXh0ZXJuYWxcIjtcbiAgfVxuXG4gIC8vIElnbm9yZSBhbmNob3JzIG9uIHRoZSBzYW1lIHBhZ2UgKGtlZXAgbmF0aXZlIGJlaGF2aW9yKVxuICBpZiAoXG4gICAgZWwuaGFzaCAmJlxuICAgIGVsLmhyZWYucmVwbGFjZShlbC5oYXNoLCBcIlwiKSA9PT1cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UobG9jYXRpb24uaGFzaCwgXCJcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwiYW5jaG9yXCI7XG4gIH1cblxuICAvLyBJZ25vcmUgZW1wdHkgYW5jaG9yIFwiZm9vLmh0bWwjXCJcbiAgaWYgKGVsLmhyZWYgPT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXSArIFwiI1wiKSB7XG4gICAgcmV0dXJuIFwiYW5jaG9yLWVtcHR5XCI7XG4gIH1cbn1cblxudmFyIGlzRGVmYXVsdFByZXZlbnRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5kZWZhdWx0UHJldmVudGVkIHx8IGV2ZW50LnJldHVyblZhbHVlID09PSBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGVsLnNldEF0dHJpYnV0ZShhdHRyU3RhdGUsIFwiXCIpO1xuXG4gIG9uKGVsLCBcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbGlua0FjdGlvbi5jYWxsKHRoYXQsIGVsLCBldmVudCk7XG4gIH0pO1xuXG4gIG9uKFxuICAgIGVsLFxuICAgIFwia2V5dXBcIixcbiAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGxpbmtBY3Rpb24uY2FsbCh0aGF0LCBlbCwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcbiIsInZhciBjbG9uZSA9IHJlcXVpcmUoXCIuLi91dGlsL2Nsb25lXCIpO1xudmFyIG5ld1VpZCA9IHJlcXVpcmUoXCIuLi91bmlxdWVpZFwiKTtcbnZhciB0cmlnZ2VyID0gcmVxdWlyZShcIi4uL2V2ZW50cy90cmlnZ2VyXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlc3BvbnNlVGV4dCwgcmVxdWVzdCwgaHJlZiwgb3B0aW9ucykge1xuICBvcHRpb25zID0gY2xvbmUob3B0aW9ucyB8fCB0aGlzLm9wdGlvbnMpO1xuICBvcHRpb25zLnJlcXVlc3QgPSByZXF1ZXN0O1xuXG4gIC8vIEZhaWwgaWYgdW5hYmxlIHRvIGxvYWQgSFRNTCB2aWEgQUpBWFxuICBpZiAocmVzcG9uc2VUZXh0ID09PSBmYWxzZSkge1xuICAgIHRyaWdnZXIoZG9jdW1lbnQsIFwicGpheDpjb21wbGV0ZSBwamF4OmVycm9yXCIsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gcHVzaCBzY3JvbGwgcG9zaXRpb24gdG8gaGlzdG9yeVxuICB2YXIgY3VycmVudFN0YXRlID0gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShcbiAgICB7XG4gICAgICB1cmw6IGN1cnJlbnRTdGF0ZS51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICB0aXRsZTogY3VycmVudFN0YXRlLnRpdGxlIHx8IGRvY3VtZW50LnRpdGxlLFxuICAgICAgdWlkOiBjdXJyZW50U3RhdGUudWlkIHx8IG5ld1VpZCgpLFxuICAgICAgc2Nyb2xsUG9zOiBbXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgXVxuICAgIH0sXG4gICAgZG9jdW1lbnQudGl0bGUsXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgKTtcblxuICAvLyBDaGVjayBmb3IgcmVkaXJlY3RzXG4gIHZhciBvbGRIcmVmID0gaHJlZjtcbiAgaWYgKHJlcXVlc3QucmVzcG9uc2VVUkwpIHtcbiAgICBpZiAoaHJlZiAhPT0gcmVxdWVzdC5yZXNwb25zZVVSTCkge1xuICAgICAgaHJlZiA9IHJlcXVlc3QucmVzcG9uc2VVUkw7XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlcXVlc3QuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLVBKQVgtVVJMXCIpKSB7XG4gICAgaHJlZiA9IHJlcXVlc3QuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLVBKQVgtVVJMXCIpO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLVhIUi1SZWRpcmVjdGVkLVRvXCIpKSB7XG4gICAgaHJlZiA9IHJlcXVlc3QuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLVhIUi1SZWRpcmVjdGVkLVRvXCIpO1xuICB9XG5cbiAgLy8gQWRkIGJhY2sgdGhlIGhhc2ggaWYgaXQgd2FzIHJlbW92ZWRcbiAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYS5ocmVmID0gb2xkSHJlZjtcbiAgdmFyIG9sZEhhc2ggPSBhLmhhc2g7XG4gIGEuaHJlZiA9IGhyZWY7XG4gIGlmIChvbGRIYXNoICYmICFhLmhhc2gpIHtcbiAgICBhLmhhc2ggPSBvbGRIYXNoO1xuICAgIGhyZWYgPSBhLmhyZWY7XG4gIH1cblxuICB0aGlzLnN0YXRlLmhyZWYgPSBocmVmO1xuICB0aGlzLnN0YXRlLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gIHRyeSB7XG4gICAgdGhpcy5sb2FkQ29udGVudChyZXNwb25zZVRleHQsIG9wdGlvbnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJpZ2dlcihkb2N1bWVudCwgXCJwamF4OmVycm9yXCIsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlBqYXggc3dpdGNoIGZhaWw6IFwiLCBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmxhdGVzdENoYW5jZShocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8vIElFIGlzIHdlaXJkXG4gICAgZWxzZSBpZiAoY29uc29sZS5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59O1xuIiwidmFyIGF0dHJTdGF0ZSA9IFwiZGF0YS1wamF4LXN0YXRlXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpIHtcbiAgc3dpdGNoIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiYVwiOlxuICAgICAgLy8gb25seSBhdHRhY2ggbGluayBpZiBlbCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgbGluayBhdHRhY2hlZFxuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoYXR0clN0YXRlKSkge1xuICAgICAgICB0aGlzLmF0dGFjaExpbmsoZWwpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiZm9ybVwiOlxuICAgICAgLy8gb25seSBhdHRhY2ggbGluayBpZiBlbCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgbGluayBhdHRhY2hlZFxuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoYXR0clN0YXRlKSkge1xuICAgICAgICB0aGlzLmF0dGFjaEZvcm0oZWwpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgXCJQamF4IGNhbiBvbmx5IGJlIGFwcGxpZWQgb24gPGE+IG9yIDxmb3JtPiBzdWJtaXRcIjtcbiAgfVxufTtcbiIsInZhciB1cGRhdGVRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWwvdXBkYXRlLXF1ZXJ5LXN0cmluZ1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsb2NhdGlvbiwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBxdWVyeVN0cmluZztcbiAgdmFyIHJlcXVlc3RPcHRpb25zID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlcXVlc3RNZXRob2QgPSAocmVxdWVzdE9wdGlvbnMucmVxdWVzdE1ldGhvZCB8fCBcIkdFVFwiKS50b1VwcGVyQ2FzZSgpO1xuICB2YXIgcmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RPcHRpb25zLnJlcXVlc3RQYXJhbXMgfHwgbnVsbDtcbiAgdmFyIGZvcm1EYXRhID0gcmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgfHwgbnVsbDtcbiAgdmFyIHJlcXVlc3RQYXlsb2FkID0gbnVsbDtcbiAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcblxuICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlcXVlc3QucmVzcG9uc2VUZXh0LCByZXF1ZXN0LCBsb2NhdGlvbiwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAwKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcXVlc3QsIGxvY2F0aW9uLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNhbGxiYWNrKG51bGwsIHJlcXVlc3QsIGxvY2F0aW9uLCBvcHRpb25zKTtcbiAgfTtcblxuICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIGNhbGxiYWNrKG51bGwsIHJlcXVlc3QsIGxvY2F0aW9uLCBvcHRpb25zKTtcbiAgfTtcblxuICAvLyBQcmVwYXJlIHRoZSByZXF1ZXN0IHBheWxvYWQgZm9yIGZvcm1zLCBpZiBhdmFpbGFibGVcbiAgaWYgKHJlcXVlc3RQYXJhbXMgJiYgcmVxdWVzdFBhcmFtcy5sZW5ndGgpIHtcbiAgICAvLyBCdWlsZCBxdWVyeSBzdHJpbmdcbiAgICBxdWVyeVN0cmluZyA9IHJlcXVlc3RQYXJhbXNcbiAgICAgIC5tYXAoZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtLm5hbWUgKyBcIj1cIiArIHBhcmFtLnZhbHVlO1xuICAgICAgfSlcbiAgICAgIC5qb2luKFwiJlwiKTtcblxuICAgIHN3aXRjaCAocmVxdWVzdE1ldGhvZCkge1xuICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAvLyBSZXNldCBxdWVyeSBzdHJpbmcgdG8gYXZvaWQgYW4gaXNzdWUgd2l0aCByZXBlYXQgc3VibWlzc2lvbnMgd2hlcmUgY2hlY2tib3hlcyB0aGF0IHdlcmVcbiAgICAgICAgLy8gcHJldmlvdXNseSBjaGVja2VkIGFyZSBpbmNvcnJlY3RseSBwcmVzZXJ2ZWRcbiAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi5zcGxpdChcIj9cIilbMF07XG5cbiAgICAgICAgLy8gQXBwZW5kIG5ldyBxdWVyeSBzdHJpbmdcbiAgICAgICAgbG9jYXRpb24gKz0gXCI/XCIgKyBxdWVyeVN0cmluZztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgIC8vIFNlbmQgcXVlcnkgc3RyaW5nIGFzIHJlcXVlc3QgcGF5bG9hZFxuICAgICAgICByZXF1ZXN0UGF5bG9hZCA9IHF1ZXJ5U3RyaW5nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSBpZiAoZm9ybURhdGEpIHtcbiAgICByZXF1ZXN0UGF5bG9hZCA9IGZvcm1EYXRhO1xuICB9XG5cbiAgLy8gQWRkIGEgdGltZXN0YW1wIGFzIHBhcnQgb2YgdGhlIHF1ZXJ5IHN0cmluZyBpZiBjYWNoZSBidXN0aW5nIGlzIGVuYWJsZWRcbiAgaWYgKG9wdGlvbnMuY2FjaGVCdXN0KSB7XG4gICAgbG9jYXRpb24gPSB1cGRhdGVRdWVyeVN0cmluZyhsb2NhdGlvbiwgXCJ0XCIsIERhdGUubm93KCkpO1xuICB9XG5cbiAgcmVxdWVzdC5vcGVuKHJlcXVlc3RNZXRob2QsIGxvY2F0aW9uLCB0cnVlKTtcbiAgcmVxdWVzdC50aW1lb3V0ID0gdGltZW91dDtcbiAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJYLVBKQVhcIiwgXCJ0cnVlXCIpO1xuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXG4gICAgXCJYLVBKQVgtU2VsZWN0b3JzXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5zZWxlY3RvcnMpXG4gICk7XG5cbiAgLy8gU2VuZCB0aGUgcHJvcGVyIGhlYWRlciBpbmZvcm1hdGlvbiBmb3IgUE9TVCBmb3Jtc1xuICBpZiAocmVxdWVzdFBheWxvYWQgJiYgcmVxdWVzdE1ldGhvZCA9PT0gXCJQT1NUXCIgJiYgIWZvcm1EYXRhKSB7XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgXCJDb250ZW50LVR5cGVcIixcbiAgICAgIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdC5zZW5kKHJlcXVlc3RQYXlsb2FkKTtcblxuICByZXR1cm4gcmVxdWVzdDtcbn07XG4iLCJ2YXIgZm9yRWFjaEVscyA9IHJlcXVpcmUoXCIuL2ZvcmVhY2gtZWxzXCIpO1xuXG52YXIgZGVmYXVsdFN3aXRjaGVzID0gcmVxdWlyZShcIi4vc3dpdGNoZXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oXG4gIHN3aXRjaGVzLFxuICBzd2l0Y2hlc09wdGlvbnMsXG4gIHNlbGVjdG9ycyxcbiAgZnJvbUVsLFxuICB0b0VsLFxuICBvcHRpb25zXG4pIHtcbiAgdmFyIHN3aXRjaGVzUXVldWUgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHZhciBuZXdFbHMgPSBmcm9tRWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgdmFyIG9sZEVscyA9IHRvRWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgaWYgKHRoaXMubG9nKSB7XG4gICAgICB0aGlzLmxvZyhcIlBqYXggc3dpdGNoXCIsIHNlbGVjdG9yLCBuZXdFbHMsIG9sZEVscyk7XG4gICAgfVxuICAgIGlmIChuZXdFbHMubGVuZ3RoICE9PSBvbGRFbHMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBcIkRPTSBkb2VzbuKAmXQgbG9vayB0aGUgc2FtZSBvbiBuZXcgbG9hZGVkIHBhZ2U6IOKAmVwiICtcbiAgICAgICAgc2VsZWN0b3IgK1xuICAgICAgICBcIuKAmSAtIG5ldyBcIiArXG4gICAgICAgIG5ld0Vscy5sZW5ndGggK1xuICAgICAgICBcIiwgb2xkIFwiICtcbiAgICAgICAgb2xkRWxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3JFYWNoRWxzKFxuICAgICAgbmV3RWxzLFxuICAgICAgZnVuY3Rpb24obmV3RWwsIGkpIHtcbiAgICAgICAgdmFyIG9sZEVsID0gb2xkRWxzW2ldO1xuICAgICAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgICAgICB0aGlzLmxvZyhcIm5ld0VsXCIsIG5ld0VsLCBcIm9sZEVsXCIsIG9sZEVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHN3aXRjaGVzW3NlbGVjdG9yXVxuICAgICAgICAgID8gc3dpdGNoZXNbc2VsZWN0b3JdLmJpbmQoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIG9sZEVsLFxuICAgICAgICAgICAgICBuZXdFbCxcbiAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgc3dpdGNoZXNPcHRpb25zW3NlbGVjdG9yXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZGVmYXVsdFN3aXRjaGVzLm91dGVySFRNTC5iaW5kKHRoaXMsIG9sZEVsLCBuZXdFbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgc3dpdGNoZXNRdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH0sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfSwgdGhpcyk7XG5cbiAgdGhpcy5zdGF0ZS5udW1QZW5kaW5nU3dpdGNoZXMgPSBzd2l0Y2hlc1F1ZXVlLmxlbmd0aDtcblxuICBzd2l0Y2hlc1F1ZXVlLmZvckVhY2goZnVuY3Rpb24ocXVldWVkU3dpdGNoKSB7XG4gICAgcXVldWVkU3dpdGNoKCk7XG4gIH0pO1xufTtcbiIsInZhciBvbiA9IHJlcXVpcmUoXCIuL2V2ZW50cy9vblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG91dGVySFRNTDogZnVuY3Rpb24ob2xkRWwsIG5ld0VsKSB7XG4gICAgb2xkRWwub3V0ZXJIVE1MID0gbmV3RWwub3V0ZXJIVE1MO1xuICAgIHRoaXMub25Td2l0Y2goKTtcbiAgfSxcblxuICBpbm5lckhUTUw6IGZ1bmN0aW9uKG9sZEVsLCBuZXdFbCkge1xuICAgIG9sZEVsLmlubmVySFRNTCA9IG5ld0VsLmlubmVySFRNTDtcblxuICAgIGlmIChuZXdFbC5jbGFzc05hbWUgPT09IFwiXCIpIHtcbiAgICAgIG9sZEVsLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRFbC5jbGFzc05hbWUgPSBuZXdFbC5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5vblN3aXRjaCgpO1xuICB9LFxuXG4gIHN3aXRjaEVsZW1lbnRzQWx0OiBmdW5jdGlvbihvbGRFbCwgbmV3RWwpIHtcbiAgICBvbGRFbC5pbm5lckhUTUwgPSBuZXdFbC5pbm5lckhUTUw7XG5cbiAgICAvLyBDb3B5IGF0dHJpYnV0ZXMgZnJvbSB0aGUgbmV3IGVsZW1lbnQgdG8gdGhlIG9sZCBvbmVcbiAgICBpZiAobmV3RWwuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICB2YXIgYXR0cnMgPSBuZXdFbC5hdHRyaWJ1dGVzO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvbGRFbC5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbShhdHRyc1tpXS5jbG9uZU5vZGUoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vblN3aXRjaCgpO1xuICB9LFxuXG4gIC8vIEVxdWl2YWxlbnQgdG8gb3V0ZXJIVE1MKCksIGJ1dCBkb2Vzbid0IHJlcXVpcmUgc3dpdGNoRWxlbWVudHNBbHQoKSBmb3IgPGhlYWQ+IGFuZCA8Ym9keT5cbiAgcmVwbGFjZU5vZGU6IGZ1bmN0aW9uKG9sZEVsLCBuZXdFbCkge1xuICAgIG9sZEVsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0VsLCBvbGRFbCk7XG4gICAgdGhpcy5vblN3aXRjaCgpO1xuICB9LFxuXG4gIHNpZGVCeVNpZGU6IGZ1bmN0aW9uKG9sZEVsLCBuZXdFbCwgb3B0aW9ucywgc3dpdGNoT3B0aW9ucykge1xuICAgIHZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4gICAgdmFyIGVsc1RvUmVtb3ZlID0gW107XG4gICAgdmFyIGVsc1RvQWRkID0gW107XG4gICAgdmFyIGZyYWdUb0FwcGVuZCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB2YXIgYW5pbWF0aW9uRXZlbnROYW1lcyA9XG4gICAgICBcImFuaW1hdGlvbmVuZCB3ZWJraXRBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZFwiO1xuICAgIHZhciBhbmltYXRlZEVsc051bWJlciA9IDA7XG4gICAgdmFyIHNleHlBbmltYXRpb25FbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgICAvLyBlbmQgdHJpZ2dlcmVkIGJ5IGFuIGFuaW1hdGlvbiBvbiBhIGNoaWxkXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYW5pbWF0ZWRFbHNOdW1iZXItLTtcbiAgICAgIGlmIChhbmltYXRlZEVsc051bWJlciA8PSAwICYmIGVsc1RvUmVtb3ZlKSB7XG4gICAgICAgIGVsc1RvUmVtb3ZlLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAvLyBicm93c2luZyBxdWlja2x5IGNhbiBtYWtlIHRoZSBlbFxuICAgICAgICAgIC8vIGFscmVhZHkgcmVtb3ZlZCBieSBsYXN0IHBhZ2UgdXBkYXRlID9cbiAgICAgICAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlbHNUb0FkZC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBqYXgtY2xhc3Nlc1wiKSxcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcGpheC1jbGFzc2VzXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlbHNUb0FkZCA9IG51bGw7IC8vIGZyZWUgbWVtb3J5XG4gICAgICAgIGVsc1RvUmVtb3ZlID0gbnVsbDsgLy8gZnJlZSBtZW1vcnlcblxuICAgICAgICAvLyB0aGlzIGlzIHRvIHRyaWdnZXIgc29tZSByZXBhaW50IChleGFtcGxlOiBwaWN0dXJlZmlsbClcbiAgICAgICAgdGhpcy5vblN3aXRjaCgpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHN3aXRjaE9wdGlvbnMgPSBzd2l0Y2hPcHRpb25zIHx8IHt9O1xuXG4gICAgZm9yRWFjaC5jYWxsKG9sZEVsLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbHNUb1JlbW92ZS5wdXNoKGVsKTtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhcImpzLVBqYXgtcmVtb3ZlXCIpKSB7XG4gICAgICAgIC8vIGZvciBmYXN0IHN3aXRjaCwgY2xlYW4gZWxlbWVudCB0aGF0IGp1c3QgaGF2ZSBiZWVuIGFkZGVkLCAmIG5vdCBjbGVhbmVkIHlldC5cbiAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShcImRhdGEtcGpheC1jbGFzc2VzXCIpKSB7XG4gICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBqYXgtY2xhc3Nlc1wiKSxcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcGpheC1jbGFzc2VzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJqcy1QamF4LXJlbW92ZVwiKTtcbiAgICAgICAgaWYgKHN3aXRjaE9wdGlvbnMuY2FsbGJhY2tzICYmIHN3aXRjaE9wdGlvbnMuY2FsbGJhY2tzLnJlbW92ZUVsZW1lbnQpIHtcbiAgICAgICAgICBzd2l0Y2hPcHRpb25zLmNhbGxiYWNrcy5yZW1vdmVFbGVtZW50KGVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzKSB7XG4gICAgICAgICAgZWwuY2xhc3NOYW1lICs9XG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICBzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMucmVtb3ZlICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIChvcHRpb25zLmJhY2t3YXJkXG4gICAgICAgICAgICAgID8gc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLmJhY2t3YXJkXG4gICAgICAgICAgICAgIDogc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLmZvcndhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGFuaW1hdGVkRWxzTnVtYmVyKys7XG4gICAgICAgIG9uKGVsLCBhbmltYXRpb25FdmVudE5hbWVzLCBzZXh5QW5pbWF0aW9uRW5kLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvckVhY2guY2FsbChuZXdFbC5jaGlsZE5vZGVzLCBmdW5jdGlvbihlbCkge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICB2YXIgYWRkQ2xhc3NlcyA9IFwiXCI7XG4gICAgICAgIGlmIChzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMpIHtcbiAgICAgICAgICBhZGRDbGFzc2VzID1cbiAgICAgICAgICAgIFwiIGpzLVBqYXgtYWRkIFwiICtcbiAgICAgICAgICAgIHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcy5hZGQgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKG9wdGlvbnMuYmFja3dhcmRcbiAgICAgICAgICAgICAgPyBzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMuZm9yd2FyZFxuICAgICAgICAgICAgICA6IHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcy5iYWNrd2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXRjaE9wdGlvbnMuY2FsbGJhY2tzICYmIHN3aXRjaE9wdGlvbnMuY2FsbGJhY2tzLmFkZEVsZW1lbnQpIHtcbiAgICAgICAgICBzd2l0Y2hPcHRpb25zLmNhbGxiYWNrcy5hZGRFbGVtZW50KGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5jbGFzc05hbWUgKz0gYWRkQ2xhc3NlcztcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIiwgYWRkQ2xhc3Nlcyk7XG4gICAgICAgIGVsc1RvQWRkLnB1c2goZWwpO1xuICAgICAgICBmcmFnVG9BcHBlbmQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBhbmltYXRlZEVsc051bWJlcisrO1xuICAgICAgICBvbihlbCwgYW5pbWF0aW9uRXZlbnROYW1lcywgc2V4eUFuaW1hdGlvbkVuZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBwYXNzIGFsbCBjbGFzc05hbWUgb2YgdGhlIHBhcmVudFxuICAgIG9sZEVsLmNsYXNzTmFtZSA9IG5ld0VsLmNsYXNzTmFtZTtcbiAgICBvbGRFbC5hcHBlbmRDaGlsZChmcmFnVG9BcHBlbmQpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBjb3VudGVyID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBpZCA9IFwicGpheFwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBcIl9cIiArIGNvdW50ZXI7XG4gICAgY291bnRlcisrO1xuICAgIHJldHVybiBpZDtcbiAgfTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKG51bGwgPT09IG9iaiB8fCBcIm9iamVjdFwiICE9PSB0eXBlb2Ygb2JqKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICB2YXIgY29weSA9IG9iai5jb25zdHJ1Y3RvcigpO1xuICBmb3IgKHZhciBhdHRyIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgIGNvcHlbYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgfVxuICB9XG4gIHJldHVybiBjb3B5O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29udGFpbnMoZG9jLCBzZWxlY3RvcnMsIGVsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNlbGVjdGVkRWxzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzW2ldKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdGVkRWxzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRFbHNbal0uY29udGFpbnMoZWwpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAvLyBBdm9pZCBidWdzIHdoZW4gaGFzT3duUHJvcGVydHkgaXMgc2hhZG93ZWRcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0b1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJpLCBrZXksIHZhbHVlKSB7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCQpXCIsIFwiaVwiKTtcbiAgdmFyIHNlcGFyYXRvciA9IHVyaS5pbmRleE9mKFwiP1wiKSAhPT0gLTEgPyBcIiZcIiA6IFwiP1wiO1xuICBpZiAodXJpLm1hdGNoKHJlKSkge1xuICAgIHJldHVybiB1cmkucmVwbGFjZShyZSwgXCIkMVwiICsga2V5ICsgXCI9XCIgKyB2YWx1ZSArIFwiJDJcIik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVyaSArIHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gIH1cbn07XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwudmhDaGVjayA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxuICAgIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbiAgICBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuICAgIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuICAgIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbiAgICBNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuICAgIFNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG4gICAgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xuXG4gICAgLy8gZG9uJ3Qga25vdyBhIGJldHRlciB3YXkgdG8gZ2V0IHRoZSBzaXplIG9mIGEgQ1NTIDEwMHZo4oCmXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUZXN0RWxlbWVudCgpIHtcclxuICAgICAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXN0RWxlbWVudC5zdHlsZS5jc3NUZXh0ID1cclxuICAgICAgICAgICAgJ3Bvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBoZWlnaHQ6IDEwMHZoOyBwb2ludGVyLWV2ZW50czogbm9uZTsnO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGVzdEVsZW1lbnQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICByZXR1cm4gdGVzdEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVUZXN0RWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgLy8gIGluIHNvbWUgYnJvd3NlcnMgdGhpcyB3aWxsIGJlIGJpZ2dlciB0aGFuIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgZnVuY3Rpb24gY2hlY2tTaXplcygpIHtcclxuICAgICAgICB2YXIgdmhUZXN0ID0gY3JlYXRlVGVzdEVsZW1lbnQoKTtcclxuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHZhciB2aCA9IHZoVGVzdC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHZoIC0gd2luZG93SGVpZ2h0O1xyXG4gICAgICAgIHJlbW92ZVRlc3RFbGVtZW50KHZoVGVzdCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmg6IHZoLFxyXG4gICAgICAgICAgICB3aW5kb3dIZWlnaHQ6IHdpbmRvd0hlaWdodCxcclxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXHJcbiAgICAgICAgICAgIGlzTmVlZGVkOiBvZmZzZXQgIT09IDAsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBleHBvcnRcclxuICAgIGZ1bmN0aW9uIG5vb3AoKSB7IH1cclxuICAgIGZ1bmN0aW9uIGNvbXB1dGVEaWZmZXJlbmNlKCkge1xyXG4gICAgICAgIHZhciBzaXplcyA9IGNoZWNrU2l6ZXMoKTtcclxuICAgICAgICBzaXplcy52YWx1ZSA9IHNpemVzLm9mZnNldDtcclxuICAgICAgICByZXR1cm4gc2l6ZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWRlZmluZVZoVW5pdCgpIHtcclxuICAgICAgICB2YXIgc2l6ZXMgPSBjaGVja1NpemVzKCk7XHJcbiAgICAgICAgc2l6ZXMudmFsdWUgPSBzaXplcy53aW5kb3dIZWlnaHQgKiAwLjAxO1xyXG4gICAgICAgIHJldHVybiBzaXplcztcclxuICAgIH1cblxuICAgIHZhciBtZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgICAgICBub29wOiBub29wLFxuICAgICAgICBjb21wdXRlRGlmZmVyZW5jZTogY29tcHV0ZURpZmZlcmVuY2UsXG4gICAgICAgIHJlZGVmaW5lVmhVbml0OiByZWRlZmluZVZoVW5pdFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gaXNTdHJpbmcodGV4dCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIiAmJiB0ZXh0Lmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGYgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH1cclxuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGNzc1Zhck5hbWU6ICd2aC1vZmZzZXQnLFxyXG4gICAgICAgIHJlZGVmaW5lVmg6IGZhbHNlLFxyXG4gICAgICAgIG1ldGhvZDogY29tcHV0ZURpZmZlcmVuY2UsXHJcbiAgICAgICAgZm9yY2U6IGZhbHNlLFxyXG4gICAgICAgIGJpbmQ6IHRydWUsXHJcbiAgICAgICAgdXBkYXRlT25Ub3VjaDogZmFsc2UsXHJcbiAgICAgICAgb25VcGRhdGU6IG5vb3AsXHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgIC8vIG9sZCBvcHRpb25zIGhhbmRsaW5nOiBvbmx5IHJlZGVmaW5lIHRoZSBDU1MgdmFyIG5hbWVcclxuICAgICAgICBpZiAoaXNTdHJpbmcob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgeyBjc3NWYXJOYW1lOiBvcHRpb25zIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBiZSBzdXJlIHRvIGhhdmUgYSBjb25maWd1cmF0aW9uIG9iamVjdFxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0T3B0aW9ucztcclxuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgaGF2ZSB0aGUgcmlnaHQgb3B0aW9ucyB0byBzdGFydCB3aXRoXHJcbiAgICAgICAgdmFyIGZpbmFsT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZm9yY2U6IG9wdGlvbnMuZm9yY2UgPT09IHRydWUsXHJcbiAgICAgICAgICAgIGJpbmQ6IG9wdGlvbnMuYmluZCAhPT0gZmFsc2UsXHJcbiAgICAgICAgICAgIHVwZGF0ZU9uVG91Y2g6IG9wdGlvbnMudXBkYXRlT25Ub3VjaCA9PT0gdHJ1ZSxcclxuICAgICAgICAgICAgb25VcGRhdGU6IGlzRnVuY3Rpb24ob3B0aW9ucy5vblVwZGF0ZSkgPyBvcHRpb25zLm9uVXBkYXRlIDogbm9vcCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIG1ldGhvZCBjaGFuZ2VcclxuICAgICAgICB2YXIgcmVkZWZpbmVWaCA9IG9wdGlvbnMucmVkZWZpbmVWaCA9PT0gdHJ1ZTtcclxuICAgICAgICBmaW5hbE9wdGlvbnMubWV0aG9kID1cclxuICAgICAgICAgICAgbWV0aG9kc1tyZWRlZmluZVZoID8gJ3JlZGVmaW5lVmhVbml0JyA6ICdjb21wdXRlRGlmZmVyZW5jZSddO1xyXG4gICAgICAgIGZpbmFsT3B0aW9ucy5jc3NWYXJOYW1lID0gaXNTdHJpbmcob3B0aW9ucy5jc3NWYXJOYW1lKVxyXG4gICAgICAgICAgICA/IG9wdGlvbnMuY3NzVmFyTmFtZVxyXG4gICAgICAgICAgICA6IHJlZGVmaW5lVmhcclxuICAgICAgICAgICAgICAgID8gLypcclxuICAgICAgICAgICAgICAgICAgd2hlbiByZWRlZmluaW5nIHZoIHVuaXQgd2UgZm9sbG93IHRoaXMgYXJ0aWNsZSBuYW1lIGNvbnZlbnRpb25cclxuICAgICAgICAgICAgICAgICAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAndmgnXHJcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRPcHRpb25zLmNzc1Zhck5hbWU7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsT3B0aW9ucztcclxuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1NhZmVseV9kZXRlY3Rpbmdfb3B0aW9uX3N1cHBvcnRcclxuICAgIHZhciBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBvcHRpb25zLCBvcHRpb25zKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgb3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50TmFtZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIFxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihjb25maWcuZXZlbnROYW1lLCBjb25maWcuY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzID0gW107XHJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDc3NWYXIoY3NzVmFyTmFtZSwgcmVzdWx0KSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1cIiArIGNzc1Zhck5hbWUsIHJlc3VsdC52YWx1ZSArIFwicHhcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXRSZXN1bHQoc2l6ZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHNpemVzLCB7IHVuYmluZDogcmVtb3ZlQWxsLCByZWNvbXB1dGU6IG9wdGlvbnMubWV0aG9kIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdmhDaGVjayhvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IE9iamVjdC5mcmVlemUoZ2V0T3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZvcm1hdFJlc3VsdChjb25maWcubWV0aG9kKCksIGNvbmZpZyk7XHJcbiAgICAgICAgLy8gdXNlZnVsbmVzcyBjaGVja1xyXG4gICAgICAgIGlmICghcmVzdWx0LmlzTmVlZGVkICYmICFjb25maWcuZm9yY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlQ3NzVmFyKGNvbmZpZy5jc3NWYXJOYW1lLCByZXN1bHQpO1xyXG4gICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZXN1bHQpO1xyXG4gICAgICAgIC8vIGVuYWJsZWQgYnkgZGVmYXVsdFxyXG4gICAgICAgIGlmICghY29uZmlnLmJpbmQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgZnVuY3Rpb24gb25XaW5kb3dDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpemVzID0gY29uZmlnLm1ldGhvZCgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyKGNvbmZpZy5jc3NWYXJOYW1lLCBzaXplcyk7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub25VcGRhdGUoZm9ybWF0UmVzdWx0KHNpemVzLCBjb25maWcpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJlIHN1cmUgd2UgZG9uJ3QgZHVwbGljYXRlcyBldmVudHMgbGlzdGVuZXJzXHJcbiAgICAgICAgcmVzdWx0LnVuYmluZCgpO1xyXG4gICAgICAgIC8vIGxpc3RlbiBmb3Igb3JpZW50YXRpb24gY2hhbmdlXHJcbiAgICAgICAgLy8gLSB0aGlzIGNhbid0IGJlIGNvbmZpZ3VyZWRcclxuICAgICAgICAvLyAtIGJlY2F1c2UgaXQncyBjb252ZW5pZW50IGFuZCBub3QgYSByZWFsIHBlcmZvcm1hbmNlIGJvdHRsZW5lY2tcclxuICAgICAgICBhZGRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBvbldpbmRvd0NoYW5nZSk7XHJcbiAgICAgICAgLy8gbGlzdGVuIHRvIHRvdWNoIG1vdmUgZm9yIHNjcm9sbGluZ1xyXG4gICAgICAgIC8vIOKAk8KgZGlzYWJsZWQgYnkgZGVmYXVsdFxyXG4gICAgICAgIC8vIC0gbGlzdGVuaW5nIHRvIHNjcm9sbGluZyBjYW4gYmUgZXhwYW5zaXZl4oCmXHJcbiAgICAgICAgaWYgKGNvbmZpZy51cGRhdGVPblRvdWNoKSB7XHJcbiAgICAgICAgICAgIGFkZExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbldpbmRvd0NoYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XG5cbiAgICByZXR1cm4gdmhDaGVjaztcblxufSkpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTkgTWFzaGlyb1xuICogQGRlc2NyaXB0aW9uIG1hdGVyaWFsLWNvbXBvbmVudHMgaW5pdGlhbCBjb25maWd1cmF0aW9uXG4gKiBAYXV0aG9yIE1hc2hpcm9cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbmltcG9ydCB7IE1EQ1JpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUnO1xuaW1wb3J0IHsgTURDVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsL3RleHRmaWVsZCc7XG5pbXBvcnQgeyBNRENUb3BBcHBCYXIgfSBmcm9tICdAbWF0ZXJpYWwvdG9wLWFwcC1iYXInO1xuXG5jb25zdCBDb25mID0gW1xuICAgIFsnLm1kYy10b3AtYXBwLWJhcicsIE1EQ1RvcEFwcEJhcl0sXG4gICAgWycubWRjLXRleHQtZmllbGQnLCBNRENUZXh0RmllbGRdLFxuICAgIFtcbiAgICAgICAgW1xuICAgICAgICAgICAgJy5tZGMtYnV0dG9uJyxcbiAgICAgICAgICAgICcucHJpbWFyeS1hY3Rpb24nLFxuICAgICAgICBdLFxuICAgICAgICBNRENSaXBwbGVcbiAgICBdLFxuXVxuXG5leHBvcnQgZGVmYXVsdCBDb25mIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxOSBNYXNoaXJvXG4gKiBAZGVzY3JpcHRpb24gbWF0ZXJpYWwtY29tcG9uZW50cyBpbml0aWFsIGhhbmRsZXJcbiAqIEBhdXRob3IgTWFzaGlyb1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmltcG9ydCBtZGNDb25mIGZyb20gXCIuL21kY0NvbmZcIlxuXG5jb25zdCBDb25mID0gbWRjQ29uZlxuXG4vKiogXG4gKiBJbml0aWFsIFttYXRlcmlhbC1jb21wb25lbnRzLXdlYl0oaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvKSBcbiAqIHRocm91Z2ggY29uZmlndXJhdGlvbiBpbiBgbWRjQ29uZi50c2BgLlxuICogU2VlIDxodHRwczovL2dpdC5pby9KZWdISj5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb21wb25lbnRzID0gW11cbiAgICBmb3IgKGNvbnN0IGkgb2YgQ29uZikge1xuICAgICAgICBpZiAodHlwZW9mIChpWzBdKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gaVswXVxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBpWzFdXG4gICAgICAgICAgICBjb21wb25lbnRzLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29tcG9uZW50KSwgZnVuY3Rpb24gKGU6IGFueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChpWzBdKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gaVswXS5qb2luKCcsJylcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gaVsxXVxuICAgICAgICAgICAgY29tcG9uZW50cy5tYXAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbXBvbmVudCksIGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTkgTWFzaGlyb1xuICogQGRlc2NyaXB0aW9uIE1haW5cbiAqIEBhdXRob3IgTWFzaGlyb1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuLy8gaW1wb3J0IGNvdmVySW1nSW5pIGZyb20gXCIuL21vZHVsZXMvY292ZXJJbWdJbml0XCJcbmltcG9ydCBoZWFkZXJCYXJTY3JvbGxIYW5kbGVyIGZyb20gXCIuL21vZHVsZXMvaGVhZGVyQmFyU2Nyb2xsSGFuZGxlclwiXG5pbXBvcnQgbWRjSW5pdCBmcm9tIFwiLi9jb21wb25lbnRzL21kY0luaXRcIlxuaW1wb3J0IFBqYXggZnJvbSBcInBqYXhcIlxuaW1wb3J0IGdldEhleEZpbHRlciBmcm9tIFwiLi9tb2R1bGVzL2hleEZpbHRlclwiXG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncGFyYWxsYXgtanMnXG5pbXBvcnQgcmdiMmhleCBmcm9tIFwiLi9tb2R1bGVzL3JnYjJoZXhcIlxuaW1wb3J0IHZoQ2hlY2sgZnJvbSAndmgtY2hlY2snXG5cbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgaGVhZGVyQmFyU2Nyb2xsSGFuZGxlcigpXG59XG5cbi8vIFRPRE86IGdsb2JhbCBjb25maWd1cmF0aW9uXG4vLyBUT0RPOiB0cmFuc3BhcmVudCBiZWZvcmUgY2FsY3VsYXRpb24gYmVlbiBkb25lIVxuLy8gbGV0IHRoZW1lUHJpbWFyeUNvbG9yID0gcmdiMmhleCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKSkuYmFja2dyb3VuZENvbG9yKVxubGV0IHRoZW1lUHJpbWFyeUNvbG9yID0gJyNmY2I4YWInXG5sZXQgdGhlbWVDb2xvckZpbHRlciA9IGdldEhleEZpbHRlcih0aGVtZVByaW1hcnlDb2xvcilcblxudmhDaGVjaygpXG5cbmxldCBJbml0RnVuID0gZnVuY3Rpb24gKCkge1xuICAvLyBjb3ZlckltZ0luaSgpXG4gIG1kY0luaXQoKVxuXG4gIGxldCBjb3ZlckltZ0NvbnRhaW5lciA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LXdyYXBwZXJcIilcbiAgaWYgKHR5cGVvZiAoY292ZXJJbWdDb250YWluZXIpICE9PSAndW5kZWZpbmVkJyAmJiBjb3ZlckltZ0NvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgIGxldCBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC13cmFwcGVyJylcbiAgICBsZXQgcGFyYWxsYXhJbnN0YW5jZSA9IG5ldyBQYXJhbGxheChzY2VuZSk7XG4gIH1cblxuICBsZXQgZm9vdGVyQmVmb3JlID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWJlZm9yZVwiKVxuICBpZiAodHlwZW9mIChmb290ZXJCZWZvcmUpICE9PSAndW5kZWZpbmVkJyAmJiBmb290ZXJCZWZvcmUgIT09IG51bGwpIHtcbiAgICAvLyBUT0RPOiBzZXQgdGhlbWUgY29sb3IgZnVuY3Rpb24hXG4gICAgZm9vdGVyQmVmb3JlLnN0eWxlLmZpbHRlciA9IHRoZW1lQ29sb3JGaWx0ZXJcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBJbml0RnVuKClcblxuICBsZXQgcGpheCA9IG5ldyBQamF4KHtcbiAgICBlbGVtZW50czogXCJhXCIsIC8vIGRlZmF1bHQgaXMgXCJhW2hyZWZdLCBmb3JtW2FjdGlvbl1cIlxuICAgIHNlbGVjdG9yczogW1widGl0bGVcIiwgXCIjcm9vdFwiXSxcbiAgICBjYWNoZUJ1c3Q6IHRydWVcbiAgfSlcblxuICBmdW5jdGlvbiBwamF4UmVsb2FkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdwamF4OmNvbXBsZXRlJylcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL1wiKSB7XG4gICAgICBjb25zb2xlLmxvZyhgaG9tZSFgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgbm90IGhvbWUhYClcbiAgICB9XG4gICAgSW5pdEZ1bigpXG4gIH1cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGpheDpjb21wbGV0ZScsIHBqYXhSZWxvYWQpXG59IiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gU2FrdXJhIHRoZW1lIG1vZHVsZVxuICogQGF1dGhvciBNYXNoaXJvXG4gKiBAc2luY2UgMTkvMTAvMzFcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbmltcG9ydCBzY3JvbGxEaXJlY3Rpb24gZnJvbSBcIi4vc2Nyb2xsRGlyZWN0aW9uXCJcblxuLyoqXG4gKiBTaXRlIHRvcCBiYXIgaGFuZGxlciB3aGVuIHBhZ2Ugc2Nyb2xsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZWxlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWhlYWRlclwiKVxuICAgIGlmIChzY3JvbGxEaXJlY3Rpb24oJ3knKSA9PSAnZG93bicpIHtcbiAgICAgICAgZWxlLnN0eWxlLnRvcCA9IGAtMTIwcHhgXG4gICAgfVxuICAgIGVsc2UgaWYgKHNjcm9sbERpcmVjdGlvbigneScpID09ICd1cCcpIHtcbiAgICAgICAgZWxlLnN0eWxlLnRvcCA9IGAwcHhgXG4gICAgfVxufSIsIi8qKlxuICogQGRlc2NyaXB0aW9uIENTUyBoZXggZmlsdGVyIChodHRwczovL2NvZGVwZW4uaW8vc29zdWtlL3Blbi9Qam9xcXApXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG5jbGFzcyBDb2xvciB7XG4gICAgY29uc3RydWN0b3IociwgZywgYikge1xuICAgICAgICB0aGlzLnNldChyLCBnLCBiKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHtNYXRoLnJvdW5kKHRoaXMucil9LCAke01hdGgucm91bmQodGhpcy5nKX0sICR7TWF0aC5yb3VuZCh0aGlzLmIpfSlgO1xuICAgIH1cblxuICAgIHNldChyLCBnLCBiKSB7XG4gICAgICAgIHRoaXMuciA9IHRoaXMuY2xhbXAocik7XG4gICAgICAgIHRoaXMuZyA9IHRoaXMuY2xhbXAoZyk7XG4gICAgICAgIHRoaXMuYiA9IHRoaXMuY2xhbXAoYik7XG4gICAgfVxuXG4gICAgaHVlUm90YXRlKGFuZ2xlID0gMCkge1xuICAgICAgICBhbmdsZSA9IGFuZ2xlIC8gMTgwICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5tdWx0aXBseShbXG4gICAgICAgICAgICAwLjIxMyArIGNvcyAqIDAuNzg3IC0gc2luICogMC4yMTMsXG4gICAgICAgICAgICAwLjcxNSAtIGNvcyAqIDAuNzE1IC0gc2luICogMC43MTUsXG4gICAgICAgICAgICAwLjA3MiAtIGNvcyAqIDAuMDcyICsgc2luICogMC45MjgsXG4gICAgICAgICAgICAwLjIxMyAtIGNvcyAqIDAuMjEzICsgc2luICogMC4xNDMsXG4gICAgICAgICAgICAwLjcxNSArIGNvcyAqIDAuMjg1ICsgc2luICogMC4xNDAsXG4gICAgICAgICAgICAwLjA3MiAtIGNvcyAqIDAuMDcyIC0gc2luICogMC4yODMsXG4gICAgICAgICAgICAwLjIxMyAtIGNvcyAqIDAuMjEzIC0gc2luICogMC43ODcsXG4gICAgICAgICAgICAwLjcxNSAtIGNvcyAqIDAuNzE1ICsgc2luICogMC43MTUsXG4gICAgICAgICAgICAwLjA3MiArIGNvcyAqIDAuOTI4ICsgc2luICogMC4wNzIsXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGdyYXlzY2FsZSh2YWx1ZSA9IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBseShbXG4gICAgICAgICAgICAwLjIxMjYgKyAwLjc4NzQgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNzE1MiAtIDAuNzE1MiAqICgxIC0gdmFsdWUpLFxuICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNzE1MiArIDAuMjg0OCAqICgxIC0gdmFsdWUpLFxuICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2YWx1ZSksXG4gICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNzE1MiAtIDAuNzE1MiAqICgxIC0gdmFsdWUpLFxuICAgICAgICAgICAgMC4wNzIyICsgMC45Mjc4ICogKDEgLSB2YWx1ZSksXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIHNlcGlhKHZhbHVlID0gMSkge1xuICAgICAgICB0aGlzLm11bHRpcGx5KFtcbiAgICAgICAgICAgIDAuMzkzICsgMC42MDcgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNzY5IC0gMC43NjkgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMTg5IC0gMC4xODkgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMzQ5IC0gMC4zNDkgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNjg2ICsgMC4zMTQgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMTY4IC0gMC4xNjggKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMjcyIC0gMC4yNzIgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuNTM0IC0gMC41MzQgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgICAgIDAuMTMxICsgMC44NjkgKiAoMSAtIHZhbHVlKSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgc2F0dXJhdGUodmFsdWUgPSAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbHkoW1xuICAgICAgICAgICAgMC4yMTMgKyAwLjc4NyAqIHZhbHVlLFxuICAgICAgICAgICAgMC43MTUgLSAwLjcxNSAqIHZhbHVlLFxuICAgICAgICAgICAgMC4wNzIgLSAwLjA3MiAqIHZhbHVlLFxuICAgICAgICAgICAgMC4yMTMgLSAwLjIxMyAqIHZhbHVlLFxuICAgICAgICAgICAgMC43MTUgKyAwLjI4NSAqIHZhbHVlLFxuICAgICAgICAgICAgMC4wNzIgLSAwLjA3MiAqIHZhbHVlLFxuICAgICAgICAgICAgMC4yMTMgLSAwLjIxMyAqIHZhbHVlLFxuICAgICAgICAgICAgMC43MTUgLSAwLjcxNSAqIHZhbHVlLFxuICAgICAgICAgICAgMC4wNzIgKyAwLjkyOCAqIHZhbHVlLFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBtdWx0aXBseShtYXRyaXgpIHtcbiAgICAgICAgY29uc3QgbmV3UiA9IHRoaXMuY2xhbXAodGhpcy5yICogbWF0cml4WzBdICsgdGhpcy5nICogbWF0cml4WzFdICsgdGhpcy5iICogbWF0cml4WzJdKTtcbiAgICAgICAgY29uc3QgbmV3RyA9IHRoaXMuY2xhbXAodGhpcy5yICogbWF0cml4WzNdICsgdGhpcy5nICogbWF0cml4WzRdICsgdGhpcy5iICogbWF0cml4WzVdKTtcbiAgICAgICAgY29uc3QgbmV3QiA9IHRoaXMuY2xhbXAodGhpcy5yICogbWF0cml4WzZdICsgdGhpcy5nICogbWF0cml4WzddICsgdGhpcy5iICogbWF0cml4WzhdKTtcbiAgICAgICAgdGhpcy5yID0gbmV3UjtcbiAgICAgICAgdGhpcy5nID0gbmV3RztcbiAgICAgICAgdGhpcy5iID0gbmV3QjtcbiAgICB9XG5cbiAgICBicmlnaHRuZXNzKHZhbHVlID0gMSkge1xuICAgICAgICB0aGlzLmxpbmVhcih2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnRyYXN0KHZhbHVlID0gMSkge1xuICAgICAgICB0aGlzLmxpbmVhcih2YWx1ZSwgLSgwLjUgKiB2YWx1ZSkgKyAwLjUpO1xuICAgIH1cblxuICAgIGxpbmVhcihzbG9wZSA9IDEsIGludGVyY2VwdCA9IDApIHtcbiAgICAgICAgdGhpcy5yID0gdGhpcy5jbGFtcCh0aGlzLnIgKiBzbG9wZSArIGludGVyY2VwdCAqIDI1NSk7XG4gICAgICAgIHRoaXMuZyA9IHRoaXMuY2xhbXAodGhpcy5nICogc2xvcGUgKyBpbnRlcmNlcHQgKiAyNTUpO1xuICAgICAgICB0aGlzLmIgPSB0aGlzLmNsYW1wKHRoaXMuYiAqIHNsb3BlICsgaW50ZXJjZXB0ICogMjU1KTtcbiAgICB9XG5cbiAgICBpbnZlcnQodmFsdWUgPSAxKSB7XG4gICAgICAgIHRoaXMuciA9IHRoaXMuY2xhbXAoKHZhbHVlICsgdGhpcy5yIC8gMjU1ICogKDEgLSAyICogdmFsdWUpKSAqIDI1NSk7XG4gICAgICAgIHRoaXMuZyA9IHRoaXMuY2xhbXAoKHZhbHVlICsgdGhpcy5nIC8gMjU1ICogKDEgLSAyICogdmFsdWUpKSAqIDI1NSk7XG4gICAgICAgIHRoaXMuYiA9IHRoaXMuY2xhbXAoKHZhbHVlICsgdGhpcy5iIC8gMjU1ICogKDEgLSAyICogdmFsdWUpKSAqIDI1NSk7XG4gICAgfVxuXG4gICAgaHNsKCkge1xuICAgICAgICAvLyBDb2RlIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzk0OTMwNjAvMjY4ODAyNywgbGljZW5zZWQgdW5kZXIgQ0MgQlktU0EuXG4gICAgICAgIGNvbnN0IHIgPSB0aGlzLnIgLyAyNTU7XG4gICAgICAgIGNvbnN0IGcgPSB0aGlzLmcgLyAyNTU7XG4gICAgICAgIGNvbnN0IGIgPSB0aGlzLmIgLyAyNTU7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbGV0IGgsIHMsIGwgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgICAgICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICAgICAgICBoID0gcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBiOlxuICAgICAgICAgICAgICAgICAgICBoID0gKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGggLz0gNjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoOiBoICogMTAwLFxuICAgICAgICAgICAgczogcyAqIDEwMCxcbiAgICAgICAgICAgIGw6IGwgKiAxMDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2xhbXAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID4gMjU1KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDI1NTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBTb2x2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgYmFzZUNvbG9yKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnRhcmdldEhTTCA9IHRhcmdldC5oc2woKTtcbiAgICAgICAgdGhpcy5yZXVzZWRDb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwKTtcbiAgICB9XG5cbiAgICBzb2x2ZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zb2x2ZU5hcnJvdyh0aGlzLnNvbHZlV2lkZSgpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlczogcmVzdWx0LnZhbHVlcyxcbiAgICAgICAgICAgIGxvc3M6IHJlc3VsdC5sb3NzLFxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmNzcyhyZXN1bHQudmFsdWVzKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzb2x2ZVdpZGUoKSB7XG4gICAgICAgIGNvbnN0IEEgPSA1O1xuICAgICAgICBjb25zdCBjID0gMTU7XG4gICAgICAgIGNvbnN0IGEgPSBbNjAsIDE4MCwgMTgwMDAsIDYwMCwgMS4yLCAxLjJdO1xuXG4gICAgICAgIGxldCBiZXN0ID0geyBsb3NzOiBJbmZpbml0eSB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgYmVzdC5sb3NzID4gMjUgJiYgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5pdGlhbCA9IFs1MCwgMjAsIDM3NTAsIDUwLCAxMDAsIDEwMF07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNwc2EoQSwgYSwgYywgaW5pdGlhbCwgMTAwMCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxvc3MgPCBiZXN0Lmxvc3MpIHtcbiAgICAgICAgICAgICAgICBiZXN0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0O1xuICAgIH1cblxuICAgIHNvbHZlTmFycm93KHdpZGUpIHtcbiAgICAgICAgY29uc3QgQSA9IHdpZGUubG9zcztcbiAgICAgICAgY29uc3QgYyA9IDI7XG4gICAgICAgIGNvbnN0IEExID0gQSArIDE7XG4gICAgICAgIGNvbnN0IGEgPSBbMC4yNSAqIEExLCAwLjI1ICogQTEsIEExLCAwLjI1ICogQTEsIDAuMiAqIEExLCAwLjIgKiBBMV07XG4gICAgICAgIHJldHVybiB0aGlzLnNwc2EoQSwgYSwgYywgd2lkZS52YWx1ZXMsIDUwMCk7XG4gICAgfVxuXG4gICAgc3BzYShBLCBhLCBjLCB2YWx1ZXMsIGl0ZXJzKSB7XG4gICAgICAgIGNvbnN0IGFscGhhID0gMTtcbiAgICAgICAgY29uc3QgZ2FtbWEgPSAwLjE2NjY2NjY2NjY2NjY2NjY2O1xuXG4gICAgICAgIGxldCBiZXN0ID0gbnVsbDtcbiAgICAgICAgbGV0IGJlc3RMb3NzID0gSW5maW5pdHk7XG4gICAgICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBBcnJheSg2KTtcbiAgICAgICAgY29uc3QgaGlnaEFyZ3MgPSBuZXcgQXJyYXkoNik7XG4gICAgICAgIGNvbnN0IGxvd0FyZ3MgPSBuZXcgQXJyYXkoNik7XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpdGVyczsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBjayA9IGMgLyBNYXRoLnBvdyhrICsgMSwgZ2FtbWEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICBkZWx0YXNbaV0gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGhpZ2hBcmdzW2ldID0gdmFsdWVzW2ldICsgY2sgKiBkZWx0YXNbaV07XG4gICAgICAgICAgICAgICAgbG93QXJnc1tpXSA9IHZhbHVlc1tpXSAtIGNrICogZGVsdGFzW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb3NzRGlmZiA9IHRoaXMubG9zcyhoaWdoQXJncykgLSB0aGlzLmxvc3MobG93QXJncyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBsb3NzRGlmZiAvICgyICogY2spICogZGVsdGFzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFrID0gYVtpXSAvIE1hdGgucG93KEEgKyBrICsgMSwgYWxwaGEpO1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IGZpeCh2YWx1ZXNbaV0gLSBhayAqIGcsIGkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsb3NzID0gdGhpcy5sb3NzKHZhbHVlcyk7XG4gICAgICAgICAgICBpZiAobG9zcyA8IGJlc3RMb3NzKSB7XG4gICAgICAgICAgICAgICAgYmVzdCA9IHZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICBiZXN0TG9zcyA9IGxvc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWVzOiBiZXN0LCBsb3NzOiBiZXN0TG9zcyB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpeCh2YWx1ZSwgaWR4KSB7XG4gICAgICAgICAgICBsZXQgbWF4ID0gMTAwO1xuICAgICAgICAgICAgaWYgKGlkeCA9PT0gMiAvKiBzYXR1cmF0ZSAqLykge1xuICAgICAgICAgICAgICAgIG1heCA9IDc1MDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkeCA9PT0gNCAvKiBicmlnaHRuZXNzICovIHx8IGlkeCA9PT0gNSAvKiBjb250cmFzdCAqLykge1xuICAgICAgICAgICAgICAgIG1heCA9IDIwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlkeCA9PT0gMyAvKiBodWUtcm90YXRlICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICU9IG1heDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1heCArIHZhbHVlICUgbWF4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9zcyhmaWx0ZXJzKSB7XG4gICAgICAgIC8vIEFyZ3VtZW50IGlzIGFycmF5IG9mIHBlcmNlbnRhZ2VzLlxuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMucmV1c2VkQ29sb3I7XG4gICAgICAgIGNvbG9yLnNldCgwLCAwLCAwKTtcblxuICAgICAgICBjb2xvci5pbnZlcnQoZmlsdGVyc1swXSAvIDEwMCk7XG4gICAgICAgIGNvbG9yLnNlcGlhKGZpbHRlcnNbMV0gLyAxMDApO1xuICAgICAgICBjb2xvci5zYXR1cmF0ZShmaWx0ZXJzWzJdIC8gMTAwKTtcbiAgICAgICAgY29sb3IuaHVlUm90YXRlKGZpbHRlcnNbM10gKiAzLjYpO1xuICAgICAgICBjb2xvci5icmlnaHRuZXNzKGZpbHRlcnNbNF0gLyAxMDApO1xuICAgICAgICBjb2xvci5jb250cmFzdChmaWx0ZXJzWzVdIC8gMTAwKTtcblxuICAgICAgICBjb25zdCBjb2xvckhTTCA9IGNvbG9yLmhzbCgpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgTWF0aC5hYnMoY29sb3IuciAtIHRoaXMudGFyZ2V0LnIpICtcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbG9yLmcgLSB0aGlzLnRhcmdldC5nKSArXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xvci5iIC0gdGhpcy50YXJnZXQuYikgK1xuICAgICAgICAgICAgTWF0aC5hYnMoY29sb3JIU0wuaCAtIHRoaXMudGFyZ2V0SFNMLmgpICtcbiAgICAgICAgICAgIE1hdGguYWJzKGNvbG9ySFNMLnMgLSB0aGlzLnRhcmdldEhTTC5zKSArXG4gICAgICAgICAgICBNYXRoLmFicyhjb2xvckhTTC5sIC0gdGhpcy50YXJnZXRIU0wubClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjc3MoZmlsdGVycykge1xuICAgICAgICBmdW5jdGlvbiBmbXQoaWR4LCBtdWx0aXBsaWVyID0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZmlsdGVyc1tpZHhdICogbXVsdGlwbGllcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBpbnZlcnQoJHtmbXQoMCl9JSkgc2VwaWEoJHtmbXQoMSl9JSkgc2F0dXJhdGUoJHtmbXQoMil9JSkgaHVlLXJvdGF0ZSgke2ZtdCgzLCAzLjYpfWRlZykgYnJpZ2h0bmVzcygke2ZtdCg0KX0lKSBjb250cmFzdCgke2ZtdCg1KX0lKWA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICAvLyBFeHBhbmQgc2hvcnRoYW5kIGZvcm0gKGUuZy4gXCIwM0ZcIikgdG8gZnVsbCBmb3JtIChlLmcuIFwiMDAzM0ZGXCIpXG4gICAgY29uc3Qgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICAgIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCAobSwgciwgZywgYikgPT4ge1xuICAgICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICAgICAgcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgICAgICBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgICAgXVxuICAgICAgICA6IG51bGw7XG59XG5cbi8qKlxuICogQ29udmVydCAjMDAwIGJhY2tncm91bmQgdG8gYW55IGNvbG9yLiBcbiAqIEl1cHV0IGEgaGV4IHRyaXBsZXQgYW5kIHJldHVybiBmaWx0ZXIuXG4gKiBcbiAqIFVzYWdlOiBcbiAqIGBgYGpzXG4gKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvbicpLnN0eWxlLmZpbHRlciA9IGdldEhleEZpbHRlcignIzFhMjYzZCcpO1xuICogYGBgXG4gKiAgSWYgeW91ciBpY29uIHNldCBpc24ndCBibGFjayB5b3UgY2FuIHByZXBlbmQgXCJicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpXCIgdG8geW91ciBmaWx0ZXIgcHJvcGVydHkgd2hpY2ggd2lsbCBmaXJzdCB0dXJuIHRoZSBpY29uIHNldCB0byBibGFjay5cbiAqIFxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgaGV4ICAgICBIZXggdHJpcGxldCwgZWc6IGAnIzFhMjYzZCdgLCBgI2ZmZmBcbiAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgICAgICAgQ1NTIGZpbHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaGV4OiBzdHJpbmcgPSAnIzFhMjYzZCcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJnYiA9IGhleFRvUmdiKGhleCk7XG4gICAgaWYgKHJnYi5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgZm9ybWF0IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IocmdiWzBdLCByZ2JbMV0sIHJnYlsyXSk7XG4gICAgY29uc3Qgc29sdmVyID0gbmV3IFNvbHZlcihjb2xvcik7XG4gICAgY29uc3QgcmVzdWx0ID0gc29sdmVyLnNvbHZlKCk7XG5cbiAgICBsZXQgbG9zc01zZztcbiAgICBpZiAocmVzdWx0Lmxvc3MgPCAxKSB7XG4gICAgICAgIGxvc3NNc2cgPSAnVGhpcyBpcyBhIHBlcmZlY3QgcmVzdWx0Lic7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQubG9zcyA8IDUpIHtcbiAgICAgICAgbG9zc01zZyA9ICdUaGUgaXMgY2xvc2UgZW5vdWdoLic7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQubG9zcyA8IDE1KSB7XG4gICAgICAgIGxvc3NNc2cgPSAnVGhlIGNvbG9yIGlzIHNvbWV3aGF0IG9mZi4gQ29uc2lkZXIgcnVubmluZyBpdCBhZ2Fpbi4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvc3NNc2cgPSAnVGhlIGNvbG9yIGlzIGV4dHJlbWVseSBvZmYuIFJ1biBpdCBhZ2FpbiEnO1xuICAgIH1cblxuICAgIHJldHVybiBgYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSAke3Jlc3VsdC5maWx0ZXJ9YDtcbn1cbiIsIi8qKlxuICogQGRlc2NyaXB0aW9uIFNha3VyYSB0aGVtZSBtb2R1bGVcbiAqIEBhdXRob3IgTWFzaGlyb1xuICogQHNpbmNlIDE5LzEwLzMxXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG5sZXQgc2Nyb2xsQWN0aW9uOiB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICBkOiBzdHJpbmdcbn0gPSB7XG4gICAgeDogdW5kZWZpbmVkLFxuICAgIHk6IHVuZGVmaW5lZCxcbiAgICBkOiB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBEZXRlY3Qgd2luZG93IHNjcm9sbCBkaXJlY3Rpb25cbiAqIEBwYXJhbSAge3N0cmluZ30gIGRpcmVjdGlvbiAgb3B0aW9uOiBgWWAvYHlgIC0gaG9yaXpvbnRhbDsgYFhgL2B4YCAtIHZlcnRpY2FsXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgICAgIHJldHVybiB3aW5kb3cgc2Nyb2xsIGRpcmVjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAoc2Nyb2xsQWN0aW9uLnggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcm9sbEFjdGlvbi54ID0gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgIHNjcm9sbEFjdGlvbi55ID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgfVxuICAgIGxldCBkaWZmWCA9IHNjcm9sbEFjdGlvbi54IC0gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgbGV0IGRpZmZZID0gc2Nyb2xsQWN0aW9uLnkgLSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICBpZiAoZGlyZWN0aW9uID09ICd4JyB8fCBkaXJlY3Rpb24gPT0gJ1gnICkge1xuICAgICAgICBpZiAoZGlmZlggPCAwKSB7XG4gICAgICAgICAgICBzY3JvbGxBY3Rpb24uZCA9ICdyaWdodCdcbiAgICAgICAgfSBlbHNlIGlmIChkaWZmWCA+IDApIHtcbiAgICAgICAgICAgIHNjcm9sbEFjdGlvbi5kID0gJ2xlZnQnXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGlmZlkgPCAwKSB7XG4gICAgICAgICAgICBzY3JvbGxBY3Rpb24uZCA9ICdkb3duJ1xuICAgICAgICB9IGVsc2UgaWYgKGRpZmZZID4gMCkge1xuICAgICAgICAgICAgc2Nyb2xsQWN0aW9uLmQgPSAndXAnXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2Nyb2xsQWN0aW9uLnggPSB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICBzY3JvbGxBY3Rpb24ueSA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIHJldHVybiBzY3JvbGxBY3Rpb24uZFxufSJdLCJzb3VyY2VSb290IjoiIn0=