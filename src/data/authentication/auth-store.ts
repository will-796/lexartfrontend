import { AuthParams } from '@domain/usecases'
import { create } from 'zustand'
import { authenticateUser } from './authenticate-user'
import { Session } from '@domain/models'

type AuthStore = {
  token: string | null
  session: Session | null
  userLocation: string | null
  signin: (authParams: AuthParams) => Promise<void>
  setUserLocation: (url: string) => void
  setSession: (sessionToken: string) => void
  destroySession: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  session: null,
  userLocation: null,
  signin: async (authParams: AuthParams) => {
    const authPayload = await authenticateUser(authParams)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { expiry, ...userSession } = authPayload

    sessionStorage.setItem('sessionToken', JSON.stringify(userSession))

    set({
      token: userSession.token,
      session: userSession
    })
  },
  setUserLocation: (url: string) => set({ userLocation: url }),
  setSession: async (sessionToken: string) => {
    const session = JSON.parse(sessionToken) as Session

    set({
      token: session.token,
      session
    })
  },
  destroySession: () => {
    sessionStorage.removeItem('sessionToken')

    set({
      token: null,
      session: null
    })
  }
}))