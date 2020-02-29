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
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "check",
    value: function check() {
      var token = window.localStorage.getItem('token');

      if (token) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      function NavLink() {
        if (check) {
          return __jsx("ul", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/signin",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSignInAlt"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          })))), __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          })))), __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/user",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          })))));
        } else {
          return __jsx("ul", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/signin",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSignInAlt"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          })))), __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          })))), __jsx("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/user",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUser"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          })))));
        }
      }

      return __jsx("nav", {
        className: "jsx-1307335297" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(NavLink, {
        className: "jsx-1307335297",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1307335297",
        __self: this
      }, "nav.jsx-1307335297{padding:16px;background-color:#262F42;width:64px;height:100vh;}ul.jsx-1307335297{liststyletype:none;margin:0;padding:0;}li.jsx-1307335297{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:40px;}span.jsx-1307335297{width:40px;height:40px;background-color:#ECF0F4;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}svg.jsx-1307335297{background-color:#ECF0F4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFNEIsQUFHa0MsQUFNTSxBQUtILEFBTUwsQUFTYyxXQVJiLEVBakJhLEdBV1osR0FMSixJQVlnQixFQVE3QixHQW5CYyxVQU5DLEFBT2YsVUFXdUIsQ0FqQk4sYUFDakIsS0FpQmlCLHVCQVJVLG1EQVNKLGdEQVJBLG1CQUN2QiwwQkFRMkIsbUdBQzNCIiwiZmlsZSI6Ii9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2lnbkluQWx0LCBmYUhvbWUsIGZhVXNlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBcbiAgICBjaGVjaygpIHtcbiAgICAgICAgbGV0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgZnVuY3Rpb24gTmF2TGluaygpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFTaWduSW5BbHQgfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhSG9tZSB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhVXNlciB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhU2lnbkluQWx0IH0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYUhvbWUgfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYVVzZXIgfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXYnPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MkY0MjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdHN0eWxldHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGNDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/app/components/organisms/nav.js */"));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.6eee43867da4e6e302aa.hot-update.js.map