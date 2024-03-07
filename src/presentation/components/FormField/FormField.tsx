import { classNames } from 'primereact/utils'
import { HTMLAttributes, ReactElement, cloneElement } from 'react'

type TextInputProps = HTMLAttributes<HTMLElement> & {
  children: ReactElement
  title: string
  icon?: string
  error?: string
}

export const FormField = ({
  children,
  title,
  icon,
  error,
  className,
  ...props
}: TextInputProps) => {
  return (
    <div className={classNames(
      className,
      'flex gap-2'
    )}>

      {
        icon && (
          <p className='p-3'>
            <i className={`${icon} !text-icon-lg text-primary`} />
          </p>
        )
      }
      <label htmlFor={props.id} className={classNames(
        'w-full flex flex-col'
      )}>
        <span className='text-sm leading-[140%] text-secondary/50 block'>{title}</span>

        {cloneElement(children, { error, ...props })}

        <span className="text-sm text-alert leading-[140%] pl-1">
          {error && error}
        </span>
      </label>
    </div>
  )
}