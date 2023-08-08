/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react'
import { StyledInputField } from './styled/InputField.styled'
import Input from './Input'
import CrossIcon from './icons/CrossIcon'
import { type UseFormRegister } from 'react-hook-form/dist/types'

interface InputFieldProps {
  type: string
  name: string
  defaultValue?: string
  id: string
  placeholder?: string
  handelInputDelete: (id: string) => void
  register?: UseFormRegister<Record<string, unknown>>
}

const InputField = ({
  type,
  defaultValue,
  handelInputDelete,
  name,
  id,
  placeholder,
  register
}: InputFieldProps): JSX.Element => {
  return (
    <StyledInputField>
        <Input name={name} type={type}
               defaultValue={defaultValue}
               placeholder={placeholder} register={register} />
        <CrossIcon id={id} handelInputDelete={handelInputDelete}/>
    </StyledInputField>
  )
}

export default InputField
