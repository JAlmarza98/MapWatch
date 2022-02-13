import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserComponent } from './pages/browser/browser.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {path: '', component: BrowserComponent},
  {path: 'map', component: MapComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
