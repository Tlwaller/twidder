import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './Reducers/UserReducer';

export default createStore(userReducer, applyMiddleware(promise));