import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { PersianNumberPipe } from '@app/shared';
import { DashboardPage } from './dashboard.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    PersianNumberPipe,
    NgxDatatableModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
