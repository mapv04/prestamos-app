import React from 'react';
import NumberFormat from 'react-number-format';

class Simulator extends React.Component {
  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[1];
    navElement.classList.add('border-pink-400');
  }

  render() {
    return (
      <form className="simulator-card  md:w-3/4 p-4">
        <div className="m-4">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
            name="name"
            onChange={this.props.onChange}
            required
          />
        </div>
        <div className="m-4">
          <label>Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
            name="lastName"
            onChange={this.props.onChange}
            required
          />
        </div>
        <div className="m-4">
          <label>Correo</label>
          <input
            type="email"
            placeholder="Correo"
            className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight "
            name="email"
            onChange={this.props.onChange}
            required
          />
        </div>

        <div className="m-4">
          <label className="block">Cuánto necesitas?</label>
          <NumberFormat
            name="quantity"
            placeholder="100,000"
            className="shadow rounded border border-pink-500  py-2 px-3 text-gray-700 leading-tight"
            onChange={this.props.onChange}
            required
            prefix={'$'}
            thousandSeparator={true}
            allowNegative={false}
          />
        </div>
        <div className="m-4">
          <label>En un plazo de</label>
          <select
            className="bg-white shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
            name="months"
            onChange={this.props.onChange}
            required
          >
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="18">18 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>
        <div className="m-4">
          <label className="block">Teléfono</label>
          <input
            type="number"
            placeholder="Telefono"
            className="shadow rounded border border-pink-500  py-2 px-3 text-gray-700 leading-tight"
            name="phone"
            onChange={this.props.onChange}
            required
          />
        </div>
        <div className="w-full m-4">
          <input type="checkbox" /> He leído y acepto los términos y condiciones
        </div>

        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block m-4"
          onClick={this.props.onSubmit}
        >
          Solicitar
        </button>
      </form>
    );
  }
}

export default Simulator;
