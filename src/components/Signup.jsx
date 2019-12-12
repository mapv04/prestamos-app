import React from 'react';

import FormInput from './FormInput';
import FormButton from './FormButton';

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
        <h2 className="text-center font-bold text-lg text-pink-400 block mb-4">
          Ingresa tus datos de contacto para ayudarte en todo momento
        </h2>
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

            <FormInput
              type="number"
              id="celular"
              text="Celular"
              class="auth-input"
            />

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

            <FormButton to="/register/2" text="Continuar" />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
