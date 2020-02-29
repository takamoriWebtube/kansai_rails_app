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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/molecules/signinform.js":
/*!********************************************!*\
  !*** ./components/molecules/signinform.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/app/components/molecules/signinform.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class SignInForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      email: '1',
      password: '1',
      jump: '',
      msg: ''
    };
  }

  api(command) {
    console.log(command);
    superagent__WEBPACK_IMPORTED_MODULE_3___default.a.post('https://rails.local/api/' + command).send({
      email: this.state.email,
      passwd: this.state.passwd
    }).end((err, res) => {
      if (err) {
        console.log(err.response.text);
        this.setState({
          msg: err.response.text
        });
        return;
      }

      localStorage.setItem('token', res.text);
      let token = localStorage.getItem('token');
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
      /*
      if (err) return
      const r = res.body
      console.log(r)
      if (r.status && r.token) {
          alert('接続')
          window.localStorage['sns_id'] = this.state.userid
          window.localStorage['sns_auth_token'] = r.token
          this.setState({Jump: '/'})
          return
      }
      this.setState({msg: r.msg})
      */
    });
  }

  render() {
    if (this.state.jump) {
      return __jsx(Redirect, {
        to: this.state.jump,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });
    }

    const changed = (name, e) => this.setState({
      [name]: e.target.value
    });

    return __jsx("div", {
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:"), __jsx("input", {
      value: this.state.email,
      onChange: e => changed('email', e),
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx("input", {
      type: "password",
      value: this.state.passwd,
      onChange: e => changed('passwd', e),
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx("button", {
      onClick: e => this.api('login'),
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "\u30ED\u30B0\u30A4\u30F3"), __jsx("br", {
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3259989858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, this.state.msg)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3259989858",
      __self: this
    }, "span.jsx-3259989858{display:block;}input.jsx-3259989858{width:100%;height:32px;margin-bottom:40px;}button.jsx-3259989858{display:block;width:60px;height:32px;margin-left:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9tb2xlY3VsZXMvc2lnbmluZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RDRCLEFBR3VDLEFBR0gsQUFLRyxXQUpGLEdBSGhCLEFBUWUsU0FKUSxFQUtQLFlBQ0ssS0FMckIsWUFNQSIsImZpbGUiOiIvYXBwL2NvbXBvbmVudHMvbW9sZWN1bGVzL3NpZ25pbmZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkluRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBlbWFpbDogJzEnLHBhc3N3b3JkOiAnMScsanVtcDogJycsIG1zZzogJycgfVxuICAgIH1cblxuICAgIGFwaSAoY29tbWFuZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb21tYW5kKVxuICAgICAgICByZXF1ZXN0XG4gICAgICAgICAgICAucG9zdCgnaHR0cHM6Ly9yYWlscy5sb2NhbC9hcGkvJyArIGNvbW1hbmQpXG4gICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dkOiB0aGlzLnN0YXRlLnBhc3N3ZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UudGV4dClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bXNnOiBlcnIucmVzcG9uc2UudGV4dH0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXMudGV4dClcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJlcy5ib2R5XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocilcbiAgICAgICAgICAgICAgICBpZiAoci5zdGF0dXMgJiYgci50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgn5o6l57aaJylcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVsnc25zX2lkJ10gPSB0aGlzLnN0YXRlLnVzZXJpZFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlWydzbnNfYXV0aF90b2tlbiddID0gci50b2tlblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtKdW1wOiAnLyd9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bXNnOiByLm1zZ30pXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuanVtcCkge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17dGhpcy5zdGF0ZS5qdW1wfSAvPlxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWQgPSAobmFtZSwgZSkgPT4gdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuODoeODvOODq+OCouODieODrOOCuTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZWQoJ2VtYWlsJywgZSl9IC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuODkeOCueODr+ODvOODiTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd2R9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VkKCdwYXNzd2QnICwgZSl9IC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZeOAgD0+IHRoaXMuYXBpKCdsb2dpbicpfT7jg63jgrDjgqTjg7M8L2J1dHRvbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubXNnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/app/components/molecules/signinform.js */"));
  }

}

/***/ }),

/***/ "./components/organisms/signinarea.js":
/*!********************************************!*\
  !*** ./components/organisms/signinarea.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInArea; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_signinform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/signinform */ "./components/molecules/signinform.js");
var _jsxFileName = "/app/components/organisms/signinarea.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SignInArea extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "jsx-663440288" + " " + "Area SignInArea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-663440288",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\u30ED\u30B0\u30A4\u30F3"), __jsx(_molecules_signinform__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "663440288",
      __self: this
    }, ".SignInArea.jsx-663440288{background-color:#262F42;color:#fff;padding:30px;width:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvc2lnbmluYXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIsQUFHa0QseUJBQ2QsV0FDRSxhQUNILFVBQ2QiLCJmaWxlIjoiL2FwcC9jb21wb25lbnRzL29yZ2FuaXNtcy9zaWduaW5hcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gJy4uL21vbGVjdWxlcy9zaWduaW5mb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5BcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXJlYSBTaWduSW5BcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPuODreOCsOOCpOODszwvaDE+XG4gICAgICAgICAgICAgICAgPFNpZ25JbkZvcm0gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5TaWduSW5BcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJGNDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=/app/components/organisms/signinarea.js */"));
  }

}

/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_organisms_signinarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/organisms/signinarea */ "./components/organisms/signinarea.js");
var _jsxFileName = "/app/pages/signin.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "jsx-4294816929" + " " + "page",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-4294816929" + " " + "ImageArea",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("img", {
  src: "/images/star.jpeg",
  className: "jsx-4294816929",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("p", {
  className: "jsx-4294816929",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "\u30C1\u30E3\u30C3\u30C8\u3057\u3066\u304F\uFF1F\uFF1F")), __jsx(_components_organisms_signinarea__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4294816929",
  __self: undefined
}, ".page.jsx-4294816929{width:100%;height:100vh;max-width:1280px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ImageArea.jsx-4294816929{position:rerative;width:70%;}img.jsx-4294816929{width:100%;height:100%;object-fit:cover;}p.jsx-4294816929{position:absolute;top:20%;left:20%;color:#fff;font-weight:bold;font-size:4vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUc0QixBQU1PLEFBSVAsQUFLTyxXQWRMLEFBVUQsT0FKRixBQVNGLEtBSlMsQ0FWQSxFQWVSLEVBVGIsT0FVZSxLQUxmLENBVmlCLEtBZ0JJLGlCQUNILGNBQ2xCLHNDQWpCQSIsImZpbGUiOiIvYXBwL3BhZ2VzL3NpZ25pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduSW5BcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3NpZ25pbmFyZWEnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUFyZWFcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL3N0YXIuanBlZycvPlxuICAgICAgICAgICAgPHA+44OB44Oj44OD44OI44GX44Gm44GP77yf77yfPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNpZ25JbkFyZWEgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5JbWFnZUFyZWEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZXJhdGl2ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMjAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=/app/pages/signin.js */")));

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/pages/signin.js */"./pages/signin.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ })

/******/ });
//# sourceMappingURL=signin.js.map