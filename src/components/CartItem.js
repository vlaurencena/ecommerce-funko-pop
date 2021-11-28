const CartItem = (product) => {

    const removeThisProduct = () => {
        product.removeProduct(product.id);
    }

    return (
        <div className="cart-item cart-list-grid">
            <a href={`item/${product.id}`}>
                <div className="cart-item__image-container">
                    <img className="cart-item__image" src={`/media/products/${product.imgUrl}main.jpg`} alt={`${product.title} funko pop`} />
                </div>
            </a>
            <a className="flex-center" href={`item/${product.id}`}>{product.title}</a>
            <button onClick={removeThisProduct} className="material-icons trash">delete</button>
            <div>{product.quantity}</div>
            <div>$ {product.price * product.quantity}</div>
        </div>
    )
}

export default CartItem