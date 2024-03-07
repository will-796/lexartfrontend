import { useState } from 'react'
import { MenuLink } from './MenuLink'
import { classNames } from 'primereact/utils'
import { NavLinkProps } from 'react-router-dom'

type MenuAccordionItems = NavLinkProps & {
  label: string
}

type MenuAccordionProps = {
  title: string
  icon?: string
  items: MenuAccordionItems[]
  menuToggle: boolean
}

export const MenuAccordion = ({
  title,
  items,
  icon,
  menuToggle
}: MenuAccordionProps) => {
  const [isOpen, toggleAccordion] = useState(false)

  return (
    <>
      <div className='flex items-center gap-2 px-2 py-3 justify-between'>
        <i className={classNames(
          icon,
          '!text-icon-lg text-primary pl-1 sm:max-xl:pr-4'
        )} />
        <span className='grow'>{title}</span>
        <i
          className={classNames(
            'icon-chevron-down icon-base text-secondary cursor-pointer',
            'hover:bg-secondary/10 hover:rounded-full',
            {
              'rotate-180': isOpen
            }
          )}
          onClick={() => toggleAccordion(n => !n)}
        />
      </div>
      <ul className={classNames(
        'text-sm divide-y divide-coolgray overflow-hidden transition-[max-height] duration-500',
        {
          'max-h-80': isOpen,
          'max-h-0': !isOpen,
          'sm:max-lg:max-h-0 sm:max-lg:duration-300': isOpen && !menuToggle,
        }
      )}>
        {items.length && items.map(({ label, to }) => (
          <li key={`${label}${to}`}>
            <MenuLink to={to} className="pl-[2.375rem] py-3 pr-2">
              <span>{label}</span>
            </MenuLink>
          </li>
        ))}
      </ul>
    </>
  )
}