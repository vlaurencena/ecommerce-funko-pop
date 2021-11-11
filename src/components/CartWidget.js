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
            <span>{cartTotal !== 0 ? cartTotal : null}</span>
            {/* {console.log(cartTotal)}
            {console.log(cart)} */}
        </Link>

    )
}

export default CartWidget;
