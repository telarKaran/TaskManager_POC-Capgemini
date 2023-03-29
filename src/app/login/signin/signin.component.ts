import { Component, OnInit } from '@angular/core';
// import { AuthGuardService } from '.../auth-guard.service';
// import { AppModule } from 'src/app/app.module';
import { AuthGuardService } from 'src/app/auth-guard.service';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private router: Router,
    private AuthGuardService: AuthGuardService
  ) {}
  signupUser: any[] = [];
  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url == '/signout') {
      this.AuthGuardService.isLoggedIn = false;
      console.log(this.AuthGuardService.isLoggedIn);
      this.router.navigate(['/']);
    }
    // if (this.AuthGuardService.isLoggedIn) {
    //   this.router.navigate(['/tasks']);
    // }
    const localData = localStorage.getItem('signUpUser');
    if (localData != null) {
      this.signupUser = JSON.parse(localData);
    }
    console.log(localData);
  }
  login: boolean = true;

  loginObj: any = {
    username: '',
    password: '',
  };

  signUpD() {
    this.router.navigate(['/signup']);
  }
  onLogin() {
    console.log(this.router.getCurrentNavigation);

    const isUserExist = this.signupUser.find(
      (m) =>
        m.username == this.loginObj.username &&
        m.password == this.loginObj.password
    );
    if (isUserExist != undefined) {
      this.AuthGuardService.isLoggedIn = true;
      this.AuthGuardService.user = this.loginObj.username;
      console.log(this.AuthGuardService.isLoggedIn);
      this.router.navigate(['/']);
    } else {
      alert('Wrong Username or Password');
    }
    // this.signupUser.push(this.singupObj);
    // localStorage.setItem('signUpUser', JSON.stringify(this.signupUser));
    // this.singupObj = {
    //   username: '',
    //   password: '',
    // };

    // this.router.navigate(['/login']);
  }
}
