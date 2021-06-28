import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/* state-manager */
import { StoresProvider, stores } from './state-manager/stores';

/* components */
import App from './App';

/* styles */
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider value={stores}>
      <App />
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
