import React from 'react';

import Login from '../components/Login';

class Auth extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 h-screen">
        <Login />
      </div>
    );
  }
}

export default Auth;
