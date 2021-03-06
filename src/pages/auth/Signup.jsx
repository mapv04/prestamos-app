import React from 'react';

//Components
import Container from '../../components/Container';
import SignupContainer from '../../components/auth/SignupContainer';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

class Signup extends React.Component {
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
            title="Ingresa tus datos de contacto para ayudarte en todo momento"
            formClassName="auth-form"
            content={
              <React.Fragment>
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

                <FormButton to="/register/rfc" text="Continuar" />
              </React.Fragment>
            }
          />
        }
      />
    );
  }
}

export default Signup;
