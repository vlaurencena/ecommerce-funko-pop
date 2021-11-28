import { useContext } from "react";
import { context } from "../context/CartContext";
import CartListContainer from "./CartListContainer";
import CartSummary from "./CartSummary";
import EmptyCartContainer from "./EmptyCartContainer";

const Cart = () => {

    const { cartTotal } = useContext(context);

    return (
        <div className="cart">
            {cartTotal ? 
            (
            <>
            <CartListContainer />
            <CartSummary />
            </>
            )
            : (
            <EmptyCartContainer />)
            }
        </div>
    )
}

export default Cart;