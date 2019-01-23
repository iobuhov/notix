import { TOGGLE_SIDEBAR } from 'main/constants';
import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { not } from 'ramda';

const initState = fromJS({ open: false });

const sidebarReducer = sidebarState => sidebarState.update('open', not);

export default handleActions({
  [TOGGLE_SIDEBAR]: sidebarReducer,
}, initState);
