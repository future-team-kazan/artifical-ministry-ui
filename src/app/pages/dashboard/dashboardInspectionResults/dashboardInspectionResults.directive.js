(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .directive('dashboardInspectionResults', dashboardInspectionResults);

  /** @ngInject */
  function dashboardInspectionResults() {
    return {
      restrict: 'E',
      title: '@',
      controller: 'DashboardInspectionResultsCtrl',
      templateUrl: 'app/pages/dashboard/dashboardInspectionResults/dashboardInspectionResults.html'
    };
  }
})();