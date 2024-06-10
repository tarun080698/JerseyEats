import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "pages/Home/Home";
import Cart from "pages/cart/Cart";
import PlaceOrder from "pages/placeOrder/PlaceOrder";
import Footer from "components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
