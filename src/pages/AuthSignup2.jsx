import React from 'react';
import Navbar from '../components/Navbar';
import Signup2 from '../components/Signup2';
import Footer from '../components/Footer';

class AuthSignup extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 h-screen font-baskervville">
        <Navbar />
        <Signup2 />
        <Footer />
      </div>
    );
  }
}

export default AuthSignup;
