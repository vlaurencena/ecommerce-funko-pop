import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [itemCount, setItemCount] = useState(initial);

    const removeItem = () => {
        setItemCount(Math.max(itemCount - 1, 0));
    }

    const addItem = () => {
        setItemCount(Math.min(itemCount + 1, stock));
    }

    return (
        <div className="item-count-container bg-lightgray">
            <p>Camisa Tiger</p>
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