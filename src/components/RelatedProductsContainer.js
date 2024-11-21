import { useEffect, useState } from "react";
import { getDocs, collection, query, where, limit } from "firebase/firestore";
import { firestore } from "../firebase";
import ItemList from "./ItemList";
import LoadingSpinner from "./LoadingSpinner";

const RelatedProductsContainer = (props) => {
    const [relatedItems, setRelatedItems] = useState([]);
    const [sameUniverse, setSameUniverse] = useState(true);
    const [sameCategory, setSameCategory] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getRelatedProducts = async () => {
            try {
                const productsRef = collection(firestore, "products");
                const filterSameId = query(productsRef, where("__name__", "!=", props.id));
                let q = null;

                if (sameUniverse) {
                    q = query(filterSameId, where("universe", "==", props.universe), limit(4));
                } else if (sameCategory) {
                    q = query(filterSameId, where("category", "==", props.category), limit(4));
                } else {
                    q = query(filterSameId, limit(4));
                }

                const querySnapshot = await getDocs(q);
                const arrayOfProducts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                if (arrayOfProducts.length === 0) {
                    if (sameUniverse) {
                        setSameUniverse(false);
                    } else {
                        setSameCategory(false);
                    }
                } else {
                    setRelatedItems(arrayOfProducts);
                    setLoaded(true);
                }
            } catch (error) {
                console.error("Error fetching related products:", error);
            }
        };

        getRelatedProducts();
    }, [sameUniverse, sameCategory, props.id, props.category, props.universe]);

    return (
        <>
            {loaded ? (
                <ItemList items={relatedItems} />
            ) : (
                <LoadingSpinner />
            )}
        </>
    );
};

export default RelatedProductsContainer;
