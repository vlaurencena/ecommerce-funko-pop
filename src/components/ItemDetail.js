import { useState, useContext } from "react";
import { context } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {

  const { addProduct } = useContext(context);

  const [itemCount, setItemCount] = useState(0);

  const removeOneItem = () => {
    setItemCount(Math.max(itemCount - 1, 0));
  }

  const addOneItem = () => {
    setItemCount(Math.min(itemCount + 1, props.stock));
  }

  const [onCart, setOnCart] = useState(false);

  const onAdd = () => {
    itemCount !== 0 && addProduct(props.id, itemCount);
    itemCount !== 0 && setOnCart(true);
    setItemCount(0);
  }


  return (
    <div className="item-detail-description">
      <div className="item-detail-description__image">
        <img
          src={`/media/products/${props.img}main.jpg`}
          alt={`${props.title} funko pop`}
        />
      </div>
      <div className="item-detail-description__info">
        <h1>{props.title}</h1>
        <h2>${props.price}</h2>
        <ul className="item-detail-description__about">
          <p>About this item:</p>
          {props.about.map((info) => {
            return <li key={props.about.indexOf(info)}>{info}</li>
          })}
        </ul>
        <ItemCount
          onAdd={onAdd}
          removeOneItem={removeOneItem}
          addOneItem={addOneItem}
          itemCount={itemCount}
          onCart={onCart}
          stock={props.stock}
          initial={0}
          title={props.title}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
