//https://github.com/ValeraT1982/react-data-load/blob/master/data-load-test-app/src/index.js

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './appReducers';
import myUsersSaga from "../sagas/myusers-saga";
import usersSaga from "../sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = initialState => {
  const middleware = [thunk, sagaMiddleware];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(myUsersSaga);
  sagaMiddleware.run(usersSaga);

  return store;
}