import React from "react";
import "../styles/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
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
                  <a
                    href=""
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                  >
                    Simulador
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href=""
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                  >
                    Producto
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href=""
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                  >
                    Quienes Somos
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href=""
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                  >
                    Ayuda
                  </a>
                </li>
                <li className="text-xl text-pink-400">
                  <a
                    href=""
                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-pink-400"
                  >
                    Inicia sesion
                  </a>
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
