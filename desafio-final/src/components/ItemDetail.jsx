import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import ToastContainer from "./ToastContainer"
import { CartContext } from "../context/CartContext"
import "../styles/ItemDetail.css"

function ItemDetail({ product }) {

  const {
    addItem,
    getProductQuantity
  } = useContext(CartContext)

  const [toasts, setToasts] = useState([])

  const quantityInCart =
    getProductQuantity(product.id)

  const availableStock =
    product.stock - quantityInCart

  const handleAddToCart = (quantity) => {
    addItem(product, quantity)

    const newToast = {
      id: Date.now(),
      message: "Producto agregado al carrito 🛒"
    }

    setToasts(prev => [
      ...prev,
      newToast
    ])

    setTimeout(() => {
      setToasts(prev =>
        prev.filter(
          toast => toast.id !== newToast.id
        )
      )
    }, 2000)

  }

  return (
    <div className="detail-container">

      <img
        className="detail-image"
        src={product.img}
        alt={product.title}
      />

      <div className="detail-info">

        <h2>{product.title}</h2>
        <p>{product.description}</p>

        <p className="detail-price">
          ${product.price}
        </p>

        <p>
          Stock disponible:
          {availableStock}
        </p>

        <ItemCount
          stock={availableStock}
          onAdd={handleAddToCart}
        />

        <Link to="/cart">
          <button className="add-cart-button">
            Ver carrito
          </button>
        </Link>

      </div>

      <ToastContainer toasts={toasts} />

    </div>
  )
}

export default ItemDetail