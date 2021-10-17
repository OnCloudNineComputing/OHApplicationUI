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
  officeHoursService: OfficeHoursService;
  data: any;
  inputData = new OfficeHourModel();

  constructor(officeHoursService: OfficeHoursService) {
    this.officeHoursService = officeHoursService;
    //this.inputData = [];
  }

  ngOnInit(): void {
    this.getData();
    // this.postData();
    //this.deleteData();
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    this.officeHoursService.getData().subscribe((data: any) => this.setData(data));
  }

  postData() {
    this.officeHoursService.postData(this.inputData).subscribe((data: any) => this.setData(data));
  }

  putData() {
    this.officeHoursService.putData(this.inputData).subscribe((data: any) => this.setData(data));
  }

  deleteData() {
    this.officeHoursService.deleteData(this.inputData).subscribe((data: any) => this.setData(data));
  }
}
