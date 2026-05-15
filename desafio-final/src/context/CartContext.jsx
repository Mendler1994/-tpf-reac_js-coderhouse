import {
  createContext,
  useState,
  useEffect
} from "react"

export const CartContext = createContext()
export function CartProvider({ children }) {

const [cart, setCart] = useState(() => {
  const savedCart =
    localStorage.getItem("cart")
  return savedCart
    ? JSON.parse(savedCart)
    : []
})

useEffect(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  )
}, [cart])

  const addItem = (product, quantity) => {
    const existingProduct = cart.find(
      item => item.id === product.id
    )

    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: Math.min(
              item.quantity + quantity,
              item.stock
            )
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

  
  const getProductQuantity = (id) => {
    const productInCart = cart.find(
      item => item.id === id)
    return productInCart
      ? productInCart.quantity
      : 0
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
        getProductQuantity,
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