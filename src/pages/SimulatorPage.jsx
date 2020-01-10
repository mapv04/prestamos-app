import React from 'react';

import Navbar from '../components/Navbar';
import Simulator from '../components/simulator/Simulator';
import SimulatorData from '../components/simulator/SimulatorData';

import { calculateTasa } from '../tasas';

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
      total: '',
      tasaAnual: ''
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
    const { name, lastName, email, quantity, phone } = this.state.form;
    if (name && lastName && email && quantity && phone) {
      this.setState({
        data: true
      });
      this.simulate();
    }
  };

  simulate() {
    const months = this.state.form.months || 6;
    const tasas = calculateTasa(parseInt(months));

    const quantity = this.state.form.quantity.replace(/,/g, '').substring(1);

    const pow = Math.pow(1 + tasas[0], months);
    const saldo = parseFloat(quantity);
    const total = parseFloat(((saldo * tasas[0] * pow) / (pow - 1)).toFixed(2));
    const capital = parseFloat((total - saldo * tasas[0]).toFixed(2));
    const tax = parseFloat((total - capital).toFixed(2));

    this.setState({
      simulator: {
        capital: capital,
        tax: tax,
        total: total,
        tasaAnual: tasas[1] * 100
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
      <div className="bg-gray-100 font-baskervville min-h-screen relative">
        <div className="pb-32">
          <Navbar />
          <div className="pt-24 container mx-auto">
            <h1 className="text-center font-bold text-5xl text-pink-600 block">
              Simulador
            </h1>
            <p className="text-center">
              Simula tu crédito en 3 pasos y calcula el monto, plazo y pagos de
              tu crédito
            </p>
            <div className="flex justify-center">{this.whichComponent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimulatorPage;
