import { Component } from '@angular/core';
import { AuthGuardService } from 'src/app/auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private AuthGuardService: AuthGuardService) {}

  user = this.AuthGuardService.user;
  onchange() {}
}
