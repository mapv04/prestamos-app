import React from 'react';

class SimulatorData extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap bg-white border rounded-lg shadow-xl  md:w-3/4 p-4">
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
              {this.props.data.months || '12'}
            </h4>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-around text-center">
          <div className="m-4">
            <p>Abono a capital mensual</p>{' '}
            <p className="text-pink-400">{this.props.simulator.capital}</p>
          </div>
          <div className="m-4">
            <p>Pago de intereses mensual</p>{' '}
            <p className="text-pink-400">{this.props.simulator.tax}</p>
          </div>
          <div className="m-4">
            <p>Pago total mensual</p>
            <p className="text-pink-400">{this.props.simulator.total}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SimulatorData;
