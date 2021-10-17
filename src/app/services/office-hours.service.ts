import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OfficeHourModel} from "../models/office-hour.model";

@Injectable({
  providedIn: 'root'
})
export class OfficeHoursService {
  //url = "https://api.publicapis.org/entries";
  url = "http://localhost:3000/officeHours";

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getData() {
    // const url = 'https://api.publicapis.org/entries'
    const url = 'http://localhost:3000/officeHours'
    console.log(this.http.get(url));
    return this.http.get(url);
  }

  postData(officeHour: OfficeHourModel) {
    const url = 'http://localhost:3000/officeHours'
    const data = officeHour;
    const headers = {'content-type': 'application/json'}
    //const data = {"id": "prq123", "location": "noco", "time": "1203", "class": "5678", "semester": "F21", "zoom": "fakeZoom"}
    console.log(this.http.post(url, data, {'headers': headers}));
    return this.http.post(url, data, {'headers': headers});
  }

  putData(officeHour: OfficeHourModel) {
    const url = 'http://localhost:3000/officeHours/' + officeHour.id;
    console.log(this.http.put(url, officeHour));
    return this.http.put(url, officeHour);
  }

  deleteData(officeHour: OfficeHourModel) {
    const url = 'http://localhost:3000/officeHours/' + officeHour.id;
    console.log(this.http.delete(url));
    return this.http.delete(url);
  }
}
