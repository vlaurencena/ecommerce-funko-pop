import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink exact className="navbar__navigation-link-left" to="/"><img src="/logo-open.png" alt="Logo de Funko Town" /></NavLink>
            <div className="navbar__navigation-links">
                <NavLink activeClassName="active-category" exact to="/all-products">All</NavLink>
                <NavLink activeClassName="active-category" to="/categories/movies">Movies</NavLink>
                <NavLink activeClassName="active-category" to="/categories/tv">TV</NavLink>
                <NavLink activeClassName="active-category" to="/categories/video-games">Video Games</NavLink>
                <NavLink activeClassName="active-category" to="/categories/music">Music</NavLink>
                <NavLink activeClassName="active-category" to="/categories/sports">Sports</NavLink>
                <NavLink activeClassName="active-category" to="/categories/random">Random</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;