(function () {
"use strict";

angular.module('common')
.service('TimesheetService', TimesheetService);


TimesheetService.$inject = ['$http', 'ApiPath', '$filter', '$localStorage'];
function TimesheetService($http, ApiPath, $filter, $localStorage) {
  var service = this;
  var timesheets = [{firstname: "",
  lastname: "",
  email: "",
  startdate: ""}];

    service.saveTimesheet = function (firstName, lastName, email, startdate) {
          startdate = $filter("date")(startdate, 'dd-MM-yyyy'); //convert date into different format before saving
          var timesheet = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            startdate: startdate
          };

        timesheets.push(timesheet); //put data into array
        $localStorage.data = timesheets; //save data to file
        return true;
        };

  service.getTimesheet = function () {
        timesheets = $localStorage.data; //retrieve data fom file
        return timesheets;

      };

}



})();
