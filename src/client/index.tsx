import { createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/app/App';
import { rootReducer } from './state';

const store =  createStore(rootReducer,composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
