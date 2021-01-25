webpackHotUpdate_N_E("pages/_app",{

/***/ "./containers/Header.tsx":
/*!*******************************!*\
  !*** ./containers/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/store */ \"./core/store.ts\");\n/* harmony import */ var heroicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! heroicons-react */ \"./node_modules/heroicons-react/build/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/home/delacruz/Documents/github/portfolio/containers/Header.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var theme = Object(_core_store__WEBPACK_IMPORTED_MODULE_1__[\"useStoreState\"])(function (state) {\n    return state.theme;\n  });\n  var themeToggleMode = Object(_core_store__WEBPACK_IMPORTED_MODULE_1__[\"useStoreActions\"])(function (actions) {\n    return actions.theme.toggleMode;\n  });\n  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useTransition\"])(theme.mode === \"dark\", null, {\n    from: {\n      opacity: 0\n    },\n    enter: {\n      opacity: 1\n    },\n    leave: {\n      opacity: 0\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: \"fixed top-0 left-0 z-10 w-full p-6 shadow-md\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container flex justify-between sm:px-2 md:px-4 lg:px-8 xl:px-16\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(heroicons_react__WEBPACK_IMPORTED_MODULE_2__[\"MenuAlt1\"], {\n          size: 40\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex my-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(heroicons_react__WEBPACK_IMPORTED_MODULE_2__[\"BookmarkOutline\"], {\n          size: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"my-auto text-2xl font-semibold\",\n          children: \"Hansel De La Cruz\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"my-auto\",\n        onClick: function onClick() {\n          themeToggleMode();\n        },\n        children: transitions.map(function (_ref) {\n          var item = _ref.item,\n              props = _ref.props,\n              key = _ref.key;\n          return item ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"animated\"].span, {\n            style: props,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(heroicons_react__WEBPACK_IMPORTED_MODULE_2__[\"Moon\"], {\n              size: 40\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, _this)\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"animated\"].span, {\n            style: props,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(heroicons_react__WEBPACK_IMPORTED_MODULE_2__[\"MoonOutline\"], {\n              size: 40\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 17\n            }, _this)\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"LK7neNWNFSIM4qwEHzlOZQqJn1s=\", false, function () {\n  return [_core_store__WEBPACK_IMPORTED_MODULE_1__[\"useStoreState\"], _core_store__WEBPACK_IMPORTED_MODULE_1__[\"useStoreActions\"], react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useTransition\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9IZWFkZXIudHN4P2NlY2MiXSwibmFtZXMiOlsiSGVhZGVyIiwidGhlbWUiLCJ1c2VTdG9yZVN0YXRlIiwic3RhdGUiLCJ0aGVtZVRvZ2dsZU1vZGUiLCJ1c2VTdG9yZUFjdGlvbnMiLCJhY3Rpb25zIiwidG9nZ2xlTW9kZSIsInRyYW5zaXRpb25zIiwidXNlVHJhbnNpdGlvbiIsIm1vZGUiLCJmcm9tIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJtYXAiLCJpdGVtIiwicHJvcHMiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxLQUFLLEdBQUdDLGlFQUFhLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsS0FBakI7QUFBQSxHQUFELENBQTNCO0FBQ0EsTUFBTUcsZUFBZSxHQUFHQyxtRUFBZSxDQUFDLFVBQUNDLE9BQUQ7QUFBQSxXQUFhQSxPQUFPLENBQUNMLEtBQVIsQ0FBY00sVUFBM0I7QUFBQSxHQUFELENBQXZDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyxrRUFBYSxDQUFDUixLQUFLLENBQUNTLElBQU4sS0FBZSxNQUFoQixFQUF3QixJQUF4QixFQUE4QjtBQUM3REMsUUFBSSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRHVEO0FBRTdEQyxTQUFLLEVBQUU7QUFBRUQsYUFBTyxFQUFFO0FBQVgsS0FGc0Q7QUFHN0RFLFNBQUssRUFBRTtBQUFFRixhQUFPLEVBQUU7QUFBWDtBQUhzRCxHQUE5QixDQUFqQztBQU1BLHNCQUNFO0FBQVEsYUFBUyxFQUFDLDhDQUFsQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlFQUFmO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRSxxRUFBQyx3REFBRDtBQUFVLGNBQUksRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRSxxRUFBQywrREFBRDtBQUFpQixjQUFJLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUNnQyxHQURoQyxlQUVFO0FBQU0sbUJBQVMsRUFBQyxnQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFRRTtBQUNFLGlCQUFTLEVBQUMsU0FEWjtBQUVFLGVBQU8sRUFBRSxtQkFBTTtBQUNiUix5QkFBZTtBQUNoQixTQUpIO0FBQUEsa0JBS0dJLFdBQVcsQ0FBQ08sR0FBWixDQUFnQjtBQUFBLGNBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLGNBQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLGNBQWdCQyxHQUFoQixRQUFnQkEsR0FBaEI7QUFBQSxpQkFDZkYsSUFBSSxnQkFDRixxRUFBQyxxREFBRCxDQUFVLElBQVY7QUFBeUIsaUJBQUssRUFBRUMsS0FBaEM7QUFBQSxtQ0FDRSxxRUFBQyxvREFBRDtBQUFNLGtCQUFJLEVBQUU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBb0JDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREUsZ0JBS0YscUVBQUMscURBQUQsQ0FBVSxJQUFWO0FBQXlCLGlCQUFLLEVBQUVELEtBQWhDO0FBQUEsbUNBQ0UscUVBQUMsMkRBQUQ7QUFBYSxrQkFBSSxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFvQkMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOYTtBQUFBLFNBQWhCO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXZDRDs7R0FBTWxCLE07VUFDVUUseUQsRUFDVUcsMkQsRUFDSkksMEQ7OztLQUhoQlQsTTtBQXlDU0EscUVBQWYiLCJmaWxlIjoiLi9jb250YWluZXJzL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdG9yZUFjdGlvbnMsIHVzZVN0b3JlU3RhdGUgfSBmcm9tIFwiQC9jb3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBCb29rbWFya091dGxpbmUsIE1lbnVBbHQxLCBNb29uLCBNb29uT3V0bGluZSB9IGZyb20gXCJoZXJvaWNvbnMtcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFuaW1hdGVkLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVN0b3JlU3RhdGUoKHN0YXRlKSA9PiBzdGF0ZS50aGVtZSk7XG4gIGNvbnN0IHRoZW1lVG9nZ2xlTW9kZSA9IHVzZVN0b3JlQWN0aW9ucygoYWN0aW9ucykgPT4gYWN0aW9ucy50aGVtZS50b2dnbGVNb2RlKTtcbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKHRoZW1lLm1vZGUgPT09IFwiZGFya1wiLCBudWxsLCB7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSB9LFxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB6LTEwIHctZnVsbCBwLTYgc2hhZG93LW1kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlbiBzbTpweC0yIG1kOnB4LTQgbGc6cHgtOCB4bDpweC0xNlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNZW51QWx0MSBzaXplPXs0MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteS1hdXRvXCI+XG4gICAgICAgICAgPEJvb2ttYXJrT3V0bGluZSBzaXplPXszMH0gLz57XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXktYXV0byB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+SGFuc2VsIERlIExhIENydXo8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktYXV0b1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhlbWVUb2dnbGVNb2RlKCk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3RyYW5zaXRpb25zLm1hcCgoeyBpdGVtLCBwcm9wcywga2V5IH0pID0+XG4gICAgICAgICAgICBpdGVtID8gKFxuICAgICAgICAgICAgICA8YW5pbWF0ZWQuc3BhbiBrZXk9e2tleX0gc3R5bGU9e3Byb3BzfT5cbiAgICAgICAgICAgICAgICA8TW9vbiBzaXplPXs0MH0gLz5cbiAgICAgICAgICAgICAgPC9hbmltYXRlZC5zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGFuaW1hdGVkLnNwYW4ga2V5PXtrZXl9IHN0eWxlPXtwcm9wc30+XG4gICAgICAgICAgICAgICAgPE1vb25PdXRsaW5lIHNpemU9ezQwfSAvPlxuICAgICAgICAgICAgICA8L2FuaW1hdGVkLnNwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/Header.tsx\n");

/***/ })

})