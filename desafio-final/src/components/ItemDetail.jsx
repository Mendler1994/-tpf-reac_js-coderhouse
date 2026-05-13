import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

function ItemDetail({ product }) {
  const [added, setAdded] = useState(false)

  const { addItem } = useContext(CartContext)

  const handleAddToCart = (quantity) => {
    addItem(product, quantity)

    setAdded(true)
  }

  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>{product.title}</h2>

      <p>Precio: ${product.price}</p>

      <p>Stock: {product.stock}</p>

      {!added ? (
        <ItemCount
          stock={product.stock}
          onAdd={handleAddToCart}
        />
      ) : (
        <h3>Producto agregado al carrito ✅</h3>
      )}
    </div>
  )
}

export default ItemDetail