import { context } from "../context/CartContext";
import { useContext } from "react";
import CartWidgetHoverItem from "./CartWidgetHoverItem"
import CustomLinkButton from "./CustomLinkButton";

const CartWidgetHover = (props) => {

    const { cart, cartTotalWorth } = useContext(context);

    return (
        <div onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} className=
            {`cart-widget-hover ${props.hovered === false && "visibility-hidden"}`}>
            <a href="/cart" className="cursor-pointer cart-widget-hover__transparent--link">
                <div className="cart-widget-hover__transparent"></div>
            </a>
            <div className="cart-widget-hover__white">
                {cart.map((item) => {
                    return (
                        <CartWidgetHoverItem
                            key={item.id}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            quantity={item.quantity}
                            price={item.price.toFixed(2)}
                            id={item.id}
                        />
                    )
                })}
                <div className="cart-widget-hover__subtotal">
                    <div>SUBTOTAL</div>
                    <div>${cartTotalWorth}</div>
                </div>
                <CustomLinkButton
                    text="CHECKOUT"
                    link="/checkout"
                    color="dark"
                    type="link"
                />
                <CustomLinkButton
                    text="VIEW CART"
                    link="/cart"
                    color="light"
                    type="link"
                />
            </div>
        </div>
    )
}

export default CartWidgetHover;
