import CartWidget from "./CartWidget";

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <a className="navbar__icon" href="/"><img src="/logo-open.png" alt="Logo de OPEN" /></a>
            <ul>
                <li><a href="/">All</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/tv">TV</a></li>
                <li><a href="/video-games">Video Games</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/non-fiction">Non-fiction</a></li>
                <li><a href="/random">Random</a></li>
            </ul>
            <CartWidget />
            <a className="navbar__login-button" href="#">Víctor</a>
        </nav>
    )
}

export default NavBar;