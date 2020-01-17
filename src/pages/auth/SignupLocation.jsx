import React from 'react';

//Components
import Container from '../../components/Container';
import SignupContainer from '../../components/auth/SignupContainer';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

class SignupLocation extends React.Component {
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
            title="Cuentanos donde vives y donde opera tu negocio actualmente"
            formClassName="auth-form md:w-2/3"
            content={
              <React.Fragment>
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
                <h3 className="text-lg mb-2">
                  ¿Dónde opera tu negocio actualmente?
                </h3>
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
              </React.Fragment>
            }
          />
        }
      />
    );
  }
}

export default SignupLocation;
