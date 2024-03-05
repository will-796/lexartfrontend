import { HttpStatusCode } from '@data/protocols'
import { ForbiddenAccessError, InvalidCredentialsError, UnexpectedError } from '@domain/errors'
import { AuthParams } from '@domain/usecases'
import { httpRequest } from '@infra/index'

export const authenticateUser = async (authParams: AuthParams) => {
  const httpResponse = await httpRequest({
    url: '/users/login',
    method: 'post',
    data: authParams
  })

  switch (httpResponse.statusCode) {
    case HttpStatusCode.ok: return httpResponse.body
    case HttpStatusCode.unauthorized: throw new InvalidCredentialsError('Usuário e/ou senha inválidos.')
    case HttpStatusCode.forbidden: throw new ForbiddenAccessError()
    default: throw new UnexpectedError()
  }
}