import { Component, OnInit } from '@angular/core';
import { dictionary } from '@dictionary/dictionary';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';
import MapModule from 'highcharts/modules/map';

if (typeof TreemapModule === 'function') {
  TreemapModule(Highcharts);
}

if (typeof MapModule === 'function') {
  MapModule(Highcharts);
}
import worldMapData from '@highcharts/map-collection/custom/world.geo.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  dictionary = dictionary;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  pieChartOptions: Highcharts.Options = {};
  treemapChartOptions: Highcharts.Options = {};
  mapChartOptions: Highcharts.Options = {};

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loadChart();
      this.loadPieChart();
      this.loadTreeMap();
      this.loadMapChart();
    }, 200);
  }

  loadChart() {
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
      },
      title: {
        text: 'Monthly Sales Data',
        style: {
          color: 'var(--ion-text-color)',
        },
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        labels: {
          style: {
            color: 'var(--ion-text-color)',
          },
        },
      },
      yAxis: {
        title: {
          text: 'Sales (in USD)',
          style: {
            color: 'var(--ion-text-color)',
          },
        },
      },
      series: [
        {
          name: 'Sales',
          type: 'column',
          data: [4500, 6000, 8000, 7000, 9000],
        },
      ],
    };

    Highcharts.chart('highchart-container', this.chartOptions);
  }
  loadPieChart() {
    this.pieChartOptions = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
      },
      title: {
        text: 'Sales Distribution',
        style: {
          color: 'var(--ion-text-color)',
        },
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        style: {
          color: 'var(--ion-text-color)',
        },
      },
      series: [
        {
          name: 'Sales',
          type: 'pie',
          data: [
            { name: 'Product A', y: 40, color: '#FF5733' }, // 🔴 Red
            { name: 'Product B', y: 30, color: '#33FF57' }, // 🟢 Green
            { name: 'Product C', y: 20, color: '#3380FF' }, // 🔵 Blue
            { name: 'Product D', y: 10, color: '#F0DB4F' }, // 🟡 Yellow
          ],
        },
      ],
    };

    Highcharts.chart('pie-chart-container', this.pieChartOptions);
  }
  loadTreeMap() {
    this.treemapChartOptions = {
      chart: {
        type: 'treemap',
        backgroundColor: 'transparent',
      },
      title: {
        text: 'Sales Performance by Region',
        style: {
          color: 'var(--ion-text-color)',
        },
      },
      colorAxis: {
        minColor: '#EFEFFF',
        maxColor: '#0174DF',
      },
      series: [
        {
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          data: [
            { name: 'North America', value: 50, color: '#FF5733' }, // 🔴 Red
            { name: 'Europe', value: 30, color: '#33FF57' }, // 🟢 Green
            { name: 'Asia', value: 20, color: '#3380FF' }, // 🔵 Blue
            { name: 'South America', value: 15, color: '#F0DB4F' }, // 🟡 Yellow
            { name: 'Africa', value: 10, color: '#A569BD' }, // 🟣 Purple
          ],
        },
      ],
    };

    Highcharts.chart('treemap-chart-container', this.treemapChartOptions);
  }
  loadMapChart() {
    this.mapChartOptions = {
      chart: {
        map: worldMapData,
        backgroundColor: 'transparent',
      },
      title: {
        text: 'World Population Density',
      },
      colorAxis: {
        min: 0,
        stops: [
          [0, '#EFEFFF'],
          [0.5, '#4477AA'],
          [1, '#000022'],
        ],
      },
      series: [
        {
          name: 'Population Density',
          type: 'map',
          data: [
            ['us', 300], // USA
            ['cn', 1400], // China
            ['in', 1300], // India
            ['br', 210], // Brazil
            ['ru', 144], // Russia
          ],
          joinBy: ['iso-a2', '0'], // Match data with country codes
          mapData: worldMapData, // Use the imported world map
        },
      ],
    };

    Highcharts.mapChart('map-chart-container', this.mapChartOptions);
  }
}
