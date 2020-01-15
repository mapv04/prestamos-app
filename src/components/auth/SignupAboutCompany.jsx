import React from 'react';

import SignupContainer from './SignupContainer';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import PhoneCodeModal from './PhoneCodeModal';

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
          </div>
        }
      />
    );
  }
}

export default SignupAboutCompany;
