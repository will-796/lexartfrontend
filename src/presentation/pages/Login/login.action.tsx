import { useAuthStore } from '@data/authentication/auth-store'
import { AuthParams } from '@domain/usecases'
import { ActionFunctionArgs, redirect } from 'react-router-dom'


export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const authParams = Object.fromEntries(formData)
  
  try {
    await useAuthStore.getState().signin(authParams as AuthParams)
  } catch (err) {
    if (err instanceof Error){
      return {
        message: err.message
      }
    }
  }

  const userLocation = useAuthStore.getState()?.userLocation || '/'

  return redirect(userLocation)
}