import React from "react";

function NavBar() {
    return <>
        <nav className="navbar">
            <a href="index.html"><img src="logo-open.png" alt="" /></a>
            <ul>
                <li><a href="#">Vehículos</a></li>
                <li><a href="#">Indumentaria</a></li>
                <li><a href="#">Electrónica</a></li>
                <li><a href="#">Libros</a></li>
            </ul>
            <a className="navbar__login-button" href="#">Login</a>
        </nav>
    </>
}

export default NavBar;