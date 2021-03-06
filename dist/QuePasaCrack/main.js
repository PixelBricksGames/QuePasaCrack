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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stages_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stages/title/title.component */ "./src/app/stages/title/title.component.ts");
/* harmony import */ var _stages_help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stages/help/help.component */ "./src/app/stages/help/help.component.ts");
/* harmony import */ var _stages_game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stages/game/game.component */ "./src/app/stages/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _stages_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]
    },
    {
        path: 'title',
        component: _stages_title_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"]
    },
    {
        path: 'help',
        component: _stages_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"]
    },
    {
        path: 'game',
        component: _stages_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\n  <h1>{{ title }}</h1>\n  <h2>Versión {{ version }}</h2>\n\n  <div class=\"stage\">\n    <app-menu></app-menu>\n    <router-outlet></router-outlet>\n  </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Permanent+Marker\");\n/* COLORS */\n/* PALETTE */\n/* VARIABLES */\nmain {\n  background-color: #FFE082;\n  font-family: 'Permanent Marker', cursive;\n  margin: 0 auto;\n  min-height: 100%;\n  text-align: center;\n  width: 80%;\n  min-width: 640px;\n  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.3); }\nmain h1 {\n    color: #333333;\n    font-size: 50px;\n    margin: 0;\n    padding: 20px 0 0 0; }\nmain h2 {\n    color: #FF6F00;\n    font-size: 24px;\n    margin: -10px 0 0 0;\n    padding: 0 0 20px 0; }\n"

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
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'QuePasaCrack';
        this.version = '1.0.1';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stages_title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stages/title/title.component */ "./src/app/stages/title/title.component.ts");
/* harmony import */ var _stages_help_help_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stages/help/help.component */ "./src/app/stages/help/help.component.ts");
/* harmony import */ var _stages_game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stages/game/game.component */ "./src/app/stages/game/game.component.ts");
/* harmony import */ var _stages_win_win_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stages/win/win.component */ "./src/app/stages/win/win.component.ts");
/* harmony import */ var _stages_lose_lose_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stages/lose/lose.component */ "./src/app/stages/lose/lose.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _stages_title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"],
                _stages_help_help_component__WEBPACK_IMPORTED_MODULE_7__["HelpComponent"],
                _stages_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
                _stages_win_win_component__WEBPACK_IMPORTED_MODULE_9__["WinComponent"],
                _stages_lose_lose_component__WEBPACK_IMPORTED_MODULE_10__["LoseComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.baseURL = 'http://pixelbricksgames.com/games/quepasacrack/';
        // this.baseURL = '/';
        this.retrieveData().subscribe(function (data) {
            _this.data = data.saludos;
        });
    }
    AppService.prototype.resetGame = function () {
        this.enable = false;
        this.saludos = [];
        this.delay = 2000;
    };
    AppService.prototype.addSaludo = function () {
        var current;
        do {
            current = this.getRandom(0, this.data.length);
        } while (Object.values(this.saludos).includes(this.data[current]));
        this.saludos.push(this.data[current]);
        this.setDelay(this.getDelay() - 15);
    };
    AppService.prototype.getDelay = function () {
        return this.delay;
    };
    AppService.prototype.setDelay = function (delay) {
        this.delay = delay;
    };
    AppService.prototype.retrieveData = function () {
        return this.http.get(this.baseURL + "assets/data/saludos.json");
    };
    AppService.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * max) + min;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"menu\">\n\n  <nav class=\"menu-nav\">\n    <button\n      class=\"btn-menu\"\n      routerLink=\"game\"\n      (click)=\"setStage('game')\">\n        JUGAR\n    </button>\n\n    <button\n      class=\"btn-menu\"\n      routerLink=\"help\"\n      (click)=\"setStage('help')\"\n      [hidden]=\"stage == 'help'\">\n        AYUDA\n    </button>\n  </nav>\n\n</section>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Permanent+Marker\");\n/* COLORS */\n/* PALETTE */\n/* VARIABLES */\n.menu {\n  display: none; }\n.menu .menu-nav {\n    display: flex;\n    justify-content: space-between; }\n.menu .menu-nav .btn-menu:nth-child(1) {\n      margin-left: 20px; }\n.menu .menu-nav .btn-menu:nth-child(2) {\n      margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.stage = 'title';
    };
    MenuComponent.prototype.setStage = function (stage) {
        this.stage = stage;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.sass */ "./src/app/components/menu/menu.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/stages/game/game.component.html":
/*!*************************************************!*\
  !*** ./src/app/stages/game/game.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"game\">\n\n  <div class=\"game-bubble\">\n    <div class=\"game-bubble-body\">\n      <span>{{ currentSaludo }}</span>\n    </div>\n    <div class=\"game-bubble-left\" [hidden]=\"isPlayerTurn\"></div>\n    <div class=\"game-bubble-right\" [hidden]=\"!isPlayerTurn\"></div>\n  </div>\n\n  <div class=\"game-players\">\n    <div class=\"game-axel\" [ngClass]=\"axel\"></div>\n    <div class=\"game-middle\">\n      <div class=\"game-message\" [hidden]=\"!isPlayerTurn\">{{ message }}</div>\n      <div class=\"game-score\">\n        <span class=\"game-score-answers\" [ngClass]=\"answerClass\"> {{ rightAnswers }} </span>\n        <span class=\"game-score-level\"> {{ service.saludos.length }} </span>\n      </div>\n    </div>\n    <div class=\"game-pablo\" [ngClass]=\"pablo\"></div>\n  </div>\n  \n  <div class=\"game-buttons\" [ngClass]=\"buttonsClass\">\n    <button class=\"btn-saludo\" *ngFor=\"let saludo of service.data\" (click)=\"saySaludo(saludo)\">{{ saludo }}</button>\n  </div>\n\n  <div [hidden]=\"!playerLose\">\n    <button class=\"btn-again\" (click)=\"initGame()\">VOLVER A JUGAR</button>\n  </div>\n  \n</section>\n"

/***/ }),

/***/ "./src/app/stages/game/game.component.sass":
/*!*************************************************!*\
  !*** ./src/app/stages/game/game.component.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Permanent+Marker\");\n/* COLORS */\n/* PALETTE */\n/* VARIABLES */\n.game .game-bubble {\n  margin: 0 auto;\n  width: 90%; }\n.game .game-bubble .game-bubble-body {\n    background-color: #FFFFFF;\n    border-radius: 20px;\n    font-size: 30px;\n    padding: 20px 0;\n    box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.3); }\n.game .game-bubble .game-bubble-body span {\n      display: block;\n      height: 44px; }\n.game .game-bubble .game-bubble-triangle, .game .game-bubble .game-bubble-left, .game .game-bubble .game-bubble-right {\n    border-style: solid;\n    height: 0;\n    position: relative;\n    width: 0; }\n.game .game-bubble .game-bubble-left {\n    border-color: #FFFFFF transparent transparent transparent;\n    border-width: 50px 50px 0 0;\n    float: left;\n    margin-left: 100px; }\n.game .game-bubble .game-bubble-right {\n    border-color: transparent #FFFFFF transparent transparent;\n    border-width: 0 50px 50px 0;\n    float: right;\n    margin-right: 100px; }\n.game .game-players {\n  padding: 0;\n  display: flex;\n  align-content: space-between;\n  align-items: flex-end;\n  width: 100%; }\n.game .game-players .game-axel,\n  .game .game-players .game-pablo {\n    height: 200px;\n    width: 200px; }\n.game .game-players .game-axel-idle {\n    background-image: url(\"data:image/gif;base64,R0lGODlhyADIALMOAEEzG+iYg9CTiMh8aOvBuO/u7gAAAPmIgnBbOk8/JfSok2FOMPyzn////////wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAzODAxMTc0MDcyMDY4MTE4MDgzQjlCMkJBODQ2RjY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdFNkUwRDdFQzZGQzExRThCN0Q3QTIyNTJEMUE4NEI0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdFNkUwRDdEQzZGQzExRThCN0Q3QTIyNTJEMUE4NEI0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjgwMTE3NDA3MjA2ODExODIyQTk2MDJDOTM4Q0FFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExODA4M0I5QjJCQTg0NkY2NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w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\"); }\n.game .game-players .game-axel-talking {\n    background-image: url(\"data:image/gif;base64,R0lGODlhyADIALMPAEEzG+iYg9CTiMh8aAAAAOvBuO/u7qc0NPmIgnBbOk8/JfSok2FOMPyzn////////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExODA4M0I5QjJCQTg0NkY2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RTZFMEQ3QUM2RkMxMUU4QjdEN0EyMjUyRDFBODRCNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RTZFMEQ3OUM2RkMxMUU4QjdEN0EyMjUyRDFBODRCNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDI4MDExNzQwNzIwNjgxMTgyMkE5NjAyQzkzOENBRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMTgwODNCOUIyQkE4NDZGNjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+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\"); }\n.game .game-players .game-pablo-idle {\n    background-image: url(\"data:image/gif;base64,R0lGODlhyADIALMMANCTiOvBuO/u7p54YAAAACUkJM6nclFQUOnBj+7OpjQ0NP///////wAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAzODAxMTc0MDcyMDY4MTE4MDgzQjlCMkJBODQ2RjY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVCRkY1QjQ3QzZGRDExRThCN0Q3QTIyNTJEMUE4NEI0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVCRkY1QjQ2QzZGRDExRThCN0Q3QTIyNTJEMUE4NEI0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjgwMTE3NDA3MjA2ODExODIyQTk2MDJDOTM4Q0FFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExODA4M0I5QjJCQTg0NkY2NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w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\"); }\n.game .game-players .game-pablo-talking {\n    background-image: url(\"data:image/gif;base64,R0lGODlhyADIALMNANCTiAAAAOvBuJ54YKc0NO/u7iUkJM6nclFQUO7OpunBjzQ0NP///////wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExODA4M0I5QjJCQTg0NkY2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQkZGNUI0QkM2RkQxMUU4QjdEN0EyMjUyRDFBODRCNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQkZGNUI0QUM2RkQxMUU4QjdEN0EyMjUyRDFBODRCNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDc4MDExNzQwNzIwNjgxMTgyMkE5NjAyQzkzOENBRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMTgwODNCOUIyQkE4NDZGNjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+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\"); }\n.game .game-players .game-middle {\n    flex-grow: 1;\n    padding-bottom: 50px; }\n.game .game-players .game-middle .game-message {\n      font-size: 40px;\n      line-height: 1; }\n.game .game-players .game-middle .game-score {\n      color: #333333;\n      font-size: 30px; }\n.game .game-players .game-middle .game-score .game-score-answers:after {\n        color: #333333;\n        content: ' / '; }\n.game .game-players .game-middle .game-score .answer-correct {\n        color: #4CAF50; }\n.game .game-players .game-middle .game-score .answer-wrong {\n        color: #BF360C; }\n.game .game-players .game-middle .game-score .answer-neutral {\n        color: #333333; }\n.game .hidden {\n  display: none;\n  visibility: hidden; }\n.game .visible {\n  display: block;\n  visibility: visible; }\n.game .game-buttons {\n  padding-bottom: 20px; }\n.game .game-buttons .btn-saludo {\n    background-color: #FFFFFF;\n    border-radius: 4px;\n    border: 2px solid #000000;\n    color: #000000;\n    cursor: pointer;\n    display: inline-block;\n    font-family: 'Permanent Marker', cursive;\n    font-size: 18px;\n    margin: 4px;\n    padding: 4px 10px;\n    text-transform: capitalize; }\n.game .game-buttons .btn-saludo:hover {\n      background-color: #000000;\n      border: 2px solid #FFFFFF;\n      color: #FFFFFF; }\n.game .btn-again {\n  background-color: #FFFFFF;\n  border-radius: 4px;\n  border: 2px solid #FF6F00;\n  color: #FF6F00;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Permanent Marker', cursive;\n  font-size: 18px;\n  margin: 4px;\n  padding: 4px 10px;\n  text-transform: uppercase; }\n.game .btn-again:hover {\n    background-color: #FF6F00;\n    border: 2px solid #FFFFFF;\n    color: #FFFFFF; }\n"

/***/ }),

/***/ "./src/app/stages/game/game.component.ts":
/*!***********************************************!*\
  !*** ./src/app/stages/game/game.component.ts ***!
  \***********************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var GameComponent = /** @class */ (function () {
    function GameComponent(service) {
        this.service = service;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.axel = 'game-axel-idle';
        this.pablo = 'game-pablo-idle';
        this.initGame();
    };
    GameComponent.prototype.initGame = function () {
        var _this = this;
        this.service.resetGame();
        this.message = 'Repite la secuencia';
        this.playerLose = false;
        this.service.retrieveData().subscribe(function () {
            _this.service.addSaludo();
            _this.jugadaAxel(-1);
        });
    };
    GameComponent.prototype.saySaludo = function (saludo) {
        var _this = this;
        if (this.service.enable) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.axel = 'game-axel-idle';
                            this.pablo = 'game-pablo-talking';
                            this.currentSaludo = saludo;
                            if (saludo === this.service.saludos[this.rightAnswers]) {
                                this.answerClass = 'answer-correct';
                                this.rightAnswers = this.rightAnswers + 1;
                            }
                            else {
                                this.answerClass = 'answer-wrong';
                                this.playerLose = true;
                            }
                            return [4 /*yield*/, this.delay(this.service.delay)];
                        case 1:
                            _a.sent();
                            this.currentSaludo = '';
                            this.answerClass = 'answer-neutral';
                            this.axel = 'game-axel-idle';
                            this.pablo = 'game-pablo-idle';
                            if (this.playerLose) {
                                this.message = '¡Has perdido!';
                                this.buttonsClass = 'hidden';
                            }
                            else if (this.rightAnswers === this.service.data.length) {
                                this.message = '¡Has ganado!';
                                this.buttonsClass = 'hidden';
                                this.playerLose = true;
                            }
                            else if (this.rightAnswers === this.service.saludos.length) {
                                this.service.addSaludo();
                                this.jugadaAxel(-1);
                            }
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
    };
    GameComponent.prototype.jugadaAxel = function (level) {
        var _this = this;
        this.buttonsClass = 'hidden';
        this.answerClass = 'answer-neutral';
        this.rightAnswers = 0;
        this.isPlayerTurn = false;
        this.service.enable = false;
        if (level === -1) {
            this.currentSaludo = 'Qué pasa';
        }
        else {
            this.currentSaludo = this.service.saludos[level];
        }
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.axel = 'game-axel-talking';
                        this.pablo = 'game-pablo-idle';
                        return [4 /*yield*/, this.delay(this.service.delay)];
                    case 1:
                        _a.sent();
                        if (level < this.service.saludos.length - 1) {
                            level = level + 1;
                            this.jugadaAxel(level);
                        }
                        else {
                            this.currentSaludo = '';
                            this.axel = 'game-axel-idle';
                            this.pablo = 'game-pablo-idle';
                            this.jugadaPablo();
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    GameComponent.prototype.jugadaPablo = function () {
        var _this = this;
        this.isPlayerTurn = true;
        this.service.enable = false;
        this.currentSaludo = 'Qué pasa';
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.axel = 'game-axel-idle';
                        this.pablo = 'game-pablo-talking';
                        return [4 /*yield*/, this.delay(this.service.delay)];
                    case 1:
                        _a.sent();
                        this.buttonsClass = 'visible';
                        this.currentSaludo = '';
                        this.axel = 'game-axel-idle';
                        this.pablo = 'game-pablo-idle';
                        this.service.enable = true;
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    GameComponent.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/stages/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.sass */ "./src/app/stages/game/game.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/stages/help/help.component.html":
/*!*************************************************!*\
  !*** ./src/app/stages/help/help.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"help\">\n\n  <h2 class=\"test\">help works!</h2>\n\n  <ul>\n    <li>Bla bla bla</li>\n    <li>Bla bla bla</li>\n    <li>Bla bla bla</li>\n    <li>Bla bla bla</li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "./src/app/stages/help/help.component.sass":
/*!*************************************************!*\
  !*** ./src/app/stages/help/help.component.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stages/help/help.component.ts":
/*!***********************************************!*\
  !*** ./src/app/stages/help/help.component.ts ***!
  \***********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/stages/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.sass */ "./src/app/stages/help/help.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/stages/lose/lose.component.html":
/*!*************************************************!*\
  !*** ./src/app/stages/lose/lose.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lose works!\n</p>\n"

/***/ }),

/***/ "./src/app/stages/lose/lose.component.sass":
/*!*************************************************!*\
  !*** ./src/app/stages/lose/lose.component.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stages/lose/lose.component.ts":
/*!***********************************************!*\
  !*** ./src/app/stages/lose/lose.component.ts ***!
  \***********************************************/
/*! exports provided: LoseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoseComponent", function() { return LoseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoseComponent = /** @class */ (function () {
    function LoseComponent() {
    }
    LoseComponent.prototype.ngOnInit = function () {
    };
    LoseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lose',
            template: __webpack_require__(/*! ./lose.component.html */ "./src/app/stages/lose/lose.component.html"),
            styles: [__webpack_require__(/*! ./lose.component.sass */ "./src/app/stages/lose/lose.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], LoseComponent);
    return LoseComponent;
}());



/***/ }),

/***/ "./src/app/stages/title/title.component.html":
/*!***************************************************!*\
  !*** ./src/app/stages/title/title.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"title\">\n  <img src=\"https://via.placeholder.com/640x320\">\n</section>"

/***/ }),

/***/ "./src/app/stages/title/title.component.sass":
/*!***************************************************!*\
  !*** ./src/app/stages/title/title.component.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stages/title/title.component.ts":
/*!*************************************************!*\
  !*** ./src/app/stages/title/title.component.ts ***!
  \*************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/stages/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.sass */ "./src/app/stages/title/title.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/stages/win/win.component.html":
/*!***********************************************!*\
  !*** ./src/app/stages/win/win.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  win works!\n</p>\n"

/***/ }),

/***/ "./src/app/stages/win/win.component.sass":
/*!***********************************************!*\
  !*** ./src/app/stages/win/win.component.sass ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stages/win/win.component.ts":
/*!*********************************************!*\
  !*** ./src/app/stages/win/win.component.ts ***!
  \*********************************************/
/*! exports provided: WinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinComponent", function() { return WinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WinComponent = /** @class */ (function () {
    function WinComponent() {
    }
    WinComponent.prototype.ngOnInit = function () {
    };
    WinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-win',
            template: __webpack_require__(/*! ./win.component.html */ "./src/app/stages/win/win.component.html"),
            styles: [__webpack_require__(/*! ./win.component.sass */ "./src/app/stages/win/win.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], WinComponent);
    return WinComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pabrick/Workspace/QuePasaCrack/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map