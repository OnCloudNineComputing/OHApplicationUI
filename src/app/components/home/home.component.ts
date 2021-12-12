import {Component} from '@angular/core';
import {QueuesService} from "../../services/queues.service";
import {QueueModel} from "../../models/queue.model";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'coms-e6156 home';
  queueService: QueuesService;
  queues: any;
  input = new QueueModel();

  constructor(queueService: QueuesService) {
    this.queueService = queueService;
  }

  ngOnInit(): void {
    this.getData();
  }

  setData(data: any) {
    this.queues = data;
  }

  getData() {
    this.queueService.getData().subscribe((data: any) => this.setData(data));
  }

  postData() {
    this.queueService.postData(this.input).subscribe((data: any) => this.setData(data));
  }

  deleteData(id: string) {
    this.queueService.deleteData(id).subscribe((data: any) => this.getData());
  }
}
