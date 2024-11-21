import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import RelatedProductsContainer from "./RelatedProductsContainer";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"; // Import necessary functions

const ItemDetailContainer = () => {

  const [selectedItem, setSelectedItem] = useState(undefined);
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const productsRef = collection(firestore, "products");
        const q = query(productsRef, where("__name__", "==", id));
  
        const querySnapshot = await getDocs(q);
        const item = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        setSelectedItem(item[0]); // Use item[0] to get the first element if there's only one
        window.scrollTo(0, 0);
        setLoaded(true);
      } catch (error) {
        console.error("Error!", error);
      }
    };
  
    fetchItem();
  }, [id]);

  if (loaded === false) {
    return (
      <LoadingSpinner />
    )
  } else {
    return (
      <>
        <div className="item-detail-container">
          {selectedItem ? (
            <>
              <ItemDetail
                key={selectedItem.id}
                id={selectedItem.id}
                img={selectedItem.imgUrl}
                title={selectedItem.title}
                universe={selectedItem.universe}
                price={selectedItem.price}
                about={selectedItem.about}
                stock={10} />
              <h2>Other products you may be interested in</h2>
              <RelatedProductsContainer
                id={selectedItem.id}
                universe={selectedItem.universe}
                category={selectedItem.category}
              />
            </>
          ) : <div>Sorry, that item was not found</div>}
        </div>
      </>

    );
  }
}


export default ItemDetailContainer;
