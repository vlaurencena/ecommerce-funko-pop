import { useContext } from "react";
import { context } from "../context/CartContext";

const CartCheckout = () => {

    const { cartTotal, cartTotalWorth } = useContext(context);

    return (
        <>
            <div className="checkout-container">
                <div className="checkout-container__header line-division">
                    <div>SUMMARY</div>
                    <div>{cartTotal} ITEM{cartTotal > 1 && <span>S</span>}</div>
                </div>
                <div className="line-division">
                    <p>By clicking check out, I agree to the terms and conditions and understand that all sales are final. Some restrictions apply for free shipping. Any applicable discounts or coupons will be reflected at checkout.</p>
                </div>
                <div className="checkout-container__subtotal">
                    <div>SUBTOTAL</div>
                    <div>${cartTotalWorth}</div>
                </div>
                <button>CHECK OUT</button>
            </div>
        </>
    )
}

export default CartCheckout;