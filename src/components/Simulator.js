import React from 'react';

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
      <form className="flex flex-wrap bg-white border rounded-lg shadow-xl  md:w-3/4 p-4">
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
          <input
            type="text"
            placeholder="100,000"
            className="shadow rounded border border-pink-500  py-2 px-3 text-gray-700 leading-tight"
            name="quantity"
            onChange={this.props.onChange}
            required
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
            <option value="12">12 meses</option>
            <option value="16">16 meses</option>
            <option value="20">20 meses</option>
            <option value="24">24 meses</option>
            <option value="28">28 meses</option>
            <option value="32">32 meses</option>
            <option value="36">36 meses</option>
            <option value="40">40 meses</option>
            <option value="42">42 meses</option>
            <option value="44">44 meses</option>
            <option value="48">48 meses</option>
          </select>
        </div>
        <div className="m-4">
          <label className="block">Teléfono</label>
          <input
            type="text"
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
