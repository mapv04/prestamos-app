import React from 'react';

import SignupContainer from './SignupContainer';
import FormInput from '../FormInput';
import FormButton from '../FormButton';

class SignupAboutCompany extends React.Component {
  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[4];
    navElement.textContent = 'Registro';
    navElement.classList.add('border-pink-400');
  }

  render() {
    return (
      <SignupContainer
        title="Cuentanos un poco acerca de tu empresa"
        formClassName="auth-form"
        content={
          <div>
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
          </div>
        }
      />
    );
  }
}

export default SignupAboutCompany;
