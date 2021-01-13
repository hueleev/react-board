import { combineReducers } from 'redux';
import counter from './counter';
import waiting from './waiting';
import todos from './todos';

export default combineReducers({
  counter,
  waiting,
  todos
});
