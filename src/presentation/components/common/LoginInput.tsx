import { ForwardedRef, InputHTMLAttributes, MutableRefObject, forwardRef } from 'react'
import { classNames } from 'primereact/utils'

type LoginInputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string
  icon?: string
  error?: string
}

export const LoginInput = forwardRef(
  function LoginInput({
    title,
    icon,
    error,
    ...props
  }: LoginInputProps, ref: ForwardedRef<HTMLInputElement>) {
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
            type='email'
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
              <i className={classNames(
                `${icon}`,
                '!text-icon absolute inset-y-0 right-4 flex items-center'
              )} />
            )
          }
        </div>
        <span className='-mt-1 text-sm text-alert'>
          {error ? error : <>&nbsp;</>}
        </span>
      </label>
    )
  })