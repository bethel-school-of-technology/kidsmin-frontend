import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import AuthenticatedComponent from './Components/Authorization/authenticatedComponent';
// import Login from './Components/Authorization/Login/login';
import App from './App'
import * as serviceWorker from './serviceWorker';
import Login from './Components/Authorization/Login/login';

ReactDOM.render(
  <React.StrictMode>
    <Login />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
