import { Component } from '@angular/core';
import { AuthService } from '@items/core-data';

@Component({
  selector: 'items-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/phones', icon: 'work', title: 'Phones'}
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}

}
