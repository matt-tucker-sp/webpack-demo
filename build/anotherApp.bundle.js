webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1),
	    anotherModule = angular.module('another', [
	        __webpack_require__(3).name
	    ]);

	module.exports = anotherModule;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1),
	    CommonModule = __webpack_require__(4),
	    AnotherThingCtrl =  __webpack_require__(6),
	    AnotherThingModule = angular.module('AnotherThingModule', [
	            CommonModule.name
	        ]).
	        controller('AnotherThingCtrl', AnotherThingCtrl);

	module.exports = AnotherThingModule;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	/*@ngInject*/
	var AnotherThingCtrl = function(commonService) {
	    this.getTheLocale = function() {
	        return commonService.getLocaleId();
	    }
	};
	AnotherThingCtrl.$inject = ["commonService"];

	module.exports = AnotherThingCtrl;

/***/ }
]);