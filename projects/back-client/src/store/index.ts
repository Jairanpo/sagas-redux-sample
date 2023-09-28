import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

export interface State {
  tick: string;
}

const reducer = (state: State = {tick: 'init'}, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      const stateDiff = diff(state, action.payload) as any;
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith('X'); // or any other criteria
      return {
        ...state,
        ...action.payload,
        page: wasBumpedOnClient ? state.page : action.payload.page, // keep existing state or use hydrated
      };
    case 'TICK':
      return {...state, tick: action.payload};
    default:
      return state;
  }
};

const makeStore = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});
