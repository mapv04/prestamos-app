import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="w-full bg-pink-600 bottom-0">
      <div className="m-auto container">
        <div className="p-4">
          <div className="w-24items-center">
            <p className="font-bold text-4xl text-white">ATENAS</p>
            <p className="text-white my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              fuga veritatisn{' '}
            </p>
            <section>
              <FontAwesomeIcon
                className="mx-2"
                size="2x"
                color="white"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="mx-2"
                size="2x"
                color="white"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="mx-2"
                size="2x"
                color="white"
                icon={faTwitter}
              />
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
