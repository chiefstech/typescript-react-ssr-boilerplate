import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { UAParser } from 'ua-parser-js';

export const browserSelector = (state: RootStateWithUA): IUAParser.IBrowser => state.ua.browser;
export const isIE11Selector = createSelector(
  browserSelector,
  (browser) => browser.name === 'IE' && browser.version === '11.0'
);

const parser = new UAParser();
const ua = parser.getResult();

// used to override ua parser result, for example in a storybook
const override = (
  state: IUAParser.IResult,
  action: PayloadAction<{} | undefined>
): IUAParser.IResult => {
  // if payload is undefined when override is called we must revert the previous ua to have the original values; otherwise store caches previously overriden values
  return { ...state, ...(action.payload || ua) };
};

const reducers = {
  override
};

export const userAgentSlice = createSlice({
  name: 'app-name/user-agent',
  initialState: ua as IUAParser.IResult,
  reducers
});

export interface UserAgentSliceProps {
  ua: IUAParser.IResult;
}
export const getUserAgentSlice = ({ ua }: UserAgentSliceProps) => {
  return createSlice({
    name: 'app-name/user-agent',
    initialState: { ...ua } as IUAParser.IResult,
    reducers
  });
};

interface RootStateWithUA {
  ua: IUAParser.IResult;
}
