webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _containers_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/Header */ \"./containers/Header.tsx\");\n/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/store */ \"./core/store.ts\");\n/* harmony import */ var _hocs_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hocs/providers */ \"./hocs/providers.tsx\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/home/delacruz/Documents/github/portfolio/pages/_app.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar App = function App(props) {\n  _s();\n\n  var themeStart = Object(_core_store__WEBPACK_IMPORTED_MODULE_4__[\"useStoreActions\"])(function (actions) {\n    return actions.theme.start;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useEffect\"])(function () {// themeStart();\n  }, [themeStart]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-icon\",\n        sizes: \"180x180\",\n        href: \"/apple-touch-icon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        type: \"image/png\",\n        sizes: \"32x32\",\n        href: \"/favicon-32x32.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        type: \"image/png\",\n        sizes: \"16x16\",\n        href: \"/favicon-16x16.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"manifest\",\n        href: \"/site.webmanifest\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"mask-icon\",\n        href: \"/safari-pinned-tab.svg\",\n        color: \"#333333\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"msapplication-TileColor\",\n        content: \"#333333\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"theme-color\",\n        content: \"#333333\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_6__[\"DefaultSeo\"], {\n      title: \"Hansel De La Cruz\",\n      description: \"Hansel De La Cruz's Portfolio\",\n      canonical: \"https://dev.hanseldelacruz.com\",\n      openGraph: {\n        type: \"website\",\n        url: \"https://dev.hanseldelacruz.com\",\n        title: \"Hansel De La Cruz\",\n        description: \"Hansel De La Cruz's Portfolio\",\n        locale: \"en_US\",\n        site_name: \"Hansel De La Cruz\" // images: [\n        //   {\n        //     url: `${process.env.NEXT_PUBLIC_URL!}/logo.png`,\n        //     width: 512,\n        //     height: 512,\n        //     alt: \"Logo\",\n        //   },\n        //   {\n        //     url: `${process.env.NEXT_PUBLIC_URL!}/logo192.png`,\n        //     width: 192,\n        //     height: 192,\n        //     alt: \"Logo Small\",\n        //   },\n        //   {\n        //     url: `${process.env.NEXT_PUBLIC_URL!}/logo_transparent.png`,\n        //     width: 512,\n        //     height: 512,\n        //     alt: \"Logo Transparent\",\n        //   },\n        // ],\n\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col min-h-screen bg-gray-100 font-poppins dark:bg-gray-900 dark:text-white\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_containers_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container flex-1 px-6 mt-24\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(props.Component, _objectSpread({}, props.pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Footer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(App, \"AmtpnEJTD9nwE8m4IWooaDP3CHQ=\", false, function () {\n  return [_core_store__WEBPACK_IMPORTED_MODULE_4__[\"useStoreActions\"]];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_hocs_providers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(App));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRoZW1lU3RhcnQiLCJ1c2VTdG9yZUFjdGlvbnMiLCJhY3Rpb25zIiwidGhlbWUiLCJzdGFydCIsInVzZUVmZmVjdCIsInByb2Nlc3MiLCJ0eXBlIiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2FsZSIsInNpdGVfbmFtZSIsInBhZ2VQcm9wcyIsIndpdGhQcm92aWRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pDLE1BQU1DLFVBQVUsR0FBR0MsbUVBQWUsQ0FBQyxVQUFDQyxPQUFEO0FBQUEsV0FBYUEsT0FBTyxDQUFDQyxLQUFSLENBQWNDLEtBQTNCO0FBQUEsR0FBRCxDQUFsQztBQUVBQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNELEdBRlEsRUFFTixDQUFDTCxVQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFNLFdBQUcsRUFBQyxrQkFBVjtBQUE2QixhQUFLLEVBQUMsU0FBbkM7QUFBNkMsWUFBSSxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDLFdBQXRCO0FBQWtDLGFBQUssRUFBQyxPQUF4QztBQUFnRCxZQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0E7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUMsV0FBdEI7QUFBa0MsYUFBSyxFQUFDLE9BQXhDO0FBQWdELFlBQUksRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEEsZUFJQTtBQUFNLFdBQUcsRUFBQyxVQUFWO0FBQXFCLFlBQUksRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkEsZUFLQTtBQUFNLFdBQUcsRUFBQyxXQUFWO0FBQXNCLFlBQUksRUFBQyx3QkFBM0I7QUFBb0QsYUFBSyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMQSxlQU1BO0FBQU0sWUFBSSxFQUFDLHlCQUFYO0FBQXFDLGVBQU8sRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkEsZUFPQTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFVRSxxRUFBQyxtREFBRDtBQUNFLFdBQUssRUFBQyxtQkFEUjtBQUVFLGlCQUFXLEVBQUMsK0JBRmQ7QUFHRSxlQUFTLEVBQUVNLGdDQUhiO0FBSUUsZUFBUyxFQUFFO0FBQ1RDLFlBQUksRUFBRSxTQURHO0FBRVRDLFdBQUcsRUFBRUYsZ0NBRkk7QUFHVEcsYUFBSyxFQUFFLG1CQUhFO0FBSVRDLG1CQUFXLEVBQUUsK0JBSko7QUFLVEMsY0FBTSxFQUFFLE9BTEM7QUFNVEMsaUJBQVMsRUFBRSxtQkFORixDQU9UO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUJTO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBMkNFO0FBQUssZUFBUyxFQUFDLHNGQUFmO0FBQUEsOEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsK0JBQ0UscUVBQUMsS0FBRCxDQUFPLFNBQVAsb0JBQXFCYixLQUFLLENBQUNjLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNDRjtBQUFBLGtCQURGO0FBcURELENBNUREOztHQUFNZixHO1VBQ2VHLDJEOzs7S0FEZkgsRztBQThEUyxxRUFBQWdCLCtEQUFhLENBQUNoQixHQUFELENBQTVCIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb250YWluZXJzL0hlYWRlclwiO1xuaW1wb3J0IHsgdXNlU3RvcmVBY3Rpb25zIH0gZnJvbSBcIkAvY29yZS9zdG9yZVwiO1xuaW1wb3J0IHdpdGhQcm92aWRlcnMgZnJvbSBcIkAvaG9jcy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZVN0YXJ0ID0gdXNlU3RvcmVBY3Rpb25zKChhY3Rpb25zKSA9PiBhY3Rpb25zLnRoZW1lLnN0YXJ0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHRoZW1lU3RhcnQoKTtcbiAgfSwgW3RoZW1lU3RhcnRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjMzMzMzMzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiMzMzMzMzNcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzMzMzMzM1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgIDxEZWZhdWx0U2VvXG4gICAgICAgIHRpdGxlPVwiSGFuc2VsIERlIExhIENydXpcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkhhbnNlbCBEZSBMYSBDcnV6J3MgUG9ydGZvbGlvXCJcbiAgICAgICAgY2Fub25pY2FsPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9XG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMLFxuICAgICAgICAgIHRpdGxlOiBcIkhhbnNlbCBEZSBMYSBDcnV6XCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiSGFuc2VsIERlIExhIENydXoncyBQb3J0Zm9saW9cIixcbiAgICAgICAgICBsb2NhbGU6IFwiZW5fVVNcIixcbiAgICAgICAgICBzaXRlX25hbWU6IFwiSGFuc2VsIERlIExhIENydXpcIixcbiAgICAgICAgICAvLyBpbWFnZXM6IFtcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkwhfS9sb2dvLnBuZ2AsXG4gICAgICAgICAgLy8gICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgLy8gICAgIGhlaWdodDogNTEyLFxuICAgICAgICAgIC8vICAgICBhbHQ6IFwiTG9nb1wiLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkwhfS9sb2dvMTkyLnBuZ2AsXG4gICAgICAgICAgLy8gICAgIHdpZHRoOiAxOTIsXG4gICAgICAgICAgLy8gICAgIGhlaWdodDogMTkyLFxuICAgICAgICAgIC8vICAgICBhbHQ6IFwiTG9nbyBTbWFsbFwiLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkwhfS9sb2dvX3RyYW5zcGFyZW50LnBuZ2AsXG4gICAgICAgICAgLy8gICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgLy8gICAgIGhlaWdodDogNTEyLFxuICAgICAgICAgIC8vICAgICBhbHQ6IFwiTG9nbyBUcmFuc3BhcmVudFwiLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyBdLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgZm9udC1wb3BwaW5zIGRhcms6YmctZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleC0xIHB4LTYgbXQtMjRcIj5cbiAgICAgICAgICA8cHJvcHMuQ29tcG9uZW50IHsuLi5wcm9wcy5wYWdlUHJvcHN9PjwvcHJvcHMuQ29tcG9uZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5Gb290ZXI8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFByb3ZpZGVycyhBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})