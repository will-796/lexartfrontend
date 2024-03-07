import { classNames } from 'primereact/utils'
import { ForwardedRef, forwardRef } from 'react'
import { InputText, InputTextPassThroughMethodOptions, InputTextProps } from 'primereact/inputtext'

type TextInputProps = InputTextProps & {
  error?: string
}

export const TextInput = forwardRef(
  function TextInput({
    error,
    ...props
  }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) {
    return (
      <InputText
        ref={ref}
        id={props.id}
        value={props.value}
        autoComplete='off'
        data-error={!!error}
        {...props}
        pt={{
          root: ({ props }: InputTextPassThroughMethodOptions) => ({
            className: classNames(
              'rounded w-full text-base font-bold appearance-none text-secondary placeholder:text-secondary/50 focus:outline-secondary',
              'border border-white p-2 bg-white',
              'data-error:border-alert data-error:rounded',
              {
                'opacity-50': props.disabled
              }
            )
          })
        }}
      />
    )
  }) 