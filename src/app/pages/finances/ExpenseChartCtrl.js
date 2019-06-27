(function () {
  'use strict';

  angular.module('BlurAdmin.pages.finances')
    .controller('ExpenseChartCtrl', ExpenseChartCtrl);

  /** @ngInject */
  function ExpenseChartCtrl($scope, baConfig, $element, layoutPaths) {
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
          country: 'Коммунальные расходы',
          litres: 13.5
        },

        {
          country: 'Пополнение библиотечных фондов',
          litres: 3.4
        },
        {
          country: 'Начисления на оплату труда',
          litres: 12.5
        },
        {
          country: 'Другое',
          litres: 6.9
        },
        {
          country: 'Учебное оборудование',
          litres: 4.1
        },
        {
          country: 'Повышение квалификации',
          litres: 1.7
        },
        {
          country: 'Оплата труда',
          litres: 58.1
        },
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
        rules: [
          // at 900px wide, we hide legend
          {
            maxWidth: 900,
            overrides: {
              legend: {
                enabled: false
              }
            }
          },

          // at 200 px we hide value axis labels altogether
          {
            maxWidth: 200,
            overrides: {
              valueAxes: {
                labelsEnabled: false
              },
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 30,
              marginRight: 30
            }
          }
        ]
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
