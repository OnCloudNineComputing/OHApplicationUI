import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {CourseModel} from "../models/course.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.api;
  login_url = "http://ec2-3-129-218-198.us-east-2.compute.amazonaws.com:5000"

  constructor(private http: HttpClient) {
  }

  login() {
    const url = this.login_url + '/api/login';
    return this.http.get(url);
  }

  oAuth() {
    const url = this.login_url + '/login/google'
    window.location.href = url;
  }

  /** GET data from the server */
  getData(): Observable<CourseModel[]> {
    const url = this.url + "/users";
    return this.http.get<CourseModel[]>(url);
  }

  postData(course: CourseModel) {
    const url = this.url + "/users";
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
