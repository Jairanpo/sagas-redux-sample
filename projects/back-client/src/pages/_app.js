import React from 'react';
import {Provider} from 'react-redux';
import {wrapper} from '../store';

const MyApp = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store} >
      <Component {...props.pageProps} />
    </Provider>
  );
};


