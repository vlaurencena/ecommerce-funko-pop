import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { CustomProvider } from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/all-products/" exact>
            <ItemListContainer />
          </Route>

          <Route path="/category/:categoryId/" exact>
            <ItemListContainer />
          </Route>

          <Route path="/category/:categoryId/:universeId/" exact>
            <ItemListContainer />
          </Route>

          <Route path="/item/:id" exact>
            <ItemDetailContainer />
          </Route>
          <Route path="/cart" >
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </CustomProvider>
    </BrowserRouter>
  );
};

export default App;
