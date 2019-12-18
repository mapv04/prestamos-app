import React from 'react';
import howto1 from '../images/how-01.png';
import howto2 from '../images/how-02.png';
import howto3 from '../images/how-03.png';
import howto4 from '../images/how-04.png';
import howto5 from '../images/how-05.png';

function HowTo() {
  return (
    <div className="pt-24 container mx-auto">
      <div className="text-left px-1">
        <h1 className="text-4xl md:text-6xl">
          <strong>
            Solicita un crédito para tu empresa en 4 sencillos pasos con Atenas
          </strong>
        </h1>
      </div>

      <div className="flex flex-wrap justify-around text-center mt-6">
        <div className="md:w-1/3 p-5">
          <img
            className="mx-auto"
            src={howto1}
            alt=""
            style={{ height: 160 }}
          />
          <p>
            Es una solicitud rápida y sencilla. Sólo toma 10 minutos el proceso.
          </p>
        </div>
        <div className="md:w-1/3 p-5">
          <img
            className="mx-auto"
            src={howto2}
            alt=""
            style={{ height: 160 }}
          />
          <p>
            Puedes recibir una respuesta en menos de dos días – sin filas,
            documentación innecesaria y sin obligaciones. Tratamos de hacer todo
            lo más transparente posible. Sin letras pequeñas ni tarifas
            escondidas
          </p>
        </div>
        <div className="md:w-1/3 p-5">
          <img
            className="mx-auto"
            src={howto3}
            alt=""
            style={{ height: 160 }}
          />
          <p>
            Recibe tus fondos y sólo paga por lo que recibas. Una vez
            autorizado, puedes recibir los fondos ese mismo día.
          </p>
        </div>
        <div className="md:w-1/3 p-5">
          <img
            className="mx-auto"
            src={howto4}
            alt=""
            style={{ height: 160 }}
          />
          <p>
            No te preocupes del pago. Este se hace semana con semana lo cual te
            permite que no crezca al final del mes en un pago difícil de hacer
          </p>
        </div>
        <div className="md:w-1/3 p-5">
          <img
            className="mx-auto"
            src={howto5}
            alt=""
            style={{ height: 160 }}
          />
          <p>
            Una vez que pagues una cierta cantidad, podrás volver a solicitar
            financiamiento. Si pagas bien, nosotros te ayudaremos mejorando tu
            tasa y ampliando tu línea. Así de fácil.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
