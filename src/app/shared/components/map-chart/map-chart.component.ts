import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import { HttpClient } from '@angular/common/http';

// Load Highcharts Maps module
MapModule(Highcharts);

@Component({
  selector: 'app-map-chart',
  template: ` <div id="highchart-map-container" style="width: 100%;"></div> `,
})
export class MapChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  mapChartOptions: Highcharts.Options = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMapData();
  }

  loadMapData(): void {
    this.http.get('assets/mapdata/world.geo.json').subscribe(
      (mapData) => {
        this.loadMapChart(mapData);
      },
      (error) => {
        console.error('Error loading map data:', error);
      }
    );
  }

  loadMapChart(worldMap: any): void {
    this.mapChartOptions = {
      chart: {
        map: worldMap,
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
            ['us', 300],
            ['cn', 1400],
            ['in', 1300],
            ['br', 210],
            ['ru', 144],
          ],
          joinBy: ['iso-a2', '0'],
          mapData: worldMap,
        },
      ],
      credits: {
        enabled: false,
      },
    };

    Highcharts.mapChart('highchart-map-container', this.mapChartOptions);
  }
}
