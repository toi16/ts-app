(function () {
"use strict";

angular.module('public')
.controller('TimesheetEditController', TimesheetEditController);

TimesheetEditController.$inject = ['TimesheetService', 'ApiPath'];
function TimesheetEditController(TimesheetService, ApiPath) {
  var tsECtrl = this;
  tsECtrl.timesheetData = TimesheetService.getTimesheet();
  tsECtrl.date1 = tsECtrl.timesheetData[1].startdate;
}

})();
