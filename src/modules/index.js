import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import boardReducer_json from './boardReducer_json';

const rootReducer = combineReducers({ boardReducer, boardReducer_json });

export default rootReducer;