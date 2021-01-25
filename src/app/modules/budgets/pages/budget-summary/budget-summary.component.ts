import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBudgetSummary } from '@core/models';
import { BudgetService } from '@core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss'],
})
export class BudgetSummaryComponent implements OnInit {
  public subscriptions = new Subscription();
  public categories: any[];
  public budget: IBudgetSummary;
  public balance: number;

  constructor(
    private budgetService: BudgetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // get active budget TODO: move to service :P
      this.budgetService.getBudgetSummary(params.id).subscribe((budget) => {
        this.budget = budget.data.budget;
        this.balance = this.budget.categories.reduce(
          (acc, cat) => acc + cat.balance,
          0
        );
      });

      // this.categories$ = this.categoryService.entities$.pipe(
      //   map((categories) => {
      //     return this.checkAllocations(categories, this.selectedMonth).filter(
      //       (category) => category.type === TransactionTypes.EXPENSE
      //     );
      //   })
      // );
      // this.loading$ = this.categoryService.loading$;
      // if (
      //   this.activeBudget &&
      //   !this.activeBudget.allocations[this.selectedMonth]
      // ) {
      //   const allocations = {
      //     [this.selectedMonth]: {
      //       income: 0,
      //       expense: 0,
      //     },
      //   };
      //   this.activeBudget = { ...this.activeBudget, allocations };
      // }
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
