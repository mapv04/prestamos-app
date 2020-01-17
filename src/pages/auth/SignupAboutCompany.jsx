import React from 'react';

//Components
import Container from '../../components/Container';
import SignupContainer from '../../components/auth/SignupContainer';
import FormInput from '../../components/FormInput';
import PhoneCodeModal from '../../components/auth/PhoneCodeModal';

class SignupAboutCompany extends React.Component {
  state = {
    modalIsOpen: false
  };

  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[4];
    navElement.textContent = 'Registro';
    navElement.classList.add('border-pink-400');
  }

  handleOpenModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <Container
        content={
          <SignupContainer
            title="Cuentanos un poco acerca de tu empresa"
            formClassName="auth-form"
            content={
              <React.Fragment>
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
                  ¿Como usaras tu crédito?
                </label>
                <textarea id="como" rows="5" className="auth-input" />

                <div className="flex flex-wrap items-center justify-between">
                  <button
                    className="w-full w-full bg-pink-500 hover:bg-pink-700 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={this.handleOpenModal}
                  >
                    Continuar
                  </button>
                </div>

                <PhoneCodeModal
                  to="/"
                  isOpen={this.state.modalIsOpen}
                  onCloseModal={this.handleCloseModal}
                />
              </React.Fragment>
            }
          />
        }
      />
    );
  }
}

export default SignupAboutCompany;
