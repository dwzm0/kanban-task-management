/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react'
import { StyledInputField } from './styled/InputField.styled'
import Input from './Input'
import CrossIcon from './icons/CrossIcon'

interface InputFieldProps {
  type: string
  name: string
  defaultValue?: string
  id: string
  placeholder?: string
  handelInputDelete: (id: string) => void
}

const InputField = ({
  type,
  defaultValue,
  handelInputDelete,
  name,
  id,
  placeholder
}: InputFieldProps): JSX.Element => {
  return (
    <StyledInputField>
        <Input name={name} type={type}
               defaultValue={defaultValue}
               placeholder={placeholder} />
        <CrossIcon id={id} handelInputDelete={handelInputDelete}/>
    </StyledInputField>
  )
}

export default InputField
