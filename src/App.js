import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";

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

        <Route path="/all-products/:category/" exact>
          <ItemListContainer />
        </Route>

        <Route path="/all-products/:category/:universe/" exact>
          <ItemListContainer />
        </Route>

        <Route path="/all-products/:category/:universe/:id" exact>
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
