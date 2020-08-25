import { Component } from '@angular/core';
import {EChartOption} from 'echarts';

@Component({
  selector: 'app-country-tab',
  template: '<div echarts [options]="countryChartOption" theme="dark" loading="true"></div>'
})
export class CountryTabComponent {

  countryChartOption: EChartOption = {
    title: {
      text: 'Türkiyedeki vaka durumu',
      left: 'center'
    },
    legend: {
      data: ['Toplam Vaka', 'Toplam Ölüm', 'Toplam İyileşme'],
      align: 'left',
      top: 30
    },
    xAxis: {
      type: 'category',
      data: ['11/03/2020', '12/03/2020', '13/03/2020', '14/03/2020', '15/03/2020', '16/03/2020',
        '17/03/2020', '18/03/2020', '19/03/2020', '20/03/2020']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Toplam Vaka',
        data: [1, 1, 5, 6, 18, 47, 98, 193, 359, 670],
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            color: '#b6a90a'
          }
        },
        type: 'line',
        smooth: true
      }, {
        name: 'Toplam Ölüm',
        data: [0, 0, 0, 0, 0, 0, 1, 2, 4, 9],
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            color: '#b60e00'
          }
        },
        type: 'line'
      }, {
        name: 'Toplam İyileşme',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        label: {
          normal: {
            show: false,
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            color: '#2ab646'
          }
        },
        type: 'line'
      }
    ]
  };
}
