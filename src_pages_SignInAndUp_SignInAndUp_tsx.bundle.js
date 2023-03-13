"use strict";
(self["webpackChunkcurriculum_vitae"] = self["webpackChunkcurriculum_vitae"] || []).push([["src_pages_SignInAndUp_SignInAndUp_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/SignInAndUp/SignInAndUp.module.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/SignInAndUp/SignInAndUp.module.scss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mBsCr5nsUwkgi601BDWR {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.mBsCr5nsUwkgi601BDWR a {\n  position: relative;\n  display: inline-block;\n  max-width: 360px;\n  min-width: 150px;\n  padding: 12px 16px;\n  text-align: center;\n  cursor: pointer;\n  transition: border-bottom 2s;\n}\n.mBsCr5nsUwkgi601BDWR a .ryEYQJi0kO8j4TXb8YDw {\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #fff;\n}\n.mBsCr5nsUwkgi601BDWR a:after {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 2px;\n  background-color: rgb(198, 48, 49);\n  content: \"\";\n  transition: width 0.3s ease-out;\n}\n.mBsCr5nsUwkgi601BDWR a:first-child:after {\n  right: 0;\n}\n.mBsCr5nsUwkgi601BDWR a:last-child:after {\n  left: 0;\n}\n.mBsCr5nsUwkgi601BDWR .nMOXS_sIbCl_pIt7RL3D .ryEYQJi0kO8j4TXb8YDw {\n  color: rgb(198, 48, 49);\n}\n.mBsCr5nsUwkgi601BDWR .nMOXS_sIbCl_pIt7RL3D::after {\n  width: 100% !important;\n}\n\n.c69A8ZSgEfRDncFvjs3C {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: calc(100vh - 64px);\n  margin-top: 64px;\n}", "",{"version":3,"sources":["webpack://./src/pages/SignInAndUp/SignInAndUp.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,uBAAA;AACF;AACE;EACE,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,4BAAA;AACJ;AACI;EACE,gBAAA;EACA,yBAAA;EACA,WAAA;AACN;AAEI;EACE,cAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,kCAAA;EACA,WAAA;EACA,+BAAA;AAAN;AAIM;EACE,QAAA;AAFR;AAOM;EACE,OAAA;AALR;AAWI;EACE,uBAAA;AATN;AAYI;EACE,sBAAA;AAVN;;AAeA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,0BAAA;EACA,gBAAA;AAZF","sourcesContent":[".Header {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n\r\n  a {\r\n    position: relative;\r\n    display: inline-block;\r\n    max-width: 360px;\r\n    min-width: 150px;\r\n    padding: 12px 16px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: border-bottom 2s;\r\n\r\n    .HeaderBtn {\r\n      font-weight: 600;\r\n      text-transform: uppercase;\r\n      color: #fff;\r\n    }\r\n\r\n    &:after {\r\n      display: block;\r\n      position: absolute;\r\n      bottom: 0;\r\n      width: 0;\r\n      height: 2px;\r\n      background-color: rgb(198, 48, 49);\r\n      content: \"\";\r\n      transition: width 0.3s ease-out;\r\n    }\r\n\r\n    &:first-child {\r\n      &:after {\r\n        right: 0;\r\n      }\r\n    }\r\n\r\n    &:last-child {\r\n      &:after {\r\n        left: 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  .Active {\r\n    .HeaderBtn {\r\n      color: rgb(198, 48, 49);\r\n    }\r\n\r\n    &::after {\r\n      width: 100% !important;\r\n    }\r\n  }\r\n}\r\n\r\n.Content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: calc(100vh - 64px);\r\n  margin-top: 64px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Header": "mBsCr5nsUwkgi601BDWR",
	"HeaderBtn": "ryEYQJi0kO8j4TXb8YDw",
	"Active": "nMOXS_sIbCl_pIt7RL3D",
	"Content": "c69A8ZSgEfRDncFvjs3C"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/SignInAndUp/SignInAndUp.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/SignInAndUp/SignInAndUp.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SignInAndUp.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/SignInAndUp/SignInAndUp.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/SignInAndUp/SignInAndUp.tsx":
/*!***********************************************!*\
  !*** ./src/pages/SignInAndUp/SignInAndUp.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var myComponents_LanguageIcon_LanguageIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! myComponents/LanguageIcon/LanguageIcon */ "./src/components/LanguageIcon/LanguageIcon.tsx");
/* harmony import */ var uiComponents_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uiComponents/Header/Header */ "./src/components/UI/Header/Header.tsx");
/* harmony import */ var constants_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/paths */ "./src/constants/paths.ts");
/* harmony import */ var _SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignInAndUp.module.scss */ "./src/pages/SignInAndUp/SignInAndUp.module.scss");
/* harmony import */ var i18n_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18n/i18n */ "./src/i18n/i18n.ts");








var SignInAndUp = function () {
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(uiComponents_Header_Header__WEBPACK_IMPORTED_MODULE_3__.Header, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].Header },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, { to: constants_paths__WEBPACK_IMPORTED_MODULE_4__.PATH.login, className: function (_a) {
                        var isActive = _a.isActive;
                        return (isActive ? _SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].Active : '');
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: _SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].HeaderBtn }, t('TitleText.login'))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, { to: constants_paths__WEBPACK_IMPORTED_MODULE_4__.PATH.signUp, className: function (_a) {
                        var isActive = _a.isActive;
                        return (isActive ? _SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].Active : '');
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: _SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].HeaderBtn }, t('TitleText.signUp')))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(myComponents_LanguageIcon_LanguageIcon__WEBPACK_IMPORTED_MODULE_2__.LanguageIcon, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _SignInAndUp_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].Content },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Outlet, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInAndUp);


/***/ })

}]);
//# sourceMappingURL=src_pages_SignInAndUp_SignInAndUp_tsx.bundle.js.map