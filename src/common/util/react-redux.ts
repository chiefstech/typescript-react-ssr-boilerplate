/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Provider } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
export class RProvider extends React.Component<any> {
  props: any;
  public render(): JSX.Element {
    const stores = { ...this.props };

    // Remove the 'children' because we don't want that passed around via React's Context mechanism
    delete stores.children;

    return React.createElement(Provider as any, stores, this.props.children);
  }
}
