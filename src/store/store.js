import {  applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { legacy_createStore as createStore } from 'redux';
import combineReducers from './reducers/combineReducer'

export const store = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))