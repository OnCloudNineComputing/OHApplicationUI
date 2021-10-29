import {Component} from '@angular/core';
import {OfficeHoursService} from "../../services/office-hours.service";
import {OfficeHourModel} from "../../models/office-hour.model";

@Component({
  selector: 'office-hours',
  templateUrl: './office-hours.component.html',
  styleUrls: ['./office-hours.component.css']
})
export class OfficeHoursComponent {
  title = 'coms-e6156 office hour';
  officeHourService: OfficeHoursService;
  officeHours: any;
  input = new OfficeHourModel();

  constructor(officeHourService: OfficeHoursService) {
    this.officeHourService = officeHourService;
  }

  ngOnInit(): void {
    this.getData();
  }

  setData(data: any) {
    this.officeHours = data;
  }

  getData() {
    this.officeHourService.getData().subscribe((data: any) => this.setData(data));
  }

  postData() {
    this.officeHourService.postData(this.input).subscribe((data: any) => this.setData(data));
  }

  putData() {
    this.officeHourService.putData(this.input).subscribe((data: any) => this.setData(data));
  }

  deleteData() {
    this.officeHourService.deleteData(this.input).subscribe((data: any) => this.setData(data));
  }
}
