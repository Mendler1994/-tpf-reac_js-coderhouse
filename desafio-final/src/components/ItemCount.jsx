import { useState } from "react"

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
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={decrease}>-</button>

        <p>{count}</p>

        <button onClick={increase}>+</button>
      </div>

      <button onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount