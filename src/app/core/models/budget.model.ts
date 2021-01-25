import { ICategory } from './category.model';

export interface IBudgetSummary extends IBudgetBase {
  currency_format: ICurrencyFormat;
  categories: Array<ICategory>;
}
export interface IBudget extends IBudgetBase {
  currency_format: ICurrencyFormat;
}

export interface ICurrencyFormat {
  iso_code: string;
  example_format: string;
  decimal_digits: number;
  decimal_separator: string;
  symbol_first: boolean;
  group_separator: string;
  currency_symbol: string;
  display_symbol: boolean;
}

export interface IBudgetBase {
  name: string;
  last_month: Date;
  first_month: Date;
  last_modified_on: Date;
  date_format: {
    format: string;
  };
  id: string;
}
