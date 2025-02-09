import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  standalone: false,
})
export class ApplicationComponent implements OnInit {
  appPages = [
    { title: 'Inbox', url: '/app/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/app/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/app/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/app/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/app/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/app/folder/spam', icon: 'warning' },
  ];
  labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {}

  ngOnInit() {}
}
