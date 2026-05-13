import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function CartWidget() {
  const { cart } = useContext(CartContext)

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  return (
    <Link to="/cart" className="cart-widget">
      🛒 {totalQuantity}
    </Link>
  )
}

export default CartWidget