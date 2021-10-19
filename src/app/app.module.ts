import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
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
    DashboardComponent,
    OfficeHoursComponent,
    CoursesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
