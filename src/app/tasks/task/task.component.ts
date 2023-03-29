import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthGuardService } from 'src/app/auth-guard.service';

import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
// import { Taskss } from './tasks';
// import { RestService } from '../rest.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  Taskss: any = [];
  // localData: any = '';
  p: number = 1;
  user = this.AuthGuardService.user;
  search: string = '';

  url: string = 'https://api.npoint.io/f46a6dd2cb9b8063c822';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private AuthGuardService: AuthGuardService
  ) {}
  ngOnInit(): void {
    // this.rs.getUsers().subscribe((response) => {
    //   console.log(response);
    //   // this.Taskssresponse;
    // });
    // this.localData = localStorage.getItem('signUpUser');
    // this.localData = JSON.parse(this.localData);
    // // console.log(localData, '===============================');
    // if (this.localData != null) {
    //   this.localData.forEach((element: any) => {
    //     if (element.username == this.user) {
    //       this.Taskss = element.task;
    //     }
    //   });

    //   localStorage.setItem('signUpUser', JSON.stringify(this.localData));
    // } else {

    if (this.AuthGuardService.taskexist) {
      this.http.get(this.url).subscribe((res) => {
        this.AuthGuardService.task = res;
      });
    } else {
    }

    this.Taskss = this.AuthGuardService.task;
    this.AuthGuardService.taskexist = false;
    // }
  }

  createTask() {
    this.router.navigate(['/create-task']);
    //   this.Taskss.push({
    //     no: '61',
    //     type: 'task',
    //     title: 'coloring',
    //     createdon: '123',
    //     updatedon: '456',
    //     status: 'done',
    //   });
  }

  deleteitem(index: number) {
    if (index > -1) {
      // only splice array when item is found
      this.Taskss.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  edittask(index: number) {
    this.AuthGuardService.editid = index;
    this.router.navigate(['/edit-task', this.AuthGuardService.editid]);
  }
  Search() {
    if (this.search != '') {
      this.Taskss = this.Taskss.filter((res: any) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.search.toLocaleLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }
}
