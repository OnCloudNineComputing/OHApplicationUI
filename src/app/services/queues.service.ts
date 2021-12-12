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

  deleteData(id: string){
    const url = this.url + '/' + id;
    const headers = {'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'}
    return this.http.delete(url, {'headers': headers});
  }
}
