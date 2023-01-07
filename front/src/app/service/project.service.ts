import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class ProjectService {
  constructor() { }

  data: Object = {};

  passReadyData(res: Object) {
    this.data = res;
  }

}