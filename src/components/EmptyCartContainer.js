import ItemListContainer from "./ItemListContainer";

const EmptyCartContainer = () => {
    return (
        <div className="empty-cart-container">
        <div>Your cart looks so empty. Here are some suggestions to fill it:</div>
        <ItemListContainer />
        </div>
    )
}

export default EmptyCartContainer;