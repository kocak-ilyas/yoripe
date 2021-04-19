import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';

const rootReducers = combineReducers({ productsReducer });
export default rootReducers;
