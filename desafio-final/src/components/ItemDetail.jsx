import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import Toast from "./Toast"
import { CartContext } from "../context/CartContext"
import "../styles/ItemDetail.css"

function ItemDetail({ product }) {
  const [showToast, setShowToast] = useState(false)
  const { addItem } = useContext(CartContext)
  const handleAddToCart = (quantity) => {
    addItem(product, quantity)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 2000)
  }

  return (
    <div className="detail-container">

      {showToast && (
        <Toast message="Producto agregado al carrito 🛒" />
      )}

      <img
        src={product.img}
        alt={product.title}
        className="detail-image"
      />

      <div className="detail-info">

        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="detail-price">
          ${product.price}
        </p>

        <p>
          Stock disponible: {product.stock}
        </p>

        <ItemCount
          stock={product.stock}
          onAdd={handleAddToCart}
        />
      </div>
    </div>
  )
}

export default ItemDetail