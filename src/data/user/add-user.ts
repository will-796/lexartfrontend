import { HttpStatusCode } from '@data/protocols'
import { UnexpectedError } from '@domain/errors'
import { User } from '@domain/models'
import { httpRequestWithAuth } from '@main/decorators'
import { redirect } from 'react-router-dom'

export const addUser = async (userAccountData: User): Promise<User | Response> => {
  const httpResponse = await httpRequestWithAuth({
    url: '/users/create',
    method: 'post',
    data: userAccountData
  })

  switch (httpResponse.statusCode) {
    case HttpStatusCode.created: return httpResponse.body
    case HttpStatusCode.unauthorized: return redirect('/login')
    default: throw new UnexpectedError()
  }
}