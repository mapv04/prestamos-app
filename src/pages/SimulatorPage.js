import React from 'react';

import Navbar from '../components/Navbar';
import Simulator from '../components/Simulator';
import SimulatorData from '../components/SimulatorData';

class SimulatorPage extends React.Component {
  state = {
    data: false,
    form: {
      name: '',
      lastName: '',
      email: '',
      quantity: '',
      months: '',
      phone: ''
    },
    simulator: {
      capital: '',
      tax: '',
      total: ''
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    this.setState({
      data: true
    });
    this.simulate();
  };

  simulate() {
    const months = this.state.form.months || 12;
    const pow = Math.pow(1.01, months);
    const saldo = parseFloat(this.state.form.quantity).toFixed(2);
    const total = ((saldo * 0.01 * pow) / (pow - 1)).toFixed(2);
    const capital = (total - saldo * 0.01).toFixed(2);
    const tax = (total - capital).toFixed(2);

    this.setState({
      simulator: {
        capital: capital,
        tax: tax,
        total: total
      }
    });
  }

  whichComponent() {
    if (!this.state.data) {
      return (
        <Simulator
          data={this.state.form}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      );
    }
    return (
      <SimulatorData data={this.state.form} simulator={this.state.simulator} />
    );
  }

  render() {
    return (
      <div className="bg-gray-100 h-screen">
        <Navbar />
        <div className="pt-24 container mx-auto">
          <h1 className="text-center font-bold text-5xl text-pink-600 block">
            Simulador ATENAS
          </h1>
          <p className="text-center">
            Simula tu crédito en 3 pasos y calcula el monto, plazo y pagos de tu
            crédito
          </p>
          <div className="m-4 flex justify-center">{this.whichComponent()}</div>
        </div>
      </div>
    );
  }
}

export default SimulatorPage;
