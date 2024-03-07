import { addProduct } from '@data/products/addProduct'
import { ActionFunctionArgs } from 'react-router-dom'
import { redirect } from 'react-router-dom'

export const createProductAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.json()


  try {
    await addProduct({
      ...formData,
    })
    return redirect('/produtos')
  } catch (err) {
    if (err instanceof Error) {
      console.log('entrou err: ' + err.message)
      return {
        message: err.message
      }
    }
  }
}