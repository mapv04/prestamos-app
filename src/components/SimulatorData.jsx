import React from 'react';

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
        <div className="flex flex-wrap bg-white border rounded-lg shadow-xl  p-4 ">
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
              <p className="text-pink-400">{this.props.simulator.total}</p>
            </div>
            <div className="m-4">
              <p>Tasa Anual</p>
              <p className="text-pink-400">
                {this.props.simulator.tasaAnual} {'%'}
              </p>
            </div>
            <div className="text-center w-full text-pink-500">
              <p>
                Tasa de interes anual fija (aproximada):{' '}
                {this.props.simulator.tasaAnual} {'%'}
              </p>
              <p>
                Tasa de interes: <strong>33.4% CAT</strong> (7 de cada 10
                clientes reciben esta oferta)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center m-8">
          <p>
            El simulador de credito y todos nuestros servicios financieros son
            100% en linea para que no pierdas tiempo en procesos complicados.
            Analizamos la informacion de tu empresa para ofrecerte tasas y
            montos de acuerdo a la facturacion e historial de credito
          </p>
        </div>
      </div>
    );
  }
}

export default SimulatorData;