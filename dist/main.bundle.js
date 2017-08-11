webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storeme_storeme_component__ = __webpack_require__("../../../../../src/app/storeme/storeme.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var router = [
    { path: '', redirectTo: 'shops', pathMatch: 'full' },
    { path: 'shops', component: __WEBPACK_IMPORTED_MODULE_1__storeme_storeme_component__["a" /* StoremeComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <a class=\"navbar-brand\" routerLink=\"\">Storeme</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_storeme_service__ = __webpack_require__("../../../../../src/app/shared/storeme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storeme_storeme_component__ = __webpack_require__("../../../../../src/app/storeme/storeme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__storeme_storeme_component__["a" /* StoremeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* routes */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__shared_data_service__["a" /* InMemoryDataService */], { delay: 100, passThruUnknownUrl: true }),
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDOboylNx9pht9dkBEBvI04HdP8AfJOL-M'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_storeme_service__["a" /* StoremeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var shops = [
            {
                id: 1,
                title: 'Shop.by',
                work_time: {
                    start: {
                        hours: 10,
                        minutes: 0
                    },
                    end: {
                        hours: 21,
                        minutes: 0
                    }
                },
                address: 'г. Минск, ул.Притыцкого, д.105',
                products: [
                    {
                        id: 1,
                        title: 'Apple iPhone 7 32GB',
                        description: 'Apple iOS, экран 4.7" IPS (750x1334), ОЗУ 2 ГБ, ' +
                            'флэш-память 32 ГБ, камера 12 Мп, аккумулятор 1960 мАч, 1 SIM, цвет черный'
                    },
                    {
                        id: 2,
                        title: 'Apple iPhone 6 16GB',
                        description: 'Apple iOS, экран 4.7" IPS (750x1334), ОЗУ 1 ГБ, ' +
                            'флэш-память 16 ГБ, камера 8 Мп, аккумулятор 1810 мАч, 1 SIM, цвет темно-серыйй'
                    }
                ]
            },
            {
                id: 2,
                title: 'Market.by',
                work_time: {
                    start: {
                        hours: 9,
                        minutes: 0
                    },
                    end: {
                        hours: 16,
                        minutes: 0
                    }
                },
                address: 'г. Минск, ул. Уборевича, 95а',
                products: [
                    {
                        id: 1,
                        title: 'Samsung 960 Evo 250GB',
                        description: 'M.2, PCI Express 3.0 x4, контроллер Samsung Polaris,' +
                            ' микросхемы NAND TLC, последовательный доступ: 3200/1500 MBps, случайный доступ: 330000/300000 IOps'
                    },
                    {
                        id: 2,
                        title: 'Kingston SSDNow UV400 240GB',
                        description: '2.5", SATA 3.0, контроллер Marvell 88SS1074, микросхемы NAND TLC, ' +
                            'последовательный доступ: 550/490 MBps, случайный доступ: 90000/25000 IOps'
                    },
                    {
                        id: 3,
                        title: 'Kingston SSDNow V300 120GB',
                        description: '2.5", SATA 3.0, контроллер SandForce SF-2281, микросхемы NAND MLC, ' +
                            'последовательный доступ: 450/450 MBps, случайный доступ: 85000/55000 IOps'
                    }
                ]
            },
            {
                id: 3,
                title: 'Store.by',
                work_time: {
                    start: {
                        hours: 7,
                        minutes: 0
                    },
                    end: {
                        hours: 23,
                        minutes: 0
                    }
                },
                address: 'г. Минск, ул. Даумана, 23, офис 63',
                products: [
                    {
                        id: 1,
                        title: 'Samsung 850 Evo 250GB',
                        description: '2.5", SATA 3.0, контроллер Samsung MGX, микросхемы 3D V-NAND, последовательный доступ: 540/520 MBps'
                    }
                ]
            }
        ];
        return { shops: shops };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shop.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WorkTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Time; });
var Shop = (function () {
    function Shop(id, title, work_time, address, products) {
        this.id = id;
        this.title = title;
        this.work_time = work_time;
        this.address = address;
        this.products = products;
    }
    return Shop;
}());

var Product = (function () {
    function Product(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    return Product;
}());

var WorkTime = (function () {
    function WorkTime(start, end) {
        this.start = start;
        this.end = end;
    }
    return WorkTime;
}());

var Time = (function () {
    function Time(hours, minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }
    return Time;
}());

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ "../../../../../src/app/shared/storeme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoremeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoremeService = (function () {
    function StoremeService(_http) {
        this._http = _http;
        this.apiURL = 'api/shops';
    }
    StoremeService.prototype.getShops = function () {
        console.log('Shops is loaded!');
        return this._http
            .get(this.apiURL)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    StoremeService.prototype.setShop = function (oldID, shop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = this.apiURL + "/" + oldID;
        console.log('Shop with id: ' + oldID + ' replaced by this store:', shop);
        return this._http
            .put(url, JSON.stringify(shop), options)
            .catch(this.handleError);
    };
    StoremeService.prototype.createShop = function (shop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log('Shop created!', shop);
        return this._http
            .post(this.apiURL, shop, options)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    StoremeService.prototype.deleteShop = function (shop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = this.apiURL + "/" + shop.id;
        console.log('Shop deleted!', shop);
        return this._http
            .delete(url, options)
            .catch(this.handleError);
    };
    StoremeService.prototype.createProduct = function (shop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log('Product is created');
        return this._http
            .put(this.apiURL + "/" + shop.id, JSON.stringify(shop), options)
            .catch(this.handleError);
    };
    StoremeService.prototype.deleteProduct = function (shop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = this.apiURL + "/" + shop.id;
        console.log('Product is deleted!');
        return this._http
            .put(url, JSON.stringify(shop), options)
            .catch(this.handleError);
    };
    StoremeService.prototype.handleError = function (error) {
        console.error('Error', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    StoremeService.prototype.getLoacation = function (shop) {
        var api = 'https://maps.googleapis.com/maps/api/geocode/json?';
        var address = 'address=' + shop;
        var key = '&key=AIzaSyDOboylNx9pht9dkBEBvI04HdP8AfJOL-M';
        var url = api + address + key;
        return this._http
            .get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return StoremeService;
}());
StoremeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], StoremeService);

var _a;
//# sourceMappingURL=storeme.service.js.map

/***/ }),

/***/ "../../../../../src/app/storeme/storeme.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-0 my-4\">\n  <form class=\"col-md-6 col-sm-12 my-sm-4\" [formGroup]=\"sForm\" (ngSubmit)=\"addShop(sForm.value); sForm.reset();\">\n    <h3 class=\"text-center\">Add shop</h3>\n\n    <div class=\"form-group row mx-0\">\n      <label class=\"col-3 col-form-label\" for=\"shop-name\">Shop Name</label>\n      <div class=\"col-9\"><input id=\"shop-name\" class=\"form-control\" type=\"text\" formControlName=\"name\" placeholder=\"Shop name\"></div>\n    </div>\n\n    <div class=\"form-group row mx-0\">\n      <label class=\"col-3 col-form-label\" for=\"shop-address\">Shop Address</label>\n      <div class=\"col-9\"><input id=\"shop-address\" class=\"form-control\" type=\"text\" formControlName=\"address\" placeholder=\"Shop address\"></div>\n    </div>\n\n    <div class=\"form-group row mx-0\">\n      <label class=\"col-3 col-form-label\">Start work time</label>\n      <div class=\"col-3\"><input class=\"form-control\" type=\"number\" formControlName=\"wtsh\" max=\"23\" min=\"0\" maxlength=\"2\" placeholder=\"00\"></div>\n      <div class=\"col-3\"><input class=\"form-control\" type=\"number\" formControlName=\"wtsm\" max=\"59\" min=\"0\" maxlength=\"2\" placeholder=\"00\"></div>\n    </div>\n\n    <div class=\"form-group row mx-0\">\n      <label class=\"col-3 col-form-label\">End work time</label>\n      <div class=\"col-3\"><input class=\"form-control\" type=\"number\" formControlName=\"wteh\" max=\"23\" min=\"0\" maxlength=\"2\" placeholder=\"00\"></div>\n      <div class=\"col-3\"><input class=\"form-control\" type=\"number\" formControlName=\"wtem\" max=\"59\" min=\"0\" maxlength=\"2\" placeholder=\"00\"></div>\n    </div>\n\n    <div class=\"col-10 mx-auto\">\n      <input type=\"submit\" class=\"btn btn-outline-success btn-block\" value=\"Add shop\" [disabled]=\"!sForm.valid\">\n    </div>\n  </form>\n\n  <form  class=\"col-md-6 col-sm-12 my-sm-4\" [formGroup]=\"pForm\" (ngSubmit)=\"addProduct(pForm.value); pForm.reset();\">\n    <h3 class=\"text-center\">Add product</h3>\n\n    <div class=\"form-group row mx-0\">\n      <label class=\"col-3 col-form-label\" for=\"for-shop\">For shop</label>\n      <div class=\"col-9\">\n        <select class=\"form-control\" formControlName=\"forShop\" id=\"for-shop\">\n          <option *ngFor=\"let shop of shops\" value=\"{{ shop.id }}\">{{ shop.title }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group row mx-0\">\n      <label class=\"col-3 col-form-label\" for=\"ppoduct-name\">Product name</label>\n      <div class=\"col-9\"><input class=\"form-control\" type=\"text\" id=\"ppoduct-name\" formControlName=\"pName\" placeholder=\"Product name\"></div>\n    </div>\n    <div class=\"form-group row mx-0\">\n      <label class=\"col-3 col-form-label\" for=\"poduct-description\">Product description</label>\n      <div class=\"col-9\"><textarea class=\"form-control\" id=\"poduct-description\" formControlName=\"description\" placeholder=\"Description minimum 20 - maximum 500 characters\"></textarea></div>\n    </div>\n\n    <div class=\"col-10 mx-auto\">\n        <input type=\"submit\" class=\"btn btn-outline-success btn-block\" value=\"Add product\" [disabled]=\"!pForm.valid\">\n    </div>\n  </form>\n</div>\n\n<hr *ngIf=\"shops.length > 0\">\n\n<div class=\"row mx-0\" *ngIf=\"shops.length > 0\">\n  <table class=\"table-sm mx-auto table-hover table-bordered\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Shop name</th>\n        <th>Work time</th>\n        <th>Address</th>\n        <th>Control</th>\n        <th>Product list</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let shop of shops\">\n        <td>\n          <span id=\"shop-id-{{shop.id}}\">{{ shop.id }}</span>\n        </td>\n        <td>\n          <span id=\"shop-title-{{shop.id}}\">{{ shop.title }}</span>\n        </td>\n        <td>\n          <span id=\"shop-wt-{{shop.id}}\">\n            {{\n              shop.work_time.start.hours\n            }}:{{\n              shop.work_time.start.minutes >= 10 ?\n              shop.work_time.start.minutes :\n              '0' + shop.work_time.start.minutes\n            }} - {{\n              shop.work_time.end.hours\n            }}:{{\n              shop.work_time.end.minutes >= 10 ?\n              shop.work_time.end.minutes :\n              '0' + shop.work_time.end.minutes\n            }}\n          </span>\n        </td>\n        <td>\n          <span id=\"shop-addrs-{{shop.id}}\">{{ shop.address }}</span>\n        </td>\n        <td>\n          <input type=\"button\" value=\"Delete\" class=\"btn btn-sm btn-outline-danger\" (click)=\"deleteShop(shop)\" >\n          <input type=\"button\" id=\"shopEd-{{ shop.id }}\" value=\"Edit\" class=\"btn btn-sm btn-outline-warning\" (click)=\"enableEditMode(shop)\">\n          <input type=\"button\" id=\"shopSv-{{ shop.id }}\" value=\"Save\" class=\"btn btn-sm btn-outline-success d-none\" (click)=\"disableEditMode(shop.id, shop)\">\n        </td>\n        <td>\n          <input type=\"button\" value=\"Product list\" class=\"btn btn-sm btn-outline-info\" (click)=\"getProducts(shop)\">\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<hr *ngIf=\"products.length > 0\">\n\n<div class=\"row mx-0\" *ngIf=\"products.length > 0\">\n  <table class=\"table-sm mx-auto table-hover table-bordered\">\n    <thead>\n    <tr>\n      <th>ID</th>\n      <th>Product name</th>\n      <th>Product description</th>\n      <th>Control</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let product of products\">\n      <th>\n        <span id=\"prod-id-{{ product.id }}\">{{ product.id }}</span>\n      </th>\n      <td>\n        <span id=\"prod-title-{{ product.id }}\">{{ product.title }}</span>\n      </td>\n      <td>\n        <span id=\"prod-description-{{ product.id }}\">{{ product.description }}</span>\n      </td>\n      <td>\n        <input type=\"button\" value=\"Delete\" class=\"btn btn-sm btn-outline-danger\" (click)=\"deleteProduct(product)\">\n        <input type=\"button\" value=\"Edit\" id=\"prodEd-{{ product.id }}\" class=\"btn btn-sm btn-outline-warning\" (click)=\"enableEditProduct(product)\">\n        <input type=\"button\" value=\"Save\" id=\"prodSv-{{ product.id }}\" class=\"btn btn-sm btn-outline-success d-none\" (click)=\"disableEditProduct(product)\">\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<hr>\n<div class=\"d-block mx-5\">\n  <label for=\"reloader\" class=\"text-center\">If not loaded all markers please click the button</label>\n  <input type=\"button\" value=\"Reload Markers\" class=\"text-center btn btn-sm btn-outline-primary\" (click)=\"generate()\" id=\"reloader\">\n</div>\n<hr>\n\n<agm-map\n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"11\">\n  <agm-marker\n    [latitude]=\"m.lat\"\n    [longitude]=\"m.lng\"\n    [label]=\"m.label\"\n    *ngFor=\"let m of markers; let i = index\">\n  </agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/storeme/storeme.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/storeme/storeme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shop__ = __webpack_require__("../../../../../src/app/shared/shop.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_storeme_service__ = __webpack_require__("../../../../../src/app/shared/storeme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoremeComponent; });
/* unused harmony export Marker */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoremeComponent = (function () {
    // google maps
    function StoremeComponent(_storemeService, fb) {
        this._storemeService = _storemeService;
        this.fb = fb;
        this.products = [];
        // google maps
        this.lat = 53.9138277;
        this.lng = 27.5318563;
        this.markers = [];
        this.shops = [];
        this.sForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'address': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'wtsh': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'wtsm': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'wteh': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'wtem': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'validate': ''
        });
        this.pForm = fb.group({
            'forShop': [null],
            'pName': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            'description': [
                null,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(20),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(500)
                ])
            ],
            'validate': ''
        });
    }
    StoremeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storemeService
            .getShops()
            .subscribe(function (shops) {
            _this.shops = shops;
            _this.generate();
        });
    };
    StoremeComponent.prototype.generate = function () {
        this.markers = [];
        var i = 0;
        var context = this;
        var intID = setInterval(function () {
            context.createMarkers(context.shops[i]);
            context.markers.push(new Marker(context.getMarkerLat, context.getMarkerLng, context.shops[i].title));
            i += 1;
            if (i === context.shops.length)
                clearInterval(intID);
        }, 200);
    };
    StoremeComponent.prototype.createMarkers = function (shop) {
        var _this = this;
        this._storemeService
            .getLoacation(shop.address)
            .subscribe(function (data) {
            _this.getMarkerLat = Number(JSON.stringify(data.results[0].geometry.location.lat));
            _this.getMarkerLng = Number(JSON.stringify(data.results[0].geometry.location.lng));
        }, function (error) { return console.log('Marker status: ' + error); }, function () { return console.log('Marker status: OK!'); });
    };
    StoremeComponent.prototype.showHideAdd = function () {
        if ($('#add-forms').class('d-none'))
            $('#add-forms').addClass('d-none');
        else
            $('#add-forms').removeClass('d-none');
    };
    StoremeComponent.prototype.addShop = function (post) {
        var _this = this;
        if (this.shops.length > 0) {
            var shop_1 = new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["a" /* Shop */](this.shops[this.shops.length - 1].id + 1, post.name, new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["b" /* WorkTime */](new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["c" /* Time */](post.wtsh, post.wtsm), new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["c" /* Time */](post.wteh, post.wteh)), post.address, []);
            this._storemeService
                .createShop(shop_1)
                .subscribe(function (res) { return _this.shops.push(shop_1); });
        }
        else {
            var shop_2 = new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["a" /* Shop */](1, post.name, new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["b" /* WorkTime */](new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["c" /* Time */](post.wtsh, post.wtsm), new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["c" /* Time */](post.wteh, post.wteh)), post.address, []);
            this._storemeService
                .createShop(shop_2)
                .subscribe(function (res) { return _this.shops.push(shop_2); });
        }
    };
    StoremeComponent.prototype.addProduct = function (post) {
        var _this = this;
        var product = new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["d" /* Product */](this.shops[post.forShop - 1].products.length + 1, post.pName, post.description);
        this._storemeService
            .createProduct(this.shops[post.forShop - 1])
            .subscribe(function (res) { return _this.shops[post.forShop - 1].products.push(product); });
    };
    StoremeComponent.prototype.enableEditMode = function (shop) {
        var title = $('#shop-title-' + shop.id), wt = $('#shop-wt-' + shop.id), address = $('#shop-addrs-' + shop.id);
        title.replaceWith('<input id="shop-title-' + shop.id + '" type="text" class="form-control" value="' + title.text() + '"/>');
        wt.replaceWith('<div id="shop-wt-' + shop.id + '"><input id="ssh-' + shop.id +
            '" class="form-control col-3 d-inline-block" type="number" max="23" min="0" maxlength="2" placeholder="00" value="' +
            shop.work_time.start.hours + '"><input id="ssm-' + shop.id +
            '" class="form-control col-3 d-inline-block" type="number" max="59" min="0" maxlength="2" placeholder="00" value="' +
            shop.work_time.start.minutes + '"><input id="seh-' + shop.id +
            '" class="form-control col-3 d-inline-block" type="number" max="23" min="0" maxlength="2" placeholder="00" value="' +
            shop.work_time.end.hours + '"><input id="sem-' + shop.id +
            '" class="form-control col-3 d-inline-block" type="number" max="59" min="0" maxlength="2" placeholder="00" value="' +
            shop.work_time.end.minutes + '"></div>');
        address.replaceWith('<input id="shop-addrs-' + shop.id + '" type="text" class="form-control" value="' + address.text() + '"/>');
        $('#shopEd-' + shop.id).addClass('d-none');
        $('#shopSv-' + shop.id).removeClass('d-none');
    };
    StoremeComponent.prototype.disableEditMode = function (oldID, shop) {
        $('#shopEd-' + shop.id).removeClass('d-none');
        $('#shopSv-' + shop.id).addClass('d-none');
        var title = $('#shop-title-' + shop.id), wt = $('#shop-wt-' + shop.id), wtsh = Number($('#ssh-' + shop.id).val()), wtsm = Number($('#ssm-' + shop.id).val()), wteh = Number($('#seh-' + shop.id).val()), wtem = Number($('#sem-' + shop.id).val()), address = $('#shop-addrs-' + shop.id);
        var worktime;
        title.replaceWith('<span id="shop-title-' + shop.id + '">' + title.val() + '</span>');
        address.replaceWith('<span id="shop-addrs-' + shop.id + '">' + address.val() + '</span>');
        if ((wtsh >= 0 && wtsh <= 23) && (wtsm >= 0 && wtsm <= 59) && (wteh >= 0 && wteh <= 23) && (wtem >= 0 && wtem <= 59)) {
            worktime = wtsh + ':' + (wtsm < 10 ? '0' + wtsm : wtsm) + ' - ' + wteh + ':' + (wtem < 10 ? '0' + wtem : wtem);
            shop.work_time.start.hours = wtsh;
            shop.work_time.start.minutes = wtsm;
            shop.work_time.end.hours = wteh;
            shop.work_time.end.minutes = wtem;
        }
        else {
            worktime = '9:00 - 21:00';
            shop.work_time.start.hours = 9;
            shop.work_time.start.minutes = 0;
            shop.work_time.end.hours = 21;
            shop.work_time.end.minutes = 0;
        }
        wt.replaceWith('<span id="shop-wt-' + shop.id + '">' + worktime + '</span>');
        shop.title = title.val();
        shop.address = address.val();
        this.editShop(oldID, shop);
    };
    StoremeComponent.prototype.editShop = function (oldID, shop) {
        this._storemeService
            .setShop(oldID, shop)
            .subscribe();
    };
    StoremeComponent.prototype.deleteShop = function (shop) {
        var _this = this;
        $('#shopEd-' + shop.id).removeClass('d-none');
        $('#shopSv-' + shop.id).addClass('d-none');
        this._storemeService
            .deleteShop(shop)
            .subscribe(function (res) {
            var index = _this.shops.indexOf(shop);
            if (index > -1)
                _this.shops.splice(index, 1);
        });
        this.resetAll();
    };
    StoremeComponent.prototype.enableEditProduct = function (product) {
        var title = $('#prod-title-' + product.id), description = $('#prod-description-' + product.id);
        // replace table elements
        title.replaceWith('<input id="prod-title-' + product.id + '" type="text" class="form-control" value="' +
            product.title + '" maxlength="200"/>');
        description.replaceWith('<textarea id="prod-description-' + product.id + '" class="form-control">' +
            product.description + '</textarea>');
        $('#prodEd-' + product.id).addClass('d-none');
        $('#prodSv-' + product.id).removeClass('d-none');
    };
    StoremeComponent.prototype.disableEditProduct = function (product) {
        var title = $('#prod-title-' + product.id), description = $('#prod-description-' + product.id);
        // new product
        var newProd = new __WEBPACK_IMPORTED_MODULE_1__shared_shop__["d" /* Product */](product.id, title.val(), description.val());
        // replace table elements
        title.replaceWith('<span id="prod-title-' + product.id + '">' + title.val() + '</span>');
        description.replaceWith('<span id="prod-description-' + product.id + '">' + description.val() + '</span>');
        $('#prodEd-' + product.id).removeClass('d-none');
        $('#prodSv-' + product.id).addClass('d-none');
        // save data
        this.editProduct(newProd, product);
    };
    StoremeComponent.prototype.editProduct = function (prod, oldP) {
        var indexShop = this.shops.indexOf(this.selectedShopProducts);
        var indexProd = this.shops[indexShop].products.indexOf(oldP);
        this.shops[indexShop].products[indexProd] = prod;
        this._storemeService
            .setShop(this.shops[indexShop].id, this.shops[indexShop])
            .subscribe();
    };
    StoremeComponent.prototype.deleteProduct = function (prod) {
        var indexShop = this.shops.indexOf(this.selectedShopProducts);
        var indexProd = this.shops[indexShop].products.indexOf(prod);
        this.selectedShopProducts.products.splice(indexProd, 1);
        this.shops[indexShop] = this.selectedShopProducts;
        this._storemeService
            .deleteProduct(this.shops[indexShop])
            .subscribe();
    };
    StoremeComponent.prototype.getProducts = function (shop) {
        this.selectedShopProducts = shop;
        this.products = this.shops[this.shops.indexOf(shop)].products;
    };
    StoremeComponent.prototype.resetAll = function () {
        this.products = [];
        this.selectedShopProducts = undefined;
    };
    return StoremeComponent;
}());
StoremeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-storeme',
        template: __webpack_require__("../../../../../src/app/storeme/storeme.component.html"),
        styles: [__webpack_require__("../../../../../src/app/storeme/storeme.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_storeme_service__["a" /* StoremeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_storeme_service__["a" /* StoremeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], StoremeComponent);

var Marker = (function () {
    function Marker(lat, lng, label) {
        this.lat = lat;
        this.lng = lng;
        this.label = label;
    }
    return Marker;
}());

var _a, _b;
//# sourceMappingURL=storeme.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map