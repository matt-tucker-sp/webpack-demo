var angular = require('angular'),
    CommonModule = require('../common/CommonModule'),
    DoSomethingCtrl = require('./doSomethingCtrl'),
    DoSomethingModule = 
        angular.module('doSomething', [CommonModule.name]).
            controller('DoSomethingCtrl', DoSomethingCtrl);

module.exports = DoSomethingModule;