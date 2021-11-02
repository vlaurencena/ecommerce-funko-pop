import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import products from "./products";
import { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer";


const ItemDetailContainer = () => {

  const [selectedItem, setSelectedItem] = useState(undefined);
  const { id } = useParams();

  const findItem = () => {
    return products.find((item) => item.id === id);
  }

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(findItem())
      }, 2000)
    })
  }

  useEffect(() => {
    getItem()
      .then(function (item) {
        setSelectedItem(item);
      });
  }, [])

  const SlugToString = (slug) => {
    let string = slug.replace(/-/g, ' ');
    return string;
  }

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
        <h2>More from the <span className="capitalize">{SlugToString(selectedItem.universe)}</span> universe</h2>
        <ItemListContainer id={selectedItem.id} />
      </>
    );
  }
};

export default ItemDetailContainer;
