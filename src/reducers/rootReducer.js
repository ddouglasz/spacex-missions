import { combineReducers } from 'redux';
import launches from './launchesReducer';
import history from './historyReducer';


export default combineReducers({
  launches,
  history,
});

