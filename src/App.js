import { CustomProvider } from "./context/CartContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutContainer from "./components/CheckoutContainer";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer />
          </Route>
          <Route path="/categories/:category/" exact>
            <ItemListContainer  />
          </Route>
          <Route path="/item/:id" >
            <ItemDetailContainer />
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
