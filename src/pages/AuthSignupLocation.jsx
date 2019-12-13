import React from 'react';
import Navbar from '../components/Navbar';
import SignupLocation from '../components/SignupLocation';
import Footer from '../components/Footer';

const AuthSignupLocation = () => (
  <div className="bg-gray-100 font-baskervville min-h-screen relative">
    <div className="pb-32">
      <Navbar />
      <SignupLocation />
    </div>

    <Footer />
  </div>
);

export default AuthSignupLocation;
