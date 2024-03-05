export class ForbiddenAccessError extends Error {
  constructor() {
    super('Usuário não disponível no domínio informado, entre em contato com o administrador.')
    this.name = 'ForbiddenAccessError'
  }
}