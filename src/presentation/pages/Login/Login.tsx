import { AuthParams } from '@domain/usecases'
import { Button, LoginInput, PasswordInput } from '@presentation/components/common'
import { classNames } from 'primereact/utils'
import { ChangeEvent } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link, useActionData, useNavigation, useSubmit } from 'react-router-dom'

type ErrorType = {
  message?: string
}

export const Login = () => {
  const submit = useSubmit()
  const error = useActionData() as ErrorType
  const navigation = useNavigation()

  const {
    handleSubmit,
    control,
    formState: {
      errors,
    }
  } = useForm({
    defaultValues: {
      email: null,
      password: null,
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  })

  const submitHandler = (data: AuthParams) => {
    submit(data, {
      action: '/login',
      method: 'post'
    })
  }

  return (
    <main className="flex w-full h-screen justify-center items-center bg-secondary p-4">
      <section className={classNames(
        'bg-white px-4 py-8 flex flex-col items-center gap-4 w-full rounded',
        'md:w-[680px] md:p-20 md:gap-6'
      )}>
        <div className="flex flex-col items-center gap-2">
          <p className={classNames(
            'text-2xl font-bold leading-[110%]',
            'md:text-h2'
          )}>Seja bem vindo</p>

          <p className={classNames(
            'font-normal leading-[140%]',
            'md:text-lg'
          )}>Faça o login para continuar</p>
        </div>
        <span className="text-alert text-center leading-[140%] md:text-lg md:leading-[140%]">
          {error && error.message}
        </span>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className={classNames(
            'flex flex-col gap-4 w-full',
            'md:w-[32.5rem]',
            'sm:pt-6'
          )}
          noValidate
        >
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Informe seu e-mail.',

            }}
            render={({ field }) => (
              <LoginInput
                id={field.name}
                name={field.name}
                placeholder='Seu e-mail'
                title='Email'
                onChange={(e) => field.onChange(e.target.value)}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={{
              required: 'Informe sua senha.'
            }}
            render={({ field }) => (
              <PasswordInput
                id={field.name}
                name={field.name}
                placeholder='Sua senha'
                title="Senha"
                icon
                onChange={(e: ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value)}
                error={errors.password?.message}
              />
            )}
          />

          <div className='flex justify-end text-base'>
            <Link to="/registro">
              <span className='font-normal leading-[140%]'>Cliente novo? Cadastre-se</span>
            </Link>
          </div>
          <Button
            label='Log in'
            size='lg'
            loading={navigation.state !== 'idle'}
          />
        </form>
      </section>
    </main>
  )
}