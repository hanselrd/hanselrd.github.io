webpackHotUpdate_N_E("pages/_app",{

/***/ "./models/theme.ts":
/*!*************************!*\
  !*** ./models/theme.ts ***!
  \*************************/
/*! exports provided: themeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeModel\", function() { return themeModel; });\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-peasy */ \"./node_modules/easy-peasy/dist/easy-peasy.js\");\n/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_0__);\n\nvar themeModel = {\n  start: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"thunk\"])(function (actions, payload, helpers) {\n    if (helpers.getState().mode === \"dark\" || !helpers.getState().mode && true && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n      actions.changeMode(\"dark\");\n    } else {\n      actions.changeMode(\"light\");\n    }\n  }),\n  changeMode: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"thunk\"])(function (actions, payload) {\n    if (payload === \"dark\") {\n      var _document$querySelect;\n\n      (_document$querySelect = document.querySelector(\"html\")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.classList.add(\"dark\");\n    } else if (payload === \"light\") {\n      var _document$querySelect2;\n\n      (_document$querySelect2 = document.querySelector(\"html\")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.remove(\"dark\");\n    }\n\n    actions.changeModeInternal(payload);\n  }),\n  toggleMode: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"thunk\"])(function (actions, payload, helpers) {\n    actions.changeMode(helpers.getState().mode === \"dark\" ? \"light\" : \"dark\");\n  }),\n  changeModeInternal: Object(easy_peasy__WEBPACK_IMPORTED_MODULE_0__[\"action\"])(function (state, payload) {\n    state.mode = payload;\n  })\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWxzL3RoZW1lLnRzP2Y4NmYiXSwibmFtZXMiOlsidGhlbWVNb2RlbCIsInN0YXJ0IiwidGh1bmsiLCJhY3Rpb25zIiwicGF5bG9hZCIsImhlbHBlcnMiLCJnZXRTdGF0ZSIsIm1vZGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNoYW5nZU1vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjaGFuZ2VNb2RlSW50ZXJuYWwiLCJ0b2dnbGVNb2RlIiwiYWN0aW9uIiwic3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVTyxJQUFNQSxVQUFzQixHQUFHO0FBQ3BDQyxPQUFLLEVBQUVDLHdEQUFLLENBQUMsVUFBQ0MsT0FBRCxFQUFVQyxPQUFWLEVBQW1CQyxPQUFuQixFQUErQjtBQUMxQyxRQUNFQSxPQUFPLENBQUNDLFFBQVIsR0FBbUJDLElBQW5CLEtBQTRCLE1BQTVCLElBQ0MsQ0FBQ0YsT0FBTyxDQUFDQyxRQUFSLEdBQW1CQyxJQUFwQixZQUVDQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsOEJBQWxCLEVBQWtEQyxPQUp0RCxFQUtFO0FBQ0FQLGFBQU8sQ0FBQ1EsVUFBUixDQUFtQixNQUFuQjtBQUNELEtBUEQsTUFPTztBQUNMUixhQUFPLENBQUNRLFVBQVIsQ0FBbUIsT0FBbkI7QUFDRDtBQUNGLEdBWFcsQ0FEd0I7QUFhcENBLFlBQVUsRUFBRVQsd0RBQUssQ0FBQyxVQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBc0I7QUFDdEMsUUFBSUEsT0FBTyxLQUFLLE1BQWhCLEVBQXdCO0FBQUE7O0FBQ3RCLCtCQUFBUSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsaUZBQWdDQyxTQUFoQyxDQUEwQ0MsR0FBMUMsQ0FBOEMsTUFBOUM7QUFDRCxLQUZELE1BRU8sSUFBSVgsT0FBTyxLQUFLLE9BQWhCLEVBQXlCO0FBQUE7O0FBQzlCLGdDQUFBUSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsbUZBQWdDQyxTQUFoQyxDQUEwQ0UsTUFBMUMsQ0FBaUQsTUFBakQ7QUFDRDs7QUFFRGIsV0FBTyxDQUFDYyxrQkFBUixDQUEyQmIsT0FBM0I7QUFDRCxHQVJnQixDQWJtQjtBQXNCcENjLFlBQVUsRUFBRWhCLHdEQUFLLENBQUMsVUFBQ0MsT0FBRCxFQUFVQyxPQUFWLEVBQW1CQyxPQUFuQixFQUErQjtBQUMvQ0YsV0FBTyxDQUFDUSxVQUFSLENBQW1CTixPQUFPLENBQUNDLFFBQVIsR0FBbUJDLElBQW5CLEtBQTRCLE1BQTVCLEdBQXFDLE9BQXJDLEdBQStDLE1BQWxFO0FBQ0QsR0FGZ0IsQ0F0Qm1CO0FBeUJwQ1Usb0JBQWtCLEVBQUVFLHlEQUFNLENBQUMsVUFBQ0MsS0FBRCxFQUFRaEIsT0FBUixFQUFvQjtBQUM3Q2dCLFNBQUssQ0FBQ2IsSUFBTixHQUFhSCxPQUFiO0FBQ0QsR0FGeUI7QUF6QlUsQ0FBL0IiLCJmaWxlIjoiLi9tb2RlbHMvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIFRodW5rLCBhY3Rpb24sIHRodW5rIH0gZnJvbSBcImVhc3ktcGVhc3lcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZU1vZGVsIHtcbiAgbW9kZT86IFwibGlnaHRcIiB8IFwiZGFya1wiO1xuICBzdGFydDogVGh1bms8VGhlbWVNb2RlbD47XG4gIGNoYW5nZU1vZGU6IFRodW5rPFRoZW1lTW9kZWwsIFRoZW1lTW9kZWxbXCJtb2RlXCJdPjtcbiAgdG9nZ2xlTW9kZTogVGh1bms8VGhlbWVNb2RlbD47XG4gIGNoYW5nZU1vZGVJbnRlcm5hbDogQWN0aW9uPFRoZW1lTW9kZWwsIFRoZW1lTW9kZWxbXCJtb2RlXCJdPjtcbn1cblxuZXhwb3J0IGNvbnN0IHRoZW1lTW9kZWw6IFRoZW1lTW9kZWwgPSB7XG4gIHN0YXJ0OiB0aHVuaygoYWN0aW9ucywgcGF5bG9hZCwgaGVscGVycykgPT4ge1xuICAgIGlmIChcbiAgICAgIGhlbHBlcnMuZ2V0U3RhdGUoKS5tb2RlID09PSBcImRhcmtcIiB8fFxuICAgICAgKCFoZWxwZXJzLmdldFN0YXRlKCkubW9kZSAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKVxuICAgICkge1xuICAgICAgYWN0aW9ucy5jaGFuZ2VNb2RlKFwiZGFya1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9ucy5jaGFuZ2VNb2RlKFwibGlnaHRcIik7XG4gICAgfVxuICB9KSxcbiAgY2hhbmdlTW9kZTogdGh1bmsoKGFjdGlvbnMsIHBheWxvYWQpID0+IHtcbiAgICBpZiAocGF5bG9hZCA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpPy5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICB9IGVsc2UgaWYgKHBheWxvYWQgPT09IFwibGlnaHRcIikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik/LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgIH1cblxuICAgIGFjdGlvbnMuY2hhbmdlTW9kZUludGVybmFsKHBheWxvYWQpO1xuICB9KSxcbiAgdG9nZ2xlTW9kZTogdGh1bmsoKGFjdGlvbnMsIHBheWxvYWQsIGhlbHBlcnMpID0+IHtcbiAgICBhY3Rpb25zLmNoYW5nZU1vZGUoaGVscGVycy5nZXRTdGF0ZSgpLm1vZGUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCIpO1xuICB9KSxcbiAgY2hhbmdlTW9kZUludGVybmFsOiBhY3Rpb24oKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gICAgc3RhdGUubW9kZSA9IHBheWxvYWQ7XG4gIH0pLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/theme.ts\n");

/***/ })

})