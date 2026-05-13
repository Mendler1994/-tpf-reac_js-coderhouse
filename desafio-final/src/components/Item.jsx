import { Link } from "react-router-dom"
import "../styles/Item.css"

function Item({ product }) {
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

        <Link
          to={`/item/${product.id}`}
          className="item-link"
        >
          Ver detalle
        </Link>

      </div>

    </div>
  )
}

export default Item