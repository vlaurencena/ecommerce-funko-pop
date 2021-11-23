import ItemList from "./ItemList";
import SortBy from "./SortBy";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import firestore from "../firebase";
import UniverseFilter from "./UniverseFilter"


const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const { category, id } = useParams();
    const [loaded, setLoaded] = useState(false);

    const [sortBy, setSortBy] = useState("newest");

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    }

    const [sameUniverse, setSameUniverse] = useState(true);
    const [sameCategory, setSameCategory] = useState(true);

    useEffect(() => {
        const getProducts = () => {
            const products = firestore.collection("products");
            let query = null;
            if (props.id && sameUniverse === true) {
                query = products
                    .where("__name__", "!=", props.id)
                    .where("universe", "==", props.universe).limit(4);
            } else if (props.id && sameCategory === true) {
                query = products
                    .where("__name__", "!=", props.id)
                    .where("category", "==", props.category).limit(4);
            } else if (props.id && sameUniverse === false && sameCategory === false) {
                console.log("here");
                query = products.limit(4);
            } else if (category) {
                query = products.where("category", "==", category);
            } else {
                query = products;
            }
            const promise = query.get();
            promise
                .then(result => {
                    const arrayOfProducts = result.docs.map(doc => {
                        return { id: doc.id, ...doc.data() };
                    });
                    if (arrayOfProducts.length === 0) {
                        if (sameUniverse === true) {
                            setSameUniverse(false);
                        } else {
                            setSameCategory(false);
                        }
                    } else {
                        const sortedArrayOfProducts = sortItems(arrayOfProducts);
                        setItems(sortedArrayOfProducts);
                        setLoaded(true);
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        getProducts();
    }, [category, id, props.id, sortBy, sameUniverse, sameCategory]);

    const sortItems = (array) => {
        let sortedArray = [...array];
        sortedArray.sort(function (a, b) {
            if (sortBy === "newest") {
                console.log("newest");
                return new Date(b.release.toDate()) - new Date(a.release.toDate());
            } else if (sortBy === "oldest") {
                console.log("oldest");
                return new Date(a.release.toDate()) - new Date(b.release.toDate());
            } else if (sortBy === "a-z") {
                console.log("a-z");
                return a.title.localeCompare(b.title);
            } else if (sortBy === "z-a") {
                console.log("z-a");
                return b.title.localeCompare(a.title);
            } else if (sortBy === "price-low-high") {
                console.log("price-low-high");
                return a.price - b.price;
            } else if (sortBy === "price-high-low") {
                console.log("price-high-low");
                return b.price - a.price;
            }
        });
        return sortedArray;
    }

    // UNIVERSE FILTER
    const [universes, setUniverses] = useState([]);
    const [selectedUniverses, setSelectedUniverses] = useState([]);
    const [filterOn, setFilterOn] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const getAllUniverses = () => {
            const universesMapping = items.map(item => item.universe);
            return [...new Set(universesMapping)].sort(function (a, b) {
                return a.localeCompare(b)
            });
        }
        setUniverses(getAllUniverses());
    }, [items]);

    useEffect(() => {
        if (selectedUniverses.length) {
            console.log("filter is on");
            const copyOfItems = [...items];
            const newItemsSelected = []
            copyOfItems.forEach(item => {
                if (selectedUniverses.includes(item.universe)) {
                    newItemsSelected.push(item);
                }
            })
            console.log(newItemsSelected);
            setFilterOn(true);
            setFilteredItems(newItemsSelected);
        } else {
            setFilterOn(false);
            console.log("filter is off");
        }
    }, [selectedUniverses])

    const handleUniverseChange = (event) => {
        const universeClicked = event.target.name;
        const copyOfSelectedUniverses = [...selectedUniverses];
        if (selectedUniverses.includes(universeClicked)) {
            console.log("sí estoy");
            copyOfSelectedUniverses.splice(copyOfSelectedUniverses.indexOf(universeClicked), 1)
        } else {
            console.log("no estoy");
            copyOfSelectedUniverses.push(universeClicked);
        }
        copyOfSelectedUniverses.sort(function (a, b) {
            return a.localeCompare(b)
        });
        setSelectedUniverses(copyOfSelectedUniverses);
        console.log(copyOfSelectedUniverses);
    }

    if (loaded === false) {
        return (
            <div className="item-list-container loading">
                Loading...
            </div>
        )
    } else {
        return (
            <div className="product-container">
                {props.useUniverseFilter && <UniverseFilter
                    universes={universes}
                    handleUniverseChange={handleUniverseChange}
                />}
                <div className="item-list-container">
                    {props.sortBy && <SortBy
                        handleSortByChange={handleSortByChange}
                    />}
                    <ItemList
                        items={filterOn ? filteredItems : items}
                    />
                </div>
            </div>
        )
    }
}

export default ItemListContainer;