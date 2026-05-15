import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import "../styles/Cart.css"

function Cart() {
  const {
    cart,
    removeItem,
    clearCart,
    total,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <h2 style={{ padding: "40px" }}>
        El carrito está vacío 🛒
      </h2>
    )
  }

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      {cart.map(item => (

        <div
          key={item.id}
          className="cart-item"
        >

          <img
            src={item.img}
            alt={item.title}
          />

          <div className="cart-info">
            <h3>{item.title}</h3>
            <p>
              Precio unitario:
              ${item.price}
            </p>

            <div className="quantity-controls">
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity === 1}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                disabled={item.quantity === item.stock}
              >
                +
              </button>
            </div>

            <p>
              Stock disponible:
              {item.stock - item.quantity}
            </p>

            <p>
              Subtotal:
              ${item.price * item.quantity}
            </p>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeItem(item.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <div className="cart-total">
        Total: ${total}
      </div>

      <div className="cart-buttons">
        <button
          className="clear-cart-btn"
          onClick={clearCart}>
          Vaciar carrito
        </button>

        <Link to="/checkout">
          <button className="checkout-btn">
            Terminar compra
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Cart