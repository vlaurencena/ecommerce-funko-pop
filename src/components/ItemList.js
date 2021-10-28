import Item from "./Item";

const ItemList = (props) => {

    return (
        <>
            {props.items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        title={item.title}
                        imgUrl={item.imgUrl}
                        stock={item.stock}
                    />
                );
            })}
        </>
    );
}

export default ItemList;
