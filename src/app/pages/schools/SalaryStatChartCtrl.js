(function () {
  'use strict';

  angular.module('BlurAdmin.pages.finances')
    .controller('SalaryStatChartCtrl', SalaryStatChartCtrl);

  /** @ngInject */
  function SalaryStatChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');

    var arrayINeed = {
      legend: [
        {
          name: 'Все',
          field: 'all'
        },
        {
          name: 'Директор',
          field: 'director'
        },
        {
          name: 'Учительно',
          field: 'teacher'
        }
      ],
      chartData: [
        {
          year: 2018,
          all: 15000,
          director: 30000,
          teacher: 14000,
          color: layoutColors.info
        },
        {
          year: 2019,
          all: 25000,
          director: 35000,
          teacher: 20000,
          color: layoutColors.success
        }
      ]
    };

    var legend = [
      {
        name: 'Все',
        field: 'all'
      },
      {
        name: 'Директор',
        field: 'director'
      },
      {
        name: 'Учительно',
        field: 'teacher'
      }
    ];

    var myGraphs = [];

    legend.forEach(function (item, i) {
      myGraphs.push({
        id: 'g' + i,
        balloonText: '<b>[[title]]: [[value]]</b>',
        bullet: 'round',
        bulletSize: 8,
        lineColor: layoutColors.warning,
        lineThickness: 2,
        negativeLineColor: layoutColors.warning,
        type: 'smoothedLine',
        valueField: item.field,
        title: item.name
      })
    }, myGraphs);

    var testData = [
      {
        year: 2018,
        all: 15000,
        director: 30000,
        teacher: 14000,
        color: layoutColors.info
      },
      {
        year: 2019,
        all: 25000,
        director: 35000,
        teacher: 20000,
        color: layoutColors.success
      }
    ];

    var chartData = [
      {
        year: 2015,
        all: 10000,
        director: 20000,
        teacher: 7000,
        color: layoutColors.warning
      },
      {
        year: 2016,
        all: 9000,
        director: 23000,
        teacher: 7500,
        color: layoutColors.primary
      },
      {
        year: 2017,
        all: 10000,
        director: 24000,
        teacher: 9500,
        color: layoutColors.danger
      },
      {
        year: 2018,
        all: 15000,
        director: 30000,
        teacher: 14000,
        color: layoutColors.info
      },
      {
        year: 2019,
        all: 25000,
        director: 35000,
        teacher: 20000,
        color: layoutColors.success
      }
    ];

    console.log(chartData);

    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: chartData,
      "legend": {
        "useGraphSettings": true
      },
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Средняя з/п',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      graphs: myGraphs,
      //   [
      //   {
      //     id: 'g1',
      //     balloonText: '<b>[[title]]: [[value]]</b>',
      //     bullet: 'round',
      //     bulletSize: 8,
      //     lineColor: layoutColors.warning,
      //     lineThickness: 2,
      //     negativeLineColor: layoutColors.warning,
      //     type: 'smoothedLine',
      //     valueField: 'all',
      //     title: 'Все'
      //   },
      //   {
      //     id: 'g2',
      //     balloonText: '<b>[[title]]: [[value]]</b>',
      //     bullet: 'round',
      //     bulletSize: 8,
      //     lineColor: layoutColors.primary,
      //     lineThickness: 1,
      //     negativeLineColor: layoutColors.primary,
      //     type: 'smoothedLine',
      //     valueField: 'director',
      //     title: 'Директор'
      //   },
      //   {
      //     id: 'g3',
      //     balloonText: '<b>[[title]]: [[value]]</b>',
      //     bullet: 'round',
      //     bulletSize: 8,
      //     lineColor: layoutColors.danger,
      //     lineThickness: 1,
      //     negativeLineColor: layoutColors.danger,
      //     type: 'smoothedLine',
      //     valueField: 'teacher',
      //     title: 'Учитель'
      //   }
      // ],
      chartCursor: {
        "cursorPosition": "mouse"
      },
      categoryField: 'year',
      categoryAxis: {
        // minPeriod: 'YYYY',
        parseDates: false,
        minorGridAlpha: 0.1,
        minorGridEnabled: true,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });
  }

})();
