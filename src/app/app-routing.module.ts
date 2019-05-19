import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component'
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component'
import { ContactusComponent } from './contactus/contactus.component'
import { TeamComponent } from './team/team.component';
import { ProgramsComponent } from './programs/programs.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'team', component: TeamComponent },
  { path: 'programs', component: ProgramsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
