import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries-app';
  isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router){
    this.isLoggedIn = authService.isLoggedIn();
  }

  logout(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
