import React from 'react';

import Container from '../../components/Container';
import SignupContainer from '../../components/auth/SignupContainer';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

class SignupRFC extends React.Component {
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
      <Container
        content={
          <SignupContainer
            title="Para iniciar tu solicitud calcularemos tu RFC y CURP con la siguiente
              información"
            formClassName="auth-form"
            content={
              <React.Fragment>
                <FormInput
                  type="number"
                  id="dia"
                  text="Dia"
                  class="auth-input"
                />
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
                <FormInput
                  type="number"
                  id="year"
                  text="Año"
                  class="auth-input"
                />

                <FormInput
                  type="text"
                  id="lugar"
                  text="Lugar de nacimiento"
                  class="auth-input"
                />

                <FormInput type="text" id="rfc" text="RFC" class="auth-input" />
                <FormInput
                  type="text"
                  id="curp"
                  text="Curp"
                  class="auth-input"
                />

                <FormButton to="/register/location" text="Continuar" />
              </React.Fragment>
            }
          />
        }
      />
    );
  }
}

export default SignupRFC;
