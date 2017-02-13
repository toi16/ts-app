(function () {
"use strict";

angular.module('public')
.controller('TimesheetDisplayController', TimesheetDisplayController);

TimesheetDisplayController.$inject = ['TimesheetService', 'ApiPath'];
function TimesheetDisplayController(TimesheetService, ApiPath) {
  var tsDCtrl = this;
  tsDCtrl.timesheetData = TimesheetService.getTimesheet();

}

})();
