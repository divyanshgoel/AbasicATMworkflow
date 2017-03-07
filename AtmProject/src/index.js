/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router"
let app = document.getElementById('container');
render(<App />, app);
render(
  <Router history={browserHistory} path="hello">
    <Route path="/" component={App}/>
  </Router>
  , app);
