import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { IonicModule } from '@ionic/angular';
import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { CellComponent } from './components/cell/cell.component';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HighchartsChartModule,
    AgGridModule,
  ],
  declarations: [DashboardPage, CellComponent],
  providers: [provideHttpClient()],
})
export class DashboardPageModule {}
