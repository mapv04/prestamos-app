import React from 'react';

import SignupContainer from './SignupContainer';
import FormButton from '../FormButton';

class SignupExperience extends React.Component {
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
        title="Hablanos de tu experiencia, tu historial de crédito es clave para
          conocerte mejor y diseñar tu oferta"
        formClassName="auth-form"
        content={
          <div>
            <label htmlFor="hipoteca" className="block font-bold mb-2 text-sm">
              Tienes un prestamo hipotecario?
            </label>
            <select id="hipoteca" className="auth-input" required>
              <option value="">Si</option>
              <option value="">No</option>
            </select>

            <label htmlFor="pres-auto" className="block font-bold mb-2 text-sm">
              Has tenido un credito automotriz
            </label>
            <select id="pres-auto" className="auth-input" required>
              <option value="">Si</option>
              <option value="">No</option>
            </select>

            <label htmlFor="tarjeta" className="block font-bold mb-2 text-sm">
              Eres titular de una tarjeta de crédito?
            </label>
            <select id="tarjeta" className="auth-input" required>
              <option value="">Si</option>
              <option value="">No</option>
            </select>

            <div className="w-full m-4">
              <input type="checkbox" /> Autorizo a Atenas para que consulte mi
              comportamiento crediticio en cualquier Sociedad de Informacion
              Crediticia
            </div>

            <FormButton to="/register/company" text="Continuar" />
          </div>
        }
      />
    );
  }
}

export default SignupExperience;
