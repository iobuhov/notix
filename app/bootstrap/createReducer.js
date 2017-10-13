import { combineReducers } from 'redux-immutable';
import { boardReducer as board } from 'kanban/reducers';

export default function createReducer() {
  return combineReducers({ board });
}
