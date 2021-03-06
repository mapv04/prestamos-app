import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Container from '../../components/Container';
import SignupContainer from '../../components/auth/SignupContainer';
import FormInput from '../../components/FormInput';

class Login extends React.Component {
  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[4];
    navElement.classList.add('border-pink-400');
  }

  render() {
    return (
      <Container
        content={
          <SignupContainer
            titlePage="Iniciar sesión"
            formClassName="auth-form"
            content={
              <React.Fragment>
                <FormInput
                  type="email"
                  id="email"
                  text="Email"
                  class="auth-input"
                />

                <div className="mb-4">
                  <FormInput
                    type="password"
                    id="password"
                    text="Password"
                    class="auth-input"
                  />

                  <Link
                    to="#"
                    className="inline-block align-baseline font-bold text-xs text-pink-400 hover:text-pink-600 mt-4 md:m-0"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-between">
                  <button
                    className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Entrar
                  </button>
                  <h2 className="inline-block align-baseline font-bold text-sm text-pink-500 mt-4 md:m-0">
                    ¿No tienes una cuenta?{' '}
                    <Link
                      to="/register"
                      className="border-b-2 border-transparent hover:border-pink-700 hover:text-pink-700"
                    >
                      Registrate
                    </Link>
                  </h2>
                </div>
              </React.Fragment>
            }
          />
        }
      />
    );
  }
}

export default Login;
