import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar1 from './components/navi/Navigation'
import reportWebVitals from './reportWebVitals';
import Body1 from './components/body/Body1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar1/>
    <Body1/>
  </React.StrictMode>
);


reportWebVitals();
