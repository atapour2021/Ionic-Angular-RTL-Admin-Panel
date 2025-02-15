import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianNumber',
  standalone: false,
})
export class PersianNumberPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) return '';
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value
      .toString()
      .replace(/\d/g, (d: any) => persianDigits[parseInt(d)]);
  }
}
