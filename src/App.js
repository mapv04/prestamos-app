import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import AuthSignup from './pages/AuthSignup';
import SimulatorPage from './pages/SimulatorPage';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/register" component={AuthSignup} />
        <Route exact path="/simulator" component={SimulatorPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
