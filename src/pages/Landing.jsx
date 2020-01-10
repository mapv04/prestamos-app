import React from 'react';

import Container from '../components/Container';
import Introduction from '../components/landing/Introduction';
import HowTo from '../components/landing/HowTo';
import Advantages from '../components/landing/Advantages';

const Landing = () => (
  <Container
    content={
      <React.Fragment>
        <Introduction />
        <HowTo />
        <Advantages />
      </React.Fragment>
    }
  />
);

export default Landing;
