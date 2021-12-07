import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import firestore from "../firebase";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import RelatedProductsContainer from "./RelatedProductsContainer";

const ItemDetailContainer = () => {

  const [selectedItem, setSelectedItem] = useState(undefined);
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    (() => {

      firestore
        .collection("products")
        .where("__name__", "==", id)
        .get()
        .then((querySnapshot) => {
          const item = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setSelectedItem(...item);
          window.scrollTo(0, 0);
          setLoaded(true);
        })
        .catch(() => {
          console.error("Error!");
        })
    })()

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
