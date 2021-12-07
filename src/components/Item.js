import { useState } from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    const itemLink = `/item/${props.id}`;

    const [imageUrl, setImageUrl] = useState(`${props.imgUrl}main.jpg`);

    const handleMouseOver = () => {
        setImageUrl(`${props.imgUrl}secondary.jpg`)
    }
    const handleMouseOut = () => {
        setImageUrl(`${props.imgUrl}main.jpg`);
    }

    return (
        <div className="item-card">
            {props.new && <span className="item-card__new item-card__flag">NEW</span>}
            <a className="item-card__item-link"
                href={itemLink}
            >
                <img
                    className="item-card__img"
                    src={imageUrl} alt={`${props.title} funko pop`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </a>
            <a className="item-card__item-link item-card__title" href={itemLink}>{props.title}</a>
            <div className="item-card__price">${props.price.toFixed(2)}</div>
            <Link to={itemLink} className="item-card__detail-link">See details</Link>
        </div >
    )
}

export default Item;