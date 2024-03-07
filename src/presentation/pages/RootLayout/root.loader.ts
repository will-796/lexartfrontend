//loader de autenticacion de usuario
import { authorizeUser } from '@data/authentication/authorize-user'
import { redirect } from 'react-router-dom'

export const loader = async () => {

  const session = authorizeUser()

  if (!session) {
    return redirect('/login')
  }

  return null
}
