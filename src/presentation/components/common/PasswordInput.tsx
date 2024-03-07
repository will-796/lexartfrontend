import { classNames } from 'primereact/utils'
import { ForwardedRef, InputHTMLAttributes, MutableRefObject, forwardRef, useState } from 'react'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string
  icon?: boolean
  error?: string
}

export const PasswordInput = forwardRef(
  /**
  * PasswordInput React component.
  * @param {PasswordInputProps & import('react').InputHTMLAttributes<HTMLInputElement>} param
  * @param {import('react').Ref<HTMLInputElement>} ref 
  * 
  * @returns {JSX.Element}
  */
  function PasswordInput({
    title,
    icon,
    error,
    ...props
  }: PasswordInputProps, ref: ForwardedRef<HTMLInputElement>) {
    const [isVisible, toggleVisible] = useState(false)
    const inputRef = ref as MutableRefObject<HTMLInputElement> | null

    return (
      <label
        htmlFor={props.id}
        className="flex flex-col gap-2"
        onClick={() => inputRef?.current.focus()}
      >
        <span className='font-normal leading-[140%]'>{title}</span>
        <div className="relative">
          <input
            ref={ref}
            type={isVisible ? 'text' : 'password'}
            {...props}
            data-error={!!error}
            readOnly
            onFocus={e => { e.target.readOnly = false }}
            className={classNames(
              'py-3 px-4 bg-secondary/5 appearance-none focus:outline-none w-full',
              'text-normal leading-[140%] font-normal rounded-md',
              'border-2 border-white',
              'data-error:border-alert data-error:rounded'
            )}
          />
          {
            icon && (
              <i
                className={classNames(
                  {
                    'icon-eye': isVisible,
                    'icon-eye-off': !isVisible
                  },
                  '!text-icon absolute inset-y-0 right-4 flex items-center cursor-pointer'
                )}
                onClick={() => toggleVisible(n => !n)}
              />
            )
          }
        </div>
        <span className='-mt-1 text-sm text-alert'>
          {error ? error : <>&nbsp;</>}
        </span>
      </label>
    )
  })