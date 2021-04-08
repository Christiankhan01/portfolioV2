import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../src/components/Nav';
import App from './App';
import Hero from '../src/components/sections/Hero';
import About from '../src/components/sections/About';
import Projects from '../src/components/sections/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from '../src/components/Routes';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <>

    <Router>
      <Main />
    </Router>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
