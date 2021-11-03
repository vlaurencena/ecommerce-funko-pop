import Item from "./Item";

const ItemList = (props) => {


    const checkIsNew = (releaseDate) => {
        const currentDate = new Date(2021, 10, 3); // REPLACE WITH ACTUAL DATE
        const difference = currentDate.getTime() - releaseDate.getTime();
        const days = Math.ceil(difference / (1000 * 3600 * 24));
        return days < 60;
    }


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
                        new={checkIsNew(item.release)}
                    />
                );
            })}
        </>
    );
}

export default ItemList;
