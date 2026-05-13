import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productsData from "../data/products"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)

  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {

      const foundProduct = productsData.find(
        item => item.id === Number(id)
      )

      setProduct(foundProduct)

      setLoading(false)

    }, 1000)

    return () => clearTimeout(timer)

  }, [id])

  if (loading) {
    return <h2>Cargando detalle...</h2>
  }

  if (!product) {
    return <h2>Producto no encontrado</h2>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer