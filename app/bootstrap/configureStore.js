import { createStore } from 'redux';
import createReducer from './createReducer';

export default function configureStore(/* initialState = {} */) {
  const rootReducer = createReducer();

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    /* initialState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  if (module.hot) {
    module.hot.accept('./createReducer', () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
}
