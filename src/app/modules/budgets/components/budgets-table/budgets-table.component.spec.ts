import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsTableComponent } from './budgets-table.component';

describe('BudgetsTableComponent', () => {
  let component: BudgetsTableComponent;
  let fixture: ComponentFixture<BudgetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
