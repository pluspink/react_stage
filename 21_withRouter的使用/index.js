// 引入React核心库
import React from 'react';
// 引入React DOM
import ReactDOM from 'react-dom';
// BrowserRouter
import { BrowserRouter } from 'react-router-dom';
// 引入App
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
