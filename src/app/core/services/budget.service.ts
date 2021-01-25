import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { AuthenticationService } from './authentication.service';
import { IBudgetSummary } from '@core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  public getBudgets(accounts: boolean): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}/budgets?include_accounts=${accounts}`
    );
  }

  public getBudgetSummary(budgetId: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/budgets/${budgetId}`);
  }
}
