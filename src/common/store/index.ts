import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userAgentSlice, getUserAgentSlice } from '@common/store/slices/user-agent-slice';
import { calendarSlice, getCalendarSlice } from '@common/store/slices/calendar-slice';
import { CalendarState } from '@common/types/calendar.types';

const rootReducer = combineReducers({
  ua: userAgentSlice.reducer,
  calendar: calendarSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export default store;

interface CreateStoreProps {
  ua: IUAParser.IResult;
  calendar: CalendarState;
}
export function createStore({ ua, calendar }: CreateStoreProps) {
  const rootReducer = combineReducers({
    ua: getUserAgentSlice({ ua }).reducer,
    calendar: getCalendarSlice({ calendar }).reducer
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      immutableCheck: false, // should never be used in production, and causing memory leaks in development
      serializableCheck: false // should never be used in production, and causing memory leaks in development
    })
  });
  return store;
}
