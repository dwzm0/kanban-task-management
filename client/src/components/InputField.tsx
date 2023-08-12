import React from 'react'
import { StyledInputField } from './styled/InputField.styled'
import Input from './Input'
import CrossIcon from './icons/CrossIcon'
import {
  type FieldValues,
  type DeepMap,
  type FieldError, type RegisterOptions, type UseFormRegister
} from 'react-hook-form/dist/types'

interface InputFieldProps<TFormValues extends FieldValues> {
  type: string
  name: string
  index: number
  placeholder?: string
  handelInputDelete: (index: number) => void
  register?: UseFormRegister<Record<string, unknown>>
  rules?: RegisterOptions
  errors?: Partial<DeepMap<TFormValues, FieldError>>
}

const InputField = <TFormValues extends Record<string, unknown>>({
  type,
  handelInputDelete,
  name,
  index,
  placeholder,
  register,
  rules,
  errors
}: InputFieldProps<TFormValues>): JSX.Element => {
  return (
    <StyledInputField>
        <Input name={name} type={type}
               placeholder={placeholder} register={register}
               rules={rules} errors={errors}
                />
        <CrossIcon index={index} handelInputDelete={handelInputDelete}/>
    </StyledInputField>
  )
}

export default InputField
