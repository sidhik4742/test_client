webpackHotUpdate_N_E("pages/newPassword",{

/***/ "./pages/newPassword.js":
/*!******************************!*\
  !*** ./pages/newPassword.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router/router */ \"./router/router.js\");\n\n\n\nvar _jsxFileName = \"/media/sidhik/CodeLove/Coding/SPS/Week 22/Test_client/pages/newPassword.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction newPassword() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var statusRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      newPassword = _useState[0],\n      setNewPassword = _useState[1];\n\n  var inputHandler = function inputHandler(event) {\n    setNewPassword(_objectSpread(_objectSpread({}, newPassword), {}, Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  var newPasswordHandler = function newPasswordHandler() {\n    var mailId = router.query ? router.query.email : null;\n\n    if (mailId) {\n      if (newPassword.password === newPassword.c_password && newPassword.password !== '') {\n        var data = {\n          password: newPassword.password,\n          email: mailId\n        };\n        Object(_router_router__WEBPACK_IMPORTED_MODULE_5__[\"newPasswordRoute\"])(data).then(function (result) {\n          console.log(result);\n        });\n      } else {\n        console.log(\"password does not match\");\n      }\n    }\n  };\n\n  console.log(router.query.email);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 container mx-auto d-block \",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-center mb-2 \",\n          children: \"New password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          className: \"w-25\",\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Enter password\",\n          onChange: inputHandler\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 mt-3 mb-2 \",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          className: \"w-25\",\n          type: \"password\",\n          name: \"c_password\",\n          placeholder: \"Re-enter password\",\n          onChange: inputHandler\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        ref: statusRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 mt-3 \",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          className: \"btn btn-success\",\n          type: \"button\",\n          onClick: newPasswordHandler,\n          children: [' ', \"send\", ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(newPassword, \"u5XWyjiEBLAIQpcRU8wZqeIlWaQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newPassword);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3UGFzc3dvcmQuanM/YmI3NCJdLCJuYW1lcyI6WyJuZXdQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsInN0YXR1c1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwic2V0TmV3UGFzc3dvcmQiLCJpbnB1dEhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm5ld1Bhc3N3b3JkSGFuZGxlciIsIm1haWxJZCIsInF1ZXJ5IiwiZW1haWwiLCJwYXNzd29yZCIsImNfcGFzc3dvcmQiLCJkYXRhIiwibmV3UGFzc3dvcmRSb3V0ZSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sRUFBeEI7O0FBSHFCLGtCQUtpQkMsc0RBQVEsRUFMekI7QUFBQSxNQUtkTCxXQUxjO0FBQUEsTUFLRE0sY0FMQzs7QUFPckIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCRixrQkFBYyxpQ0FBS04sV0FBTCx1S0FBbUJRLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFoQyxFQUF1Q0YsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQXBELEdBQWQ7QUFDRCxHQUZEOztBQUdBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixRQUFJQyxNQUFNLEdBQUdaLE1BQU0sQ0FBQ2EsS0FBUCxHQUFlYixNQUFNLENBQUNhLEtBQVAsQ0FBYUMsS0FBNUIsR0FBb0MsSUFBakQ7O0FBQ0EsUUFBSUYsTUFBSixFQUFZO0FBQ1YsVUFDRWIsV0FBVyxDQUFDZ0IsUUFBWixLQUF5QmhCLFdBQVcsQ0FBQ2lCLFVBQXJDLElBQ0FqQixXQUFXLENBQUNnQixRQUFaLEtBQXlCLEVBRjNCLEVBR0U7QUFDQSxZQUFJRSxJQUFJLEdBQUc7QUFDVEYsa0JBQVEsRUFBRWhCLFdBQVcsQ0FBQ2dCLFFBRGI7QUFFVEQsZUFBSyxFQUFFRjtBQUZFLFNBQVg7QUFJQU0sK0VBQWdCLENBQUNELElBQUQsQ0FBaEIsQ0FBdUJFLElBQXZCLENBQTRCLFVBQUNDLE1BQUQsRUFBWTtBQUN0Q0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0QsU0FGRDtBQUdELE9BWEQsTUFXTztBQUNIQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNIO0FBQ0Y7QUFDRixHQWxCRDs7QUFvQkFELFNBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsTUFBTSxDQUFDYSxLQUFQLENBQWFDLEtBQXpCO0FBRUEsc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxtQkFBUyxFQUFDLE1BRFo7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGNBQUksRUFBQyxVQUhQO0FBSUUscUJBQVcsRUFBQyxnQkFKZDtBQUtFLGtCQUFRLEVBQUVSO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxjQUFJLEVBQUMsWUFIUDtBQUlFLHFCQUFXLEVBQUMsbUJBSmQ7QUFLRSxrQkFBUSxFQUFFQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFvQkU7QUFBRyxXQUFHLEVBQUVKO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixlQXFCRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyxpQkFEWjtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsaUJBQU8sRUFBRVMsa0JBSFg7QUFBQSxxQkFLRyxHQUxILFVBTU8sR0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9DRDs7R0FwRVFaLFc7VUFDUUUscUQ7OztBQXFFRkYsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9uZXdQYXNzd29yZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcblxuaW1wb3J0IHtuZXdQYXNzd29yZFJvdXRlfSBmcm9tICcuLi9yb3V0ZXIvcm91dGVyJztcblxuZnVuY3Rpb24gbmV3UGFzc3dvcmQoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHN0YXR1c1JlZiA9IHVzZVJlZigpXG5cbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGlucHV0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIHNldE5ld1Bhc3N3b3JkKHsuLi5uZXdQYXNzd29yZCwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH07XG4gIGNvbnN0IG5ld1Bhc3N3b3JkSGFuZGxlciA9ICgpID0+IHtcbiAgICBsZXQgbWFpbElkID0gcm91dGVyLnF1ZXJ5ID8gcm91dGVyLnF1ZXJ5LmVtYWlsIDogbnVsbDtcbiAgICBpZiAobWFpbElkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5ld1Bhc3N3b3JkLnBhc3N3b3JkID09PSBuZXdQYXNzd29yZC5jX3Bhc3N3b3JkICYmXG4gICAgICAgIG5ld1Bhc3N3b3JkLnBhc3N3b3JkICE9PSAnJ1xuICAgICAgKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgIHBhc3N3b3JkOiBuZXdQYXNzd29yZC5wYXNzd29yZCxcbiAgICAgICAgICBlbWFpbDogbWFpbElkLFxuICAgICAgICB9O1xuICAgICAgICBuZXdQYXNzd29yZFJvdXRlKGRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIGRvZXMgbm90IG1hdGNoXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuZW1haWwpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbnRhaW5lciBteC1hdXRvIGQtYmxvY2sgXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTIgXCI+TmV3IHBhc3N3b3JkPC9oMj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjVcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG10LTMgbWItMiBcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjVcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJjX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmUtZW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgcmVmPXtzdGF0dXNSZWZ9ID48L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG10LTMgXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17bmV3UGFzc3dvcmRIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBzZW5keycgJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3UGFzc3dvcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/newPassword.js\n");

/***/ })

})