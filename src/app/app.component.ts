import {Component} from '@angular/core';
import {TestService} from "./services/test-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coms-e6156';
  testService: TestService;
  data: any;

  constructor(testService: TestService) {
    this.testService = testService;
  }

  ngOnInit(): void {
    this.getData();
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    this.testService.getData().subscribe((data: any) => this.setData(data));
  }
}
