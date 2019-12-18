import React from 'react';
import bussinesWomanImage from '../images/bussines_woman.jpg';

function Introduction() {
  return (
    <div className="pt-24 container mx-auto">
      <div className="text-left px-1">
        <p className="text-sm md:text-xl">
          <strong>Crédito y Préstamos para tu Empresa</strong>
        </p>
        <h1 className="text-4xl md:text-6xl">
          <strong>Elige una nueva opción de Crédito para tu Empresa</strong>
        </h1>
      </div>
      <img className="mt-4" src={bussinesWomanImage} alt="" />
    </div>
  );
}

export default Introduction;
