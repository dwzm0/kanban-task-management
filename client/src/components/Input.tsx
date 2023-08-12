/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { StyledInput, StyledErrorMsg } from './styled/Input.styled'
import { TextM } from 'src/globalStyle'
import { type UseFormRegister } from 'react-hook-form/dist/types/form'
import {
  type Path,
  type FieldValues,
  type DeepMap,
  type FieldError,
  type RegisterOptions
} from 'react-hook-form'
import { get } from 'lodash'
import { ErrorMessage } from '@hookform/error-message'

interface InputProps {
  label?: string
  type: string
  name: string
  placeholder?: string
}

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  register?: UseFormRegister<TFormValues>
  rules?: RegisterOptions
  errors?: Partial<DeepMap<TFormValues, FieldError>>
} & Omit<InputProps, 'name'>

const Input = <TFormValues extends Record<string, unknown>>({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  rules
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = get(errors, name)
  console.log(ErrorMessage)
  const hasError = !!(errors && errorMessages)
  return (
        <StyledInput redBorder={!!hasError}>
          {label
            ? <label htmlFor={name}>
              <TextM>{label}</TextM>
            </label>
            : null
          }
          <input type={type}
                 name={name} placeholder={placeholder}
                 {...(register?.(name, rules))}
                 />

          {hasError && <ErrorMessage
              errors={errors}
              name={name as any}
              render={({ message }) => (
                <StyledErrorMsg>
                  {message}
                </StyledErrorMsg>
              )}
      />}

        </StyledInput>
  )
}

export default Input
