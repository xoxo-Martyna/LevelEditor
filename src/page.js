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
exports.push([module.i, "body {\n  background: #222222;\n  color: #fff;\n  font-family: \"Segoe UI\", sans-serif;\n  user-select: none; }\n\ndiv.tabs {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  padding: 4px 8px 0px 8px;\n  display: flex; }\n  div.tabs button {\n    background: #1b1b1b;\n    color: #aaa;\n    font-family: \"Segoe UI\", sans-serif;\n    font-size: 10pt;\n    padding: 4px 12px;\n    margin: 0px 4px 0px 0px;\n    border-radius: 4px 4px 0px 0px;\n    border: none;\n    outline: none; }\n    div.tabs button.active {\n      background: #383838;\n      color: #fff; }\n\nmain {\n  position: fixed;\n  left: 0;\n  top: 29px;\n  right: 0;\n  bottom: 0;\n  background: #383838;\n  display: flex; }\n  main div.toolbar {\n    min-width: 36px;\n    padding: 2px;\n    border-right: 1px solid #fff1;\n    overflow-y: auto; }\n    main div.toolbar div.separator {\n      height: 1px;\n      background: #fff1;\n      margin: 4px 2px; }\n    main div.toolbar div.tool {\n      position: relative;\n      font-size: 0;\n      padding: 2px;\n      border-radius: 2px;\n      display: flex;\n      align-items: center; }\n      main div.toolbar div.tool img {\n        width: 24px;\n        height: 24px; }\n      main div.toolbar div.tool p {\n        color: #fff;\n        font-size: 9pt;\n        margin: 0 0 0 2px; }\n      main div.toolbar div.tool:hover {\n        background: #fff1; }\n      main div.toolbar div.tool:active {\n        background: #fff2; }\n      main div.toolbar div.tool.active {\n        background: #161616; }\n  main aside {\n    width: 96px;\n    min-width: 96px;\n    border-left: 1px solid #fff1;\n    display: flex;\n    flex-direction: column; }\n    main aside section:not(:last-child) {\n      border-bottom: 1px solid #fff1; }\n    main aside section header {\n      font-size: 10pt;\n      font-weight: 400;\n      text-align: center;\n      padding: 2px;\n      opacity: 0.5; }\n    main aside section div.layerViz {\n      display: flex; }\n      main aside section div.layerViz label {\n        font-size: 10pt;\n        padding-left: 8px;\n        flex-grow: 1; }\n    main aside section.tileList {\n      flex-grow: 1; }\n      main aside section.tileList div.tileList {\n        overflow-y: auto; }\n        main aside section.tileList div.tileList div.tile {\n          padding: 4px;\n          border-radius: 2px;\n          display: flex;\n          flex-direction: column;\n          align-items: center; }\n          main aside section.tileList div.tileList div.tile:hover {\n            background: #fff1; }\n          main aside section.tileList div.tileList div.tile:active {\n            background: #fff2; }\n          main aside section.tileList div.tileList div.tile.active {\n            background: #161616; }\n          main aside section.tileList div.tileList div.tile p {\n            font-size: 10pt;\n            text-align: center;\n            margin: 0; }\n  main canvas {\n    background: #1b1b1b;\n    flex-grow: 1; }\n  main div.viewerCoordinates {\n    position: fixed;\n    top: 32px;\n    right: 110px;\n    background: #0008;\n    font-family: monospace;\n    text-align: right;\n    padding: 8px 16px;\n    pointer-events: none; }\n", ""]);
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

/***/ "./src/editor/level.ts":
/*!*****************************!*\
  !*** ./src/editor/level.ts ***!
  \*****************************/
/*! exports provided: TileInstance, Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileInstance", function() { return TileInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
var TileInstance = /** @class */ (function () {
    function TileInstance(tile, x, y) {
        this.tile = tile;
        this.x = x;
        this.y = y;
    }
    return TileInstance;
}());

var Level = /** @class */ (function () {
    function Level(context, id, tiles, spawnX, spawnY) {
        if (tiles === void 0) { tiles = []; }
        this.context = context;
        this.id = id;
        this.tiles = tiles;
        this.spawnX = spawnX;
        this.spawnY = spawnY;
    }
    Object.defineProperty(Level.prototype, "dimensions", {
        get: function () {
            return {
                x: Math.max.apply(Math, this.tiles.map(function (i) { return i.x; })) + 1,
                y: Math.max.apply(Math, this.tiles.map(function (i) { return i.y; })) + 1
            };
        },
        enumerable: true,
        configurable: true
    });
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
            instance.tile = tile;
        }
        else {
            this.tiles.push(new TileInstance(tile, x, y));
        }
    };
    Object.defineProperty(Level.prototype, "fileData", {
        get: function () {
            var dim = this.dimensions;
            var lines = [
                "Dimensions " + dim.x + " " + dim.y,
                "SpawnPoint " + this.spawnX + " " + this.spawnY
            ];
            var tiles = this.context.availableTiles.map(function (t) {
                return {
                    tile: t,
                    coords: []
                };
            });
            this.tiles.forEach(function (instance) {
                var tile = tiles.find(function (t) { return t.tile === instance.tile; });
                tile.coords.push(instance.x, instance.y);
            });
            tiles.filter(function (t) { return t.coords.length; }).forEach(function (t) { return lines.push("Tile " + t.tile.id + " " + t.coords.join(" ")); });
            return lines.join("\r\n");
        },
        enumerable: true,
        configurable: true
    });
    return Level;
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
    function Tile(id, collidable) {
        if (collidable === void 0) { collidable = false; }
        this.id = id;
        this.collidable = collidable;
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

/***/ "./src/editor/tools/drawTile.ts":
/*!**************************************!*\
  !*** ./src/editor/tools/drawTile.ts ***!
  \**************************************/
/*! exports provided: DrawTileTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawTileTool", function() { return DrawTileTool; });
var DrawTileTool = /** @class */ (function () {
    function DrawTileTool() {
        this.id = "drawTile";
        this.name = "Draw tile";
    }
    DrawTileTool.prototype.process = function (context, x, y, continuous) {
        context.level.setTileAt(x, y, context.currentTile);
        context.render();
    };
    return DrawTileTool;
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
var EraseTileTool = /** @class */ (function () {
    function EraseTileTool() {
        this.id = "eraseTile";
        this.name = "Erase tile";
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
var FillTileTool = /** @class */ (function () {
    function FillTileTool() {
        this.id = "fillTile";
        this.name = "Fill tiles";
    }
    FillTileTool.prototype.process = function (context, x, y, continuous) {
        if (continuous)
            return;
        var levelDim = context.level.dimensions;
        var applyFill = Array(levelDim.x).fill(0).map(function () { return Array(levelDim.y).fill(false); });
        var referenceTile = null;
        var referenceInstance = context.level.getTileAt(x, y);
        if (referenceInstance)
            referenceTile = referenceInstance.tile;
    };
    return FillTileTool;
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
var SetSpawnPointTool = /** @class */ (function () {
    function SetSpawnPointTool() {
        this.id = "setSpawnPoint";
        this.name = "Set spawn point";
    }
    SetSpawnPointTool.prototype.process = function (context, x, y, continuous) {
        var dims = context.level.dimensions;
        if (x >= dims.x || y >= dims.y)
            return;
        context.level.spawnX = x;
        context.level.spawnY = y;
        context.render();
    };
    return SetSpawnPointTool;
}());



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





var Viewer = /** @class */ (function () {
    function Viewer() {
        this.grid = true;
        this.collisionBoxes = true;
        this.effectBoxes = true;
        this.availableTiles = [
            new _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"]("testgrass"),
            new _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"]("testbricks", true)
        ];
        this.currentTile = this.availableTiles[0];
        this.tools = [
            new _tools_drawTile__WEBPACK_IMPORTED_MODULE_1__["DrawTileTool"](),
            new _tools_fillTile__WEBPACK_IMPORTED_MODULE_2__["FillTileTool"](),
            new _tools_eraseTile__WEBPACK_IMPORTED_MODULE_3__["EraseTileTool"](),
            new _tools_setSpawnPoint__WEBPACK_IMPORTED_MODULE_4__["SetSpawnPointTool"]()
        ];
        this.currentTool = this.tools[0];
        this.canvas = document.querySelector("main > canvas");
    }
    Viewer.prototype.loadLevel = function (level) {
        this.level = level;
        this.render();
    };
    Viewer.prototype.loadTiles = function () {
        return Promise.all(this.availableTiles.map(function (t) { return t.loadImage(); }));
    };
    Viewer.prototype.render = function () {
        var _this = this;
        this.canvas.width = innerWidth - 97 - 87;
        this.canvas.height = innerHeight - 29;
        var ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var levelDim = this.level.dimensions;
        ctx.fillStyle = "rgb(56, 56, 56)";
        ctx.fillRect(0, 0, 32 * levelDim.x, 32 * levelDim.y);
        ctx.fillStyle = "#FFFF00";
        ctx.fillRect(32 * levelDim.x, 32 * levelDim.y, 8, 8);
        this.level.tiles.forEach(function (instance) {
            ctx.drawImage(instance.tile.tileImage, 32 * instance.x, 32 * instance.y);
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
        if (this.grid) {
            ctx.strokeStyle = "#AAAAAA50";
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (var x = 32; x < this.canvas.width; x += 32) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, this.canvas.height);
            }
            for (var y = 32; y < this.canvas.height; y += 32) {
                ctx.moveTo(0, y);
                ctx.lineTo(this.canvas.width, y);
            }
            ctx.stroke();
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
        var x = Math.floor((e.clientX - rect.x) / 32);
        var y = Math.floor((e.clientY - rect.y) / 32);
        if (e.buttons & 1) {
            this.currentTool.process(this, x, y, e.type === "mousemove");
        }
        else {
            var tile = this.level.getTileAt(x, y);
            var tileId = "N/A";
            if (tile)
                tileId = tile.tile.id;
            document.querySelector("div.viewerCoordinates").innerHTML = "\n                " + tileId + "<br>\n                X: " + x + "<br>\n                Y: " + y + "\n            ";
        }
    };
    Viewer.prototype.setupDOM = function () {
        var _this = this;
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
                _this.currentTool = tool;
            });
            toolbar.appendChild(toolDiv);
        });
        var tilebar = document.querySelector("div.tileList");
        this.availableTiles.forEach(function (tile) {
            var tileDiv = document.createElement("div");
            tileDiv.classList.add("tile");
            tileDiv.classList.toggle("active", _this.currentTile === tile);
            tileDiv.classList.toggle("collidable", tile.collidable);
            tileDiv.innerHTML = "\n                <img src=\"../res/tiles/" + tile.id + ".png\">\n                <p>" + tile.id + "</p>\n            ";
            tileDiv.addEventListener("click", function () {
                tilebar.querySelector("div.active").classList.remove("active");
                tileDiv.classList.add("active");
                _this.currentTile = tile;
            });
            tilebar.appendChild(tileDiv);
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
        document.querySelector("input#showFX").addEventListener("input", function (e) {
            var input = e.target;
            _this.effectBoxes = input.checked;
            _this.render();
        });
    };
    return Viewer;
}());



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



var viewer = new _editor_viewer__WEBPACK_IMPORTED_MODULE_1__["Viewer"]();
viewer.setupDOM();
viewer.loadTiles().then(function () {
    var level = new _editor_level__WEBPACK_IMPORTED_MODULE_2__["Level"](viewer, "testlevel", Array(64).fill(0).map(function (_, i) {
        var x = i % 8, y = Math.floor(i / 8);
        return new _editor_level__WEBPACK_IMPORTED_MODULE_2__["TileInstance"]((x === 0 || x === 7 ||
            y === 0 || y === 7) ? viewer.availableTiles[1] : viewer.availableTiles[0], x, y);
    }), 2, 2);
    console.log(level.fileData);
    viewer.loadLevel(level);
    window.addEventListener("resize", function () { return viewer.render(); });
});


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

/***/ })

/******/ });
//# sourceMappingURL=page.js.map