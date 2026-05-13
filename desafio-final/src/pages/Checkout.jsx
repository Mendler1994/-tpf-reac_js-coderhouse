import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderId] = useState(null)
  const handleSubmit = (event) => {
    event.preventDefault()

    const order = {
      buyer: {
        name,
        phone,
        email
      },

      items: cart,
      total,
      date: new Date()
    }

    console.log(order)

    const fakeOrderId = Math.floor(Math.random() * 100000)

    setOrderId(fakeOrderId)
    clearCart()
  }

  if (orderId) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Compra realizada ✅</h2>
        <h3>ID de la orden:</h3>
        <p>{orderId}</p>
      </div>
    )
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "400px"
        }}
      >

        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">
          Finalizar compra
        </button>

      </form>

    </div>
  )
}

export default Checkout