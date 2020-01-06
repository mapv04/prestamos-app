import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Advantage(props) {
  return (
    <div className="flex items-center m-4 text-xl text-white">
      <FontAwesomeIcon
        className="m-3"
        size="2x"
        icon={faCheckCircle}
        color="#4fc3f7"
      />
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Advantage;
