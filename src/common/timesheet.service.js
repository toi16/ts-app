(function () {
"use strict";

angular.module('common')
.service('TimesheetService', TimesheetService);


TimesheetService.$inject = ['$http', 'ApiPath'];
function TimesheetService($http, ApiPath) {
  var service = this;
  var timesheets = [];

    service.saveTimesheet = function (firstName, lastName, email, startdate) {

          var timesheet = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            startdate: startdate
          };
        timesheets.push(timesheet);
        
        };

  service.getTimesheet = function () {
        return timesheets;

      };

}



})();
