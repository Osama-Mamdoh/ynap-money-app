import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    if (isPlatformServer(this.platformId)) {
        // Server only code.
    }
  }
  getCookie(name) {
    const nameEQ = name + '=';
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    }
    if (isPlatformServer(this.platformId)) {
        // Server only code.
    }
    return null;
  }

  eraseCookie(name) {
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      document.cookie =
      name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    if (isPlatformServer(this.platformId)) {
        // Server only code.
    }
  }
}
