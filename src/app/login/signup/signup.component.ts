import { Component, OnInit } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}
  signupUser: any[] = [];
  singupObj: any = {
    username: '',
    password: '',
  };

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUser');
    if (localData != null) {
      this.signupUser = JSON.parse(localData);
    }
    console.log(localData);
  }
  // loginObj: any = {
  //   username: '',
  //   password: '',
  // };

  loginD() {
    this.router.navigate(['/login']);
  }
  onSignUp() {
    console.log(this.singupObj);
    this.signupUser.push(this.singupObj);
    localStorage.setItem('signUpUser', JSON.stringify(this.signupUser));
    this.singupObj = {
      username: '',
      password: '',
    };

    this.router.navigate(['/login']);
  }
}
