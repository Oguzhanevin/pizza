import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import ReceivingOrders from "./components/ReceivingOrders";

function App() {
  const [sentData, setSentData] = useState(null);

  return (
    <Router>
        <Route exact path="/" component={Home} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<OrderForm setSentData={setSentData} />} />
        <Route path="/receiving-orders" element={<ReceivingOrders sentData={sentData} />} />
      </Routes>
    </Router>
  );
}

export default App;
