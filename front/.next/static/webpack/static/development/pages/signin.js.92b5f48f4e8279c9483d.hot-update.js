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

        localStorage.setItem('token', res.text);
        var token = localStorage.getItem('token');
        Router.push('/');
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
            lineNumber: 45
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
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
      }), __jsx("span", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
          lineNumber: 55
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("button", {
        onClick: function onClick(e) {
          return _this3.api('login');
        },
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "\u30ED\u30B0\u30A4\u30F3"), __jsx("br", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-3259989858",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.state.msg)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3259989858",
        __self: this
      }, "span.jsx-3259989858{display:block;}input.jsx-3259989858{width:100%;height:32px;margin-bottom:40px;}button.jsx-3259989858{display:block;width:60px;height:32px;margin-left:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9tb2xlY3VsZXMvc2lnbmluZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRDRCLEFBR3VDLEFBR0gsQUFLRyxXQUpGLEdBSGhCLEFBUWUsU0FKUSxFQUtQLFlBQ0ssS0FMckIsWUFNQSIsImZpbGUiOiIvYXBwL2NvbXBvbmVudHMvbW9sZWN1bGVzL3NpZ25pbmZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGVtYWlsOiAnMScscGFzc3dvcmQ6ICcxJyxqdW1wOiAnJywgbXNnOiAnJyB9XG4gICAgfVxuXG4gICAgYXBpIChjb21tYW5kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1hbmQpXG4gICAgICAgIHJlcXVlc3RcbiAgICAgICAgICAgIC5wb3N0KCdodHRwczovL3JhaWxzLmxvY2FsL2FwaS8nICsgY29tbWFuZClcbiAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd2Q6IHRoaXMuc3RhdGUucGFzc3dkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS50ZXh0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttc2c6IGVyci5yZXNwb25zZS50ZXh0fSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy50ZXh0KVxuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm5cbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzLmJvZHlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyKVxuICAgICAgICAgICAgICAgIGlmIChyLnN0YXR1cyAmJiByLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfmjqXntponKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlWydzbnNfaWQnXSA9IHRoaXMuc3RhdGUudXNlcmlkXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbJ3Nuc19hdXRoX3Rva2VuJ10gPSByLnRva2VuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe0p1bXA6ICcvJ30pXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttc2c6IHIubXNnfSlcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5qdW1wKSB7XG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt0aGlzLnN0YXRlLmp1bXB9IC8+XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhbmdlZCA9IChuYW1lLCBlKSA9PiB0aGlzLnNldFN0YXRlKHtbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+44Oh44O844Or44Ki44OJ44Os44K5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlZCgnZW1haWwnLCBlKX0gLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+44OR44K544Ov44O844OJPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3ZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZWQoJ3Bhc3N3ZCcgLCBlKX0gLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtl44CAPT4gdGhpcy5hcGkoJ2xvZ2luJyl9PuODreOCsOOCpOODszwvYnV0dG9uPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5tc2d9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/app/components/molecules/signinform.js */"));
    }
  }]);

  return SignInForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=signin.js.92b5f48f4e8279c9483d.hot-update.js.map