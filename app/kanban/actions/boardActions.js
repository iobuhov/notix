import { createAction } from 'redux-actions';
import {
  ADD_CARD_SET,
  SWAP_CARD_SET,
  DRAG_START,
  DRAG_STOP,
  TOGGLE_DRAG_MODE,
} from 'kanban/constants';

export const swapCardSet = createAction(
  SWAP_CARD_SET,
  (a, b) => ({ ids: [a, b] })
);

export const addCardSet = createAction(
  ADD_CARD_SET,
  name => ({ name })
);

export const dragStart = createAction(
  DRAG_START,
  id => id
);

export const dragStop = createAction(
  DRAG_STOP,
  () => undefined
);

export const toggleDragging = createAction(
  TOGGLE_DRAG_MODE
);
