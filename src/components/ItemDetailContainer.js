import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import firestore from "../firebase";
import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";
import LoadingSpinner from "./LoadingSpinner";

const ItemDetailContainer = () => {

  const [selectedItem, setSelectedItem] = useState(undefined);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [itemNotFound, setItemNotFound] = useState(false);

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
          setLoading(false);
        })
        .catch(() => {
          console.error("Error!");
          setItemNotFound(true);
          setLoading(false);
        })
    })()

  }, [id]);

  if (loading) {
    return <LoadingSpinner />
  } else {
    if (selectedItem === undefined) {
      return (
        <>
          <div>Sorry, that item was not found</div>
          <h2>This are other products you may be interested in</h2>
          <ItemListContainer
          />
        </>
      )
    } else {
      return (
        <>
          <div className="item-detail-container">
            <ItemDetail
              key={selectedItem.id}
              id={selectedItem.id}
              img={selectedItem.imgUrl}
              title={selectedItem.title}
              universe={selectedItem.universe}
              price={selectedItem.price}
              about={selectedItem.about}
              stock={10} />
          </div>
          <h2>Other products you may be interested in</h2>
          <ItemListContainer
            id={selectedItem.id}
            universe={selectedItem.universe}
            category={selectedItem.category}
          />
        </>
      );
    }
  }
};

export default ItemDetailContainer;
