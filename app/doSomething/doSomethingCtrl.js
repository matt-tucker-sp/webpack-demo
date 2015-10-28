/*@ngInject*/
var DoSomethingCtrl = function(commonService) {
   this.getThatThing = function() {
     return commonService.getDate();
   }
};

module.exports = DoSomethingCtrl;