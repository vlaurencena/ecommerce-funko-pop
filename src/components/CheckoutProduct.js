const CheckoutProduct = (product) => {

    return (
        <div className="checkout-product">
            <div className="checkout-product__image-container">
                <div className="checkout-product__quantity">{product.quantity}</div>
                <img className="checkout-product__image" src={`/media/products/${product.imgUrl}main.jpg`} alt={`${product.title} funko pop`} />
            </div>
            <div>{product.title}</div>
            <div>$ {(product.price * product.quantity).toFixed(2)}</div>
        </div>
    )
}

export default CheckoutProduct;