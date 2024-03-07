import { classNames } from 'primereact/utils'
import { ForwardedRef, forwardRef } from 'react'
import { InputNumber, InputNumberProps } from 'primereact/inputnumber'

type NumberInputProps = InputNumberProps & {
  error?: string
}

export const NumberInput = forwardRef(
  function NumberInput({
    error,
    ...props
  }: NumberInputProps, ref: ForwardedRef<HTMLInputElement>) {
    return (
      <InputNumber
        inputRef={ref}
        id={props.id}
        value={props.value}
        data-error={!!error}
        {...props}
        pt={{
          root: () => ({
            className: classNames(
              'rounded w-full text-base font-bold appearance-none text-secondary placeholder:text-secondary/50 focus-within:outline focus-within:outline-2',
              '[&_input]:border [&_input]:border-white',
              'data-error:[&_input]:border-alert data-error:[&_input]:rounded',
              '[&_input]:w-full [&_input]:p-2 [&_input]:placeholder:text-secondary/50 focus:[&_input]:outline-none'
            )
          }),
        }}
      />
    )
  }) 