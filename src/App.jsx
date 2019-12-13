import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import AuthSignup from './pages/AuthSignup';
import AuthSignup2 from './pages/AuthSignup2';
import AuthSignupLocation from './pages/AuthSignupLocation';
import SimulatorPage from './pages/SimulatorPage';
import NotFound from './pages/NotFound';
import Help from './pages/Help';
import AuthSignupExperience from './pages/AuthSignupExperience';
import AuthSignupAboutCompany from './pages/AuthSignupAboutCompany';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/register" component={AuthSignup} />
        <Route exact path="/register/2" component={AuthSignup2} />
        <Route exact path="/register/location" component={AuthSignupLocation} />
        <Route
          exact
          path="/register/experience"
          component={AuthSignupExperience}
        />
        <Route
          exact
          path="/register/about"
          component={AuthSignupAboutCompany}
        />
        <Route exact path="/simulator" component={SimulatorPage} />
        <Route exact path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
