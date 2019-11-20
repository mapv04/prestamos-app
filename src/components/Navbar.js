import React from 'react';
class Navbar extends React.Component {
	/*	displayBurgerOpts(e) {
		var nav = document.getElementsByTagName('nav')[0];
		var ulNav = document.getElementsByTagName('ul')[0];
		var brand = document.getElementById('brand');
		var burger = document.getElementById('burger');
		nav.style.flexDirection = 'column';
		ulNav.style.display = 'flex';
		ulNav.style.flexDirection = 'column';
		brand.style.display = 'none';
		burger.style.display = 'none';
	}*/

	render() {
		return (
			<div className="navbar">
				<nav className="flex justify-between items-center container mx-auto my-2 px-4">
					<div id="brand" className="w-32">
						<span className="font-bold text-4xl text-pink-600">ATENAS</span>
					</div>
					<ul className="hidden md:flex justify-end">
						<li className="ml-4 mr-4 text-xl">
							<a className="text-black no-underline" href="#">
								Simulador
							</a>
						</li>
						<li className="ml-4 mr-4 text-xl">
							<a className="text-black no-underline" href="#">
								Producto
							</a>
						</li>
						<li className="ml-4 mr-4 text-xl">
							<a className="text-black no-underline" href="#">
								Quienes Somos
							</a>
						</li>
						<li className="ml-4 mr-4 text-xl">
							<a className="text-black no-underline" href="#">
								Ayuda
							</a>
						</li>
						<li className="ml-4 mr-4 text-xl text-pink-400">
							<a className="no-underline" href="#">
								Inicia sesion
							</a>
						</li>
					</ul>

					{/*BURGER*/}
					<div id="burger" className="md:hidden" onClick={this.displayBurgerOpts}>
						<div className="w-4 h-1 bg-black" />
						<div className="w-4 h-1 my-1 bg-black" />
						<div className="w-4 h-1 bg-black" />
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
