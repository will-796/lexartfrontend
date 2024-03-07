import axios, { AxiosRequestConfig } from 'axios'


export const httpRequest = async (data: AxiosRequestConfig) => {
  const apiServer = import.meta.env.VITE_API_SERVER 
  let axiosResponse
  try {
    axiosResponse = await axios.request({
      url: `${apiServer}${data.url}`,
      method: data.method,
      headers: {
        ...(data.headers || {})
      },
      data: data.data,
    })

  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      axiosResponse = error.response
    }
    else {
      axiosResponse = {
        status: 500,
        data: {
          message: 'Algo de errado aconteceu. Tente novamente em breve.'
        }
      } 
    }
  }

  return {
    statusCode: axiosResponse.status,
    body: axiosResponse.data
  }
}