import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  return (
    <>
      <div className="ItemDetail-image-container">
        <img
          src={`/media/products/${props.id}/${props.img}`}
          alt=""
        />
      </div>
      <div className="ItemDetail-info-container">
        <h1 className="ItemDetail-info-container__title">{props.title}</h1>
        <h3>More from the same universe</h3>
        <p>${props.price}</p>
        <ul className="ItemDetail-info-container__about">
          <p>About this item</p>
          {props.about.map((info) => {
            return <li>{info}</li>
          })}
        </ul>
        <ItemCount
          stock={props.stock}
          initial={0}
          title={props.title}
        />
      </div>
    </>
  );
};

export default ItemDetail;
