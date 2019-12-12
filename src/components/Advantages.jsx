import React from 'react';

//FontAwsesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Advantages() {
  return (
    <div className="pt-24 container mx-auto">
      <div className="text-left px-1">
        <h1 className="text-4xl md:text-6xl">
          <strong>Ventajas del crédito Atenas</strong>
        </h1>
      </div>

      {/*Advantages*/}
      <div className="flex justify-center">
        <div className="w-5/6 md:w-2/4 bg-pink-500 rounded-lg shadow-2xl m-6 p-8">
          <h3 className="text-white text-3xl">
            <strong>Crédito Atenas</strong>
          </h3>

          <div className="flex m-4 text-xl text-white">
            <FontAwesomeIcon
              className="m-3"
              size="2x"
              icon={faCheckCircle}
              color="#4fc3f7"
            />
            <div>
              <p>10 minutos</p>
              <p>Tiempo para decidir el crédito</p>
            </div>
          </div>

          <div className="flex m-4 text-xl text-white">
            <FontAwesomeIcon
              className="m-3"
              size="2x"
              icon={faCheckCircle}
              color="#4fc3f7"
            />
            <div>
              <p>10 minutos</p>
              <p>Tiempo para decidir el crédito</p>
            </div>
          </div>

          <div className="flex m-4 text-xl text-white">
            <FontAwesomeIcon
              className="m-3"
              size="2x"
              icon={faCheckCircle}
              color="#4fc3f7"
            />
            <div>
              <p>10 minutos</p>
              <p>Tiempo para decidir el crédito</p>
            </div>
          </div>

          <div className="flex m-4 text-xl text-white">
            <FontAwesomeIcon
              className="m-3"
              size="2x"
              icon={faCheckCircle}
              color="#4fc3f7"
            />
            <div>
              <p>10 minutos</p>
              <p>Tiempo para decidir el crédito</p>
            </div>
          </div>

          <div />
        </div>
      </div>
    </div>
  );
}

export default Advantages;
