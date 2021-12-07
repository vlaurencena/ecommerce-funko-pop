import { useContext } from "react";
import { context } from "../context/CartContext";
import CustomLinkButton from "./CustomLinkButton";

const CartSummary = () => {

    const { cartTotal, cartTotalWorth } = useContext(context);

    return (
        <>
            <div className="cart-summary">
                <div className="cart-summary__header line-division">
                    <div>SUMMARY</div>
                    <div>{cartTotal} ITEM{cartTotal > 1 && <span>S</span>}</div>
                </div>
                <div className="line-division">
                    <p>By clicking check out, I agree to the terms and conditions and understand that all sales are final. Some restrictions apply for free shipping. Any applicable discounts or coupons will be reflected at checkout.</p>
                </div>
                <div className="cart-summary__subtotal">
                    <div>SUBTOTAL</div>
                    <div>${cartTotalWorth}</div>
                </div>
                <CustomLinkButton
                    text="CHECKOUT"
                    type="link"
                    link="/checkout"
                    color="dark"
                />
            </div>
        </>
    )
}

export default CartSummary;
