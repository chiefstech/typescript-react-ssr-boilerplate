import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { defaultState } from '../store/default';
import {
  PaymentState,
  TripItem,
  PaymentOptions,
  TripSummaryInfo,
  TripTotalPrice
} from '../constants/types';
import { paymentSlice } from '../store/slices/payment-slice';
import { errorSlice } from '../store/slices/error-slice';
import { receiptSlice } from '../store/slices/receipt-slice';
import { userAgentSlice } from '@client/_shared/store/slices/user-agent-slice';

interface InitialState {
  loading?: boolean | undefined;
  paidInFull?: boolean | undefined;
  showLoadingSpinner?: boolean | undefined;
  showLoyaltyPoints?: boolean | undefined;
  paymentOptions?: PaymentOptions;
  tripItem?: TripItem;
  tripSummaryInfo?: TripSummaryInfo;
  tripTotalPrice?: TripTotalPrice;
}

interface StoryContainerProps {
  initialState?: InitialState | undefined;
  uaOverrides?: {};
}

export const StoryContainer: React.FC<StoryContainerProps> = ({
  initialState,
  children,
  uaOverrides
}) => {
  const dispatch = useDispatch();
  const state = getInitialState(initialState);
  const { tripItem, tripSummaryInfo, tripTotalPrice } = state;
  dispatch(
    paymentSlice.actions.initialize({
      ...state,
      skipApiCalls: true
    })
  );
  dispatch(
    errorSlice.actions.initialize({
      tripItem,
      tripSummaryInfo
    })
  );
  dispatch(userAgentSlice.actions.override(uaOverrides));
  if (tripTotalPrice) {
    dispatch(receiptSlice.actions.initialize(tripTotalPrice));
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export function getInitialState(initialState: InitialState | undefined): PaymentState {
  const {
    paidInFull,
    tripItem,
    loading,
    paymentOptions,
    tripSummaryInfo,
    showLoyaltyPoints,
    showLoadingSpinner,
    tripTotalPrice
  } = initialState || {
    loading: false,
    paymentOptions: null
  };

  return {
    ...defaultState,
    paidInFull,
    loading,
    showLoyaltyPoints,
    showLoadingSpinner,
    tripTotalPrice,
    tripItem: tripItem || {
      ...defaultState.tripItem,
      summaryProductKey: 'cruises' as const,
      tripId: 'TESTTRIPID',
      itemId: 'TESTITEMID',
      price: {
        paymentOptions,
        balanceDue: 520.24,
        creditOptions: [],
        currency: 'USD'
      }
    },
    tripSummaryInfo: tripSummaryInfo || defaultState.tripSummaryInfo,
    type: 'custom',
    name: 'Sara Parker',
    cardNumber: '4444466213362',
    cardExpiry: moment('01/20/24'),
    cardCvc: '554',
    billingAddress: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      postal: '',
      country: ''
    },
    amount: 0,
    amountLabel: ''
  };
}
