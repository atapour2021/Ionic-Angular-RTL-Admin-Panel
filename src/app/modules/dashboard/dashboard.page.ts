import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { dictionary } from '@dictionary/dictionary';
import { TableColumn } from '@swimlane/ngx-datatable';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';

if (typeof TreemapModule === 'function') {
  TreemapModule(Highcharts);
}

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

  price = 180000000;
  totalEarnings = 553860000;
  orders = 445500;
  customer = 1230;
  opmDatePicker = false;

  @ViewChild('imageTpl', { static: true }) imageTpl!: TemplateRef<any>;

  columns: TableColumn[] = [];

  transactions = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    productName: `محصول ${i + 1}`,
    productImage: `../../../assets/images/product-2.jpg`,
    productPrice: `${(Math.random() * 1000000).toFixed(0)} تومان`,
    productCount: Math.floor(Math.random() * 10) + 1,
    totalPrice: `${(Math.random() * 5000000).toFixed(0)} تومان`,
  }));

  ngOnInit() {
    setTimeout(() => {
      this.loadChart();
      this.loadTreeMap();

      this.columns = [
        { prop: 'id', name: 'شناسه' },
        { prop: 'productName', name: 'نام محصول' },
        { prop: 'productImage', name: 'تصویر', cellTemplate: this.imageTpl },
        { prop: 'productPrice', name: 'قیمت واحد' },
        { prop: 'productCount', name: 'تعداد' },
        { prop: 'totalPrice', name: 'قیمت کل' },
      ];
    }, 100);
  }

  loadChart() {
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'Vazirmatn',
        },
      },
      title: {
        text: dictionary.MonthlySalesData,
        style: {
          color: 'var(--ion-text-color)',
          fontFamily: 'Vazirmatn',
        },
      },
      colors: [
        '#4caefe',
        '#3fbdf3',
        '#35c3e8',
        '#2bc9dc',
        '#20cfe1',
        '#16d4e6',
        '#0dd9db',
        '#03dfd0',
        '#00e4c5',
        '#00e9ba',
        '#00eeaf',
        '#23e274',
      ],
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yAxis: {
        title: {
          text: `${dictionary.Sales} (${dictionary.Rial})`,
          style: {
            color: 'var(--ion-text-color)',
            fontFamily: 'Vazirmatn',
          },
        },
      },
      series: [
        {
          type: 'column',
          name: 'Unemployed',
          borderRadius: 5,
          colorByPoint: true,
          data: [
            2396, 2434, 2491, 2602, 2536, 2618, 2928, 2899, 2780, 2853, 2923,
            2999,
          ],
          showInLegend: false,
        },
      ],
      credits: {
        enabled: false,
      },
    };

    Highcharts.chart('highchart-container', this.chartOptions);
  }
  loadTreeMap() {
    this.treemapChartOptions = {
      chart: {
        type: 'treemap',
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'Vazirmatn',
        },
      },
      title: {
        text: '',
        style: {
          color: 'var(--ion-text-color)',
          fontFamily: 'Vazirmatn',
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
            {
              name: dictionary.laptopAsusPROART,
              value: 50000000,
              color: '#FF5733',
            },
            {
              name: dictionary.MobileSamsungA52,
              value: 30000000,
              color: '#33FF57',
            },
            { name: dictionary.laptopHPPRO, value: 45000000, color: '#3380FF' },
            {
              name: dictionary.MobileSamsungS21,
              value: 30000000,
              color: '#F0DB4F',
            },
            {
              name: dictionary.MobileIPhone16,
              value: 25000000,
              color: '#A569BD',
            },
          ],
        },
      ],
    };

    Highcharts.chart('treemap-chart-container', this.treemapChartOptions);
  }
}
