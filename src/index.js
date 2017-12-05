import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.dev.js'
import initialState from './reducers/initialState.js'
import App from './App';

const store = configureStore(initialState)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

