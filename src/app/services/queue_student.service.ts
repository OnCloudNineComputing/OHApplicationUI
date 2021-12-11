import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {QueueStudent} from "../models/queue_student.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueueStudentService {
  url = "http://queue-env.eba-nkq5afj3.us-east-1.elasticbeanstalk.com/queue";

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getData(id: string): Observable<QueueStudent[]> {
    const url = this.url + "/" + id + "/students"
    return this.http.get<QueueStudent[]>(url);
  }

  updateIfTaken(id:string, student: QueueStudent) {
    const if_taken = {if_taken: true};
    return this.putData(id, student, if_taken);
  }

  postData(id: string, student: QueueStudent) {
    const url = this.url + "/" + id + "/students"
    const data = student;
    const headers = {'content-type': 'application/json'}
    return this.http.post(url, data, {'headers': headers});
  }

  putData(id:string, student: QueueStudent, data: any) {
    const url = this.url + "/" + id + "/students/" + student.timestamp;
    return this.http.put(url, data);
  }
}
