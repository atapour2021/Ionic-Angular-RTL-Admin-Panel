import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { AgGridModule } from 'ag-grid-angular';
import { CellComponent } from './components/cell/cell.component';
import { ProductPage } from './product.page';
import { PersianNumberPipe } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    AgGridModule,
  ],
  declarations: [ProductPage, CellComponent, PersianNumberPipe],
})
export class ProductPageModule {}
