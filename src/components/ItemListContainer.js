import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <div className="item-list-container">
            <h1>Hola, {props.greeting}, estas son las ofertas de la semana</h1>
            <ItemCount stock={20} initial={10} onAdd={() => console.log("Acabas de agregar elementos al carrito")}/>
        </div>
    )
}

export default ItemListContainer;