import { AxiosRequestConfig } from 'axios'
import { httpRequest } from '../../infra/http/axios-http-client'
import { useAuthStore } from '@data/authentication'

export const httpRequestWithAuth = (data: AxiosRequestConfig) => {
  const accessToken = useAuthStore.getState().token

  const headersWithAuth = {
    ...(data.headers || {}),
    Authorization: accessToken,
  }
  return httpRequest({ ...data, headers: headersWithAuth })

}
