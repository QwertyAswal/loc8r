(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pageheader/pageheader.component */ "./src/app/pageheader/pageheader.component.ts");
/* harmony import */ var _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html-line-breaks.pipe */ "./src/app/html-line-breaks.pipe.ts");




class AboutComponent {
    constructor() {
        this.pageContent = {
            header: {
                title: 'About Loc8r',
                strapline: ''
            },
            content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\n'
        };
    }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 4, vars: 4, consts: [[3, "content"], [1, "col-12", "col-lg-8", 3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-pageheader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "htmlLineBreaks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, ctx.pageContent.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
    } }, directives: [_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_1__["PageheaderComponent"]], pipes: [_html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_2__["HtmlLineBreaksPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");










const routes = [{
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
    }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
        path: 'location/:locationid',
        component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_5__["DetailsPageComponent"]
    }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-list/home-list.component */ "./src/app/home-list/home-list.component.ts");
/* harmony import */ var _distance_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distance.pipe */ "./src/app/distance.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./framework/framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pageheader/pageheader.component */ "./src/app/pageheader/pageheader.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./html-line-breaks.pipe */ "./src/app/html-line-breaks.pipe.ts");
/* harmony import */ var _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./location-details/location-details.component */ "./src/app/location-details/location-details.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./most-recent-first.pipe */ "./src/app/most-recent-first.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");



















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppModule, bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_5__["FrameworkComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppModule, { declarations: [_home_list_home_list_component__WEBPACK_IMPORTED_MODULE_2__["HomeListComponent"],
        _distance_pipe__WEBPACK_IMPORTED_MODULE_3__["DistancePipe"],
        _framework_framework_component__WEBPACK_IMPORTED_MODULE_5__["FrameworkComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
        _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_8__["PageheaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
        _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_10__["HtmlLineBreaksPipe"],
        _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_11__["LocationDetailsComponent"],
        _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailsPageComponent"],
        _most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_13__["MostRecentFirstPipe"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_2__["HomeListComponent"],
                    _distance_pipe__WEBPACK_IMPORTED_MODULE_3__["DistancePipe"],
                    _framework_framework_component__WEBPACK_IMPORTED_MODULE_5__["FrameworkComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                    _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_8__["PageheaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                    _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_10__["HtmlLineBreaksPipe"],
                    _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_11__["LocationDetailsComponent"],
                    _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailsPageComponent"],
                    _most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_13__["MostRecentFirstPipe"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_5__["FrameworkComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/app/storage.ts");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loc8r-data.service */ "./src/app/loc8r-data.service.ts");




class AuthenticationService {
    constructor(storage, loc8rDataService) {
        this.storage = storage;
        this.loc8rDataService = loc8rDataService;
    }
    getToken() {
        return this.storage.getItem('loc8r-token');
    }
    saveToken(token) {
        this.storage.setItem('loc8r-token', token);
    }
    login(user) {
        return this.loc8rDataService.login(user).then((authResp) => {
            this.saveToken(authResp.token);
        });
    }
    register(user) {
        return this.loc8rDataService.register(user).then((authResp) => this.saveToken(authResp.token));
    }
    logout() {
        this.storage.removeItem('loc8r-token');
    }
    isLoggedIn() {
        const token = this.getToken();
        if (!token)
            return false;
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp > (Date.now() / 1000);
    }
    getCurrentUser() {
        if (this.isLoggedIn()) {
            const token = this.getToken();
            const { email, name } = JSON.parse(atob(token.split('.')[1]));
            return { email, name };
        }
        return undefined;
    }
}
AuthenticationService.??fac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_storage__WEBPACK_IMPORTED_MODULE_1__["BROWSER_STORAGE"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__["Loc8rDataService"])); };
AuthenticationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.??fac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_storage__WEBPACK_IMPORTED_MODULE_1__["BROWSER_STORAGE"]]
            }] }, { type: _loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__["Loc8rDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pageheader/pageheader.component */ "./src/app/pageheader/pageheader.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../location-details/location-details.component */ "./src/app/location-details/location-details.component.ts");









function DetailsPageComponent_app_location_details_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-location-details", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("location", ctx_r0.newLocation);
} }
class DetailsPageComponent {
    constructor(loc8rDataService, route) {
        this.loc8rDataService = loc8rDataService;
        this.route = route;
        this.pageContent = {
            header: {
                title: '',
                strapline: ''
            },
            sidebar: ''
        };
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let id = params.get('locationid');
            return this.loc8rDataService.getLocationById(id);
        })).subscribe((newLocation) => {
            this.newLocation = newLocation;
            this.pageContent.header.title = newLocation.name;
            this.pageContent.sidebar = `${newLocation.name} is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.\n\n\nIf you\'ve been and like it - or if you don\'t - please leave a review to help other people just like you.`;
        });
    }
}
DetailsPageComponent.??fac = function DetailsPageComponent_Factory(t) { return new (t || DetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__["Loc8rDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
DetailsPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DetailsPageComponent, selectors: [["app-details-page"]], decls: 5, vars: 3, consts: [[3, "content"], [1, "row"], [1, "col-12", "col-md-8"], ["class", "col-12 col-lg-9", 3, "location", 4, "ngIf"], [1, "col-12", "col-md-4", 3, "content"], [1, "col-12", "col-lg-9", 3, "location"]], template: function DetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-pageheader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DetailsPageComponent_app_location_details_3_Template, 1, 1, "app-location-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-sidebar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.newLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.sidebar);
    } }, directives: [_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_4__["PageheaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_7__["LocationDetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcGFnZS9kZXRhaWxzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DetailsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-page',
                templateUrl: './details-page.component.html',
                styleUrls: ['./details-page.component.css']
            }]
    }], function () { return [{ type: _loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__["Loc8rDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/distance.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/distance.pipe.ts ***!
  \**********************************/
/*! exports provided: DistancePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistancePipe", function() { return DistancePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DistancePipe {
    transform(distance) {
        const isNumeric = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        if (distance && isNumeric(distance)) {
            let thisDistance = '0';
            let unit = 'm';
            if (distance > 1000) {
                thisDistance = (distance / 1000).toFixed(1);
                unit = 'km';
            }
            else {
                thisDistance = Math.floor(distance).toString();
            }
            return thisDistance + unit;
        }
        return '?';
    }
}
DistancePipe.??fac = function DistancePipe_Factory(t) { return new (t || DistancePipe)(); };
DistancePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "distance", type: DistancePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DistancePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'distance'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/framework/framework.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function FrameworkComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FrameworkComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FrameworkComponent_li_14_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.doLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.getUsername(), " ");
} }
class FrameworkComponent {
    constructor(authenticationService, historyService) {
        this.authenticationService = authenticationService;
        this.historyService = historyService;
    }
    ngOnInit() {
    }
    doLogout() {
        this.authenticationService.logout();
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
    getUsername() {
        const user = this.authenticationService.getCurrentUser();
        return user ? user.name : 'Guest';
    }
}
FrameworkComponent.??fac = function FrameworkComponent_Factory(t) { return new (t || FrameworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"])); };
FrameworkComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FrameworkComponent, selectors: [["app-framework"]], decls: 22, vars: 2, consts: [[1, "navbar", "fixed-top", "navbar-expand-md", "navbar-dark"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarMain", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarMain", 1, "navbar-collapse", "collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "about", 1, "nav-link"], [1, "navbar-nav", "justify-content-end"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "login", "class", "nav-link", 4, "ngIf"], ["class", "nav-item dropdown", "routerLinkActive", "active", 4, "ngIf"], [1, "container", "content"], [1, "row"], [1, "col-12"], ["routerLink", "login", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-item", "dropdown"], ["data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"]], template: function FrameworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Loc8r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, FrameworkComponent_a_13_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, FrameworkComponent_li_14_Template, 6, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\u00A9 Property of Qwerty Aswal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1ld29yay9mcmFtZXdvcmsuY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FrameworkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-framework',
                templateUrl: './framework.component.html',
                styleUrls: ['./framework.component.css']
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/geolocation.service.ts":
/*!****************************************!*\
  !*** ./src/app/geolocation.service.ts ***!
  \****************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GeolocationService {
    constructor() { }
    getPosition(cbSuccess, cbError, cbNoGeo) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
        }
        else {
            cbNoGeo();
        }
    }
}
GeolocationService.??fac = function GeolocationService_Factory(t) { return new (t || GeolocationService)(); };
GeolocationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: GeolocationService, factory: GeolocationService.??fac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GeolocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/history.service.ts":
/*!************************************!*\
  !*** ./src/app/history.service.ts ***!
  \************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class HistoryService {
    constructor(router) {
        this.router = router;
        this.urls = [];
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(routerEvent => routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((routerEvent) => {
            const url = routerEvent.urlAfterRedirects;
            this.urls = [...this.urls, url];
        });
    }
    previousUrl() {
        const length = this.urls.length;
        return length > 1 ? this.urls[length - 2] : '/';
    }
    getLastNonLoginUrl() {
        const exclude = ['/login', '/register'];
        const filtered = this.urls.filter(url => !exclude.includes(url));
        const length = filtered.length;
        return length > 0 ? filtered[length - 1] : '/';
    }
}
HistoryService.??fac = function HistoryService_Factory(t) { return new (t || HistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HistoryService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: HistoryService, factory: HistoryService.??fac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HistoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home-list/home-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-list/home-list.component.ts ***!
  \**************************************************/
/*! exports provided: HomeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeListComponent", function() { return HomeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geolocation.service */ "./src/app/geolocation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _distance_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../distance.pipe */ "./src/app/distance.pipe.ts");







function HomeListComponent_div_2_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const facility_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", facility_r3, " ");
} }
function HomeListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, HomeListComponent_div_2_span_20_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const location_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/location/", location_r1._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](location_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", location_r1.rating < 1 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", location_r1.rating < 2 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", location_r1.rating < 3 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", location_r1.rating < 4 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", location_r1.rating < 5 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 20, location_r1.distance));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 22, location_r1.address));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", location_r1.facilities);
} }
class HomeListComponent {
    constructor(loc8rDataService, geolocationService) {
        this.loc8rDataService = loc8rDataService;
        this.geolocationService = geolocationService;
    }
    getLocations(position) {
        this.message = 'Searching For Places Nearby';
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.loc8rDataService.getLocations(lat, lng).then(foundLocations => {
            this.message = foundLocations.length > 0 ? '' : 'No Locations Found';
            this.locations = foundLocations;
        });
    }
    showError(error) {
        this.message = error.message;
    }
    noGeo() {
        this.message = 'GeoLocation not supported by by browser';
    }
    getPosition() {
        this.message = 'Getting your location...';
        this.geolocationService.getPosition(this.getLocations.bind(this), this.showError.bind(this), this.noGeo.bind(this));
    }
    ngOnInit() {
        this.getPosition();
    }
}
HomeListComponent.??fac = function HomeListComponent_Factory(t) { return new (t || HomeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_loc8r_data_service__WEBPACK_IMPORTED_MODULE_1__["Loc8rDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"])); };
HomeListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeListComponent, selectors: [["app-home-list"]], decls: 3, vars: 2, consts: [[1, "error"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "card"], [1, "card-block"], [3, "routerLink"], [1, "badge", "badge-pill", "badge-default", "float-end"], [1, "address"], [1, "facilities"], ["class", "badge badge-warning", 4, "ngFor", "ngForOf"], [1, "badge", "badge-warning"]], template: function HomeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HomeListComponent_div_2_Template, 23, 24, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.locations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_distance_pipe__WEBPACK_IMPORTED_MODULE_5__["DistancePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbGlzdC9ob21lLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-list',
                templateUrl: './home-list.component.html',
                styleUrls: ['./home-list.component.css']
            }]
    }], function () { return [{ type: _loc8r_data_service__WEBPACK_IMPORTED_MODULE_1__["Loc8rDataService"] }, { type: _geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pageheader/pageheader.component */ "./src/app/pageheader/pageheader.component.ts");
/* harmony import */ var _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home-list/home-list.component */ "./src/app/home-list/home-list.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");





class HomepageComponent {
    constructor() {
        this.pageContent = {
            header: {
                title: 'Loc8r',
                strapline: 'find places to with with wifi near you!'
            },
            sidebar: 'Looking for wifi and seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place youare looking for.'
        };
    }
    ngOnInit() {
    }
}
HomepageComponent.??fac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 5, vars: 2, consts: [[3, "content"], [1, "row"], [1, "col-12", "col-md-8"], [1, "col-12", "col-md-4", 3, "content"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-pageheader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-home-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-sidebar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.sidebar);
    } }, directives: [_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_1__["PageheaderComponent"], _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_2__["HomeListComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/html-line-breaks.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/html-line-breaks.pipe.ts ***!
  \******************************************/
/*! exports provided: HtmlLineBreaksPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLineBreaksPipe", function() { return HtmlLineBreaksPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HtmlLineBreaksPipe {
    transform(value) {
        return value.replace(/\n/g, '<br/>');
    }
}
HtmlLineBreaksPipe.??fac = function HtmlLineBreaksPipe_Factory(t) { return new (t || HtmlLineBreaksPipe)(); };
HtmlLineBreaksPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "htmlLineBreaks", type: HtmlLineBreaksPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HtmlLineBreaksPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'htmlLineBreaks'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/loc8r-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/loc8r-data.service.ts ***!
  \***************************************/
/*! exports provided: Loc8rDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loc8rDataService", function() { return Loc8rDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/app/storage.ts");





class Loc8rDataService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiBaseUrl = 'http://localhost:3000/api';
    }
    getLocations(lat, lng) {
        // const lng: number = 72.3;
        // const lat: number = 18.1;
        const maxDistance = 200000;
        const url = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDis=${maxDistance}`;
        return this.http.get(url).toPromise().then(response => response).catch(this.handleError);
    }
    getLocationById(locationid) {
        const url = `${this.apiBaseUrl}/locations/${locationid}`;
        return this.http.get(url).toPromise().then(response => response).catch(this.handleError);
    }
    addReviewById(locationid, formdata) {
        const url = `${this.apiBaseUrl}/locations/${locationid}/reviews`;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${this.storage.getItem('loc8r-token')}`
            })
        };
        return this.http.post(url, formdata, httpOptions).toPromise().then(response => response).catch(this.handleError);
    }
    handleError(error) {
        console.error('Something has gone wrong:', error);
        return Promise.reject(error.message || error);
    }
    login(user) {
        return this.makeAuthApiCall('login', user).then(response => response);
    }
    register(user) {
        return this.makeAuthApiCall('register', user);
    }
    makeAuthApiCall(urlPath, user) {
        const url = `${this.apiBaseUrl}/${urlPath}`;
        return this.http.post(url, user).toPromise().then(response => response).catch(this.handleError);
    }
}
Loc8rDataService.??fac = function Loc8rDataService_Factory(t) { return new (t || Loc8rDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"])); };
Loc8rDataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: Loc8rDataService, factory: Loc8rDataService.??fac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Loc8rDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/location-details/location-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/location-details/location-details.component.ts ***!
  \****************************************************************/
/*! exports provided: LocationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailsComponent", function() { return LocationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../most-recent-first.pipe */ "./src/app/most-recent-first.pipe.ts");
/* harmony import */ var _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html-line-breaks.pipe */ "./src/app/html-line-breaks.pipe.ts");









function LocationDetailsComponent_p_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LocationDetailsComponent_p_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const openingTime_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("", openingTime_r6.days, ": ", openingTime_r6.opening, "-", openingTime_r6.closing, " ");
} }
function LocationDetailsComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LocationDetailsComponent_p_15_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LocationDetailsComponent_p_15_span_2_Template, 2, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const openingTime_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", openingTime_r6.closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", true);
} }
function LocationDetailsComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const facility_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u00A0", facility_r10, "\u00A0");
} }
function LocationDetailsComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LocationDetailsComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r11.formVisible = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Add Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LocationDetailsComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Log in to write review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LocationDetailsComponent_div_36_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r13.formError, " ");
} }
function LocationDetailsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LocationDetailsComponent_div_36_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.onReviewSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Add Your Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, LocationDetailsComponent_div_36_div_5_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Rating ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LocationDetailsComponent_div_36_Template_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r16.review.rating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LocationDetailsComponent_div_36_Template_textarea_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r17.review.reviewText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Submit review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LocationDetailsComponent_div_36_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); ctx_r18.formVisible = false; return ctx_r18.formError = undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.formError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.review.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.review.reviewText);
} }
function LocationDetailsComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "htmlLineBreaks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const review_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", review_r19.rating < 1 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", review_r19.rating < 2 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", review_r19.rating < 3 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", review_r19.rating < 4 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", review_r19.rating < 5 ? "r" : "s", " fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](review_r19.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A0\u00A0\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](15, 18, review_r19.createdOn, "d MMMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 21, review_r19.reviewText), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
class LocationDetailsComponent {
    constructor(loc8rService, authenticationService) {
        this.loc8rService = loc8rService;
        this.authenticationService = authenticationService;
        this.formVisible = false;
        this.review = {
            author: '',
            rating: 5,
            reviewText: ''
        };
    }
    formIsValid() {
        if (this.review.author && this.review.rating && this.review.reviewText)
            return true;
        return false;
    }
    resetAndHideForm() {
        this.formVisible = false;
        this.review.author = '';
        this.review.rating = 5;
        this.review.reviewText = '';
        this.formError = '';
    }
    onReviewSubmit() {
        this.formError = '';
        this.review.author = this.getUsername();
        if (this.formIsValid()) {
            this.loc8rService.addReviewById(this.location._id, this.review)
                .then((review) => {
                let reviews = this.location.reviews.slice(0);
                reviews.unshift(review);
                this.location.reviews = reviews;
                this.resetAndHideForm();
            });
        }
        else {
            this.formError = 'All fields are required. Please try again.';
        }
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
    getUsername() {
        const { name } = this.authenticationService.getCurrentUser();
        return name ? name : 'Guest';
    }
    ngOnInit() {
    }
}
LocationDetailsComponent.??fac = function LocationDetailsComponent_Factory(t) { return new (t || LocationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_loc8r_data_service__WEBPACK_IMPORTED_MODULE_1__["Loc8rDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
LocationDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LocationDetailsComponent, selectors: [["app-location-details"]], inputs: { location: "location" }, decls: 39, vars: 24, consts: [[1, "row"], [1, "col-12", "col-md-6"], [1, "rating"], [1, "card", "card-primary"], [1, "card-block"], [1, "card-title"], ["class", "card-text", 3, "ngSwitch", 4, "ngFor", "ngForOf"], ["class", "badge badge-warning", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "location-map"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgjG37yPyDwQfFDMpErxeMJD-UITAkie7Lg&usqp=CAU", 1, "img-fluid", "rounded"], [1, "col-12"], [1, "card", "card-primary", "review-card"], [1, "card-block", 3, "ngSwitch"], ["class", "btn btn-primary float-end", 3, "click", 4, "ngSwitchCase"], ["routerLink", "/login", "class", "btn btn-primary float-end", 4, "ngSwitchDefault"], ["class", "container", 4, "ngIf"], ["class", "row review", 4, "ngFor", "ngForOf"], [1, "card-text", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "badge", "badge-warning"], [1, "fa", "fa-check"], [1, "btn", "btn-primary", "float-end", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-primary", "float-end"], [1, "container"], ["action", "", 3, "ngSubmit"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group", "row"], ["for", "rating", 1, "col-sm-2", "col-form-label"], [1, "col-md-2", "col-sm-10"], ["id", "rating", "name", "rating", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["for", "review", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["id", "revew", "name", "review", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "float-end", 2, "margin-left", "15px"], ["type", "button", 1, "btn", "btn-dark", "float-end", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"], [1, "row", "review"], [1, "col-12", "no-gutters", "review-header"], [1, "float-end"], [3, "innerHTML"]], template: function LocationDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Opening Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, LocationDetailsComponent_p_15_Template, 3, 2, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, LocationDetailsComponent_span_20_Template, 3, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Location Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, LocationDetailsComponent_button_32_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, LocationDetailsComponent_a_33_Template, 2, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Customer Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, LocationDetailsComponent_div_36_Template, 35, 8, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, LocationDetailsComponent_div_37_Template, 19, 23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "mostRecentFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", ctx.location.rating < 1 ? "r" : "s", " fa-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", ctx.location.rating < 2 ? "r" : "s", " fa-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", ctx.location.rating < 3 ? "r" : "s", " fa-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", ctx.location.rating < 4 ? "r" : "s", " fa-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("fa", ctx.location.rating < 5 ? "r" : "s", " fa-star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.location.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.location.openingTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.location.facilities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.formVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](38, 22, ctx.location.reviews));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]], pipes: [_most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_6__["MostRecentFirstPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_7__["HtmlLineBreaksPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLWRldGFpbHMvbG9jYXRpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LocationDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-location-details',
                templateUrl: './location-details.component.html',
                styleUrls: ['./location-details.component.css']
            }]
    }], function () { return [{ type: _loc8r_data_service__WEBPACK_IMPORTED_MODULE_1__["Loc8rDataService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, { location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pageheader/pageheader.component */ "./src/app/pageheader/pageheader.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");









function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.formError, " ");
} }
class LoginComponent {
    constructor(router, authenticationService, historyService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.historyService = historyService;
        this.pageContent = {
            header: {
                title: 'Sign in to loc8r',
                strapline: ''
            },
            sidebar: ''
        };
        this.formError = '';
        this.credentials = {
            name: '',
            email: '',
            password: ''
        };
    }
    onLoginSubmit() {
        this.formError = '';
        if (!this.credentials.email || !this.credentials.password)
            this.formError = 'All fields are required, please try again';
        else {
            this.doLogin();
        }
    }
    doLogin() {
        this.authenticationService.login(this.credentials)
            .then(() => this.router.navigateByUrl(this.historyService.getLastNonLoginUrl()))
            .catch((message) => this.formError = message);
    }
    ngOnInit() {
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 5, consts: [[3, "content"], [1, "row"], [1, "col-12", "col-md-8"], [1, "lead"], ["routerLink", "/register"], [3, "submit"], ["role", "alert", "class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "row"], ["for", "email", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["id", "email", "name", "email", "placeholder", "Enter your email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "password", "name", "password", "placeholder", "Enter your password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "role", "button", 1, "btn", "btn-primary"], [1, "col-12", "col-md-4", 3, "content"], ["role", "alert", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-pageheader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Not a member? Please ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function LoginComponent_Template_form_submit_8_listener() { return ctx.onLoginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, LoginComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Sign In! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "app-sidebar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.sidebar);
    } }, directives: [_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_4__["PageheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/most-recent-first.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/most-recent-first.pipe.ts ***!
  \*******************************************/
/*! exports provided: MostRecentFirstPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostRecentFirstPipe", function() { return MostRecentFirstPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MostRecentFirstPipe {
    compare(a, b) {
        const createdOnA = a.createdOn;
        const createdOnB = b.createdOn;
        let comparision = 1;
        if (createdOnA > createdOnB)
            comparision = -1;
        return comparision;
    }
    transform(value) {
        if (value && value.length > 0)
            return value.sort(this.compare);
        return null;
    }
}
MostRecentFirstPipe.??fac = function MostRecentFirstPipe_Factory(t) { return new (t || MostRecentFirstPipe)(); };
MostRecentFirstPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "mostRecentFirst", type: MostRecentFirstPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MostRecentFirstPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'mostRecentFirst'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pageheader/pageheader.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pageheader/pageheader.component.ts ***!
  \****************************************************/
/*! exports provided: PageheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageheaderComponent", function() { return PageheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageheaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageheaderComponent.??fac = function PageheaderComponent_Factory(t) { return new (t || PageheaderComponent)(); };
PageheaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageheaderComponent, selectors: [["app-pageheader"]], inputs: { content: "content" }, decls: 6, vars: 2, consts: [[1, "row", "banner"], [1, "col-12"]], template: function PageheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.content.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u00A0", ctx.content.strapline, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VoZWFkZXIvcGFnZWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pageheader',
                templateUrl: './pageheader.component.html',
                styleUrls: ['./pageheader.component.css']
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
/* harmony import */ var _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pageheader/pageheader.component */ "./src/app/pageheader/pageheader.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");









function RegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.formError, " ");
} }
class RegisterComponent {
    constructor(router, authenticationService, historyService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.historyService = historyService;
        this.pageContent = {
            header: {
                title: 'Create New Account',
                strapline: ''
            },
            sidebar: ''
        };
        this.formError = '';
        this.credentials = {
            name: '',
            email: '',
            password: ''
        };
    }
    onRegisterSubmit() {
        this.formError = '';
        if (!this.credentials.name || !this.credentials.email || !this.credentials.password)
            this.formError = 'All fields are required, please try again';
        else {
            this.doRegister();
        }
    }
    doRegister() {
        this.authenticationService.register(this.credentials)
            .then(() => this.router.navigateByUrl(this.historyService.getLastNonLoginUrl()))
            .catch((message) => this.formError = message);
    }
    ngOnInit() {
    }
}
RegisterComponent.??fac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"])); };
RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 35, vars: 6, consts: [[3, "content"], [1, "row"], [1, "col-12", "col-md-8"], [1, "lead"], ["routerLink", "/login"], [3, "submit"], ["role", "alert", "class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "row"], ["for", "name", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["id", "name", "name", "name", "placeholder", "Enter your name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "col-sm-2", "col-form-label"], ["id", "email", "name", "email", "placeholder", "Enter your email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "password", "name", "password", "placeholder", "Enter your password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "role", "button", 1, "btn", "btn-primary"], [1, "col-12", "col-md-4", 3, "content"], ["role", "alert", 1, "alert", "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-pageheader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Already a member? Please ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function RegisterComponent_Template_form_submit_8_listener() { return ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, RegisterComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.credentials.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Register! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "app-sidebar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("content", ctx.pageContent.sidebar);
    } }, directives: [_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_4__["PageheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.??fac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { content: "content" }, decls: 3, vars: 1, consts: [[1, "lead"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.content);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/storage.ts":
/*!****************************!*\
  !*** ./src/app/storage.ts ***!
  \****************************/
/*! exports provided: BROWSER_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_STORAGE", function() { return BROWSER_STORAGE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const BROWSER_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/qwerty/Code/Web Dev/loc8r/app_public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map