import {Component} from '@angular/core';
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coms-e6156';
  officeHoursComponent: OfficeHoursComponent;

  constructor(officeHoursComponent: OfficeHoursComponent) {
    this.officeHoursComponent = officeHoursComponent;
  }

  ngOnInit(): void {
  }
}
