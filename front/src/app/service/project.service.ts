import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginToken, LoginObject } from '../model/interfaces';

@Injectable({
  providedIn: 'any',
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  data: Object = {};

  public passReadyData(res: Object) {
    this.data = res;
  }

  public postAuth(url: string, data: LoginObject) {
    const options = { headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
    })};
    return this.http.post<LoginToken>(url, data, options);
  }

  public saveLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getLocalStorage(key: string) {
    return localStorage.getItem(key)
  }
}