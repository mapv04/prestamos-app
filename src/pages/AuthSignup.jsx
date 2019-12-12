import React from 'react';
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Footer from '../components/Footer';

class AuthSignup extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 h-screen font-baskervville">
        <Navbar />
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default AuthSignup;
