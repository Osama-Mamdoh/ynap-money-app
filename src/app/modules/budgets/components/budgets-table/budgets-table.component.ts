import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import { BudgetsDataSource } from '@core/helpers';
import { BudgetService } from '@core/services';

@Component({
  selector: 'app-budgets-table',
  templateUrl: './budgets-table.component.html',
  styleUrls: ['./budgets-table.component.scss'],
})
export class BudgetsTableComponent implements OnInit {
  public displayedColumns = [
    'name',
    'firstMonth',
    'lastMonth',
    'lastModified',
    'actions',
  ];
  public dataSource: BudgetsDataSource;
  public accounts = false;
  public current = 0;
  public totalCount: number;
  public searchKey = '';
  public sizes = [10, 20, 30, 40];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private budgetService: BudgetService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'menu-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/menu.svg')
    );
  }

  ngOnInit(): void {
    this.dataSource = new BudgetsDataSource(this.budgetService);
    this.dataSource.loadBudgets(this.accounts);
  }
}
