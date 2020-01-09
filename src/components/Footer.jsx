import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="m-auto container">
        <div className="items-center">
          <p className="font-bold text-3xl text-white">ATENAS</p>
          <p className="text-white">
            Paseo de Los Virreyes 45, Puerta de Hierro, 45116 Zapopan, Jal
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
    </footer>
  );
}

export default Footer;
