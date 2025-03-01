import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {
  ApplicationComponent,
  BreadcrumbComponent,
  LayoutService,
} from '@app/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeFa from '@angular/common/locales/fa';

registerLocaleData(localeFa);

@NgModule({
  declarations: [AppComponent, ApplicationComponent, BreadcrumbComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LayoutService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
