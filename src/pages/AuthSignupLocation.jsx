import React from 'react';
import Navbar from '../components/Navbar';
import SignupLocation from '../components/SignupLocation';
import Footer from '../components/Footer';

const AuthSignupLocation = () => (
  <div className="bg-gray-100 h-screen font-baskervville">
    <Navbar />
    <SignupLocation />
    <Footer />
  </div>
);

export default AuthSignupLocation;
