import React from 'react';

import Navbar from '../components/Navbar';
import HelpComponent from '../components/Help';
import Footer from '../components/Footer';

class Help extends React.Component {
  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[4];
    navElement.classList.add('border-pink-400');
  }

  render() {
    return (
      <div className="bg-gray-100 font-baskervville min-h-screen relative">
        <div className="pb-32">
          <Navbar />
          <HelpComponent />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Help;
