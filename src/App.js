import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Drink from "./Drink";
import Chips from "./Chips";
import Nuggets from "./Nuggets";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/drink">
          <Drink />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/nuggets">
          <Nuggets />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
