import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Closed from './Closed';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const now = new Date();

let hours = now.getHours();

const showApp = hours < 21 && hours > 7;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>{showApp ? <App /> : <Closed />}</Provider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
