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
    setOnCart(true);
  }


  return (
    <>
      <div className="ItemDetail-image-container">
        <img
          src={`/media/products/${props.id}/${props.img}_0.jpg`}
          alt={`${props.title} funko pop`}
        />
      </div>
      <div className="ItemDetail-info-container">
        <h1 className="ItemDetail-info-container__title">{props.title}</h1>
        <h3>More from the same universe</h3>
        <p>${props.price}</p>
        <ul className="ItemDetail-info-container__about">
          <p>About this item</p>
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
    </>
  );
};

export default ItemDetail;
