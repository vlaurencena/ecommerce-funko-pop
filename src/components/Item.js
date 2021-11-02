import ItemCount from "./ItemCount";

const Item = (props) => {
    const itemLink = `/${props.category}/${props.universe}/${props.id}`;

    return (
        <div className="Item-card">
            <img className="Item-card__img" src={props.imgUrl} alt="" />
            <div className="Item-card__title">{props.title}</div>
            <div className="Item-card__price">${props.price}</div>
            <a className="Item-card__detail-link" href={itemLink}> View product details</a>
        </div >
    )
}

export default Item;