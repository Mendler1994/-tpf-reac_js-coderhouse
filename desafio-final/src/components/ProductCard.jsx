function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ProductCard