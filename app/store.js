import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import CollectionReducer from './common/reducers/CollectionReducer.js';
// import SettingsReducer from './common/reducers/SettingsReducer.js';

const reducers = combineReducers({
  collection: CollectionReducer
});

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(reducers, middleware);

export default store;
