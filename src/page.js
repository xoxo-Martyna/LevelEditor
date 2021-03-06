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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/page.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background: #222222;\n  color: #fff;\n  font-family: \"Segoe UI\", sans-serif;\n  user-select: none; }\n\nmain {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #383838;\n  display: flex; }\n  main div.toolbar {\n    min-width: 36px;\n    padding: 2px;\n    border-right: 1px solid #fff1;\n    overflow-y: auto; }\n    main div.toolbar div.separator {\n      height: 1px;\n      background: #fff1;\n      margin: 4px 2px; }\n    main div.toolbar div.tool {\n      position: relative;\n      font-size: 0;\n      padding: 2px;\n      border-radius: 2px;\n      display: flex;\n      align-items: center; }\n      main div.toolbar div.tool img {\n        width: 24px;\n        height: 24px; }\n      main div.toolbar div.tool p {\n        color: #fff;\n        font-size: 9pt;\n        margin: 0 0 0 2px; }\n      main div.toolbar div.tool:hover {\n        background: #fff1; }\n      main div.toolbar div.tool:active {\n        background: #fff2; }\n      main div.toolbar div.tool.active {\n        background: #161616; }\n  main aside {\n    width: 250px;\n    min-width: 250px;\n    border-left: 1px solid #fff1;\n    display: flex;\n    flex-direction: column; }\n    main aside section {\n      display: flex;\n      flex-direction: column; }\n      main aside section:not(:last-child) {\n        border-bottom: 1px solid #fff1; }\n      main aside section header {\n        font-size: 10pt;\n        font-weight: 400;\n        text-align: center;\n        padding: 2px;\n        opacity: 0.5; }\n      main aside section div.layerViz {\n        display: flex; }\n        main aside section div.layerViz label {\n          font-size: 10pt;\n          padding-left: 8px;\n          flex-grow: 1; }\n      main aside section.tileList {\n        flex-grow: 1;\n        overflow-y: auto; }\n        main aside section.tileList div.tileList:not(.visible) {\n          display: none; }\n        main aside section.tileList div.tileList div.tile {\n          position: relative;\n          padding: 4px 8px;\n          border-radius: 2px;\n          display: flex;\n          align-items: center; }\n          main aside section.tileList div.tileList div.tile img {\n            width: 32px;\n            height: 32px;\n            margin-right: 4px; }\n          main aside section.tileList div.tileList div.tile:hover {\n            background: #fff1; }\n          main aside section.tileList div.tileList div.tile:active {\n            background: #fff2; }\n          main aside section.tileList div.tileList div.tile.active {\n            background: #161616; }\n          main aside section.tileList div.tileList div.tile p {\n            font-size: 10pt;\n            text-align: center;\n            margin: 0; }\n          main aside section.tileList div.tileList div.tile.floor::after {\n            position: absolute;\n            right: 8px;\n            top: 50%;\n            background: #888;\n            color: #000;\n            content: \"Floor\";\n            font-size: 10pt;\n            font-weight: 700;\n            padding: 2px 8px;\n            border-radius: 6px;\n            transform: translatey(-50%); }\n          main aside section.tileList div.tileList div.tile.wall::after {\n            position: absolute;\n            right: 8px;\n            top: 50%;\n            background: magenta;\n            color: #000;\n            content: \"Wall\";\n            font-size: 10pt;\n            font-weight: 700;\n            padding: 2px 8px;\n            border-radius: 6px;\n            transform: translatey(-50%); }\n          main aside section.tileList div.tileList div.tile.water::after {\n            position: absolute;\n            right: 8px;\n            top: 50%;\n            background: #55f;\n            color: #000;\n            content: \"Water\";\n            font-size: 10pt;\n            font-weight: 700;\n            padding: 2px 8px;\n            border-radius: 6px;\n            transform: translatey(-50%); }\n          main aside section.tileList div.tileList div.tile.door::after {\n            position: absolute;\n            right: 8px;\n            top: 50%;\n            background: #87cf4b;\n            color: #000;\n            content: \"Door\";\n            font-size: 10pt;\n            font-weight: 700;\n            padding: 2px 8px;\n            border-radius: 6px;\n            transform: translatey(-50%); }\n          main aside section.tileList div.tileList div.tile.attack::after {\n            position: absolute;\n            right: 8px;\n            top: 50%;\n            background: #f55;\n            color: #000;\n            content: \"Attack\";\n            font-size: 10pt;\n            font-weight: 700;\n            padding: 2px 8px;\n            border-radius: 6px;\n            transform: translatey(-50%); }\n          main aside section.tileList div.tileList div.tile.defense::after {\n            position: absolute;\n            right: 8px;\n            top: 50%;\n            background: #55f;\n            color: #000;\n            content: \"Defense\";\n            font-size: 10pt;\n            font-weight: 700;\n            padding: 2px 8px;\n            border-radius: 6px;\n            transform: translatey(-50%); }\n          main aside section.tileList div.tileList div.tile.health::after {\n            position: absolute;\n            right: 8px;\n            top: 50%;\n            background: #2f6;\n            color: #000;\n            content: \"Health\";\n            font-size: 10pt;\n            font-weight: 700;\n            padding: 2px 8px;\n            border-radius: 6px;\n            transform: translatey(-50%); }\n  main div.canvasContainer {\n    position: relative;\n    overflow: hidden;\n    flex-grow: 1; }\n    main div.canvasContainer canvas {\n      background: #1b1b1b; }\n    main div.canvasContainer div.viewerCoordinates {\n      position: absolute;\n      top: 8px;\n      right: 8px;\n      background: #0008;\n      font-family: monospace;\n      text-align: right;\n      padding: 8px 16px;\n      pointer-events: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/editor/door.ts":
/*!****************************!*\
  !*** ./src/editor/door.ts ***!
  \****************************/
/*! exports provided: Door */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Door", function() { return Door; });
var Door = /** @class */ (function () {
    function Door(tile, x, y) {
        this.tile = tile;
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
    }
    return Door;
}());



/***/ }),

/***/ "./src/editor/item.ts":
/*!****************************!*\
  !*** ./src/editor/item.ts ***!
  \****************************/
/*! exports provided: ItemType, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return ItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var ItemType;
(function (ItemType) {
    ItemType["attack"] = "attack";
    ItemType["health"] = "health";
    ItemType["defense"] = "defense";
})(ItemType || (ItemType = {}));
var Item = /** @class */ (function () {
    function Item(id, imageId, name, type, points) {
        this.id = id;
        this.imageId = imageId;
        this.name = name;
        this.type = type;
        this.points = points;
    }
    Item.prototype.loadImage = function () {
        var _this = this;
        this.itemImage = new Image();
        return new Promise(function (resolve, reject) {
            _this.itemImage.addEventListener("load", function () {
                resolve();
            });
            _this.itemImage.src = "../res/items/" + _this.imageId + ".png";
        });
    };
    return Item;
}());



/***/ }),

/***/ "./src/editor/level.ts":
/*!*****************************!*\
  !*** ./src/editor/level.ts ***!
  \*****************************/
/*! exports provided: TileInstance, ItemInstance, OpponentInstance, Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileInstance", function() { return TileInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemInstance", function() { return ItemInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpponentInstance", function() { return OpponentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony import */ var _door__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./door */ "./src/editor/door.ts");

var TileInstance = /** @class */ (function () {
    function TileInstance(tile, x, y) {
        this.tile = tile;
        this.x = x;
        this.y = y;
    }
    return TileInstance;
}());

var ItemInstance = /** @class */ (function () {
    function ItemInstance(item, x, y) {
        this.item = item;
        this.x = x;
        this.y = y;
    }
    return ItemInstance;
}());

var OpponentInstance = /** @class */ (function () {
    function OpponentInstance(opponent, x, y) {
        this.opponent = opponent;
        this.x = x;
        this.y = y;
    }
    return OpponentInstance;
}());

var Level = /** @class */ (function () {
    function Level(context, tiles, items, opponents, spawnX, spawnY) {
        if (tiles === void 0) { tiles = []; }
        if (items === void 0) { items = []; }
        if (opponents === void 0) { opponents = []; }
        this.context = context;
        this.tiles = tiles;
        this.items = items;
        this.opponents = opponents;
        this.spawnX = spawnX;
        this.spawnY = spawnY;
    }
    Object.defineProperty(Level.prototype, "slices", {
        get: function () {
            var sliceStrings = [
                "0,0" // There's always the top-left slice
            ];
            this.tiles.forEach(function (tile) {
                var sliceString = Math.floor(tile.x / 10) + "," + Math.floor(tile.y / 10);
                if (!sliceStrings.includes(sliceString))
                    sliceStrings.push(sliceString);
            });
            return sliceStrings.map(function (sliceStr) {
                var split = sliceStr.split(",");
                return {
                    x: +split[0],
                    y: +split[1]
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "dimensions", {
        get: function () {
            var width = Math.max.apply(Math, this.tiles.map(function (i) { return i.x; })) + 1;
            var height = Math.max.apply(Math, this.tiles.map(function (i) { return i.y; })) + 1;
            return {
                x: Math.ceil(width / 10) * 10,
                y: Math.ceil(height / 10) * 10,
            };
        },
        enumerable: true,
        configurable: true
    });
    Level.prototype.getOpponentAt = function (x, y) {
        return this.opponents.find(function (t) { return t.x === x && t.y === y; });
    };
    Level.prototype.deleteOpponentAt = function (x, y) {
        var instance = this.getOpponentAt(x, y);
        if (instance)
            this.opponents.splice(this.opponents.indexOf(instance), 1);
    };
    Level.prototype.setOpponentAt = function (x, y, opponent) {
        var instance = this.getOpponentAt(x, y);
        if (instance) {
            instance.opponent = opponent;
        }
        else {
            this.opponents.push(new OpponentInstance(opponent, x, y));
        }
    };
    Level.prototype.getItemAt = function (x, y) {
        return this.items.find(function (t) { return t.x === x && t.y === y; });
    };
    Level.prototype.deleteItemAt = function (x, y) {
        var instance = this.getItemAt(x, y);
        if (instance)
            this.items.splice(this.items.indexOf(instance), 1);
    };
    Level.prototype.setItemAt = function (x, y, item) {
        var instance = this.getItemAt(x, y);
        if (instance) {
            instance.item = item;
        }
        else {
            this.items.push(new ItemInstance(item, x, y));
        }
    };
    Level.prototype.getTileAt = function (x, y) {
        return this.tiles.find(function (t) { return t.x === x && t.y === y; });
    };
    Level.prototype.deleteTileAt = function (x, y) {
        var instance = this.getTileAt(x, y);
        if (instance)
            this.tiles.splice(this.tiles.indexOf(instance), 1);
    };
    Level.prototype.setTileAt = function (x, y, tile) {
        var instance = this.getTileAt(x, y);
        if (instance) {
            if (instance instanceof _door__WEBPACK_IMPORTED_MODULE_0__["Door"] && tile.door ||
                instance instanceof TileInstance && !tile.door) {
                instance.tile = tile;
            }
            else {
                this.tiles.splice(this.tiles.findIndex(function (i) { return i.x === x && i.y === y; }), 1);
                this.setTileAt(x, y, tile);
            }
        }
        else {
            this.tiles.push(tile.door ? new _door__WEBPACK_IMPORTED_MODULE_0__["Door"](tile, x, y)
                : new TileInstance(tile, x, y));
        }
    };
    Level.prototype.exportSlice = function (levelPrefix, slice) {
        var tiles = [];
        var lines = [];
        var left = slice.x * 10;
        var top = slice.y * 10;
        lines.push("Dimensions 10 10");
        if (this.spawnX >= left ||
            this.spawnY >= top ||
            this.spawnX < left + 10 ||
            this.spawnY < top + 10)
            lines.push("SpawnPoint " + this.spawnX + " " + this.spawnY);
        this.tiles.forEach(function (tile) {
            if (tile.x < left ||
                tile.y < top ||
                tile.x >= left + 10 ||
                tile.y >= top + 10)
                return;
            if (tile instanceof _door__WEBPACK_IMPORTED_MODULE_0__["Door"]) {
                var targetSuffix = "_" + Math.floor(tile.targetX / 10) + "_" + Math.floor(tile.targetY / 10);
                lines.push("DoorTile " + tile.tile.id + " " + (tile.x - left) + " " + (tile.y - top) + " " + levelPrefix + targetSuffix + " " + (tile.targetX - Math.floor(tile.targetX / 10) * 10) + " " + (tile.targetY - Math.floor(tile.targetY / 10) * 10));
            }
            else {
                var tileref = tiles.find(function (t) { return t.tile === tile.tile; });
                if (!tileref) {
                    tiles.push({
                        tile: tile.tile,
                        coords: [tile.x - left, tile.y - top]
                    });
                }
                else {
                    tileref.coords.push(tile.x - left, tile.y - top);
                }
            }
        });
        tiles.forEach(function (tileref) {
            var tileData = tileref.tile.id + " " + tileref.coords.join(" ");
            if (tileref.tile.water) {
                lines.push("WaterTile " + tileData);
            }
            else {
                lines.push("Tile " + tileData);
            }
        });
        lines.push("");
        this.items.forEach(function (item) {
            if (item.x < left ||
                item.y < top ||
                item.x >= left + 10 ||
                item.y >= top + 10)
                return;
            lines.push("Item " + item.item.id + " " + (item.x - left) + " " + (item.y - top));
        });
        lines.push("");
        this.opponents.forEach(function (opponent) {
            if (opponent.x < left ||
                opponent.y < top ||
                opponent.x >= left + 10 ||
                opponent.y >= top + 10)
                return;
            lines.push("Opponent " + opponent.opponent.id + " " + (opponent.x - left) + " " + (opponent.y - top));
        });
        lines.push("");
        lines.push("LightSource ambient 1.0 1.0 1.0");
        return lines.join("\n");
    };
    Level.prototype.exportSlices = function (levelPrefix) {
        var _this = this;
        console.log(levelPrefix);
        return this.slices.map(function (slice) {
            return {
                sliceSuffix: "_" + slice.x + "_" + slice.y + ".xoxo",
                sliceData: _this.exportSlice(levelPrefix, slice)
            };
        });
    };
    Level.fromFileData = function (context, data) {
        var json = JSON.parse(data);
        var tiles = json.tiles.map(function (tilespec) {
            var tile = context.availableTiles.find(function (t) { return t.id === tilespec.id; });
            if (tilespec.door) {
                var door = new _door__WEBPACK_IMPORTED_MODULE_0__["Door"](tile, tilespec.x, tilespec.y);
                door.targetX = tilespec.targetX;
                door.targetY = tilespec.targetY;
                return door;
            }
            else {
                return new TileInstance(tile, tilespec.x, tilespec.y);
            }
        });
        var items = json.items.map(function (itemspec) {
            var item = context.availableItems.find(function (i) { return i.id === itemspec.id; });
            return new ItemInstance(item, itemspec.x, itemspec.y);
        });
        var opponents = json.opponents.map(function (oppspec) {
            var opponent = context.availableOpponents.find(function (i) { return i.id === oppspec.id; });
            return new OpponentInstance(opponent, oppspec.x, oppspec.y);
        });
        return new Level(context, tiles, items, opponents, json.spawn.x, json.spawn.y);
    };
    Object.defineProperty(Level.prototype, "fileData", {
        get: function () {
            return JSON.stringify({
                spawn: {
                    x: this.spawnX,
                    y: this.spawnY
                },
                tiles: this.tiles.map(function (tile) {
                    if (tile instanceof _door__WEBPACK_IMPORTED_MODULE_0__["Door"]) {
                        return {
                            door: true,
                            x: tile.x,
                            y: tile.y,
                            targetX: tile.targetX,
                            targetY: tile.targetY,
                            id: tile.tile.id
                        };
                    }
                    else {
                        return {
                            x: tile.x,
                            y: tile.y,
                            id: tile.tile.id
                        };
                    }
                }),
                items: this.items.map(function (item) {
                    return {
                        x: item.x,
                        y: item.y,
                        id: item.item.id
                    };
                }),
                opponents: this.opponents.map(function (opponent) {
                    return {
                        x: opponent.x,
                        y: opponent.y,
                        id: opponent.opponent.id
                    };
                })
            });
        },
        enumerable: true,
        configurable: true
    });
    return Level;
}());



/***/ }),

/***/ "./src/editor/opponent.ts":
/*!********************************!*\
  !*** ./src/editor/opponent.ts ***!
  \********************************/
/*! exports provided: Opponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opponent", function() { return Opponent; });
var Opponent = /** @class */ (function () {
    function Opponent(id, name) {
        this.id = id;
        this.name = name;
    }
    Opponent.prototype.loadImage = function () {
        var _this = this;
        this.opponentImage = new Image();
        return new Promise(function (resolve, reject) {
            _this.opponentImage.addEventListener("load", function () {
                resolve();
            });
            _this.opponentImage.src = "../res/opponents/" + _this.id + ".png";
        });
    };
    return Opponent;
}());



/***/ }),

/***/ "./src/editor/tile.ts":
/*!****************************!*\
  !*** ./src/editor/tile.ts ***!
  \****************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
var Tile = /** @class */ (function () {
    function Tile(id, collidable, water, door) {
        if (collidable === void 0) { collidable = false; }
        if (water === void 0) { water = false; }
        if (door === void 0) { door = false; }
        this.id = id;
        this.collidable = collidable;
        this.water = water;
        this.door = door;
    }
    Tile.prototype.loadImage = function () {
        var _this = this;
        this.tileImage = new Image();
        return new Promise(function (resolve, reject) {
            _this.tileImage.addEventListener("load", function () {
                resolve();
            });
            _this.tileImage.src = "../res/tiles/" + _this.id + ".png";
        });
    };
    return Tile;
}());



/***/ }),

/***/ "./src/editor/tools/addItem.ts":
/*!*************************************!*\
  !*** ./src/editor/tools/addItem.ts ***!
  \*************************************/
/*! exports provided: AddItemTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemTool", function() { return AddItemTool; });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/editor/tools/tool.ts");

var AddItemTool = /** @class */ (function () {
    function AddItemTool() {
        this.id = "addItem";
        this.name = "Place item";
        this.type = _tool__WEBPACK_IMPORTED_MODULE_0__["ToolType"].item;
    }
    AddItemTool.prototype.process = function (context, x, y, continuous) {
        context.level.setItemAt(x, y, context.currentItem);
        context.render();
    };
    return AddItemTool;
}());



/***/ }),

/***/ "./src/editor/tools/addOpponent.ts":
/*!*****************************************!*\
  !*** ./src/editor/tools/addOpponent.ts ***!
  \*****************************************/
/*! exports provided: AddOpponentTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOpponentTool", function() { return AddOpponentTool; });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/editor/tools/tool.ts");

var AddOpponentTool = /** @class */ (function () {
    function AddOpponentTool() {
        this.id = "addOpponent";
        this.name = "Place opponent";
        this.type = _tool__WEBPACK_IMPORTED_MODULE_0__["ToolType"].opponent;
    }
    AddOpponentTool.prototype.process = function (context, x, y, continuous) {
        context.level.setOpponentAt(x, y, context.currentOpponent);
        context.render();
    };
    return AddOpponentTool;
}());



/***/ }),

/***/ "./src/editor/tools/drawTile.ts":
/*!**************************************!*\
  !*** ./src/editor/tools/drawTile.ts ***!
  \**************************************/
/*! exports provided: DrawTileTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawTileTool", function() { return DrawTileTool; });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/editor/tools/tool.ts");

var DrawTileTool = /** @class */ (function () {
    function DrawTileTool() {
        this.id = "drawTile";
        this.name = "Draw tile";
        this.type = _tool__WEBPACK_IMPORTED_MODULE_0__["ToolType"].tile;
    }
    DrawTileTool.prototype.process = function (context, x, y, continuous) {
        context.level.setTileAt(x, y, context.currentTile);
        context.render();
    };
    return DrawTileTool;
}());



/***/ }),

/***/ "./src/editor/tools/eraseObject.ts":
/*!*****************************************!*\
  !*** ./src/editor/tools/eraseObject.ts ***!
  \*****************************************/
/*! exports provided: EraseObjectTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraseObjectTool", function() { return EraseObjectTool; });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/editor/tools/tool.ts");

var EraseObjectTool = /** @class */ (function () {
    function EraseObjectTool() {
        this.id = "eraseObject";
        this.name = "Erase object";
        this.type = _tool__WEBPACK_IMPORTED_MODULE_0__["ToolType"].item;
    }
    EraseObjectTool.prototype.process = function (context, x, y, continuous) {
        context.level.deleteItemAt(x, y);
        context.level.deleteOpponentAt(x, y);
        context.render();
    };
    return EraseObjectTool;
}());



/***/ }),

/***/ "./src/editor/tools/eraseTile.ts":
/*!***************************************!*\
  !*** ./src/editor/tools/eraseTile.ts ***!
  \***************************************/
/*! exports provided: EraseTileTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraseTileTool", function() { return EraseTileTool; });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/editor/tools/tool.ts");

var EraseTileTool = /** @class */ (function () {
    function EraseTileTool() {
        this.id = "eraseTile";
        this.name = "Erase tile";
        this.type = _tool__WEBPACK_IMPORTED_MODULE_0__["ToolType"].tile;
    }
    EraseTileTool.prototype.process = function (context, x, y, continuous) {
        context.level.deleteTileAt(x, y);
        context.render();
    };
    return EraseTileTool;
}());



/***/ }),

/***/ "./src/editor/tools/fillTile.ts":
/*!**************************************!*\
  !*** ./src/editor/tools/fillTile.ts ***!
  \**************************************/
/*! exports provided: FillTileTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillTileTool", function() { return FillTileTool; });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/editor/tools/tool.ts");

var FillTileTool = /** @class */ (function () {
    function FillTileTool() {
        this.id = "fillTile";
        this.name = "Fill tiles";
        this.type = _tool__WEBPACK_IMPORTED_MODULE_0__["ToolType"].tile;
    }
    FillTileTool.prototype.floodFill = function (level, queue, x, y, left, top, right, bottom, refTile) {
        if (x < left || y < top ||
            x >= right || y >= bottom ||
            queue.findIndex(function (t) { return t[0] === x && t[1] === y; }) !== -1)
            return;
        var tile = level.getTileAt(x, y);
        if ((tile && refTile === tile.tile) ||
            (!refTile && !tile)) {
            queue.push([x, y]);
            this.floodFill(level, queue, x - 1, y, left, top, right, bottom, refTile);
            this.floodFill(level, queue, x + 1, y, left, top, right, bottom, refTile);
            this.floodFill(level, queue, x, y - 1, left, top, right, bottom, refTile);
            this.floodFill(level, queue, x, y + 1, left, top, right, bottom, refTile);
        }
    };
    FillTileTool.prototype.process = function (context, x, y, continuous) {
        if (continuous)
            return;
        var left = Math.floor(x / 10);
        var top = Math.floor(y / 10);
        var referenceTile = null;
        var referenceInstance = context.level.getTileAt(x, y);
        if (referenceInstance)
            referenceTile = referenceInstance.tile;
        var queue = [];
        this.floodFill(context.level, queue, x, y, left * 10, top * 10, left * 10 + 10, top * 10 + 10, referenceTile);
        queue.forEach(function (coords) {
            context.level.setTileAt(coords[0], coords[1], context.currentTile);
        });
        context.render();
    };
    return FillTileTool;
}());



/***/ }),

/***/ "./src/editor/tools/setDoorTarget.ts":
/*!*******************************************!*\
  !*** ./src/editor/tools/setDoorTarget.ts ***!
  \*******************************************/
/*! exports provided: SetDoorTargetTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDoorTargetTool", function() { return SetDoorTargetTool; });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/editor/tools/tool.ts");
/* harmony import */ var _door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../door */ "./src/editor/door.ts");


var SetDoorTargetTool = /** @class */ (function () {
    function SetDoorTargetTool() {
        this.id = "setDoorTarget";
        this.name = "Set door target";
        this.type = _tool__WEBPACK_IMPORTED_MODULE_0__["ToolType"].tile;
    }
    SetDoorTargetTool.prototype.process = function (context, x, y, continuous) {
        if (continuous)
            return;
        var tile = context.level.getTileAt(x, y);
        if (!this.door && tile instanceof _door__WEBPACK_IMPORTED_MODULE_1__["Door"]) {
            this.door = tile;
        }
        else if (this.door) {
            this.door.targetX = x;
            this.door.targetY = y;
            this.door = null;
            context.render();
        }
    };
    return SetDoorTargetTool;
}());



/***/ }),

/***/ "./src/editor/tools/setSpawnPoint.ts":
/*!*******************************************!*\
  !*** ./src/editor/tools/setSpawnPoint.ts ***!
  \*******************************************/
/*! exports provided: SetSpawnPointTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSpawnPointTool", function() { return SetSpawnPointTool; });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/editor/tools/tool.ts");

var SetSpawnPointTool = /** @class */ (function () {
    function SetSpawnPointTool() {
        this.id = "setSpawnPoint";
        this.name = "Set spawn point";
        this.type = _tool__WEBPACK_IMPORTED_MODULE_0__["ToolType"].tile;
    }
    SetSpawnPointTool.prototype.process = function (context, x, y, continuous) {
        var dims = context.level.dimensions;
        if (x >= dims.x || y >= dims.y)
            return;
        var tile = context.level.getTileAt(x, y);
        if (!tile || tile.tile.collidable)
            return;
        context.level.spawnX = x;
        context.level.spawnY = y;
        context.render();
    };
    return SetSpawnPointTool;
}());



/***/ }),

/***/ "./src/editor/tools/tool.ts":
/*!**********************************!*\
  !*** ./src/editor/tools/tool.ts ***!
  \**********************************/
/*! exports provided: ToolType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolType", function() { return ToolType; });
var ToolType;
(function (ToolType) {
    ToolType["tile"] = "tiles";
    ToolType["item"] = "items";
    ToolType["opponent"] = "opponents";
})(ToolType || (ToolType = {}));


/***/ }),

/***/ "./src/editor/viewer.ts":
/*!******************************!*\
  !*** ./src/editor/viewer.ts ***!
  \******************************/
/*! exports provided: Viewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewer", function() { return Viewer; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./src/editor/tile.ts");
/* harmony import */ var _tools_drawTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/drawTile */ "./src/editor/tools/drawTile.ts");
/* harmony import */ var _tools_fillTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/fillTile */ "./src/editor/tools/fillTile.ts");
/* harmony import */ var _tools_eraseTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/eraseTile */ "./src/editor/tools/eraseTile.ts");
/* harmony import */ var _tools_setSpawnPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/setSpawnPoint */ "./src/editor/tools/setSpawnPoint.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item */ "./src/editor/item.ts");
/* harmony import */ var _xaxa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xaxa */ "./src/editor/xaxa.ts");
/* harmony import */ var _tools_addItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/addItem */ "./src/editor/tools/addItem.ts");
/* harmony import */ var _tools_eraseObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools/eraseObject */ "./src/editor/tools/eraseObject.ts");
/* harmony import */ var _tools_addOpponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/addOpponent */ "./src/editor/tools/addOpponent.ts");
/* harmony import */ var _opponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./opponent */ "./src/editor/opponent.ts");
/* harmony import */ var _door__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./door */ "./src/editor/door.ts");
/* harmony import */ var _tools_setDoorTarget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tools/setDoorTarget */ "./src/editor/tools/setDoorTarget.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};















var Viewer = /** @class */ (function () {
    function Viewer() {
        this.grid = true;
        this.collisionBoxes = true;
        this.sublevelBounds = true;
        this.availableTiles = [];
        this.availableItems = [];
        this.availableOpponents = [];
        this.tools = [
            new _tools_drawTile__WEBPACK_IMPORTED_MODULE_1__["DrawTileTool"](),
            new _tools_fillTile__WEBPACK_IMPORTED_MODULE_2__["FillTileTool"](),
            new _tools_eraseTile__WEBPACK_IMPORTED_MODULE_3__["EraseTileTool"](),
            new _tools_setDoorTarget__WEBPACK_IMPORTED_MODULE_14__["SetDoorTargetTool"](),
            new _tools_setSpawnPoint__WEBPACK_IMPORTED_MODULE_4__["SetSpawnPointTool"](),
            new _tools_addItem__WEBPACK_IMPORTED_MODULE_9__["AddItemTool"](),
            new _tools_addOpponent__WEBPACK_IMPORTED_MODULE_11__["AddOpponentTool"](),
            new _tools_eraseObject__WEBPACK_IMPORTED_MODULE_10__["EraseObjectTool"]()
        ];
        this.currentTool = this.tools[0];
        this.viewX = 0;
        this.viewY = 0;
        this.canvas = document.querySelector("canvas");
    }
    Viewer.prototype.loadLevel = function (level) {
        this.viewX = 0;
        this.viewY = 0;
        this.level = level;
        this.render();
    };
    Viewer.prototype.loadTiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rd, fileList, _i, fileList_1, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rd = Object(util__WEBPACK_IMPORTED_MODULE_5__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_6__["readdir"]);
                        return [4 /*yield*/, rd("res/tiles")];
                    case 1:
                        fileList = _a.sent();
                        for (_i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
                            file = fileList_1[_i];
                            try {
                                this.availableTiles.push(new _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"](file.substring(0, file.length - 4), file.startsWith("w_"), file.startsWith("wave"), file.startsWith("d_")));
                            }
                            catch (e) {
                                console.log("Oops!");
                            }
                        }
                        return [4 /*yield*/, Promise.all(this.availableTiles.map(function (t) { return t.loadImage(); }))];
                    case 2:
                        _a.sent();
                        this.currentTile = this.availableTiles[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    Viewer.prototype.loadItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var itemsData, _i, itemsData_1, itemData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_xaxa__WEBPACK_IMPORTED_MODULE_8__["loadXaxa"])("items")];
                    case 1:
                        itemsData = _a.sent();
                        for (_i = 0, itemsData_1 = itemsData; _i < itemsData_1.length; _i++) {
                            itemData = itemsData_1[_i];
                            this.availableItems.push(new _item__WEBPACK_IMPORTED_MODULE_7__["Item"](itemData[0], itemData[1], itemData[3], itemData[2], +itemData[4]));
                        }
                        return [4 /*yield*/, Promise.all(this.availableItems.map(function (t) { return t.loadImage(); }))];
                    case 2:
                        _a.sent();
                        this.currentItem = this.availableItems[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    Viewer.prototype.loadOpponents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var itemsData, _i, itemsData_2, itemData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_xaxa__WEBPACK_IMPORTED_MODULE_8__["loadXaxa"])("opponents")];
                    case 1:
                        itemsData = _a.sent();
                        for (_i = 0, itemsData_2 = itemsData; _i < itemsData_2.length; _i++) {
                            itemData = itemsData_2[_i];
                            this.availableOpponents.push(new _opponent__WEBPACK_IMPORTED_MODULE_12__["Opponent"](itemData[0], itemData[1]));
                        }
                        return [4 /*yield*/, Promise.all(this.availableOpponents.map(function (t) { return t.loadImage(); }))];
                    case 2:
                        _a.sent();
                        this.currentOpponent = this.availableOpponents[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    Viewer.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTiles()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadItems()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadOpponents()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Viewer.prototype.render = function () {
        var _this = this;
        var rect = document.querySelector("div.canvasContainer").getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        var viewTileLeft = Math.floor(-this.viewX / 32);
        var viewTileTop = Math.floor(-this.viewY / 32);
        var viewTileRight = Math.ceil((-this.viewX + rect.width) / 32);
        var viewTileBottom = Math.ceil((-this.viewY + rect.height) / 32);
        var ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.resetTransform();
        ctx.translate(this.viewX, this.viewY);
        var levelSlices = this.level.slices;
        levelSlices.forEach(function (slice) {
            ctx.fillStyle = "rgb(56, 56, 56)";
            ctx.fillRect(320 * slice.x, 320 * slice.y, 320, 320);
        });
        this.level.tiles.forEach(function (instance) {
            if (instance.x < viewTileLeft ||
                instance.y < viewTileTop ||
                instance.x > viewTileRight ||
                instance.y > viewTileBottom)
                return;
            ctx.drawImage(instance.tile.tileImage, 32 * instance.x, 32 * instance.y, 32, 32);
            if (_this.collisionBoxes && instance.tile.collidable) {
                ctx.beginPath();
                ctx.rect(32 * instance.x, 32 * instance.y, 32, 32);
                ctx.moveTo(32 * instance.x, 32 * instance.y);
                ctx.lineTo(32 * instance.x + 32, 32 * instance.y + 32);
                ctx.moveTo(32 * instance.x + 32, 32 * instance.y);
                ctx.lineTo(32 * instance.x, 32 * instance.y + 32);
                ctx.strokeStyle = "#000000";
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.strokeStyle = "#FF00FF";
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        });
        this.level.tiles.filter(function (instance) { return instance instanceof _door__WEBPACK_IMPORTED_MODULE_13__["Door"]; }).forEach(function (instance) {
            ctx.beginPath();
            ctx.arc(32 * instance.x + 16, 32 * instance.y + 16, 8, 0, 2 * Math.PI);
            ctx.moveTo(32 * instance.x + 16, 32 * instance.y + 16);
            ctx.lineTo(32 * instance.targetX + 16, 32 * instance.targetY + 16);
            ctx.strokeStyle = "#0080FF";
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(32 * instance.targetX + 16, 32 * instance.targetY + 16, 8, 0, 2 * Math.PI);
            ctx.strokeStyle = "#FF8000";
            ctx.lineWidth = 2;
            ctx.stroke();
        });
        this.level.items.forEach(function (instance) {
            if (instance.x < viewTileLeft ||
                instance.y < viewTileTop ||
                instance.x > viewTileRight ||
                instance.y > viewTileBottom)
                return;
            ctx.drawImage(instance.item.itemImage, 32 * instance.x, 32 * instance.y, 32, 32);
        });
        this.level.opponents.forEach(function (instance) {
            if (instance.x < viewTileLeft ||
                instance.y < viewTileTop ||
                instance.x > viewTileRight ||
                instance.y > viewTileBottom)
                return;
            ctx.drawImage(instance.opponent.opponentImage, 32 * instance.x, 32 * instance.y, 32, 32);
        });
        if (this.grid) {
            ctx.strokeStyle = "#AAAAAA50";
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (var x = Math.floor(-this.viewX / 32) * 32; x < this.canvas.width + Math.ceil(-this.viewX / 32) * 32; x += 32) {
                ctx.moveTo(x, -this.viewY);
                ctx.lineTo(x, this.canvas.height - this.viewY);
            }
            for (var y = Math.floor(-this.viewY / 32) * 32; y < this.canvas.height + Math.ceil(-this.viewY / 32) * 32; y += 32) {
                ctx.moveTo(-this.viewX, y);
                ctx.lineTo(this.canvas.width - this.viewX, y);
            }
            ctx.stroke();
        }
        if (this.sublevelBounds) {
            levelSlices.forEach(function (slice) {
                ctx.fillStyle = "#fff";
                ctx.font = "400 13px";
                ctx.fillText("[" + slice.x + ", " + slice.y + "]", 320 * slice.x + 8, 320 * slice.y + 20);
                ctx.strokeStyle = "#FFFF00";
                ctx.lineWidth = 2;
                ctx.strokeRect(320 * slice.x, 320 * slice.y, 320, 320);
            });
        }
        ctx.beginPath();
        ctx.arc(32 * this.level.spawnX + 16, 32 * this.level.spawnY + 10, 6, 0, Math.PI * 2);
        ctx.rect(32 * this.level.spawnX + 8, 32 * this.level.spawnY + 16, 16, 12);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
    };
    Viewer.prototype.processTool = function (e) {
        var rect = this.canvas.getBoundingClientRect();
        var x = Math.floor((e.clientX - rect.x - this.viewX) / 32);
        var y = Math.floor((e.clientY - rect.y - this.viewY) / 32);
        if (e.buttons & 1 ||
            (e.type === "mouseup" && e.buttons & 1)) {
            this.currentTool.process(this, x, y, e.type === "mousemove");
        }
        else if (e.type === "mousemove" && e.buttons & 4) {
            this.viewX += e.movementX;
            this.viewY += e.movementY;
            this.render();
        }
        else {
            var tile = this.level.getTileAt(x, y);
            var tileId = "N/A";
            if (tile)
                tileId = tile.tile.id;
            var subX = Math.floor(x / 10);
            var subY = Math.floor(y / 10);
            document.querySelector("div.viewerCoordinates").innerHTML = "\n                " + tileId + "<br>\n                X: " + (x - subX * 10) + "<br>\n                Y: " + (y - subY * 10) + "<br>\n                Sublevel: " + subX + ", " + subY + "\n            ";
        }
    };
    Viewer.prototype.setupDOM = function () {
        var _this = this;
        this.canvas.addEventListener("mousedown", function (e) { return _this.processTool(e); });
        this.canvas.addEventListener("mouseup", function (e) { return _this.processTool(e); });
        this.canvas.addEventListener("mousemove", function (e) {
            _this.processTool(e);
        });
        var toolbar = document.querySelector("div.toolbar");
        this.tools.forEach(function (tool) {
            var toolDiv = document.createElement("div");
            toolDiv.classList.add("tool");
            toolDiv.classList.toggle("active", _this.currentTool === tool);
            toolDiv.innerHTML = "\n                <img src=\"../res/icons/" + tool.id + ".svg\">\n                <p>" + tool.name + "</p>\n            ";
            toolDiv.addEventListener("click", function () {
                toolbar.querySelector("div.active").classList.remove("active");
                toolDiv.classList.add("active");
                document.querySelector("div.tileList.visible").classList.remove("visible");
                document.querySelector("div.tileList." + tool.type).classList.add("visible");
                _this.currentTool = tool;
            });
            toolbar.appendChild(toolDiv);
        });
        var tileList = document.querySelector("div.tileList.tiles");
        this.availableTiles.forEach(function (tile) {
            var tileDiv = document.createElement("div");
            tileDiv.classList.add("tile");
            tileDiv.classList.toggle("active", _this.currentTile === tile);
            tileDiv.classList.toggle("floor", tile.id.startsWith("f_"));
            tileDiv.classList.toggle("wall", tile.id.startsWith("w_"));
            tileDiv.classList.toggle("water", tile.water);
            tileDiv.classList.toggle("door", tile.door);
            tileDiv.innerHTML = "\n                <img src=\"../res/tiles/" + tile.id + ".png\">\n                <p>" + tile.id + "</p>\n            ";
            tileDiv.addEventListener("click", function () {
                tileList.querySelector("div.active").classList.remove("active");
                tileDiv.classList.add("active");
                _this.currentTile = tile;
            });
            tileList.appendChild(tileDiv);
        });
        var itemList = document.querySelector("div.tileList.items");
        this.availableItems.forEach(function (item) {
            var itemDiv = document.createElement("div");
            itemDiv.classList.add("tile");
            itemDiv.classList.toggle("active", _this.currentItem === item);
            itemDiv.classList.toggle("attack", item.type === _item__WEBPACK_IMPORTED_MODULE_7__["ItemType"].attack);
            itemDiv.classList.toggle("defense", item.type === _item__WEBPACK_IMPORTED_MODULE_7__["ItemType"].defense);
            itemDiv.classList.toggle("health", item.type === _item__WEBPACK_IMPORTED_MODULE_7__["ItemType"].health);
            itemDiv.innerHTML = "\n                <img src=\"../res/items/" + item.imageId + ".png\">\n                <p>" + item.name + "</p>\n            ";
            itemDiv.addEventListener("click", function () {
                itemList.querySelector("div.active").classList.remove("active");
                itemDiv.classList.add("active");
                _this.currentItem = item;
            });
            itemList.appendChild(itemDiv);
        });
        var opponentList = document.querySelector("div.tileList.opponents");
        this.availableOpponents.forEach(function (opponent) {
            var opponentDiv = document.createElement("div");
            opponentDiv.classList.add("tile");
            opponentDiv.classList.toggle("active", _this.currentOpponent === opponent);
            opponentDiv.innerHTML = "\n                <img src=\"../res/opponents/" + opponent.id + ".png\">\n                <p>" + opponent.name + "</p>\n            ";
            opponentDiv.addEventListener("click", function () {
                opponentList.querySelector("div.active").classList.remove("active");
                opponentDiv.classList.add("active");
                _this.currentOpponent = opponent;
            });
            opponentList.appendChild(opponentDiv);
        });
        document.querySelector("input#showGrid").addEventListener("input", function (e) {
            var input = e.target;
            _this.grid = input.checked;
            _this.render();
        });
        document.querySelector("input#showColliders").addEventListener("input", function (e) {
            var input = e.target;
            _this.collisionBoxes = input.checked;
            _this.render();
        });
        document.querySelector("input#showSublevels").addEventListener("input", function (e) {
            var input = e.target;
            _this.sublevelBounds = input.checked;
            _this.render();
        });
    };
    return Viewer;
}());



/***/ }),

/***/ "./src/editor/xaxa.ts":
/*!****************************!*\
  !*** ./src/editor/xaxa.ts ***!
  \****************************/
/*! exports provided: loadXaxa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadXaxa", function() { return loadXaxa; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};


var readFileAsync = Object(util__WEBPACK_IMPORTED_MODULE_0__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_1__["readFile"]);
function loadXaxa(file) {
    return __awaiter(this, void 0, void 0, function () {
        var data, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readFileAsync("res/" + file + ".xaxa", "utf-8")];
                case 1:
                    data = _a.sent();
                    items = [];
                    data.split(/\r?\n/).forEach(function (item) {
                        if (item.startsWith("//"))
                            return;
                        items.push(item.split("|"));
                    });
                    return [2 /*return*/, items];
            }
        });
    });
}


/***/ }),

/***/ "./src/page.ts":
/*!*********************!*\
  !*** ./src/page.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/viewer */ "./src/editor/viewer.ts");
/* harmony import */ var _editor_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/level */ "./src/editor/level.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);




var _a = __webpack_require__(/*! electron */ "electron").remote, Menu = _a.Menu, dialog = _a.dialog;
var viewer = new _editor_viewer__WEBPACK_IMPORTED_MODULE_1__["Viewer"]();
viewer.load().then(function () {
    viewer.setupDOM();
    var level = new _editor_level__WEBPACK_IMPORTED_MODULE_2__["Level"](viewer, [], [], [], 2, 2);
    viewer.loadLevel(level);
    window.addEventListener("resize", function () { return viewer.render(); });
});
var menu = Menu.buildFromTemplate([
    {
        type: "submenu",
        label: "File",
        submenu: [
            {
                label: "Open project",
                click: function () {
                    dialog.showOpenDialog({
                        filters: [
                            {
                                name: "xoxo-Editor Project",
                                extensions: ["xexe"]
                            }
                        ]
                    }).then(function (data) {
                        if (data.canceled)
                            return;
                        var level = _editor_level__WEBPACK_IMPORTED_MODULE_2__["Level"].fromFileData(viewer, Object(fs__WEBPACK_IMPORTED_MODULE_3__["readFileSync"])(data.filePaths[0], "utf-8"));
                        viewer.loadLevel(level);
                    });
                }
            },
            {
                label: "Save project",
                click: function () {
                    dialog.showSaveDialog({
                        filters: [
                            {
                                name: "xoxo-Editor Project",
                                extensions: ["xexe"]
                            }
                        ]
                    }).then(function (data) {
                        if (data.canceled)
                            return;
                        Object(fs__WEBPACK_IMPORTED_MODULE_3__["writeFileSync"])(data.filePath, viewer.level.fileData, "utf-8");
                    });
                }
            },
            {
                type: "separator"
            },
            {
                label: "Export levels",
                click: function () {
                    dialog.showSaveDialog({
                        filters: [
                            {
                                name: "xoxo-Game Level",
                                extensions: ["xoxo"]
                            }
                        ]
                    }).then(function (data) {
                        if (data.canceled)
                            return;
                        var prefix = data.filePath;
                        if (prefix.endsWith(".xoxo"))
                            prefix = prefix.substring(0, prefix.length - 5);
                        var pathComponents = prefix.split("\\");
                        var slices = viewer.level.exportSlices(pathComponents[pathComponents.length - 1]);
                        slices.forEach(function (slice) {
                            Object(fs__WEBPACK_IMPORTED_MODULE_3__["writeFileSync"])(prefix + slice.sliceSuffix, slice.sliceData, "utf-8");
                        });
                    });
                }
            }
        ]
    }
]);
Menu.setApplicationMenu(menu);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=page.js.map