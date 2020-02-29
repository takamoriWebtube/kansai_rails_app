webpackHotUpdate("static/development/pages/signin.js",{

/***/ "./components/molecules/signinform.js":
/*!********************************************!*\
  !*** ./components/molecules/signinform.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/app/components/molecules/signinform.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var SignInForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignInForm, _Component);

  function SignInForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SignInForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SignInForm).call(this, props));
    _this.state = {
      email: '1',
      password: '1',
      jump: '',
      msg: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SignInForm, [{
    key: "api",
    value: function api(command) {
      var _this2 = this;

      console.log(command);
      superagent__WEBPACK_IMPORTED_MODULE_8___default.a.post('https://rails.local/api/' + command).send({
        email: this.state.email,
        passwd: this.state.passwd
      }).end(function (err, res) {
        if (err) {
          console.log(err.response.text);

          _this2.setState({
            msg: err.response.text
          });

          return;
        }
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
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.jump) {
        return __jsx(Redirect, {
          to: this.state.jump,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      }

      var changed = function changed(name, e) {
        return _this3.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, e.target.value));
      };

      return __jsx("div", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:"), __jsx("input", {
        value: this.state.email,
        onChange: function onChange(e) {
          return changed('email', e);
        },
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx("input", {
        type: "password",
        value: this.state.passwd,
        onChange: function onChange(e) {
          return changed('passwd', e);
        },
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("button", {
        onClick: function onClick(e) {
          return _this3.api('login');
        },
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u30ED\u30B0\u30A4\u30F3"), __jsx("br", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.state.msg)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3259989858",
        __self: this
      }, "span.jsx-3259989858{display:block;}input.jsx-3259989858{width:100%;height:32px;margin-bottom:40px;}button.jsx-3259989858{display:block;width:60px;height:32px;margin-left:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9tb2xlY3VsZXMvc2lnbmluZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RDRCLEFBR3VDLEFBR0gsQUFLRyxXQUpGLEdBSGhCLEFBUWUsU0FKUSxFQUtQLFlBQ0ssS0FMckIsWUFNQSIsImZpbGUiOiIvYXBwL2NvbXBvbmVudHMvbW9sZWN1bGVzL3NpZ25pbmZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVtYWlsOiAnMScscGFzc3dvcmQ6ICcxJyxqdW1wOiAnJywgbXNnOiAnJyB9XG4gICAgfVxuXG4gICAgYXBpIChjb21tYW5kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1hbmQpXG4gICAgICAgIHJlcXVlc3RcbiAgICAgICAgICAgIC5wb3N0KCdodHRwczovL3JhaWxzLmxvY2FsL2FwaS8nICsgY29tbWFuZClcbiAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd2Q6IHRoaXMuc3RhdGUucGFzc3dkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS50ZXh0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttc2c6IGVyci5yZXNwb25zZS50ZXh0fSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJlcy5ib2R5XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocilcbiAgICAgICAgICAgICAgICBpZiAoci5zdGF0dXMgJiYgci50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgn5o6l57aaJylcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZVsnc25zX2lkJ10gPSB0aGlzLnN0YXRlLnVzZXJpZFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlWydzbnNfYXV0aF90b2tlbiddID0gci50b2tlblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtKdW1wOiAnLyd9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bXNnOiByLm1zZ30pXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuanVtcCkge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17dGhpcy5zdGF0ZS5qdW1wfSAvPlxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYW5nZWQgPSAobmFtZSwgZSkgPT4gdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuODoeODvOODq+OCouODieODrOOCuTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZWQoJ2VtYWlsJywgZSl9IC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuODkeOCueODr+ODvOODiTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd2R9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VkKCdwYXNzd2QnICwgZSl9IC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZeOAgD0+IHRoaXMuYXBpKCdsb2dpbicpfT7jg63jgrDjgqTjg7M8L2J1dHRvbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubXNnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/app/components/molecules/signinform.js */"));
    }
  }]);

  return SignInForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=signin.js.d1a0eb46038b16d2dad3.hot-update.js.map