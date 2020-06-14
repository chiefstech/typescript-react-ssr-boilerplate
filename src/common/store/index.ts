import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { userAgentSlice, getUserAgentSlice } from '@common/store/slices/user-agent-slice';
import { userAgentSlice, getUserAgentSlice } from './slices/user-agent-slice';

const rootReducer = combineReducers({
  ua: userAgentSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export default store;

interface CreateStoreProps {
  ua: IUAParser.IResult;
}
export function createStore({ ua }: CreateStoreProps) {
  const rootReducer = combineReducers({
    ua: getUserAgentSlice({ ua }).reducer
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
