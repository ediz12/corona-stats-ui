import {Component} from '@angular/core';
import {EChartOption} from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corona-turkey';
  tabName = 'country';

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

  worldMapOption: EChartOption = {
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          title: 'Save as Image',
          show: true
        }
      }
    },
    visualMap: {
      min: 0,
      max: 50000,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    },
    series: [{
      name: 'Infection Map',
      type: 'map',
      mapType: 'world',
      roam: true,
      data: [
        {
          name: 'Turkey',
          value: 1234
        }
      ]
    }]
  };



  changeTab(tabName: string) {
    this.tabName = tabName;
    console.log(tabName);
  }

  isActiveTab(tabName: string) {
    if (this.tabName === tabName) {
      return 'active-tab';
    }
  }
}
