import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import ReceivingOrders from "./components/ReceivingOrders";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={OrderForm} />
        <Route path="/receiving-orders" component={ReceivingOrders} />
      </Switch>
    </Router>
  );
}

export default App;
