import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers';
import rootSaga from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const middlewares = [];
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducers, composer);

sagaMiddleware.run(rootSaga);

export default store;
