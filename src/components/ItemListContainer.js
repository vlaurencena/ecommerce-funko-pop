import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import SortBy from "./SortBy";
import firestore from "../firebase";
import UniverseFilter from "./UniverseFilter";
import LoadingSpinner from "./LoadingSpinner";


const ItemListContainer = () => {

    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [sortBy, setSortBy] = useState("newest");

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    useEffect(() => {
        const getProducts = () => {
            const products = firestore.collection("products");
            let query = null;
            if (category) {
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
                    const sortedArrayOfProducts = sortItems(arrayOfProducts);
                    setItems(sortedArrayOfProducts);
                    setLoaded(true);
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        getProducts();
    }, [category]);

    const sortItems = (array) => {
        let sortedArray = [...array];
        sortedArray.sort(function (a, b) {
            if (sortBy === "newest") {
                return new Date(b.release.toDate()) - new Date(a.release.toDate());
            } else if (sortBy === "oldest") {
                return new Date(a.release.toDate()) - new Date(b.release.toDate());
            } else if (sortBy === "a-z") {
                return a.title.localeCompare(b.title);
            } else if (sortBy === "z-a") {
                return b.title.localeCompare(a.title);
            } else if (sortBy === "price-low-high") {
                return a.price - b.price;
            } else if (sortBy === "price-high-low") {
                return b.price - a.price;
            } else {
                return sortedArray;
            }
        });
        return sortedArray;
    };

    useEffect(() => {
        setFilterOn(false);
        setSelectedUniverses([]);
    }, [category]);


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
            const copyOfItems = [...items];
            const newItemsSelected = [];
            copyOfItems.forEach(item => {
                if (selectedUniverses.includes(item.universe)) {
                    newItemsSelected.push(item);
                }
            })
            setFilterOn(true);
            setFilteredItems(newItemsSelected);
        } else {
            setFilterOn(false);
        }
    }, [selectedUniverses]);

    const clearUniverseSelection = () => {
        setSelectedUniverses([]);
    }

    const handleUniverseChange = (event) => {
        const universeClicked = event.target.name;
        const copyOfSelectedUniverses = [...selectedUniverses];
        if (selectedUniverses.includes(universeClicked)) {
            copyOfSelectedUniverses.splice(copyOfSelectedUniverses.indexOf(universeClicked), 1)
        } else {
            copyOfSelectedUniverses.push(universeClicked);
        }
        copyOfSelectedUniverses.sort(function (a, b) {
            return a.localeCompare(b)
        });
        setSelectedUniverses(copyOfSelectedUniverses);
    }

    useEffect(() => {
        setNumberOfItems(filterOn ? filteredItems.length : items.length);
    }, [items, filteredItems, filterOn]);

    useEffect(() => {
        const sortedArrayOfProducts = sortItems(filterOn ? [...filteredItems] : [...items]);
        filterOn ? setFilteredItems([...sortedArrayOfProducts]) : setItems([...sortedArrayOfProducts]);
    }, [sortBy]);

    return (
        <div className="product-container">
            <UniverseFilter
                universes={universes}
                handleUniverseChange={handleUniverseChange}
                clearUniverseSelection={clearUniverseSelection}
                selectedUniverses={selectedUniverses}
            />
            <div className="item-list-container">
                <SortBy
                    handleSortByChange={handleSortByChange}
                    numberOfItems={loaded ? numberOfItems : 0}
                />
                {loaded ? (
                    <ItemList
                        items={filterOn ? filteredItems : items}
                    />
                ) :
                    <LoadingSpinner />
                }
            </div>
        </div>
    )
    // }
}

export default ItemListContainer;