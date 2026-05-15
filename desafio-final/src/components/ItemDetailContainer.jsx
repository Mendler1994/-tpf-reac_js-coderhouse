import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../firebase/firestore"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getProductById(id)
      .then((response) => {
        setProduct(response)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <Loader />
  }

  if (!product && !loading) {
    return (
      <h2>
        Producto no encontrado
      </h2>
    )
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer