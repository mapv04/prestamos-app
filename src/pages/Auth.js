import React from 'react';

import Login from '../components/Login';
import Navbar from '../components/Navbar';

class Auth extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 h-screen">
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default Auth;
