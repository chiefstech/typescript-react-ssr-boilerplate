import React from 'react';
import { useDispatch } from 'react-redux';
import { calendarSlice } from '@common/store/slices/calendar-slice';
import { CalendarState } from '@common/types/calendar.types';

interface StoryContainerProps {
  calendarState?: CalendarState | undefined;
}

export const StoryContainer: React.FC<StoryContainerProps> = ({ calendarState, children }) => {
  const dispatch = useDispatch();
  dispatch(calendarSlice.actions.initialize(calendarState));
  return <React.Fragment>{children}</React.Fragment>;
};
