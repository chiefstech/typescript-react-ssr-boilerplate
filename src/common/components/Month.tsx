import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@common/store';
import moment from 'moment';
import { calendarSlice } from '@common/store/slices/calendar-slice';

const Wrapper = styled.div`
  display: block;
  margin: 5 10px;
`;
export const CurrentMonth: React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      calendarSlice.actions.updateCalendar({
        property: 'months',
        index: 0,
        value: [moment().month()]
      })
    );
  }, []);
  return <Month />;
};

const Month: React.FC<{}> = () => {
  // const users = useSelector((state: RootState) => state.calendar.users);
  const months = useSelector((state: RootState) => state.calendar.months);
  return (
    <>
      {months.map((calendarMonths, index) => (
        <CalendarMonths key={index} months={calendarMonths} />
      ))}
    </>
  );
};

export const CalendarMonths: React.FC<{ months: number[] }> = ({ months }) => {
  const monthNames = moment.months();
  return (
    <>
      {months.map((monthIndex, index) => (
        <Wrapper key={index}>
          <h4>{monthNames[monthIndex]}</h4>
        </Wrapper>
      ))}
    </>
  );
};

export default Month;
