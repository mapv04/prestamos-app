import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="w-full fixed h-20  bg-white shadow-xl flex flex-wrap items-center">
          <div className="container mx-auto flex flex-wrap  lg:px-16 px-6 lg:py-0 py-2 bg-white">
            <div className="flex-1 flex justify-between items-center">
              <a href="/">
                <span className="font-bold text-4xl text-pink-600">ATENAS</span>
              </a>
            </div>
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer lg:hidden block"
            >
              <div className="w-4 h-1 bg-black" />
              <div className="w-4 h-1 my-1 bg-black" />
              <div className="w-4 h-1 bg-black" />
            </label>
            <input type="checkbox" className="hidden" id="menu-toggle" />

            <div
              className="hidden lg:flex lg:items-center lg:w-auto w-full"
              id="menu"
            >
              <nav>
                <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
                  <li className="text-xl">
                    <Link
                      to=""
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                    >
                      Simulador
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link
                      to=""
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                    >
                      Producto
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link
                      to=""
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                    >
                      Quienes Somos
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link
                      to=""
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                    >
                      Ayuda
                    </Link>
                  </li>
                  <li className="text-xl text-pink-400">
                    <Link
                      to="/login"
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent border-pink-400"
                    >
                      Inicia sesion
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-24 container mx-auto">
          <h1 className="text-center font-bold text-5xl text-pink-600 block">
            ATENAS
          </h1>
          <div className="flex justify-center">
            <form className="w-4/5 md:w-1/3 bg-white shadow rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2 text-sm">
                  Correo
                </label>
                <input
                  id="email"
                  className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Correo"
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
                  className="shadow rounded border border-pink-500 w-full py-2 px-3 text-gray-700"
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
                    to="/signup"
                    className="border-b-2 border-transparent hover:border-pink-700 hover:text-pink-700"
                  >
                    Registrate
                  </Link>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
