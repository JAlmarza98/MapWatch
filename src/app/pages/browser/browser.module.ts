import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserRoutingModule } from './browser-routing.module';
import { BrowserComponent } from './browser.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BrowserComponent
  ],
  imports: [
    CommonModule,
    BrowserRoutingModule,
    FormsModule
  ]
})
export class BrowserModule { }
