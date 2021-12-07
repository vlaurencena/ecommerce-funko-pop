import { useContext } from "react";
import { context } from "../context/CartContext";

const CartWidgetHoverItem = (props) => {

    const { removeProduct } = useContext(context);

    const handleClick = () => {
        removeProduct(props.id);
    }

    return (
        <div className="cart-widget-hover-item">
            <img className="cart-widget-hover-item__image" src={`/media/products/${props.imgUrl}main.jpg`}
                alt={`${props.title} funko pop`} />
            <div className="cart-widget-hover-item__description">
                <div className="cart-widget-hover-item__description-title">{props.title}</div>
                <div>{props.quantity} x ${props.price}</div>
            </div>
            <span onClick={handleClick} className="material-icons cart-widget-hover__delete cursor-pointer">close</span>
        </div>

    )
}

export default CartWidgetHoverItem;