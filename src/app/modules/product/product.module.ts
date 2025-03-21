import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { SharedModule } from '@app/shared';
import { AgGridModule } from 'ag-grid-angular';
import { CellComponent } from './components/cell/cell.component';
import { ProductPage } from './product.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    AgGridModule,
    SharedModule,
  ],
  declarations: [ProductPage, CellComponent],
})
export class ProductPageModule {}
