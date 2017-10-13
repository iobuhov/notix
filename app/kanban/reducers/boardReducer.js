import { handleAction, combineActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { cardSetReducer } from 'kanban/reducers';
import * as cardSetConstatns from 'kanban/constants/cardSetConstants';

const initState = fromJS({ content: [] });

export const cardSetActionTypes = Object.values(cardSetConstatns);

function createContentReducer(action) {
  return cardSetList => cardSetReducer(cardSetList, action);
}

function reducer(board, action) {
  return board.update('content', createContentReducer(action));
}

export default handleAction(combineActions(...cardSetActionTypes), reducer, initState);
