import Item from "./Item";

const ItemList = (props) => {

    const checkIsNew = (releaseDate) => {
        const CURRENT_DATE = new Date(2021, 10, 3); // REPLACE WITH ACTUAL DATE
        const PRODUCT_RELEASE_DATE = releaseDate.toDate();
        const DIFFERENCE_IN_MILLISECONDS = CURRENT_DATE - PRODUCT_RELEASE_DATE;
        const DIFFERENCE_IN_DAYS = DIFFERENCE_IN_MILLISECONDS / 1000 / 60 / 60 / 24;
        return DIFFERENCE_IN_DAYS < 60;
    }

    return (
        <div className="item-list">
            {props.items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        imgUrl={`/media/products/${item.imgUrl}`}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        universe={item.universe}
                        new={checkIsNew(item.release)}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;
