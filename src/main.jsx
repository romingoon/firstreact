import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import NotificationList from './chapter_06/NotificationList';
import Counter from './chapter_07/Counter';
import TextInputWithFocusButton from './chapter_07/TextInputWithFocusButton';
import MeasureExample from './chapter_07/MeasureExample';
import Accomodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/confirmButton';

ReactDOM.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>,
  document.getElementById('root')
);
