import {Component} from '@angular/core';
import {QueueStudentService} from "../../services/queue_student.service";
import {QueueStudent} from "../../models/queue_student.model";

@Component({
  selector: 'students',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueStudentComponent {
  title = 'Queue';
  students: any;
  input = new QueueStudent();
  queueStudentService: QueueStudentService;

  constructor(studentService: QueueStudentService) {
    this.queueStudentService = studentService;
  }

  ngOnInit(): void {
    this.getData();
  }

  setData(data: any) {
    this.students = data.filter((item: any) => item.if_taken == undefined || item.if_taken == false);
  }

  getData() {
    this.queueStudentService.getData().subscribe((data: any) => {
      this.setData(data);
    });
  }

  postData() {
    this.queueStudentService.postData(this.input).subscribe(() => this.getData());
  }

  updateIfTaken(student: QueueStudent){
      console.log(student);
    this.queueStudentService.updateIfTaken(student).subscribe((data: any) => this.getData());
  }


}
