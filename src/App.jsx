import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//css
import './styles/tailwind-styles.css';

//landing
import Landing from './pages/Landing';

//Auth
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import SignupRFC from './pages/auth/SignupRFC';
import SignupLocation from './pages/auth/SignupLocation';
import SignupExperience from './pages/auth/SignupExperience';
import SignupAboutCompany from './pages/auth/SignupAboutCompany';

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/register/rfc" component={SignupRFC} />
        <Route exact path="/register/location" component={SignupLocation} />
        <Route exact path="/register/experience" component={SignupExperience} />
        <Route exact path="/register/company" component={SignupAboutCompany} />
        <Route exact path="/simulator" component={SimulatorPage} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
