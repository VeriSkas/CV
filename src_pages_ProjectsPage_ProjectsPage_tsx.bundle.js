"use strict";
(self["webpackChunkcurriculum_vitae"] = self["webpackChunkcurriculum_vitae"] || []).push([["src_pages_ProjectsPage_ProjectsPage_tsx"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Breadcrumbs/Breadcrumbs.module.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Breadcrumbs/Breadcrumbs.module.scss ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cKt6KKTQyuiBRa9TAllK {\n  display: flex;\n  margin: 5px 0;\n  height: 20px;\n}\n.cKt6KKTQyuiBRa9TAllK a {\n  display: flex;\n  align-items: flex-end;\n  max-width: 150px;\n  height: 20px;\n  cursor: pointer;\n  margin: 0 5px 0 0;\n}\n.cKt6KKTQyuiBRa9TAllK a .lHLtLx4H2IdRnUn1_BRY {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cKt6KKTQyuiBRa9TAllK a .c7fMv65qwg20ZTz6nhbD {\n  min-width: 20px;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px 0 0;\n}\n.cKt6KKTQyuiBRa9TAllK a .c7fMv65qwg20ZTz6nhbD path {\n  color: rgba(0, 0, 0, 0.6);\n}\n.cKt6KKTQyuiBRa9TAllK a.fLXfPifn6D5L5Gjbsad_ {\n  color: rgb(46, 46, 46);\n  cursor: default;\n}\n.cKt6KKTQyuiBRa9TAllK a.fLXfPifn6D5L5Gjbsad_.vlKrqUbrFIKAdjWHW45A .lHLtLx4H2IdRnUn1_BRY {\n  color: rgb(198, 48, 49);\n}\n.cKt6KKTQyuiBRa9TAllK a.fLXfPifn6D5L5Gjbsad_ .c7fMv65qwg20ZTz6nhbD path {\n  color: rgb(46, 46, 46);\n}\n.cKt6KKTQyuiBRa9TAllK a.fLXfPifn6D5L5Gjbsad_ .c7fMv65qwg20ZTz6nhbD.vlKrqUbrFIKAdjWHW45A path {\n  color: rgb(198, 48, 49);\n}", "",{"version":3,"sources":["webpack://./src/components/UI/Breadcrumbs/Breadcrumbs.module.scss","webpack://./src/constants/styles/sizes.scss","webpack://./src/constants/styles/colors.scss"],"names":[],"mappings":"AAGA;EACE,aAAA;EACA,aAAA;EACA,YCCkB;ADHpB;AAIE;EACE,aAAA;EACA,qBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AAFJ;AAII;EACE,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AAFN;AAKI;EACE,eAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAHN;AAKM;EACE,yBAAA;AAHR;AAOI;EACE,sBE/BM;EFgCN,eAAA;AALN;AAQQ;EACE,uBEzCA;AFmCV;AAWQ;EACE,sBE1CE;AFiCZ;AAaU;EACE,uBEpDF;AFyCV","sourcesContent":["@import 'styles/colors.scss';\r\n@import 'styles/sizes.scss';\r\n\r\n.Breadcrumbs {\r\n  display: flex;\r\n  margin: 5px 0;\r\n  height: $breadcrumbsHeight;\r\n\r\n  a {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    max-width: 150px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    margin: 0 5px 0 0;\r\n\r\n    .LinkText {\r\n      color: #00000099;\r\n      font-size: 16px;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      white-space: nowrap;\r\n    }\r\n\r\n    .Icon {\r\n      min-width: 20px;\r\n      width: 20px;\r\n      height: 20px;\r\n      margin: 0 5px 0 0;\r\n\r\n      path {\r\n        color: #00000099;\r\n      }\r\n    }\r\n\r\n    &.Active {\r\n      color: $mainBlack;\r\n      cursor: default;\r\n\r\n      &.Red {\r\n        .LinkText {\r\n          color: $mainRed;\r\n        }\r\n      }\r\n\r\n      .Icon {\r\n        path {\r\n          color: $mainBlack;\r\n        }\r\n\r\n        &.Red {\r\n          path {\r\n            color: $mainRed;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","$maxContentWidth: 1536px;\r\n$minContentHeight: 800px;\r\n$maxSidebarWidth: 300px;\r\n$maxHeaderHeight: 64px;\r\n$containerPaddingHeight: 15px;\r\n$containerPaddingWidth: 20px;\r\n$tablePaddingHeight: 15px;\r\n$breadcrumbsHeight: 20px;\r\n","$mainRed: rgb(198, 48, 49);\r\n$redActiveBtn: rgba(198, 48, 48, 0.3);\r\n$redHoverBtn: rgb(138, 33, 34);\r\n$redHoverBackground: rgb(247 182 183 / 64%);\r\n$transparentActiveBtn: rgba(198, 48, 48, 0.1);\r\n$mainBlack: rgb(46, 46, 46);\r\n$contentBackground: #F5F5F7;\r\n$textColor: #000000DE;\r\n$borderColor: rgb(224, 224, 224);\r\n$logoBackground: #bdbdbd;\r\n$inputReadOnlyBackground: rgb(224, 224, 224);\r\n$NotificationBackground: #f7d6d6;\r\n$OptionHoverBackground: rgba(189, 189, 189, 0.3137254902);\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Breadcrumbs": "cKt6KKTQyuiBRa9TAllK",
	"LinkText": "lHLtLx4H2IdRnUn1_BRY",
	"Icon": "c7fMv65qwg20ZTz6nhbD",
	"Active": "fLXfPifn6D5L5Gjbsad_",
	"Red": "vlKrqUbrFIKAdjWHW45A"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UI/Breadcrumbs/Breadcrumbs.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/UI/Breadcrumbs/Breadcrumbs.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Breadcrumbs.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Breadcrumbs/Breadcrumbs.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/UI/Breadcrumbs/Breadcrumbs.tsx":
/*!*******************************************************!*\
  !*** ./src/components/UI/Breadcrumbs/Breadcrumbs.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Breadcrumbs": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/constants */ "./src/constants/constants.tsx");
/* harmony import */ var constants_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/paths */ "./src/constants/paths.ts");
/* harmony import */ var i18n_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Breadcrumbs.module.scss */ "./src/components/UI/Breadcrumbs/Breadcrumbs.module.scss");









var Breadcrumbs = function (_a) {
    var paramName = _a.paramName;
    var param = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)();
    var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation)();
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), paramValue = _b[0], setParamValue = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), pathValue = _c[0], setPathValue = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var paramKey = Object.keys(param)[0];
        paramKey ? setParamValue(paramKey) : setParamValue('');
    }, [param]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var path = location.pathname.split('/')[1];
        if (path) {
            setPathValue(path);
        }
    }, [location]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Breadcrumbs },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons__WEBPACK_IMPORTED_MODULE_2__.IconContext.Provider, { value: { className: _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Icon } }, constants_constants__WEBPACK_IMPORTED_MODULE_3__.links.home.icon),
            t(constants_constants__WEBPACK_IMPORTED_MODULE_3__.links.home.label)),
        pathValue && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, { end: true, to: constants_constants__WEBPACK_IMPORTED_MODULE_3__.links[pathValue].to, className: function (_a) {
                var isActive = _a.isActive;
                return (isActive ? _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Active : undefined);
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons__WEBPACK_IMPORTED_MODULE_2__.IconContext.Provider, { value: { className: _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Icon } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdOutlineKeyboardArrowRight, null)),
            t(constants_constants__WEBPACK_IMPORTED_MODULE_3__.links[pathValue].label)),
        paramValue && pathValue && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, { to: location.pathname, className: function (_a) {
                var isActive = _a.isActive;
                return isActive ? "".concat(_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Active, " ").concat(_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Red) : undefined;
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons__WEBPACK_IMPORTED_MODULE_2__.IconContext.Provider, { value: { className: _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Icon } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdOutlineKeyboardArrowRight, null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons__WEBPACK_IMPORTED_MODULE_2__.IconContext.Provider, { value: { className: "".concat(_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Icon, " ").concat(_Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].Red) } }, constants_constants__WEBPACK_IMPORTED_MODULE_3__.links[constants_paths__WEBPACK_IMPORTED_MODULE_4__.PARAMS[pathValue]].icon),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: _Breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].LinkText }, paramName !== null && paramName !== void 0 ? paramName : t(constants_constants__WEBPACK_IMPORTED_MODULE_3__.links[constants_paths__WEBPACK_IMPORTED_MODULE_4__.PARAMS[pathValue]].label)))));
};


/***/ }),

/***/ "./src/pages/ProjectsPage/ProjectsPage.tsx":
/*!*************************************************!*\
  !*** ./src/pages/ProjectsPage/ProjectsPage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useReactiveVar.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var queries_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! queries/projects */ "./src/apollo/queries/projects.tsx");
/* harmony import */ var apollo_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo/state */ "./src/apollo/state.tsx");
/* harmony import */ var uiComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uiComponents/Breadcrumbs/Breadcrumbs */ "./src/components/UI/Breadcrumbs/Breadcrumbs.tsx");






var ProjectsPage = function () {
    var _a, _b;
    var activeProjectID = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useReactiveVar)(apollo_state__WEBPACK_IMPORTED_MODULE_2__.ACTIVE_PROJECT_ID);
    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(queries_projects__WEBPACK_IMPORTED_MODULE_1__.GET_PROJECT, {
        variables: {
            id: activeProjectID,
        },
    }).data;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(uiComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__.Breadcrumbs, { paramName: (_b = (_a = data === null || data === void 0 ? void 0 : data.project) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '' }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Outlet, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsPage);


/***/ })

}]);
//# sourceMappingURL=src_pages_ProjectsPage_ProjectsPage_tsx.bundle.js.map