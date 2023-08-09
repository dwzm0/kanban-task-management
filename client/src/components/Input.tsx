/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { StyledInput } from './styled/Input.styled'
import { TextM } from 'src/globalStyle'
import { type UseFormRegister } from 'react-hook-form/dist/types/form'
import { type Path, type FieldValues } from 'react-hook-form'

interface InputProps {
  label?: string
  type: string
  name: string
  placeholder?: string
}

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  register?: UseFormRegister<TFormValues>
} & Omit<InputProps, 'name'>

const Input = <TFormValues extends Record<string, unknown>>({
  label,
  type,
  name,
  placeholder,
  register
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
        <StyledInput>
          {label
            ? <label htmlFor={name}>
              <TextM>{label}</TextM>
            </label>
            : null
          }
          <input type={type}
                 name={name} placeholder={placeholder}
                 {...(register?.(name))}
                 />
        </StyledInput>
  )
}

export default Input
