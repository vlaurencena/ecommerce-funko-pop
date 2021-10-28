import Item from "./Item";

const ItemList = (props) => {

    return (
        <>
            {props.items.map((item) => {
                return (
                    <Item key={item.id} title={item.title} pictureUrl={item.pictureUrl} stock={item.stock} />
                );
            })}
        </>
    );
}

export default ItemList;
