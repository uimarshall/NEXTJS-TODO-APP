webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Tasks.js":
/*!*****************************!*\
  !*** ./components/Tasks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskItem */ "./components/TaskItem.js");
var _jsxFileName = "C:\\Users\\COC UNILAG\\Desktop\\NEXTJS-TODO-APP\\components\\Tasks.js";

 // In UI based Comp, we pass the props as an obj to the comp

var Tasks = function Tasks(_ref) {
  var tasks = _ref.tasks,
      markComplete = _ref.markComplete,
      handleDelete = _ref.handleDelete;
  return tasks.length ? tasks.map(function (task) {
    // pass each 'task' mapped as props to TaskItem
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: task.id,
      task: task,
      markComplete: markComplete,
      handleDelete: handleDelete,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "No tasks yet!");
};

/* harmony default export */ __webpack_exports__["default"] = (Tasks);

/***/ })

})
//# sourceMappingURL=index.js.3f0b45fbc02eceb6f5a1.hot-update.js.map