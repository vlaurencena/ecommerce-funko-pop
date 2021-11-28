import { Link } from "react-router-dom";
import CustomLinkButton from "./CustomLinkButton";

const ItemCount = (props) => {

    const addToCart =
        (
            <div className="item-count-container bg-lightgray">
                <div className="item-count-control">
                    <button className="material-icons" onClick={props.removeOneItem}>
                        remove
                    </button>
                    <div>{props.itemCount}</div>
                    <button className="material-icons" onClick={props.addOneItem}>
                        add
                    </button>
                </div>
                <CustomLinkButton
                    text="ADD TO CART"
                    onClick={props.onAdd}
                    color="light"
                    type="button"
                />
            </div >
        );

    const finishPurchase =
        (
            <CustomLinkButton
            text="GO TO CART"
            link="/cart"
            color="dark"
            type="link"
        />
        );

    return (
        <>
            {addToCart}
            {props.onCart && finishPurchase}
        </>
    )
}

export default ItemCount;