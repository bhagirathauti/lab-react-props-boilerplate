import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from "./AppClass";
import data from "./data"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App props={data} />   
    {/* change the above line - for interchaning between App and AppClass */}
    <AppClass props={data}/>
  </React.StrictMode>
);
