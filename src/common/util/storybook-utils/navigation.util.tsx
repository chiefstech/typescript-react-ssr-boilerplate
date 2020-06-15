import React from 'react';
import { useDispatch } from 'react-redux';
import { navigationSlice } from '@common/store/slices/navigation-slice';
import { NavigationState } from '@common/types/navigation.types';

interface StoryContainerProps {
  navigationState?: NavigationState | undefined;
}

export const StoryContainer: React.FC<StoryContainerProps> = ({ navigationState, children }) => {
  const dispatch = useDispatch();
  dispatch({
    type: 'tes'
  });
  type c = typeof navigationSlice.actions.updateCurrentRoute;
  (navigationSlice.actions.updateCurrentRoute as c)('Home');
  // useEffect(() => {
  //   dispatch(navigationSlice.actions.updateCurrentRoute('Home'));
  // }, []);
  dispatch(navigationSlice.actions.initialize(navigationState));
  return <React.Fragment>{children}</React.Fragment>;
};
