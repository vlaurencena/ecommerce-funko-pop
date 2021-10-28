import { useState } from 'react';

const ItemCount = ({ stock, initial }) => {

    const [itemCount, setItemCount] = useState(initial);

    const removeItem = () => {
        setItemCount(Math.max(itemCount - 1, 0));
    }

    const addItem = () => {
        setItemCount(Math.min(itemCount + 1, stock));
    }

    const onAdd = () => {
        console.log("Acabas de agregar " + itemCount + " productos a tu carrito")
    }

    return (
        <div className="item-count-container bg-lightgray">
            <div className="item-count-control">
                <button className="material-icons" onClick={removeItem}>
                    remove
                </button>
                <div>{itemCount}</div>
                <button className="material-icons" onClick={addItem}>
                    add
                </button>
            </div>
            <div className="bg-white">
                <button className="add-to-cart-button" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;