import React from 'react';
import Navbar from '../components/Navbar';
import SignupAboutCompany from '../components/SignupAboutCompany';
import Footer from '../components/Footer';

const AuthSignupAboutCompany = () => (
  <div className="bg-gray-100 font-baskervville min-h-screen relative">
    <div className="pb-32">
      <Navbar />
      <SignupAboutCompany />
    </div>
    <Footer />
  </div>
);

export default AuthSignupAboutCompany;
