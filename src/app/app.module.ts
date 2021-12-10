import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';

import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuardService} from "./auth/auth-guard.service";
import { QueueStudentComponent } from './components/queue/queue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OfficeHoursComponent,
    CoursesComponent,
    QueueStudentComponent,
    AdminComponent
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
    HomeComponent,
    OfficeHoursComponent,
    CoursesComponent,
    QueueStudentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
