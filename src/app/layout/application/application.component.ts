import { Component, OnInit } from '@angular/core';
import { dictionary } from '@dictionary/dictionary';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  standalone: false,
})
export class ApplicationComponent implements OnInit {
  isDarkMode: string | null = null;
  dictionary = dictionary;
  appPages = [
    {
      title: dictionary.Dashboard,
      url: '/app/dashboard',
      icon: 'grid',
    },
    {
      title: dictionary.Products,
      url: '/app/products',
      icon: 'cube',
    },
    { title: 'Outbox', url: '/app/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/app/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/app/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/app/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/app/folder/spam', icon: 'warning' },
  ];
  showDropdown = false;
  notifications = [
    {
      id: 1,
      image: '../../../assets/images/avatar-2.jpg',
      message: 'پیام جدید از جان',
    },
    {
      id: 2,
      image: '../../../assets/images/avatar-1.jpg',
      message: 'سفارش شما ارسال شد',
    },
    {
      id: 3,
      image: '../../../assets/images/avatar-3.jpg',
      message: 'یادآوری: جلسه در ساعت ۳ بعد از ظهر',
    },
  ];

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('dark-mode');
    if (this.isDarkMode === 'enabled') {
      document.body.classList.add('dark-theme');
      this.layoutService.changeTheme(
        this.isDarkMode === 'enabled' ? 'Dark' : 'Light'
      );
    }
  }

  toggleDarkMode() {
    const body = document.body;
    const darkMode = body.classList.toggle('dark-theme');
    this.isDarkMode = darkMode ? 'enabled' : 'disabled';
    localStorage.setItem('dark-mode', darkMode ? 'enabled' : 'disabled');
    this.layoutService.changeTheme(
      this.isDarkMode === 'enabled' ? 'Dark' : 'Light'
    );
  }

  removeNotification(notification: any) {
    this.notifications = this.notifications.filter(
      (n) => n.id !== notification.id
    );
  }

  clearNotifications() {
    this.notifications = [];
    this.showDropdown = false;
  }
}
