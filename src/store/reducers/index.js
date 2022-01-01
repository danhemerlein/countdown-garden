import { combineReducers } from 'redux';
import countdownsReducer from './countdowns';

const rootReducer = combineReducers({
  countdowns: countdownsReducer,
});

export default rootReducer;
