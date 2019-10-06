webpackJsonp([4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, authService, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.userData = { "email": "" };
    }
    ForgotPage.prototype.reset = function () {
        var _this = this;
        if (this.userData.email) {
            this.authService.postData(this.userData, "forgot").then(function (result) {
                _this.resposeData = result;
                // this.presentToast("Password reset instructions will be sent to your registered email address");
                _this.login();
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            // this.presentToast("Give usern");
        }
    };
    ForgotPage.prototype.login = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* Welcome */]);
    };
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/forgot/forgot.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n      <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n      <ion-buttons end>\n          <button ion-button icon-only (click)="login()">\n              <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n    </ion-header>\n    \n  \n    <ion-content padding class="normalize-ion">\n  \n      <h3 class="heading">Forgot Password?</h3>\n   \n  <ion-list>\n   \n  \n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n    </ion-item>\n    <ion-item class="mb-10"> \n        <ion-input type="text"  [(ngModel)]="userData.email" ></ion-input>\n      </ion-item>\n  \n  \n    <button ion-button block color="primary" (click)="reset()" class="bottom-main-btn btn-border">Retrieve Password</button>\n    \n  </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "", "password": "" };
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        var _this = this;
        if (this.userData.username && this.userData.password) {
            this.authService.postData(this.userData, "login").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                if (_this.resposeData.userData) {
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.presentToast("Please give valid username and password");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.presentToast("Give username and password");
        }
    };
    Login.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/login/login.html"*/'\n\n\n<ion-content padding>\n<ion-list>\n\n  <ion-item>\n    <ion-label fixed>Username</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="userData.username"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="primary" (click)="login()">Login</button>\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, authService, toastCtrl, common) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.common = common;
        this.userData = { "password": "", "email": "", "cname": "", "company_name": "", "contact_no": "", "region_name": "", "access_code": "" };
        this.getregion();
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.signup = function () {
        var _this = this;
        if (this.userData.password && this.userData.email && this.userData.cname) {
            //Api connections
            this.authService.postData(this.userData, "signup").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.userData) {
                    console.log(_this.resposeData);
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.presentToast("Please give valid access code!");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            console.log("Give valid information.");
        }
    };
    Signup.prototype.login = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* Welcome */]);
    };
    Signup.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    Signup.prototype.getregion = function () {
        var _this = this;
        this.common.presentLoading();
        this.authService.postData(this.userData, "getregion").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.feedData) {
                _this.common.closeLoading();
                _this.dataSet = _this.resposeData.feedData;
                console.log(_this.dataSet);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-signup',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n    <ion-buttons end>\n        <button ion-button icon-only (click)="login()">\n            <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  </ion-header>\n  \n\n  <ion-content padding class="normalize-ion">\n\n    <h3 class="heading">Sign Up</h3>\n\n<ion-list>\n  <ion-item>\n    <ion-label fixed>Contact Name</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text"  [(ngModel)]="userData.cname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label fixed>Company Name</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text"  [(ngModel)]="userData.company_name"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label fixed>Telephone Number</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text"  [(ngModel)]="userData.contact_no" [brmasker]="{mask:\'(000) 000-0000\', len:14}"></ion-input>\n</ion-item>\n\n  <ion-item>\n    <ion-label fixed>Email</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text"  [(ngModel)]="userData.email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label fixed>Region</ion-label>\n    </ion-item>\n<ion-item>\n        <ion-select [(ngModel)]="userData.region_name" multiple="false" interface="action-sheet">\n          <ion-option *ngFor="let item of dataSet; let msgIndex = index" value="{{item.region_id}}">{{item.region_name}}</ion-option>\n        </ion-select>    \n</ion-item>\n\n<ion-item>\n    <ion-label fixed>Access Code</ion-label>\n  </ion-item>\n  <ion-item class="mb-10">\n    <ion-input type="text"  [(ngModel)]="userData.access_code"></ion-input>\n</ion-item>\n\n  <button ion-button block color="primary" (click)="signup()" class="bottom-main-btn btn-border">Register</button>\n  \n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/signup/signup.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//let apiUrl = "http://localhost/PHP-Slim-Restful/api/";
//let apiUrl = 'http://localhost/PHP-Slim-Restful/api/';
var apiUrl = "http://perfectiongroupapp.com/app/api/";
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers }).
                subscribe(function (res) {
                //alert("test");
                console.log(res);
                resolve(res.json());
            }, function (err) {
                //alert("33");
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgot/forgot.module": [
		441,
		3
	],
	"../pages/login/login.module": [
		442,
		2
	],
	"../pages/signup/signup.module": [
		443,
		1
	],
	"../pages/welcome/welcome.module": [
		444,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_submit_submit__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_confirm__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_location__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CallPage = (function () {
    function CallPage(common, alertCtrl, navCtrl, app, authService) {
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.userPostData = {
            user_id: "",
            token: "",
            feed: "",
            feed_id: "",
            lastCreated: "",
            ulocation: "",
            type: 2,
            email: "",
            region_phone: "",
            timezone: "",
            contact_no: "",
            name: "",
        };
        var data = JSON.parse(localStorage.getItem("userData"));
        var location = localStorage.getItem("location");
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.userPostData.email = this.userDetails.email;
        this.userPostData.name = this.userDetails.name;
        this.userPostData.contact_no = this.userDetails.contact_no;
        this.userPostData.ulocation = location;
        this.userPostData.lastCreated = "";
        this.userPostData.region_phone = "";
        this.userPostData.timezone = "";
        this.noRecords = false;
        this.submitted = false;
        //this.getLocation();
    }
    CallPage.prototype.getLocation = function () {
        var _this = this;
        this.common.presentLoading();
        this.authService.postData(this.userPostData, "location").then(function (result) {
            _this.resposeData = result;
            console.log(result);
            if (_this.resposeData.location) {
                _this.common.closeLoading();
                _this.dataSet = _this.resposeData.location;
                if (_this.dataSet[0].name) {
                    _this.userPostData.ulocation = _this.dataSet[0].name;
                }
                _this.userPostData.region_phone = _this.resposeData.user[0].region_phone;
                _this.userPostData.timezone = _this.resposeData.user[0].timezone;
                console.log(_this.userPostData.region_phone);
                var dataLength = _this.resposeData.location.length;
                _this.userPostData.lastCreated = _this.resposeData.location[dataLength - 1].created;
            }
            else {
                console.log("No access");
                _this.common.closeLoading();
            }
        }, function (err) {
            //this.common.closeLoading();
            //Connection failed message
        });
    };
    CallPage.prototype.nextpage = function () {
        localStorage.setItem('location', this.userPostData.ulocation);
        if (this.userPostData.feed == "" || this.userPostData.ulocation == "") {
            // alert("");
            var alert_1 = this.alertCtrl.create({
                title: "Attention!",
                message: 'Please write down your issue.',
                buttons: ['OK']
            });
            alert_1.present();
            return false;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__confirm_confirm__["a" /* ConfirmPage */], { userPostData: this.userPostData });
    };
    CallPage.prototype.locationUpdate = function (data) {
        var _this = this;
        this.common.presentLoading();
        data.user_id = this.userPostData.user_id;
        data.token = this.userPostData.token;
        this.authService.postData(data, "locationUpdate").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.location) {
                _this.common.closeLoading();
                //  console.log(this.resposeData.location);
                // return false;
                if (typeof (_this.dataSet) != "undefined") {
                    _this.dataSet.unshift(_this.resposeData.location);
                }
                else {
                    _this.getLocation();
                }
                // this.userPostData.feed = "";
                _this.userPostData.ulocation = _this.resposeData.location.name;
                //this.updatebox.setFocus();
                setTimeout(function () {
                    //  this.updatebox.focus();
                }, 150);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    CallPage.prototype.feedUpdate = function () {
        var _this = this;
        if (this.userPostData.feed == "" || this.userPostData.ulocation == "") {
            // alert("");
            var alert_2 = this.alertCtrl.create({
                title: "Attention!",
                message: 'Please write down your issue.',
                buttons: ['OK']
            });
            alert_2.present();
            return false;
        }
        if (this.userPostData.feed) {
            this.common.presentLoading();
            this.authService.postData(this.userPostData, "feedUpdate").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.feedData) {
                    _this.common.closeLoading();
                    localStorage.setItem('location', _this.userPostData.ulocation);
                    _this.userPostData.feed = "";
                    _this.userPostData.ulocation = "";
                    //this.updatebox.setFocus();
                    /*             this.callNumber.callNumber(this.user, true)
                                .then(res => console.log('Launched dialer!', res))
                                 .catch(err => console.log('Error launching dialer', err)); */
                    // this.submitted=true;
                    setTimeout(function () {
                        var tel = _this.userPostData.region_phone;
                        window.open("tel:" + tel, '_system');
                        _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__list_list__["a" /* ListPage */]);
                    }, 150);
                }
                else {
                    console.log("No access");
                }
            }, function (err) {
                //Connection failed message
            });
        }
    };
    CallPage.prototype.location = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__location_location__["a" /* LocationPage */]);
    };
    CallPage.prototype.feedDelete = function (feed_id, msgIndex) {
        var _this = this;
        if (feed_id > 0) {
            var alert_3 = this.alertCtrl.create({
                title: "Delete Feed",
                message: "Do you want to buy this feed?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: function () {
                            console.log("Cancel clicked");
                        }
                    },
                    {
                        text: "Delete",
                        handler: function () {
                            _this.userPostData.feed_id = feed_id;
                            _this.authService.postData(_this.userPostData, "feedDelete").then(function (result) {
                                _this.resposeData = result;
                                if (_this.resposeData.success) {
                                    _this.dataSet.splice(msgIndex, 1);
                                }
                                else {
                                    console.log("No access");
                                }
                            }, function (err) {
                                //Connection failed message
                            });
                        }
                    }
                ]
            });
            alert_3.present();
        }
    };
    CallPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add New Location',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Location Name'
                },
                {
                    name: 'adress1',
                    placeholder: 'Street Address'
                },
                {
                    name: 'adress2',
                    placeholder: 'Street Address2'
                },
                {
                    name: 'city',
                    placeholder: 'City'
                },
                {
                    name: 'state',
                    placeholder: 'Sate'
                },
                {
                    name: 'zip',
                    placeholder: 'Zip Code'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'exit-button',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add Location',
                    cssClass: 'cancel-button',
                    handler: function (data) {
                        _this.locationUpdate(data);
                    }
                }
            ]
        });
        alert.present();
    };
    CallPage.prototype.pushPage = function () {
        //this.viewCtrl.dismiss();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_submit_submit__["a" /* SubmitPage */]);
    };
    CallPage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.postData(_this.userPostData, "feed").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.feedData.length) {
                        var newData = _this.resposeData.feedData;
                        _this.userPostData.lastCreated = _this.resposeData.feedData[newData.length - 1].created;
                        for (var i = 0; i < newData.length; i++) {
                            _this.dataSet.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    CallPage.prototype.confirmshow = function () {
        var _this = this;
        var popupMessage = "<span>" + "You are requesting service at the following location:" + "</span><h3>" + this.userPostData.ulocation + "</h3><span>You described the issue as follows:</span><h3>" + this.userPostData.feed + "</h3>";
        if (this.userPostData.feed == "" || this.userPostData.ulocation == "") {
            // alert("");
            var alert_4 = this.alertCtrl.create({
                title: "Attention!",
                message: 'Please write down your issue.',
                buttons: ['OK']
            });
            alert_4.present();
            return false;
        }
        var alert1 = this.alertCtrl.create({
            title: "Confirm Request",
            message: popupMessage,
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Confirm",
                    handler: function () {
                        _this.feedUpdate();
                    }
                }
            ]
        });
        alert1.present();
    };
    CallPage.prototype.converTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    CallPage.prototype.backToWelcome = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    CallPage.prototype.isWorkingHour = function (now) {
        return now.getDay() <= 4 && now.getHours() >= 9 && now.getHours() < 17;
    };
    CallPage.prototype.ionViewWillEnter = function () {
        this.getLocation();
        console.log("test");
    };
    CallPage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("updatebox"),
        __metadata("design:type", Object)
    ], CallPage.prototype, "updatebox", void 0);
    CallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: "page-list",template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/call/call.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n      <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n      <ion-buttons end>\n          <button ion-button icon-only (click)="backToWelcome()">\n              <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n    </ion-header>\n\n    <ion-content padding class="normalize-ion">\n\n <div >\n\n    <h3 class="heading">Start Call Request</h3>\n\n\n      <ion-row>\n                <ion-col class="mb-10" width-100>\n                        <ion-item>\n                            <ion-label class="small-label-text" fixed>Location of Service Request</ion-label>\n                        \n                        </ion-item>\n            <ion-item>\n                <ion-select  [(ngModel)]="userPostData.ulocation" multiple="false"  placeholder="Choose Your Location" interface="action-sheet">\n                  <ion-option *ngFor="let item of dataSet; let msgIndex = index">{{item.name}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n    <p class="add-location-btn" name="add-circle" style="color:#1A8AD6;" (click)="location()">  Add New Location</p>\n\n\n  <ion-item> \n        <ion-label class="small-label-text" fixed>Description of Issue</ion-label>\n      </ion-item>\n  \n   \n    <ion-item id="udpateBox">\n            <textarea class="mb-10" #updatebox [(ngModel)]="userPostData.feed" autofocus></textarea>\n      <ion-row>\n          <button class="bottom-main-btn" ion-button color="primary" (click)="feedUpdate()" style="width:100%">Start Call</button>\n      </ion-row>\n    </ion-item>\n\n</div>\n</ion-content>'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/call/call.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], CallPage);
    return CallPage;
}());

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n    <ion-title>Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SplitPane provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SplitPane = (function () {
    function SplitPane(platform) {
        this.platform = platform;
        console.log('Hello SplitPane Provider');
        this.splitPaneState = false;
    }
    SplitPane.prototype.getSplitPane = function () {
        if (localStorage.getItem('userData')) {
            if (this.platform.width() > 850) {
                this.splitPaneState = true;
            }
            else {
                this.splitPaneState = false;
            }
        }
        else {
            this.splitPaneState = false;
        }
        return this.splitPaneState;
    };
    SplitPane = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], SplitPane);
    return SplitPane;
}());

//# sourceMappingURL=split-pane.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = (function () {
    function Common(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        console.log('Hello Common Provider');
    }
    Common.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Please wait ..." });
        this.loader.present();
        //this.loader.dismiss();
    };
    Common.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_submit_submit__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_call_call__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(common, alertCtrl, navCtrl, app, authService) {
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.userPostData = {
            user_id: "",
            token: "",
            feed: "",
            feed_id: "",
            lastCreated: ""
        };
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.userPostData.lastCreated = "";
        this.noRecords = false;
        // this.getFeed();
    }
    HomePage.prototype.getFeed = function () {
        var _this = this;
        this.common.presentLoading();
        this.authService.postData(this.userPostData, "feed").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.feedData) {
                _this.common.closeLoading();
                _this.dataSet = _this.resposeData.feedData;
                console.log(_this.dataSet);
                var dataLength = _this.resposeData.feedData.length;
                _this.userPostData.lastCreated = _this.resposeData.feedData[dataLength - 1].created;
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    HomePage.prototype.feedUpdate = function () {
        var _this = this;
        if (this.userPostData.feed) {
            this.common.presentLoading();
            this.authService.postData(this.userPostData, "feedUpdate").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.feedData) {
                    _this.common.closeLoading();
                    _this.dataSet.unshift(_this.resposeData.feedData);
                    _this.userPostData.feed = "";
                    //this.updatebox.setFocus();
                    setTimeout(function () {
                        //  this.updatebox.focus();
                    }, 150);
                }
                else {
                    console.log("No access");
                }
            }, function (err) {
                //Connection failed message
            });
        }
    };
    HomePage.prototype.feedDelete = function (feed_id, msgIndex) {
        var _this = this;
        if (feed_id > 0) {
            var alert_1 = this.alertCtrl.create({
                title: "Delete Feed",
                message: "Do you want to buy this feed?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: function () {
                            console.log("Cancel clicked");
                        }
                    },
                    {
                        text: "Delete",
                        handler: function () {
                            _this.userPostData.feed_id = feed_id;
                            _this.authService.postData(_this.userPostData, "feedDelete").then(function (result) {
                                _this.resposeData = result;
                                if (_this.resposeData.success) {
                                    _this.dataSet.splice(msgIndex, 1);
                                }
                                else {
                                    console.log("No access");
                                }
                            }, function (err) {
                                //Connection failed message
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    HomePage.prototype.presentPrompt = function () {
        var alert = this.alertCtrl.create({
            title: 'Add New Location',
            inputs: [
                {
                    name: 'location',
                    placeholder: 'Location Name'
                },
                {
                    name: 'location',
                    placeholder: 'Street Address'
                },
                {
                    name: 'location',
                    placeholder: 'Street Address2'
                },
                {
                    name: 'city',
                    placeholder: 'City'
                },
                {
                    name: 'state',
                    placeholder: 'Sate'
                },
                {
                    name: 'zip',
                    placeholder: 'Zip Code'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'exit-button',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add Location',
                    cssClass: 'cancel-button',
                    handler: function (data) {
                        if (1) {
                            // logged in!
                        }
                        else {
                            // invalid login
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.pushPage = function (pname) {
        //this.viewCtrl.dismiss();
        if (pname == 'request') {
            //this.app.getRootNavs()[0]().push(SubmitPage);
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_submit_submit__["a" /* SubmitPage */]);
        }
        else if (pname == 'list') {
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]);
        }
        else if (pname == 'call') {
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_call_call__["a" /* CallPage */]);
        }
        else if (pname == 'about') {
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */]);
        }
    };
    HomePage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.postData(_this.userPostData, "feed").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.feedData.length) {
                        var newData = _this.resposeData.feedData;
                        _this.userPostData.lastCreated = _this.resposeData.feedData[newData.length - 1].created;
                        for (var i = 0; i < newData.length; i++) {
                            _this.dataSet.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    HomePage.prototype.converTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    HomePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.logout = function () {
        //Api Token Logout
        localStorage.clear();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__welcome_welcome__["a" /* Welcome */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("updatebox"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "updatebox", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: "page-home",template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/home/home.html"*/' \n\n  <ion-header no-border>\n      <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n        <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n        <ion-buttons end>\n            <button class="hdx" ion-button icon-only (click)="backToWelcome()">\n                <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n            </button>\n        </ion-buttons>\n      </ion-navbar>\n      </ion-header>\n\n\n\n\n<ion-content class="home-page1">\n\n      <ion-card (click)="pushPage(\'request\')">\n        <ion-card-content>\n          <img ion-right src="assets/icon/icon1.png" class="iocnlogo" />\n          <span class="request-list-text"> Submit A Request</span>\n        </ion-card-content>\n      </ion-card>\n      <ion-card (click)="pushPage(\'call\')">\n          <ion-card-content >\n              <img ion-right src="assets/icon/icon2.png" class="iocnlogo" />\n             <span class="request-list-text"> Call In A Request</span>\n          </ion-card-content>\n      </ion-card>\n      <ion-card (click)="pushPage(\'list\')">\n          <ion-card-content>\n              <img ion-right src="assets/icon/icon3.png" class="iocnlogo" />\n            <span class="request-list-text" style="color:green"> View Past Request</span>\n          </ion-card-content>\n      </ion-card>\n      \n      <ion-card>\n          <ion-card-content>\n              <img ion-right src="assets/icon/icon4.png" class="iocnlogo" />\n            <span class="request-list-text"> <a href="https://perfectiongroup.com/" class="button button-outline button-positive">Visit Our Website</a>\n            </span>\n             </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-content>\n              <img ion-right src="assets/icon/icon5.png" class="iocnlogo" />\n            <span class="request-list-text"> <a href="http://reports.perfectwaresolutions.com/webviewfs.nsf" class="button button-outline button-positive">WebViewing</a>\n            </span>\n          </ion-card-content>\n      </ion-card>\n      <ion-card (click)="pushPage(\'about\')" class="no-border">\n          <ion-card-content>\n            <img ion-right src="assets/icon/icon6.png" class="iocnlogo" />\n            <span class="request-list-text ed5" style="color:#57585A;"> Edit Your Profile</span>\n          </ion-card-content>\n      </ion-card>\n\n\n<p class="home-footer-copyright">©2019 Perfection Group</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/home/home.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "", "password": "" };
        if (localStorage.getItem('userData')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */], {}, { animate: false });
    };
    Welcome.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */], {}, { animate: false });
    };
    Welcome.prototype.dologin = function () {
        var _this = this;
        if (this.userData.username && this.userData.password) {
            this.authService.postData(this.userData, "login").then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                if (_this.resposeData.userData) {
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.presentToast("Please give valid username and password");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.presentToast("Give username and password");
        }
    };
    Welcome.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/welcome/welcome.html"*/'<ion-content padding id="welcome1">\n\n<img src="assets/imgs/logo2.png" class="logo"/>\n\n\n<ion-list>\n\n    <ion-item>\n        <ion-label fixed>Email</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" value="" [(ngModel)]="userData.username"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>Password</ion-label>\n       \n    </ion-item>\n    <ion-item>\n\n      <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n    </ion-item>\n    <p (click)="forgot()"  style="    margin: 0;    text-align: right;    font-weight: 700;    color: #098bd5;">SEND ME MY PASSWORD</p>\n    <button ion-button block color="primary" (click)="dologin()" class="login-btn btn-border bottom-main-btn">Sign In</button>\n  \n  </ion-list>\n  <hr size="0">\n  <span class="login-text">If you don\'t have any account, use the button below to create one</span>\n\n<button ion-button block (click)="signup()" class="btn-border marginTop reg-btn bottom-main-btn">Register</button>\n</ion-content>\n'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_submit_submit__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_confirm_confirm__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_location_location__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_list_list__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_forgot_forgot__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_call_call__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_moment__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_linky__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_linky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular_linky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_brmasker_ionic_3__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_19__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_submit_submit__["a" /* SubmitPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_call_call__["a" /* CallPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_location_location__["a" /* LocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_23_angular2_moment__["MomentModule"], __WEBPACK_IMPORTED_MODULE_24_angular_linky__["LinkyModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25_brmasker_ionic_3__["a" /* BrMaskerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_19__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_submit_submit__["a" /* SubmitPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_call_call__["a" /* CallPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_location_location__["a" /* LocationPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, splitPane, menu) {
        this.app = app;
        this.splitPane = splitPane;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    MyApp.prototype.logout = function () {
        //Api Token Logout 
        var _this = this;
        localStorage.clear();
        this.menu.enable(false);
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/app/app.html"*/'<!--<ion-nav [root]="rootPage"></ion-nav>-->\n\n<ion-split-pane [when]="splitPane.getSplitPane()">\n  <!--  our side menu  -->\n\n  <!-- the main content -->\n  <ion-nav [root]="rootPage" main #content></ion-nav>\n</ion-split-pane>\n\n'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 235,
	"./de-at": 236,
	"./de-at.js": 236,
	"./de-ch": 237,
	"./de-ch.js": 237,
	"./de.js": 235,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-SG": 240,
	"./en-SG.js": 240,
	"./en-au": 241,
	"./en-au.js": 241,
	"./en-ca": 242,
	"./en-ca.js": 242,
	"./en-gb": 243,
	"./en-gb.js": 243,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-il": 245,
	"./en-il.js": 245,
	"./en-nz": 246,
	"./en-nz.js": 246,
	"./eo": 247,
	"./eo.js": 247,
	"./es": 248,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 248,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./ga": 260,
	"./ga.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it-ch": 273,
	"./it-ch.js": 273,
	"./it.js": 272,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ku": 281,
	"./ku.js": 281,
	"./ky": 282,
	"./ky.js": 282,
	"./lb": 283,
	"./lb.js": 283,
	"./lo": 284,
	"./lo.js": 284,
	"./lt": 285,
	"./lt.js": 285,
	"./lv": 286,
	"./lv.js": 286,
	"./me": 287,
	"./me.js": 287,
	"./mi": 288,
	"./mi.js": 288,
	"./mk": 289,
	"./mk.js": 289,
	"./ml": 290,
	"./ml.js": 290,
	"./mn": 291,
	"./mn.js": 291,
	"./mr": 292,
	"./mr.js": 292,
	"./ms": 293,
	"./ms-my": 294,
	"./ms-my.js": 294,
	"./ms.js": 293,
	"./mt": 295,
	"./mt.js": 295,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./pa-in": 302,
	"./pa-in.js": 302,
	"./pl": 303,
	"./pl.js": 303,
	"./pt": 304,
	"./pt-br": 305,
	"./pt-br.js": 305,
	"./pt.js": 304,
	"./ro": 306,
	"./ro.js": 306,
	"./ru": 307,
	"./ru.js": 307,
	"./sd": 308,
	"./sd.js": 308,
	"./se": 309,
	"./se.js": 309,
	"./si": 310,
	"./si.js": 310,
	"./sk": 311,
	"./sk.js": 311,
	"./sl": 312,
	"./sl.js": 312,
	"./sq": 313,
	"./sq.js": 313,
	"./sr": 314,
	"./sr-cyrl": 315,
	"./sr-cyrl.js": 315,
	"./sr.js": 314,
	"./ss": 316,
	"./ss.js": 316,
	"./sv": 317,
	"./sv.js": 317,
	"./sw": 318,
	"./sw.js": 318,
	"./ta": 319,
	"./ta.js": 319,
	"./te": 320,
	"./te.js": 320,
	"./tet": 321,
	"./tet.js": 321,
	"./tg": 322,
	"./tg.js": 322,
	"./th": 323,
	"./th.js": 323,
	"./tl-ph": 324,
	"./tl-ph.js": 324,
	"./tlh": 325,
	"./tlh.js": 325,
	"./tr": 326,
	"./tr.js": 326,
	"./tzl": 327,
	"./tzl.js": 327,
	"./tzm": 328,
	"./tzm-latn": 329,
	"./tzm-latn.js": 329,
	"./tzm.js": 328,
	"./ug-cn": 330,
	"./ug-cn.js": 330,
	"./uk": 331,
	"./uk.js": 331,
	"./ur": 332,
	"./ur.js": 332,
	"./uz": 333,
	"./uz-latn": 334,
	"./uz-latn.js": 334,
	"./uz.js": 333,
	"./vi": 335,
	"./vi.js": 335,
	"./x-pseudo": 336,
	"./x-pseudo.js": 336,
	"./yo": 337,
	"./yo.js": 337,
	"./zh-cn": 338,
	"./zh-cn.js": 338,
	"./zh-hk": 339,
	"./zh-hk.js": 339,
	"./zh-tw": 340,
	"./zh-tw.js": 340
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 434;

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_confirm__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubmitPage = (function () {
    function SubmitPage(common, alertCtrl, navCtrl, app, authService) {
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.userPostData = {
            user_id: "",
            token: "",
            feed: "",
            feed_id: "",
            lastCreated: "",
            ulocation: "",
            type: 1,
            email: "",
            region_phone: "",
            timezone: "",
            contact_no: "",
            name: "",
        };
        var data = JSON.parse(localStorage.getItem("userData"));
        var location = localStorage.getItem("location");
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.userPostData.email = this.userDetails.email;
        this.userPostData.name = this.userDetails.name;
        this.userPostData.contact_no = this.userDetails.contact_no;
        this.userPostData.ulocation = location;
        this.userPostData.lastCreated = "";
        this.userPostData.region_phone = "";
        this.userPostData.timezone = "";
        this.noRecords = false,
            this.close = false;
    }
    SubmitPage_1 = SubmitPage;
    SubmitPage.prototype.location = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */]);
    };
    SubmitPage.prototype.getLocation = function () {
        var _this = this;
        this.common.presentLoading();
        this.authService.postData(this.userPostData, "location").then(function (result) {
            _this.resposeData = result;
            console.log(result);
            if (_this.resposeData.location) {
                _this.common.closeLoading();
                _this.dataSet = _this.resposeData.location;
                if (_this.dataSet[0].name) {
                    _this.userPostData.ulocation = _this.dataSet[0].name;
                }
                console.log(_this.dataSet);
                _this.userPostData.region_phone = _this.resposeData.user[0].region_phone;
                _this.userPostData.timezone = _this.resposeData.user[0].timezone;
                _this.userPostData.timezone = _this.resposeData.close;
                console.log(_this.userPostData.region_phone);
                var dataLength = _this.resposeData.location.length;
                _this.userPostData.lastCreated = _this.resposeData.location[dataLength - 1].created;
            }
            else {
                console.log("No access");
                _this.common.closeLoading();
            }
        }, function (err) {
            //this.common.closeLoading();
            //Connection failed message
        });
    };
    SubmitPage.prototype.locationUpdate = function (data) {
        var _this = this;
        this.common.presentLoading();
        data.user_id = this.userPostData.user_id;
        data.token = this.userPostData.token;
        this.authService.postData(data, "locationUpdate").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.location) {
                _this.common.closeLoading();
                if (typeof (_this.dataSet) != "undefined") {
                    _this.dataSet.unshift(_this.resposeData.location);
                }
                else {
                    _this.getLocation();
                }
                // this.userPostData.feed = "";
                _this.userPostData.ulocation = _this.resposeData.location.name;
                //this.updatebox.setFocus();
                setTimeout(function () {
                    //  this.updatebox.focus();
                }, 150);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    SubmitPage.prototype.feedUpdate = function () {
        var _this = this;
        if (this.userPostData.feed) {
            this.common.presentLoading();
            this.authService.postData(this.userPostData, "feedUpdate").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.feedData) {
                    _this.common.closeLoading();
                    _this.userPostData.feed = "";
                    _this.userPostData.ulocation = "";
                    //this.updatebox.setFocus();
                    setTimeout(function () {
                        //  this.updatebox.focus();
                    }, 150);
                }
                else {
                    console.log("No access");
                }
            }, function (err) {
                //Connection failed message
            });
        }
    };
    SubmitPage.prototype.nextpage = function () {
        localStorage.setItem('location', this.userPostData.ulocation);
        if (this.userPostData.feed == "" || this.userPostData.ulocation == "") {
            // alert("");
            var alert_1 = this.alertCtrl.create({
                title: "Attention!",
                message: 'Please write down your issue.',
                buttons: ['OK']
            });
            alert_1.present();
            return false;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__confirm_confirm__["a" /* ConfirmPage */], { userPostData: this.userPostData });
    };
    SubmitPage.prototype.feedDelete = function (feed_id, msgIndex) {
        var _this = this;
        if (feed_id > 0) {
            var alert_2 = this.alertCtrl.create({
                title: "Delete Feed",
                message: "Do you want to buy this feed?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: function () {
                            console.log("Cancel clicked");
                        }
                    },
                    {
                        text: "Delete",
                        handler: function () {
                            _this.userPostData.feed_id = feed_id;
                            _this.authService.postData(_this.userPostData, "feedDelete").then(function (result) {
                                _this.resposeData = result;
                                if (_this.resposeData.success) {
                                    _this.dataSet.splice(msgIndex, 1);
                                }
                                else {
                                    console.log("No access");
                                }
                            }, function (err) {
                                //Connection failed message
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    SubmitPage.prototype.pushPage = function () {
        //this.viewCtrl.dismiss();
        this.app.getRootNav().push(SubmitPage_1);
    };
    SubmitPage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.postData(_this.userPostData, "feed").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.feedData.length) {
                        var newData = _this.resposeData.feedData;
                        _this.userPostData.lastCreated = _this.resposeData.feedData[newData.length - 1].created;
                        for (var i = 0; i < newData.length; i++) {
                            _this.dataSet.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    SubmitPage.prototype.converTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    SubmitPage.prototype.backToWelcome = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    SubmitPage.prototype.backToWelcome1 = function () {
        console.log("test");
    };
    SubmitPage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    SubmitPage.prototype.ionViewWillEnter = function () {
        //  this.viewCtrl.showBackButton(true)
        this.getLocation();
        console.log("test");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("updatebox"),
        __metadata("design:type", Object)
    ], SubmitPage.prototype, "updatebox", void 0);
    SubmitPage = SubmitPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-submit',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/submit/submit.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n      <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n      <ion-buttons end>\n          <button ion-button icon-only (click)="backToWelcome()">\n              <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n    </ion-header>\n    \n<ion-content padding class="normalize-ion">\n  <h3 class="heading">Submit Request</h3>\n\n    <p style="color:red;font-weight: 600;margin-top: 0;margin-bottom: 0;"  *ngIf="close">Service requests received outside of business hours\n        will be processed on the next business day.</p>\n\n\n  <ion-row>\n      <ion-col class="mb-10" width-100>\n          <ion-item>\n              <ion-label class="small-label-text" fixed>Location of Service Request</ion-label>\n          \n          </ion-item>\n\n          <ion-item>\n        <ion-select [(ngModel)]="userPostData.ulocation" multiple="false"  placeholder="Choose Your Location" interface="action-sheet">             \n                <ion-option *ngFor="let item of dataSet; let msgIndex = index">{{item.name}}</ion-option>\n              </ion-select>\n          </ion-item>\n      </ion-col>\n  </ion-row>\n  <p class="add-location-btn" name="add-circle" style="color:#1A8AD6;" (click)="location()">  Add New Location</p>\n\n\n  <ion-item> \n      <ion-label class="small-label-text" fixed>Description of Issue</ion-label>\n    </ion-item>\n\n  <ion-item id="udpateBox">\n  \n      <ion-item>\n    <ion-input type="text" [(ngModel)]="userPostData.feed"></ion-input>\n      </ion-item>\n    <ion-row>\n        <button class="bottom-main-btn" ion-button color="primary" (click)="nextpage()" style="width:100%">Submit Request</button>\n  \n      <button class="bottom-main-btn" ion-button color="primary" (click)="backToWelcome1()" style="width:100%">Submit wel</button>\n    </ion-row>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/submit/submit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], SubmitPage);
    return SubmitPage;
    var SubmitPage_1;
}());

//# sourceMappingURL=submit.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(common, alertCtrl, navCtrl, app, authService, toastCtrl) {
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "password": "", "email": "", "name": "", "company_name": "", "contact_no": "", "region_name": "", "access_code": "" };
        this.userPostData = {
            user_id: "",
            token: "",
            feed: "",
            feed_id: "",
            lastCreated: ""
        };
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.userPostData.lastCreated = "";
        this.noRecords = false;
        this.getprofile();
    }
    AboutPage.prototype.ProfileUpdate = function () {
        var _this = this;
        if (this.userData.email && this.userData.name) {
            //Api connections
            this.authService.postData(this.userData, "updateprofile").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.userData) {
                    console.log(_this.resposeData);
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    // this.navCtrl.push(TabsPage);
                    //  localStorage.clear();
                    console.log(_this.resposeData.userData);
                    _this.userData = _this.resposeData.userData;
                    _this.userData.region_name = _this.resposeData.userData.region;
                    _this.presentToast("Profile has been updated!");
                }
                else {
                    _this.presentToast("Please give valid username and password");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            console.log("Give valid information.");
        }
    };
    AboutPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    AboutPage.prototype.getprofile = function () {
        var _this = this;
        this.common.presentLoading();
        this.authService.postData(this.userDetails, "getprofile").then(function (result) {
            console.log(result);
            _this.resposeData = result;
            if (_this.resposeData.userData) {
                _this.common.closeLoading();
                _this.userData = _this.resposeData.userData;
                _this.dataSet = _this.resposeData.regiondata;
                _this.userData.region_name = _this.resposeData.userData.region;
                console.log(_this.dataSet);
            }
            else {
                console.log("No access");
                _this.common.closeLoading();
            }
        }, function (err) {
            //Connection failed message
        });
    };
    AboutPage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.postData(_this.userPostData, "feed").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.feedData.length) {
                        var newData = _this.resposeData.feedData;
                        _this.userPostData.lastCreated = _this.resposeData.feedData[newData.length - 1].created;
                        for (var i = 0; i < newData.length; i++) {
                            _this.dataSet.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    AboutPage.prototype.backToWelcome = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    AboutPage.prototype.logout = function () {
        //Api Token Logout
        localStorage.clear();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* Welcome */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("updatebox"),
        __metadata("design:type", Object)
    ], AboutPage.prototype, "updatebox", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/about/about.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n      <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n      <ion-buttons end>\n          <button ion-button icon-only (click)="backToWelcome()">\n              <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n    </ion-header>\n\n    <ion-content padding class="normalize-ion">\n\n        <h3 class="heading">Update Profile</h3>\n\n      <ion-list>\n      \n        <ion-item>\n          <ion-label fixed>Contact Name</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text"  [(ngModel)]="userData.name"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n            <ion-label fixed>Company Name</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text"  [(ngModel)]="userData.company_name"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label fixed>Telephone Number</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text"  [(ngModel)]="userData.contact_no"></ion-input>\n      </ion-item>\n      \n        <ion-item>\n          <ion-label fixed>Email</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text"  [(ngModel)]="userData.email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label fixed>Region</ion-label>\n          </ion-item>\n      <ion-item class="mb-10"> \n              <ion-select [(ngModel)]="userData.region_name" multiple="false" interface="action-sheet">\n                <ion-option *ngFor="let item of dataSet; let msgIndex = index" value="{{item.region_id}}">{{item.region_name}}</ion-option>\n              </ion-select>    \n      </ion-item>\n      \n      \n <button ion-button block color="primary" (click)="ProfileUpdate()" class="bottom-main-btn btn-border mb-10">Update</button>\n <button ion-button block color="primary" (click)="logout()" class="bottom-main-btn bg-secondary btn-border">Logout</button>\n\n\n      </ion-list>\n      </ion-content>\n'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = (function () {
    function ConfirmPage(platform, common, alertCtrl, navCtrl, app, authService, navParams) {
        this.platform = platform;
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.navParams = navParams;
        this.user = {
            name: "",
            adress1: "",
            adress2: "",
            zip: "",
            city: "",
            uid: "",
            state: "",
            locdata: "",
            region_phone: "",
        };
        this.platform = platform;
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = data.userData;
        this.noRecords = false;
        this.userPostData = this.navParams.get('userPostData');
        var location = localStorage.getItem("location");
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.userPostData.email = this.userDetails.email;
        this.userPostData.name = this.userDetails.name;
        this.userPostData.contact_no = this.userDetails.contact_no;
        this.userPostData.ulocation = location;
        this.userPostData.lastCreated = "";
        this.userPostData.region_phone = "";
        this.userPostData.timezone = "";
        this.noRecords = false;
        this.close = false;
        this.submitted = false;
        this.platform.ready().then(function () {
            console.log('Platform ready');
            // this.confirm();
        });
    }
    ConfirmPage.prototype.confirm = function () {
        var _this = this;
        // The platform is now ready, execute any native code you want
        this.common.presentLoading();
        this.authService.postData(this.userPostData, "confirm").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.user) {
                _this.common.closeLoading();
                _this.user.adress1 = _this.resposeData.user.adress1;
                _this.user.adress2 = _this.resposeData.user.adress2;
                _this.user.city = _this.resposeData.user.city;
                _this.user.state = _this.resposeData.user.state;
                _this.user.zip = _this.resposeData.user.zip;
                _this.user.locdata = _this.resposeData.locdata;
                _this.user.region_phone = _this.resposeData.userinfo.region_phone;
                _this.close = _this.resposeData.close;
                console.log("userdata2");
                var dataLength = _this.resposeData.user.length;
            }
            else {
                console.log("No access");
                _this.common.closeLoading();
            }
        }, function (err) {
            //this.common.closeLoading();
            //Connection failed message
        });
    };
    ConfirmPage.prototype.startcall = function () {
        var tel = this.user.region_phone;
        window.open("tel:" + tel, '_system');
    };
    ConfirmPage.prototype.feedUpdate = function () {
        var _this = this;
        this.common.presentLoading();
        this.authService.postData(this.userPostData, "feedUpdate").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.feedData) {
                _this.common.closeLoading();
                _this.userPostData.feed = "";
                _this.userPostData.ulocation = "";
                _this.submitted = true;
                //this.updatebox.setFocus();
                setTimeout(function () {
                    if (_this.userPostData.type == 2) {
                        var tel = _this.userPostData.region_phone;
                        window.open("tel:" + tel, '_system');
                    }
                }, 150);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    ConfirmPage.prototype.confirmshow = function () {
        var _this = this;
        var popupMessage = "<span>" + "You are requesting service at the following location:" + "</span><h3>" + this.userPostData.ulocation + "</h3><span>You described the issue as follows:</span><h3>" + this.userPostData.feed + "</h3>";
        var latemsg = "This Service request is being made outside of regular business hours. If this is an emergency, call in request.";
        if (this.isWorkingHour) {
            popupMessage = popupMessage + "<p class='warning-text'>" + latemsg + "</p>";
        }
        if (this.userPostData.feed == "" || this.userPostData.ulocation == "") {
            // alert("");
            var alert_1 = this.alertCtrl.create({
                title: "Attention!",
                message: 'Please write down your issue.',
                buttons: ['OK']
            });
            alert_1.present();
            return false;
        }
        var alert1 = this.alertCtrl.create({
            title: "Confirm Request",
            message: popupMessage,
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Confirm",
                    handler: function () {
                        _this.feedUpdate();
                    }
                }
            ]
        });
        alert1.present();
    };
    ConfirmPage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.postData(_this.userPostData, "feed").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.feedData.length) {
                        var newData = _this.resposeData.feedData;
                        _this.userPostData.lastCreated = _this.resposeData.feedData[newData.length - 1].created;
                        for (var i = 0; i < newData.length; i++) {
                            _this.dataSet.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    ConfirmPage.prototype.converTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    ConfirmPage.prototype.backToWelcome = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    ConfirmPage.prototype.isWorkingHour = function (now) {
        return now.getDay() <= 4 && now.getHours() >= 9 && now.getHours() < 17;
    };
    ConfirmPage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("updatebox"),
        __metadata("design:type", Object)
    ], ConfirmPage.prototype, "updatebox", void 0);
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirm',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/confirm/confirm.html"*/'<ion-header no-border>\n  <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n    <ion-buttons end>\n        <button ion-button icon-only (click)="backToWelcome()">\n            <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  </ion-header>\n  <ion-content padding class="normalize-ion">\n\n  <h3 class="heading">Confirm Request</h3>\n\n<div class="submitted" *ngIf="submitted" style="text-align: center;">\n<ion-icon name="checkmark-circle-outline" item-left style="color: green;padding: 2px;font-size: 100px;margin: 10px;"></ion-icon>\n<p>Request has been submitted!</p>\n</div>\n<div *ngIf="!submitted">\n   <p style=\'color: grey;\'>You are requesting service at the following location:</p> \n   <p class="adrs" [innerHTML]="user.locdata"> </p>\n\n \n\n<p style=\'color: grey;\' >You described the issue as follows: </p>   \n<p class="adrs">{{userPostData.feed}}</p> \n\n    <ion-item id="udpateBox">\n      <ion-row>\n\n        <button ion-button color="primary" class="bottom-main-btn" (click)="feedUpdate()" style="width:100%" *ngIf="userPostData.type==1">Confirm Request</button>\n   \n      </ion-row>\n    </ion-item>\n\n    <div *ngIf="userPostData.type==1">  \n      <div class="call-warning-text" *ngIf="close">\n        <p style="color:rgb(245, 244, 244);background-color: red;font-weight: 600;font-size: 15px;padding: 11px;text-align: center;" >\n            This Service request is being made outside of regular business hours. \n            <br/> <br/>24 hours emergency service available. \n            <br/> <br/> If this is an emergency, please call.If this is an emergency, call in request\n          \n        </p>  \n        <button ion-button color="primary" class="bottom-main-btn" (click)="startcall()" style="width:100%">Start Call</button>\n        </div>\n      </div>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/confirm/confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(common, alertCtrl, navCtrl, app, authService, navParams) {
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.navParams = navParams;
        this.userData = { "name": "", "adress1": "", "adress2": "", "city": "", "state": "", "zip": "", "user_id": "", "token": "" };
        this.userPostData = {
            user_id: "",
            token: "",
            feed: "",
            feed_id: "",
            lastCreated: ""
        };
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.noRecords = false;
        this.submitted = false;
        // console.log (this.userPostData);
    }
    LocationPage.prototype.feedUpdate = function () {
        var _this = this;
        this.common.presentLoading();
        this.userData.user_id = this.userPostData.user_id;
        this.userData.token = this.userPostData.token;
        this.authService.postData(this.userData, "locationUpdate").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.location) {
                _this.common.closeLoading();
                _this.submitted = true;
                setTimeout(function () {
                }, 150);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    LocationPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    LocationPage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.postData(_this.userPostData, "feed").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.feedData.length) {
                        var newData = _this.resposeData.feedData;
                        _this.userPostData.lastCreated = _this.resposeData.feedData[newData.length - 1].created;
                        for (var i = 0; i < newData.length; i++) {
                            _this.dataSet.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    LocationPage.prototype.converTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    LocationPage.prototype.backToWelcome = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    LocationPage.prototype.isWorkingHour = function (now) {
        return now.getDay() <= 4 && now.getHours() >= 9 && now.getHours() < 17;
    };
    LocationPage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("updatebox"),
        __metadata("design:type", Object)
    ], LocationPage.prototype, "updatebox", void 0);
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-location',template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/location/location.html"*/'<ion-header no-border>\n  <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n    <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n    <ion-buttons end>\n        <button ion-button icon-only (click)="backToWelcome()">\n            <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  </ion-header>\n\n  <ion-content padding class="normalize-ion">\n\n\n\n<div class="submitted" *ngIf="submitted" style="text-align: center;">\n\n\n  <ion-icon name="checkmark-circle-outline" item-left style="color: green;padding: 2px;font-size: 100px;margin: 10px;"></ion-icon>\n    \n<p>Location has been added!</p>\n\n\n</div>\n\n\n<div *ngIf="!submitted">\n    <h3 class="heading">Add New Location</h3>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Location Name</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text"  [(ngModel)]="userData.name"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label fixed>Street Adress</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text"  [(ngModel)]="userData.adress1"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label fixed>Street Adress 2</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text"  [(ngModel)]="userData.adress2"></ion-input>\n  </ion-item>\n  \n    <ion-item>\n      <ion-label fixed>City</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text"  [(ngModel)]="userData.city"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>State</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="userData.state"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>Zip Code</ion-label>\n      </ion-item>\n  <ion-item class="mb-10">\n     <ion-input type="text" [(ngModel)]="userData.zip"></ion-input>\n  </ion-item>\n\n    <button ion-button block color="primary" (click)="feedUpdate()" class="sign-btn btn-border bottom-main-btn mb-10">Add Location</button>\n    \n  </ion-list>\n\n</div>\n\n<button ion-button block color="secondary" (click)="goback()" class="bottom-main-btn bg-secondary btn-border">Go Back!</button>\n    \n</ion-content>\n\n'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/location/location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_submit_submit__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPage = (function () {
    function ListPage(common, alertCtrl, navCtrl, app, authService) {
        this.common = common;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.userPostData = {
            user_id: "",
            token: "",
            feed: "",
            feed_id: "",
            lastCreated: "",
            ulocation: "",
            type: 1,
            email: "",
            region_phone: "",
            timezone: "",
            contact_no: "",
            name: "",
        };
        var data = JSON.parse(localStorage.getItem("userData"));
        var location = localStorage.getItem("location");
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.userPostData.email = this.userDetails.email;
        this.userPostData.name = this.userDetails.name;
        this.userPostData.contact_no = this.userDetails.contact_no;
        this.userPostData.ulocation = location;
        this.userPostData.lastCreated = "";
        this.userPostData.region_phone = "";
        this.userPostData.timezone = "";
        this.noRecords = false;
        this.noRecords = false;
        this.getFeed();
    }
    ListPage.prototype.getFeed = function () {
        var _this = this;
        this.common.presentLoading();
        this.authService.postData(this.userPostData, "feed").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.feedData) {
                _this.common.closeLoading();
                _this.dataSet = _this.resposeData.feedData;
                console.log(_this.dataSet);
                var dataLength = _this.resposeData.feedData.length;
                _this.userPostData.lastCreated = _this.resposeData.feedData[dataLength - 1].created;
            }
            else {
                _this.common.closeLoading();
                _this.nodata = true;
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    ListPage.prototype.feedUpdate = function (data) {
        var _this = this;
        data.user_id = this.userPostData.user_id;
        data.token = this.userPostData.token;
        data.email = this.userPostData.email;
        data.name = this.userPostData.email;
        data.contact_no = this.userPostData.contact_no;
        data.resub = 1;
        this.common.presentLoading();
        this.authService.postData(data, "feedUpdate").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.feedData) {
                _this.common.closeLoading();
                _this.dataSet.unshift(_this.resposeData.feedData);
                //this.updatebox.setFocus();
                setTimeout(function () {
                    //  this.updatebox.focus();
                }, 150);
            }
            else {
                console.log("No access");
                _this.common.closeLoading();
            }
        }, function (err) {
            //Connection failed message
        });
    };
    ListPage.prototype.feedDelete = function (feed_id, msgIndex) {
        var _this = this;
        if (feed_id > 0) {
            var alert_1 = this.alertCtrl.create({
                title: "Delete Feed",
                message: "Do you want to buy this feed?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: function () {
                            console.log("Cancel clicked");
                        }
                    },
                    {
                        text: "Delete",
                        handler: function () {
                            _this.userPostData.feed_id = feed_id;
                            _this.authService.postData(_this.userPostData, "feedDelete").then(function (result) {
                                _this.resposeData = result;
                                if (_this.resposeData.success) {
                                    _this.dataSet.splice(msgIndex, 1);
                                }
                                else {
                                    console.log("No access");
                                }
                            }, function (err) {
                                //Connection failed message
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    ListPage.prototype.pushPage = function () {
        //this.viewCtrl.dismiss();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_submit_submit__["a" /* SubmitPage */]);
    };
    ListPage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.postData(_this.userPostData, "feed").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.feedData.length) {
                        var newData = _this.resposeData.feedData;
                        _this.userPostData.lastCreated = _this.resposeData.feedData[newData.length - 1].created;
                        for (var i = 0; i < newData.length; i++) {
                            _this.dataSet.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    ListPage.prototype.resubmit = function (data) {
        var _this = this;
        var alert1 = this.alertCtrl.create({
            title: "Do you want to resubmit this request",
            // message: "Are You Sure?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.feedUpdate(data);
                    }
                }
            ]
        });
        alert1.present();
    };
    ListPage.prototype.converTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    ListPage.prototype.backToWelcome = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    ListPage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("updatebox"),
        __metadata("design:type", Object)
    ], ListPage.prototype, "updatebox", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: "page-list",template:/*ion-inline-start:"/Users/shojol/Downloads/perfection/src/pages/list/list.html"*/'<ion-header no-border>\n    <ion-navbar hideBackButton="true"> <!-- If you don\'t need back here -->\n      <img ion-right src="assets/imgs/bananalogo.png" class="navbarLogo" />\n      <ion-buttons end>\n          <button ion-button icon-only (click)="backToWelcome()">\n              <ion-icon name="home" style="color:#1A8AD6;"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n    </ion-header>\n\n    <ion-content padding class="normalize-ion">\n    <h3 class="heading">View Past Requests</h3>\n\n<ion-card *ngIf="nodata"  class="past-req-container">\n      <ion-item>\n        No Request Found!\n      </ion-item>\n  </ion-card>\n  \n\n  <ion-card class="past-req-container" *ngFor="let item of dataSet; let msgIndex = index">\n    <ion-item>\n      <img ion-right src="assets/icon/icon8.png" class="iocnlogo" />\n      <ion-card-content class="past-request-block">\n        <span >Request Type: {{item.type}}</span>\n        <br>\n        <span>Date: {{item.date}}</span><br>\n        <span>Time: {{item.time}}</span><br>\n        <span>Location: {{item.ulocation}}</span><br>\n        <span>Details: {{item.feed}}</span>\n      </ion-card-content>\n\n      \n    </ion-item>\n\n    <button ion-button color="primary" (click)="resubmit(item)" style="width: 92%;margin: 10px;">Resubmit</button>\n  </ion-card>\n\n  <ion-card *ngIf="noRecords">\n    <ion-item>\n      No Records\n    </ion-item>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" *ngIf="!noRecords">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/shojol/Downloads/perfection/src/pages/list/list.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map