import { useContext } from "react";
import { context } from "../context/CartContext";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutProductsList = () => {


    const { cart, cartTotalWorth } = useContext(context);

    return (
        <>
            <div className="checkout-products-list">
                {cart.map(productInCart => {
                    return (
                        <CheckoutProduct
                            key={productInCart.id}
                            id={productInCart.id}
                            title={productInCart.title}
                            price={productInCart.price}
                            quantity={productInCart.quantity}
                            imgUrl={productInCart.imgUrl}
                        />
                    )
                })}
                <div className="checkout-products-list__total">
                    <div>Total</div>
                    <div>${Number(cartTotalWorth).toFixed(2)}</div>
                </div>
            </div>

        </>
    )
}



export default CheckoutProductsList;