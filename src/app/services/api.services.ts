import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiWrapperService {

  response: Observable<any>;

  constructor(private http: HttpClient) { }


   // Post Api Method
  post(api: string, data?: any, header?: any) {
    this.response = this.http.post<any>(api, data, this.getHeaders());
    return this.response;
  }

     // Put Api Method
     put(api: string, data?: any, header?: any) {
      this.response = this.http.put<any>(api, data, this.getHeaders());
      return this.response;
    }

    // Put Api Method
    delete(api: string, data?: any, header?: any) {
      this.response = this.http.delete<any>(api, this.getHeaders());
      return this.response;
    }
  // Get Api Method
  get(api: string) {
    return this.http.get<any>(api, this.getHeaders());
  }

  // Headers Method
  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'authorization':  'Bearer ' + localStorage.getItem('token')
      })};
  }


  handleError(errorType, user) {}


}
