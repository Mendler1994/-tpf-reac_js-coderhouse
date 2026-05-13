import { Link } from "react-router-dom"

function Item({ product }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{product.title}</h3>

      <p>Precio: ${product.price}</p>

      <p>Stock: {product.stock}</p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  )
}

export default Item