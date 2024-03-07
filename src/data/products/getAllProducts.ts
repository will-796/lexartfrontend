
import { HttpStatusCode } from '@data/protocols'
import { UnexpectedError } from '@domain/errors'
import { httpRequestWithAuth } from '@main/decorators'
import { redirect } from 'react-router-dom'

export const getAllProducts = async () => {
  const httpResponse = await httpRequestWithAuth({
    method: 'get',
    headers: {
      'Content-Type': 'aplication/json'
    },
    url: '/products'
  })

  switch (httpResponse.statusCode) {
    case HttpStatusCode.ok: return httpResponse.body
    case HttpStatusCode.unauthorized: return redirect('/login')
    default: throw new UnexpectedError()
  }
}