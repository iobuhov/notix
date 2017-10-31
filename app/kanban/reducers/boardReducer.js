import { handleActions, combineActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { cardSetReducer } from 'kanban/reducers';
import { values } from 'ramda';
import * as cardSetConstatns from 'kanban/constants/cardSetConstants';
import * as boardConstants from 'kanban/constants/boardConstants';
import CardSetRecord from '../records/CardSetRecord';

const cardSets = [
  'Main', 'Second', 'Example',
  'Cars', 'Addons', 'Packs',
  'Soda', 'Vaccum', 'Lake',
];

const initState = fromJS({
  content: cardSets.map((name, id) => new CardSetRecord({ name, id })),
  holding: undefined,
  dragging: true,
});

const cardSetActionTypes = values(cardSetConstatns);
const boardActionTypes = values(boardConstants);

function createContentReducer(action) {
  return cardSetList => cardSetReducer(cardSetList, action);
}

function contentReducer(board, action) {
  return (
    board.update('content', createContentReducer(action))
  );
}

function holdingReducer(board, { payload }) {
  return board
    .set('holding', payload);
    // .update('dragging', bool => !bool);
}

function dragModeReducer(board) {
  return board.update('dragging', bool => !bool);
}

export default handleActions({
  [combineActions(...cardSetActionTypes)]: contentReducer,
  [combineActions(...boardActionTypes)]: holdingReducer,
  [boardConstants.TOGGLE_DRAG_MODE]: dragModeReducer,
}, initState);
