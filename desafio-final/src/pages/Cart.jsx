import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../styles/Cart.css"
import { Link } from "react-router-dom"

function Cart() {
  const {
    cart,
    removeItem,
    clearCart,
    total
  } = useContext(CartContext)

  if (cart.length === 0) {
    return <h2>El carrito está vacío 🛒</h2>
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

            <p>Cantidad: {item.quantity}</p>

            <p>Precio unitario: ${item.price}</p>

            <p>
              Subtotal:
              ${item.price * item.quantity}
            </p>

          </div>

          <button onClick={() => removeItem(item.id)}>
            Eliminar
          </button>

        </div>

      ))}

      <div className="cart-total">
        Total: ${total}
      </div>

      <div className="cart-buttons">

        <button onClick={clearCart}>
          Vaciar carrito
        </button>

      </div>

      <Link to="/checkout">
        <button>
          Terminar compra
        </button>
      </Link>

    </div>
  )
}

export default Cart