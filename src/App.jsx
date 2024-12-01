import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
