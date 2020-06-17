import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@common/store';

const Wrapper = styled.div`
  display: grid;
`;

const Month: React.FC<{}> = () => {
  // const users = useSelector((state: RootState) => state.calendar.users);
  // console.log({ users });
  // console.log({ users });
  return <Wrapper></Wrapper>;
};

export default Month;
