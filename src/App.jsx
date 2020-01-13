import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//css
import './styles/tailwind-styles.css';

//landing
import Landing from './pages/Landing';

//Auth
import Auth from './pages/auth/Auth';
import AuthSignup from './pages/auth/AuthSignup';
import AuthSignupRFC from './pages/auth/AuthSignupRFC';
import AuthSignupLocation from './pages/auth/AuthSignupLocation';
import AuthSignupExperience from './pages/auth/AuthSignupExperience';
import AuthSignupAboutCompany from './pages/auth/AuthSignupAboutCompany';

//simulator
import SimulatorPage from './pages/SimulatorPage';

//help
import Help from './pages/Help';

//about
import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/register" component={AuthSignup} />
        <Route exact path="/register/rfc" component={AuthSignupRFC} />
        <Route exact path="/register/location" component={AuthSignupLocation} />
        <Route
          exact
          path="/register/experience"
          component={AuthSignupExperience}
        />
        <Route
          exact
          path="/register/company"
          component={AuthSignupAboutCompany}
        />
        <Route exact path="/simulator" component={SimulatorPage} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
