import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PatnserviceService {
   baseUrl = 'http://localhost:4202';
  private options = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  public sendGetRequest(){
    return this.http.get(this.baseUrl);
  }
  private service_url = environment.endPoint;

  constructor(private http: HttpClient) { }

  postMethod(url,data){
    let body = JSON.stringify(data);
    return this.http
    .post(this.service_url,body,this.options);
  }

  getMethod(url){
    return this.http
    .get(this.service_url);
  }

  patchMethod(url,id,data){
    let body = JSON.stringify(data);
    return this.http
    .patch(this.service_url,body,this.options);
    //put
  }
}
