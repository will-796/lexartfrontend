import axios, { AxiosRequestConfig } from 'axios'



export const httpRequest = async (data: AxiosRequestConfig) => {
  const apiServer = import.meta.env.VITE_API_SERVER || 'localhost:3000'
  let axiosResponse

  try {
    axiosResponse = await axios.request({
      url: `http://${apiServer}${data.url}`,
      method: data.method,
      headers: {
        ...(data.headers || {})
      },
      data: data.data
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