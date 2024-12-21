import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StudioMembersComponent } from './Components/studio-members/studio-members.component';
import { BackgroundComponent } from './Components/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    NavbarComponent,
    StudioMembersComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
