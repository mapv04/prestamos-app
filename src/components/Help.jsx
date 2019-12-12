import React from 'react';

class HelpComponent extends React.Component {
  onElementClick = e => {
    var element = e.target.parentNode.nextSibling;
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  };

  render() {
    return (
      <div className="mx-auto container pt-24">
        <h1 className="text-5xl text-center block">
          <strong>Respuestas a las preguntas más frecuentes</strong>
        </h1>

        <div>
          <div className="cursor-pointer" onClick={this.onElementClick}>
            <h3 className="text-3xl text-pink-500">Requisitos</h3>
          </div>
          <ul className="list-disc hidden">
            <li>Debes ser mujer</li>
            <li>INE(debes ser mexicana entre 25 y 90 años)</li>
            <li>RFC con el que facturas</li>
            <li>Último recibo de luz</li>
            <li>Cuenta bancaria</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HelpComponent;
