import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[5];
    navElement.textContent = 'Registro';
    navElement.classList.add('border-pink-400');
  }

  render() {
    return (
      <div className="pt-24 container mx-auto h-full">
        <h1 className="text-center font-bold text-5xl text-pink-600 block">
          Registro
        </h1>
        <div className="flex justify-center">
          <form className="w-4/5 md:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="nombre" className="block font-bold mb-2 text-sm">
                Nombre
              </label>
              <input
                id="nombre"
                className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Nombre"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="apellido"
                className="block font-bold mb-2 text-sm"
              >
                Apellido
              </label>
              <input
                id="apellido"
                className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Apellido"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2 text-sm">
                Correo
              </label>
              <input
                id="email"
                className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Correo"
                type="email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-bold mb-2 text-sm"
              >
                Contraseña
              </label>
              <input
                id="password"
                className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Contraseña"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between">
              <button
                className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
