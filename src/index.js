import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';

//Page that renders the application, is connected to Index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


