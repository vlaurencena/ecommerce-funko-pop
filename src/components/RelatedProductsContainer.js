import { useEffect, useState } from "react";
import firestore from "../firebase";
import ItemList from "./ItemList";
import LoadingSpinner from "./LoadingSpinner";


const RelatedProductsContainer = (props) => {

    const [relatedItems, setRelatedItems] = useState([]);
    const [sameUniverse, setSameUniverse] = useState(true);
    const [sameCategory, setSameCategory] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getRelatedProducts = () => {
            const products = firestore.collection("products");
            const filterSameId = products.where("__name__", "!=", props.id)
            let query = null;
            if (sameUniverse === true) {
                query = filterSameId
                    .where("universe", "==", props.universe).limit(4);
            } else if (sameCategory === true) {
                query = filterSameId
                    .where("category", "==", props.category).limit(4);
            } else {
                query = filterSameId.limit(4);
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
                        setRelatedItems(arrayOfProducts);
                        setLoaded(true);
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        getRelatedProducts();
    }, [sameUniverse, sameCategory, props.id, props.category, props.universe]);

    return (
        <>
            {loaded ? (
                <ItemList
                    items={relatedItems}
                />
            ) :
                <LoadingSpinner />

            }
        </>
    )

}

export default RelatedProductsContainer;