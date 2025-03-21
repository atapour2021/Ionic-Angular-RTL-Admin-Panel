import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersianNumberPipe } from './pipes/persian-number.pipe';

@NgModule({
  declarations: [PersianNumberPipe],
  imports: [CommonModule],
  exports: [PersianNumberPipe, CommonModule],
})
export class SharedModule {}
