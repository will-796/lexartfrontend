
import { classNames } from 'primereact/utils'
import { ButtonBack } from '@presentation/components/common/ButtonBack'
import { ProductsForm } from '@presentation/components/forms/ProductsForm'

export const NewProduct = () => {

  return (

    <div className={classNames(
      'flex flex-col w-full pt-4 px-2 gap-4 min-h-full',
      'sm:p-4 sm:gap-6 lg:p-6'
    )}>
      <div className='flex w-full justify-between items-center'>
        <div className='flex gap items-center'>
          <ButtonBack url='/produtos' />
          <p className='text-h2 font-bold px-3 sm:p-0 md:text-h1'>Novo produto</p>
        </div>
      </div>
      <ProductsForm />
    </div>

  )
}
