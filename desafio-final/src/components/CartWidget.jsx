import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import "../styles/CartWidget.css"

function CartWidget() {
  const { cart } = useContext(CartContext)
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  return (
    <Link
      to="/cart"
      className="cart-widget">
      🛒 Ver carrito
      {totalQuantity > 0 && (
        <span className="cart-badge">
          ({totalQuantity})
        </span>
      )}
    </Link>
  )
}

export default CartWidget