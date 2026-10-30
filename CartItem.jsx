import { useDispatch, useSelector } from "react-redux"; import { increaseQuantity, decreaseQuantity, removeFromCart, } from "./CartSlice"; import "./cartItem.css";
function CartItem() { const dispatch = useDispatch(); const cartItems = useSelector((state) => state.cart.items);
    const total = cartItems.reduce( (sum, item) => sum + item.price * item.quantity, 0 );
    return ( <div className="cart-page"> <nav className="navbar"> <h2>Paradise Nursery</h2>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/plants">Plants</a>
                <a href="/cart">Cart 🛒</a>
            </div>
        </nav>

            <h1>Your Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <a href="/plants">Continue Shopping</a>
                </div>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} />

                            <div className="cart-info">
                                <h3>{item.name}</h3>
                                <p>Unit Price: ${item.price}</p>
                                <p>
                                    Total: ${(item.price * item.quantity).toFixed(2)}
                                </p>

                                <div className="quantity-controls">
                                    <button
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() => dispatch(increaseQuantity(item.id))}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className="delete-button"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    <h2 className="cart-total">
                        Total Amount: ${total.toFixed(2)}
                    </h2>

                    <button
                        className="checkout-button"
                        onClick={() => alert("Coming Soon")}
                    >
                        Checkout
                    </button>

                    <a className="continue-shopping" href="/plants">
                        Continue Shopping
                    </a>
                </>
            )}
        </div>
    ); }
export default CartItem;
