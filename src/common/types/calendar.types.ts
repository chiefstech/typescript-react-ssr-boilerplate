export interface CalendarState {
  users: string[][];
  colors: string[][];
  // how to represent calendar days/weeks/months
  days: number[][];
  weeks: number[][];
  months: number[][];
  years: number[][];
  currentViewType: ViewType[];
}

export type ViewType = 'days' | 'weeks' | 'months' | 'years';

export interface DayState {
  hours: string[];
}
