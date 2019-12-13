import React from 'react';
import '../styles/tailwind-styles.css';
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import HowTo from '../components/HowTo';
import Advantages from '../components/Advantages';
import Footer from '../components/Footer';

const Landing = () => (
  <div className="font-baskervville bg-gray-100 min-h-screen relative">
    <div className="pb-32">
      <Navbar />
      <Introduction />
      <HowTo />
      <Advantages />
    </div>
    <Footer />
  </div>
);

export default Landing;
