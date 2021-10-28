
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            setItems([
                {
                    "id": "1",
                    "title": "Camisa Hawaiana",
                    "price": 1500,
                    "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_799098-MLA43428187909_092020-O.jpg",
                    "stock": 10
                },
                {
                    "id": "2",
                    "title": "Zapatillas rojas",
                    "price": 2000,
                    "pictureUrl": "https://media.istockphoto.com/photos/sneakers-picture-id495204658?k=20&m=495204658&s=612x612&w=0&h=6LX4a6yyfz1pS63vkBSdfdu41DoH7NqaGXCLK02Vy2U=",
                    "stock": 200
                },
                {
                    "id": "3",
                    "title": "Pantalón verde",
                    "price": 2500,
                    "pictureUrl": "https://image.shutterstock.com/image-photo/trousers-on-model-isolated-260nw-161477735.jpg",
                    "stock": 7
                }
            ]);
        }, 2000);

    }, []);

    if (items.length === 0) {
        return <div className="loading">Loading List...</div>
    } else {
        return (
            <div className="item-list-container">
                <ItemList items={items} />
            </div>
        )
    }
}

export default ItemListContainer;