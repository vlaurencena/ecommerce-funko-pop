import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import SortBy from "./SortBy";
import { firestore } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
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
        let cancel = false;
        const getProducts = async () => {
            try {
                const productsRef = collection(firestore, "products");
                let q = query(productsRef); // Default query without any filters

                if (category && category.trim()) {
                    q = query(productsRef, where("category", "==", category)); // Adding category filter
                }

                //const querySnapshot = await getDocs(q);
                const querySnapshot = await getDocs(productsRef);
                if (cancel) return;

                const arrayOfProducts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(arrayOfProducts);
                setLoaded(true);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProducts();

        return () => {
            cancel = true;
        };
    }, [category]);

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
            return [...new Set(universesMapping)].sort((a, b) => a.localeCompare(b));
        };
        setUniverses(getAllUniverses());
    }, [items]);

    useEffect(() => {
        if (selectedUniverses.length) {
            const newItemsSelected = items.filter(item => selectedUniverses.includes(item.universe));
            setFilterOn(true);
            setFilteredItems(newItemsSelected);
        } else {
            setFilterOn(false);
        }
    }, [selectedUniverses, items]);

    const clearUniverseSelection = () => {
        setSelectedUniverses([]);
    };

    const handleUniverseChange = (event) => {
        const universeClicked = event.target.name;
        setSelectedUniverses((prevSelected) => {
            const updatedSelected = [...prevSelected];
            if (updatedSelected.includes(universeClicked)) {
                updatedSelected.splice(updatedSelected.indexOf(universeClicked), 1);
            } else {
                updatedSelected.push(universeClicked);
            }
            return updatedSelected.sort((a, b) => a.localeCompare(b));
        });
    };

    useEffect(() => {
        setNumberOfItems(filterOn ? filteredItems.length : items.length);
    }, [items, filteredItems, filterOn]);

    useEffect(() => {
        const sortItems = (array) => {
            let sortedArray = [...array];
            sortedArray.sort((a, b) => {
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
                }
                return 0;
            });
            return sortedArray;
        };

        const sortedArrayOfProducts = sortItems(filterOn ? [...filteredItems] : [...items]);
        filterOn ? setFilteredItems([...sortedArrayOfProducts]) : setItems([...sortedArrayOfProducts]);
    }, [sortBy, filterOn]);

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
    );
};

export default ItemListContainer;
