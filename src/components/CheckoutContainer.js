import CheckoutForm from "./CheckoutForm";
import CheckoutProductsList from "./CheckoutProductsList";
import { context } from "../context/CartContext";
import { useState, useEffect, useContext, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
import firestore from "../firebase";

const CheckoutContainer = () => {

    let history = useHistory();

    const { cart, cartTotal, setCart, cartTotalWorth } = useContext(context);

    const [buyer, setBuyer] = useState({
        fname: "",
        lname: "",
        email: "",
        tel: "",
        comments: "",
    });

    const [order, setOrder] = useState([]);
    const [submit, setSubmit] = useState(false);


    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBuyer({ ...buyer, [name]: value })
    }

    let items = [];

    cart.map(item => {
        return (
            items = [...items, {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            }]
        );
    });

    const handleSubmit = () => {
        const order = {
            buyer: buyer,
            items: items,
            cartTotalItems: cartTotal,
            cartTotalWorth: cartTotalWorth,
            date: new Date(),
        };
        buyerName.current = buyer.fname;
        firestore.collection("orders").add({ ...order })
                .then(docRef => {
                    orderId.current = docRef.id;
                    history.push({
                        pathname: "/thank-you",
                        state: {
                            orderId: orderId.current,
                            buyerName: buyerName.current
                        }
                    });
                    setSubmit(true);
                    setCart([]);

                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
    }

    const buyerName = useRef();
    const orderId = useRef();

    const [firstRender, setFirstRender] = useState(true);




    return (
        <>
            <div className="flex-1 checkout-container max-width-1400">
                <CheckoutForm
                    handleFormChange={handleFormChange}
                    handleSubmit={handleSubmit}
                    fname={buyer.fname}
                    lname={buyer.lname}
                    email={buyer.email}
                    tel={buyer.tel}
                    comments={buyer.comments}
                />
                <CheckoutProductsList />
            </div>
            {submit === true && <Redirect to={history}
            />}
        </>
    )
}

export default CheckoutContainer;