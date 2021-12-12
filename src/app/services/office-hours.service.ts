import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {OfficeHourModel} from "../models/office-hour.model";
import {OfficeHourPostModel} from "../models/office-hour-post.model";


@Injectable({
  providedIn: 'root'
})
export class OfficeHoursService {

  url = "http://ohmicro-env.eba-xfutva3v.us-east-1.elasticbeanstalk.com/officehours";
  // post_url = "http://ohmicro-env.eba-xfutva3v.us-east-1.elasticbeanstalk.com/officehours";

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getData() {
    const url = this.url;
    return this.http.get(url);
  }

  startOH(id: number) {
    const url = this.url + "/" + id + "/begin";
    return this.http.get(url, {'observe': 'response'});
  }

  postData(officeHour: OfficeHourModel) {
    const url = this.url;
    const data = officeHour;
    const headers = {'content-type': 'application/json'}
    return this.http.post(url, data, {'headers': headers});
  }

  putData(officeHour: OfficeHourModel) {
    const url = this.url + "/" + officeHour.id;
    return this.http.put(url, officeHour);
  }

  deleteData(officeHour: OfficeHourModel) {
    const url = this.url + "/" + officeHour.id;
    return this.http.delete(url);
  }
}
