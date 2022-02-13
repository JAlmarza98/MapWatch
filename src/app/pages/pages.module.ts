import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@pages/browser/browser.module';
import { MapModule } from '@pages/map/map.module';

import { PagesComponent } from '@pages/pages.component';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MapModule
  ]
})
export class PagesModule { }
