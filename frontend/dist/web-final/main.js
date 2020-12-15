(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/54B":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-header/admin-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminHeaderComponent {
    constructor() {
        this.isHome = document.location.pathname.includes('inicio');
        this.isUsers = document.location.pathname.includes('usuarios');
        this.isPosts = document.location.pathname.includes('posts');
    }
    ngOnInit() {
    }
}
AdminHeaderComponent.ɵfac = function AdminHeaderComponent_Factory(t) { return new (t || AdminHeaderComponent)(); };
AdminHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHeaderComponent, selectors: [["app-admin-header"]], decls: 17, vars: 6, consts: [["id", "left-side"], ["src", "./../../../assets/images/blog_logo.png", "alt", "Logomarca do Tech News"], ["href", "/admin/inicio"], ["href", "/admin/usuarios"], ["href", "/admin/posts"], ["id", "right-side"], ["routerLink", "/", "type", "submit", 1, "btn"]], template: function AdminHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Postagens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isPosts);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["header[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-left: 1%;\r\n    margin-right: 1%;\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n\r\n\r\n#left-side[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 10rem;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n        padding-inline-start: 2rem;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        list-style: none;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type){\r\n        margin-right: 1.5rem;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        margin-right: 1rem;\r\n        text-decoration: none;\r\n        color: #000000;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        font-weight: bold;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        border-bottom: 3px solid #000000;\r\n    }\r\n\r\n\r\n\r\n#right-side[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n#right-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        color: #ffffff;\r\n        background-color: #000000;\r\n        border: 3px solid #000000;\r\n        padding-left: 1.5rem;\r\n        padding-right: 1.5rem;\r\n        transition: all 0.375s ease-in-out;\r\n    }\r\n\r\n#right-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n        background-color: #292929;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQSxjQUFjOztBQUNkO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0k7UUFDSSxZQUFZO0lBQ2hCOztBQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7QUFDQTtRQUNJLGdCQUFnQjtRQUNoQiwwQkFBMEI7SUFDOUI7O0FBQ0E7UUFDSSxxQkFBcUI7UUFDckIsZ0JBQWdCO0lBQ3BCOztBQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCOztBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixjQUFjO0lBQ2xCOztBQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdDQUFnQztJQUNwQzs7QUFFSixlQUFlOztBQUNmO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsa0NBQWtDO0lBQ3RDOztBQUNBO1FBQ0kseUJBQXlCO0lBQzdCIiwiZmlsZSI6ImFkbWluLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi8qIExlZnQgc2lkZSAqL1xyXG4jbGVmdC1zaWRle1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiAgICAjbGVmdC1zaWRlIGltZ3tcclxuICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICB9XHJcbiAgICAjbGVmdC1zaWRlIG5hdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjbGVmdC1zaWRlIHVse1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDJyZW07XHJcbiAgICB9XHJcbiAgICAjbGVmdC1zaWRlIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgI2xlZnQtc2lkZSBsaTpub3QoOmxhc3Qtb2YtdHlwZSl7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAjbGVmdC1zaWRlIGF7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgICNsZWZ0LXNpZGUgYTpob3ZlcntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICNsZWZ0LXNpZGUgYS5hY3RpdmV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4vKiBSaWdodCBzaWRlICovXHJcbiNyaWdodC1zaWRle1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4gICAgI3JpZ2h0LXNpZGUgYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzc1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgICNyaWdodC1zaWRlIGJ1dHRvbjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgfVxyXG5cclxuIl19 */", "@media (max-width: 1000px){\r\n    #left-side[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n    }\r\n    #right-side[_ngcontent-%COMP%]{\r\n        width: 25%;\r\n    }\r\n}\r\n\r\n@media (max-width: 680px){\r\n    header[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        width: 100%;\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n        margin-top: 2%;\r\n    }\r\n    #left-side[_ngcontent-%COMP%], #right-side[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n    #left-side[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n    #left-side[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n        margin-top: 1.5rem;\r\n        margin-bottom: 1.5rem;\r\n    }\r\n    #left-side[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n        padding-inline-start: 0;\r\n    }\r\n    #left-side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-of-type{\r\n        margin-right: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWhlYWRlci5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxjQUFjO1FBQ2QsZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7UUFDWCx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImFkbWluLWhlYWRlci5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAjbGVmdC1zaWRle1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcbiAgICAjcmlnaHQtc2lkZXtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgfVxyXG4gICAgI2xlZnQtc2lkZSwgI3JpZ2h0LXNpZGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjbGVmdC1zaWRle1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjbGVmdC1zaWRlIG5hdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgI2xlZnQtc2lkZSB1bHtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgIH1cclxuICAgICNsZWZ0LXNpZGUgYTpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-header',
                templateUrl: './admin-header.component.html',
                styleUrls: ['./admin-header.component.css', './admin-header.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\55859\Documents\UNIFOR\2020.2\Desenvolvimento Web\web-final\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function HeaderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "In\u00EDcio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Assuntos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sobre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function HeaderComponent_ng_container_1_Template_form_submit_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_1_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cadastre-se");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.isHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.isTopics);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.isAbout);
} }
function HeaderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "In\u00EDcio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Assuntos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sobre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function HeaderComponent_ng_template_2_Template_form_submit_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_2_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Meu perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Escrever um post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Configura\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_2_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sair");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.isHome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.isTopics);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.isAbout);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://ui-avatars.com/api/?name=$", ctx_r2.encode(ctx_r2.user.name), "&background=random&rounded=true", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.user.name);
} }
class HeaderComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this.isHome = document.location.pathname == '/';
        this.isAbout = document.location.pathname.includes('sobre');
        this.isTopics = document.location.pathname.includes('assunto');
        this.loggedIn = false;
        this._backendService.getUser()
            .subscribe(data => {
            console.log(data);
            this.user = data;
            this.loggedIn = true;
        }, error => console.log(error));
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this._router.navigate(['/']);
    }
    submitForm() {
        let query = document.getElementById('searchInput').value;
        query = this.slugify(query);
        this._router.navigate(['/busca', query]).then(() => window.location.reload());
    }
    encode(str) {
        return encodeURIComponent(str);
    }
    slugify(str) {
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();
        var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        return str;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["id", "left-side"], ["src", "./../../../assets/images/blog_logo.png", "alt", "Logomarca do Tech News"], ["href", "/"], ["href", "/assuntos"], ["href", "/sobre"], ["id", "right-side"], [3, "submit"], ["id", "searchInput", "type", "search", "placeholder", "Buscar", "aria-label", "Buscar", 1, "form-control"], [2, "cursor", "pointer", 3, "click"], ["src", "./../../../assets/icons/lupa.svg", "alt", "\u00CDcone de lupa"], ["routerLink", "/login", "id", "login-btn", "type", "submit", 1, "btn"], ["routerLink", "/cadastro", "id", "register-btn", "type", "submit", 1, "btn"], ["routerLink", "/", "src", "./../../../assets/images/blog_logo.png", "alt", "Logomarca do Tech News"], ["routerLink", "/"], ["routerLink", "/assuntos"], ["routerLink", "/sobre"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "width", "50", "alt", "\u00CDcone com as iniciais do nome do usu\u00E1rio", 1, "dropdown-toggle", 3, "src"], [1, "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/perfil", 1, "dropdown-item", "mb-0"], [1, "dropdown-divider"], ["routerLink", "/perfil", 1, "dropdown-item"], ["routerLink", "/escrever_post", 1, "dropdown-item"], ["routerLink", "/editar_perfil", 1, "dropdown-item"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_1_Template, 24, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ng_template_2_Template, 33, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["header[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-left: 1%;\r\n    margin-right: 1%;\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n\r\n\r\n#left-side[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 10rem;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n        padding-inline-start: 2rem;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        list-style: none;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type){\r\n        margin-right: 1.5rem;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        margin-right: 1rem;\r\n        text-decoration: none;\r\n        color: #000000;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        font-weight: bold;\r\n    }\r\n\r\n#left-side[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        border-bottom: 3px solid #000000;\r\n    }\r\n\r\n\r\n\r\n#right-side[_ngcontent-%COMP%]{\r\n    width: 52%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n#right-side[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: center;\r\n        border: 3px solid #000000;\r\n        margin-right: 1rem;\r\n        border-radius: 10px;\r\n    }\r\n\r\n#right-side[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        padding-left: 3%;\r\n        margin-right: 0.5rem;\r\n        height: 2.5rem;\r\n        border: none;\r\n        border-radius: 10px;\r\n        box-shadow: none !important;\r\n    }\r\n\r\n#right-side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.dropdown-item){\r\n        padding-right: 3%;\r\n    }\r\n\r\n#right-side[_ngcontent-%COMP%]   #login-btn[_ngcontent-%COMP%]{\r\n        margin-right: 1rem;\r\n        font-weight: bold;\r\n        border: 3px solid #000000;\r\n        transition: all 0.375s ease-in-out;\r\n    }\r\n\r\n#right-side[_ngcontent-%COMP%]   #login-btn[_ngcontent-%COMP%]:hover{\r\n        color: #ffffff;\r\n        background-color: #292929;\r\n    }\r\n\r\n#right-side[_ngcontent-%COMP%]   #register-btn[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        color: #ffffff;\r\n        background-color: #000000;\r\n        border: 3px solid #000000;\r\n        transition: all 0.375s ease-in-out;\r\n    }\r\n\r\n#right-side[_ngcontent-%COMP%]   #register-btn[_ngcontent-%COMP%]:hover{\r\n        background-color: #292929;\r\n    }\r\n\r\n.dropdown-menu.show[_ngcontent-%COMP%]{\r\n        border: 2px solid #000000;\r\n    }\r\n\r\n.dropdown-divider[_ngcontent-%COMP%]{\r\n        border-top: 2px solid #000;\r\n    }\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]{\r\n        cursor: pointer;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQSxjQUFjOztBQUNkO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0k7UUFDSSxZQUFZO0lBQ2hCOztBQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7QUFDQTtRQUNJLGdCQUFnQjtRQUNoQiwwQkFBMEI7SUFDOUI7O0FBQ0E7UUFDSSxxQkFBcUI7UUFDckIsZ0JBQWdCO0lBQ3BCOztBQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCOztBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixjQUFjO0lBQ2xCOztBQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdDQUFnQztJQUNwQzs7QUFFSixlQUFlOztBQUNmO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUNJO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7QUFDQTtRQUNJLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsMkJBQTJCO0lBQy9COztBQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsa0NBQWtDO0lBQ3RDOztBQUNBO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtJQUM3Qjs7QUFDQTtRQUNJLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixrQ0FBa0M7SUFDdEM7O0FBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7O0FBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7O0FBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7O0FBQ0E7UUFDSSxlQUFlO0lBQ25CIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi8qIExlZnQgc2lkZSAqL1xyXG4jbGVmdC1zaWRle1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gICAgI2xlZnQtc2lkZSBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgfVxyXG4gICAgI2xlZnQtc2lkZSBuYXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI2xlZnQtc2lkZSB1bHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAycmVtO1xyXG4gICAgfVxyXG4gICAgI2xlZnQtc2lkZSBsaXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICAgICNsZWZ0LXNpZGUgbGk6bm90KDpsYXN0LW9mLXR5cGUpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgI2xlZnQtc2lkZSBhe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAjbGVmdC1zaWRlIGE6aG92ZXJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAjbGVmdC1zaWRlIGEuYWN0aXZle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuLyogUmlnaHQgc2lkZSAqL1xyXG4jcmlnaHQtc2lkZXtcclxuICAgIHdpZHRoOiA1MiU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuICAgICNyaWdodC1zaWRlIGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgI3JpZ2h0LXNpZGUgaW5wdXR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjcmlnaHQtc2lkZSBhOm5vdCguZHJvcGRvd24taXRlbSl7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICB9XHJcbiAgICAjcmlnaHQtc2lkZSAjbG9naW4tYnRue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM3NXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAjcmlnaHQtc2lkZSAjbG9naW4tYnRuOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICB9XHJcbiAgICAjcmlnaHQtc2lkZSAjcmVnaXN0ZXItYnRue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgI3JpZ2h0LXNpZGUgI3JlZ2lzdGVyLWJ0bjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUuc2hvd3tcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLWRpdmlkZXJ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDA7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuIl19 */", "@media (max-width: 1040px){\r\n    #right-side[_ngcontent-%COMP%]{\r\n        width: 48%;\r\n    }\r\n    #right-side[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n        width: 45%;\r\n    }\r\n}\r\n\r\n@media (max-width: 930px){\r\n    header[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        margin-top: 2%;\r\n    }\r\n    #left-side[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #left-side[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n        margin-bottom: 1rem;\r\n    }\r\n    #right-side[_ngcontent-%COMP%], #right-side[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n        width: auto;\r\n    }\r\n    .dropdown-menu.show[_ngcontent-%COMP%]{\r\n        transform: translate3d(-143px, 54px, 0px) !important;\r\n    }\r\n}\r\n\r\n@media (max-width: 540px){\r\n    #right-side[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #right-side[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n    }\r\n    .dropdown-menu.show[_ngcontent-%COMP%]{\r\n        transform: translate3d(-73px, 54px, 0px) !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLG9EQUFvRDtJQUN4RDtBQUNKOztBQUNBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbURBQW1EO0lBQ3ZEO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTA0MHB4KXtcclxuICAgICNyaWdodC1zaWRle1xyXG4gICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICB9XHJcbiAgICAjcmlnaHQtc2lkZSBmb3Jte1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIH1cclxuICAgICNsZWZ0LXNpZGV7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgICNsZWZ0LXNpZGUgbmF2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgICNyaWdodC1zaWRlLCAjcmlnaHQtc2lkZSBmb3Jte1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUuc2hvd3tcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNDNweCwgNTRweCwgMHB4KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCl7XHJcbiAgICAjcmlnaHQtc2lkZXtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgI3JpZ2h0LXNpZGUgZGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tbWVudS5zaG93e1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTczcHgsIDU0cHgsIDBweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css', './header.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "2X6e":
/*!*****************************************************!*\
  !*** ./src/app/components/aside/aside.component.ts ***!
  \*****************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/assunto", a1]; };
function AsideComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.slugify(topic_r2.key)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", topic_r2.key, " (", topic_r2.value, ")");
} }
const _c1 = function (a1, a2) { return ["/data", a1, a2]; };
function AsideComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, date_r3.key.split(" de ")[1], date_r3.key.split(" de ")[0].toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", date_r3.key, " (", date_r3.value, ")");
} }
class AsideComponent {
    constructor() {
        this.topics = {};
        this.dates = {};
        this.keyDescOrder = (a, b) => {
            return a.value > b.value ? -1 : (b.value > a.value ? 1 : 0);
        };
    }
    ngOnInit() {
        this.formatTopics();
        this.formatDates();
    }
    formatTopics() {
        this.posts.forEach((post) => {
            post.topics.forEach((topic) => {
                if (this.topics[topic]) {
                    this.topics[topic] += 1;
                }
                else {
                    this.topics[topic] = 1;
                }
            });
        });
        console.log(this.topics);
    }
    formatDates() {
        this.posts.forEach((post) => {
            let dateString = new Date(+post.creation_date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' });
            dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);
            if (this.dates[dateString]) {
                this.dates[dateString] += 1;
            }
            else {
                this.dates[dateString] = 1;
            }
        });
        console.log(this.dates);
    }
    slugify(str) {
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();
        var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        return str;
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], inputs: { posts: "posts" }, decls: 13, vars: 8, consts: [["id", "topics-h2"], ["id", "topics-ul"], [4, "ngFor", "ngForOf"], ["id", "date-h2"], ["id", "date-ul"], [3, "routerLink"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assuntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AsideComponent_li_5_Template, 3, 5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Por data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AsideComponent_li_11_Template, 3, 6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx.topics, ctx.keyDescOrder));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 5, ctx.dates, ctx.keyDescOrder));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: ["*[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-family: 'Libre Baskerville', serif;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    margin-left: 0;\r\n    padding-left: 0;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-left: .5rem;\r\n    margin-bottom: .5rem;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #000000;\r\n    transition: all 0.25s ease-in-out;\r\n}\r\na[_ngcontent-%COMP%]:hover{\r\n    font-weight: bold;\r\n    border-bottom: 1px solid #000000;\r\n}\r\n#date-h2[_ngcontent-%COMP%]{\r\n    margin-top: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhc2lkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5oMntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xyXG59XHJcbnVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxubGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG59XHJcblxyXG4jZGF0ZS1oMntcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn0iXX0= */", "@media (max-width: 1000px){\r\n    aside[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-evenly;\r\n    }\r\n    #date-h2[_ngcontent-%COMP%]{\r\n        margin-top: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiYXNpZGUucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgYXNpZGV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgfVxyXG4gICAgI2RhdGUtaDJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside',
                templateUrl: './aside.component.html',
                styleUrls: ['./aside.component.css', './aside.responsivity.css']
            }]
    }], function () { return []; }, { posts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4XPS":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");







class RegisterComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this.submitMessage = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, this.phoneValidator),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, this.passwordValidator)
        });
        this.registerForm.controls.password.valueChanges
            .subscribe(x => this.registerForm.controls.confirmPassword.updateValueAndValidity());
    }
    ngOnInit() {
    }
    isValid(controlName) {
        var _a, _b;
        return ((_a = this.registerForm.get(controlName)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.registerForm.get(controlName)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    phoneValidator(control) {
        const re = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
        return re.test(control.value) ? null : { isError: true };
    }
    passwordValidator(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            const confirmPasswordValue = control.value;
            const passwordControl = control.root.get('password');
            if (passwordControl) {
                const passwordValue = passwordControl.value;
                if (passwordValue !== confirmPasswordValue || passwordValue === '') {
                    return { isError: true };
                }
            }
        }
        return null;
    }
    register() {
        let checkbox = document.getElementById('accept-terms');
        if (checkbox.checked && this.registerForm.valid) {
            checkbox.style.removeProperty('outline');
            this._backendService.registerUser(this.registerForm.value)
                .subscribe((data) => {
                this.submitMessage = "Cadastro feito com sucesso!";
                setTimeout(() => {
                    this._router.navigate(['/login']);
                }, 1500);
            }, (error) => {
                this.submitMessage = "E-mail já cadastrado.";
            });
        }
        else {
            if (!checkbox.checked) {
                checkbox.style.setProperty('outline', '3px solid #ea0000', 'important');
                checkbox.addEventListener('click', () => {
                    checkbox.style.removeProperty('outline');
                });
            }
            this.submitMessage = 'Preencha todos os campos acima.';
            Object.keys(this.registerForm.controls).forEach(field => {
                var _a;
                (_a = this.registerForm.get(field)) === null || _a === void 0 ? void 0 : _a.markAsTouched({ onlySelf: true });
            });
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 39, vars: 18, consts: [["id", "main-div", 1, "my-auto"], [1, "text-center"], ["routerLink", "/login"], [3, "formGroup"], [1, "form-area"], ["for", "name"], ["formControlName", "name", "type", "text", "placeholder", "Nome completo", "id", "name", "required", "", 1, "form-control"], ["for", "mail"], ["formControlName", "email", "type", "text", "placeholder", "E-mail", "id", "mail", "required", "", 1, "form-control"], ["for", "phone"], ["formControlName", "phone", "type", "text", "placeholder", "Telefone", "id", "phone", "required", "", 1, "form-control"], ["for", "password"], ["formControlName", "password", "type", "password", "placeholder", "Senha", "id", "password", "required", "", 1, "form-control"], ["for", "confirm-password"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "Confirme sua senha", "id", "confirm-password", "required", "", 1, "form-control"], [1, "bottom-line-area"], [1, "checkbox-area"], ["type", "checkbox", "name", "Aceito os termos e condi\u00E7\u00F5es de uso", "id", "accept-terms", "required", ""], ["for", "accept-terms"], ["type", "submit", "id", "submit-btn", 1, "btn", "mb-3", 3, "click"], ["role", "alert", 1, "alert", 2, "font-family", "'Open Sans', sans-serif"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fa\u00E7a seu cadastro!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Preencha os campos abaixo para criar sua conta. J\u00E1 tem uma conta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fa\u00E7a login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nome completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirme sua senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Aceito os termos e condi\u00E7\u00F5es de uso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_35_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cadastrar-se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("confirmPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.submitMessage == "")("alert-success", ctx.submitMessage.includes("sucesso"))("alert-danger", !ctx.submitMessage.includes("sucesso"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submitMessage, " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4rem;\r\n    margin-bottom: 4rem;\r\n}\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        width: 28%;\r\n    }\r\n    main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n    }\r\n    main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-bottom: 3rem;\r\n        font-family: 'Open Sans', sans-serif;\r\n    }\r\n    main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    main[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        display: block;\r\n        font-weight: bold;\r\n        font-family: 'Open Sans', sans-serif;\r\n        margin-left: 0.25rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .checkbox-area[_ngcontent-%COMP%]{\r\n        margin-bottom: 1.5rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        background-color: #F8F8F8;\r\n        border-color: #F8F8F8;\r\n        height: 3.5rem;\r\n        font-family: 'Open Sans', sans-serif;\r\n    }\r\n    .invalid[_ngcontent-%COMP%]{\r\n        border: 3px solid #ea0000 !important;\r\n    }\r\n    main[_ngcontent-%COMP%]   .checkbox-area[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n    }\r\n    main[_ngcontent-%COMP%]   .checkbox-area[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        margin-bottom: 0;\r\n    }\r\n    main[_ngcontent-%COMP%]   .bottom-line-area[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n    }\r\n    main[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        border-radius: 10px;\r\n        padding-top: 2%;\r\n        padding-bottom: 2%;\r\n        font-weight: bold;\r\n        border: 3px solid #000000;\r\n        color: #ffffff;\r\n        background-color: #000000;\r\n        transition: all 0.375s ease-in-out;\r\n    }\r\n    main[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]:hover{\r\n        color: #000000;\r\n        background-color: #ffffff;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsb0NBQW9DO0lBQ3hDO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsb0NBQW9DO1FBQ3BDLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxvQ0FBb0M7SUFDeEM7SUFDQTtRQUNJLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLGtDQUFrQztJQUN0QztJQUNBO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtJQUM3QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcbiAgICBtYWluICNtYWluLWRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMjglO1xyXG4gICAgfVxyXG4gICAgbWFpbiBoMXtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIG1haW4gcHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIG1haW4gZm9ybXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIG1haW4gbGFiZWx7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgbWFpbiAuZm9ybS1hcmVhLCBtYWluIC5jaGVja2JveC1hcmVhe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIH1cclxuICAgIG1haW4gLmZvcm0tYXJlYSBpbnB1dHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y4RjhGODtcclxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuaW52YWxpZHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZWEwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBtYWluIC5jaGVja2JveC1hcmVhe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgbWFpbiAuY2hlY2tib3gtYXJlYSBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIG1haW4gLmJvdHRvbS1saW5lLWFyZWF7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIG1haW4gI3N1Ym1pdC1idG57XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgbWFpbiAjc3VibWl0LWJ0bjpob3ZlcntcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfSJdfQ== */", "@media (max-width: 1350px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 39%;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px){\r\n    main[_ngcontent-%COMP%]{\r\n        height: auto;\r\n        margin-top: 4rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 49%;\r\n    }\r\n}\r\n\r\n@media (max-width: 780px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 69%;\r\n    }\r\n}\r\n\r\n@media (max-width: 540px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 89%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTM1MHB4KXtcclxuICAgIG1haW4gI21haW4tZGl2e1xyXG4gICAgICAgIHdpZHRoOiAzOSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgbWFpbiAjbWFpbi1kaXZ7XHJcbiAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KXtcclxuICAgIG1haW4gI21haW4tZGl2e1xyXG4gICAgICAgIHdpZHRoOiA2OSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCl7XHJcbiAgICBtYWluICNtYWluLWRpdntcclxuICAgICAgICB3aWR0aDogODklO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css', './register.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "7wzR":
/*!************************************************!*\
  !*** ./src/app/views/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 34, vars: 0, consts: [["id", "first-section"], ["src", "../../../assets/images/blog_logo.png"], ["id", "second-section"], ["src", "./../../../assets/images/danilo.jpg", "alt", "Imagem do autor Danilo Vilhena"], ["title", "Logomarca do Github"], ["href", "https://github.com/danilovilhena"], ["title", "Logomarca do Github", 1, "fab", "fa-github-square"], ["title", "Logomarca do Instagram"], ["href", "https://www.instagram.com/_danilovilhena/"], ["title", "Logomarca do Instagram", 1, "fab", "fa-instagram"], ["title", "Logomarca do Linkedin"], ["href", "https://www.linkedin.com/in/danilo-vilhena-4b150b1b0/"], ["title", "Logomarca do Linkedin", 1, "fab", "fa-linkedin"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Um blog focado em trazer as melhores informa\u00E7\u00F5es sobre tecnologias.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projetado e desenvolvido por: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Danilo Vilhena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Estudante de Computa\u00E7\u00E3o na UNIFOR, desenvolvedor web com foco em aplica\u00E7\u00F5es acess\u00EDveis no LEAD. Estou bastante interessado nessa \u00E1rea e, por isso, viso sempre aprender mais tecnologias que possam ajudar e otimizar as aplica\u00E7\u00F5es que desenvolvo. Atualmente, sou mais familiar com o frontend, especialmente os frameworks Angular e Vue. No entanto, ainda preciso aprender bem como integrar essas aplica\u00E7\u00F5es com o backend e estudar essas outras \u00E1reas do desenvolvimento web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fale conosco pelas redes sociais abaixo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["#first-section[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#first-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        width: 20%;\r\n    }\r\n#first-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-bottom: 1rem;\r\n    }\r\n#first-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 1.25rem;\r\n        text-align: center;\r\n    }\r\n\r\n#second-section[_ngcontent-%COMP%]{\r\n    width: 94%;\r\n    margin-left: 3%;\r\n    margin-right: 3%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    background-color: #1C1C1C;\r\n    color: #ffffff;\r\n}\r\n#second-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 2.25rem;\r\n        font-weight: bold;\r\n        margin-bottom: 5rem;\r\n        margin-top: 2rem;\r\n    }\r\n#second-section[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n        margin-bottom: 4rem;\r\n    }\r\n#second-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        width: 48%;\r\n    }\r\n#second-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n    }\r\n#second-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        margin-bottom: 2rem;\r\n        font-weight: bold;\r\n    }\r\n#second-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n    }\r\n#second-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   h2[_ngcontent-%COMP%], #second-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   p[_ngcontent-%COMP%]{\r\n        text-align: right;\r\n    }\r\n\r\nfooter[_ngcontent-%COMP%]{\r\n    width: 94%;\r\n    margin-left: 3%;\r\n    margin-right: 3%;\r\n    margin-top: 5%;\r\n    padding-top: 3%;\r\n    padding-bottom: 2%;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    background-color: #1C1C1C;\r\n    color: #ffffff;\r\n}\r\nfooter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-weight: bold;\r\n        font-size: 2.25rem;\r\n        margin-bottom: 1rem;\r\n    }\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        margin-bottom: 3rem;\r\n    }\r\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-evenly;\r\n    }\r\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 1.5rem;\r\n        margin-bottom: 1rem;\r\n    }\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding-left: 0;\r\n    }\r\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        list-style: none;\r\n    }\r\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type){\r\n        margin-right: 2rem;\r\n    }\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        text-decoration: none;\r\n        color: #ffffff;\r\n    }\r\nfooter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n        font-size: 2.25rem;\r\n        transition: all 0.375s ease-in-out;\r\n    }\r\nfooter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n        color: #cccccc;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0FBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0FBRUosbUJBQW1CO0FBQ25CO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0FBQ0E7UUFDSSxhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsaUJBQWlCO0lBQ3JCO0FBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUVKLFdBQVc7QUFDWDtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtBQUNBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCw2QkFBNkI7SUFDakM7QUFDQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7QUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGVBQWU7SUFDbkI7QUFDQTtRQUNJLHFCQUFxQjtRQUNyQixnQkFBZ0I7SUFDcEI7QUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLGNBQWM7SUFDbEI7QUFFQTtRQUNJLGtCQUFrQjtRQUNsQixrQ0FBa0M7SUFDdEM7QUFDQTtRQUNJLGNBQWM7SUFDbEIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZpcnN0IHNlY3Rpb24gKi9cclxuI2ZpcnN0LXNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAgICAjZmlyc3Qtc2VjdGlvbiBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuICAgICNmaXJzdC1zZWN0aW9uIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgI2ZpcnN0LXNlY3Rpb24gaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbi8qIFNlY29uZCBzZWN0aW9uICovXHJcbiNzZWNvbmQtc2VjdGlvbntcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMUMxQztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiAgICAjc2Vjb25kLXNlY3Rpb24gaDF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgICAjc2Vjb25kLXNlY3Rpb24gc2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICAgIH1cclxuICAgICNzZWNvbmQtc2VjdGlvbiBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgIH1cclxuICAgICNzZWNvbmQtc2VjdGlvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgICNzZWNvbmQtc2VjdGlvbiBoMntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgI3NlY29uZC1zZWN0aW9uIHB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgICNzZWNvbmQtc2VjdGlvbiBkaXY6bnRoLWNoaWxkKDIpIGgyLCAjc2Vjb25kLXNlY3Rpb24gZGl2Om50aC1jaGlsZCgyKSBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuLyogRm9vdGVyICovXHJcbmZvb3RlcntcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMxQzFDO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuICAgIGZvb3RlciBoMXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICBmb290ZXIgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICAgIGZvb3RlciBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIH1cclxuICAgIGZvb3RlciBoMntcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIHVse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIGZvb3RlciBsaXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICAgIGZvb3RlciBsaTpub3QoOmxhc3Qtb2YtdHlwZSl7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIGk6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICB9Il19 */", "@media (max-width: 930px){\r\n    #first-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    #first-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        width: 50%;\r\n    }\r\n    #first-section[_ngcontent-%COMP%]{\r\n        height: 200px;\r\n    }\r\n}\r\n\r\n@media (max-width: 800px){\r\n    #first-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n    }\r\n    #first-section[_ngcontent-%COMP%]{\r\n        height: 150px;\r\n    }\r\n    #second-section[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    #second-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin-bottom: 1rem;\r\n    }\r\n    #second-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        margin-bottom: 2rem;\r\n    }\r\n    #second-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #second-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    #second-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImFib3V0LnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogOTMwcHgpe1xyXG4gICAgI2ZpcnN0LXNlY3Rpb24gaW1ne1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjZmlyc3Qtc2VjdGlvbiBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgICNmaXJzdC1zZWN0aW9ue1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAjZmlyc3Qtc2VjdGlvbiBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICAgICNmaXJzdC1zZWN0aW9ue1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAjc2Vjb25kLXNlY3Rpb24gc2VjdGlvbntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgI3NlY29uZC1zZWN0aW9uIGRpdntcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAjc2Vjb25kLXNlY3Rpb24gaDF7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuICAgICNzZWNvbmQtc2VjdGlvbiBoMiwgI3NlY29uZC1zZWN0aW9uIHB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI3NlY29uZC1zZWN0aW9uIGltZ3tcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css', './about.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8EYF":
/*!****************************************************!*\
  !*** ./src/app/views/article/article.component.ts ***!
  \****************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");






function ArticleComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.author.description);
} }
function ArticleComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "O autor ainda n\u00E3o escreveu sua descri\u00E7\u00E3o!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ArticleComponent {
    constructor(_route, _location, _backendService) {
        this._route = _route;
        this._location = _location;
        this._backendService = _backendService;
        this.id = '';
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.id = params.id;
        });
        this._backendService.getPostById(this.id)
            .subscribe(data => this.post = data, error => console.log(error));
        setTimeout(() => {
            this._backendService.getUserById(this.post.author_id)
                .subscribe(data => this.author = data, error => console.log(error));
        }, 200);
    }
    navigateBack() {
        this._location.back();
    }
    // Utilitários de exibição
    formatDate(date) {
        let localDate = new Date(+date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return localDate;
    }
    calculateReadTime(text) {
        let minutes = text.split(/\s/g).length / 200;
        let readTime = Math.ceil(minutes);
        return readTime;
    }
    formatTopics(arr) {
        let string = '';
        arr.forEach((el) => {
            string += "#" + el.toLowerCase() + " ";
        });
        console.log(string);
        return string;
    }
    formatDescription(string) {
        return string.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
    encode(str) {
        return encodeURIComponent(str);
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 23, vars: 11, consts: [[3, "src"], ["id", "article-section"], [1, ""], [1, "lighter-text"], [3, "innerHTML"], ["id", "author-section"], [1, "mb-3"], ["id", "author-div"], ["id", "author-content"], [4, "ngIf"], [1, "btn", 3, "click"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sobre o Autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ArticleComponent_p_19_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ArticleComponent_p_20_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_Template_button_click_21_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.post.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.post.author_name, " | ", ctx.formatDate(ctx.post.creation_date), " (", ctx.calculateReadTime(ctx.post.description), " minutos de leitura)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatTopics(ctx.post.topics));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.formatDescription(ctx.post.description), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://ui-avatars.com/api/?name=$", ctx.encode(ctx.author.name), "&background=random&rounded=true", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.author.description != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.author.description == "");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 3rem;\r\n}\r\nmain[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    height: 20rem;\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\nsection[_ngcontent-%COMP%]{\r\n    margin-top: 3rem;\r\n}\r\n\r\n#article-section[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n#article-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 16px;\r\n}\r\n#article-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){\r\n    text-align: center;\r\n}\r\n\r\n#author-section[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 2rem;\r\n}\r\n#author-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    font-size: 1.5rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n#author-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n#author-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-right: 2rem;\r\n    height: 50%;\r\n}\r\n#author-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 2rem;\r\n    margin-bottom: 0;\r\n}\r\n#author-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    background-color: #000000;\r\n    border: 3px solid #000000;\r\n    transition: all 0.375s ease-in-out;\r\n    font-weight: bold;\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    margin-bottom: 3rem;\r\n    margin-left: 10%;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #292929;\r\n}\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n    font-family: 'Open Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6ImFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcbm1haW4gPiBpbWd7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuLyogQXJ0aWNsZSBTZWN0aW9uICovXHJcbiNhcnRpY2xlLXNlY3Rpb257XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuI2FydGljbGUtc2VjdGlvbiBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4jYXJ0aWNsZS1zZWN0aW9uIHA6bm90KDpsYXN0LW9mLXR5cGUpe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBBdXRob3IgU2VjdGlvbiAqL1xyXG4jYXV0aG9yLXNlY3Rpb257XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiNhdXRob3Itc2VjdGlvbiBoMntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4jYXV0aG9yLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiNhdXRob3ItZGl2IGltZ3tcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcbiNhdXRob3ItY29udGVudCBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4jYXV0aG9yLWNvbnRlbnQgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM3NXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbn1cclxuXHJcbi5saWdodGVyLXRleHR7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDI4LCAwLjUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59Il19 */", "@media (max-width: 1100px){\r\n    #article-section[_ngcontent-%COMP%], #author-section[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n}\r\n@media (max-width: 930px){\r\n    #article-section[_ngcontent-%COMP%], #author-section[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoiYXJ0aWNsZS5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCl7XHJcbiAgICAjYXJ0aWNsZS1zZWN0aW9uLCAjYXV0aG9yLXNlY3Rpb257XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpe1xyXG4gICAgI2FydGljbGUtc2VjdGlvbiwgI2F1dGhvci1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.css', './article.responsivity.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "9sPd":
/*!**********************************************************!*\
  !*** ./src/app/views/write-post/write-post.component.ts ***!
  \**********************************************************/
/*! exports provided: WritePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritePostComponent", function() { return WritePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");







class WritePostComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this.submitMessage = '';
        this._backendService.getUser()
            .subscribe(data => {
            console.log(data);
            this.user = data;
        }, error => this._router.navigate(['/login']));
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            topics: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            imageURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    ngAfterContentChecked() {
        $(".selectpicker").selectpicker();
    }
    isValid(controlName) {
        var _a, _b;
        return ((_a = this.postForm.get(controlName)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.postForm.get(controlName)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    reset() {
        this.postForm.reset();
        $('.selectpicker').selectpicker('deselectAll');
    }
    submit() {
        let body = this.postForm.value;
        body.author_name = this.user.name;
        body.author_id = this.user._id;
        console.log(body);
        if (this.postForm.valid) {
            this._backendService.createPost(body)
                .subscribe((data) => {
                this.submitMessage = "Post feito com sucesso!";
                setTimeout(() => {
                    this._router.navigate(['/perfil']);
                }, 1500);
            }, (error) => {
                this.submitMessage = "Erro ao criar seu post.";
            });
        }
    }
}
WritePostComponent.ɵfac = function WritePostComponent_Factory(t) { return new (t || WritePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
WritePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WritePostComponent, selectors: [["app-write-post"]], decls: 97, vars: 14, consts: [["id", "main-div", 1, "my-auto"], [1, "text-left", "w-100"], [3, "formGroup"], [1, "form-area"], ["for", "email"], ["formControlName", "title", "type", "text", "placeholder", "T\u00EDtulo", "id", "email", "required", "", 1, "form-control"], ["for", "description"], ["formControlName", "description", "name", "Descri\u00E7\u00E3o", "placeholder", "Descri\u00E7\u00E3o", "id", "description", "rows", "10", "required", ""], ["for", "assuntos"], ["formControlName", "topics", "multiple", "", "data-live-search", "true", "title", "Nenhum assunto selecionado", "id", "assuntos", 1, "selectpicker", "w-100"], ["for", "image"], ["formControlName", "imageURL", "type", "text", "placeholder", "Imagem", "id", "image", "required", "", 1, "form-control"], ["id", "buttons-div", 1, "mb-3"], ["type", "submit", "id", "clear-btn", 1, "btn", 3, "click"], ["type", "submit", "id", "submit-btn", 1, "btn", 3, "click"], ["role", "alert", 1, "alert", 2, "font-family", "'Open Sans', sans-serif"]], template: function WritePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Escrever um post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Assuntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tecnologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Redes Sociais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Filmes e S\u00E9ries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Aplicativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Jogos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Computadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hardware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Banco de dados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Testes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Servidores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Computa\u00E7\u00E3o em Nuvem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Microservi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "DevOps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Open Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Aprendizado de m\u00E1quina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Intelig\u00EAncia Artificial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ci\u00EAncia de dados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ciberseguran\u00E7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Redes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Rob\u00F3tica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "IoT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Computa\u00E7\u00E3o Gr\u00E1fica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Carreira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Mercado de trabalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Programas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Mac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Imagem (URL)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WritePostComponent_Template_button_click_91_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Limpar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WritePostComponent_Template_button_click_93_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Postar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.submitMessage == "")("alert-success", ctx.submitMessage.includes("sucesso"))("alert-danger", !ctx.submitMessage.includes("sucesso"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submitMessage, " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 3rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        width: 39%;\r\n    }\r\n    main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        margin-bottom: 3rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-bottom: 3rem;\r\n        font-family: 'Open Sans', sans-serif;\r\n    }\r\n    main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    main[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        display: block;\r\n        font-weight: bold;\r\n        font-family: 'Open Sans', sans-serif;\r\n        margin-left: 0.25rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .checkbox-area[_ngcontent-%COMP%]{\r\n        margin-bottom: 1.5rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        background-color: #F8F8F8;\r\n        border-color: #F8F8F8;\r\n        height: 3.5rem;\r\n        font-family: 'Open Sans', sans-serif;\r\n    }\r\n    main[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%]{\r\n        display: block;\r\n        font-family: 'Open Sans', sans-serif;\r\n        background-color: #F8F8F8;\r\n        width: 100%;\r\n        padding: 0.375rem 0.75rem;\r\n        font-size: 1rem;\r\n        font-weight: 400;\r\n        line-height: 1.5;\r\n        color: #212529;\r\n        background-clip: padding-box;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n        appearance: none;\r\n        border-radius: 0.25rem;\r\n        border: none;\r\n        outline: none;\r\n        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    }\r\n    main[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%]:focus{\r\n        border: none;\r\n        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);\r\n    }\r\n    main[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%]:active{\r\n        border: none;\r\n        outline: none;\r\n    }\r\n    main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n        width: 8rem;\r\n        border-radius: 10px;\r\n        padding-top: 2%;\r\n        padding-bottom: 2%;\r\n        font-weight: bold;\r\n        border: 3px solid #000000;\r\n        \r\n        transition: all 0.375s ease-in-out;\r\n    }\r\n    main[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]{\r\n        background-color: #000000;\r\n        color: #ffffff;\r\n    }\r\n    main[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]:hover{\r\n        color: #ffffff;\r\n        background-color: #292929;\r\n    }\r\n    main[_ngcontent-%COMP%]   #clear-btn[_ngcontent-%COMP%]{\r\n        background-color: #ffffff;\r\n        color: #000000;\r\n        margin-right: 1rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   #clear-btn[_ngcontent-%COMP%]:hover{\r\n        color: #ffffff;\r\n        background-color: #292929;\r\n    }\r\n    #buttons-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n    .invalid[_ngcontent-%COMP%]{\r\n    border: 3px solid #ea0000 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlLXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixvQ0FBb0M7SUFDeEM7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixvQ0FBb0M7UUFDcEMsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsY0FBYztRQUNkLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksY0FBYztRQUNkLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osYUFBYTtRQUNiLHdFQUF3RTtJQUM1RTtJQUNBO1FBQ0ksWUFBWTtRQUNaLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFFQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIseUJBQXlCOztRQUV6QixrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtJQUM3QjtJQUdKO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtJQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6IndyaXRlLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gICAgbWFpbiAjbWFpbi1kaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDM5JTtcclxuICAgIH1cclxuICAgIG1haW4gaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICAgIG1haW4gcHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIG1haW4gZm9ybXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIG1haW4gbGFiZWx7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgbWFpbiAuZm9ybS1hcmVhLCBtYWluIC5jaGVja2JveC1hcmVhe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIH1cclxuICAgIG1haW4gLmZvcm0tYXJlYSBpbnB1dHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y4RjhGODtcclxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBtYWluICNkZXNjcmlwdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICBtYWluICNkZXNjcmlwdGlvbjpmb2N1c3tcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwxMjMsMjU1LC4yNSk7XHJcbiAgICB9XHJcbiAgICBtYWluICNkZXNjcmlwdGlvbjphY3RpdmV7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbiAuYnRue1xyXG4gICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM3NXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICBtYWluICNzdWJtaXQtYnRue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICBtYWluICNzdWJtaXQtYnRuOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICB9XHJcbiAgICBtYWluICNjbGVhci1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICBtYWluICNjbGVhci1idG46aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuI2J1dHRvbnMtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5pbnZhbGlke1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2VhMDAwMCAhaW1wb3J0YW50O1xyXG59Il19 */", "@media (max-width: 1100px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 49%;\r\n    }\r\n}\r\n\r\n@media (max-width: 930px){\r\n    main[_ngcontent-%COMP%]{\r\n        height: auto;\r\n        margin-top: 2rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 59%;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 79%;\r\n    }\r\n}\r\n\r\n@media (max-width: 540px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 89%;\r\n    }\r\n    main[_ngcontent-%COMP%]   #buttons-div[_ngcontent-%COMP%]{\r\n        justify-content: space-evenly;\r\n    }\r\n    main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlLXBvc3QucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6IndyaXRlLXBvc3QucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpe1xyXG4gICAgbWFpbiAjbWFpbi1kaXZ7XHJcbiAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KXtcclxuICAgIG1haW57XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgICBtYWluICNtYWluLWRpdntcclxuICAgICAgICB3aWR0aDogNTklO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgbWFpbiAjbWFpbi1kaXZ7XHJcbiAgICAgICAgd2lkdGg6IDc5JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KXtcclxuICAgIG1haW4gI21haW4tZGl2e1xyXG4gICAgICAgIHdpZHRoOiA4OSU7XHJcbiAgICB9XHJcbiAgICBtYWluICNidXR0b25zLWRpdntcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIH1cclxuICAgIG1haW4gLmJ0bntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WritePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-write-post',
                templateUrl: './write-post.component.html',
                styleUrls: ['./write-post.component.css', './write-post.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B98X":
/*!**********************************************!*\
  !*** ./src/app/views/date/date.component.ts ***!
  \**********************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post/post.component */ "YzH7");







function DateComponent_app_post_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 3);
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r2);
} }
function DateComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nenhum post sobre esse assunto ainda.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DateComponent {
    constructor(_route, _location, _backendService) {
        this._route = _route;
        this._location = _location;
        this._backendService = _backendService;
        this.year = '';
        this.month = '';
        this.date = '';
        this._route.params.subscribe((params) => {
            this.year = params.year;
            this.month = this.capitalize(params.month);
            this.date = this.month + " de " + this.year;
            console.log(this.year, this.month);
        });
        this._backendService.getAllPosts()
            .subscribe(data => {
            this.posts = data;
            this.formatPosts();
            this.posts.sort((a, b) => { return b.creation_date - a.creation_date; });
        }, error => console.log(error));
    }
    ngOnInit() {
    }
    navigateBack() {
        this._location.back();
    }
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    formatPosts() {
        let formattedPosts = [];
        this.posts.forEach((post) => {
            let dateString = new Date(+post.creation_date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' });
            dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);
            if (dateString.includes(this.month) && dateString.includes(this.year)) {
                formattedPosts.push(post);
            }
        });
        this.posts = formattedPosts;
    }
}
DateComponent.ɵfac = function DateComponent_Factory(t) { return new (t || DateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"])); };
DateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateComponent, selectors: [["app-date"]], decls: 8, vars: 9, consts: [[3, "post", 4, "ngFor", "ngForOf"], ["style", "font-size: 1.5rem;", 4, "ngIf"], [1, "btn", 3, "click"], [3, "post"], [2, "font-size", "1.5rem"]], template: function DateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DateComponent_app_post_4_Template, 1, 1, "app-post", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DateComponent_p_5_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateComponent_Template_button_click_6_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mb-5", ctx.posts.length != 0)("mb-4", ctx.posts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mt-3", ctx.posts.length == 0);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 3rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\n\r\n.info-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 1.75rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.buttons-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    background-color: #000000;\r\n    border: 3px solid #000000;\r\n    transition: all 0.375s ease-in-out;\r\n    font-weight: bold;\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #292929;\r\n}\r\n\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6ImRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbmgye1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uaW5mby1kaXYgaDF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuaDIscCxhe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4uYnV0dG9ucy1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzc1cyBlYXNlLWluLW91dDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG59XHJcbi5saWdodGVyLXRleHR7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDI4LCAwLjUpO1xyXG59Il19 */", "@media (max-width: 1200px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 970px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 780px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImRhdGUucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KXtcclxuICAgIG1haW57XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KXtcclxuICAgIG1haW57XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-date',
                templateUrl: './date.component.html',
                styleUrls: ['./date.component.css', './date.responsivity.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _jw_pagination_jw_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jw-pagination/jw-pagination.component */ "O6b2");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post/post.component */ "YzH7");





function MainComponent_app_post_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 2);
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1);
} }
class MainComponent {
    constructor() {
        this.items = [];
        this.pageOfItems = [];
    }
    ngOnInit() {
    }
    onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
    }
    // Utilitários de exibição
    formatDate(date) {
        let localDate = new Date(+date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return localDate;
    }
    calculateReadTime(text) {
        let minutes = text.split(/\s/g).length / 200;
        let readTime = Math.ceil(minutes);
        return readTime;
    }
    splitFirstParagraph(text) {
        return text.split('\n')[0];
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], inputs: { items: "items" }, decls: 4, vars: 5, consts: [[3, "post", 4, "ngFor", "ngForOf"], [3, "items", "changePage"], [3, "post"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_app_post_1_Template, 1, 1, "app-post", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "jw-pagination", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changePage", function MainComponent_Template_jw_pagination_changePage_3_listener($event) { return ctx.onChangePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx.pageOfItems, 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _jw_pagination_jw_pagination_component__WEBPACK_IMPORTED_MODULE_2__["JwPaginationComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: ["main[_ngcontent-%COMP%]{\r\n    margin-bottom: 3rem;\r\n}\r\narticle[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-bottom: 3rem;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width: 30%;\r\n    height: 300px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 1.75rem;\r\n}\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n}\r\np[_ngcontent-%COMP%]:last-of-type{\r\n    margin-bottom: 0;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    align-self: flex-end;\r\n    margin-top: auto;\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 3%;\r\n    width: 100%;\r\n}\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcbmFydGljbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5pbWd7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbmgye1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcbmgyLHAsYXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5wOmxhc3Qtb2YtdHlwZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuYXtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5saWdodGVyLXRleHR7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDI4LCAwLjUpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LZMi":
/*!**********************************************************!*\
  !*** ./src/app/views/admin-home/admin-home.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/admin-header/admin-header.component */ "/54B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdminHomeComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "usu\u00E1rios cadastrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminHomeComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "usu\u00E1rio cadastrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminHomeComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "postagens feitas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminHomeComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "postagem feita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { minimumIntegerDigits: 2 }; };
class AdminHomeComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this._backendService.getAllUsers()
            .subscribe(data => {
            this.users = data;
            console.log(this.users);
        }, error => console.log(error));
        this._backendService.getAllPosts()
            .subscribe(data => {
            this.posts = data;
            console.log(this.posts);
        }, error => console.log(error));
    }
    ngOnInit() {
    }
}
AdminHomeComponent.ɵfac = function AdminHomeComponent_Factory(t) { return new (t || AdminHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHomeComponent, selectors: [["app-admin-home"]], decls: 23, vars: 9, consts: [["id", "data"], [1, "data-line"], [1, "data-number"], [4, "ngIf"], ["id", "buttons"], ["routerLink", "/admin/usuarios", 1, "btn"], ["routerLink", "/admin/posts", 1, "btn"]], template: function AdminHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminHomeComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminHomeComponent_p_7_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminHomeComponent_p_11_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminHomeComponent_p_12_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "postagens em m\u00E9dia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ver os usu\u00E1rios cadastrados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ver as postagens cadastradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.users.length.toLocaleString(undefined, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.length != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.length == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.posts.length.toLocaleString(undefined, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.length != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.length == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.posts.length / ctx.users.length).toFixed(1));
    } }, directives: [_components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__["AdminHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 3rem;\r\n    margin-top: 5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n#data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 3rem;\r\n    display: inline-block;\r\n}\r\n#data[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#data[_ngcontent-%COMP%]   .data-line[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    margin-bottom: 1.5rem;\r\n}\r\n#data[_ngcontent-%COMP%]   .data-number[_ngcontent-%COMP%]{\r\n    font-size: 4rem;\r\n    margin-right: 1rem;\r\n}\r\n#buttons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    width: 80%;\r\n    margin-top: 3rem;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    background-color: #000000;\r\n    border: 3px solid #000000;\r\n    transition: all 0.375s ease-in-out;\r\n    font-weight: bold;\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    margin-bottom: 3rem;\r\n}\r\nbutton[_ngcontent-%COMP%]:last-of-type{\r\n    margin-left: 10%;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #292929;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImFkbWluLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuI2RhdGEgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiNkYXRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuI2RhdGEgLmRhdGEtbGluZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG4jZGF0YSAuZGF0YS1udW1iZXJ7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuI2J1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuYnV0dG9uOmxhc3Qtb2YtdHlwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG59Il19 */", "@media (max-width: 700px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWhvbWUucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoiYWRtaW4taG9tZS5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIG1haW57XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-home',
                templateUrl: './admin-home.component.html',
                styleUrls: ['./admin-home.component.css', './admin-home.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "O6b2":
/*!*********************************************************************!*\
  !*** ./src/app/components/jw-pagination/jw-pagination.component.ts ***!
  \*********************************************************************/
/*! exports provided: JwPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwPaginationComponent", function() { return JwPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jw-paginate */ "TNpa");
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jw_paginate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { active: a0 }; };
function JwPaginationComponent_ul_0_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const page_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.setPage(page_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.pager.currentPage === page_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r2);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function JwPaginationComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Primeiro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setPage(ctx_r7.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JwPaginationComponent_ul_0_li_7_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setPage(ctx_r8.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pr\u00F3ximo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setPage(ctx_r9.pager.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00DAltimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r0.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r0.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
} }
class JwPaginationComponent {
    constructor() {
        this.items = [];
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 10;
        this.pager = {};
    }
    ngOnInit() {
        // set page if items array isn't empty
        if (this.items && this.items.length) {
            this.setPage(this.initialPage);
        }
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
    }
    setPage(page) {
        // get new pager object for specified page
        this.pager = jw_paginate__WEBPACK_IMPORTED_MODULE_1___default()(this.items.length, page, this.pageSize, this.maxPages);
        // get new page of items from items array
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(pageOfItems);
    }
}
JwPaginationComponent.ɵfac = function JwPaginationComponent_Factory(t) { return new (t || JwPaginationComponent)(); };
JwPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JwPaginationComponent, selectors: [["jw-pagination"]], inputs: { items: "items", initialPage: "initialPage", pageSize: "pageSize", maxPages: "maxPages" }, outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]], template: function JwPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JwPaginationComponent_ul_0_Template, 14, 13, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["*[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.pagination[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n}\r\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{\r\n    background-color: #1c1c1c;\r\n    border-color: #1c1c1c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp3LXBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6Imp3LXBhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBhZ2luYXRpb257XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5re1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcclxuICAgIGJvcmRlci1jb2xvcjogIzFjMWMxYztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jw-pagination',
                template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
        <a (click)="setPage(1)" class="page-link">Primeiro</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
        <a (click)="setPage(pager.currentPage - 1)" class="page-link">Anterior</a>
    </li>
    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
        <a (click)="setPage(page)" class="page-link">{{page}}</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
        <a (click)="setPage(pager.currentPage + 1)" class="page-link">Próximo</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
        <a (click)="setPage(pager.totalPages)" class="page-link">Último</a>
    </li>
    </ul>`,
                styleUrls: ['./jw-pagination.component.css']
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], initialPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");







class LoginComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this.submitMessage = '';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        var _a;
        if (localStorage.getItem('email')) {
            (_a = this.loginForm.get('email')) === null || _a === void 0 ? void 0 : _a.setValue(localStorage.getItem('email'));
            document.getElementById('remember-me').checked = true;
        }
    }
    isValid(controlName) {
        var _a, _b;
        return ((_a = this.loginForm.get(controlName)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.loginForm.get(controlName)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    login() {
        var _a, _b;
        if (((_a = this.loginForm.get('email')) === null || _a === void 0 ? void 0 : _a.value) == 'admin' && ((_b = this.loginForm.get('password')) === null || _b === void 0 ? void 0 : _b.value) == '12345') {
            this._router.navigate(['/admin/inicio']);
        }
        else {
            if (this.loginForm.valid) {
                this._backendService.loginUser(this.loginForm.value)
                    .subscribe(data => {
                    var _a;
                    console.log(data);
                    localStorage.setItem('token', data.toString());
                    if (document.getElementById('remember-me').checked) {
                        localStorage.setItem('email', (_a = this.loginForm.get('email')) === null || _a === void 0 ? void 0 : _a.value);
                    }
                    else {
                        localStorage.removeItem('email');
                    }
                    this.submitMessage = 'Login feito com sucesso!';
                    setTimeout(() => {
                        this._router.navigate(['/perfil']);
                    }, 1500);
                }, error => { this.submitMessage = error.error.message; });
            }
            else {
                Object.keys(this.loginForm.controls).forEach(field => {
                    var _a;
                    (_a = this.loginForm.get(field)) === null || _a === void 0 ? void 0 : _a.markAsTouched({ onlySelf: true });
                });
            }
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 12, consts: [["id", "main-div", 1, "my-auto"], [1, "text-center"], [3, "formGroup"], [1, "form-area"], ["for", "email"], ["type", "text", "formControlName", "email", "placeholder", "E-mail", "id", "email", "required", "", 1, "form-control"], ["for", "password"], ["type", "password", "formControlName", "password", "placeholder", "Senha", "id", "password", "required", "", 1, "form-control"], [1, "bottom-line-area"], [1, "checkbox-area"], ["type", "checkbox", "name", "Lembre-se de mim", "id", "remember-me"], ["for", "remember-me"], ["type", "submit", "id", "submit-btn", 1, "btn", "mb-3", 3, "click"], ["role", "alert", 1, "alert", 2, "font-family", "'Open Sans', sans-serif"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bem vindo de volta!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fa\u00E7a o login para aproveitar ao m\u00E1ximo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lembre-se de mim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.submitMessage == "")("alert-success", ctx.submitMessage.includes("sucesso"))("alert-danger", !ctx.submitMessage.includes("sucesso"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submitMessage, " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 86.75vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        width: 29%;\r\n    }\r\n    main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n    }\r\n    main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-bottom: 3rem;\r\n        font-family: 'Open Sans', sans-serif;\r\n    }\r\n    main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    main[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        display: block;\r\n        font-weight: bold;\r\n        font-family: 'Open Sans', sans-serif;\r\n        margin-left: 0.25rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .checkbox-area[_ngcontent-%COMP%]{\r\n        margin-bottom: 1.5rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        background-color: #F8F8F8;\r\n        border-color: #F8F8F8;\r\n        height: 3.5rem;\r\n        font-family: 'Open Sans', sans-serif;\r\n    }\r\n    main[_ngcontent-%COMP%]   .checkbox-area[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n    }\r\n    main[_ngcontent-%COMP%]   .checkbox-area[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        margin-bottom: 0;\r\n    }\r\n    main[_ngcontent-%COMP%]   .bottom-line-area[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n    }\r\n    main[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        border-radius: 10px;\r\n        padding-top: 2%;\r\n        padding-bottom: 2%;\r\n        font-weight: bold;\r\n        border: 3px solid #000000;\r\n        background-color: #ffffff;\r\n        transition: all 0.375s ease-in-out;\r\n    }\r\n    main[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]:hover{\r\n        color: #ffffff;\r\n        background-color: #292929;\r\n    }\r\n    .invalid[_ngcontent-%COMP%]{\r\n        border: 3px solid #ea0000 !important;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLG9DQUFvQztRQUNwQyxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2Qsb0NBQW9DO0lBQ3hDO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLGNBQWM7UUFDZCx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLG9DQUFvQztJQUN4QyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4Ni43NXZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gICAgbWFpbiAjbWFpbi1kaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDI5JTtcclxuICAgIH1cclxuICAgIG1haW4gaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBtYWluIHB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBtYWluIGZvcm17XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBtYWluIGxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICAgIH1cclxuICAgIG1haW4gLmZvcm0tYXJlYSwgbWFpbiAuY2hlY2tib3gtYXJlYXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBtYWluIC5mb3JtLWFyZWEgaW5wdXR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGOEY4Rjg7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgbWFpbiAuY2hlY2tib3gtYXJlYXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIG1haW4gLmNoZWNrYm94LWFyZWEgbGFiZWx7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBtYWluIC5ib3R0b20tbGluZS1hcmVhe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBtYWluICNzdWJtaXQtYnRue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzc1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIG1haW4gI3N1Ym1pdC1idG46aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICAgIH1cclxuICAgIC5pbnZhbGlke1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNlYTAwMDAgIWltcG9ydGFudDtcclxuICAgIH0iXX0= */", "@media (max-width: 1100px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 39%;\r\n    }\r\n}\r\n\r\n@media (max-width: 930px){\r\n    main[_ngcontent-%COMP%]{\r\n        height: auto;\r\n        margin-top: 4rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 49%;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 69%;\r\n    }\r\n}\r\n\r\n@media (max-width: 540px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 89%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImxvZ2luLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KXtcclxuICAgIG1haW4gI21haW4tZGl2e1xyXG4gICAgICAgIHdpZHRoOiAzOSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgbWFpbiAjbWFpbi1kaXZ7XHJcbiAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIG1haW4gI21haW4tZGl2e1xyXG4gICAgICAgIHdpZHRoOiA2OSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCl7XHJcbiAgICBtYWluICNtYWluLWRpdntcclxuICAgICAgICB3aWR0aDogODklO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css', 'login.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_main_article_main_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/main-article/main-article.component */ "YTT/");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/main/main.component */ "IURz");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/aside/aside.component */ "2X6e");







class HomeComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this._backendService.getAllPosts()
            .subscribe(data => {
            this.posts = data;
            this.posts.sort((a, b) => { return b.creation_date - a.creation_date; });
            console.log(this.posts);
        }, error => { console.log(error); });
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 3, consts: [[3, "post"], [1, "d-flex", "justify-content-around", "mx-auto", 2, "width", "98%", "margin-top", "3rem"], [2, "width", "60%", 3, "items"], [2, "width", "20%", 3, "posts"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-aside", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx.posts[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_main_article_main_article_component__WEBPACK_IMPORTED_MODULE_3__["MainArticleComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__["AsideComponent"]], styles: ["@media (max-width: 1000px){\r\n    div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    app-main[_ngcontent-%COMP%], app-aside[_ngcontent-%COMP%]{\r\n        width: 90% !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgYXBwLW1haW4sIGFwcC1hc2lkZXtcclxuICAgICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "R2KH":
/*!**************************************************************!*\
  !*** ./src/app/views/profile-edit/profile-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");







class ProfileEditComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this.submitMessage = '';
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, this.phoneValidator),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            github: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            site: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
        this._backendService.getUser()
            .subscribe(data => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.user = data;
            (_a = this.profileForm.get('name')) === null || _a === void 0 ? void 0 : _a.setValue(this.user.name);
            (_b = this.profileForm.get('email')) === null || _b === void 0 ? void 0 : _b.setValue(this.user.email);
            (_c = this.profileForm.get('phone')) === null || _c === void 0 ? void 0 : _c.setValue(this.user.phone);
            (_d = this.profileForm.get('description')) === null || _d === void 0 ? void 0 : _d.setValue(this.user.description);
            (_e = this.profileForm.get('linkedin')) === null || _e === void 0 ? void 0 : _e.setValue(this.user.linkedin);
            (_f = this.profileForm.get('instagram')) === null || _f === void 0 ? void 0 : _f.setValue(this.user.instagram);
            (_g = this.profileForm.get('github')) === null || _g === void 0 ? void 0 : _g.setValue(this.user.github);
            (_h = this.profileForm.get('site')) === null || _h === void 0 ? void 0 : _h.setValue(this.user.site);
        }, error => this._router.navigate(['/login']));
        setTimeout(() => {
            this._backendService.getUserById(this.user._id)
                .subscribe(data => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                this.user = data;
                (_a = this.profileForm.get('name')) === null || _a === void 0 ? void 0 : _a.setValue(this.user.name);
                (_b = this.profileForm.get('email')) === null || _b === void 0 ? void 0 : _b.setValue(this.user.email);
                (_c = this.profileForm.get('phone')) === null || _c === void 0 ? void 0 : _c.setValue(this.user.phone);
                (_d = this.profileForm.get('description')) === null || _d === void 0 ? void 0 : _d.setValue(this.user.description);
                (_e = this.profileForm.get('linkedin')) === null || _e === void 0 ? void 0 : _e.setValue(this.user.linkedin);
                (_f = this.profileForm.get('instagram')) === null || _f === void 0 ? void 0 : _f.setValue(this.user.instagram);
                (_g = this.profileForm.get('github')) === null || _g === void 0 ? void 0 : _g.setValue(this.user.github);
                (_h = this.profileForm.get('site')) === null || _h === void 0 ? void 0 : _h.setValue(this.user.site);
            }, error => console.log(error));
        }, 100);
    }
    isValid(controlName) {
        var _a, _b;
        return ((_a = this.profileForm.get(controlName)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.profileForm.get(controlName)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    phoneValidator(control) {
        const re = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
        return re.test(control.value) ? null : { isError: true };
    }
    ngOnInit() {
    }
    reset() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        (_a = this.profileForm.get('name')) === null || _a === void 0 ? void 0 : _a.setValue(this.user.name);
        (_b = this.profileForm.get('email')) === null || _b === void 0 ? void 0 : _b.setValue(this.user.email);
        (_c = this.profileForm.get('phone')) === null || _c === void 0 ? void 0 : _c.setValue(this.user.phone);
        (_d = this.profileForm.get('description')) === null || _d === void 0 ? void 0 : _d.setValue(this.user.description);
        (_e = this.profileForm.get('linkedin')) === null || _e === void 0 ? void 0 : _e.setValue(this.user.linkedin);
        (_f = this.profileForm.get('instagram')) === null || _f === void 0 ? void 0 : _f.setValue(this.user.instagram);
        (_g = this.profileForm.get('github')) === null || _g === void 0 ? void 0 : _g.setValue(this.user.github);
        (_h = this.profileForm.get('site')) === null || _h === void 0 ? void 0 : _h.setValue(this.user.site);
        this.submitMessage = '';
    }
    save() {
        if (this.profileForm.valid) {
            this._backendService.alterUser(this.user._id, this.profileForm.value)
                .subscribe(data => {
                console.log(data);
                this.submitMessage = 'Mudanças salvas com sucesso.';
            }, error => {
                console.log(error);
                this.submitMessage = 'Mudanças salvas com sucesso.';
            });
        }
        else {
            Object.keys(this.profileForm.controls).forEach(field => {
                var _a;
                (_a = this.profileForm.get(field)) === null || _a === void 0 ? void 0 : _a.markAsTouched({ onlySelf: true });
            });
            this.submitMessage = 'Ocorreu um erro ao salvar as mudanças.';
        }
    }
}
ProfileEditComponent.ɵfac = function ProfileEditComponent_Factory(t) { return new (t || ProfileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEditComponent, selectors: [["app-profile-edit"]], decls: 63, vars: 12, consts: [["id", "main-div", 1, "my-auto"], [1, "text-left", "w-100"], [3, "formGroup", "submit"], [1, "form-area"], ["for", "name"], ["formControlName", "name", "type", "text", "placeholder", "Nome", "id", "name", "required", "", 1, "form-control"], ["for", "email"], ["formControlName", "email", "type", "text", "placeholder", "E-mail", "id", "email", "required", "", 1, "form-control"], ["for", "phone"], ["formControlName", "phone", "type", "text", "placeholder", "Telefone", "id", "phone", "required", "", 1, "form-control"], ["for", "description"], ["formControlName", "description", "name", "Descri\u00E7\u00E3o", "placeholder", "Descri\u00E7\u00E3o", "id", "description", "rows", "10", "required", ""], [1, "form-area", "social-media"], ["for", "linkedin"], ["title", "Logomarca do Linkedin", 1, "fab", "fa-linkedin"], [1, "input-group", "input-group-md"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-md", 1, "input-group-text", 2, "font-family", "'Open Sans', sans-serif"], ["formControlName", "linkedin", "type", "text", "placeholder", "Linkedin", "id", "linkedin", 1, "form-control"], ["for", "instagram"], ["title", "Logomarca do Instagram", 1, "fab", "fa-instagram"], ["formControlName", "instagram", "type", "text", "placeholder", "Instagram", "id", "instagram", 1, "form-control"], ["for", "github"], ["title", "Logomarca do Github", 1, "fab", "fa-github-square"], ["formControlName", "github", "type", "text", "placeholder", "Github", "id", "github", 1, "form-control"], ["for", "site"], [1, "fas", "fa-link"], ["formControlName", "site", "type", "text", "placeholder", "Site", "id", "site", 1, "form-control"], ["id", "buttons-div", 1, "mb-3"], ["type", "submit", "id", "clear-btn", 1, "btn", 3, "click"], ["type", "submit", "id", "submit-btn", 1, "btn", 3, "click"], ["role", "alert", 1, "alert", 2, "font-family", "'Open Sans', sans-serif"]], template: function ProfileEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Configura\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProfileEditComponent_Template_form_submit_5_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Redes sociais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "linkedin.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "instagram.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "github.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "http://");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_Template_button_click_57_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Descartar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_Template_button_click_59_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.isValid("phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.submitMessage == "")("alert-success", ctx.submitMessage.includes("sucesso"))("alert-danger", !ctx.submitMessage.includes("sucesso"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submitMessage, " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 3rem;\r\n    margin-bottom: 3rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        width: 29%;\r\n    }\r\n    main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-weight: bold;\r\n        margin-bottom: 3rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-bottom: 3rem;\r\n        font-family: 'Open Sans', sans-serif;\r\n    }\r\n    main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    main[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n        display: block;\r\n        font-weight: bold;\r\n        font-family: 'Open Sans', sans-serif;\r\n        margin-left: 0.25rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .checkbox-area[_ngcontent-%COMP%]{\r\n        margin-bottom: 1.5rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        background-color: #F8F8F8;\r\n        border-color: #F8F8F8;\r\n        height: 3.5rem;\r\n        font-family: 'Open Sans', sans-serif;\r\n    }\r\n    main[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%]{\r\n        display: block;\r\n        font-family: 'Open Sans', sans-serif;\r\n        background-color: #F8F8F8;\r\n        width: 100%;\r\n        padding: 0.375rem 0.75rem;\r\n        font-size: 1rem;\r\n        font-weight: 400;\r\n        line-height: 1.5;\r\n        color: #495057;\r\n        background-clip: padding-box;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n        appearance: none;\r\n        border-radius: 0.25rem;\r\n        border: none;\r\n        outline: none;\r\n        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    }\r\n    main[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%]:focus{\r\n        border: none;\r\n        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);\r\n    }\r\n    main[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%]:active{\r\n        border: none;\r\n        outline: none;\r\n    }\r\n    main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n        width: 8rem;\r\n        border-radius: 10px;\r\n        padding-top: 2%;\r\n        padding-bottom: 2%;\r\n        font-weight: bold;\r\n        border: 3px solid #000000;\r\n        transition: all 0.375s ease-in-out;\r\n    }\r\n    main[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]{\r\n        background-color: #000000;\r\n        color: #ffffff;\r\n    }\r\n    main[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]:hover{\r\n        color: #ffffff;\r\n        background-color: #292929;\r\n    }\r\n    main[_ngcontent-%COMP%]   #clear-btn[_ngcontent-%COMP%]{\r\n        background-color: #ffffff;\r\n        color: #000000;\r\n        margin-right: 1rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   #clear-btn[_ngcontent-%COMP%]:hover{\r\n        color: #ffffff;\r\n        background-color: #292929;\r\n    }\r\n    .social-media[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n    .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 2rem;\r\n}\r\n    .social-media[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n    #buttons-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n    .invalid[_ngcontent-%COMP%]{\r\n    border: 3px solid #ea0000 !important;\r\n}\r\n    .input-group-text[_ngcontent-%COMP%]{\r\n    background-color: #e0e0e0;\r\n    border-color: #e0e0e0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLG9DQUFvQztRQUNwQyxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2Qsb0NBQW9DO0lBQ3hDO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsb0NBQW9DO1FBQ3BDLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixhQUFhO1FBQ2Isd0VBQXdFO0lBQzVFO0lBQ0E7UUFDSSxZQUFZO1FBQ1osNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUVBO1FBQ0ksV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCx5QkFBeUI7SUFDN0I7SUFFSjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7SUFDQTtJQUNJLGVBQWU7QUFDbkI7SUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtJQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtJQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0lBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InByb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAgICBtYWluICNtYWluLWRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMjklO1xyXG4gICAgfVxyXG4gICAgbWFpbiBoMXtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgbWFpbiBwe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgbWFpbiBmb3Jte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgbWFpbiBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgICB9XHJcbiAgICBtYWluIC5mb3JtLWFyZWEsIG1haW4gLmNoZWNrYm94LWFyZWF7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgbWFpbiAuZm9ybS1hcmVhIGlucHV0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjhGOEY4O1xyXG4gICAgICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIG1haW4gI2Rlc2NyaXB0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIG1haW4gI2Rlc2NyaXB0aW9uOmZvY3Vze1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLDEyMywyNTUsLjI1KTtcclxuICAgIH1cclxuICAgIG1haW4gI2Rlc2NyaXB0aW9uOmFjdGl2ZXtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBtYWluIC5idG57XHJcbiAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzc1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIG1haW4gI3N1Ym1pdC1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIG1haW4gI3N1Ym1pdC1idG46aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICAgIH1cclxuICAgIG1haW4gI2NsZWFyLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIH1cclxuICAgIG1haW4gI2NsZWFyLWJ0bjpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgfVxyXG4gICAgXHJcbi5zb2NpYWwtbWVkaWF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc29jaWFsLW1lZGlhIGl7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuLnNvY2lhbC1tZWRpYSBsYWJlbHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuI2J1dHRvbnMtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmludmFsaWR7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZWEwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0LWdyb3VwLXRleHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbiJdfQ== */", "@media (max-width: 1350px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 39%;\r\n    }\r\n}\r\n\r\n@media (max-width: 970px){\r\n    main[_ngcontent-%COMP%]{\r\n        height: auto;\r\n        margin-top: 4rem;\r\n    }\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 49%;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 780px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 69%;\r\n    }\r\n}\r\n\r\n@media (max-width: 540px){\r\n    main[_ngcontent-%COMP%]   #main-div[_ngcontent-%COMP%]{\r\n        width: 89%;\r\n    }\r\n    main[_ngcontent-%COMP%]   #buttons-div[_ngcontent-%COMP%]{\r\n        justify-content: space-evenly;\r\n    }\r\n    main[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZWRpdC5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtJQUNkOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InByb2ZpbGUtZWRpdC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDEzNTBweCl7XHJcbiAgICBtYWluICNtYWluLWRpdntcclxuICAgICAgICB3aWR0aDogMzklO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTcwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIH1cclxuICAgIG1haW4gI21haW4tZGl2e1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KXtcclxuICAgIG1haW4gI21haW4tZGl2e1xyXG4gICAgICAgIHdpZHRoOiA2OSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCl7XHJcbiAgICBtYWluICNtYWluLWRpdntcclxuICAgICAgICB3aWR0aDogODklO1xyXG4gICAgfVxyXG4gICAgbWFpbiAjYnV0dG9ucy1kaXZ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcbiAgICBtYWluIC5idG57XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-edit',
                templateUrl: './profile-edit.component.html',
                styleUrls: ['./profile-edit.component.css', './profile-edit.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'web-final';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Wqks":
/*!************************************************************!*\
  !*** ./src/app/views/admin-users/admin-users.component.ts ***!
  \************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/admin-header/admin-header.component */ "/54B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdminUsersComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Telefone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_section_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeUser(user_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://ui-avatars.com/api/?name=$", ctx_r0.encode(user_r1.name), "&background=random&rounded=true", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.email, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.phone, "");
} }
class AdminUsersComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this._backendService.getAllUsers()
            .subscribe(data => {
            this.users = data;
            console.log(this.users);
        }, error => console.log(error));
    }
    ngOnInit() {
    }
    encode(str) {
        return encodeURIComponent(str);
    }
    removeUser(id) {
        if (confirm("Você tem certeza que deseja remover esse usuário?")) {
            this._backendService.removeUser(id)
                .subscribe(data => console.log(data), error => console.log(error));
        }
    }
}
AdminUsersComponent.ɵfac = function AdminUsersComponent_Factory(t) { return new (t || AdminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUsersComponent, selectors: [["app-admin-users"]], decls: 5, vars: 1, consts: [["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "mb-5"], [1, "info-div"], [3, "src"], [1, "btn", 3, "click"]], template: function AdminUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminUsersComponent_section_4_Template, 15, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__["AdminHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 3rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin-bottom: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 72px;\r\n    height: 72px;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.info-div[_ngcontent-%COMP%]{\r\n   display: flex;\r\n}\r\n\r\n.buttons-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    background-color: #000000;\r\n    border: 3px solid #000000;\r\n    transition: all 0.375s ease-in-out;\r\n    font-weight: bold;\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:first-of-type{\r\n    margin-left: 1rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #292929;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7R0FDRyxhQUFhO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJhZG1pbi11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4uaW5mby1kaXZ7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJ1dHRvbnMtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM3NXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuYnV0dG9uOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbn0iXX0= */", "@media (max-width: 1300px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1050px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 65%;\r\n    }\r\n}\r\n\r\n@media (max-width: 950px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n@media (max-width: 650px){\r\n    section[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    img[_ngcontent-%COMP%]{\r\n        margin-bottom: 1rem;\r\n        margin-right: 0;\r\n    }\r\n    button[_ngcontent-%COMP%]{\r\n        margin-top: 1rem;\r\n        margin-left: 0 !important;\r\n    }\r\n    section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXVzZXJzLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6ImFkbWluLXVzZXJzLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KXtcclxuICAgIG1haW57XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCl7XHJcbiAgICBzZWN0aW9ue1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbiBkaXZ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaDEsIGgyLCBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-users',
                templateUrl: './admin-users.component.html',
                styleUrls: ['./admin-users.component.css', './admin-users.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "YTT/":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-article/main-article.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainArticleComponent", function() { return MainArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return ["/post", a1]; };
class MainArticleComponent {
    constructor() {
        this.post = {};
    }
    ngOnInit() {
    }
    formatDate(date) {
        let localDate = new Date(+date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return localDate;
    }
    calculateReadTime(text) {
        let minutes = text.split(/\s/g).length / 200;
        let readTime = Math.ceil(minutes);
        return readTime;
    }
    splitFirstParagraph(text) {
        return text.split('\n')[0];
    }
}
MainArticleComponent.ɵfac = function MainArticleComponent_Factory(t) { return new (t || MainArticleComponent)(); };
MainArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainArticleComponent, selectors: [["app-main-article"]], inputs: { post: "post" }, decls: 13, vars: 9, consts: [[1, "lighter-text"], [3, "routerLink"], ["alt", "Imagem do post", 3, "src"]], template: function MainArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Em Destaque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ver mais \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.post.author_name, " | ", ctx.formatDate(ctx.post.creation_date), " (", ctx.calculateReadTime(ctx.post.description), " minutos de leitura)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.splitFirstParagraph(ctx.post.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.post._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.post.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    display: flex;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 3rem;\r\n    border: 4px solid #000000;\r\n    height: 10% !important;\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n    padding-left: 3%;\r\n    padding-right: 10%;\r\n    padding-top: 3%;\r\n    padding-bottom: 3%;\r\n    width: 55%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border-right: 4px solid #000000;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    align-self: flex-end;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width: 45%;\r\n}\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoibWFpbi1hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgaGVpZ2h0OiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5kaXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMDAwMDAwO1xyXG59XHJcbmgye1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmgyLHAsYXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5he1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcbi5saWdodGVyLXRleHR7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDI4LCAwLjUpO1xyXG59Il19 */", "@media (max-width: 1000px){\r\n    section[_ngcontent-%COMP%]{\r\n        flex-direction: column-reverse;\r\n    }\r\n    div[_ngcontent-%COMP%]{\r\n        border-right: none;\r\n        padding-right: 3%;\r\n    }\r\n    div[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tYXJ0aWNsZS5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6Im1haW4tYXJ0aWNsZS5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICBzZWN0aW9ue1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIH1cclxuICAgIGRpdntcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICB9XHJcbiAgICBkaXYsIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-article',
                templateUrl: './main-article.component.html',
                styleUrls: ['./main-article.component.css', './main-article.responsivity.css']
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YzH7":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return ["/post", a1]; };
class PostComponent {
    constructor() { }
    ngOnInit() {
    }
    // Utilitários de exibição
    formatDate(date) {
        let localDate = new Date(+date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return localDate;
    }
    calculateReadTime(text) {
        let minutes = text.split(/\s/g).length / 200;
        let readTime = Math.ceil(minutes);
        return readTime;
    }
    splitFirstParagraph(text) {
        return text.split('\n')[0];
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { post: "post" }, decls: 13, vars: 10, consts: [["alt", "Imagem do post", 3, "src"], [1, "lighter-text"], [3, "routerLink"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ver mais \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.post.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.topics[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.post.author_name, " | ", ctx.formatDate(ctx.post.creation_date), " (", ctx.calculateReadTime(ctx.post.description), " minutos de leitura)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.splitFirstParagraph(ctx.post.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.post._id));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["article[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-bottom: 3rem;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width: 30%;\r\n    height: 300px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 1.75rem;\r\n}\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n}\r\np[_ngcontent-%COMP%]:last-of-type{\r\n    margin-bottom: 0;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    align-self: flex-end;\r\n    margin-top: auto;\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 3%;\r\n    width: 100%;\r\n}\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcnRpY2xle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5oMntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxufVxyXG5oMixwLGF7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxucDpsYXN0LW9mLXR5cGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbmF7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGlnaHRlci10ZXh0e1xyXG4gICAgY29sb3I6IHJnYmEoMjgsIDI4LCAyOCwgMC41KTtcclxufSJdfQ== */", "@media (max-width: 650px){\r\n    article[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n        margin-bottom: 3rem;\r\n    }\r\n    img[_ngcontent-%COMP%]{\r\n        margin-bottom: .5rem;\r\n        margin-right: 0;\r\n        width: 100%;\r\n    }\r\n    section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{\r\n        margin-bottom: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsV0FBVztJQUNmO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJwb3N0LnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xyXG4gICAgYXJ0aWNsZXtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uIGRpdntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uIGRpdiBwOmxhc3Qtb2YtdHlwZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css', './post.responsivity.css']
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/about/about.component */ "7wzR");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");
/* harmony import */ var _components_main_article_main_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-article/main-article.component */ "YTT/");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/aside/aside.component */ "2X6e");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _views_topics_topics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/topics/topics.component */ "buOa");
/* harmony import */ var _views_article_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/article/article.component */ "8EYF");
/* harmony import */ var _views_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/admin-home/admin-home.component */ "LZMi");
/* harmony import */ var _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin-header/admin-header.component */ "/54B");
/* harmony import */ var _views_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/admin-users/admin-users.component */ "Wqks");
/* harmony import */ var _views_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/admin-posts/admin-posts.component */ "byts");
/* harmony import */ var _views_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/write-post/write-post.component */ "9sPd");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _views_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/profile-edit/profile-edit.component */ "R2KH");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/backend.service */ "cygB");
/* harmony import */ var _components_jw_pagination_jw_pagination_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/jw-pagination/jw-pagination.component */ "O6b2");
/* harmony import */ var _views_topic_topic_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/topic/topic.component */ "ni/8");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/post/post.component */ "YzH7");
/* harmony import */ var _views_date_date_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/date/date.component */ "B98X");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/search/search.component */ "s4XM");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_backend_service__WEBPACK_IMPORTED_MODULE_23__["BackendService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _views_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
        _components_main_article_main_article_component__WEBPACK_IMPORTED_MODULE_11__["MainArticleComponent"],
        _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_12__["AsideComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
        _views_topics_topics_component__WEBPACK_IMPORTED_MODULE_14__["TopicsComponent"],
        _views_article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"],
        _views_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_16__["AdminHomeComponent"],
        _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_17__["AdminHeaderComponent"],
        _views_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__["AdminUsersComponent"],
        _views_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_19__["AdminPostsComponent"],
        _views_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_20__["WritePostComponent"],
        _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
        _views_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_22__["ProfileEditComponent"],
        _components_jw_pagination_jw_pagination_component__WEBPACK_IMPORTED_MODULE_24__["JwPaginationComponent"],
        _views_topic_topic_component__WEBPACK_IMPORTED_MODULE_25__["TopicComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_26__["PostComponent"],
        _views_date_date_component__WEBPACK_IMPORTED_MODULE_27__["DateComponent"],
        _views_search_search_component__WEBPACK_IMPORTED_MODULE_28__["SearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _views_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _views_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                    _components_main_article_main_article_component__WEBPACK_IMPORTED_MODULE_11__["MainArticleComponent"],
                    _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_12__["AsideComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
                    _views_topics_topics_component__WEBPACK_IMPORTED_MODULE_14__["TopicsComponent"],
                    _views_article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"],
                    _views_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_16__["AdminHomeComponent"],
                    _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_17__["AdminHeaderComponent"],
                    _views_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_18__["AdminUsersComponent"],
                    _views_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_19__["AdminPostsComponent"],
                    _views_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_20__["WritePostComponent"],
                    _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                    _views_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_22__["ProfileEditComponent"],
                    _components_jw_pagination_jw_pagination_component__WEBPACK_IMPORTED_MODULE_24__["JwPaginationComponent"],
                    _views_topic_topic_component__WEBPACK_IMPORTED_MODULE_25__["TopicComponent"],
                    _components_post_post_component__WEBPACK_IMPORTED_MODULE_26__["PostComponent"],
                    _views_date_date_component__WEBPACK_IMPORTED_MODULE_27__["DateComponent"],
                    _views_search_search_component__WEBPACK_IMPORTED_MODULE_28__["SearchComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [_services_backend_service__WEBPACK_IMPORTED_MODULE_23__["BackendService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "buOa":
/*!**************************************************!*\
  !*** ./src/app/views/topics/topics.component.ts ***!
  \**************************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a1) { return ["/assunto", a1]; };
function TopicsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.slugify(topic_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r1);
} }
class TopicsComponent {
    constructor() { }
    ngOnInit() {
        this.topics = ['Tecnologia', 'Mobile', 'Web', 'Redes Sociais', 'Filmes e Séries', 'Aplicativo', 'Jogos', 'Computadores', 'Hardware', 'Software', 'Frontend', 'Backend', 'Banco de dados', 'Testes', 'Servidores', 'Computação em Nuvem', 'Microserviços', 'Git', 'DevOps', 'Open Source', 'Aprendizado de máquina', 'Inteligência Artificial', 'Ciência de dados', 'Cibersegurança', 'Redes', 'Robótica', 'IoT', 'Computação Gráfica', 'Carreira', 'Mercado de trabalho', 'Programas', 'Mac', 'Windows', 'Linux'];
    }
    filterTopics(event) {
        var _a;
        console.log(event.target.value);
        (_a = document.getElementById('tags-area')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('div').forEach((e) => {
            var _a;
            if ((_a = e.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(event.target.value.toLowerCase())) {
                e.style.display = 'flex';
            }
            else {
                e.style.display = 'none';
            }
        });
    }
    slugify(str) {
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();
        var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        return str;
    }
}
TopicsComponent.ɵfac = function TopicsComponent_Factory(t) { return new (t || TopicsComponent)(); };
TopicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopicsComponent, selectors: [["app-topics"]], decls: 9, vars: 1, consts: [["id", "main-div"], ["action", "", "id", "search-area"], ["type", "search", "placeholder", "Pesquise pelo assunto que desejar", "aria-label", "Pesquise pelo t\u00F3pico que desejar", 1, "form-control", 3, "keyup"], ["href", ""], ["src", "./../../../assets/icons/lupa.svg"], ["id", "tags-area"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function TopicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TopicsComponent_Template_input_keyup_4_listener($event) { return ctx.filterTopics($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopicsComponent_div_8_Template, 3, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topics);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["*[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n#main-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 10%;\r\n    margin-bottom: 11%;\r\n}\r\n#search-area[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    border: 3px solid #000000;\r\n    margin-right: 1rem;\r\n    border-radius: 10px;\r\n    width: 50%;\r\n}\r\n#search-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        padding-left: 3%;\r\n        margin-right: 0.5rem;\r\n        height: 2.5rem;\r\n        border: none;\r\n        border-radius: 10px;\r\n        box-shadow: none !important;\r\n    }\r\n#search-area[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        padding-right: 3%;\r\n    }\r\n#tags-area[_ngcontent-%COMP%]{\r\n    margin-top: 3rem;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    width: 80%;\r\n}\r\n#tags-area[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 3px solid #000000;\r\n    margin-right: 1rem;\r\n    margin-top: 1rem;\r\n    border-radius: 10px;\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: all 0.325s ease-in-out;\r\n}\r\n#tags-area[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{\r\n    background-color: #1c1c1c;\r\n    border-color: #1c1c1c;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQiwyQkFBMkI7SUFDL0I7QUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUVKO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtDQUFrQztBQUN0QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2YiLCJmaWxlIjoidG9waWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNtYWluLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDExJTtcclxufVxyXG4jc2VhcmNoLWFyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuICAgICNzZWFyY2gtYXJlYSBpbnB1dHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICNzZWFyY2gtYXJlYSBhe1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgfVxyXG5cclxuI3RhZ3MtYXJlYXtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbiN0YWdzLWFyZWEgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzI1cyBlYXNlLWluLW91dDtcclxufVxyXG4jdGFncy1hcmVhIGRpdjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYzFjMWM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topics',
                templateUrl: './topics.component.html',
                styleUrls: ['./topics.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "byts":
/*!************************************************************!*\
  !*** ./src/app/views/admin-posts/admin-posts.component.ts ***!
  \************************************************************/
/*! exports provided: AdminPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostsComponent", function() { return AdminPostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/admin-header/admin-header.component */ "/54B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdminPostsComponent_article_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPostsComponent_article_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const post_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removePost(post_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", post_r1.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.topics[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", post_r1.author_name, " | ", ctx_r0.formatDate(post_r1.creation_date), " (", ctx_r0.calculateReadTime(post_r1.description), " minutos de leitura)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.splitFirstParagraph(post_r1.description));
} }
class AdminPostsComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this._backendService.getAllPosts()
            .subscribe(data => {
            this.posts = data;
            this.posts.sort((a, b) => { return b.creation_date - a.creation_date; });
            console.log(this.posts);
        }, error => console.log(error));
    }
    ngOnInit() {
    }
    formatDate(date) {
        let localDate = new Date(+date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return localDate;
    }
    calculateReadTime(text) {
        let minutes = text.split(/\s/g).length / 200;
        let readTime = Math.ceil(minutes);
        return readTime;
    }
    splitFirstParagraph(text) {
        return text.split('\n')[0];
    }
    removePost(id) {
        if (confirm("Você tem certeza que deseja remover essa postagem?")) {
            this._backendService.removePost(id)
                .subscribe(data => console.log(data), error => console.log(error));
        }
    }
}
AdminPostsComponent.ɵfac = function AdminPostsComponent_Factory(t) { return new (t || AdminPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminPostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPostsComponent, selectors: [["app-admin-posts"]], decls: 5, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "src"], [1, "info-div"], [1, "lighter-text"], [1, "buttons-div"], [1, "btn", 3, "click"]], template: function AdminPostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Postagens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminPostsComponent_article_4_Template, 15, 7, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__["AdminHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 3rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\narticle[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\n\r\n.info-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 1.75rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.buttons-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    background-color: #000000;\r\n    border: 3px solid #000000;\r\n    transition: all 0.375s ease-in-out;\r\n    font-weight: bold;\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:first-of-type{\r\n    margin-left: 1rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #292929;\r\n}\r\n\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoiYWRtaW4tcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuYXJ0aWNsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5oMntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmluZm8tZGl2IGgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbmgyLHAsYXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuLmJ1dHRvbnMtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM3NXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcbmJ1dHRvbjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG59XHJcbi5saWdodGVyLXRleHR7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDI4LCAwLjUpO1xyXG59Il19 */", "@media (max-width: 1300px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1050px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 65%;\r\n    }\r\n}\r\n\r\n@media (max-width: 950px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n@media (max-width: 650px){\r\n    article[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n        margin-bottom: 1rem;\r\n    }\r\n    img[_ngcontent-%COMP%]{\r\n        margin-bottom: .5rem;\r\n        margin-right: 0;\r\n        width: 100%;\r\n    }\r\n    button[_ngcontent-%COMP%]{\r\n        margin-top: .5rem;\r\n        margin-left: 0 !important;\r\n    }\r\n    article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{\r\n        margin-bottom: 0;\r\n    }\r\n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBvc3RzLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJhZG1pbi1wb3N0cy5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xyXG4gICAgYXJ0aWNsZXtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGFydGljbGUgZGl2e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGFydGljbGUgZGl2IHA6bGFzdC1vZi10eXBle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBoMSwgaDIsIHB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-posts',
                templateUrl: './admin-posts.component.html',
                styleUrls: ['./admin-posts.component.css', './admin-posts.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "cygB":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BackendService {
    constructor(_http) {
        this._http = _http;
    }
    // User related
    getAllUsers() {
        return this._http.get('https://vilhena-blog-backend.herokuapp.com/users/get', {
            observe: 'body'
        });
    }
    getUserById(id) {
        return this._http.get(`https://vilhena-blog-backend.herokuapp.com/users/get_id/${id}`, {
            observe: 'body'
        });
    }
    alterUser(id, body) {
        return this._http.patch(`https://vilhena-blog-backend.herokuapp.com/users/patch/${id}`, body, {
            observe: 'body'
        });
    }
    removeUser(id) {
        return this._http.delete(`https://vilhena-blog-backend.herokuapp.com/users/delete/${id}`);
    }
    registerUser(body) {
        return this._http.post('https://vilhena-blog-backend.herokuapp.com/users/register', body, {
            observe: 'body'
        });
    }
    loginUser(body) {
        return this._http.post('https://vilhena-blog-backend.herokuapp.com/users/login', body, {
            observe: 'body'
        });
    }
    getUser() {
        return this._http.get('https://vilhena-blog-backend.herokuapp.com/users/user', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append("token", localStorage.getItem("token"))
        });
    }
    // Post related
    createPost(body) {
        return this._http.post('https://vilhena-blog-backend.herokuapp.com/posts/create', body, {
            observe: 'body'
        });
    }
    getAllPosts() {
        return this._http.get('https://vilhena-blog-backend.herokuapp.com/posts/get', {
            observe: 'body'
        });
    }
    getPostsByAuthor(id) {
        return this._http.get(`https://vilhena-blog-backend.herokuapp.com/posts/author/${id}`, {
            observe: 'body'
        });
    }
    getPostsByTopic(topic) {
        return this._http.get(`https://vilhena-blog-backend.herokuapp.com/posts/topic/${topic}`, {
            observe: 'body'
        });
    }
    getPostById(id) {
        return this._http.get(`https://vilhena-blog-backend.herokuapp.com/posts/post/${id}`, {
            observe: 'body'
        });
    }
    removePost(id) {
        return this._http.delete(`https://vilhena-blog-backend.herokuapp.com/posts/delete/${id}`);
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ni/8":
/*!************************************************!*\
  !*** ./src/app/views/topic/topic.component.ts ***!
  \************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post/post.component */ "YzH7");







function TopicComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Opa, ainda n\u00E3o tem nenhum post sobre esse assunto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopicComponent_app_post_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 3);
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r2);
} }
class TopicComponent {
    constructor(_route, _location, _backendService) {
        this._route = _route;
        this._location = _location;
        this._backendService = _backendService;
        this.topic = '';
        this.topicString = '';
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.topic = params.topic;
            this._backendService.getPostsByTopic(this.topic)
                .subscribe(data => {
                this.posts = data;
                this.posts.sort((a, b) => { return b.creation_date - a.creation_date; });
                this.topicString = this.posts[0].topics[0];
                this.posts.forEach((post) => {
                    if (post.topics.length != 1) {
                        post.topics.forEach((topic) => {
                            if (topic.substr(0, 3).toLowerCase() == this.topic.substr(0, 3)) {
                                this.topicString = topic;
                            }
                        });
                    }
                });
            }, error => console.log(error));
        });
    }
    navigateBack() {
        this._location.back();
    }
}
TopicComponent.ɵfac = function TopicComponent_Factory(t) { return new (t || TopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"])); };
TopicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopicComponent, selectors: [["app-topic"]], decls: 8, vars: 9, consts: [[4, "ngIf"], [3, "post", 4, "ngFor", "ngForOf"], [1, "btn", 3, "click"], [3, "post"]], template: function TopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopicComponent_h1_4_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopicComponent_app_post_5_Template, 1, 1, "app-post", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicComponent_Template_button_click_6_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mb-5", ctx.posts.length != 0)("mb-4", ctx.posts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.topicString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mt-3", ctx.posts.length == 0);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 3rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\n\r\n.info-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 1.75rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.buttons-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    background-color: #000000;\r\n    border: 3px solid #000000;\r\n    transition: all 0.375s ease-in-out;\r\n    font-weight: bold;\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #292929;\r\n}\r\n\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJ0b3BpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuaDJ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5pbmZvLWRpdiBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5oMixwLGF7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5idXR0b25zLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbn1cclxuLmxpZ2h0ZXItdGV4dHtcclxuICAgIGNvbG9yOiByZ2JhKDI4LCAyOCwgMjgsIDAuNSk7XHJcbn0iXX0= */", "@media (max-width: 1200px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 970px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 780px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljLnJlc3BvbnNpdml0eS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOzs7QUFHQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJ0b3BpYy5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTcwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzgwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topic',
                templateUrl: './topic.component.html',
                styleUrls: ['./topic.component.css', './topic.responsivity.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "s4XM":
/*!**************************************************!*\
  !*** ./src/app/views/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post/post.component */ "YzH7");







function SearchComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nenhum post sobre esse assunto ainda.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_app_post_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 4);
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r2);
} }
class SearchComponent {
    constructor(_route, _backendService, _location) {
        this._route = _route;
        this._backendService = _backendService;
        this._location = _location;
        this.query = '';
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.query = params.query;
        });
        this._backendService.getAllPosts()
            .subscribe(data => {
            this.posts = data;
            let formattedPosts = [];
            this.posts.forEach((post) => {
                let title = this.slugify(post.title);
                if (title.includes(this.query)) {
                    formattedPosts.push(post);
                }
            });
            this.posts = formattedPosts;
            this.posts.sort((a, b) => { return b.creation_date - a.creation_date; });
        }, error => console.log(error));
    }
    navigateBack() {
        this._location.back();
    }
    slugify(str) {
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();
        var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        return str;
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 8, vars: 8, consts: [["style", "font-size: 1.5rem;", 4, "ngIf"], [3, "post", 4, "ngFor", "ngForOf"], [1, "btn", 3, "click"], [2, "font-size", "1.5rem"], [3, "post"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resultados da busca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_p_4_Template, 2, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_app_post_5_Template, 1, 1, "app-post", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_6_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mb-5", ctx.posts.length != 0)("mb-4", ctx.posts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mt-3", ctx.posts.length == 0);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 3rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\n\r\n.info-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 1.75rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.buttons-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    background-color: #000000;\r\n    border: 3px solid #000000;\r\n    transition: all 0.375s ease-in-out;\r\n    font-weight: bold;\r\n    padding-top: .5rem;\r\n    padding-bottom: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    color: #ffffff;\r\n    background-color: #292929;\r\n}\r\n\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5oMntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmluZm8tZGl2IGgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbmgyLHAsYXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuLmJ1dHRvbnMtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM3NXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxufVxyXG4ubGlnaHRlci10ZXh0e1xyXG4gICAgY29sb3I6IHJnYmEoMjgsIDI4LCAyOCwgMC41KTtcclxufSJdfQ== */", "@media (max-width: 1200px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 970px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 780px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic2VhcmNoLnJlc3BvbnNpdml0eS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgIG1haW57XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCl7XHJcbiAgICBtYWlue1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css', './search.responsivity.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/about/about.component */ "7wzR");
/* harmony import */ var _views_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/admin-home/admin-home.component */ "LZMi");
/* harmony import */ var _views_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/admin-posts/admin-posts.component */ "byts");
/* harmony import */ var _views_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/admin-users/admin-users.component */ "Wqks");
/* harmony import */ var _views_article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/article/article.component */ "8EYF");
/* harmony import */ var _views_date_date_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/date/date.component */ "B98X");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/profile-edit/profile-edit.component */ "R2KH");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/search/search.component */ "s4XM");
/* harmony import */ var _views_topic_topic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/topic/topic.component */ "ni/8");
/* harmony import */ var _views_topics_topics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/topics/topics.component */ "buOa");
/* harmony import */ var _views_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/write-post/write-post.component */ "9sPd");



















const routes = [
    { path: "", component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: "inicio", component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: "sobre", component: _views_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: "login", component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "cadastro", component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: "assuntos", component: _views_topics_topics_component__WEBPACK_IMPORTED_MODULE_15__["TopicsComponent"] },
    { path: "assunto/:topic", component: _views_topic_topic_component__WEBPACK_IMPORTED_MODULE_14__["TopicComponent"] },
    { path: "data/:year/:month", component: _views_date_date_component__WEBPACK_IMPORTED_MODULE_7__["DateComponent"] },
    { path: "busca/:query", component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"] },
    { path: "post/:id", component: _views_article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"] },
    { path: "escrever_post", component: _views_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_16__["WritePostComponent"] },
    { path: "perfil", component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] },
    { path: "editar_perfil", component: _views_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProfileEditComponent"] },
    { path: "admin/inicio", component: _views_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"] },
    { path: "admin/usuarios", component: _views_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_5__["AdminUsersComponent"] },
    { path: "admin/posts", component: _views_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_4__["AdminPostsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wF9P":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/backend.service */ "cygB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProfileComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.description);
} }
function ProfileComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sem nenhuma uma descri\u00E7\u00E3o ainda. Voc\u00EA pode ir nas configura\u00E7\u00F5es para editar o seu perfil!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "http://" + ctx_r2.user.site, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.user.site);
} }
function ProfileComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "http://" + ctx_r3.user.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "http://" + ctx_r4.user.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "http://" + ctx_r5.user.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/post", a1]; };
function ProfileComponent_article_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ver mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_article_17_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const post_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removePost(post_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Excluir post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", post_r7.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r7.topics[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", post_r7.author_name, " | ", ctx_r6.formatDate(post_r7.creation_date), " (", ctx_r6.calculateReadTime(post_r7.description), " minutos de leitura)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.splitFirstParagraph(post_r7.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, post_r7._id));
} }
class ProfileComponent {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
        this._backendService.getUser()
            .subscribe(data => {
            console.log(data);
            this.user = data;
        }, error => this._router.navigate(['/login']));
        setTimeout(() => {
            this._backendService.getUserById(this.user._id)
                .subscribe(data => {
                this.user = data;
            }, error => console.log(error));
            this._backendService.getPostsByAuthor(this.user._id)
                .subscribe(data => {
                this.posts = data;
                this.posts.sort((a, b) => { return b.creation_date - a.creation_date; });
            }, error => console.log(error));
        }, 100);
    }
    ngOnInit() {
    }
    encode(str) {
        return encodeURIComponent(str);
    }
    formatDate(date) {
        let localDate = new Date(+date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return localDate;
    }
    calculateReadTime(text) {
        let minutes = text.split(/\s/g).length / 200;
        let readTime = Math.ceil(minutes);
        return readTime;
    }
    splitFirstParagraph(text) {
        return text.split('\n')[0];
    }
    removePost(id) {
        if (confirm("Você tem certeza que deseja remover essa postagem?")) {
            this._backendService.removePost(id)
                .subscribe(data => console.log(data), error => console.log(error));
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 18, vars: 9, consts: [["id", "author"], [3, "src"], [1, "w-100"], [1, "info-div"], [4, "ngIf"], [1, "social-div"], ["target", "_blank", 3, "href", 4, "ngIf"], ["id", "posts"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [1, "fas", "fa-link"], ["title", "Logomarca do Github", 1, "fab", "fa-github-square"], ["title", "Logomarca do Instagram", 1, "fab", "fa-instagram"], ["title", "Logomarca do Linkedin", 1, "fab", "fa-linkedin"], [1, "post-content"], [1, "lighter-text"], [1, "d-flex", "flex-row", "align-self-end", 2, "margin-top", "auto"], [1, "mr-3", 3, "routerLink"], ["href", "/perfil", 1, "text-danger", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_p_8_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_p_9_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_a_11_Template, 3, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_a_13_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileComponent_a_14_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_a_15_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_article_17_Template, 16, 10, "article", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://ui-avatars.com/api/?name=$", ctx.encode(ctx.user.name), "&background=random&rounded=true", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.description != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.description == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.site != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.github != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.instagram != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.linkedin != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["main[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 3rem;\r\n}\r\nsection#author[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n#author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 72px;\r\n    margin-right: 2rem;\r\n}\r\n#author[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n#author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n#author[_ngcontent-%COMP%]   .social-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n#author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #000000;\r\n    text-decoration: none;\r\n    transition: all 0.375s ease-in-out;\r\n}\r\n#author[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: #292929;\r\n}\r\n#author[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n    margin-right: 0.75rem;\r\n}\r\n\r\n#posts[_ngcontent-%COMP%]{\r\n    margin-top: 3rem;\r\n}\r\n#posts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-bottom: 3rem;\r\n}\r\n#posts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    width: 30%;\r\n    height: 200px;\r\n}\r\n#posts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n}\r\n#posts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 1.75rem;\r\n}\r\n#posts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #posts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #posts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n}\r\n#posts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{\r\n    margin-bottom: 0;\r\n}\r\n#posts[_ngcontent-%COMP%]   div.post-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 3%;\r\n    width: 100%;\r\n}\r\n.lighter-text[_ngcontent-%COMP%]{\r\n    color: rgba(28, 28, 28, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBLFlBQVk7QUFDWjtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcbnNlY3Rpb24jYXV0aG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiNhdXRob3IgaW1ne1xyXG4gICAgd2lkdGg6IDcycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuI2F1dGhvciBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNhdXRob3IgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4jYXV0aG9yIC5zb2NpYWwtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuI2F1dGhvciBhe1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNzVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbiNhdXRob3IgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjMjkyOTI5O1xyXG59XHJcbiNhdXRob3IgaXtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcclxufVxyXG4vKiBBcnRpZ29zICovXHJcbiNwb3N0c3tcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuI3Bvc3RzIGFydGljbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG4jcG9zdHMgaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4jcG9zdHMgaDJ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiNwb3N0cyBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcbiNwb3N0cyBoMiwgI3Bvc3RzIHAsICNwb3N0cyBhe1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbiNwb3N0cyBwOmxhc3Qtb2YtdHlwZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuI3Bvc3RzIGRpdi5wb3N0LWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5saWdodGVyLXRleHR7XHJcbiAgICBjb2xvcjogcmdiYSgyOCwgMjgsIDI4LCAwLjUpO1xyXG59Il19 */", "@media (max-width: 1200px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 970px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 780px){\r\n    main[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InByb2ZpbGUucmVzcG9uc2l2aXR5LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgbWFpbntcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KXtcclxuICAgIG1haW57XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KXtcclxuICAgIG1haW57XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css', './profile.responsivity.css']
            }]
    }], function () { return [{ type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map