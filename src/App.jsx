import "./App.css";
import Home from "./components/Home";
import { Route, Link } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import OrderReceived from "./components/ReceivingOrders";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function App() {
  const [sentData, setSentData] = useState(null);
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/pizza">
        <OrderForm setSentData={setSentData} />
      </Route>
      <Route path="/summary">
        <OrderReceived sentData={sentData} />
      </Route>
    </>
  );
}

export default App;