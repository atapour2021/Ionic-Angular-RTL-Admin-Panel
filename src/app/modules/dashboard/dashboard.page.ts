import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@app/layout';
import { dictionary } from '@dictionary/dictionary';
import worldMapData from '@highcharts/map-collection/custom/world.geo.json';
import {
  ClientSideRowModelModule,
  ColDef,
  GridOptions,
  themeAlpine,
} from 'ag-grid-community';
import * as Highcharts from 'highcharts';
import {
  default as HC_map,
  default as MapModule,
} from 'highcharts/modules/map';
import proj4 from 'proj4';
import { CellComponent } from './components/cell/cell.component';

if (typeof MapModule === 'function') {
  MapModule(Highcharts);
  HC_map(Highcharts);
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
  mapChartOptions: Highcharts.Options = {};
  pieChartOptions: Highcharts.Options = {};

  price = 180000000;
  totalEarnings = 553860000;
  orders = 445500;
  customer = 1230;
  columnDefs: ColDef[] = [
    {
      field: 'image',
      headerName: '',
      cellRenderer: CellComponent,
    },
    {
      field: 'orderID',
      headerName: dictionary.OrderID,
      cellRenderer: CellComponent,
    },
    {
      field: 'customer',
      headerName: dictionary.Customer,
      cellRenderer: CellComponent,
    },
    {
      field: 'product',
      headerName: dictionary.Product,
      cellRenderer: CellComponent,
    },
    {
      field: 'vendor',
      headerName: dictionary.Vendor,
      cellRenderer: CellComponent,
    },
    {
      field: 'amount',
      headerName: dictionary.Amount,
      cellRenderer: CellComponent,
    },
    {
      field: 'status',
      headerName: dictionary.Status,
      cellRenderer: CellComponent,
    },
  ];
  rowData = [
    {
      orderID: '#VZ2112',
      customer: 'الکس اسمیت',
      image: '../../../assets/images/avatar.jpg',
      product: 'لباس',
      vendor: 'مد زئوتیک',
      amount: 10900,
      status: 'در انتظار',
    },
    {
      orderID: '#VZ2111',
      customer: 'جانش براون',
      image: '../../../assets/images/avatar-1.jpg',
      product: 'لوازم آشپزخانه',
      vendor: 'طراحی میکرو',
      amount: 10900,
      status: 'پرداخت شده',
    },
    {
      orderID: '#VZ2110',
      customer: 'آیان بوون',
      image: '../../../assets/images/avatar-2.jpg',
      product: 'لوازم جانبی دوچرخه',
      vendor: 'فناوری نستا',
      amount: 21500.0,
      status: 'پرداخت شده',
    },
    {
      orderID: '#VZ2109',
      customer: 'پرزی مارک',
      image: '../../../assets/images/avatar-3.jpg',
      product: 'مبلمان',
      vendor: 'راهکار سینتایس',
      amount: 199000.0,
      status: 'پرداخت نشده',
    },
    {
      orderID: '#VZ2108',
      customer: 'ویهان هودا',
      image: '../../../assets/images/avatar-4.jpg',
      product: 'کیف و کیف پول',
      vendor: 'کارخانه تست',
      amount: 330000,
      status: 'پرداخت شده',
    },
  ];
  modules = [ClientSideRowModelModule];
  isDarkMode = false;
  themeAlpine = themeAlpine.withParams({
    fontFamily: 'Vazirmatn',
    headerFontFamily: 'Vazirmatn',
    cellFontFamily: 'Vazirmatn',
  });

  constructor(private layoutService: LayoutService) {
    this.layoutService.theme.subscribe((theme) => {
      this.isDarkMode = theme !== 'Light';
    });
  }

  ngOnInit() {
    this.isDarkMode = this.layoutService.getTheme() !== 'Light';
    this.loadChart();
    this.loadMapChart();
    this.loadPieChart();
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
          'فروردین',
          'اردیبهشت',
          'خرداد',
          'تیر',
          'مرداد',
          'شهریور',
          'مهر',
          'آبان',
          'آذر',
          'دی',
          'بهمن',
          'اسفند',
        ],
        labels: {
          style: {
            color: 'var(--ion-text-color)',
          },
        },
      },
      yAxis: {
        title: {
          text: `${dictionary.Sales} (${dictionary.Rial})`,
          style: {
            color: 'var(--ion-text-color)',
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
  loadMapChart(): void {
    this.mapChartOptions = {
      chart: {
        map: worldMapData,
        proj4: proj4,
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'Vazirmatn',
        },
      },
      title: {
        text: '',
      },
      mapNavigation: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55',
            },
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}',
          },
          allAreas: true,
          data: [
            ['fo', 0],
            ['um', 1],
            ['us', 2],
            ['jp', 3],
            ['sc', 4],
            ['in', 5],
            ['fr', 6],
            ['fm', 7],
            ['cn', 8],
            ['pt', 9],
            ['sw', 10],
            ['sh', 11],
            ['br', 12],
            ['ki', 13],
            ['ph', 14],
            ['mx', 15],
            ['es', 16],
            ['bu', 17],
            ['mv', 18],
            ['sp', 19],
            ['gb', 20],
            ['gr', 21],
            ['as', 22],
            ['dk', 23],
            ['gl', 24],
            ['gu', 25],
            ['mp', 26],
            ['pr', 27],
            ['vi', 28],
            ['ca', 29],
            ['st', 30],
            ['cv', 31],
            ['dm', 32],
            ['nl', 33],
            ['jm', 34],
            ['ws', 35],
            ['om', 36],
            ['vc', 37],
            ['tr', 38],
            ['bd', 39],
            ['lc', 40],
            ['nr', 41],
            ['no', 42],
            ['kn', 43],
            ['bh', 44],
            ['to', 45],
            ['fi', 46],
            ['id', 47],
            ['mu', 48],
            ['se', 49],
            ['tt', 50],
            ['my', 51],
            ['pa', 52],
            ['pw', 53],
            ['tv', 54],
            ['mh', 55],
            ['cl', 56],
            ['th', 57],
            ['gd', 58],
            ['ee', 59],
            ['ag', 60],
            ['tw', 61],
            ['bb', 62],
            ['it', 63],
            ['mt', 64],
            ['vu', 65],
            ['sg', 66],
            ['cy', 67],
            ['lk', 68],
            ['km', 69],
            ['fj', 70],
            ['ru', 71],
            ['va', 72],
            ['sm', 73],
            ['kz', 74],
            ['az', 75],
            ['tj', 76],
            ['ls', 77],
            ['uz', 78],
            ['ma', 79],
            ['co', 80],
            ['tl', 81],
            ['tz', 82],
            ['ar', 83],
            ['sa', 84],
            ['pk', 85],
            ['ye', 86],
            ['ae', 87],
            ['ke', 88],
            ['pe', 89],
            ['do', 90],
            ['ht', 91],
            ['pg', 92],
            ['ao', 93],
            ['kh', 94],
            ['vn', 95],
            ['mz', 96],
            ['cr', 97],
            ['bj', 98],
            ['ng', 99],
            ['ir', 100],
            ['sv', 101],
            ['sl', 102],
            ['gw', 103],
            ['hr', 104],
            ['bz', 105],
            ['za', 106],
            ['cf', 107],
            ['sd', 108],
            ['cd', 109],
            ['kw', 110],
            ['de', 111],
            ['be', 112],
            ['ie', 113],
            ['kp', 114],
            ['kr', 115],
            ['gy', 116],
            ['hn', 117],
            ['mm', 118],
            ['ga', 119],
            ['gq', 120],
            ['ni', 121],
            ['lv', 122],
            ['ug', 123],
            ['mw', 124],
            ['am', 125],
            ['sx', 126],
            ['tm', 127],
            ['zm', 128],
            ['nc', 129],
            ['mr', 130],
            ['dz', 131],
            ['lt', 132],
            ['et', 133],
            ['er', 134],
            ['gh', 135],
            ['si', 136],
            ['gt', 137],
            ['ba', 138],
            ['jo', 139],
            ['sy', 140],
            ['mc', 141],
            ['al', 142],
            ['uy', 143],
            ['cnm', 144],
            ['mn', 145],
            ['rw', 146],
            ['so', 147],
            ['bo', 148],
            ['cm', 149],
            ['cg', 150],
            ['eh', 151],
            ['rs', 152],
            ['me', 153],
            ['tg', 154],
            ['la', 155],
            ['af', 156],
            ['ua', 157],
            ['sk', 158],
            ['jk', 159],
            ['bg', 160],
            ['qa', 161],
            ['li', 162],
            ['at', 163],
            ['sz', 164],
            ['hu', 165],
            ['ro', 166],
            ['ne', 167],
            ['lu', 168],
            ['ad', 169],
            ['ci', 170],
            ['lr', 171],
            ['bn', 172],
            ['iq', 173],
            ['ge', 174],
            ['gm', 175],
            ['ch', 176],
            ['td', 177],
            ['kv', 178],
            ['lb', 179],
            ['dj', 180],
            ['bi', 181],
            ['sr', 182],
            ['il', 183],
            ['ml', 184],
            ['sn', 185],
            ['gn', 186],
            ['zw', 187],
            ['pl', 188],
            ['mk', 189],
            ['py', 190],
            ['by', 191],
            ['cz', 192],
            ['bf', 193],
            ['na', 194],
            ['ly', 195],
            ['tn', 196],
            ['bt', 197],
            ['md', 198],
            ['ss', 199],
            ['bw', 200],
            ['bs', 201],
            ['nz', 202],
            ['cu', 203],
            ['ec', 204],
            ['au', 205],
            ['ve', 206],
            ['sb', 207],
            ['mg', 208],
            ['is', 209],
            ['eg', 210],
            ['kg', 211],
            ['np', 212],
          ],
        } as Highcharts.SeriesMapOptions,
        {
          type: 'mappoint',
          name: 'Iran cities',
          marker: {
            radius: 5,
            fillColor: 'tomato',
          },
          data: [
            {
              name: 'Tehran',
              lat: 35.6892,
              lon: 51.389,
            },
            {
              name: 'Isfahan',
              lat: 32.6546,
              lon: 51.6679,
            },
            {
              name: 'Ahvaz',
              lat: 31.3183,
              lon: 48.6692,
            },
          ],
        } as Highcharts.SeriesMappointOptions,
      ],
      credits: {
        enabled: false,
      },
    };
  }
  loadPieChart(): void {
    this.pieChartOptions = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        style: {
          fontFamily: 'Vazirmatn',
        },
      },
      title: {
        text: dictionary.StoreVisits,
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
      plotOptions: {
        pie: {
          innerSize: '50%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: dictionary.Sales,
          type: 'pie',
          data: [
            { name: dictionary.Electronics, y: 40 },
            { name: dictionary.Clothing, y: 30 },
            { name: dictionary.Groceries, y: 20 },
            { name: dictionary.Books, y: 10 },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }
}
