import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Auth from './pages/Auth';
import AuthSignup from './pages/AuthSignup';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/register" component={AuthSignup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
