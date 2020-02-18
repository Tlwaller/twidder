import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './Reducers/UserReducer';
import postReducer from './Reducers/PostReducer';

const rootReducer = combineReducers({
    userReducer,
    postReducer
})

export default createStore(rootReducer, applyMiddleware(promise));