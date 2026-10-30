import { useDispatch, useSelector } from "react-redux"; import { removeItem, updateQuantity } from "./CartSlice"; import "./CartItem.css";
function CartItem() { const dispatch = useDispatch(); const cartItems = useSelector((state) => state.cart.items);
const cartCount = cartItems.reduce( (total, item) => total + item.quantity, 0 );
const totalAmount = cartItems.reduce( (total, item) => total + item.cost * item.quantity, 0 );
const handleIncrement = (item) => { dispatch( updateQuantity({ name: item.name, quantity: item.quantity + 1, }) ); };
const handleDecrement = (item) => { dispatch( updateQuantity({ name: item.name, quantity: item.quantity - 1, }) ); };
const handleRemove = (item) => { dispatch(removeItem(item.name)); };
return ( <div className="cart-container"> <nav className="navbar"> <h2>Paradise Nursery</h2> <div className="nav-links"> <a href="/">Home</a> <a href="/plants">Plants</a> <a href="/cart"> Cart 🛒 <span id="cart_quantity_count">{cartCount}</span> </a> </div> </nav>
  <h1>Your Shopping Cart</h1>

  {cartItems.length === 0 ? (
    <div className="empty-cart">
      <p>Your cart is empty.</p>
      <button onClick={() => (window.location.href = "/plants")}>
        Continue Shopping
      </button>
    </div>
  ) : (
    <>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.cost}</p>
            <p>
              Total: ${(item.cost * item.quantity).toFixed(2)}
            </p>

            <div className="quantity-controls">
              <button onClick={() => handleDecrement(item)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => handleIncrement(item)}>
                +
              </button>
            </div>

            <button
              className="cart-item-delete"
              onClick={() => handleRemove(item)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <h2 className="cart-total">
        Total Amount: ${totalAmount.toFixed(2)}
      </h2>

      <button
        className="checkout-button"
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <button
        className="continue-shopping"
        onClick={() => (window.location.href = "/plants")}
      >
        Continue Shopping
      </button>
    </>
  )}
</div>
); }
export default CartItem;
