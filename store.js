import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const enhancers = [applyMiddleware(...middleware)];

const store = createStore(createReducer(), composeWithDevTools(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;
