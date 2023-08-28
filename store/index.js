import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

import initNews from '../reducers/initNews';
import newsReducers from '../reducers/news.reducers';
import newsSagas from '../sagas/news.sagas';

const initialState = {
  ...initNews,
};

const reducers = {
  ...newsReducers,
};

function* rootSaga() {
  yield all([...newsSagas]);
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
