import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";

@NgModule({
  declarations: [
    AppComponent,
    OfficeHoursComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [OfficeHoursComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
