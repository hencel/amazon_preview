import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginToken, LoginObject } from '../model/interfaces';

@Injectable({
  providedIn: 'any',
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  data: Object = {};
  optionsJson = { headers: new HttpHeaders({
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    'Content-Type': 'application/json'
  })};

  public passReadyData(res: Object) {
    this.data = res;
  }

  public postAuth(url: string, data: LoginObject) {
    return this.http.post<LoginToken>(url, data, this.optionsJson);
  }

  public saveLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getLocalStorage(key: string) {
    return localStorage.getItem(key)
  }
}