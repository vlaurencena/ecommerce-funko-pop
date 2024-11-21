import { createContext, useState, useEffect } from "react";
import { firestore } from "../firebase"; // Ensure firestore is exported from firebase.js
import { collection, getDocs, getFirestore } from "firebase/firestore"; // Import necessary functions

const context = createContext();

let products = [];

const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartTotalWorth, setCartTotalWorth] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const db = firestore; // Ensure you get the Firestore instance from firebase
                const productsCollection = collection(db, "products");
                const querySnapshot = await getDocs(productsCollection);
                products = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);
    

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
            const productToAdd = products.find(product => product.id === productId);
            if (!productToAdd) {
                console.error("Product not found!");
                return;
            }
            setCart([...cart, { ...productToAdd, quantity }]);
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
