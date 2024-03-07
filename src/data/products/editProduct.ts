import { HttpStatusCode } from "@data/protocols"
import { UnexpectedError } from "@domain/errors"
import { Product } from "@domain/models/product"
import { httpRequestWithAuth } from "@main/decorators"
import { redirect } from "react-router-dom"

export const editProduct = async (promoterData: Product, teamId: string) => {
  const httpResponse = await httpRequestWithAuth({
    url: `/products/${teamId}/`,
    method: 'PUT',
    data: promoterData
  })

  switch (httpResponse.statusCode) {
    case HttpStatusCode.ok: return httpResponse.body
    case HttpStatusCode.unauthorized: return redirect('/login')
    default: throw new UnexpectedError()
  }
}