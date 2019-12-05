import React from 'react';
import bussinesWomanImage from '../images/bussines_woman.jpg';

function Introduction() {
  return (
    <div className="pt-24 container mx-auto">
      <div className="text-left px-1">
        <p className="text-sm md:text-xl">
          <strong>Crédito Pyme y Préstamos para Negocios</strong>
        </p>
        <h1 className="text-4xl md:text-6xl">
          <strong>Elige una nueva opción de Crédito para tu Empresa</strong>
        </h1>
        <h2 className="text-2xl md:text-3xl text-pink-400">
          Inicia hoy tu solicitud{' '}
        </h2>
      </div>
      <img className="mt-4" src={bussinesWomanImage} alt="" />
    </div>
  );
}

export default Introduction;
