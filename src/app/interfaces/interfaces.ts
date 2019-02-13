export interface IData {
  years: IYear[];
}

export interface IYear {
  year: number;
  months: IMonth[];
}

export interface IMonth {
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gasStart: number;
  gasEnd?: number;
  waterStart: number;
  waterEnd?: number;
  lightStart: number;
  lightEnd?: number;
}
