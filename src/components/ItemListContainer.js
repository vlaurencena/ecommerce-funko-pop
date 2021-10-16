import React from "react";

const ItemListContainer = (props) => {
    return (
        <div className="item-list-container">
            <h1>Hola, {props.greeting}, estas son las ofertas de la semana</h1>
        </div>
    )
}

export default ItemListContainer;