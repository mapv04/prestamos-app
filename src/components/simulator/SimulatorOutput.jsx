import React from 'react';
import NumberFormat from 'react-number-format';

import FormButton from '../FormButton';

class SimulatorData extends React.Component {
  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[1];
    navElement.classList.add('border-pink-400');
  }

  render() {
    return (
      <div className="md:w-3/4 mb-20">
        <div className="simulator-card p-4 ">
          <h3 className="w-full text-center m-4 text-xl">
            {this.props.data.name} {this.props.data.lastName}
          </h3>
          <div className="w-full flex flex-wrap justify-around">
            <div className="flex">
              <h3 className="m-2 ">Saldo</h3>{' '}
              <h4 className="m-2 text-pink-400">{this.props.data.quantity}</h4>
            </div>
            <div className="flex">
              <h3 className="m-2">Meses</h3>{' '}
              <h4 className="m-2 text-pink-400">
                {this.props.data.months || 6}
              </h4>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-around text-center">
            <div className="m-4 hidden">
              <p>Abono a capital mensual</p>{' '}
              <p className="text-pink-400">{this.props.simulator.capital}</p>
            </div>
            <div className="m-4 hidden">
              <p>Pago de intereses mensual</p>{' '}
              <p className="text-pink-400">{this.props.simulator.tax}</p>
            </div>
            <div className="m-4">
              <p>Pago total mensual</p>
              <NumberFormat
                className="text-pink-400"
                prefix={'$'}
                thousandSeparator={true}
                value={this.props.simulator.total}
                displayType={'text'}
              />
            </div>
            <div className="m-4">
              <p>Tasa Anual</p>
              <p className="text-pink-400">
                {this.props.simulator.tasaAnual} {'%'}
              </p>
            </div>
            <div className="text-center w-full text-pink-500">
              <p>
                Tasa de interés anual fija (aproximada):{' '}
                {this.props.simulator.tasaAnual} {'%'}
              </p>
              <p>
                Tasa de interés: <strong>X.Xx% CAT</strong> (7 de cada 10
                clientes reciben esta oferta). Nuestros préstamos promedio tiene
                esta tasa. Recuerda que dependiendo de nuestro análisis el tasa
                puede bajar.
              </p>
            </div>
            <FormButton to="/register" text="¡Solicitalo Ahora!" />
          </div>
        </div>
        <div className="text-center m-8">
          <p>
            El simulador de credito y todos nuestros servicios financieros son
            100% en linea para que no pierdas tiempo en procesos complicados.
            Analizamos la informacion de tu empresa y personal para ofrecerte
            tasas y montos de acuerdo a varios factores.
          </p>
        </div>
      </div>
    );
  }
}

export default SimulatorData;
