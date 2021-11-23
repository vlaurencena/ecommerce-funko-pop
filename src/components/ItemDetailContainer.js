import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import firestore from "../firebase";
import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";

const ItemDetailContainer = () => {

  const [selectedItem, setSelectedItem] = useState(undefined);
  const { id } = useParams();

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
        })
        .catch(() => {
          console.error("Error!");
        })
    })()

  }, [id]);

  if (selectedItem === undefined) {
    return <div className="loading">Loading Item...</div>
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
};

export default ItemDetailContainer;
