import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { User } from '@core/models';
import { AuthenticationService, UserService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authenticationService.isAuthenticated()) {
      if (this.authenticationService.userValue === null) {
        this.userService.getUser().subscribe((user: any) => {
          const formattedUser = new User(user.data.user);
          this.authenticationService.userValue = formattedUser;
        });
      }
      return true;
    } else {
      this.router.navigate([this.authenticationService.getLoginUrl()]);
      return false;
    }
  }
}
