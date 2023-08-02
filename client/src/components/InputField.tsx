/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react'
import { StyledInputField } from './styled/InputField.styled'
import Input from './Input'
import CrossIcon from './icons/CrossIcon'

interface InputFieldProps {
  inputType: string
  handelInputDelete: (id: string) => void
  defaultValue: string
  inputName: string
  id: string
}

const InputField = ({ inputType, defaultValue, handelInputDelete, inputName, id }: InputFieldProps): JSX.Element => {
  return (
    <StyledInputField>
        <Input inputName={inputName} inputType={inputType} defaultValue={defaultValue} />
        <CrossIcon id={id} handelInputDelete={handelInputDelete}/>
    </StyledInputField>
  )
}

export default InputField
