import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {OfficeHoursService} from "../../services/office-hours.service";
import {OfficeHourModel} from "../../models/office-hour.model";
import {OfficeHourPostModel} from "../../models/office-hour-post.model";

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
  router: Router;

  constructor(officeHourService: OfficeHoursService, router: Router) {
    this.officeHourService = officeHourService;
    this.router = router
  }

  ngOnInit(): void {
    this.getData();
  }

  setData(data: any) {
    this.officeHours = data;
  }

  startOH(id: number) {
    this.officeHourService.startOH(id).subscribe((data: any) => this.router.navigate([data.body['links']]));
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
