import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

function Container(props) {
  return (
    <div className="bg-gray-100 min-h-screen font-baskervville relative">
      <div className="pb-32">
        <Navbar />
        {props.content}
      </div>
      <Footer />
    </div>
  );
}

export default Container;
