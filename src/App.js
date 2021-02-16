import React from 'react';
import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
          This is home page.
      </Route>
      <Route exact path="/starred">
          This is starred
      </Route>
      <Route>
        <h1>404 - Not Found.</h1>
        <p>Oops! Page Not Found.</p>
      </Route>
    </Switch>
  );
}

export default App;
