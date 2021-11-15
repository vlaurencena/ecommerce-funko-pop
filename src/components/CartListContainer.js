import { useContext } from "react";
import { context } from "../context/CartContext";
import CartItem from "./CartItem";

const CartListContainer = () => {

    const { cart, removeProduct } = useContext(context);

    return (
        <> 
                <div className="cart-list-container">
                    <div className="cart-list-container-header cart-list-grid">
                        <div className="cart-list-container-header__item">ITEM</div>
                        <div></div>
                        <div></div>
                        <div>QTY</div>
                        <div>PRICE</div>
                    </div>
                    {cart.map(productInCart => {
                        return (
                            <CartItem
                                key={productInCart.id}
                                id={productInCart.id}
                                title={productInCart.title}
                                price={productInCart.price}
                                quantity={productInCart.quantity}
                                imgUrl={productInCart.imgUrl}
                                removeProduct={removeProduct}
                            />
                        )
                    })}
                </div>
        </>
    )
}

export default CartListContainer;
