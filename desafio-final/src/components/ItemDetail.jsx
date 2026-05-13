import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import "../styles/ItemDetail.css"

function ItemDetail({ product }) {
  const [added, setAdded] = useState(false)

  const { addItem } = useContext(CartContext)

  const handleAddToCart = (quantity) => {
    addItem(product, quantity)

    setAdded(true)
  }

  return (
    <div className="detail-container">

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

        {!added ? (
          <ItemCount
            stock={product.stock}
            onAdd={handleAddToCart}
          />
        ) : (
          <p className="added-message">
            Producto agregado al carrito ✅
          </p>
        )}

      </div>

    </div>
  )
}

export default ItemDetail