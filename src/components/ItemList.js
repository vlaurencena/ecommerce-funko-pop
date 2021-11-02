import Item from "./Item";

const ItemList = (props) => {

    return (
        <>
            {props.items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        imgUrl={`/media/products/${item.id}/${item.imgUrl}`}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        universe={item.universe}
                        />
                );
            })}
        </>
    );
}

export default ItemList;
