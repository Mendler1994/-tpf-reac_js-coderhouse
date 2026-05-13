import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (product, quantity) => {
    const newItem = {
      ...product,
      quantity
    }

    setCart([...cart, newItem])
  }

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  )
}