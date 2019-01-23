import { combineReducers } from 'redux-immutable';
import { boardReducer as board } from 'kanban/reducers';
import { sidebarReducer as sidebar } from 'main/reducers';

export default function createReducer() {
  return combineReducers({
    board,
    sidebar,
  });
}
