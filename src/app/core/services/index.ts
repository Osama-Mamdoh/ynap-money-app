import { AuthenticationService } from './authentication.service';
import { BudgetService } from './budget.service';
import { UserService } from './user.service';

export const services: any[] = [
  AuthenticationService,
  UserService,
  BudgetService,
];

export * from './authentication.service';
export * from './budget.service';
export * from './user.service';
