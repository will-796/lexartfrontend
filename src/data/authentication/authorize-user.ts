import { useAuthStore } from './auth-store'

export const authorizeUser = () => {
  const session = useAuthStore.getState().session

  if (session) return session

  const sessionToken = sessionStorage.getItem('sessionToken')

  if (sessionToken) {
    useAuthStore.getState().setSession(sessionToken)
    const session = useAuthStore.getState().session

    return session
  }

  return null
}