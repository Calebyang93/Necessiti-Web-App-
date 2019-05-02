import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component'
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component'
import { ContactusComponent } from './contactus/contactus.component'

const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'contactus', component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
