import React from 'react';

import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Auth = () => (
  <div className="bg-gray-100 min-h-screen font-baskervville relative">
    <div className="pb-32">
      <Navbar />
      <Login />
    </div>
    <Footer />
  </div>
);

export default Auth;
