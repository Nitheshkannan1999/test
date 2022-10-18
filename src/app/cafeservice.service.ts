import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafeserviceService {

  constructor(private http : HttpClient) { }

  getData() : Observable<any>
  {
    return this.http.get("https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad");
  }
}
