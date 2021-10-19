import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseModel} from "../models/course.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url = "http://ec2-54-236-19-186.compute-1.amazonaws.com:5000/courses";

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getData(): Observable<CourseModel[]> {
    const url = this.url;
    return this.http.get<CourseModel[]>(url);
  }

  postData(course: CourseModel) {
    const url = this.url;
    const data = course;
    const headers = {'content-type': 'application/json'}
    return this.http.post(url, data, {'headers': headers});
  }

  putData(course: CourseModel) {
    const url = this.url + '/' + course.id;
    return this.http.put(url, course);
  }

  deleteData(course: CourseModel) {
    const url = this.url + '/' + course.id;
    return this.http.delete(url);
  }
}
