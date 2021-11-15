import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/CartContext";

const CartWidget = () => {

    const { cartTotal } = useContext(context);

    return (
        <Link to="/cart" className="shopping-cart-icon">
                <span className="material-icons">
                    shopping_cart
                </span>
                {cartTotal > 0 ? <div className="cart-number-container"><span>{cartTotal}</span></div> : null}

        </Link>

    )
}

export default CartWidget;
