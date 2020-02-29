webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/organisms/nav.js":
/*!*************************************!*\
  !*** ./components/organisms/nav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/app/components/organisms/nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this, props));
    _this.state = {
      auth: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var token = window.localStorage.getItem('token');

      if (token) {
        this.setState({
          auth: true
        });
        return;
      }

      this.setState({
        auth: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var auth = this.state.auth;

      if (auth) {
        return __jsx("nav", {
          className: "jsx-466135126" + " " + 'nav',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx("ul", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/signin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: faSignOutAlt,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        })))), __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        })))), __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "466135126",
          __self: this
        }, "nav.jsx-466135126{padding:16px;background-color:#262F42;width:64px;height:100vh;}ul.jsx-466135126{liststyletype:none;margin:0;padding:0;}li.jsx-466135126{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:40px;}span.jsx-466135126{width:40px;height:40px;background-color:#ECF0F4;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}svg.jsx-466135126{background-color:#ECF0F4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDZ0MsQUFHc0MsQUFNTSxBQUtILEFBTUwsQUFTYyxXQVJiLEVBakJhLEdBV1osR0FMSixJQVlnQixFQVE3QixHQW5CYyxVQU5DLEFBT2YsVUFXdUIsQ0FqQk4sYUFDakIsS0FpQmlCLHVCQVJVLG1EQVNKLGdEQVJBLG1CQUN2QiwwQkFRMkIsbUdBQzNCIiwiZmlsZSI6Ii9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2lnbkluQWx0LCBmYUhvbWUsIGZhVXNlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgYXV0aDogZmFsc2V9XG4gICAgfVxuXG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2F1dGg6IHRydWV9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXV0aDogZmFsc2V9KVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBhdXRoID0gdGhpcy5zdGF0ZS5hdXRoXG5cbiAgICAgICAgaWYgKGF1dGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYVNpZ25PdXRBbHQgfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhSG9tZSB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhVXNlciB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyRjQyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RzdHlsZXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEY0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXYnPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFTaWduSW5BbHQgfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhSG9tZSB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhVXNlciB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyRjQyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RzdHlsZXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEY0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/app/components/organisms/nav.js */"));
      } else {
        return __jsx("nav", {
          className: "jsx-466135126" + " " + 'nav',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, __jsx("ul", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/signin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSignInAlt"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        })))), __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        })))), __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "466135126",
          __self: this
        }, "nav.jsx-466135126{padding:16px;background-color:#262F42;width:64px;height:100vh;}ul.jsx-466135126{liststyletype:none;margin:0;padding:0;}li.jsx-466135126{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:40px;}span.jsx-466135126{width:40px;height:40px;background-color:#ECF0F4;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}svg.jsx-466135126{background-color:#ECF0F4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHZ0MsQUFHc0MsQUFNTSxBQUtILEFBTUwsQUFTYyxXQVJiLEVBakJhLEdBV1osR0FMSixJQVlnQixFQVE3QixHQW5CYyxVQU5DLEFBT2YsVUFXdUIsQ0FqQk4sYUFDakIsS0FpQmlCLHVCQVJVLG1EQVNKLGdEQVJBLG1CQUN2QiwwQkFRMkIsbUdBQzNCIiwiZmlsZSI6Ii9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2lnbkluQWx0LCBmYUhvbWUsIGZhVXNlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgYXV0aDogZmFsc2V9XG4gICAgfVxuXG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2F1dGg6IHRydWV9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXV0aDogZmFsc2V9KVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCBhdXRoID0gdGhpcy5zdGF0ZS5hdXRoXG5cbiAgICAgICAgaWYgKGF1dGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYVNpZ25PdXRBbHQgfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhSG9tZSB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhVXNlciB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyRjQyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RzdHlsZXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEY0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXYnPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFTaWduSW5BbHQgfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhSG9tZSB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhVXNlciB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyRjQyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RzdHlsZXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEY0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/app/components/organisms/nav.js */"));
      }
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.bb484903f77ff27188e4.hot-update.js.map