import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";
import {CoursesComponent} from "./components/courses/courses.component";

@NgModule({
  declarations: [
    AppComponent,
    OfficeHoursComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    OfficeHoursComponent,
    CoursesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
