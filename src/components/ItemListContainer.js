import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import PageTitle from "./PageTitle";
import firestore from "../firebase";


const ItemListContainer = (props) => {


    const [items, setItems] = useState([]);
    const [message, setMessage] = useState(["Loading List..."]);

    const { categoryId, universeId } = useParams();

    const getProducts = () => {

        const products = firestore.collection("products");

        let query = null;

        if (props.id) {
            query = products.where("__name__", "!=", props.id);
        } else if (universeId) {
            query = products.where("universe", "==", universeId);
        } else if (categoryId) {
            query = products.where("category", "==", categoryId);
        } else {
            query = products;
        }

        const promise = query.get();

        promise
            .then(result => {
                setItems(result.docs.map(doc => {
                    return {id: doc.id, ...doc.data()};
                }))
            })
            .catch(() => {
                console.error("Error!");
            })
    }


    useEffect(() => {
        getProducts();
    }, [categoryId, universeId]);

    if (items.length === 0) {
        return (
            <>
                <PageTitle
                    main={categoryId}
                    secondary="SHOP"
                />
                <div className="item-list-container loading"> {message} </div>
            </>
        )
    } else {
        return (
            <>
                <PageTitle
                    main={categoryId ? categoryId : "ALL PRODUCTS"}
                    secondary="SHOP"
                />
                <div className="item-list-container">
                    <ItemList
                        items={items}
                    />
                </div>
            </>
        )
    }
}

export default ItemListContainer;