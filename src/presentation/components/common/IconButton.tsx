import { classNames } from 'primereact/utils'
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  rounded?: boolean
  text?: boolean
  severity?: 'muted'
  size?: 'lg' | 'md' | 'sm'
  icon: string,
  hover?: boolean
}

export const IconButton = forwardRef(
  function IconButton({
    rounded,
    text,
    severity,
    size,
    icon,
    hover,
    ...props
  }: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
    return (
      <button
        ref={ref}
        {...props}
        className={classNames(
          'w-12 h-12',
          {
            'w-12 h-12': !size,
            'w-6 h-6': size === 'sm',
          },
          {
            'rounded': !rounded,
            'rounded-full': rounded
          },
          {
            'bg-primary': !(severity === 'muted') && !text,
            'bg-coolgray': severity === 'muted' && !text,
            'bg-none': text
          }
        )}
      >
        <i className={classNames(
          icon,
          {
            '!text-icon-lg': !size,
            '!text-icon-sm': size === 'sm',
          },
          {
            'text-white': !(severity === 'muted') && !text,
            'text-coolgray30': severity === 'muted',
            'text-primary hover:text-secondary': !(severity === 'muted') && text,
            'hover:text-primary': hover
          }
        )} />
      </button>
    )
  }) 