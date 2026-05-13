import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productsData from "../data/products"
import ItemList from "./ItemList"

function ItemListContainer() {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {

      if (categoryId) {

        const filteredProducts = productsData.filter(
          product => product.category === categoryId
        )

        setProducts(filteredProducts)

      } else {

        setProducts(productsData)

      }

      setLoading(false)

    }, 1000)

    return () => clearTimeout(timer)

  }, [categoryId])

  if (loading) {
    return <h2>Cargando productos...</h2>
  }

  return (
    <div>
      <h2>Productos</h2>

      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer