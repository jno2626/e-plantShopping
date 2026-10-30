import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs";

import { useSelector } from "react-redux";

import "./App.css";

import ProductList from "./ProductList";

import CartItem from "./CartItem";



function App() {

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(

      (total, item) => total + item.quantity,

      0

  );

  return (

      <div>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route

              path="/"

              element={

                <div className="hero">

                  <div className="hero-content">

                    <h1>Paradise Nursery</h1>

                    <p>

                      Bring nature home with our beautiful houseplants.

                    </p>

                    <Link to="/plants" className="start-button">

                      Get Started

                    </Link>

                  </div>

                </div>

              }

          />

          <Route path="/plants" element={<ProductList />} />

          <Route path="/cart" element={<CartItem />} />

        </Routes>

      </div>

  );

}

export default App;
