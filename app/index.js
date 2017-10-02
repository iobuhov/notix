/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');
const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    root
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => render(App));
}
