webpackHotUpdate_N_E("pages/forgetPassword",{

/***/ "./components/users/forgetPassword.js":
/*!********************************************!*\
  !*** ./components/users/forgetPassword.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router/router */ \"./router/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/media/sidhik/CodeLove/Coding/SPS/Week 22/Test_client/components/users/forgetPassword.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction forgetPassword() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var inputHandler = function inputHandler(event) {\n    setEmail(_objectSpread(_objectSpread({}, email), {}, Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  var forgetPasswordHandler = function forgetPasswordHandler() {\n    Object(_router_router__WEBPACK_IMPORTED_MODULE_3__[\"forgetPasswordRoute\"])(email).then(function (result) {\n      console.log(result);\n    });\n  };\n\n  console.log(email);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_layout_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 container mx-auto d-block \",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-center mb-2 \",\n          children: \"Forget password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          children: \"enter your email id here, i will send you the wizard \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          className: \"w-25\",\n          type: \"text\",\n          name: \"email\",\n          placeholder: \"email\",\n          onChange: inputHandler\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 mt-3 \",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          className: \"btn btn-success\",\n          type: \"button\",\n          onClick: forgetPasswordHandler,\n          children: [' ', \"send\", ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(forgetPassword, \"HPo+NQdiutTF67nJYuzMk6Kbopc=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (forgetPassword);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vycy9mb3JnZXRQYXNzd29yZC5qcz84YTgyIl0sIm5hbWVzIjpbImZvcmdldFBhc3N3b3JkIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwiaW5wdXRIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmb3JnZXRQYXNzd29yZEhhbmRsZXIiLCJmb3JnZXRQYXNzd29yZFJvdXRlIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLEVBRFY7QUFBQSxNQUNqQkMsS0FEaUI7QUFBQSxNQUNWQyxRQURVOztBQUd4QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJGLFlBQVEsaUNBQUtELEtBQUwsdUtBQWFHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUExQixFQUFpQ0YsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQTlDLEdBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNsQ0MsOEVBQW1CLENBQUNSLEtBQUQsQ0FBbkIsQ0FBMkJTLElBQTNCLENBQWdDLFVBQUNDLE1BQUQsRUFBWTtBQUMxQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFNQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFFQSxzQkFDRSxxRUFBQyxzREFBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUNBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLHFCQUFXLEVBQUMsT0FKZDtBQUtFLGtCQUFRLEVBQUVFO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVlFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFDLGlCQURaO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxpQkFBTyxFQUFFSyxxQkFIWDtBQUFBLHFCQUtHLEdBTEgsVUFNTyxHQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBMUNRVCxjOztBQTRDTUEsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJzL2ZvcmdldFBhc3N3b3JkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXQvbGF5b3V0JztcblxuaW1wb3J0IHtmb3JnZXRQYXNzd29yZFJvdXRlfSBmcm9tICcuLi8uLi9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gZm9yZ2V0UGFzc3dvcmQoKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRFbWFpbCh7Li4uZW1haWwsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9O1xuXG4gIGNvbnN0IGZvcmdldFBhc3N3b3JkSGFuZGxlciA9ICgpID0+IHtcbiAgICBmb3JnZXRQYXNzd29yZFJvdXRlKGVtYWlsKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coZW1haWwpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbnRhaW5lciBteC1hdXRvIGQtYmxvY2sgXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTIgXCI+Rm9yZ2V0IHBhc3N3b3JkPC9oMj5cbiAgICAgICAgICA8cD5lbnRlciB5b3VyIGVtYWlsIGlkIGhlcmUsIGkgd2lsbCBzZW5kIHlvdSB0aGUgd2l6YXJkIDwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtMyBcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtmb3JnZXRQYXNzd29yZEhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHNlbmR7JyAnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JnZXRQYXNzd29yZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/users/forgetPassword.js\n");

/***/ })

})