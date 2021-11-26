import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { CustomProvider } from "./context/CartContext";
import CheckoutContainer from "./components/CheckoutContainer";
import ThankYou from "./components/ThankYou";

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
            <ItemListContainer sortBy={true} useUniverseFilter={true}/>
          </Route>

          <Route path="/categories/:category/" exact>
            <ItemListContainer sortBy={true} useUniverseFilter={true}/>
          </Route>

          <Route path="/item/:id" exact>
            <ItemDetailContainer useUniverseFilter={false}/>
          </Route>
          
          <Route path="/cart" >
            <Cart />
          </Route>
          <Route path="/checkout" >
            <CheckoutContainer />
          </Route>
          <Route path="/thank-you" >
            <ThankYou />
          </Route>
        </Switch>
        <Footer />
      </CustomProvider>
    </BrowserRouter>
  );
};

export default App;
