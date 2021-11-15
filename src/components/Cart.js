import { useContext } from "react";
import { context } from "../context/CartContext";
import CartListContainer from "./CartListContainer";
import CartCheckout from "./CartCheckout";
import EmptyCartContainer from "./EmptyCartContainer";

const Cart = () => {

    const { cartTotal } = useContext(context);

    return (
        <div className="cart">
            {cartTotal ? 
            (
            <>
            <CartListContainer />
            <CartCheckout />
            </>
            )
            : (
            <EmptyCartContainer />)
            }
        </div>
    )
}

export default Cart;