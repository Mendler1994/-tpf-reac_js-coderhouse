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
    <div className="counter-container">
      <div className="counter-controls">
        <button onClick={decrease}>
          -
        </button>

        <span>{count}</span>

        <button onClick={increase}>
          +
        </button>
      </div>

      <button
        className="add-cart-button"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount