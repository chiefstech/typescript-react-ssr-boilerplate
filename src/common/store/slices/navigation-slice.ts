import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavigationState } from '@common/types/navigation.types';

export const initialState: NavigationState = {
  currentRoute: 'Home',
  routes: ['Home', 'About', 'Sign In'],
  subRoutes: [[], ['Company', 'Careers'], []]
};
// used to override initialState, for example in a storybook
const initialize = (
  state: NavigationState,
  action: PayloadAction<NavigationState | undefined>
): NavigationState => {
  // if payload is undefined when override is called we must revert the previous ua to have the original values; otherwise store caches previously overriden values
  return { ...state, ...(action.payload || initialState) };
};

const updateCurrentRoute = (
  state: NavigationState,
  action: PayloadAction<string>
): NavigationState => {
  state.currentRoute = action.payload;
  return state;
};

const reducers = {
  initialize,
  updateCurrentRoute
};

export const navigationSlice = createSlice({
  name: 'app-name/navigation',
  initialState,
  reducers
});

export interface navigationSliceProps {
  navigation: NavigationState;
}
export const getNavigationSlice = ({ navigation }: navigationSliceProps) => {
  return createSlice({
    name: 'app-name/navigation',
    initialState: { ...initialState, ...navigation },
    reducers
  });
};
