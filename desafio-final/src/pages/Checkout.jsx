import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { createOrder } from "../firebase/firestore"
import "../styles/Checkout.css"

function Checkout() {
  const {
    cart,
    total,
    clearCart
  } = useContext(CartContext)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)

  if (cart.length === 0 && !orderId) {
    return (
      <div className="checkout-container">
        <h2>
          No hay productos en el carrito 🛒
        </h2>
      </div>
    )
  }

  const validateForm = () => {
    const newErrors = {}
    if (!name.trim()) {
      newErrors.name =
        "Ingresá tu nombre"
    }

    if (!phone.trim()) {
      newErrors.phone =
        "Ingresá tu teléfono"
    }

    if (!email.trim()) {
      newErrors.email =
        "Ingresá tu email"

    } else if (
      !/\S+@\S+\.\S+/.test(email)
    ) {newErrors.email =
      "Email inválido"}

    setErrors(newErrors)

    return Object.keys(newErrors)
      .length === 0
  }

  const handleSubmit = async (event) => {

    event.preventDefault()
    const isValid = validateForm()
    if (!isValid) return
    setLoading(true)

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

    const id = await createOrder(order)

    if (!id) {
      alert(
        "Error al generar la orden"
      )
      setLoading(false)
      return
    }
    setOrderId(id)
    setLoading(false)
    clearCart()
  }

  if (orderId) {
    return (
      <div className="checkout-container">
        <h2>
          ¡Gracias por tu compra! 🎉
        </h2>

        <p>
          Tu ID de orden es:
        </p>

        <strong>{orderId}</strong>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        {errors.name && (
          <p className="error-message">
            {errors.name}
          </p>
        )}

        <input
          type="text"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        {errors.phone && (
          <p className="error-message">
            {errors.phone}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {errors.email && (
          <p className="error-message">
            {errors.email}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
        >

          {loading
            ? "Procesando compra..."
            : "Finalizar compra"}

        </button>
      </form>
    </div>
  )
}

export default Checkout