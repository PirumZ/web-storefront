import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/Landing";
import CartPage from "./Pages/Cart";
import ProductPage from "./Pages/Products";
import CheckoutPage from "./Pages/Checkout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavBar";

/*App function depicting the movielist to the screen utilizing BS
for responsiveness, along with some imports from BS.*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
