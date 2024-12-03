import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import Information from "./components/Information";

function App() {
  const [sentData, setSentData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <OrderForm setSentData={setSentData} />
        </Route>
        <Route path="/information">
          <Information sentData={sentData} />
        </Route>
      </Switch>
    </Router>
  );
}
