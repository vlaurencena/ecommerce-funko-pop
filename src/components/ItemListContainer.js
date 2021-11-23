import ItemList from "./ItemList";
import SortBy from "./SortBy";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import firestore from "../firebase";


const ItemListContainer = (props) => {


    const [items, setItems] = useState([]);
    const [message, setMessage] = useState(["Loading List..."]);
    const { categoryId, universeId } = useParams();

    const [sortBy, setSortBy] = useState("newest");

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    }

    useEffect(() => {
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
                    const arrayOfProducts = result.docs.map(doc => {
                        return { id: doc.id, ...doc.data() };
                    });
                    const sortedArrayOfProducts = sortItems(arrayOfProducts);
                    setItems(sortedArrayOfProducts);
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        getProducts();
    }, [categoryId, universeId, props.id, sortBy]);

    const sortItems = (array) => {
        let sortedArray = [];
        if (sortBy === "newest") {
            sortedArray = [...array].sort(function (a, b) {
                return new Date(b.release.toDate()) - new Date(a.release.toDate())
            });
            console.log(sortedArray);
        } else if (sortBy === "oldest") {
            console.log("oldest");
            sortedArray = [...array].sort(function (a, b) {
                return new Date(a.release.toDate()) - new Date(b.release.toDate());
            });
        } else if (sortBy === "a-z") {
            console.log("a-z");
            sortedArray = [...array].sort(function (a, b) {
                return a.title.localeCompare(b.title);
            });
        } else if (sortBy === "z-a") {
            console.log("z-a");
            sortedArray = [...array].sort(function (a, b) {
                return b.title.localeCompare(a.title);
            });
        } else if (sortBy === "price-low-high") {
            console.log("price-low-high");
            sortedArray = [...array].sort(function (a, b) {
                return a.price - b.price;
            });
        } else if (sortBy === "price-high-low") {
            console.log("price-high-low");
            sortedArray = [...array].sort(function (a, b) {
                return b.price - a.price;
            });
        }
        return sortedArray;
    }


    if (items.length === 0) {
        return (
            <>
                <div className="item-list-container loading"> {message} </div>
            </>
        )
    } else {
        return (
            <>
                <div className="item-list-container">
                    <SortBy
                        handleSortByChange={handleSortByChange}
                    />
                    <div className="item-list">
                        <ItemList
                            items={items}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default ItemListContainer;