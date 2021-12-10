import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {CourseModel} from "../models/course.model";
import {TAModel} from "../models/ta.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  url = "http://ec2-3-129-218-198.us-east-2.compute.amazonaws.com:5000/" + "api/courses";
  ta_url = "http://ec2-3-129-218-198.us-east-2.compute.amazonaws.com:5000/"+ "api/ta";

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getCoursesData(): Observable<CourseModel[]> {
    const url = this.url;
    return this.http.get<CourseModel[]>(url);
  }

  postCoursesData(course: CourseModel) {
    const url = this.url;
    course.course_year = Number(course.course_year)
    course.credits = Number(course.credits)
    course.enrollment = Number(course.enrollment)
    const data = course;
    const headers = {'content-type': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'}
    return this.http.post(url, data, {'headers': headers});
  }

  putCoursesData(course: CourseModel) {
    const url = this.url + '/' + course.id;
    return this.http.put(url, course);
  }

  deleteCoursesData(course: CourseModel) {
    const url = this.url + '/' + course.id;
    const headers = {'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'}
    return this.http.delete(url, {'headers': headers});
  }

  getTAData(): Observable<TAModel[]> {
    const url = this.ta_url;
    return this.http.get<TAModel[]>(url);
  }

  postTAData(ta: TAModel) {
    const url = this.ta_url;
    console.log(ta)
    ta.course_id = Number(ta.course_id)
    const data = ta;
    const headers = {'content-type': 'application/json'}
    return this.http.post(url, data, {'headers': headers});
  }

  putTAData(ta: TAModel) {
    const url = this.ta_url + '/' + ta.id;
    return this.http.put(url, ta);
  }

  deleteTAData(ta: TAModel) {
    const url = this.ta_url + '/' + ta.id;
    return this.http.delete(url);
  }

}
