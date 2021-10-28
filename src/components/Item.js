import ItemCount from "./ItemCount";

const Item = (props) => {
    return (
        <div key={props.id} className="item-card">
            <div className="item-card__item-title">{props.title}</div>
            <img src={props.pictureUrl} alt="" />
            <a className ="item-card__view-product-detail-link" href="">Ver detalle de producto</a>
            <div>Stock disponible: {props.stock}</div>
            <ItemCount stock={props.stock} initial={0} />
        </div>
    )
}

export default Item;