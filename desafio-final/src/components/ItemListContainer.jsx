import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../firebase/firestore"
import ItemList from "./ItemList"
import Loader from "./Loader"

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((response) => {
        if (categoryId) {
          const filteredProducts = response.filter(
            product => product.category === categoryId)
          setProducts(filteredProducts)

        } else {
          setProducts(response)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  if (loading) {
    return <Loader />
  }
  return (
    <div>
      <h2>Productos</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer