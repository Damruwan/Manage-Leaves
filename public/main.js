(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/manage-users/manage-users.component */ "./src/app/components/manage-users/manage-users.component.ts");
/* harmony import */ var _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manage-leaves/manage-leaves.component */ "./src/app/components/manage-leaves/manage-leaves.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/request-leaves/request-leaves.component */ "./src/app/components/request-leaves/request-leaves.component.ts");
/* harmony import */ var _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/leave-history/leave-history.component */ "./src/app/components/leave-history/leave-history.component.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");
/* harmony import */ var _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/report-genaration/report-genaration.component */ "./src/app/components/report-genaration/report-genaration.component.ts");
/* harmony import */ var _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/view-user/view-user.component */ "./src/app/components/view-user/view-user.component.ts");
/* harmony import */ var _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/manage-admin/manage-admin.component */ "./src/app/components/manage-admin/manage-admin.component.ts");
/* harmony import */ var _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/update-user/update-user.component */ "./src/app/components/update-user/update-user.component.ts");
/* harmony import */ var _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/update-post/update-post.component */ "./src/app/components/update-post/update-post.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var applicationRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'manageUsers', component: _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_10__["ManageUsersComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'requestLeaves', component: _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_13__["RequestLeavesComponent"] },
    { path: 'leaveHistory', component: _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_14__["LeaveHistoryComponent"] },
    { path: 'addPost', component: _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_15__["AddPostComponent"] },
    { path: 'reportGenaration', component: _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_16__["ReportGenarationComponent"] },
    { path: 'manageLeaves', component: _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_11__["ManageLeavesComponent"] },
    { path: 'viewUser', component: _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_17__["ViewUserComponent"] },
    { path: 'manageAdmin', component: _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_18__["ManageAdminComponent"] },
    { path: 'updateUser', component: _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_19__["UpdateUserComponent"] },
    { path: 'updatePost', component: _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_20__["UpdatePostComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_10__["ManageUsersComponent"],
                _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_11__["ManageLeavesComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_13__["RequestLeavesComponent"],
                _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_14__["LeaveHistoryComponent"],
                _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_15__["AddPostComponent"],
                _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_16__["ReportGenarationComponent"],
                _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_17__["ViewUserComponent"],
                _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_18__["ManageAdminComponent"],
                _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_19__["UpdateUserComponent"],
                _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_20__["UpdatePostComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(applicationRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_request_service__WEBPACK_IMPORTED_MODULE_23__["RequestService"], _services_post_service__WEBPACK_IMPORTED_MODULE_22__["PostService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-post/add-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-post/add-post.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Add Post</h2>\n\t<form (submit) = \"addPost()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>About</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"about\" name =\"about\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Date</label>\n\t\t\t<input type=\"date\" [(ngModel)] = \"date\" name =\"date\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Content</label><br>\n\t\t\t<textarea [(ngModel)]='content' name =\"content\" rows=\"6\" cols=\"100\"></textarea>\n\t\t</div>\n\t\t\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Submit\">\n\t</form>\n</div>\n<hr>\n<div class = \"container\">\n\t<div *ngFor = \"let post of posts\">\n\t\t<div class = \"col-md-2\">\n\t\t\t{{post.name}}\n\t\t</div>\n\t\t<div class = \"col-md-2\">\n\t\t\t{{post.post}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{post.date}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{post.about}}\n\t\t</div>\n\t\t<div class = \"col-md-1\">\n\t\t\t<input type=\"button\" (click) = \"deletePost(post._id)\" value= \"Delete\" class =\"btn btn-danger\">\n\t\t\t<br><br>\n\t\t</div>\n\t\t<div class = \"col-md-1\">\n\t\t\t<input type=\"button\" (click) = \"updatePost(post._id)\" value= \"Edit\" class =\"btn btn-warning\">\n\t\t\t<br><br>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-post/add-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(postService, authService, flashMessage, router) {
        this.postService = postService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.email = this.authService.getAuthEmail();
        this.name = this.authService.getAuthName();
        this.post = this.authService.getAuthPost();
    }
    AddPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPost().subscribe(function (request) {
            _this.posts = request;
        });
    };
    AddPostComponent.prototype.addPost = function () {
        var _this = this;
        var post = {
            name: this.name,
            post: this.post,
            email: this.email,
            about: this.about,
            date: this.date,
            content: this.content
        };
        this.postService.sendPost(post).subscribe(function (request) {
            _this.posts.push(request);
            _this.postService.getAllPost().subscribe(function (request) {
                _this.posts = request;
            });
        });
    };
    AddPostComponent.prototype.deletePost = function (id) {
        var post = this.posts;
        this.postService.deletePost(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < post.length; i++) {
                    if (post[i]._id == id) {
                        post.splice(i, 1);
                    }
                }
            }
        });
    };
    AddPostComponent.prototype.updatePost = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updatePost"], navigationExtras);
    };
    AddPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./add-post.component.html */ "./src/app/components/add-post/add-post.component.html"),
            styles: [__webpack_require__(/*! ./add-post.component.css */ "./src/app/components/add-post/add-post.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<div *ngFor = \"let post of posts\">\n\t  <div class=\"row\" style=\"background-color: #cce0ff;height: 400px;\">\n\t   <div class = \"row\">\n\t   \t  <div class = \"col-md-12\">\n\t\t\t<h1>{{post.about}}</h1>\n\t\t  </div>  \n\t   </div>\t\n       <div class = \"row\">\n\t\t  <div class = \"col-md-1\">\n\t\t\t<h3>Post</h3>\n\t\t  </div>\n\t\t  <div class = \"col-md-1\">\n\t\t\t<h3>by</h3>\n\t\t  </div>\n\t\t  <div class = \"col-md-1\">\n\t\t\t<h3>{{post.name}}</h3>\n\t\t  </div>\n\t\t  <div class = \"col-md-1\">\n\t\t\t<h3>({{post.post}})</h3>\n\t\t  </div>\n\t\t  <div class = \"col-md-1\">\n\t\t\t<h3>On</h3>\n\t\t  </div>\n\t\t  <div class = \"col-md-4\">\n\t\t\t<h3>{{post.date}}</h3>\n\t\t  </div>\t\n\t   </div>\n\t   <br><br>\n\t   <div class = \"row\">\n\t   \t  <div class = \"col-md-12\">\n\t   \t    <p>{{post.content}}</p>\n\t   \t  </div>  \n\t   </div>\n\t  </div>\n\t  <br><br>\n   </div>\t\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPost().subscribe(function (request) {
            _this.posts = request;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2>Leaves History</h2>\n\t<br><br>\n\t<div *ngFor = \"let hry of history\">\n\t\t<div class = \"col-md-3\">\n\t\t\t{{hry.date}}\n\t\t</div>\n\t\t<div class = \"col-md-2\">\n\t\t\t{{hry.reason}}\n\t\t</div>\n\t\t<div class = \"col-md-5\">\n\t\t\t{{hry.describe}}\n\t\t</div>\n\t\t<div class = \"col-md-2\">\n\t\t\t{{hry.state}}\n\t\t</div>\n\t\t<br><br>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.ts ***!
  \*********************************************************************/
/*! exports provided: LeaveHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveHistoryComponent", function() { return LeaveHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaveHistoryComponent = /** @class */ (function () {
    function LeaveHistoryComponent(authService, requestService) {
        this.authService = authService;
        this.requestService = requestService;
    }
    LeaveHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.authService.getAuthEmail();
        this.requestService.viewHistory(this.email).subscribe(function (user) {
            _this.history = user;
        });
    };
    LeaveHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-history',
            template: __webpack_require__(/*! ./leave-history.component.html */ "./src/app/components/leave-history/leave-history.component.html"),
            styles: [__webpack_require__(/*! ./leave-history.component.css */ "./src/app/components/leave-history/leave-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], LeaveHistoryComponent);
    return LeaveHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\">Login</h2>\n\t<form (submit) = \"loginUser()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\">\n\t\t</div>\n\t\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\">\n\t\t</div>\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Login\">\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authService.storeData(res.token, res.id, res.name, res.level, res.email, res.post);
                _this.flashMessage.show("You're Loggedin", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Register Users</h2>\n\t<form (submit) = \"registerData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"full_name\" name =\"full_name\" class = \"form-control\">\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Phone No.</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"phone\" name =\"phone\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"username\" name =\"username\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Level</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"state\" name =\"state\" class = \"form-control\" required>\n\t\t</div>\n\t\t\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Submit\">\n\t</form>\n</div>\n<hr>\n<div class = \"container\">\n\t<div *ngFor = \"let user of users\">\n\t\t<div class = \"col-md-4\">\n\t\t\t{{user.full_name}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{user.post}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{user.phone}}\n\t\t</div>\n\t\t<div class = \"col-md-1\">\n\t\t\t<input type=\"button\" (click) = \"deleteUser(user._id)\" value= \"Delete\" class =\"btn btn-danger\">\n\t\t\t<br><br>\n\t\t</div>\n\t\t<div class = \"col-md-1\">\n\t\t\t<input type=\"button\" (click) = \"updateUser(user._id)\" value= \"Edit\" class =\"btn btn-warning\">\n\t\t\t<br><br>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminComponent", function() { return ManageAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageAdminComponent = /** @class */ (function () {
    function ManageAdminComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ManageAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllUsers().subscribe(function (user) {
            _this.users = user;
        });
    };
    ManageAdminComponent.prototype.registerData = function () {
        var _this = this;
        this.checkPost();
        var user = {
            full_name: this.full_name,
            post: this.post,
            phone: this.phone,
            username: this.username,
            email: this.email,
            password: this.password,
            state: this.state
        };
        this.authService.registerUser(user).subscribe(function (user) {
            _this.users.push(user);
            _this.authService.getUser().subscribe(function (user) {
                _this.users = user;
            });
        });
    };
    ManageAdminComponent.prototype.checkPost = function () {
        if (this.state == '0') {
            this.post = 'head';
        }
        else if (this.state == '1') {
            this.post = 'admin';
        }
        else if (this.state == '2') {
            this.post = 'staff';
        }
    };
    ManageAdminComponent.prototype.deleteUser = function (id) {
        var user = this.users;
        this.authService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < user.length; i++) {
                    if (user[i]._id == id) {
                        user.splice(i, 1);
                    }
                }
            }
        });
    };
    ManageAdminComponent.prototype.updateUser = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updateUser"], navigationExtras);
    };
    ManageAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-admin',
            template: __webpack_require__(/*! ./manage-admin.component.html */ "./src/app/components/manage-admin/manage-admin.component.html"),
            styles: [__webpack_require__(/*! ./manage-admin.component.css */ "./src/app/components/manage-admin/manage-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageAdminComponent);
    return ManageAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>All Requested Leaves</h2>\n<br><br>\n\t<div *ngFor = \"let request of requests\">\n\t\t<div class = \"col-md-1\">\n\t\t\t{{request.name}}\n\t\t</div>\n\t\t<div class = \"col-md-1\">\n\t\t\t{{request.post}}\n\t\t</div>\n\t\t<div class = \"col-md-2\">\n\t\t\t{{request.date}}\n\t\t</div>\n\t\t<div class = \"col-md-2\">\n\t\t\t{{request.reason}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{request.describe}}\n\t\t</div>\n\t\t<div class = \"col-md-1\">\n\t\t\t<input type=\"button\" (click) = \"viewUser(request.email)\" value= \"History\" class =\"btn btn-success\">\n\t\t\t<br><br>\n\t\t</div>\n\t\t<div class = \"col-md-1\">\n\t\t\t<input type=\"button\" (click) = \"acceptRequest(request)\" value= \"Accept\" class =\"btn btn-success\">\n\t\t\t<br><br>\n\t\t</div>\n\t\t<div class = \"col-md-1\">\n\t\t\t<input type=\"button\" (click) = \"deleteRequest(request)\" value= \"Cancel\" class =\"btn btn-danger\">\n\t\t\t<br><br>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManageLeavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLeavesComponent", function() { return ManageLeavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageLeavesComponent = /** @class */ (function () {
    function ManageLeavesComponent(requestService, flashMessage, router) {
        this.requestService = requestService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ManageLeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.getAllRequest().subscribe(function (request) {
            _this.requests = request;
        });
    };
    ManageLeavesComponent.prototype.acceptRequest = function (request) {
        var _this = this;
        this.user = request;
        this.id = request._id;
        this.requestService.acceptRequest(this.user).subscribe(function (res) {
            if (res.state) {
                var requests = _this.requests;
                _this.requestService.deleteRequest(_this.id).subscribe(function (data) {
                    if (data.n == 1) {
                        for (var i = 0; i < requests.length; i++) {
                            if (requests[i]._id == _this.id) {
                                requests.splice(i, 1);
                            }
                        }
                    }
                });
                _this.flashMessage.show("Accepted Successfuly", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
        });
    };
    ManageLeavesComponent.prototype.deleteRequest = function (request) {
        var _this = this;
        this.user = request;
        this.id = request._id;
        this.requestService.notacceptRequest(this.user).subscribe(function (res) {
            if (res.state) {
                var requests = _this.requests;
                _this.requestService.deleteRequest(_this.id).subscribe(function (data) {
                    if (data.n == 1) {
                        for (var i = 0; i < requests.length; i++) {
                            if (requests[i]._id == _this.id) {
                                requests.splice(i, 1);
                            }
                        }
                    }
                });
                _this.flashMessage.show("Not Accepted ", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
        });
    };
    ManageLeavesComponent.prototype.viewUser = function (email) {
        var navigationExtras = {
            queryParams: {
                "email": email
            }
        };
        this.router.navigate(["/viewUser"], navigationExtras);
    };
    ManageLeavesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-leaves',
            template: __webpack_require__(/*! ./manage-leaves.component.html */ "./src/app/components/manage-leaves/manage-leaves.component.html"),
            styles: [__webpack_require__(/*! ./manage-leaves.component.css */ "./src/app/components/manage-leaves/manage-leaves.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageLeavesComponent);
    return ManageLeavesComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Register Staff</h2>\n\t<form (submit) = \"registerData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"full_name\" name =\"full_name\" class = \"form-control\">\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Phone No.</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"phone\" name =\"phone\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"username\" name =\"username\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n\t\t</div>\n\t\t\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Submit\">\n\t</form>\n</div>\n<hr>\n<div class = \"container\">\n\t<div *ngFor = \"let user of users\">\n\t\t<div class = \"col-md-3\">\n\t\t\t{{user.full_name}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{user.post}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{user.phone}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t<input type=\"button\" (click) = \"deleteUser(user._id)\" value= \"Delete\" class =\"btn btn-danger\">\n\t\t\t<br><br>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            _this.users = user;
        });
    };
    ManageUsersComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            full_name: this.full_name,
            post: 'staff',
            phone: this.phone,
            username: this.username,
            email: this.email,
            password: this.password,
            state: '2'
        };
        this.authService.registerUser(user).subscribe(function (user) {
            _this.users.push(user);
            _this.authService.getUser().subscribe(function (user) {
                _this.users = user;
            });
        });
    };
    ManageUsersComponent.prototype.deleteUser = function (id) {
        var user = this.users;
        this.authService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < user.length; i++) {
                    if (user[i]._id == id) {
                        user.splice(i, 1);
                    }
                }
            }
        });
    };
    ManageUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-users',
            template: __webpack_require__(/*! ./manage-users.component.html */ "./src/app/components/manage-users/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./manage-users.component.css */ "./src/app/components/manage-users/manage-users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"http://ucsc.cmb.ac.lk/\">UCSC</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">About</a></li>\n      </ul>\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['/login']\">Login</a></li>\n\n        <li *ngIf=\"authService.loggedIn()\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Hello {{user.getAuthName()}} <span class=\"caret\"></span></a>\n        \n          <ul class=\"dropdown-menu\">\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin() || authService.isHead()\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin()\"><a [routerLink]=\"['/requestLeaves']\">Request Leaves</a></li>\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin()\"><a [routerLink]=\"['/leaveHistory']\">History of Leaves</a></li>\n            <li *ngIf=\"authService.isAdmin()\"><a [routerLink]=\"['/manageUsers']\">Manage Staff</a></li>\n            <li *ngIf=\"authService.isAdmin() || authService.isHead()\"><a [routerLink]=\"['/addPost']\">Add Post</a></li>\n            <li *ngIf=\"authService.isAdmin()\"><a [routerLink]=\"['/reportGenaration']\">Report Genaration</a></li>\n            <li *ngIf=\"authService.isHead()\"><a [routerLink]=\"['/manageAdmin']\">Manage Users</a></li>\n            <li *ngIf=\"authService.isHead()\"><a [routerLink]=\"['/manageLeaves']\">Manage Leaves</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\" (click)=\"logoutUser()\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, flashMessage, user) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.user = user;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutUser = function () {
        this.authService.logout();
        this.flashMessage.show("You're Logged out", { cssClass: 'alert-success', times: 3000 });
        this.router.navigate(['']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n\t<div *ngIf=\"user\">\n\t\t<div class = \"row\">\n\t\t\tNAME : {{user.full_name}}\n\t\t</div>\n\t\t<br>\n\t\t<div class = \"row\">\n\t\t\tPOST : {{user.post}}\n\t\t</div>\n\t\t<br>\n\t\t<div class = \"row\">\n\t\t\tCONTACT NO : {{user.phone}}\n\t\t</div>\n\t\t<br>\n\t\t<div class = \"row\">\n\t\t\tUSERNAME : {{user.username}}\n\t\t</div>\n\t\t<br>\n\t\t<div class = \"row\">\n\t\t\tEMAIL : {{user.email}}\n\t\t</div>\n\t\t<br>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.user;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<div *ngFor = \"let user of users\">\n\t\t<div *ngIf = \"user.state != '0'\">\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t{{user.full_name}}\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t{{user.post}}\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t{{user.email}}\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<input type=\"button\" (click) = \"viewByMonth(user.email)\" value= \"By Monyh\" class =\"btn btn-success\">\n\t\t\t\t<br><br>\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<input type=\"button\" (click) = \"viewByYear(user.email)\" value= \"By Year\" class =\"btn btn-success\">\n\t\t\t\t<br><br>\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<input type=\"button\" (click) = \"viewAll(user.email)\" value= \"All\" class =\"btn btn-success\">\n\t\t\t\t<br><br>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ReportGenarationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGenarationComponent", function() { return ReportGenarationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportGenarationComponent = /** @class */ (function () {
    function ReportGenarationComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ReportGenarationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            _this.users = user;
        });
    };
    ReportGenarationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-genaration',
            template: __webpack_require__(/*! ./report-genaration.component.html */ "./src/app/components/report-genaration/report-genaration.component.html"),
            styles: [__webpack_require__(/*! ./report-genaration.component.css */ "./src/app/components/report-genaration/report-genaration.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReportGenarationComponent);
    return ReportGenarationComponent;
}());



/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Request Leaves</h2>\n\t<form (submit) = \"request()\">\n\t\t\n\t\t<div class = \"form-group\">\n\t\t\t<label>Date</label>\n\t\t\t<input type=\"date\" [(ngModel)] = \"date\" name =\"date\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Reason</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"reason\" name =\"reason\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>More Text</label><br>\n\t\t\t<textarea [(ngModel)]='describe' name =\"describe\" rows=\"6\" cols=\"100\"></textarea>\n\t\t</div>\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Submit\">\n\t</form>\n</div>\n<hr>\n<div class = \"container\">\n\t<div *ngFor = \"let request of requests\">\n\t\t<div class = \"col-md-3\">\n\t\t\t{{request.date}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{request.reason}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t{{request.describe}}\n\t\t</div>\n\t\t<div class = \"col-md-3\">\n\t\t\t<input type=\"button\" (click) = \"deleteRequest(request._id)\" value= \"Delete\" class =\"btn btn-danger\">\n\t\t\t<br><br>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestLeavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestLeavesComponent", function() { return RequestLeavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestLeavesComponent = /** @class */ (function () {
    function RequestLeavesComponent(requestService, authService, flashMessage, router) {
        this.requestService = requestService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.email = this.authService.getAuthEmail();
        this.name = this.authService.getAuthName();
        this.post = this.authService.getAuthPost();
    }
    RequestLeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.getRequest(this.email).subscribe(function (request) {
            _this.requests = request;
        });
    };
    RequestLeavesComponent.prototype.request = function () {
        var _this = this;
        var request = {
            name: this.name,
            post: this.post,
            email: this.email,
            date: this.date,
            reason: this.reason,
            describe: this.describe
        };
        this.requestService.sendRequest(request).subscribe(function (request) {
            _this.requests.push(request);
            _this.requestService.getRequest(_this.email).subscribe(function (request) {
                _this.requests = request;
            });
        });
    };
    RequestLeavesComponent.prototype.deleteRequest = function (id) {
        var request = this.requests;
        this.requestService.deleteRequest(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < request.length; i++) {
                    if (request[i]._id == id) {
                        request.splice(i, 1);
                    }
                }
            }
        });
    };
    RequestLeavesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-leaves',
            template: __webpack_require__(/*! ./request-leaves.component.html */ "./src/app/components/request-leaves/request-leaves.component.html"),
            styles: [__webpack_require__(/*! ./request-leaves.component.css */ "./src/app/components/request-leaves/request-leaves.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestLeavesComponent);
    return RequestLeavesComponent;
}());



/***/ }),

/***/ "./src/app/components/update-post/update-post.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-post/update-post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Update Posts</h2>\n\t<form (submit) = \"updateData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>About</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"about\" name =\"about\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Date</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"date\" name =\"date\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Content</label><br>\n\t\t\t<textarea [(ngModel)]='content' name =\"content\" rows=\"6\" cols=\"100\"></textarea>\n\t\t</div>\n\t\t<br>\n        <div class = \"form-group\">\n\t\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Update\">\n        </div>\n        <div class = \"form-group\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-warning\">\n        </div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/update-post/update-post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostComponent", function() { return UpdatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdatePostComponent = /** @class */ (function () {
    function UpdatePostComponent(route, postService, flashMessage, router) {
        var _this = this;
        this.route = route;
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    UpdatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPostToUpdate(this.id).subscribe(function (post) {
            _this.name = post.name,
                _this.post = post.post,
                _this.email = post.email,
                _this.about = post.about,
                _this.date = post.date,
                _this.content = post.content;
        });
    };
    UpdatePostComponent.prototype.updateData = function () {
        var _this = this;
        var post = {
            name: this.name,
            post: this.post,
            email: this.email,
            about: this.about,
            date: this.date,
            content: this.content
        };
        this.postService.updatePost(this.id, post).subscribe(function (res) {
            if (res) {
                _this.flashMessage.show("Update Successfuly", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/addPost']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/addPost']);
            }
        });
    };
    UpdatePostComponent.prototype.redirectBack = function () {
        this.router.navigate(['/addPost']);
    };
    UpdatePostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-post',
            template: __webpack_require__(/*! ./update-post.component.html */ "./src/app/components/update-post/update-post.component.html"),
            styles: [__webpack_require__(/*! ./update-post.component.css */ "./src/app/components/update-post/update-post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdatePostComponent);
    return UpdatePostComponent;
}());



/***/ }),

/***/ "./src/app/components/update-user/update-user.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-user/update-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Update Users</h2>\n\t<form (submit) = \"updateData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"full_name\" name =\"full_name\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Phone No.</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"phone\" name =\"phone\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"username\" name =\"username\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n\t\t</div>\n\t\t<h2 class = \"page-header\"> Grant Access</h2>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Level</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"state\" name =\"state\" class = \"form-control\" required>\n\t\t</div>\n\t\t<br>\n        <div class = \"form-group\">\n\t\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Update\">\n        </div>\n        <div class = \"form-group\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-warning\">\n        </div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/update-user/update-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(route, authService, flashMessage, router) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserToUpdate(this.id).subscribe(function (user) {
            _this.full_name = user.full_name,
                _this.phone = user.phone,
                _this.username = user.username,
                _this.email = user.email,
                _this.password = user.password,
                _this.state = user.state,
                _this.beforeState = user.state;
        });
    };
    UpdateUserComponent.prototype.updateData = function () {
        var _this = this;
        this.checkPost();
        var user = {
            full_name: this.full_name,
            post: this.post,
            phone: this.phone,
            username: this.username,
            email: this.email,
            password: this.password,
            state: this.state
        };
        this.authService.updateUser(this.id, user).subscribe(function (res) {
            if (res) {
                if ((_this.beforeState != _this.state) && (_this.id == _this.authService.getAuthId())) {
                    _this.flashMessage.show("Your Level Update Successfuly Please Login as the new Role", { cssClass: 'alert-success', times: 3000 });
                    _this.authService.logout();
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show("Update Successfuly", { cssClass: 'alert-success', times: 3000 });
                    _this.router.navigate(['/manageAdmin']);
                }
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageAdmin']);
            }
        });
    };
    UpdateUserComponent.prototype.redirectBack = function () {
        this.router.navigate(['/manageAdmin']);
    };
    UpdateUserComponent.prototype.checkPost = function () {
        if (this.state == '0') {
            this.post = 'head';
        }
        else if (this.state == '1') {
            this.post = 'admin';
        }
        else if (this.state == '2') {
            this.post = 'staff';
        }
    };
    UpdateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__(/*! ./update-user.component.html */ "./src/app/components/update-user/update-user.component.html"),
            styles: [__webpack_require__(/*! ./update-user.component.css */ "./src/app/components/update-user/update-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/components/view-user/view-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/view-user/view-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2>Leaves History</h2>\n\t<br><br>\n\t<div *ngFor = \"let hry of history\">\n\t\t<div class = \"col-md-3\">\n\t\t\t{{hry.date}}\n\t\t</div>\n\t\t<div class = \"col-md-2\">\n\t\t\t{{hry.reason}}\n\t\t</div>\n\t\t<div class = \"col-md-5\">\n\t\t\t{{hry.describe}}\n\t\t</div>\n\t\t<div class = \"col-md-2\">\n\t\t\t{{hry.state}}\n\t\t</div>\n\t\t<br><br>\n\t</div>\n\t<br><br>\n\t<div class = \"col-md-3\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-success\">\n\t\t\t<br><br>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/view-user/view-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(route, requestService, router) {
        var _this = this;
        this.route = route;
        this.requestService = requestService;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.email = params["email"];
        });
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewHistory(this.email).subscribe(function (user) {
            _this.history = user;
        });
    };
    ViewUserComponent.prototype.redirectBack = function () {
        this.router.navigate(['/manageLeaves']);
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/components/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.css */ "./src/app/components/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/manageUsers", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/login", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        this.fetchToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ "Authorization": this.authtoken });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get("http://localhost:3000/user/profile", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUser = function () {
        return this.http.get('http://localhost:3000/user/manageUsers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUserToUpdate = function (id) {
        return this.http.get('http://localhost:3000/user/getUser/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.updateUser = function (id, user) {
        return this.http.put('http://localhost:3000/user/updateUser/' + id, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAllUsers = function () {
        return this.http.get('http://localhost:3000/user/manageAdmin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteUser = function (id) {
        return this.http.delete('http://localhost:3000/user/manageUsers/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.fetchToken = function () {
        var token = localStorage.getItem("tokenid");
        this.authtoken = token;
    };
    AuthService.prototype.fetchId = function () {
        var id = localStorage.getItem("id");
        this.authid = id;
    };
    AuthService.prototype.fetchName = function () {
        var name = localStorage.getItem("name");
        this.authname = name;
    };
    AuthService.prototype.fetchLevel = function () {
        var level = localStorage.getItem("level");
        this.authlevel = level;
    };
    AuthService.prototype.fetchEmail = function () {
        var email = localStorage.getItem("email");
        this.authemail = email;
    };
    AuthService.prototype.fetchPost = function () {
        var post = localStorage.getItem("post");
        this.authpost = post;
    };
    AuthService.prototype.storeData = function (token, id, name, level, email, post) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("level", level);
        localStorage.setItem("email", email);
        localStorage.setItem("post", post);
    };
    AuthService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        this.fetchToken();
        if (this.authtoken != null) {
            return true;
        }
    };
    AuthService.prototype.getAuthName = function () {
        this.fetchName();
        return this.authname;
    };
    AuthService.prototype.getAuthId = function () {
        this.fetchId();
        return this.authid;
    };
    AuthService.prototype.getAuthEmail = function () {
        this.fetchEmail();
        return this.authemail;
    };
    AuthService.prototype.getAuthPost = function () {
        this.fetchPost();
        return this.authpost;
    };
    AuthService.prototype.isHead = function () {
        this.fetchLevel();
        if (this.authlevel == '0') {
            return true;
        }
    };
    AuthService.prototype.isAdmin = function () {
        this.fetchLevel();
        if (this.authlevel == '1') {
            return true;
        }
    };
    AuthService.prototype.isStaff = function () {
        this.fetchLevel();
        if (this.authlevel == '2') {
            return true;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http, router) {
        this.http = http;
        this.router = router;
    }
    PostService.prototype.sendPost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/post/savePost", post, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getAllPost = function () {
        return this.http.get('http://localhost:3000/post/getAllPost').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.delete('http://localhost:3000/post/deletePost/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getPostToUpdate = function (id) {
        return this.http.get('http://localhost:3000/post/getPost/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.updatePost = function (id, post) {
        return this.http.put('http://localhost:3000/post/updatePost/' + id, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = /** @class */ (function () {
    function RequestService(http, router) {
        this.http = http;
        this.router = router;
    }
    RequestService.prototype.sendRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/request/manageRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.getRequest = function (email) {
        return this.http.get('http://localhost:3000/request/manageRequest/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.viewHistory = function (email) {
        return this.http.get('http://localhost:3000/request/viewHistory/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.deleteRequest = function (id) {
        return this.http.delete('http://localhost:3000/request/manageRequest/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.getAllRequest = function () {
        return this.http.get('http://localhost:3000/request/manageRequest').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.acceptRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/request/acceptRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.notacceptRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/request/notacceptRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RequestService);
    return RequestService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sahan\Desktop\Manage-Leaves\Angular-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map