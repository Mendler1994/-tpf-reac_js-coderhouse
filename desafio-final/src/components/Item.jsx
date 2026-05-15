import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../styles/Item.css"

const {
  addItem,
  getProductQuantity
} = useContext(CartContext)
const quantityInCart =
  getProductQuantity(product.id)
const availableStock =
  product.stock - quantityInCart

function Item({ product }) {

  const { addItem } = useContext(CartContext)

  return (
    <div className="item-card">

      <img
        src={product.img}
        alt={product.title}
      />

      <div className="item-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>
          Stock disponible: {availableStock}
        </p>

        <div className="item-buttons">
          <Link
            to={`/item/${product.id}`}
            className="item-link"
          >
            Ver producto
          </Link>

          <button
            className="quick-add-btn"
            disabled={availableStock === 0}
            
            onClick={() => {
              if (availableStock > 0) {
                addItem(product, 1)
              }
            }}
          >
            {availableStock > 0
              ? "Añadir al carrito"
              : "Sin stock"}
          </button>

        </div>
      </div>

    </div>
  )
}

export default Item