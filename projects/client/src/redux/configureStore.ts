import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import imageReducer from './reducer'
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  images: imageReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const middeware = [sagaMiddleware]

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middeware)))

sagaMiddleware.run(watcherSaga)

export default store
