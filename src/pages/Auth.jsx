import React from 'react';

import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Auth = () => (
  <div className="bg-gray-100 h-screen font-baskervville">
    <Navbar />
    <Login />
    <Footer />
  </div>
);

export default Auth;
