/* eslint react/jsx-filename-extension: off */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'bootstrap/configureStore';
import initialState from 'bootstrap/initialState';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import './index.css';
import App from './main/components/App';

const root = document.getElementById('root');
const store = configureStore(initialState);

(function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </AppContainer>,
    root
  );

  if (module.hot) {
    module.hot.accept('./main/components/App', () => render(App));
  }
}(App));
