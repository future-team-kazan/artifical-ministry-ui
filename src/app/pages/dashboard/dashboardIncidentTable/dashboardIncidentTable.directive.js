(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .directive('dashboardIncidentTable', dashboardIncidentTable);

  /** @ngInject */
  function dashboardIncidentTable() {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      controller: 'DashboardIncidentTableCtrl',
      templateUrl: 'app/pages/dashboard/dashboardIncidentTable/dashboardIncidentTable.html'
    };
  }
})();