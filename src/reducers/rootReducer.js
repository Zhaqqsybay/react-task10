import { combineReducers } from 'redux';
import advertismentsReducer from './advertismentsReducer';

const rootReducer = combineReducers({
  advertisments: advertismentsReducer 
});

export default rootReducer;
