import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <a className="navbar__icon" href="/"><img src="/logo-open.png" alt="Logo de OPEN" /></a>
            <div className="navbar__navitagion-links">
                <NavLink activeClassName="active-category" exact to="/all-products/">All</NavLink>
                <NavLink activeClassName="active-category" to="/all-products/movies">Movies</NavLink>
                <NavLink activeClassName="active-category" to="/all-products/tv">TV</NavLink>
                <NavLink activeClassName="active-category" to="/all-products/video-games">Video Games</NavLink>
                <NavLink activeClassName="active-category" to="/all-products/music">Music</NavLink>
                <NavLink activeClassName="active-category" to="/all-products/non-fiction">Non-fiction</NavLink>
                <NavLink activeClassName="active-category" to="/all-products/random">Random</NavLink>
            </div>
            <CartWidget />
            <a className="navbar__login-button" href="#">Víctor</a>
        </nav>
    )
}

export default NavBar;