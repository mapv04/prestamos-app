import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  componentDidMount() {
    this.navElementActive();
  }

  navElementActive() {
    var navElement = document.getElementsByTagName('a')[5];
    navElement.classList.add('border-pink-400');
  }

  render() {
    return (
      <div className="pt-24 container mx-auto h-full">
        <h1 className="text-center font-bold text-5xl text-pink-600 block">
          ATENAS
        </h1>
        <div className="flex justify-center">
          <form className="w-4/5 md:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2 text-sm">
                Correo
              </label>
              <input
                id="email"
                className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Correo"
                type="email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-bold mb-2 text-sm"
              >
                Contraseña
              </label>
              <input
                id="password"
                className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Contraseña"
              />
              <Link
                to="#"
                className="inline-block align-baseline font-bold text-xs text-pink-400 hover:text-pink-600 mt-4 md:m-0"
              >
                Olvidaste tu contraseña?
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
                No tienes una cuenta?{' '}
                <Link
                  to="/register"
                  className="border-b-2 border-transparent hover:border-pink-700 hover:text-pink-700"
                >
                  Registrate
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
