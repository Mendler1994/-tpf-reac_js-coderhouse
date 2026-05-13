import { createContext, useState } from "react"

export const CartContext = createContext()
export function CartProvider({ children }) {

  const [cart, setCart] = useState([])
  const addItem = (product, quantity) => {
    const existingProduct = cart.find(
      item => item.id === product.id
    )

    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity
          }
        }
        return item
      })

      setCart(updatedCart)

    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity
        }
      ])
    }
  }

  const removeItem = (id) => {
    const filteredCart = cart.filter(
      item => item.id !== id
    )
    setCart(filteredCart)
  }

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item => {

      if (item.id === id) {
        if (item.quantity < item.stock) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
      }

      return item
    })
    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
      }
      return item
    })

    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}