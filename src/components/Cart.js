import { useContext } from "react";
import { context } from "../context/CartContext";
import CartListContainer from "./CartListContainer";
import CartPreCheckout from "./CartPreCheckout";
import EmptyCartContainer from "./EmptyCartContainer";

const Cart = () => {

    const { cartTotal } = useContext(context);

    return (
        <div className="cart">
            {cartTotal ? 
            (
            <>
            <CartListContainer />
            <CartPreCheckout />
            </>
            )
            : (
            <EmptyCartContainer />)
            }
        </div>
    )
}

export default Cart;