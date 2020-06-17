export interface CalendarState {
  users: string[][];
  colors: string[][];
  // how to represent calendar days/weeks/months
  days: string[][];
  weeks: string[][];
  months: string[][];
  years: string[][];
  currentViewType: ViewType[];
}

export type ViewType = 'days' | 'weeks' | 'months' | 'years';

export interface DayState {
  hours: string[];
}
