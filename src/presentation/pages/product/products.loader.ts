import { getAllProducts } from "@data/products/getAllProducts"


export const productsLoader = async () => {


  const products = await getAllProducts()

  return products
}