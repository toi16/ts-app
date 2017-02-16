(function () {
"use strict";

angular.module('public')
.controller('TsController', TsController);

TsController.$inject = ['TimesheetService']
function TsController(TimesheetService) {
  var tsCtrl = this;
  tsCtrl.completed = false;
  tsCtrl.firstname ="";
  tsCtrl.lastname = "";
  tsCtrl.email = "";
  tsCtrl.startdate = "";

  tsCtrl.saveTs = function () {
      TimesheetService.saveTimesheet(tsCtrl.firstname, tsCtrl.lastname, tsCtrl.email, tsCtrl.startdate);
      if (TimesheetService.saveTimesheet) {
      tsCtrl.completed = true;
    }else {
      tsCtrl.completed = false;
    };

      };

}


})();
