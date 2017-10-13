import { createAction } from 'redux-actions';
import {
  ADD_CARD_SET,
  SWAP_CARD_SET,
} from 'kanban/constants';

export const swapCardSet = createAction(
  SWAP_CARD_SET,
  (from, to) => ({ from, to })
);

export const addCardSet = createAction(
  ADD_CARD_SET,
  name => ({ name })
);
