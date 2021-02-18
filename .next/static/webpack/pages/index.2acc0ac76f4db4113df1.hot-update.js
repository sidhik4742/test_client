webpackHotUpdate_N_E("pages/index",{

/***/ "./components/users/login.js":
/*!***********************************!*\
  !*** ./components/users/login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router/router */ \"./router/router.js\");\n\n\n\nvar _jsxFileName = \"/media/sidhik/CodeLove/Coding/SPS/Week 22/Test_client/components/users/login.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      loginCredntials = _useState[0],\n      setLoginCredntials = _useState[1];\n\n  var formSubmitHandler = function formSubmitHandler(event) {\n    event.preventDefault();\n    Object(_router_router__WEBPACK_IMPORTED_MODULE_4__[\"loginRoute\"])(loginCredntials).then(function (result) {\n      if (result.status === 200) {\n        console.log(result.msg);\n      } else {\n        console.log(result.msg);\n      }\n    });\n  };\n\n  var inputHandler = function inputHandler(event) {\n    setLoginCredntials(_objectSpread(_objectSpread({}, loginCredntials), {}, Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  console.log(loginCredntials);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,\n      onSubmit: formSubmitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.box,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          children: \"Dashboard\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"email\",\n          onChange: inputHandler,\n          className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.email,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"password\",\n          onChange: inputHandler,\n          className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.email,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,\n            children: \"Sign In\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            id: _styles_login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn2,\n            children: \"Sign Up\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), ' ']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: [\"Forgot your password? \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"u\", {\n        style: {\n          color: '#f1c40f'\n        },\n        children: \"Click Here!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 31\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(login, \"VvsBvp0YY82mECbOIanwoxRGYeE=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vycy9sb2dpbi5qcz8xODIzIl0sIm5hbWVzIjpbImxvZ2luIiwidXNlU3RhdGUiLCJsb2dpbkNyZWRudGlhbHMiLCJzZXRMb2dpbkNyZWRudGlhbHMiLCJmb3JtU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb2dpblJvdXRlIiwidGhlbiIsInJlc3VsdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJtc2ciLCJpbnB1dEhhbmRsZXIiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJTdHlsZXMiLCJmb3JtIiwiYm94IiwiZW1haWwiLCJidG4iLCJidG4yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsRUFEdkM7QUFBQSxNQUNSQyxlQURRO0FBQUEsTUFDU0Msa0JBRFQ7O0FBR2YsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFDbkNBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBQyxxRUFBVSxDQUFDTCxlQUFELENBQVYsQ0FBNEJNLElBQTVCLENBQWlDLFVBQUNDLE1BQUQsRUFBWTtBQUMzQyxVQUFJQSxNQUFNLENBQUNDLE1BQVAsS0FBa0IsR0FBdEIsRUFBMkI7QUFDekJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLEdBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLEdBQW5CO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FURDs7QUFVQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDVCxLQUFELEVBQVc7QUFDOUJGLHNCQUFrQixpQ0FDYkQsZUFEYSx1S0FFZkcsS0FBSyxDQUFDVSxNQUFOLENBQWFDLElBRkUsRUFFS1gsS0FBSyxDQUFDVSxNQUFOLENBQWFFLEtBRmxCLEdBQWxCO0FBSUQsR0FMRDs7QUFNQU4sU0FBTyxDQUFDQyxHQUFSLENBQVlWLGVBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFFZ0IsK0RBQU0sQ0FBQ0MsSUFBeEI7QUFBOEIsY0FBUSxFQUFFZixpQkFBeEM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVjLCtEQUFNLENBQUNFLEdBQXZCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxxQkFBVyxFQUFDLE9BSGQ7QUFJRSxrQkFBUSxFQUFFTixZQUpaO0FBS0UsbUJBQVMsRUFBRUksK0RBQU0sQ0FBQ0csS0FMcEI7QUFNRSxrQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFVRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDLFVBSGQ7QUFJRSxrQkFBUSxFQUFFUCxZQUpaO0FBS0UsbUJBQVMsRUFBRUksK0RBQU0sQ0FBQ0csS0FMcEI7QUFNRSxrQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFrQkU7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVILCtEQUFNLENBQUNJLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkYsRUFvQk8sR0FwQlAsZUFxQkU7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBLGlDQUNFO0FBQUssY0FBRSxFQUFFSiwrREFBTSxDQUFDSyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJGLEVBdUJPLEdBdkJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBeUJTLEdBekJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBNEJFO0FBQUEsd0RBQ3dCO0FBQUcsYUFBSyxFQUFFO0FBQUNDLGVBQUssRUFBRTtBQUFSLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQXREUXhCLEs7O0FBd0RNQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXNlcnMvbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzJztcblxuaW1wb3J0IHtsb2dpblJvdXRlfSBmcm9tICcuLi8uLi9yb3V0ZXIvcm91dGVyJztcblxuZnVuY3Rpb24gbG9naW4oKSB7XG4gIGNvbnN0IFtsb2dpbkNyZWRudGlhbHMsIHNldExvZ2luQ3JlZG50aWFsc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2dpblJvdXRlKGxvZ2luQ3JlZG50aWFscykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5tc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Lm1zZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGlucHV0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIHNldExvZ2luQ3JlZG50aWFscyh7XG4gICAgICAuLi5sb2dpbkNyZWRudGlhbHMsXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKGxvZ2luQ3JlZG50aWFscyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17U3R5bGVzLmZvcm19IG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuYm94fT5cbiAgICAgICAgICA8aDE+RGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZXMuZW1haWx9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLmVtYWlsfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5idG59PlNpZ24gSW48L2Rpdj5cbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPGRpdiBpZD17U3R5bGVzLmJ0bjJ9PlNpZ24gVXA8L2Rpdj5cbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgPC9kaXY+eycgJ31cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwPlxuICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD8gPHUgc3R5bGU9e3tjb2xvcjogJyNmMWM0MGYnfX0+Q2xpY2sgSGVyZSE8L3U+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/users/login.js\n");

/***/ })

})