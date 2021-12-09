import { createContext, useState, useEffect } from "react";
import firestore from "../firebase";

const context = createContext();

let products = [];

const database = firestore.collection("products").get();

database.then(querySnapshot => {
    products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
});

const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartTotalWorth, setCartTotalWorth] = useState(0);


    useEffect(() => {
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", JSON.stringify([]));
            localStorage.setItem("cartTotal", JSON.stringify(0));
            localStorage.setItem("cartTotalWorth", JSON.stringify(0));
        } else {
            retrieveLSCart();
        }
    }, [])

    useEffect(() => {
        const sumItemsInCart = () => {
            if (cart.length === 0 || cart === false) {
                return 0;
            } else {
                let acummulator = 0;
                cart.forEach(element => {
                    acummulator += element.quantity;
                });
                return acummulator;
            };
        }
    
        const sumTotalCartWorth = () => {
            if (cart.length === 0 || cart === false) {
                return 0;
            } else {
                let acummulator = 0;
                cart.forEach(element => {
                    acummulator += (element.quantity * element.price);
                });
                return acummulator.toFixed(2);
            };
        }
        
        setCartTotal(sumItemsInCart());
        setCartTotalWorth(sumTotalCartWorth());
    }, [cart]);

    useEffect(() => {
        const updateLSCart = () => {
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
            localStorage.setItem("cartTotalWorth", JSON.stringify(cartTotalWorth));
        }
        updateLSCart();
    }, [cart, cartTotal, cartTotalWorth]);

    const isInCart = (productId) => {
        return cart.some(product => product.id === productId);
    }

    const addProduct = (productId, quantity) => {
        if (isInCart(productId) === false) {
            const NEW_PRODUCT = products.filter(product => product.id === productId);
            const CLONED_NEW_PRODUCT = Object.assign({}, ...NEW_PRODUCT);
            CLONED_NEW_PRODUCT.quantity = quantity;
            setCart([...cart, CLONED_NEW_PRODUCT]);
        } else {
            let updatedCart = cart.map(product => {
                if (product.id === productId) {
                    return { ...product, quantity: product.quantity + quantity };
                } else {
                    return product;
                }
            })
            setCart([...updatedCart]);
        }
    }

    const removeProduct = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    }

    const clearCart = () => {
        setCart([]);
    }



    const context_value = {
        cart: cart,
        setCart: setCart,
        cartTotal: cartTotal,
        cartTotalWorth: cartTotalWorth,
        addProduct: addProduct,
        removeProduct: removeProduct,
        clearCart: clearCart,
        isInCart: isInCart
    }

    const retrieveLSCart = () => {
        const LSCartTotal = JSON.parse(localStorage.getItem("cartTotal"));
        const LSCart = JSON.parse(localStorage.getItem("cart"));
        const LSCartTotalWorth = JSON.parse(localStorage.getItem("LSCartTotalWorth"));
        setCart(LSCart);
        setCartTotal(LSCartTotal);
        setCartTotalWorth(LSCartTotalWorth);
    }

    return (
        <Provider value={context_value}>
            {children}
        </Provider>
    )
}

export { context, Provider, CustomProvider };
