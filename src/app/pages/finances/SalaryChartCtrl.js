(function () {
  'use strict';

  angular.module('BlurAdmin.pages.finances')
    .controller('SalaryChartCtrl', SalaryChartCtrl);

  /** @ngInject */
  function SalaryChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');

    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
        {
          position: 'Все',
          salary: 1122,
          color: layoutColors.warning
        },
        {
          position: 'Директор',
          salary: 3025,
          color: layoutColors.primary
        },
        {
          position: 'Завуч',
          salary: 1882,
          color: layoutColors.danger

        },
        {
          position: 'Учитель',
          salary: 1809,
          color: layoutColors.info
        },
        {
          position: 'Учитель 1 кат.',
          salary: 1322,
          color: layoutColors.success
        },
        {
          position: 'Завхоз',
          salary: 1122,
          color: layoutColors.warning
        },
        {
          position: 'Уборщик',
          salary: 1114,
          color: layoutColors.primaryLight
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Средняя з/п',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
          type: 'column',
          valueField: 'salary'
        }
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'position',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 90,
        gridAlpha: 1,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });
  }

})();
