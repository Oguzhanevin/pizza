import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import ReceivingOrders from "./components/ReceivingOrders";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <OrderForm />
        </Route>
        <Route path="/thank-you">
          <ReceivingOrders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;