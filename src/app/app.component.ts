import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public static routeEnd = '';
  title = 'Duke Applied Machine Learning Group';
  constructor(
    private readonly router: Router,
    public readonly authService: AuthService
  ) { }

  public onLogo() {
    const navigationExtras: NavigationExtras = {
      fragment: 'home'
    };
    this.router.navigate([''], navigationExtras);
    AppComponent.routeEnd = '';
  }

  public onLogin() {
    this.router.navigate(['login']);
    AppComponent.routeEnd = 'login';
  }

  public onLogout() {
    this.authService.doLogout().then(() => {
      this.router.navigate(['']);
      AppComponent.routeEnd = '';
    });
  }
  public onMember() {
    this.router.navigate(['members']);
    AppComponent.routeEnd = 'members';
  }

  get isHome() {
    return AppComponent.routeEnd == '';
  }
}
