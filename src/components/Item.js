import ItemCount from "./ItemCount";

const Item = (props) => {
    return (
        <div className="item-card">
            <div className="item-card__item-title">{props.title}</div>
            <img src={props.imgUrl} alt="" />
            <a className="item-card__view-product-detail-link" href="">Ver detalle de producto</a>
            <div>Stock disponible: {props.stock}</div>
            <ItemCount
                stock={props.stock}
                initial={0}
                title={props.title}
            />
        </div>
    )
}

export default Item;