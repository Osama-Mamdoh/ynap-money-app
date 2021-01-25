import { Role } from './role.model';

export class User {
  id: number;
  role: Role;

  constructor(user) {
    this.id = user.id;
    this.role = Role.User;
  }
}
