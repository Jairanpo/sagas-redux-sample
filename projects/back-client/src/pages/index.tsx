import React from 'react';
import {NextPage} from 'next';
import {connect} from 'react-redux';
import {wrapper, State} from '../store';

export const getServerSideProps = wrapper.getServerSideProps(store => ({req, res, ...etc}) => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things');
  store.dispatch({type: 'TICK', payload: 'was set in other page'});
});

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const Page: NextPage<State> = ({tick}) => <div>{tick}</div>;

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect((state: State) => state)(Page);
