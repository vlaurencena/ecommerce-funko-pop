import CustomLinkButton from "./CustomLinkButton";

const ItemCount = (props) => {

    const finishPurchase =
        (
            <CustomLinkButton
                text="GO TO CART"
                link="/cart"
                color="dark"
                type="link"
            />
        );

    return (
        <>
            <div className="item-count-container bg-lightgray">
                <div className="item-count-control">
                    <button className="material-icons" onClick={props.removeOneItem}>
                        remove
                    </button>
                    <div>{props.itemCount}</div>
                    <button className="material-icons" onClick={props.addOneItem}>
                        add
                    </button>
                </div>
                <CustomLinkButton
                    text="ADD TO CART"
                    onClick={props.onAdd}
                    color="light"
                    type="button"
                />
                {props.onCart && finishPurchase}
            </div >

        </>
    )
}

export default ItemCount;