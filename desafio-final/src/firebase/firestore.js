import {
  collection,
  getDocs,
  getDoc,
  doc
} from "firebase/firestore"

import { db } from "./firebaseConfig"

export const getProducts = async () => {

  try {
    const productsRef = collection(db, "products")
    const snapshot = await getDocs(productsRef)
    const products = snapshot.docs.map((item) => {
      return {
        id: item.id,
        ...item.data()
      }
    })

    console.log(products)
    return products

  } catch (error) {
    console.log(error)
    return []

  }
}

export const getProductById = async (id) => {

  try {
    const productRef = doc(db, "products", id)
    const snapshot = await getDoc(productRef)

    return {
      id: snapshot.id,
      ...snapshot.data()
    }

  } catch (error) {
    console.log(error)
    return null
  }
}