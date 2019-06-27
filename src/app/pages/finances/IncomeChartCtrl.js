(function () {
  'use strict';

  angular.module('BlurAdmin.pages.finances')
    .controller('IncomeChartCtrl', IncomeChartCtrl);

  /** @ngInject */
  function IncomeChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var pieChart = AmCharts.makeChart(id, {
      type: 'pie',
      startDuration: 0,
      theme: 'blur',
      addClassNames: true,
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      legend: {
        position: 'right',
        marginRight: 100,
        autoMargins: false,
      },
      innerRadius: '40%',
      defs: {
        filter: [
          {
            id: 'shadow',
            width: '200%',
            height: '200%',
            feOffset: {
              result: 'offOut',
              in: 'SourceAlpha',
              dx: 0,
              dy: 0
            },
            feGaussianBlur: {
              result: 'blurOut',
              in: 'offOut',
              stdDeviation: 5
            },
            feBlend: {
              in: 'SourceGraphic',
              in2: 'blurOut',
              mode: 'normal'
            }
          }
        ]
      },
      dataProvider: [
        {
          country: 'Дополнительное обучение',
          litres: 4.7
        },
        {
          country: 'Коммерческая дейстельность',
          litres: 1.3
        },
        {
          country: 'Спонсорские средства',
          litres: 4.7
        },
        {
          country: 'Гранты',
          litres: 3.7
        },
        {
          country: 'Другие доходы',
          litres: 1.8
        },
        {
          country: 'Бюджетные средства на реализацию основной образовательной программы',
          litres: 83.8
        }
      ],
      valueField: 'litres',
      titleField: 'country',
      export: {
        enabled: true
      },
      labelText: "[[title]]",
      creditsPosition: 'bottom-left',

      autoMargins: false,
      marginTop: 10,
      alpha: 0.8,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      pathToImages: layoutPaths.images.amChart,
      responsive: {
        enabled: true,

      }
    });

    pieChart.addListener('init', handleInit);

    pieChart.addListener('rollOverSlice', function (e) {
      handleRollOver(e);
    });

    function handleInit() {
      pieChart.legend.addListener('rollOverItem', handleRollOver);
    }

    function handleRollOver(e) {
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
  }

})();
