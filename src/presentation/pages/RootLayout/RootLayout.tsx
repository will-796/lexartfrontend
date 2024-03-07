import { Outlet } from 'react-router-dom'
import { Menu } from '@presentation/components'
import { classNames } from 'primereact/utils'
import { ConfirmDialog } from 'primereact/confirmdialog'

export const RootLayout = () => {
  return (
    <main className={classNames(
      'flex flex-col w-full min-h-screen max-w-[90rem] m-auto bg-background',
      'sm:flex-row',
      'xl:pl-2'
    )}>
      <Menu />

      <section className='grow pt-[52px] sm:pt-0 sm:max-lg:pl-16 m-10'>
        <Outlet />
      </section>
      <ConfirmDialog />
    </main>
  )
}