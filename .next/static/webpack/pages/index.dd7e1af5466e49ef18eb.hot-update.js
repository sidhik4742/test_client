webpackHotUpdate_N_E("pages/index",{

/***/ "./components/users/login.js":
/*!***********************************!*\
  !*** ./components/users/login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router/router */ \"./router/router.js\");\n\n\n\nvar _jsxFileName = \"/media/sidhik/CodeLove/Coding/SPS/Week 22/Test_client/components/users/login.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      loginCredntials = _useState[0],\n      setLoginCredntials = _useState[1];\n\n  var formSubmitHandler = function formSubmitHandler(event) {\n    event.preventDefault();\n    Object(_router_router__WEBPACK_IMPORTED_MODULE_4__[\"loginRoute\"])(loginCredntials).then(function (result) {\n      if (result.status === 200) {\n        console.log(result.msg);\n      } else {\n        console.log(result.msg);\n      }\n    });\n  };\n\n  var inputHandler = function inputHandler(event) {\n    setLoginCredntials(_objectSpread(_objectSpread({}, loginCredntials), {}, Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  console.log(loginCredntials);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,\n      onSubmit: formSubmitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.box,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          children: \"Dashboard\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"email\",\n          onChange: inputHandler,\n          className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.email,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"password\",\n          onChange: inputHandler,\n          className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.email,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n            children: \"Sign In\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            id: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn2,\n            children: \"Sign Up\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), ' ']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: [\"Forgot your password? \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"u\", {\n        style: {\n          color: '#f1c40f'\n        },\n        children: \"Click Here!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 31\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(login, \"VvsBvp0YY82mECbOIanwoxRGYeE=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vycy9sb2dpbi5qcz8xODIzIl0sIm5hbWVzIjpbImxvZ2luIiwidXNlU3RhdGUiLCJsb2dpbkNyZWRudGlhbHMiLCJzZXRMb2dpbkNyZWRudGlhbHMiLCJmb3JtU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb2dpblJvdXRlIiwidGhlbiIsInJlc3VsdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJtc2ciLCJpbnB1dEhhbmRsZXIiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJTdHlsZXMiLCJmb3JtIiwiYm94IiwiZW1haWwiLCJidG4iLCJidG4yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsRUFEdkM7QUFBQSxNQUNSQyxlQURRO0FBQUEsTUFDU0Msa0JBRFQ7O0FBR2YsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFDbkNBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBQyxxRUFBVSxDQUFDTCxlQUFELENBQVYsQ0FBNEJNLElBQTVCLENBQWlDLFVBQUNDLE1BQUQsRUFBWTtBQUMzQyxVQUFJQSxNQUFNLENBQUNDLE1BQVAsS0FBa0IsR0FBdEIsRUFBMkI7QUFDekJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLEdBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLEdBQW5CO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FURDs7QUFVQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDVCxLQUFELEVBQVc7QUFDOUJGLHNCQUFrQixpQ0FDYkQsZUFEYSx1S0FFZkcsS0FBSyxDQUFDVSxNQUFOLENBQWFDLElBRkUsRUFFS1gsS0FBSyxDQUFDVSxNQUFOLENBQWFFLEtBRmxCLEdBQWxCO0FBSUQsR0FMRDs7QUFNQU4sU0FBTyxDQUFDQyxHQUFSLENBQVlWLGVBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFFZ0IsK0RBQU0sQ0FBQ0MsSUFBeEI7QUFBOEIsY0FBUSxFQUFFZixpQkFBeEM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVjLCtEQUFNLENBQUNFLEdBQXZCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxxQkFBVyxFQUFDLE9BSGQ7QUFJRSxrQkFBUSxFQUFFTixZQUpaO0FBS0UsbUJBQVMsRUFBRUksK0RBQU0sQ0FBQ0csS0FMcEI7QUFNRSxrQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFVRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDLFVBSGQ7QUFJRSxrQkFBUSxFQUFFUCxZQUpaO0FBS0UsbUJBQVMsRUFBRUksK0RBQU0sQ0FBQ0csS0FMcEI7QUFNRSxrQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFrQkU7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUgsK0RBQU0sQ0FBQ0ksR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCRixFQW9CTyxHQXBCUCxlQXFCRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEsaUNBQ0U7QUFBSyxjQUFFLEVBQUVKLCtEQUFNLENBQUNLLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkYsRUF1Qk8sR0F2QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUF5QlMsR0F6QlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE0QkU7QUFBQSx3REFDd0I7QUFBRyxhQUFLLEVBQUU7QUFBQ0MsZUFBSyxFQUFFO0FBQVIsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBdERReEIsSzs7QUF3RE1BLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91c2Vycy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQge2xvZ2luUm91dGV9IGZyb20gJy4uLy4uL3JvdXRlci9yb3V0ZXInO1xuXG5mdW5jdGlvbiBsb2dpbigpIHtcbiAgY29uc3QgW2xvZ2luQ3JlZG50aWFscywgc2V0TG9naW5DcmVkbnRpYWxzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvZ2luUm91dGUobG9naW5DcmVkbnRpYWxzKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Lm1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQubXNnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0TG9naW5DcmVkbnRpYWxzKHtcbiAgICAgIC4uLmxvZ2luQ3JlZG50aWFscyxcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc29sZS5sb2cobG9naW5DcmVkbnRpYWxzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtTdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5ib3h9PlxuICAgICAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5lbWFpbH1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZXMuZW1haWx9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuYnRufT5TaWduIEluPC9kaXY+XG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9e1N0eWxlcy5idG4yfT5TaWduIFVwPC9kaXY+XG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgIDwvZGl2PnsnICd9XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cD5cbiAgICAgICAgRm9yZ290IHlvdXIgcGFzc3dvcmQ/IDx1IHN0eWxlPXt7Y29sb3I6ICcjZjFjNDBmJ319PkNsaWNrIEhlcmUhPC91PlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/users/login.js\n");

/***/ })

})