import { Component } from '@angular/core';
import {EChartOption} from 'echarts';
import '../../../assets/world';

@Component({
  selector: 'app-map-tab',
  template: '<div echarts [options]="worldMapOption" theme="dark" loading="true"></div>'
})
export class MapTabComponent {

  worldMapOption: EChartOption = {
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          title: 'Resim olarak kaydet',
          show: true
        },
        restore: {
          title: 'Geri al',
        }
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '<br>1234 vaka<br>255 ölü<br>342 iyileşen'
    },
    visualMap: [{
      min: 0,
      max: 50000,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    }],
    series: [{
      name: 'Infection Map',
      type: 'map',
      map: 'world',
      roam: true,
      data: [
        {
          name: 'Turkey',
          value: 1234
        },
        {
          name: 'China',
          value: 45000,
        },
        {
          name: 'Russia',
          value: 6666
        }
      ]
    }]
  };
}
