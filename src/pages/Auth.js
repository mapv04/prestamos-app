import React from 'react';

import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Auth extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 h-screen">
        <Navbar />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default Auth;
