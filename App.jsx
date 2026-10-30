import { useState } from "react"; import ProductList from "./ProductList"; import CartItem from "./CartItem"; import AboutUs from "./AboutUs"; import "./App.css";
function App() { const [showProductList, setShowProductList] = useState(false); const [showCart, setShowCart] = useState(false);
if (showCart) { return <CartItem />; }
if (showProductList) { return <ProductList />; }
return ( <div className="landing-page"> <div className="background-image"> <div className="landing-content"> <h1>Welcome to Paradise Nursery</h1> <p> Bring nature home with our beautiful collection of indoor plants. </p>
      <button
        onClick={() => setShowProductList(true)}
        className="get-started-button"
      >
        Get Started
      </button>

      <button
        onClick={() => setShowCart(true)}
        className="get-started-button"
      >
        Cart
      </button>

      <AboutUs />
    </div>
  </div>
</div>
); }
export default App;
