import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from './FormInput';

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
            <FormInput
              type="text"
              id="nombre"
              text="Nombre(s)"
              class="auth-input"
            />

            <FormInput
              type="text"
              id="apellidoP"
              text="Apellido Paterno"
              class="auth-input"
            />

            <FormInput
              type="text"
              id="apellidoM"
              text="Apellido Materno"
              class="auth-input"
            />

            <div className="mb-4">
              <label htmlFor="celular" className="block font-bold mb-2 text-sm">
                Celular
              </label>
              <input
                id="celular"
                className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Celular"
                type="text"
              />
            </div>

            <FormInput
              type="email"
              id="email"
              text="Email"
              class="auth-input"
            />

            <FormInput
              type="password"
              id="password"
              text="Password"
              class="auth-input"
            />

            <div className="flex flex-wrap items-center justify-between">
              <Link to="/register/2">
                <button
                  className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Continuar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
