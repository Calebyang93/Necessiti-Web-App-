import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component'

const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
