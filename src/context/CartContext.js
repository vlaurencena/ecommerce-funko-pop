import { createContext, useState, useEffect } from "react";
import products from "../components/products";

const context = createContext();

const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCartTotal(sumItemsInCart());
    }, [cart])

    const isInCart = (productId) => {
        return cart.some(product => product.productId === productId);
    }

    const addProduct = (productId, quantity) => {
        if (isInCart(productId)) {
            const current_product = cart.find(product => product.referenceId === productId);
            console.log("SI estoy en el cart");
            current_product.quantity += quantity;
        } else {
            const current_product = products.find(product => product.id === productId);
            current_product.quantity = quantity;
            setCart([...cart, current_product]);
        }
    }

    const removeProduct = (productId) => {
        setCart(cart.filter(product => product.id !== productId))
    }

    const clearCart = () => {
        setCart([]);
    }

    const [cartTotal, setCartTotal] = useState(0);

    const sumItemsInCart = () => {
        if (cart.length === 0) {
            return 0;
        } else {
            let acummulator = 0;
            cart.forEach(element => {
                acummulator += element.quantity;
            });
            return acummulator;
        };
    }

    const context_value = {
        cart: cart,
        cartTotal: cartTotal,
        addProduct: addProduct,
        removeProduct: removeProduct,
        clearCart: clearCart,
        isInCart: isInCart,
    }

    return (
        <Provider value={context_value}>
            {children}
        </Provider>
    )
}

export { context, Provider, CustomProvider };
