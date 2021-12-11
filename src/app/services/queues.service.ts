import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QueueModel} from "../models/queue.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueuesService {
  url = "http://queue-env.eba-nkq5afj3.us-east-1.elasticbeanstalk.com/queue"

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getData(): Observable<QueueModel[]> {
    const url = this.url;
    return this.http.get<QueueModel[]>(url);
  }

  postData(queue: QueueModel) {
    const url = this.url;
    const data = queue;
    const headers = {'content-type': 'application/json'}
    return this.http.post(url, data, {'headers': headers});
  }
}
