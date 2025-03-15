import { Component, OnInit } from '@angular/core';
import { dictionary } from '@dictionary/dictionary';
import {
  ColDef,
  ClientSideRowModelModule,
  themeAlpine,
} from 'ag-grid-community';
import { CellComponent } from './components/cell/cell.component';
import { LayoutService } from '@app/layout';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: false,
})
export class ProductPage implements OnInit {
  dictionary = dictionary;
  columnDefs: ColDef[] = [
    {
      field: 'image',
      headerName: dictionary.ProductImage,
      cellRenderer: CellComponent,
    },
    {
      field: 'name',
      headerName: dictionary.ProductName,
      cellRenderer: CellComponent,
    },
    {
      field: 'category',
      headerName: dictionary.Category,
      cellRenderer: CellComponent,
    },
    {
      field: 'currentQty',
      headerName: dictionary.CurrentQty,
      cellRenderer: CellComponent,
    },
    {
      field: 'price',
      headerName: dictionary.Price,
      cellRenderer: CellComponent,
    },
    {
      field: 'status',
      headerName: dictionary.Status,
      cellRenderer: CellComponent,
    },
    {
      field: 'actions',
      headerName: '',
      cellRenderer: CellComponent,
    },
  ];
  rowData = [
    {
      image: '../../../assets/images/sumsung-mobile.png',
      name: 'گوشی موبایل سامسونگ',
      category: 'موبایل',
      currentQty: 15,
      price: 12000000,
      status: 'موجود',
    },
    {
      image: '../../../assets/images/No_image_available.svg',
      name: 'لپ تاپ ایسوس',
      category: 'لپ تاپ',
      currentQty: 8,
      price: 35000000,
      status: 'ناموجود',
    },
    {
      image: 'https://via.placeholder.com/150?text=Headphone',
      name: 'هدفون بی سیم سونی',
      category: 'لوازم جانبی',
      currentQty: 20,
      price: 2500000,
      status: 'موجود',
    },
    {
      image: 'https://via.placeholder.com/150?text=SmartWatch',
      name: 'ساعت هوشمند شیائومی',
      category: 'ساعت هوشمند',
      currentQty: 12,
      price: 3200000,
      status: 'موجود',
    },
    {
      image: 'https://via.placeholder.com/150?text=TV',
      name: 'تلویزیون ال جی 55 اینچ',
      category: 'تلویزیون',
      currentQty: 5,
      price: 45000000,
      status: 'ناموجود',
    },
    {
      image: 'https://via.placeholder.com/150?text=Refrigerator',
      name: 'یخچال سامسونگ',
      category: 'لوازم خانگی',
      currentQty: 10,
      price: 55000000,
      status: 'موجود',
    },
    {
      image: 'https://via.placeholder.com/150?text=WashingMachine',
      name: 'ماشین لباسشویی بوش',
      category: 'لوازم خانگی',
      currentQty: 6,
      price: 28000000,
      status: 'موجود',
    },
    {
      image: 'https://via.placeholder.com/150?text=Tablet',
      name: 'تبلت اپل آیپد',
      category: 'تبلت',
      currentQty: 9,
      price: 18000000,
      status: 'ناموجود',
    },
    {
      image: 'https://via.placeholder.com/150?text=Camera',
      name: 'دوربین کانن DSLR',
      category: 'دوربین',
      currentQty: 7,
      price: 22000000,
      status: 'موجود',
    },
    {
      image: 'https://via.placeholder.com/150?text=Shoes',
      name: 'کفش ورزشی نایک',
      category: 'پوشاک',
      currentQty: 18,
      price: 1200000,
      status: 'موجود',
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
  }
}
