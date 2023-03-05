import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import NotificationList from './chapter_06/NotificationList';
import Counter from './chapter_07/Counter';
import TextInputWithFocusButton from './chapter_07/TextInputWithFocusButton';
import MeasureExample from './chapter_07/MeasureExample';

import ConfirmButton from './chapter_08/confirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';

ReactDOM.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
  document.getElementById('root')
);
