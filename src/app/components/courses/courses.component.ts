import {Component} from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {CourseModel} from "../../models/course.model";

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  title = 'coms-e6156 courses';
  courses: any;
  input = new CourseModel();
  coursesService: CoursesService;

  constructor(coursesService: CoursesService) {
    this.coursesService = coursesService;
  }

  ngOnInit(): void {
    this.getData();
  }

  setData(data: any) {
    this.courses = data;
  }

  getData() {
    this.coursesService.getData().subscribe((data: any) => {
      this.setData(data);
    });
  }

  postData() {
    this.coursesService.postData(this.input).subscribe((data: any) => this.setData(data));
  }

  putData() {
    this.coursesService.putData(this.input).subscribe((data: any) => this.setData(data));
  }

  deleteData() {
    this.coursesService.deleteData(this.input).subscribe((data: any) => this.setData(data));
  }
}
