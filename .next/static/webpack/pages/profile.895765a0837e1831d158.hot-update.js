webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_eliasmoreno_git_next_amplify_auth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_eliasmoreno_git_next_amplify_auth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_eliasmoreno_git_next_amplify_auth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_eliasmoreno_git_next_amplify_auth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var _configureAmplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configureAmplify */ \"./configureAmplify.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/eliasmoreno/git/next-amplify-auth/pages/profile.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Profile = function Profile() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    checkUser();\n\n    function checkUser() {\n      return _checkUser.apply(this, arguments);\n    }\n\n    function _checkUser() {\n      _checkUser = Object(_Users_eliasmoreno_git_next_amplify_auth_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_eliasmoreno_git_next_amplify_auth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var user;\n        return _Users_eliasmoreno_git_next_amplify_auth_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"Auth\"].currentAuthenticatedUser();\n\n              case 2:\n                user = _context.sent;\n                console.log({\n                  user: user\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _checkUser.apply(this, arguments);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        return aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"Auth\"].federatedSignIn({\n          provider: \"Google\"\n        });\n      },\n      children: \"Google\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: function onClick() {\n        return aws_amplify__WEBPACK_IMPORTED_MODULE_4__[\"Auth\"].federatedSignIn({\n          provider: \"Facebook\"\n        });\n      },\n      children: \"Facebook\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Profile, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcz81YmUyIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VFZmZlY3QiLCJjaGVja1VzZXIiLCJBdXRoIiwiY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJmZWRlcmF0ZWRTaWduSW4iLCJwcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxhQUFTOztBQURLLGFBRUNBLFNBRkQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFNBRWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDcUJDLGdEQUFJLENBQUNDLHdCQUFMLEVBRHJCOztBQUFBO0FBQ1FDLG9CQURSO0FBRUVDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixzQkFBSSxFQUFKQTtBQUFGLGlCQUFaOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRmM7QUFBQTtBQUFBO0FBTWYsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNRixnREFBSSxDQUFDSyxlQUFMLENBQXFCO0FBQUVDLGtCQUFRLEVBQUU7QUFBWixTQUFyQixDQUFOO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTU4sZ0RBQUksQ0FBQ0ssZUFBTCxDQUFxQjtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBckIsQ0FBTjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQW5CRDs7R0FBTVQsTzs7S0FBQUEsTztBQXFCU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJhd3MtYW1wbGlmeVwiO1xuaW1wb3J0IFwiLi4vY29uZmlndXJlQW1wbGlmeVwiO1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrVXNlcigpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlcigpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBBdXRoLmN1cnJlbnRBdXRoZW50aWNhdGVkVXNlcigpO1xuICAgICAgY29uc29sZS5sb2coeyB1c2VyIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gQXV0aC5mZWRlcmF0ZWRTaWduSW4oeyBwcm92aWRlcjogXCJHb29nbGVcIiB9KX0+XG4gICAgICAgIEdvb2dsZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IEF1dGguZmVkZXJhdGVkU2lnbkluKHsgcHJvdmlkZXI6IFwiRmFjZWJvb2tcIiB9KX0+XG4gICAgICAgIEZhY2Vib29rXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ })

})