import products from "./products"

export const getProducts = () => {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(products)
    }, 1000)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {

    setTimeout(() => {
      const product = products.find(
        item => item.id === Number(id)
      )
      resolve(product)
    }, 1000)
  })
}