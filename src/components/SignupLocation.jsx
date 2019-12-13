import React from 'react';

import FormInput from './FormInput';
import FormButton from './FormButton';

class SignupLocation extends React.Component {
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
          Cuentanos donde vives y donde opera tu negocio actualmente
        </h2>
        <div className="flex justify-center">
          <form className="w-4/5 md:w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-lg mb-2">Tu dirección personal</h3>

            <section className="flex flex-wrap">
              <div className="mx-2">
                <FormInput
                  type="number"
                  text="Código postal"
                  id="zipcode"
                  class="auth-input"
                />
              </div>

              <div className="mx-2">
                <FormInput
                  type="text"
                  text="Colonia"
                  id="colonia"
                  class="auth-input"
                />
              </div>
              <div className="mx-2">
                <FormInput
                  type="text"
                  text="Calle y numero exterior"
                  id="calle"
                  class="auth-input"
                />
              </div>

              <div className="mx-2">
                <FormInput
                  type="number"
                  text="Numero interior"
                  id="interior"
                  class="auth-input"
                />
              </div>

              <div className="mx-2">
                <FormInput
                  type="number"
                  text="Telefono de casa"
                  id="casa"
                  class="auth-input"
                />
              </div>
            </section>
            <hr className="w-full my-4 border-pink-200" />
            <h3 className="text-lg mb-2">Dónde opera tu negocio actualmente</h3>
            <section className="flex flex-wrap mb-4">
              <div className="mx-2">
                <FormInput
                  type="number"
                  text="Código postal"
                  id="negocio-zipcode"
                  class="auth-input"
                />
              </div>

              <div className="mx-2">
                <FormInput
                  type="text"
                  text="Colonia"
                  id="negocio-colonia"
                  class="auth-input"
                />
              </div>
              <div className="mx-2">
                <FormInput
                  type="text"
                  text="Calle y numero exterior"
                  id="negocio-calle"
                  class="auth-input"
                />
              </div>

              <div className="mx-2">
                <FormInput
                  type="number"
                  text="Numero interior"
                  id="negocio-interior"
                  class="auth-input"
                />
              </div>

              <div className="mx-2">
                <FormInput
                  type="number"
                  text="Telefono del negocio"
                  id="negocio"
                  class="auth-input"
                />
              </div>
            </section>
            <FormButton to="/register/experience" text="Continuar" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignupLocation;
