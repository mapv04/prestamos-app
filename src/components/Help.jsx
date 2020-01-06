import React from 'react';
import HelpItem from './HelpItem';

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
          <strong>Preguntas frecuentes</strong>
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
          </ul>
        </div>

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Piden aval o garantías?"
          text="No, nuestro compromiso es facilitar el acceso de las mujeres al financiamiento, por eso no pedimos ningún aval o garantía"
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿No consultan el buró de crédito??"
          text="Si no cuentas con registro en el buró de crédito, no hay problema. Nuestro compromiso es incluir a todas las mujeres en el sistema financiero. Contamos con una inovadora manera de medir el riesgo."
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Sí no checan el buró de crédito, como miden el riesgo?"
          text="Medimos el riesgo calificando tu celular. Una vez que completes nuestro cuestionario te enviáremos un link a tu celular o correo para que descargues la app. Una vez descargada la app acepta los permisos para verificar  tu celular y listo. ¡Así de fácil!"
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Que usa de información la app para medir el riesgo?"
          text="Nuestra app mide muchas variables, la mas importante son que tipo de apps usas, que tanto usas tu celular y que celular tienes."
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Qué es el CAT?"
          text="El Costo Anual Total (CAT) es un indicador que sirve para calcular el costo total del financiamiento de un crédito, es decir, es una medida porcentual que integra no sólo la tasa de interés sino todos los elementos que al final tendrás que pagar tales como la cuota anual, comisiones de apertura o primas de seguros. 
          Todos los otorgantes de crédito tienen, por ley, que calcular y comunicar este indicador para cada uno de sus productos con el fin de fomentar la transparencia sobre costos."
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Cómo puedo hacer mis pagos?"
          text="Puedes domiciliar los pagos, hacer transferencias o pagar en ventanilla de los bancos participantes"
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Cuánto me pueden prestar y a qué plazo?"
          text="6-12-18-24 meses"
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Cuáles son los pasos para solicitar un crédito?"
          text="Crea una cuenta, contesta nuestras preguntas y espera nuestra respuesta. Recuerda que puedes usar nuestro simulador para hacer un estamidado de tu crédito"
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="Una vez que aplico, ¿cuánto tarda Atenas en tomar una desición?"
          text="Obtén una respuesta en menos de 30 minutos"
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Por qué me rechazó mi crédito?"
          text="Nuestras decisiones tomen en cuenta varios factores para otorgar un crédito. Consulta aquí para ver los mas importantes"
          onClickHandler={this.onElementClick}
        />

        <HelpItem
          classTitleContainer="cursor-pointer"
          classTitle="text-2xl text-pink-500"
          classUl="list-disc hidden"
          title="¿Cómo me depositan el dinero?"
          text="Te depositamos en tu cuenta bancaria. ¡Así de fácil!"
          onClickHandler={this.onElementClick}
        />
      </div>
    );
  }
}

export default HelpComponent;
