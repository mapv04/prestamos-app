import React from 'react';

import FormInput from './FormInput';
import FormButton from './FormButton';

class SignupAboutCompany extends React.Component {
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
      <div className="pt-24 container mx-auto">
        <h1 className="text-center font-bold text-5xl text-pink-600 block">
          Registro
        </h1>
        <h2 className="text-center font-bold text-lg text-pink-400 block mb-4">
          Cuentanos un poco acerca de tu empresa
        </h2>
        <div className="flex justify-center">
          <form className="w-4/5 md:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <FormInput
              type="text"
              id="nombreEmpresa"
              text="Nombre de tu empresa"
              class="auth-input"
            />

            <FormInput
              type="number"
              id="empleados"
              text="Numero de empleados"
              class="auth-input"
            />

            <label htmlFor="como" className="block font-bold mb-2 text-sm">
              Como usaras tu crédito?
            </label>
            <textarea id="como" rows="5" className="auth-input" />

            <FormButton to="/" text="Consultar" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignupAboutCompany;
