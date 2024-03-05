import { useAuthStore } from './auth-store'

export const logoff = () => {
  useAuthStore.getState().destroySession()
}