import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './templates/App';
import './index.css';

import FlagsProvider from './contexts/FlagsProvider';

ReactDOM.render(
  <BrowserRouter>
    <FlagsProvider>
      <App />
    </FlagsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);