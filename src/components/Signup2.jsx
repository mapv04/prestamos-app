import React from 'react';

import FormInput from './FormInput';
import FormButton from './FormButton';

class Signup2 extends React.Component {
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
        <h2 className="text-center font-bold text-lg text-pink-400 block mb-4">
          Pra iniciar tu solicitud calcularemos tu RFC y CURP con la siguiente
          informacion
        </h2>
        <div className="flex justify-center">
          <form className="w-4/5 md:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <FormInput type="number" id="dia" text="Dia" class="auth-input" />
            <label htmlFor="mes" className="block font-bold mb-2 text-sm">
              Mes
            </label>
            <select id="mes" className="auth-input" required>
              <option value="">Enero</option>
              <option value="">Febrero</option>
              <option value="">Marzo</option>
              <option value="">Abril</option>
              <option value="">Mayo</option>
              <option value="">Junio</option>
              <option value="">Julio</option>
              <option value="">Agosto</option>
              <option value="">Septiembre</option>
              <option value="">Octubre</option>
              <option value="">Noviembre</option>
              <option value="">Diciembre</option>
            </select>
            <FormInput type="number" id="year" text="Año" class="auth-input" />

            <FormInput
              type="text"
              id="lugar"
              text="Lugar de nacimiento"
              class="auth-input"
            />

            <FormInput type="text" id="rfc" text="RFC" class="auth-input" />
            <FormInput type="text" id="curp" text="Curp" class="auth-input" />

            <FormButton to="/register/location" text="Continuar" />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup2;
