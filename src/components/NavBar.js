import React from "react";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <nav className="navbar">
            <a className="navbar__icon" href="index.html"><img src="logo-open.png" alt="Logo de OPEN" /></a>
            <ul>
                <li><a href="#">Vehículos</a></li>
                <li><a href="#">Indumentaria</a></li>
                <li><a href="#">Electrónica</a></li>
                <li><a href="#">Libros</a></li>
            </ul>
            <CartWidget />
            <a className="navbar__login-button" href="#">Víctor</a>
        </nav>
    )
}

export default NavBar;