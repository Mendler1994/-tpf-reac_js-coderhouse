import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext }
from "../context/CartContext"

function Item({ product }) {
  const {
    addItem,
    getProductQuantity
  } = useContext(CartContext)

  return (
    <div className="item-card">

      <img
        src={product.img}
        alt={product.title}
      />

      <div className="item-info">

        <h3>{product.title}</h3>
        <p>{product.description}</p>

        <p>
          Precio: ${product.price}
        </p>

        <p>
          Stock: {product.stock}
        </p>

        <div className="item-buttons">

          <Link
            to={`/item/${product.id}`}
            className="item-link">
            Ver producto
          </Link>

          <button
            className="quick-add-btn"
            onClick={() =>
              addItem(product, 1)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item