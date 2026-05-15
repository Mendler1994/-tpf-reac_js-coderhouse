import { useState } from "react"
import "../styles/ItemCount.css"

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1)
  const increase = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button
          onClick={decrease}
          disabled={count === 1}
        >
          -
        </button>

        <span>{count}</span>

        <button
          onClick={increase}
          disabled={count === stock}
        >
          +
        </button>

      </div>

      <button
        className="add-cart-button"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock > 0
          ? "Agregar al carrito"
          : "Sin stock"}
      </button>
    </div>
  )
}

export default ItemCount