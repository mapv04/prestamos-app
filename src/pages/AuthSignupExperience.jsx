import React from 'react';
import Navbar from '../components/Navbar';
import SignupExperience from '../components/SignupExperience';
import Footer from '../components/Footer';

const AuthSignupExperience = () => (
  <div className="bg-gray-100 font-baskervville min-h-screen relative">
    <div className="pb-32">
      <Navbar />
      <SignupExperience />
    </div>
    <Footer />
  </div>
);

export default AuthSignupExperience;
