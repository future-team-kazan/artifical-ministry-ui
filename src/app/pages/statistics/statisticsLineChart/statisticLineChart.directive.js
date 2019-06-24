/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.statistics')
      .directive('statisticLineChart', StatisticLineChart);

  /** @ngInject */
  function StatisticLineChart() {
    return {
      restrict: 'E',
      controller: 'StatisticLineChartCtrl',
      templateUrl: 'app/pages/statistics/statisticsLineChart/statisticLineChart.html'
    };
  }
})();