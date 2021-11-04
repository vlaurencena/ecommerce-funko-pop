import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import products from "./products";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const [message, setMessage] = useState(["Loading List..."]);

    const { categoryId, universeId } = useParams();

    const filterProducts = () => {
        if (props.id) {
            return products.filter((product) => product.universe === universeId && product.id !== props.id);
        } else if (universeId) {
            return products.filter((product) => product.universe === universeId);
        } else if (categoryId) {
            return products.filter((product) => product.category === categoryId);
        } else {
            return products;
        }
    }

    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filterProducts())
            }, 2000)
        })
    }

    useEffect(() => {
        getData()
            .then(function (data) {
               setItems(data);
                data.length === 0 && setMessage("Sorry, we have no products under this selection.");
            });
    }, [categoryId, universeId]);

    if (items.length === 0) {
        return <div className="item-list-container loading"> {message} </div>
    } else {
        return (
            <div className="item-list-container">
                <ItemList items={items} />
            </div>
        )
    }
}

export default ItemListContainer;