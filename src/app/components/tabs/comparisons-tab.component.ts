import { Component } from '@angular/core';
import {EChartOption} from 'echarts';

@Component({
  selector: 'app-comparisons-tab',
  template: '<div echarts [options]="worldChartOption" theme="dark" loading="true"></div>'
})
export class ComparisonsTabComponent {

  worldChartOption: EChartOption = {
    title: {
      text: 'Dünyadaki vaka durumu',
      left: 'center'
    },
    legend: {
      data: ['Türkiye', 'İran', 'İtalya', 'İspanya'],
      align: 'left',
      top: 30
    },
    xAxis: {
      type: 'category',
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Türkiye',
        data: [1, 1, 5, 6, 18, 47, 98, 193, 359, 670, 947],
        type: 'line'
      },
      {
        name: 'İran',
        data: [2, 5, 18, 28, 43, 61, 95, 139, 245, 388, 593],
        type: 'line'
      },
      {
        name: 'İtalya',
        data: [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
        type: 'line'
      }
    ]
  };
}
