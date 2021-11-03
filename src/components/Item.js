import { useState } from "react";

const Item = (props) => {
    const itemLink = `${props.category}/${props.universe}/${props.id}`;

    const [imageUrl, setImageUrl] = useState(`${props.imgUrl}_0.jpg`);

    const handleMouseOver = () => {
        setImageUrl(`${props.imgUrl}_1.jpg`)
    }
    const handleMouseOut = () => {
        setImageUrl(`${props.imgUrl}_0.jpg`);
    }

    return (
        <div className="Item-card">
            {props.new && <span className="Item-card__new Item-card__flag">NEW</span>}
            <a className="Item-card__item-link"
                href={itemLink}
            >
                <img
                    className="Item-card__img"
                    src={imageUrl} alt=""
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </a>
            <a className="Item-card__item-link Item-card__title" href={itemLink}>{props.title}</a>
            <div className="Item-card__price">${props.price}</div>
            <button className="Item-card__detail-link"> Add to cart</button>
        </div >
    )
}

export default Item;