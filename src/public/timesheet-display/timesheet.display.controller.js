(function () {
"use strict";

angular.module('public')
.controller('TimesheetDisplayController', TimesheetDisplayController);

TimesheetDisplayController.$inject = ['TimesheetService', 'ApiPath', '$filter'];
function TimesheetDisplayController(TimesheetService, ApiPath, $filter) {
  var tsDCtrl = this;
  tsDCtrl.timesheetData = TimesheetService.getTimesheet();
    
}

})();
