import { classNames } from 'primereact/utils'
import { NavLink, NavLinkProps } from 'react-router-dom'

export const MenuLink = ({
  children,
  className,
  ...props
}: NavLinkProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => classNames(
        `${className}`,
        'w-full inline-block',
        'hover:bg-secondary/10',
        {
          'bg-secondary/10': isActive
        }
      )}
    >
      {children}
    </NavLink>
  )
}