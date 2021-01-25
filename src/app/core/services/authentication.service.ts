import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models';
import { CookiesService, NotificationService } from '@core/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loginUrl = '/auth/login';
  private userSubject: BehaviorSubject<User>;
  public user$: Observable<User>;

  constructor(
    private cookiesService: CookiesService,
    private router: Router,
    private notifier: NotificationService
  ) {
    this.userSubject = new BehaviorSubject<User>(null);
    this.user$ = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public set userValue(user) {
    this.userSubject.next(user);
  }

  public isAuthenticated() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  public getLoginUrl(): string {
    return this.loginUrl;
  }

  public getToken() {
    return this.cookiesService.getCookie('token');
  }

  public login(username: string, password: string) {
    if (
      username.toLowerCase() === 'user' &&
      password.toLowerCase() === 'user'
    ) {
      this.cookiesService.setCookie(
        'token',
        '46f8ed1f9d867dc34fbd512cfeec4535cd707b26d2eb34423b3ccf8543921b16',
        null
      );
      return true;
    } else {
      this.notifier.showError('Invaild credentials');
      return false;
    }
  }

  public logout() {
    // remove user from cookie to log user out
    this.cookiesService.eraseCookie('token');
    this.userSubject.next(null);
    this.router.navigate([this.getLoginUrl()]);
  }
}
