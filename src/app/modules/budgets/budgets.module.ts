import { NgModule } from '@angular/core';
import { BudgetsRoutingModule } from './budgets-routing.module';
import * as fromPages from './pages';
import * as fromComponents from './components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...fromPages.pages, ...fromComponents.components],
  imports: [BudgetsRoutingModule, SharedModule],
})
export class BudgetsModule {}
