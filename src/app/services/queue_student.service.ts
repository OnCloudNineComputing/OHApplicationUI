import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {QueueStudent} from "../models/queue_student.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueueStudentService {
//   url = environment.api + "/queue/students";
  url = "http://localhost:5000/queue/1c783bd5-5cb6-4576-a4a4-8422923304fc/students";

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getData(): Observable<QueueStudent[]> {
    const url = this.url;
    return this.http.get<QueueStudent[]>(url);
  }

  updateIfTaken(student: QueueStudent){
    const if_taken = {if_taken: true};
    return this.putData(student, if_taken);
  }

  postData(student: QueueStudent) {
    const url = this.url;
    const data = student;
    const headers = {'content-type': 'application/json'}
    return this.http.post(url, data, {'headers': headers});
  }

  putData(student: QueueStudent, data: any) {
    const url = this.url + '/' + student.timestamp;
    return this.http.put(url, data);
  }
}
