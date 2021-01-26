import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '@core/utils';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(private requestService: RequestService) {}

  public getBudgets(accounts: boolean): Observable<any> {
    return this.requestService.get(`/budgets?include_accounts=${accounts}`);
  }

  public getBudgetSummary(budgetId: number): Observable<any> {
    return this.requestService.get(`/budgets/${budgetId}`);
  }
}
