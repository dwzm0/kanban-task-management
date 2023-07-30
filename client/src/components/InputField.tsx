/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react'
import { StyledInputField } from './styled/InputField.styled'
import Input from './Input'
import CrossIcon from './icons/CrossIcon'

interface InputFieldProps {
  inputType: string
  handelInputDelete: (index: number) => void
  defaultValue: string
  inputName: string
  index: number
}

const InputField = ({ inputType, defaultValue, handelInputDelete, inputName, index }: InputFieldProps): JSX.Element => {
  return (
    <StyledInputField>
        <Input inputName={inputName} inputType={inputType} defaultValue={defaultValue} />
        <CrossIcon index={index} handelInputDelete={handelInputDelete}/>
    </StyledInputField>
  )
}

export default InputField
