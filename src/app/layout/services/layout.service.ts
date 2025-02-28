import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  theme: BehaviorSubject<'Dark' | 'Light'> = new BehaviorSubject<
    'Dark' | 'Light'
  >('Light');

  changeTheme(theme: 'Dark' | 'Light') {
    this.theme.next(theme);
  }

  getTheme(): string {
    return localStorage.getItem('dark-mode') !== 'disabled' &&
      localStorage.getItem('dark-mode') !== null
      ? 'Dark'
      : 'Light';
  }
}
