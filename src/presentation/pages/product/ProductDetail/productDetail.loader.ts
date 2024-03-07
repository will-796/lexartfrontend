import { getProductById } from "@data/products/getProductById"
import { LoaderFunctionArgs } from "react-router-dom"


export const productDetailLoader = async ({params}: LoaderFunctionArgs) => {


  const products = await getProductById(params.id)

  return products
}