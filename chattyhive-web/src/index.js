// ADD THIS TO index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChattyHive from './ChattyHive';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChattyHive />
  </React.StrictMode>,
  document.getElementById('root')
);
