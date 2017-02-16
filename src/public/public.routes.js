(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.timesheet', {
      url: '/timesheet',
      templateUrl: 'src/public/timesheet/timesheet.html',
      controller: 'TsController',
      controllerAs: 'tsCtrl'

    })
    .state('public.timesheetDisplay', {
      url: '/timesheetDisplay',
      templateUrl: 'src/public/timesheet-display/timesheet-display.html',
      controller: 'TimesheetDisplayController',
      controllerAs: 'tsDCtrl'

    })
    .state('public.timesheetEdit', {
      url: '/timesheetEdit',
      templateUrl: 'src/public/timesheet-edit/timesheet-edit.html',
      controller: 'TimesheetEditController',
      controllerAs: 'tsECtrl',
      resolve: {
        mainTs: ['$stateParams','TimesheetService', function ($stateParams, TimesheetService) {
          return TimesheetService.getTimesheet($stateParams);
        
        }]
      }
    })
    // .state('public.signup', {
    //   url: '/signup',
    //   templateUrl: 'src/public/sign-up/sign-up.html',
    //   controller: 'SignUpController',
    //   controllerAs: 'signup'
    //
    // });
}
})();
