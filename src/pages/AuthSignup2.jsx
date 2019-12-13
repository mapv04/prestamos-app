import React from 'react';
import Navbar from '../components/Navbar';
import Signup2 from '../components/Signup2';
import Footer from '../components/Footer';

const AuthSignup2 = () => (
  <div className="bg-gray-100 font-baskervville min-h-screen relative">
    <div className="pb-32">
      <Navbar />
      <Signup2 />
    </div>
    <Footer />
  </div>
);

export default AuthSignup2;
