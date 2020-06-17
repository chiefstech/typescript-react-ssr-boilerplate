import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarState } from '@common/types/calendar.types';

interface UpdateCalendar {
  property: 'years' | 'months' | 'days';
  value: string[];
  index: number;
}

export const initialState: CalendarState = {
  users: [],
  colors: [],
  days: [],
  weeks: [],
  months: [],
  years: [],
  currentViewType: []
};

// used to override initialState, for example in a storybook
const initialize = (
  state: CalendarState,
  action: PayloadAction<CalendarState | undefined>
): CalendarState => {
  // if payload is undefined when override is called we must revert the previous ua to have the original values; otherwise store caches previously overriden values
  return { ...state, ...(action.payload || initialState) };
};

const updateCalendar = (
  state: CalendarState,
  action: PayloadAction<UpdateCalendar>
): CalendarState => {
  const { property, value, index } = action.payload;
  state[property][index] = value;
  return state;
};

const reducers = {
  initialize,
  updateCalendar
};

export const calendarSlice = createSlice({
  name: 'doing/calendar',
  initialState,
  reducers
});

export interface calendarSliceProps {
  calendar: CalendarState;
}
export const getCalendarSlice = ({ calendar }: calendarSliceProps) => {
  return createSlice({
    name: 'doing/calendar',
    initialState: { ...initialState, ...calendar },
    reducers
  });
};
