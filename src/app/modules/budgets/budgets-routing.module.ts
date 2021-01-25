import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetsComponent, BudgetSummaryComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'budgets', pathMatch: 'full' },
  {
    path: 'budgets',
    component: BudgetsComponent,
  },
  {
    path: 'budget/:id',
    component: BudgetSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetsRoutingModule {}
