import React from 'react';

import '../styles/tailwind-styles.css';
import '../styles/notFound.css';
import ronSleep from '../images/404_sleep.jpg';

function NotFound() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto text-center">
        <figure className="pt-20 mb-24">
          <img className="rotateImg imageDimensions" src={ronSleep} />
        </figure>
        <h1 className="text-3xl">No encontramos lo que buscabas.</h1>
      </div>
    </div>
  );
}

export default NotFound;
