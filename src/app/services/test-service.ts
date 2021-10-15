import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = "https://api.publicapis.org/entries";

  constructor(private http: HttpClient) {
  }

  /** GET data from the server */
  getData() {
    const url = 'https://api.publicapis.org/entries'
    return this.http.get(url);
  }
}
