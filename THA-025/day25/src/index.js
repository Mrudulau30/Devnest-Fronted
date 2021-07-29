import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import App1 from './APP1';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/tailwind.css"

ReactDOM.render(
  <React.StrictMode>
    <div className="out">
      <div className="boot">
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    </div>
    <div className="tail">
    <App1 />
    <App1 />
    <App1 />
    <App1 />
   
    </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
