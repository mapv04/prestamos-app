import React from 'react';
import '../styles/tailwind-styles.css';
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import HowTo from '../components/HowTo';
import Advantages from '../components/Advantages';
import Footer from '../components/Footer';

const Landing = () => (
  <div className="bg-gray-100 font-baskervville">
    <Navbar />
    <Introduction />
    <HowTo />
    <Advantages />
    <Footer />
  </div>
);

export default Landing;
