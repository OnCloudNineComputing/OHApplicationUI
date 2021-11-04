import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuardService} from "./auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OfficeHoursComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    LoginComponent,
    DashboardComponent,
    OfficeHoursComponent,
    CoursesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
