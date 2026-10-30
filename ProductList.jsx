import { useDispatch, useSelector } from "react-redux"; import { addToCart } from "./CartSlice"; import "./ProductList.css";
const categories = [ { name: "Air Purifying Plants", plants: [ { id: 1, name: "Snake Plant", price: 25, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" }, { id: 2, name: "Peace Lily", price: 30, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" }, { id: 3, name: "Spider Plant", price: 20, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" }, { id: 4, name: "Aloe Vera", price: 18, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }, { id: 5, name: "Areca Palm", price: 35, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" }, { id: 6, name: "Rubber Plant", price: 40, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" }, ], }, { name: "Aromatic Plants", plants: [ { id: 7, name: "Lavender", price: 22, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400" }, { id: 8, name: "Rosemary", price: 20, image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400" }, { id: 9, name: "Mint", price: 15, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400" }, { id: 10, name: "Basil", price: 17, image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400" }, { id: 11, name: "Jasmine", price: 28, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" }, { id: 12, name: "Lemon Balm", price: 19, image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400" }, ], }, { name: "Decorative Plants", plants: [ { id: 13, name: "Monstera", price: 45, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" }, { id: 14, name: "Calathea", price: 38, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }, { id: 15, name: "Fiddle Leaf Fig", price: 55, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" }, { id: 16, name: "Pothos", price: 24, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" }, { id: 17, name: "ZZ Plant", price: 32, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }, { id: 18, name: "Bird of Paradise", price: 60, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" }, ], }, ];
function ProductList() { const dispatch = useDispatch(); const cartItems = useSelector((state) => state.cart.items);
    return ( <div className="product-page"> <nav className="navbar"> <h2>Paradise Nursery</h2> <div className="nav-links"> <a href="/about">About Us</a> <a href="/">Home</a> <a href="/plants">Plants</a> <a href="/cart"> Cart 🛒 ({cartItems.reduce((total, item) => total + item.quantity, 0)}) </a> </div> </nav>
            <h1>Our Houseplants</h1>

            {categories.map((category) => (
                <section className="category" key={category.name}>
                    <h2>{category.name}</h2>

                    <div className="plant-grid">
                        {category.plants.map((plant) => {
                            const added = cartItems.some(
                                (item) => item.id === plant.id
                            );

                            return (
                                <div className="plant-card" key={plant.id}>
                                    <img src={plant.image} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                    <p>${plant.price}</p>

                                    <button
                                        disabled={added}
                                        onClick={() => dispatch(addToCart(plant))}
                                    >
                                        {added ? "Added to Cart" : "Add to Cart"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>
    ); }
export default ProductList;
