import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { context } from "../context/CartContext";
import CartWidgetHover from "./CartWidgetHover";

const CartWidget = () => {

    const { cartTotal } = useContext(context);
    const [hovered, setHovered] = useState(false);
    
    const handleMouseEnter = () => {
        cartTotal !== 0 && setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    useEffect(()=> {
        cartTotal === 0 && setHovered(false);
    }, [cartTotal])

    return (
        <>
            <NavLink activeClassName="active-category" to="/cart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="shopping-cart-icon">
                <span className="material-icons">
                    shopping_cart
                </span>
                {cartTotal > 0 ? <div className="cart-number-container"><span>{cartTotal}</span></div> : null}
            </NavLink>
            {cartTotal !== 0 && <CartWidgetHover
                    hovered={hovered}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />}
        </>
    )
}

export default CartWidget;