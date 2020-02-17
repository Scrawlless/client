import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseHrefModule } from '../../_modules/base-href/base-href.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private links: BaseHrefModule
  ) { }

  url: string = this.links.api;

  token: any;

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  test(data: any = {}): Observable<Object> {
    var req = JSON.stringify({ name: data });
    console.log(req);
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Authorization', `Bearer ${this.getToken()}`);

    return this.http.post(this.url + `api/test`, req, { headers: headers }).pipe(
      map((response: Response) => {
        let data: any = response;
        if (data) {
          return data;
        } else {
          return "Error";
        }
      }));
  }
}