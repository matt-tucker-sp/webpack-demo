webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

	var MainModule = angular.module('main', [
	   __webpack_require__(7).name
	]);

	module.exports = MainModule

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1),
	    CommonModule = __webpack_require__(4),
	    DoSomethingCtrl = __webpack_require__(8),
	    DoSomethingModule = 
	        angular.module('doSomething', [CommonModule.name]).
	            controller('DoSomethingCtrl', DoSomethingCtrl);

	module.exports = DoSomethingModule;

/***/ },

/***/ 8:
/***/ function(module, exports) {

	/*@ngInject*/
	var DoSomethingCtrl = function(commonService) {
	   this.getThatThing = function() {
	     return commonService.getDate();
	   }
	};
	DoSomethingCtrl.$inject = ["commonService"];

	module.exports = DoSomethingCtrl;

/***/ }

});