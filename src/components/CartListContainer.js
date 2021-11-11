import { useContext } from "react";
import { context } from "../context/CartContext"
import CartItem from "./CartItem";

const CartListContainer = () => {

    const { cart, removeProduct } = useContext(context);

    return (
        <>
            <div className="cart-list-container-header">
                <div className="cart-list-container-header__item">ITEM</div>
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
                    />)
            })}
        </>
    )
}

export default CartListContainer;
