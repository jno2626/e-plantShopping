import { useDispatch, useSelector } from "react-redux"; import { addItem } from "./CartSlice"; import "./ProductList.css";
const categories = [ { name: "Air Purifying Plants", plants: [ { name: "Snake Plant", cost: 25, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" }, { name: "Peace Lily", cost: 30, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" }, { name: "Spider Plant", cost: 20, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" }, { name: "Aloe Vera", cost: 18, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }, { name: "Areca Palm", cost: 35, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" }, { name: "Rubber Plant", cost: 40, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" }, ], }, { name: "Aromatic Plants", plants: [ { name: "Lavender", cost: 22, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400" }, { name: "Rosemary", cost: 20, image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400" }, { name: "Mint", cost: 15, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400" }, { name: "Basil", cost: 17, image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400" }, { name: "Jasmine", cost: 28, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" }, { name: "Lemon Balm", cost: 19, image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400" }, ], }, { name: "Decorative Plants", plants: [ { name: "Monstera", cost: 45, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" }, { name: "Calathea", cost: 38, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }, { name: "Fiddle Leaf Fig", cost: 55, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" }, { name: "Pothos", cost: 24, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" }, { name: "ZZ Plant", cost: 32, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }, { name: "Bird of Paradise", cost: 60, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" }, ], }, ];
function ProductList() { const dispatch = useDispatch(); const cartItems = useSelector((state) => state.cart.items);
const addedToCart = {}; cartItems.forEach((item) => { addedToCart[item.name] = true; });
const cartCount = cartItems.reduce( (total, item) => total + item.quantity, 0 );
return ( <div className="product-list"> <nav className="navbar"> <h2>Paradise Nursery</h2> <div className="nav-links"> <a href="/">Home</a> <a href="/plants">Plants</a> <a href="/cart"> Cart 🛒 <span id="cart_quantity_count">{cartCount}</span> </a> </div> </nav>
  <h1>Our Houseplants</h1>

  {categories.map((category) => (
    <section className="product-list" key={category.name}>
      <h2>{category.name}</h2>

      <div className="plant-grid">
        {category.plants.map((plant) => (
          <div className="plant-card" key={plant.name}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.cost}</p>

            <button
              disabled={!!addedToCart[plant.name]}
              onClick={() => dispatch(addItem(plant))}
            >
              {addedToCart[plant.name]
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </section>
  ))}
</div>
); }
export default ProductList;
