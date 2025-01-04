import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StudioMembersComponent } from './Components/studio-members/studio-members.component';
import { BackgroundComponent } from './Components/background/background.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './Components/footer/footer.component';
import { MapComponent } from './Components/map/map.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './Components/signup/signup.component';
import { ProfileComponent } from './UserComponents/profile/profile.component';
import { EventsComponent } from './UserComponents/events/events.component';
import { SubscriptionComponent } from './UserComponents/subscription/subscription.component';
import { CalendarComponent } from './UserComponents/calendar/calendar.component';
import { UserDashboardComponent } from './UserComponents/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './UserComponents/user-navbar/user-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReelDialogComponent } from './UserComponents/calendar/calendar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';  // Add this import

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    StudioMembersComponent,
    BackgroundComponent,
    FooterComponent,
    MapComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EventsComponent,
    SubscriptionComponent,
    CalendarComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    ReelDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
