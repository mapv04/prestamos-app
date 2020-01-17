import React from 'react';

import Advantage from './Advantage';

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

          <Advantage text="Préstamos sin consultar buró*" />
          <Advantage text="Préstamos sin aval" />
          <Advantage text="Tasas fijas" />
          <Advantage text="Recibe respuesta de manera inmediata" />
          <Advantage text="Te depositamos en tu cuenta bancaria" />
          <Advantage text="Decide la fecha de pago" />
          <Advantage text="Adelanta pagos a capital sin cobro extra" />
          <Advantage text="Mejoramos tu tasa para el segundo crédito" />

          <div />
        </div>
      </div>
    </div>
  );
}

export default Advantages;
