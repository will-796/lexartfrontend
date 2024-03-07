import { NavLink, Outlet } from 'react-router-dom'

import { classNames } from 'primereact/utils'

export const Dashboard = () => {
  return (
    <>
      <div className={classNames(
        'flex flex-col w-full pt-4 gap-4 min-h-full',
        'sm:p-4 sm:gap-6 lg:p-6'
      )}>
        <p className='text-h2 font-bold px-3 sm:p-0 md:text-h1'>Esteira</p>
        <section className={classNames(
          'flex flex-col h-fit justify-between',
          'sm:border-b border-secondary/10 sm:flex-row sm:w-full'
        )}>
          <div className={classNames(
            'flex border-b border-secondary/10 gap-6 px-3 text-sm font-medium',
            'sm:p-0 sm:text-normal sm:border-none'
          )}>
            <NavLink
              to={`/dashboard${location.search}`}
              end
              className={({ isActive }) => classNames(
                'py-3',
                'md:py-4',
                {
                  'border-b-2 border-primary text-primary': isActive
                }
              )}
            >
              Dashboard
            </NavLink>
            <NavLink
              to={`/produtos`}
              end
              className={({ isActive }) => classNames(
                'py-3',
                'md:py-4',
                {
                  'border-b-2 border-primary text-primary': isActive
                }
              )}
            >
              Produtos
            </NavLink>
          </div>

        </section>
        <Outlet />
      </div>
    </>
  )
}