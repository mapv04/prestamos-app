import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  render() {
    return (
      <div className="w-full fixed h-20  bg-white shadow-xl flex flex-wrap items-center">
        <div className="container mx-auto flex flex-wrap  lg:px-16 px-6 lg:py-0 py-2 bg-white">
          <div className="flex-1 flex justify-between items-center">
            <Link to="/">
              <span className="font-bold text-4xl text-pink-600">ATENAS</span>
            </Link>
          </div>
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer lg:hidden block"
          >
            <FontAwesomeIcon size="2x" icon={faBars} color="#ed64a6" />
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
                    to="/simulator"
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
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                  >
                    Inicia Sesión
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
