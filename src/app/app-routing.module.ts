import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UserDashboardComponent } from './UserComponents/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './UserComponents/profile/profile.component';
import { EventsComponent } from './UserComponents/events/events.component';
import { SubscriptionComponent } from './UserComponents/subscription/subscription.component';
import { subscribeOn } from 'rxjs';

const routes: Routes = [
  {path:'', component : HomePageComponent},
  {path:'signup', component : SignupComponent},
  {path:'login', component : LoginComponent},
  {path: 'UserDAshboard' , component :UserDashboardComponent , children :[
    {path: 'profile', component: ProfileComponent},
    {path: 'events', component: EventsComponent},
    {path: 'subscription' ,component: SubscriptionComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
