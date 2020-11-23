module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/StockCorrelation/StockCorrelation.jsx":
/*!**********************************************************!*\
  !*** ./components/StockCorrelation/StockCorrelation.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/runner/StockCorrelationComponent/components/StockCorrelation/StockCorrelation.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const MainDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border: 1px solid black;
  border-radius: 10px;
  align-content: right;
  width: 300px;
  height: 300px;
  text-align: center;
  
  align-items: center;
  diplay: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  
  
`;
const UpperDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #0D0B04;
  padding-bottom: 40px;
`;
const BottomDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3D3B30;
  
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  padding: 20px;
  margin: auto;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  background-color: #8C98DE;
  color: white;
  border-radius: 1em;

  border:none;
`;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Col = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display:flex;
  flex-direction: column;
  align-content: center;
`;
const TickerInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
  
 
  font-size: 150%;
  text-align: center;
`;
const LoadAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;
const LoadDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid red;
  width: 90%;
  height: 90%;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${LoadAnimation} 2s linear infinite;
`;

class StockCorrelation extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      correlation: null,
      stock1: props.stock1,
      stock2: props.stock2,
      display1: props.stock1,
      display2: props.stock2,
      loadig: false
    };
    this.getCorrelation = this.getCorrelation.bind(this);
    this.handleTicker1 = this.handleTicker1.bind(this);
    this.handleTicker2 = this.handleTicker2.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async getCorrelation(ticker1, ticker2) {
    this.startLoad();
    const url = 'https://ak25ue8dgl.execute-api.us-east-2.amazonaws.com/default/correlation';
    let raw_data = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "text/plain"
      },
      body: JSON.stringify({
        "ticker1": ticker1,
        "ticker2": ticker2
      })
    });
    let result = await raw_data.text();
    result = JSON.parse(result).output;
    console.log(result);
    await this.setState({
      "correlation": result
    });
    this.setState({
      "display1": ticker1,
      "display2": ticker2
    });
    console.log("here");
    this.endLoad();
  }

  startLoad() {
    this.setState({
      "loading": true
    });
  }

  endLoad() {
    this.setState({
      "loading": false
    });
  }

  handleTicker1(event) {
    this.setState({
      stock1: event.target.value
    });
  }

  handleTicker2(event) {
    this.setState({
      stock2: event.target.value
    });
  }

  handleUpdate() {
    console.log(this.state.ticker1);
    console.log(this.state.ticker2);
    this.getCorrelation(this.state.stock1, this.state.stock2);
  }

  componentDidMount() {
    this.getCorrelation(this.props.stock1, this.props.stock2);
  }

  render() {
    return __jsx(MainDiv, {
      style: {
        width: this.props.width,
        height: this.props.height
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx(LoadDiv, {
      style: {
        display: this.state.loading ? "block" : "none"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }), __jsx(UpperDiv, {
      style: {
        display: this.state.loading ? "none" : "flex"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Price Correlation"), __jsx(Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(TickerInput, {
      size: "4",
      maxlength: "4",
      value: this.state.stock1,
      onChange: this.handleTicker1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "Ticker 1")), __jsx(Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, this.state.correlation, "%")), __jsx(Col, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx(TickerInput, {
      size: "4",
      maxlength: "4",
      value: this.state.stock2,
      onChange: this.handleTicker2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "Ticker 2")))), __jsx(BottomDiv, {
      style: {
        display: this.state.loading ? "none" : "flex"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx(Button, {
      onClick: this.handleUpdate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Update")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StockCorrelation);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StockCorrelation_StockCorrelation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StockCorrelation/StockCorrelation */ "./components/StockCorrelation/StockCorrelation.jsx");
var _jsxFileName = "/home/runner/StockCorrelationComponent/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HomePage() {
  return __jsx(_components_StockCorrelation_StockCorrelation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "300px",
    height: "500px",
    stock1: "spy",
    stock2: "amd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/StockCorrelationComponent/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map