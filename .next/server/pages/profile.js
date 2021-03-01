module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./configureAmplify.js":
/*!*****************************!*\
  !*** ./configureAmplify.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify */ \"aws-amplify\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_aws_exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/aws-exports */ \"./src/aws-exports.js\");\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_0___default.a.configure(_src_aws_exports__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWd1cmVBbXBsaWZ5LmpzPzFjZjgiXSwibmFtZXMiOlsiQW1wbGlmeSIsImNvbmZpZ3VyZSIsImNvbmZpZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLGtEQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHdEQUFsQiIsImZpbGUiOiIuL2NvbmZpZ3VyZUFtcGxpZnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW1wbGlmeSBmcm9tIFwiYXdzLWFtcGxpZnlcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vc3JjL2F3cy1leHBvcnRzXCI7XG5cbkFtcGxpZnkuY29uZmlndXJlKGNvbmZpZyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./configureAmplify.js\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ \"aws-amplify\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _configureAmplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configureAmplify */ \"./configureAmplify.js\");\n\nvar _jsxFileName = \"/Users/eliasmoreno/git/next-amplify-auth/pages/profile.js\";\n\n\n\n\nconst Profile = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    checkUser();\n\n    async function checkUser() {\n      const user = await aws_amplify__WEBPACK_IMPORTED_MODULE_2__[\"Auth\"].currentAuthenticatedUser();\n      console.log({\n        user\n      });\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => aws_amplify__WEBPACK_IMPORTED_MODULE_2__[\"Auth\"].federatedSignIn({\n        provider: \"Google\"\n      }),\n      children: \"Google\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => aws_amplify__WEBPACK_IMPORTED_MODULE_2__[\"Auth\"].federatedSignIn({\n        provider: \"Facebook\"\n      }),\n      children: \"Facebook\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => aws_amplify__WEBPACK_IMPORTED_MODULE_2__[\"Auth\"].signOut(),\n      children: \"Sign Out\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzPzViZTIiXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZUVmZmVjdCIsImNoZWNrVXNlciIsInVzZXIiLCJBdXRoIiwiY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyIiwiY29uc29sZSIsImxvZyIsImZlZGVyYXRlZFNpZ25JbiIsInByb3ZpZGVyIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQkMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLGFBQVM7O0FBQ1QsbUJBQWVBLFNBQWYsR0FBMkI7QUFDekIsWUFBTUMsSUFBSSxHQUFHLE1BQU1DLGdEQUFJLENBQUNDLHdCQUFMLEVBQW5CO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKO0FBQUYsT0FBWjtBQUNEO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUUsTUFBTUMsZ0RBQUksQ0FBQ0ksZUFBTCxDQUFxQjtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBckIsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFRLGFBQU8sRUFBRSxNQUFNTCxnREFBSSxDQUFDSSxlQUFMLENBQXFCO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUFyQixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQU9FO0FBQVEsYUFBTyxFQUFFLE1BQU1MLGdEQUFJLENBQUNNLE9BQUwsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQXBCRDs7QUFzQmVWLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiYXdzLWFtcGxpZnlcIjtcbmltcG9ydCBcIi4uL2NvbmZpZ3VyZUFtcGxpZnlcIjtcblxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1VzZXIoKTtcbiAgICBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXIoKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgQXV0aC5jdXJyZW50QXV0aGVudGljYXRlZFVzZXIoKTtcbiAgICAgIGNvbnNvbGUubG9nKHsgdXNlciB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IEF1dGguZmVkZXJhdGVkU2lnbkluKHsgcHJvdmlkZXI6IFwiR29vZ2xlXCIgfSl9PlxuICAgICAgICBHb29nbGVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBBdXRoLmZlZGVyYXRlZFNpZ25Jbih7IHByb3ZpZGVyOiBcIkZhY2Vib29rXCIgfSl9PlxuICAgICAgICBGYWNlYm9va1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IEF1dGguc2lnbk91dCgpfT5TaWduIE91dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "./src/aws-exports.js":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable */\n// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.\nconst awsmobile = {\n  \"aws_project_region\": \"us-west-2\",\n  \"aws_cognito_identity_pool_id\": \"us-west-2:a87bb634-cc18-4a95-96fa-c84b2a50f018\",\n  \"aws_cognito_region\": \"us-west-2\",\n  \"aws_user_pools_id\": \"us-west-2_iLhMMBDQM\",\n  \"aws_user_pools_web_client_id\": \"63mhvolksgnibtosgf5i7n159\",\n  \"oauth\": {\n    \"domain\": \"nextamplifyauth358b35e0-358b35e0-dev.auth.us-west-2.amazoncognito.com\",\n    \"scope\": [\"phone\", \"email\", \"openid\", \"profile\", \"aws.cognito.signin.user.admin\"],\n    \"redirectSignIn\": \"http://localhost:3000/\",\n    \"redirectSignOut\": \"http://localhost:3000/\",\n    \"responseType\": \"code\"\n  },\n  \"federationTarget\": \"COGNITO_USER_POOLS\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (awsmobile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXdzLWV4cG9ydHMuanM/YWYzYSJdLCJuYW1lcyI6WyJhd3Ntb2JpbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBRztBQUNkLHdCQUFzQixXQURSO0FBRWQsa0NBQWdDLGdEQUZsQjtBQUdkLHdCQUFzQixXQUhSO0FBSWQsdUJBQXFCLHFCQUpQO0FBS2Qsa0NBQWdDLDJCQUxsQjtBQU1kLFdBQVM7QUFDTCxjQUFVLHVFQURMO0FBRUwsYUFBUyxDQUNMLE9BREssRUFFTCxPQUZLLEVBR0wsUUFISyxFQUlMLFNBSkssRUFLTCwrQkFMSyxDQUZKO0FBU0wsc0JBQWtCLHdCQVRiO0FBVUwsdUJBQW1CLHdCQVZkO0FBV0wsb0JBQWdCO0FBWFgsR0FOSztBQW1CZCxzQkFBb0I7QUFuQk4sQ0FBbEI7QUF1QmVBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2F3cy1leHBvcnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIFdBUk5JTkc6IERPIE5PVCBFRElULiBUaGlzIGZpbGUgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQVdTIEFtcGxpZnkuIEl0IHdpbGwgYmUgb3ZlcndyaXR0ZW4uXG5cbmNvbnN0IGF3c21vYmlsZSA9IHtcbiAgICBcImF3c19wcm9qZWN0X3JlZ2lvblwiOiBcInVzLXdlc3QtMlwiLFxuICAgIFwiYXdzX2NvZ25pdG9faWRlbnRpdHlfcG9vbF9pZFwiOiBcInVzLXdlc3QtMjphODdiYjYzNC1jYzE4LTRhOTUtOTZmYS1jODRiMmE1MGYwMThcIixcbiAgICBcImF3c19jb2duaXRvX3JlZ2lvblwiOiBcInVzLXdlc3QtMlwiLFxuICAgIFwiYXdzX3VzZXJfcG9vbHNfaWRcIjogXCJ1cy13ZXN0LTJfaUxoTU1CRFFNXCIsXG4gICAgXCJhd3NfdXNlcl9wb29sc193ZWJfY2xpZW50X2lkXCI6IFwiNjNtaHZvbGtzZ25pYnRvc2dmNWk3bjE1OVwiLFxuICAgIFwib2F1dGhcIjoge1xuICAgICAgICBcImRvbWFpblwiOiBcIm5leHRhbXBsaWZ5YXV0aDM1OGIzNWUwLTM1OGIzNWUwLWRldi5hdXRoLnVzLXdlc3QtMi5hbWF6b25jb2duaXRvLmNvbVwiLFxuICAgICAgICBcInNjb3BlXCI6IFtcbiAgICAgICAgICAgIFwicGhvbmVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgIFwib3BlbmlkXCIsXG4gICAgICAgICAgICBcInByb2ZpbGVcIixcbiAgICAgICAgICAgIFwiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW5cIlxuICAgICAgICBdLFxuICAgICAgICBcInJlZGlyZWN0U2lnbkluXCI6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLFxuICAgICAgICBcInJlZGlyZWN0U2lnbk91dFwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIixcbiAgICAgICAgXCJyZXNwb25zZVR5cGVcIjogXCJjb2RlXCJcbiAgICB9LFxuICAgIFwiZmVkZXJhdGlvblRhcmdldFwiOiBcIkNPR05JVE9fVVNFUl9QT09MU1wiXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGF3c21vYmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/aws-exports.js\n");

/***/ }),

/***/ "aws-amplify":
/*!******************************!*\
  !*** external "aws-amplify" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-amplify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhd3MtYW1wbGlmeVwiP2M3ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXdzLWFtcGxpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhd3MtYW1wbGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///aws-amplify\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });