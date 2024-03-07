//loader de autenticacion de usuario
import { useAuthStore } from '@data/authentication'
import { authorizeUser } from '@data/authentication/authorize-user'
import { LoaderFunctionArgs, redirect } from 'react-router-dom'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  useAuthStore.getState().setUserLocation(url.href)
  const session = authorizeUser()

  if (!session) {
    return redirect('/login')
  }

  return null
}
