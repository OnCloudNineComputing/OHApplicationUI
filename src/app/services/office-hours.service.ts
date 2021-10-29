import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OfficeHourModel} from "../models/office-hour.model";

@Injectable({
  providedIn: 'root'
})
export class OfficeHoursService {

  url = "http://ohmicroservice-env-final.eba-rjxsixam.us-east-1.elasticbeanstalk.com/officehours";

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getData() {
    const url = "http://ohmicroservice-env-final.eba-rjxsixam.us-east-1.elasticbeanstalk.com/officehours";
    return this.http.get(url);
  }

  postData(officeHour: OfficeHourModel) {
    const url = "http://ohmicroservice-env-final.eba-rjxsixam.us-east-1.elasticbeanstalk.com/officehours";
    const data = officeHour;
    const headers = {'content-type': 'application/json'}
    return this.http.post(url, data, {'headers': headers});
  }

  putData(officeHour: OfficeHourModel) {
    const url = "http://ohmicroservice-env-final.eba-rjxsixam.us-east-1.elasticbeanstalk.com/officehours/" + officeHour.id;
    return this.http.put(url, officeHour);
  }

  deleteData(officeHour: OfficeHourModel) {
    const url = 'http://ohmicroservice-env-final.eba-rjxsixam.us-east-1.elasticbeanstalk.com/officehours/' + officeHour.id;
    return this.http.delete(url);
  }
}
