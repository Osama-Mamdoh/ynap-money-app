import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { IBudget } from '@core/models';
import { BudgetService } from '@core/services';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

export class BudgetsDataSource implements DataSource<IBudget> {
  private budgetsSubject = new BehaviorSubject<IBudget[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private budgetService: BudgetService) {}

  connect(collectionViewer: CollectionViewer): Observable<IBudget[]> {
    return this.budgetsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.budgetsSubject.complete();
    this.loadingSubject.complete();
  }

  loadBudgets(accounts: boolean) {
    this.loadingSubject.next(true);

    this.budgetService
      .getBudgets(accounts)
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe((budgets) => this.budgetsSubject.next(budgets.data.budgets));
  }
}
