import React from 'react';

import FormButton from './FormButton';

class SignupExperience extends React.Component {
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
          Hablanos de tu experiencia, tu historial de crédito es clave para
          conocerte mejor y diseñar tu oferta
        </h2>
        <div className="flex justify-center">
          <form className="w-4/5 md:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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

            <FormButton to="/register/about" text="Continuar" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignupExperience;
