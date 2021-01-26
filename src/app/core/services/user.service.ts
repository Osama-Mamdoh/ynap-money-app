import { Injectable } from '@angular/core';
import { RequestService } from '@core/utils';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private requestService: RequestService) {}

  public getUser() {
    return this.requestService.get('/user');
  }
}
