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
}
