import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink exact activeClassName="active-category" className="navbar__navigation-link-left" to="/">
                <img className="navbar__logo" src="/funko-town-logo.png" alt="Logo de Funko Town" />
            </NavLink>
            <div className="navbar__navigation-links">
                <NavLink activeClassName="active-category" to="/categories/movies">Movies</NavLink>
                <NavLink activeClassName="active-category" to="/categories/tv">TV</NavLink>
                <NavLink activeClassName="active-category" to="/categories/video-games">Video Games</NavLink>
                <NavLink activeClassName="active-category" to="/categories/music">Music</NavLink>
                <NavLink activeClassName="active-category" to="/categories/sports">Sports</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;