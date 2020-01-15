import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

function HowTo() {
  return (
    <div className="pt-24 container mx-auto">
      <div className="text-left px-1">
        <h1 className="text-4xl md:text-6xl">
          <strong>¿Cómo es nuestro proceso para solicitar un crédito?</strong>
        </h1>
      </div>

      <div className="flex flex-wrap justify-around text-center mt-6">
        <div className="md:w-1/3 p-5">
          <FontAwesomeIcon
            className="mx-auto mb-4"
            icon={faClock}
            size="7x"
            color="#ed64a6"
          />
          <p>
            Recibe una respuesta en menos de 48 horas, sin la necesidad de
            viajar, hacer filas, papeleo excesivo y sin compromiso. Todos
            nuestros créditos son transparentes sin letras pequeñas ni
            comisiones escondidas.
          </p>
        </div>
        <div className="md:w-1/3 p-5">
          <FontAwesomeIcon
            className="mx-auto mb-4"
            icon={faReply}
            size="7x"
            color="#ed64a6"
          />
          <p>
            Recibe tu crédito directamente en tu cuenta bancaria. Sólo paga la
            cantidad recibida. Una vez autorizado el crédito podras recibir los
            fondos ese mismo día.
          </p>
        </div>
        <div className="md:w-1/3 p-5">
          <FontAwesomeIcon
            className="mx-auto mb-4"
            icon={faHandHoldingUsd}
            size="7x"
            color="#ed64a6"
          />
          <p>
            Recibe tus fondos y sólo paga por lo que recibas. Una vez
            autorizado, puedes recibir los fondos ese mismo día.
          </p>
        </div>
        <div className="md:w-1/3 p-5">
          <FontAwesomeIcon
            className="mx-auto mb-4"
            icon={faMobileAlt}
            size="7x"
            color="#ed64a6"
          />
          <p>
            Si no cuentas con buró de crédito no hay problema, medimos el riesgo
            de manera innovadora.
          </p>
        </div>
        <div className="md:w-1/3 p-5">
          <FontAwesomeIcon
            className="mx-auto mb-4"
            icon={faRedo}
            size="7x"
            color="#ed64a6"
          />
          <p>
            Una vez que pagues una cierta cantidad, podrás volver a solicitar
            financiamiento. Si pagas bien, nosotros te ayudaremos mejorando tu
            tasa y ampliando tu línea.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
