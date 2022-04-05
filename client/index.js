import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import { store } from './features/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
