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
    key: "logout",
    value: function logout() {
      alert();
      localStorage.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var auth = this.state.auth;

      if (auth) {
        return __jsx("nav", {
          className: "jsx-466135126" + " " + 'nav',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, __jsx("ul", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })))), __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        })))), __jsx("li", {
          onClick: function onClick(e) {
            return _this2.logout();
          },
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSignOutAlt"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "466135126",
          __self: this
        }, "nav.jsx-466135126{padding:16px;background-color:#262F42;width:64px;height:100vh;}ul.jsx-466135126{liststyletype:none;margin:0;padding:0;}li.jsx-466135126{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:40px;}span.jsx-466135126{width:40px;height:40px;background-color:#ECF0F4;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}svg.jsx-466135126{background-color:#ECF0F4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDZ0MsQUFHc0MsQUFNTSxBQUtILEFBTUwsQUFTYyxXQVJiLEVBakJhLEdBV1osR0FMSixJQVlnQixFQVE3QixHQW5CYyxVQU5DLEFBT2YsVUFXdUIsQ0FqQk4sYUFDakIsS0FpQmlCLHVCQVJVLG1EQVNKLGdEQVJBLG1CQUN2QiwwQkFRMkIsbUdBQzNCIiwiZmlsZSI6Ii9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2lnbkluQWx0LCBmYUhvbWUsIGZhVXNlciwgZmFTaWduT3V0QWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBhdXRoOiBmYWxzZX1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXV0aDogdHJ1ZX0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHthdXRoOiBmYWxzZX0pXG4gICAgfVxuICAgIFxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgYWxlcnQoKVxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSB0aGlzLnN0YXRlLmF1dGhcblxuICAgICAgICBpZiAoYXV0aCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2Jz5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhSG9tZSB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhVXNlciB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17ZeOAgD0+IHRoaXMubG9nb3V0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhU2lnbk91dEFsdCB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJGNDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdHN0eWxldHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYVNpZ25JbkFsdCB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFIb21lIH0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFVc2VyIH0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJGNDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdHN0eWxldHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59Il19 */\n/*@ sourceURL=/app/components/organisms/nav.js */"));
      } else {
        return __jsx("nav", {
          className: "jsx-466135126" + " " + 'nav',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, __jsx("ul", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/signin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSignInAlt"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        })))), __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        })))), __jsx("li", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, __jsx("span", {
          className: "jsx-466135126",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "466135126",
          __self: this
        }, "nav.jsx-466135126{padding:16px;background-color:#262F42;width:64px;height:100vh;}ul.jsx-466135126{liststyletype:none;margin:0;padding:0;}li.jsx-466135126{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:40px;}span.jsx-466135126{width:40px;height:40px;background-color:#ECF0F4;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}svg.jsx-466135126{background-color:#ECF0F4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9HZ0MsQUFHc0MsQUFNTSxBQUtILEFBTUwsQUFTYyxXQVJiLEVBakJhLEdBV1osR0FMSixJQVlnQixFQVE3QixHQW5CYyxVQU5DLEFBT2YsVUFXdUIsQ0FqQk4sYUFDakIsS0FpQmlCLHVCQVJVLG1EQVNKLGdEQVJBLG1CQUN2QiwwQkFRMkIsbUdBQzNCIiwiZmlsZSI6Ii9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2lnbkluQWx0LCBmYUhvbWUsIGZhVXNlciwgZmFTaWduT3V0QWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBhdXRoOiBmYWxzZX1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXV0aDogdHJ1ZX0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHthdXRoOiBmYWxzZX0pXG4gICAgfVxuICAgIFxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgYWxlcnQoKVxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSB0aGlzLnN0YXRlLmF1dGhcblxuICAgICAgICBpZiAoYXV0aCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2Jz5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhSG9tZSB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhVXNlciB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17ZeOAgD0+IHRoaXMubG9nb3V0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhU2lnbk91dEFsdCB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJGNDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdHN0eWxldHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYVNpZ25JbkFsdCB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFIb21lIH0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFVc2VyIH0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJGNDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdHN0eWxldHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59Il19 */\n/*@ sourceURL=/app/components/organisms/nav.js */"));
      }
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.f6c346ad93f3018ba2a4.hot-update.js.map