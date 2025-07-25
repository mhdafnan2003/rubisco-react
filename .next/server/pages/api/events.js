"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/events";
exports.ids = ["pages/api/events"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/events/index.js":
/*!***********************************!*\
  !*** ./pages/api/events/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__]);\nformidable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const form = (0,formidable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            multiples: false,\n            uploadDir: \"./public/uploads\",\n            keepExtensions: true\n        });\n        form.parse(req, async (err, fields, files)=>{\n            if (err) {\n                console.error(\"Form parse error:\", err);\n                return res.status(500).json({\n                    message: \"Error parsing form data\"\n                });\n            }\n            // Optional: Log fields and files\n            console.log(\"Fields:\", fields);\n            console.log(\"Files:\", files);\n            const imagePath = files.image?.newFilename ? `/uploads/${files.image.newFilename}` : \"\";\n            const newEvent = {\n                title: fields.title,\n                date: fields.date,\n                description: fields.description,\n                price: fields.price,\n                image: imagePath\n            };\n            // You can connect this to a database or a file system\n            // For now, we just return the new event\n            return res.status(201).json({\n                message: \"Event created\",\n                event: newEvent\n            });\n        });\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDaEI7QUFDSTtBQUVqQixNQUFNRyxTQUFTO0lBQ3BCQyxLQUFLO1FBQ0hDLFlBQVksS0FBSztJQUNuQjtBQUNGLEVBQUU7QUFFRixNQUFNQyxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDbEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsT0FBT1Ysc0RBQVVBLENBQUM7WUFBRVcsV0FBVyxLQUFLO1lBQUVDLFdBQVc7WUFBb0JDLGdCQUFnQixJQUFJO1FBQUM7UUFFaEdILEtBQUtJLEtBQUssQ0FBQ1AsS0FBSyxPQUFPUSxLQUFLQyxRQUFRQyxRQUFVO1lBQzVDLElBQUlGLEtBQUs7Z0JBQ1BHLFFBQVFDLEtBQUssQ0FBQyxxQkFBcUJKO2dCQUNuQyxPQUFPUCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUEwQjtZQUNuRSxDQUFDO1lBRUQsaUNBQWlDO1lBQ2pDSixRQUFRSyxHQUFHLENBQUMsV0FBV1A7WUFDdkJFLFFBQVFLLEdBQUcsQ0FBQyxVQUFVTjtZQUV0QixNQUFNTyxZQUFZUCxNQUFNUSxLQUFLLEVBQUVDLGNBQzNCLENBQUMsU0FBUyxFQUFFVCxNQUFNUSxLQUFLLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEdBQ3JDLEVBQUU7WUFFTixNQUFNQyxXQUFXO2dCQUNmQyxPQUFPWixPQUFPWSxLQUFLO2dCQUNuQkMsTUFBTWIsT0FBT2EsSUFBSTtnQkFDakJDLGFBQWFkLE9BQU9jLFdBQVc7Z0JBQy9CQyxPQUFPZixPQUFPZSxLQUFLO2dCQUNuQk4sT0FBT0Q7WUFDVDtZQUVBLHNEQUFzRDtZQUN0RCx3Q0FBd0M7WUFDeEMsT0FBT2hCLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQWlCVSxPQUFPTDtZQUFTO1FBQzFFO0lBQ0YsT0FBTztRQUNMbkIsSUFBSXlCLFNBQVMsQ0FBQyxTQUFTO1lBQUM7U0FBTztRQUMvQnpCLElBQUlZLE1BQU0sQ0FBQyxLQUFLYyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUzQixJQUFJRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hELENBQUM7QUFDSDtBQUVBLGlFQUFlSCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ293aWxkcy8uL3BhZ2VzL2FwaS9ldmVudHMvaW5kZXguanM/MGM1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9ybWlkYWJsZSBmcm9tIFwiZm9ybWlkYWJsZVwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IGZvcm0gPSBmb3JtaWRhYmxlKHsgbXVsdGlwbGVzOiBmYWxzZSwgdXBsb2FkRGlyOiBcIi4vcHVibGljL3VwbG9hZHNcIiwga2VlcEV4dGVuc2lvbnM6IHRydWUgfSk7XG5cbiAgICBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRm9ybSBwYXJzZSBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJFcnJvciBwYXJzaW5nIGZvcm0gZGF0YVwiIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBPcHRpb25hbDogTG9nIGZpZWxkcyBhbmQgZmlsZXNcbiAgICAgIGNvbnNvbGUubG9nKFwiRmllbGRzOlwiLCBmaWVsZHMpO1xuICAgICAgY29uc29sZS5sb2coXCJGaWxlczpcIiwgZmlsZXMpO1xuXG4gICAgICBjb25zdCBpbWFnZVBhdGggPSBmaWxlcy5pbWFnZT8ubmV3RmlsZW5hbWVcbiAgICAgICAgPyBgL3VwbG9hZHMvJHtmaWxlcy5pbWFnZS5uZXdGaWxlbmFtZX1gXG4gICAgICAgIDogXCJcIjtcblxuICAgICAgY29uc3QgbmV3RXZlbnQgPSB7XG4gICAgICAgIHRpdGxlOiBmaWVsZHMudGl0bGUsXG4gICAgICAgIGRhdGU6IGZpZWxkcy5kYXRlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZmllbGRzLmRlc2NyaXB0aW9uLFxuICAgICAgICBwcmljZTogZmllbGRzLnByaWNlLFxuICAgICAgICBpbWFnZTogaW1hZ2VQYXRoLFxuICAgICAgfTtcblxuICAgICAgLy8gWW91IGNhbiBjb25uZWN0IHRoaXMgdG8gYSBkYXRhYmFzZSBvciBhIGZpbGUgc3lzdGVtXG4gICAgICAvLyBGb3Igbm93LCB3ZSBqdXN0IHJldHVybiB0aGUgbmV3IGV2ZW50XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkV2ZW50IGNyZWF0ZWRcIiwgZXZlbnQ6IG5ld0V2ZW50IH0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJQT1NUXCJdKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImZvcm1pZGFibGUiLCJmcyIsInBhdGgiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImZvcm0iLCJtdWx0aXBsZXMiLCJ1cGxvYWREaXIiLCJrZWVwRXh0ZW5zaW9ucyIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImxvZyIsImltYWdlUGF0aCIsImltYWdlIiwibmV3RmlsZW5hbWUiLCJuZXdFdmVudCIsInRpdGxlIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJldmVudCIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/events/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events/index.js"));
module.exports = __webpack_exports__;

})();