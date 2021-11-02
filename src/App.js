import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <ItemListContainer />
        </Route>

        <Route path="/:category/" exact>
          <ItemListContainer />
        </Route>

        <Route path="/:category/:universe" exact>
          <ItemListContainer />
        </Route>
        
        <Route path="/:category/:universe/:id" exact>
          <ItemDetailContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
