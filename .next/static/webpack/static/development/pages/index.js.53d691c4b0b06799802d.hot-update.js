webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StockCorrelation/StockCorrelation.jsx":
/*!**********************************************************!*\
  !*** ./components/StockCorrelation/StockCorrelation.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "/home/runner/StockCorrelationComponent/components/StockCorrelation/StockCorrelation.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid red;\n  width: 90%;\n  height: 90%;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: ", " 2s linear infinite;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  \n \n  font-size: 150%;\n  text-align: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  display:flex;\n  flex-direction: column;\n  align-content: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  width:100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  padding: 20px;\n  margin: auto;\n  cursor: pointer;\n  align-self: center;\n  text-decoration: none;\n  background-color: #8C98DE;\n  color: white;\n  border-radius: 1em;\n\n  border:none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  \n  height: 60%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #3D3B30;\n  \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  height: 40%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  background-color: #0D0B04;\n  padding-bottom: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  border: 1px solid black;\n  border-radius: 10px;\n  align-content: right;\n  width: 300px;\n  height: 300px;\n  text-align: center;\n  \n  align-items: center;\n  diplay: flex;\n  flex-direction: column;\n  font-family: Arial, Helvetica, sans-serif;\n  \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var MainDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var UpperDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject2());
var BottomDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject3());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].button(_templateObject4());
var Row = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject5());
var Col = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject6());
var TickerInput = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].input(_templateObject7());
var LoadAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(_templateObject8());
var LoadDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject9(), LoadAnimation);

var StockCorrelation = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(StockCorrelation, _React$Component);

  function StockCorrelation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StockCorrelation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(StockCorrelation).call(this, props));
    _this.props = props;
    _this.state = {
      correlation: null,
      stock1: props.stock1,
      stock2: props.stock2,
      display1: props.stock1,
      display2: props.stock2,
      loadig: false
    };
    _this.getCorrelation = _this.getCorrelation.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleTicker1 = _this.handleTicker1.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleTicker2 = _this.handleTicker2.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleUpdate = _this.handleUpdate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StockCorrelation, [{
    key: "getCorrelation",
    value: function getCorrelation(ticker1, ticker2) {
      var url, raw_data, result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCorrelation$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.startLoad();
              url = 'https://ak25ue8dgl.execute-api.us-east-2.amazonaws.com/default/correlation';
              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url, {
                method: "POST",
                headers: {
                  "content-type": "text/plain"
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  "ticker1": ticker1,
                  "ticker2": ticker2
                })
              }));

            case 4:
              raw_data = _context.sent;
              _context.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(raw_data.text());

            case 7:
              result = _context.sent;
              result = JSON.parse(result).output;
              console.log(result);
              _context.next = 12;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.setState({
                "correlation": result
              }));

            case 12:
              this.setState({
                "display1": ticker1,
                "display2": ticker2
              });
              console.log("here");
              this.endLoad();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "startLoad",
    value: function startLoad() {
      this.setState({
        "loading": true
      });
    }
  }, {
    key: "endLoad",
    value: function endLoad() {
      this.setState({
        "loading": false
      });
    }
  }, {
    key: "handleTicker1",
    value: function handleTicker1(event) {
      this.setState({
        stock1: event.target.value
      });
    }
  }, {
    key: "handleTicker2",
    value: function handleTicker2(event) {
      this.setState({
        stock2: event.target.value
      });
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      console.log(this.state.ticker1);
      console.log(this.state.ticker2);
      this.getCorrelation(this.state.stock1, this.state.stock2);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCorrelation(this.props.stock1, this.props.stock2);
    }
  }, {
    key: "render",
    value: function render() {
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
  }]);

  return StockCorrelation;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StockCorrelation);

/***/ })

})
//# sourceMappingURL=index.js.53d691c4b0b06799802d.hot-update.js.map