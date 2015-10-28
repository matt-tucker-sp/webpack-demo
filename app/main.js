var angular = require('angular');

var MainModule = angular.module('main', [
   require('./doSomething/doSomething').name
]);

module.exports = MainModule