import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
