import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Home komponentiniz
import OrderForm from './components/OrderForm'; // Sipariş formu komponentiniz
import OrderConfirmation from './components/OrderConfirmation'; // Sipariş onayı komponentiniz
import './App.css'; // Stil dosyanız

function App() {
  return (
    <Router>
      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={<Home />} />

        {/* Sipariş Formu */}
        <Route path="/order" element={<OrderForm />} />

        {/* Sipariş Onayı */}
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
