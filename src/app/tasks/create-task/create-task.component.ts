import { Component } from '@angular/core';
import { AuthGuardService } from 'src/app/auth-guard.service';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  constructor(
    private router: Router,
    private AuthGuardService: AuthGuardService
  ) {}
  data = {
    no: this.AuthGuardService.task.length + 1,
    type: 'Any',
    title: '',
    status: '',
    action: '',
    createdon: '123',
    updatedon: '456',
  };

  onSelected(value: string): void {
    this.data.type = value;
    console.log(value);
  }
  onSelected1(value: string): void {
    this.data.title = value;
    console.log(value);
  }
  onSelected2(value: string): void {
    this.data.status = value;
    console.log(value);
  }
  onSelected3(value: string): void {
    this.data.action = value;
    console.log(value);
  }

  saveData(e: any) {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    this.data.createdon = currentDate;

    e.stopPropagation();
    e.preventDefault();
    this.AuthGuardService.task.push(this.data);
    console.log(this.AuthGuardService.task);
    this.router.navigate(['/tasks']);
  }
  cancle() {
    this.router.navigate(['/tasks']);
  }
}
