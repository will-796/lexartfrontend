import { classNames } from 'primereact/utils'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type CardProps = {
  children: ReactNode
  to?: string
  className: string
}
export const Card = ({
  children,
  to,
  className
}: CardProps) => {
  const navigate = useNavigate()
  return (
    <button className={classNames(
      'flex rounded bg-card/5 hover:bg-primary/5 align-center',
      className,
      {
        'cursor-default': !to
      }
    )}
      onClick={() => { if (to) navigate(to) }}
    >

      {children}

    </button>
  )
}