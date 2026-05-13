import { useContext } from "react"

import { CartContext } from "../context/CartContext"

function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <div>
      <h2>Carrito</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <p>Cantidad: {item.quantity}</p>

          <p>Precio: ${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart