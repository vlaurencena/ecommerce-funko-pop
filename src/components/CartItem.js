const CartItem = (product) => {

    const removeThisProduct = () => {
        product.removeProduct(product.id);
    }

    return (
        <div className="cart-item cart-list-grid">
            <div className="cart-item__image-container">
                <img className="cart-item__image" src={`/media/products/${product.id}/${product.imgUrl}_0.jpg`} alt={`${product.title} funko pop`} />
            </div>
            <div>{product.title}</div>
            <button onClick={removeThisProduct} className="material-icons trash">delete</button>
            <div>{product.quantity}</div>
            <div>$ {product.price * product.quantity}</div>
        </div>
    )
}

export default CartItem