import { useState } from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    const itemLink = `/item/${props.id}`;

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
            <Link to={itemLink} className="Item-card__detail-link">See details</Link>
        </div >
    )
}

export default Item;