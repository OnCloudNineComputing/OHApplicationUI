import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QueueStudentService} from "../../services/queue_student.service";
import {QueueStudent} from "../../models/queue_student.model";

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueStudentComponent {
  title = 'Queue';
  students: any;
  students_taken: any;
  input = new QueueStudent();
  queueStudentService: QueueStudentService;
  route: ActivatedRoute;
  id: string;
  sub: any;

  constructor(studentService: QueueStudentService, route: ActivatedRoute) {
    this.queueStudentService = studentService;
    this.route = route;
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getData(this.id);
    });
    // this.getData();
  }

  setData(data: any) {
    this.students = data.filter((item: any) => item.if_taken == undefined || item.if_taken == false);
    this.students_taken = data.filter((item: any) => item.if_taken);
  }

  getData(id: string) {
    this.queueStudentService.getData(this.id).subscribe((data: any) => {
      this.setData(data);
    });
  }

  postData() {
    this.queueStudentService.postData(this.id, this.input).subscribe(() => this.getData(this.id));
  }

  updateIfTaken(student: QueueStudent) {
    this.queueStudentService.updateIfTaken(this.id, student).subscribe(() => this.getData(this.id));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
