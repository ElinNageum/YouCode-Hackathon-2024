import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      <div>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>${item.price} x {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="total-price">
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
