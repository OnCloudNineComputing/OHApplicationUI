import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {QueueModel} from "../models/queue.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueuesService {
  // url = environment.api + "/queue";
  url = "http://localhost:5000/queue"

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
