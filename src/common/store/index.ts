import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userAgentSlice, getUserAgentSlice } from '@common/store/slices/user-agent-slice';
import { navigationSlice, getNavigationSlice } from '@common/store/slices/navigation-slice';
import { NavigationState } from '@common/types/navigation.types';

const rootReducer = combineReducers({
  ua: userAgentSlice.reducer,
  navigation: navigationSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export default store;

interface CreateStoreProps {
  ua: IUAParser.IResult;
  navigation: NavigationState;
}
export function createStore({ ua, navigation }: CreateStoreProps) {
  const rootReducer = combineReducers({
    ua: getUserAgentSlice({ ua }).reducer,
    navigation: getNavigationSlice({ navigation }).reducer
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
