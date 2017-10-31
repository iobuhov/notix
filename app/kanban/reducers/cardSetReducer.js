/* eslint arrow-body-style: off */
import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import { CardSetRecord } from 'kanban/records';
import * as cardSetConstatns from 'kanban/constants/cardSetConstants';

const initState = List();

const findIndexById = list => id => list.findIndex(x => x.id === id);

const addCardSet = (cardSetList, { payload }) => {
  return cardSetList.push(new CardSetRecord(payload));
};

const swapCardSet = (cardSetList, { payload: { ids } }) => {
  const indexes = ids.map(findIndexById(cardSetList));
  const [from, to] = indexes;
  const next = cardSetList.get(from);
  const prev = cardSetList.get(to);
  return cardSetList.set(from, prev).set(to, next);
};

export default handleActions({
  [cardSetConstatns.ADD_CARD_SET]: addCardSet,
  [cardSetConstatns.SWAP_CARD_SET]: swapCardSet,
}, initState);
