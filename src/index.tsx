import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import el from './rcss/slide'
import lem from './component/ctest'
import App from './App';
// import reportWebVitals from './reportWebVitals';


import list from './rfrag/react_frag'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  lem
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
