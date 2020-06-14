import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { paymentSlice, getPaymentSlice, PaymentSliceProps } from './slices/payment-slice';
import { receiptSlice, getReceiptSlice } from './slices/receipt-slice';
import { errorSlice, getErrorSlice } from './slices/error-slice';
import { userAgentSlice, getUserAgentSlice } from '@common/store/slices/user-agent-slice';
import { TripTotalPrice, Receipt } from '../constants/types';

const rootReducer = combineReducers({
  ua: userAgentSlice.reducer,
  payment: paymentSlice.reducer,
  receipt: receiptSlice.reducer,
  error: errorSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export default store;

interface CreateStoreProps extends PaymentSliceProps {
  receipt?: Receipt;
  tripTotalPrice?: TripTotalPrice;
  ua: IUAParser.IResult;
}
export function createStore({
  tripItem,
  tripSummaryInfo,
  tripTotalPrice,
  receipt,
  showLoyaltyPoints,
  ua
}: CreateStoreProps) {
  const rootReducer = combineReducers({
    ua: getUserAgentSlice({ ua }).reducer,
    payment: getPaymentSlice({
      tripItem,
      tripSummaryInfo,
      showLoyaltyPoints
    }).reducer,
    receipt: getReceiptSlice(tripTotalPrice, receipt).reducer,
    error: getErrorSlice({
      messages: tripSummaryInfo[tripItem.summaryProductKey][0]?.messages
    }).reducer
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
