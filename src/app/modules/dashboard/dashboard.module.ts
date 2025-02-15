import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { provideHttpClient } from '@angular/common/http';
import { PersianNumberPipe } from '@app/shared';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    PersianNumberPipe,
    NgxDatatableModule,
    HighchartsChartModule,
  ],
  declarations: [DashboardPage],
  providers: [provideHttpClient()],
})
export class DashboardPageModule {}
