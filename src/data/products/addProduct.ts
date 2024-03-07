import { HttpStatusCode } from "@data/protocols"
import { UnexpectedError } from "@domain/errors"
import { Product } from "@domain/models/product"
import { httpRequestWithAuth } from "@main/decorators"
import { redirect } from "react-router-dom"

export const addProduct = async (userAccountData: Product): Promise<Product | Response> => {
  const httpResponse = await httpRequestWithAuth({
    url: '/products/create',
    method: 'post',
    data: userAccountData
  })

  switch (httpResponse.statusCode) {
    case HttpStatusCode.created: return httpResponse.body
    case HttpStatusCode.unauthorized: return redirect('/login')
    default: throw new UnexpectedError()
  }
}