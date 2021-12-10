import {Component} from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {CourseModel} from "../../models/course.model";
import {TAModel} from "../../models/ta.model";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  title = 'coms-e6156 courses';
  courses: any;
  tas: any;
  input = new CourseModel();
  ta_input = new TAModel();
  coursesService: CoursesService;

  constructor(coursesService: CoursesService) {
    this.coursesService = coursesService;
  }

  ngOnInit(): void {
    this.getCourseData();
    this.getTAData();
  }

  setCourseData(data: any) {
    this.courses = data;
  }

  setTAData(data: any) {
    this.tas = data;
  }

  getCourseData() {
    this.coursesService.getCoursesData().subscribe((data: any) => {
      this.setCourseData(data);
    });
  }

  getTAData() {
    this.coursesService.getTAData().subscribe((data: any) => {
      this.setTAData(data);
    });
  }
  postCourseData() {
    this.coursesService.postCoursesData(this.input).subscribe((data: any) => this.setCourseData(data));
  }

  postTAData() {
    this.coursesService.postTAData(this.ta_input).subscribe((data: any) => this.setTAData(data));
  }

  putCourseData() {
    this.coursesService.putCoursesData(this.input).subscribe((data: any) => this.setCourseData(data));
  }

  deleteCourseData() {
    this.coursesService.deleteCoursesData(this.input).subscribe((data: any) => this.setCourseData(data));
  }
}
