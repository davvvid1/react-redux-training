import {createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Todo: Remove 'window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' before build for production

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(promise)
));

export default store;
