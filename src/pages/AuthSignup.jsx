import React from 'react';
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Footer from '../components/Footer';

const AuthSignup = () => (
  <div className="bg-gray-100 font-baskervville min-h-screen relative">
    <div className="pb-32">
      <Navbar />
      <Signup />
    </div>
    <Footer />
  </div>
);

export default AuthSignup;
