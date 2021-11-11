import { Link } from "react-router-dom";

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
                <div className="bg-white">
                    <button className="add-to-cart-button" onClick={props.onAdd}>Agregar al carrito</button>
                </div>
            </div >
        );

    const finishPurchase =
        (
            <Link to="/cart" className="item-count-container bg-lightgray">
                Finish Purchase
            </Link>
        );

    return (
        <>
            {props.onCart ? finishPurchase : addToCart}
        </>
    )
}

export default ItemCount;