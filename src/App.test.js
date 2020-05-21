import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/homepage';


function App() {
  return(
    <Router>
      <div className="App">
        <h1>Router</h1>
        <Route path="/" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;