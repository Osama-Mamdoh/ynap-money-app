import { Component, OnInit } from '@angular/core';
import { User } from '@core/models';
import { AuthenticationService } from '@core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user$.subscribe((x) => (this.user = x));
  }

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
  }
}
