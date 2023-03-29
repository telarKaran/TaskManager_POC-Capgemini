import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Taskss } from './task/tasks';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  url: string = 'https://jsonkeeper.com/b/SKVL';
  getUsers() {
    return this.http.get(this.url).subscribe((res) => {
      console.log('res', res);
    });
  }
}
