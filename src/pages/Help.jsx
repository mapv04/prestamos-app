import React from 'react';

import Container from '../components/Container';
import HelpComponent from '../components/help/Help';

class Help extends React.Component {
  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[3];
    navElement.classList.add('border-pink-400');
  }

  render() {
    return <Container content={<HelpComponent />} />;
  }
}

export default Help;
